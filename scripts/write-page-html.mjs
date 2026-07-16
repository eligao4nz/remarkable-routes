import { writeFile } from "node:fs/promises";
import { publicRoutes, siteUrl } from "./public-routes.mjs";

const socialImage = `${siteUrl}/gallery/rrhomepagepic2.png`;
const logoImage = `${siteUrl}/gallery/logo.png`;

const entityIds = {
  organization: `${siteUrl}/#organization`,
  business: `${siteUrl}/#travelagency`,
  website: `${siteUrl}/#website`,
  logo: `${siteUrl}/#logo`,
};

const routeLabels = {
  "/": "Home",
  "/routes/": "Routes",
  "/spring/": "Spring",
  "/summer/": "Summer",
  "/autumn/": "Autumn",
  "/winter/": "Winter",
  "/our-team/": "Our Team",
  "/airport-transfers/": "Airport Transfers",
  "/private-charters/": "Private Charters",
  "/queenstown-private-tours/": "Queenstown Private Tours",
  "/activities/": "Activity Bookings",
  "/special-offers/": "Special Offers",
};

const pageSchema = {
  "/": {
    pageType: "WebPage",
  },
  "/routes/": {
    pageType: "CollectionPage",
    breadcrumbs: ["/", "/routes/"],
  },
  "/spring/": {
    pageType: "CollectionPage",
    breadcrumbs: ["/", "/routes/", "/spring/"],
  },
  "/summer/": {
    pageType: "CollectionPage",
    breadcrumbs: ["/", "/routes/", "/summer/"],
  },
  "/autumn/": {
    pageType: "CollectionPage",
    breadcrumbs: ["/", "/routes/", "/autumn/"],
  },
  "/winter/": {
    pageType: "CollectionPage",
    breadcrumbs: ["/", "/routes/", "/winter/"],
  },
  "/our-team/": {
    pageType: "AboutPage",
    breadcrumbs: ["/", "/our-team/"],
    people: [
      {
        id: "eli-gao",
        name: "Eli Gao",
        jobTitle: "Multi-Day Driver Guide",
        image: `${siteUrl}/gallery/eli-gao-glacier.jpg`,
        description:
          "Multi-day private tours across the South Island, long-distance driving, storytelling, photography, and flexible itineraries.",
      },
      {
        id: "cynthia",
        name: "Cynthia",
        jobTitle: "Hiking, Cycling and Day Tour Guide",
        image: `${siteUrl}/gallery/cynthia.jpg`,
        description:
          "Hiking, cycling, day tours, scenic rides, walking tracks, and Central Otago winery routes.",
      },
      {
        id: "fernando",
        name: "Fernando",
        jobTitle: "Food, Culture and Day Tour Guide",
        image: `${siteUrl}/gallery/fernando.jpg`,
        description:
          "Food, culture, day tours, local restaurants, hidden favourites, and Queenstown nights out.",
      },
    ],
  },
  "/airport-transfers/": {
    pageType: "WebPage",
    breadcrumbs: ["/", "Services", "/airport-transfers/"],
    service: {
      name: "Queenstown Airport Transfers",
      serviceType: "Private Airport Transfers",
      areaServed: "Queenstown, New Zealand",
    },
  },
  "/private-charters/": {
    pageType: "WebPage",
    breadcrumbs: ["/", "Services", "/private-charters/"],
    service: {
      name: "Queenstown Private Charters",
      serviceType: "Queenstown Private Charters",
      areaServed: "Queenstown and the South Island, New Zealand",
    },
  },
  "/queenstown-private-tours/": {
    pageType: "WebPage",
    breadcrumbs: ["/", "Services", "/queenstown-private-tours/"],
    service: {
      name: "Queenstown Private Tours",
      serviceType: "Queenstown Private Tours",
      areaServed: "Queenstown and the South Island, New Zealand",
    },
  },
  "/activities/": {
    pageType: "WebPage",
    breadcrumbs: ["/", "Services", "/activities/"],
    service: {
      name: "Queenstown Activity Bookings",
      serviceType: "Activity Bookings",
      areaServed: "Queenstown and New Zealand",
    },
  },
  "/special-offers/": {
    pageType: "WebPage",
    breadcrumbs: ["/", "/special-offers/"],
  },
};

