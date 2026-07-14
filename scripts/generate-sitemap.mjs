import { stat, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { publicRoutes, siteUrl } from "./public-routes.mjs";

async function verifyRouteInputs(routes) {
  await Promise.all(
    routes.map(async ({ inputFile, path }) => {
      const filePath = join(process.cwd(), inputFile);
      try {
        const file = await stat(filePath);
        if (!file.isFile()) {
          throw new Error(`${inputFile} is not a file`);
        }
      } catch (error) {
        throw new Error(`Missing production route input for ${path}: ${inputFile}`, {
          cause: error,
        });
      }
    }),
  );
}

function renderSitemap(paths) {
  const urls = paths
    .map((path) => {
      const loc = path === "/" ? `${siteUrl}/` : `${siteUrl}${path}`;
      return `  <url>\n    <loc>${loc}</loc>\n  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

await verifyRouteInputs(publicRoutes);
const paths = publicRoutes.map(({ path }) => path);
await writeFile(join(process.cwd(), "public", "sitemap.xml"), renderSitemap(paths));
console.log(`Generated sitemap.xml with ${paths.length} URLs.`);