const fallbackNavigation = [
  { label: "Home", path: "/" },
  {
    label: "Routes",
    path: "/routes/",
    children: [
      { label: "Spring", path: "/spring/" },
      { label: "Summer", path: "/summer/" },
      { label: "Autumn", path: "/autumn/" },
      { label: "Winter", path: "/winter/" },
    ],
  },
  {
    label: "Services",
    children: [
      { label: "Airport Transfers", path: "/airport-transfers/" },
      { label: "Private Charters", path: "/private-charters/" },
      { label: "Queenstown Private Tours", path: "/queenstown-private-tours/" },
      { label: "Activity Bookings", path: "/activities/" },
      { label: "Special Offers", path: "/special-offers/" },
    ],
  },
  { label: "Our Team", path: "/our-team/" },
];

const pageSeo = {
  "/": {
    title: "Remarkable Routes | Queenstown Private Tours",
    description:
      "Remarkable Routes creates private luxury adventure tours from Queenstown to Milford Sound, Glenorchy, Wanaka, Lake Hawea, and custom South Island destinations.",
    h1: "Queenstown Private Tours and South Island Journeys",
    intro:
      "Remarkable Routes is a Queenstown-based private tour company run by locals who love the outdoors, good food, quiet viewpoints, snow days, lake days, and the hidden corners that rarely make it into standard itineraries.",
    sections: [
      {
        h2: "Guest Reviews",
        text: "Private transfers, day trips, activity bookings, and custom South Island routes are planned around local knowledge and a relaxed pace.",
      },
    ],
  },
  "/routes/": {
    title: "South Island Routes by Season | Remarkable Routes",
    description:
      "Explore Remarkable Routes seasonal South Island route ideas from Queenstown, including spring, summer, autumn, and winter private tour inspiration.",
    h1: "Every season tells a different South Island story.",
    intro:
      "Start with the season you're visiting, and discover the routes, landscapes, and experiences locals recommend most.",
    sections: [
      { h2: "Spring", text: "Glenorchy, Tekapo lupins, cherry blossom, and soft alpine light." },
      { h2: "Summer", text: "Milford Sound, waterfalls, kayaking options, lake time, and long golden-hour drives." },
      { h2: "Autumn", text: "Arrowtown colour, Lake Hayes, Central Otago, orchard roads, and wine country." },
      { h2: "Winter", text: "Snow fields, hot pools, stargazing, nightlife, and alpine winter scenery." },
    ],
  },
  "/spring/": {
    title: "Spring Routes | Remarkable Routes",
    description:
      "Spring private route ideas from Queenstown, including Glenorchy valleys, Lake Tekapo lupins, cherry blossom streets, and soft alpine light.",
    h1: "Spring",
    intro:
      "Spring is made for Glenorchy's green valleys, Lake Tekapo lupins, snow still sitting high above the roads, and slower photo-rich days before peak season.",
    sections: [
      { h2: "Spring routes for Glenorchy, Tekapo, flowers, and soft alpine light.", text: "Route ideas include Glenorchy spring valley, Lake Tekapo lupin journey, and cherry blossom and garden pockets." },
    ],
  },
  "/summer/": {
    title: "Summer Routes | Remarkable Routes",
    description:
      "Summer private route ideas from Queenstown, including Milford Sound, waterfalls, kayaking, lake time, cherries, and long golden-hour drives.",
    h1: "Summer",
    intro:
      "Summer opens up bigger days: Milford Sound waterfalls, lake cruises, kayaking options, swim stops, picnic viewpoints, and late golden-hour drives.",
    sections: [
      { h2: "Summer routes for Milford Sound, waterfalls, kayaking, and lake time.", text: "Route ideas include Queenstown lake and water days, Cromwell cherries and wine country, Te Anau, Milford Sound, and South Coast extensions." },
    ],
  },
  "/autumn/": {
    title: "Autumn Routes | Remarkable Routes",
    description:
      "Autumn private route ideas from Queenstown, including Arrowtown gold, Lake Hayes, Central Otago, orchard roads, and photography-rich landscapes.",
    h1: "Autumn",
    intro:
      "Autumn is Queenstown's most photogenic slow season: Arrowtown turns gold, Central Otago softens, and the wine roads feel made for private touring.",
    sections: [
      { h2: "Autumn routes for Arrowtown colour and Central Otago depth.", text: "Route ideas include Arrowtown autumn colour walks, Central Otago winery trails, and Clyde cycling days." },
    ],
  },
  "/winter/": {
    title: "Winter Routes | Remarkable Routes",
    description:
      "Winter private route ideas from Queenstown, including ski fields, snow play, stargazing, aurora chances, nightlife, and alpine winter scenery.",
    h1: "Winter",
    intro:
      "Winter in Queenstown is not only for skiers. Snow scenery, hot pools, early dark skies, lakefront hot chocolate, and lively nights can all be shaped into a private cold-season route.",
    sections: [
      { h2: "Winter routes for Queenstown snow views, hot pools, stargazing, and nightlife.", text: "Route ideas include Queenstown snow fields, hot pools, stargazing, and winter nightlife." },
    ],
  },
  "/our-team/": {
    title: "Our Team | Remarkable Routes",
    description:
      "Meet Eli Gao, the Remarkable Routes founder and private driver-guide with more than a decade of New Zealand tourism experience.",
    h1: "Meet the Team",
    intro:
      "Remarkable Routes is guided by a small local team with different strengths across multi-day touring, hiking, cycling, food, culture, and relaxed Queenstown day trips.",
    sections: [
      { h2: "Eli Gao", text: "Multi-day private tours across the South Island, long-distance driving, storytelling, photography, and flexible itineraries." },
      { h2: "Cynthia", text: "Hiking, cycling, day tours, scenic rides, walking tracks, and Central Otago winery routes." },
      { h2: "Fernando", text: "Food, culture, day tours, local restaurants, hidden favourites, and Queenstown nights out." },
    ],
  },
  "/airport-transfers/": {
    title: "Queenstown Airport Transfers | Remarkable Routes",
    description:
      "Book a private Queenstown Airport transfer with a local driver, flight-aware scheduling, door-to-door service, and a comfortable Mercedes people mover.",
    h1: "Queenstown Airport Transfers",
    intro:
      "Door-to-door airport transfers between Queenstown Airport and your hotel, accommodation or holiday home, timed around your flight and group pace.",
    sections: [
      { h2: "Why Choose Our Airport Transfers", text: "Private door-to-door service, local drivers, flight-aware scheduling, and a comfortable 7-seat Mercedes people mover." },
      { h2: "Airport Transfer FAQs", text: "Transfer prices vary by destination, and pickup details are confirmed before travel." },
    ],
  },
  "/private-charters/": {
    title: "Queenstown Private Charters | Remarkable Routes",
    description:
      "Book a private Queenstown charter with a local driver-guide and a flexible itinerary to Glenorchy, Wanaka, Milford Sound, wineries, and scenic stops.",
    h1: "Queenstown Private Charters",
    intro:
      "Flexible private touring from Queenstown for scenic routes, seasonal stops, food, wine, photography, and easy local planning.",
    sections: [
      { h2: "Popular Charter Destinations", text: "Glenorchy, Arrowtown, Wanaka, Cardrona, Cromwell, Te Anau, and Milford Sound." },
      { h2: "Why Choose a Private Charter", text: "Flexible itineraries, scenic stops, photography opportunities, local recommendations, and private small-group travel." },
    ],
  },
  "/queenstown-private-tours/": {
    title: "Queenstown Private Tours | Remarkable Routes",
    description:
      "Plan a Queenstown private tour with a local driver-guide and a flexible itinerary to Glenorchy, Wanaka, Arrowtown, Milford Sound, and beyond.",
    h1: "Queenstown Private Tours",
    intro:
      "Explore Queenstown and the South Island on a private tour shaped around your pace, interests, and available time.",
    sections: [
      { h2: "Popular Queenstown Private Tour Routes", text: "Glenorchy, Wanaka, Arrowtown, and Milford Sound can be planned as private routes from Queenstown." },
      { h2: "Private Touring, Planned Around You", text: "Plan around arrival time, must-see places, activity bookings, weather changes, and preferred pace." },
    ],
  },
  "/activities/": {
    title: "Queenstown Activity Bookings | Remarkable Routes",
    description:
      "Book Queenstown and New Zealand activities through Remarkable Routes, including Skyline Gondola, TSS Earnslaw, helicopter experiences, and seasonal activity offers.",
    h1: "Activity Bookings",
    intro:
      "Most New Zealand activities can be booked at 5% off, including Queenstown Skyline Gondola, the TSS Earnslaw steamship, helicopter experiences, and more.",
    sections: [
      { h2: "Activity Booking Details", text: "Some activities can be booked any time, some need advance booking, and some need availability checked after the request is placed." },
    ],
  },
  "/special-offers/": {
    title: "Queenstown Special Offers | Remarkable Routes",
    description:
      "Ask Remarkable Routes for current Queenstown special offers across private tours, transfers, activity bookings, snow days, wine routes, and lake experiences.",
    h1: "Latest Discounts",
    intro:
      "Ask us for the current seasonal offers across private tours, transfers, activity bookings, snow days, wine routes, and lake experiences.",
    sections: [
      { h2: "Seasonal Specials", text: "Offers change with weather, partner availability, and travel dates." },
    ],
  },
};

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function absoluteUrl(path) {
  return path === "/" ? `${siteUrl}/` : `${siteUrl}${path}`;
}

function renderJsonForHtml(value) {
  return JSON.stringify(value, null, 2).replaceAll("</", "<\\/");
}

function sharedSchemaEntities() {
  return [
    {
      "@type": "Organization",
      "@id": entityIds.organization,
      name: "Remarkable Routes",
      url: `${siteUrl}/`,
      logo: {
        "@id": entityIds.logo,
      },
      sameAs: ["https://instagram.com/remarkableroutes"],
      email: "info@remarkableroutes.com",
    },
    {
      "@type": "ImageObject",
      "@id": entityIds.logo,
      url: logoImage,
    },
    {
      "@type": "TravelAgency",
      "@id": entityIds.business,
      name: "Remarkable Routes",
      url: `${siteUrl}/`,
      image: socialImage,
      email: "info@remarkableroutes.com",
      parentOrganization: {
        "@id": entityIds.organization,
      },
    },
    {
      "@type": "WebSite",
      "@id": entityIds.website,
      name: "Remarkable Routes",
      url: `${siteUrl}/`,
      publisher: {
        "@id": entityIds.organization,
      },
    },
  ];
}

function buildBreadcrumb(path, schemaConfig) {
  if (!schemaConfig.breadcrumbs) return null;

  return {
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(path)}#breadcrumb`,
    itemListElement: schemaConfig.breadcrumbs.map((entry, index) => {
      const isRoute = entry.startsWith("/");
      const item = {
        "@type": "ListItem",
        position: index + 1,
        name: isRoute ? routeLabels[entry] : entry,
      };

      if (isRoute) {
        item.item = absoluteUrl(entry);
      }

      return item;
    }),
  };
}

function buildPageEntity(path, page, schemaConfig) {
  const url = absoluteUrl(path);
  const entity = {
    "@type": schemaConfig.pageType,
    "@id": `${url}#webpage`,
    url,
    name: page.title,
    description: page.description,
    isPartOf: {
      "@id": entityIds.website,
    },
    publisher: {
      "@id": entityIds.organization,
    },
  };

  if (path === "/") {
    entity.mainEntity = {
      "@id": entityIds.business,
    };
  }

  if (schemaConfig.breadcrumbs) {
    entity.breadcrumb = {
      "@id": `${url}#breadcrumb`,
    };
  }

  if (schemaConfig.service) {
    entity.mainEntity = {
      "@id": `${url}#service`,
    };
  }

  if (schemaConfig.people) {
    entity.mainEntity = schemaConfig.people.map((person) => ({
      "@id": `${url}#person-${person.id}`,
    }));
  }

  return entity;
}

function buildServiceEntity(path, page, serviceConfig) {
  const url = absoluteUrl(path);
  return {
    "@type": "Service",
    "@id": `${url}#service`,
    name: serviceConfig.name,
    description: page.description,
    serviceType: serviceConfig.serviceType,
    url,
    provider: {
      "@id": entityIds.business,
    },
    areaServed: {
      "@type": "Place",
      name: serviceConfig.areaServed,
    },
  };
}

function buildPersonEntities(path, people) {
  const url = absoluteUrl(path);
  return people.map((person) => ({
    "@type": "Person",
    "@id": `${url}#person-${person.id}`,
    name: person.name,
    jobTitle: person.jobTitle,
    description: person.description,
    image: person.image,
    worksFor: {
      "@id": entityIds.business,
    },
  }));
}

function buildSchemaGraph(path, page) {
  const schemaConfig = pageSchema[path];
  if (!schemaConfig) {
    throw new Error(`Missing schema configuration for ${path}`);
  }

  const graph = [...sharedSchemaEntities(), buildPageEntity(path, page, schemaConfig)];
  const breadcrumb = buildBreadcrumb(path, schemaConfig);

  if (breadcrumb) {
    graph.push(breadcrumb);
  }

  if (schemaConfig.service) {
    graph.push(buildServiceEntity(path, page, schemaConfig.service));
  }

  if (schemaConfig.people) {
    graph.push(...buildPersonEntities(path, schemaConfig.people));
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

function renderStructuredData(path, page) {
  return `    <script type="application/ld+json">
${renderJsonForHtml(buildSchemaGraph(path, page))}
    </script>`;
}

function renderNavigationItem(item) {
  const label = escapeHtml(item.label);
  const link = item.path
    ? `<a class="font-semibold text-stone-950 transition hover:text-teal-700" href="${item.path}">${label}</a>`
    : `<span class="font-semibold text-stone-950">${label}</span>`;
  const children = item.children
    ?.map((child) => `          <li>${renderNavigationItem(child)}</li>`)
    .join("\n");

  if (!children) return link;

  return `${link}
        <ul class="mt-1 grid gap-1">
${children}
        </ul>`;
}

function renderFallbackNavigation() {
  const items = fallbackNavigation
    .map((item) => `        <li>${renderNavigationItem(item)}</li>`)
    .join("\n");

  return `      <nav class="mt-8 text-sm leading-7" aria-label="Site navigation">
        <ul class="grid gap-2">
${items}
        </ul>
      </nav>`;
}

function renderFallback(page) {
  const sections = page.sections
    .map(
      (section) => `      <section class="mt-8 border-t border-stone-200 pt-8">
        <h2 class="text-3xl font-semibold text-stone-950">${escapeHtml(section.h2)}</h2>
        <p class="mt-3 max-w-3xl leading-7 text-stone-600">${escapeHtml(section.text)}</p>
      </section>`,
    )
    .join("\n");

  return `    <main class="min-h-screen bg-stone-100 px-5 py-16 text-stone-950 sm:px-8" aria-label="Remarkable Routes page content">
      <div class="mx-auto max-w-7xl">
      <h1 class="max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl">${escapeHtml(page.h1)}</h1>
      <p class="mt-5 max-w-3xl text-lg leading-8 text-stone-600">${escapeHtml(page.intro)}</p>
${renderFallbackNavigation()}
${sections}
      </div>
    </main>`;
}

function renderHead(path, page) {
  const url = absoluteUrl(path);

  return `    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="${escapeHtml(page.description)}"
    />
    <link rel="canonical" href="${url}" />
    <meta property="og:title" content="${escapeHtml(page.title)}" />
    <meta property="og:description" content="${escapeHtml(page.description)}" />
    <meta property="og:image" content="${socialImage}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(page.title)}" />
    <meta name="twitter:description" content="${escapeHtml(page.description)}" />
    <meta name="twitter:image" content="${socialImage}" />
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
${renderStructuredData(path, page)}
    <title>${escapeHtml(page.title)}</title>`;
}

function renderPage(path) {
  const page = pageSeo[path];
  if (!page) {
    throw new Error(`Missing SEO content for ${path}`);
  }

  return `<!doctype html>
<html lang="en">
  <head>
${renderHead(path, page)}
  </head>
  <body>
    <div id="root">
${renderFallback(page)}
    </div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
`;
}

for (const route of publicRoutes) {
  await writeFile(route.inputFile, renderPage(route.path));
}

console.log(`Updated ${publicRoutes.length} page HTML files.`);
