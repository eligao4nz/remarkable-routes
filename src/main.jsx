import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function Icon({ children, className = "", ...props }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {children}
    </svg>
  );
}

function ArrowRight(props) {
  return (
    <Icon {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </Icon>
  );
}

function Plus(props) {
  return (
    <Icon {...props}>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </Icon>
  );
}

function Mail(props) {
  return (
    <Icon {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </Icon>
  );
}

function MapPinned(props) {
  return (
    <Icon {...props}>
      <path d="m9 18-6 3V6l6-3 6 3 6-3v15l-6 3-6-3Z" />
      <path d="M9 3v15" />
      <path d="M15 6v15" />
      <path d="M12 7.5a2.5 2.5 0 0 0-2.5 2.5c0 2 2.5 4.5 2.5 4.5s2.5-2.5 2.5-4.5A2.5 2.5 0 0 0 12 7.5Z" />
      <path d="M12 10h.01" />
    </Icon>
  );
}

function MessageCircle(props) {
  return (
    <Icon {...props}>
      <path d="M21 11.5a8.4 8.4 0 0 1-9 8.3 8.8 8.8 0 0 1-3.5-.8L3 21l1.9-5.1a8.2 8.2 0 1 1 16.1-4.4Z" />
    </Icon>
  );
}

function Mountain(props) {
  return (
    <Icon {...props}>
      <path d="m3 20 7.5-14 4.2 7.8 2-3.8L21 20H3Z" />
      <path d="m10.5 6 1.8 4h-3.9" />
    </Icon>
  );
}

function Sparkles(props) {
  return (
    <Icon {...props}>
      <path d="m12 3 1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3Z" />
      <path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" />
      <path d="m5 14 .8 2.2L8 17l-2.2.8L5 20l-.8-2.2L2 17l2.2-.8L5 14Z" />
    </Icon>
  );
}

const uploadedImages = Array.from(
  { length: 54 },
  (_, index) => `/gallery/uploaded-${String(index + 1).padStart(2, "0")}.jpg`,
);

const heroImage = "/gallery/queenstown-arrival.jpg";

const images = {
  arrowtown: uploadedImages[6],
  cardrona: uploadedImages[14],
  cardronaBasin: uploadedImages[41],
  cardronaSlope: uploadedImages[17],
  coronet: uploadedImages[44],
  cromwell: uploadedImages[35],
  clyde: uploadedImages[9],
  gibbston: uploadedImages[36],
  glenorchy: uploadedImages[30],
  kepler: uploadedImages[20],
  teAnauWide: uploadedImages[22],
  teAnauLake: uploadedImages[28],
  keplerHut: uploadedImages[21],
  keplerSouthFiord: uploadedImages[12],
  lakeHayes: uploadedImages[23],
  lakeHayesJetty: uploadedImages[29],
  lakeHayesWalk: uploadedImages[42],
  moke: uploadedImages[33],
  milford: uploadedImages[52],
  queenstown:
    heroImage,
  queenstownLake: uploadedImages[25],
  queenstownGondola: uploadedImages[11],
  remarkable: uploadedImages[46],
  tekapo: uploadedImages[38],
  treble: uploadedImages[47],
  shotoverJet: uploadedImages[3],
  shotoverJetWide: uploadedImages[15],
  summerForest: "/gallery/summer-forest-walk.jpg",
  summerLakeKayakPicnic: "/gallery/summer-lake-kayak-picnic.jpg",
  summerLakeKayakPicnicHero: "/gallery/summer-lake-kayak-picnic-hero.jpg",
  summerLakeKayakPicnicLevel: "/gallery/summer-lake-kayak-picnic-level.jpg",
  summerWaterDay01: "/gallery/summer-water-day-01.jpg",
  summerWaterDay02: "/gallery/summer-water-day-02.jpg",
  summerWaterDay03: "/gallery/summer-water-day-03.jpg",
  summerWaterDay04: "/gallery/summer-water-day-04.jpg",
  summerWaterDay05: "/gallery/summer-water-day-05.jpg",
  summerWaterDay05Fishing: "/gallery/summer-water-day-05-fishing.jpg",
  cromwellCherries01: "/gallery/cromwell-cherries-01.jpg",
  cromwellCherries02: "/gallery/cromwell-cherries-02.jpg",
  cromwellCherries03: "/gallery/cromwell-cherries-03.jpg",
  teAnauDayHike01: "/gallery/te-anau-day-hike-01.jpg",
  teAnauDayHike02: "/gallery/te-anau-day-hike-02.jpg",
  teAnauDayHike03: "/gallery/te-anau-day-hike-03.jpg",
  teAnauDayHike04: "/gallery/te-anau-day-hike-04.jpg",
  teAnauDayHike05: "/gallery/te-anau-day-hike-05.jpg",
  milfordSound01: "/gallery/milford-sound-01.jpg",
  milfordSound02: "/gallery/milford-sound-02.jpg",
  milfordSound03: "/gallery/milford-sound-03.jpg",
  milfordSound04: "/gallery/milford-sound-04.jpg",
  milfordSound05: "/gallery/milford-sound-05.jpg",
  autumnTrees: "/gallery/autumn-golden-trees.jpg",
  springDaffodils: "/gallery/spring-daffodils.jpg",
  springCherry: "/gallery/spring-cherry-queenstown.jpg",
  springCherryBlueSky: "/gallery/spring-cherry-blossom-blue-sky.jpg",
  springLakeJetty: "/gallery/spring-lake-jetty.jpg",
  glenorchyHorseLupins: "/gallery/glenorchy-horse-lupins.jpg",
  glenorchyLupinsLake: "/gallery/glenorchy-lupins-lake.jpg",
  tekapoLupinsLake: "/gallery/tekapo-lupins-lake.jpg",
  springTekapoPukakiSnowView: "/gallery/spring-tekapo-pukaki-snow-view.jpg",
  autumnHayes: uploadedImages[7],
  autumnArrowtownWalk: "/gallery/autumn-arrowtown-walk.jpg",
  autumnArrowtownHillside: "/gallery/autumn-arrowtown-hillside.jpg",
  autumnMillbrookValley: "/gallery/autumn-millbrook-valley.jpg",
  autumnLakeHayes: "/gallery/autumn-lake-hayes.jpg",
  autumnCentralOtagoSheepHills: "/gallery/autumn-central-otago-sheep-hills.jpg",
  autumnCentralOtagoLake: "/gallery/autumn-central-otago-lake.jpg",
  autumnCentralOtagoCloud: "/gallery/autumn-central-otago-cloud.jpg",
  autumnCentralOtagoTreeWalk: "/gallery/autumn-central-otago-tree-walk.jpg",
  autumnCentralOtagoBridgeMountains: "/gallery/autumn-central-otago-bridge-mountains.jpg",
  autumnClydeOrchardRow: "/gallery/autumn-clyde-orchard-row.jpg",
  autumnClydeCyclingGorge: "/gallery/autumn-clyde-cycling-gorge.jpg",
  autumnClydePoplarRoad: "/gallery/autumn-clyde-poplar-road.jpg",
  autumnClydeRuralCycling: "/gallery/autumn-clyde-rural-cycling.jpg",
  summerBluffShellBeach: "/gallery/summer-bluff-shell-beach.jpg",
  winterSkiCloudSea: "/gallery/winter-ski-field-cloud-sea.jpg",
  winterSkiSnowPlay: "/gallery/winter-ski-field-snow-play.jpg",
  winterSkiChairlift: "/gallery/winter-ski-field-chairlift.jpg",
  winterAuroraTown: "/gallery/winter-stargazing-aurora-town.jpg",
  winterAuroraLake: "/gallery/winter-stargazing-aurora-lake.jpg",
  winterStargazingVanStars: "/gallery/winter-stargazing-van-stars.jpg",
  winterNightlifeGroup: "/gallery/winter-nightlife-group.jpg",
  winterNightlifeClub: "/gallery/winter-nightlife-club.jpg",
};

const seasons = [
  {
    id: "spring",
    label: "Spring",
    months: "September - November",
    theme: "Flowers, fresh valleys, and quiet scenic roads",
    title: "Spring routes for Glenorchy, Tekapo, flowers, and soft alpine light.",
    intro:
      "Spring is made for Glenorchy's green valleys, Lake Tekapo lupins, snow still sitting high above the roads, and slower photo-rich days before peak season.",
    image:
      images.tekapo,
    heroImages: [images.springDaffodils, images.springCherry, images.springLakeJetty],
    routes: [
      {
        name: "Glenorchy & Paradise spring valley",
        description:
          "A scenic spring road day from Queenstown along Lake Wakatipu to Glenorchy and Paradise. Expect fresh green valleys, braided rivers, mountain reflections, short nature walks, and quiet photo stops before the busy summer season arrives.",
        images: [images.glenorchyHorseLupins, images.glenorchyLupinsLake],
      },
      {
        name: "Lake Tekapo lupin journey",
        description:
          "A flower-focused journey through the Mackenzie Basin when lupins are in bloom. We can build in Lake Pukaki viewpoints, Church of the Good Shepherd, easy lakeside walks, golden-hour photography, and optional stargazing if you want a longer day.",
        images: [images.tekapoLupinsLake, images.springTekapoPukakiSnowView],
      },
      {
        name: "Cherry blossom and garden pockets",
        description:
          "A gentle route for cherry blossom streets, spring gardens, lakeside walks, and local cafe stops around Queenstown, Arrowtown, and nearby residential pockets where the season feels quiet and local.",
        images: [images.springCherry, uploadedImages[47], images.springCherryBlueSky],
      },
    ],
    highlights: ["Glenorchy", "Tekapo lupins", "Cherry blossom", "Photography"],
  },
  {
    id: "summer",
    label: "Summer",
    months: "December - February",
    theme: "Long daylight, water, fiords, and lake adventures",
    title: "Summer routes for Milford Sound, waterfalls, kayaking, and lake time.",
    intro:
      "Summer opens up bigger days: Milford Sound waterfalls, lake cruises, kayaking options, swim stops, picnic viewpoints, and late golden-hour drives.",
    image:
      images.summerForest,
    heroImages: [images.summerLakeKayakPicnicLevel],
    heroImagePosition: "object-[50%_54%]",
    routes: [
      {
        name: "Queenstown lake and water day",
        description:
          "Start local with Lake Wakatipu and Queenstown's summer water energy: kayaking, Moke Lake, Lake Hayes, lake fishing, scenic cruises, jet boating, the Shark Boat, picnic coves, and golden-hour viewpoints.",
        images: [
          images.summerWaterDay01,
          images.summerWaterDay02,
          images.summerWaterDay03,
          images.summerWaterDay04,
          images.summerWaterDay05Fishing,
        ],
        imageLayout: "portrait",
      },
      {
        name: "Cromwell cherries and wine country",
        description:
          "A sunny Central Otago day through Gibbston, Bannockburn, Cromwell, and orchard country. Seasonal cherry picking, cellar doors, lakeside stops, fruit stalls, and relaxed winery lunches can all be built in.",
        images: [
          images.cromwell,
          images.cromwellCherries01,
          images.cromwellCherries02,
          images.cromwellCherries03,
        ],
        imageLayout: "portrait",
      },
      {
        name: "Te Anau day hikes, Kepler and Fiordland edge",
        description:
          "A slower gateway-to-Fiordland route with Te Anau lakefront time and well-known day hike options, including sections inspired by the Kepler Track, forest walks, birdlife, glowworm options, and quiet lake views.",
        images: [
          images.teAnauDayHike01,
          images.teAnauDayHike02,
          images.teAnauDayHike03,
          images.teAnauDayHike04,
          images.teAnauDayHike05,
        ],
        imageLayout: "portrait",
      },
      {
        name: "Milford Sound waterfalls and cruise",
        description:
          "A full scenic fiord day with rainforest, alpine road stops, mirror lakes, dramatic valley viewpoints, waterfall watching, and optional Milford Sound cruise or kayak timing depending on weather and pace.",
        images: [
          images.milfordSound01,
          images.milfordSound02,
          images.milfordSound03,
          images.milfordSound04,
          images.milfordSound05,
        ],
        imageLayout: "portrait",
      },
      {
        name: "Bluff shark cage diving extension",
        description:
          "For adventurous travellers, we can plan a serious South Coast extension toward Bluff for great white shark cage diving, coastal seafood, wild ocean scenery, and overnight routing if needed.",
        images: [images.summerBluffShellBeach],
        imageLayout: "portrait",
      },
    ],
    highlights: ["Milford Sound", "Kayaking options", "Lake days", "Late sunsets"],
  },
  {
    id: "autumn",
    label: "Autumn",
    months: "March - May",
    theme: "Arrowtown gold, Central Otago wine, and calm weather",
    title: "Autumn routes for Arrowtown colour and Central Otago depth.",
    intro:
      "Autumn is Queenstown's most photogenic slow season: Arrowtown turns gold, Central Otago softens, and the wine roads feel made for private touring.",
    image: images.autumnTrees,
    routes: [
      {
        name: "Arrowtown autumn colour walk",
        description:
          "A golden autumn loop through Arrowtown's riverside colour, Millbrook Resort, quiet resort lanes, and Lake Hayes reflections. Best for slow walking, photo stops, cafes, soft afternoon light, and an easy return from Queenstown.",
        images: [
          images.autumnArrowtownHillside,
          images.autumnMillbrookValley,
          images.autumnLakeHayes,
        ],
        imageLayout: "landscape",
      },
      {
        name: "Central Otago winery trail",
        description:
          "A private wine-country route through Gibbston, Bannockburn, Cromwell, or Bendigo. Pinot Noir, long lunches, cellar doors, lake viewpoints, and autumn vineyard colour make this one of the most relaxed seasonal days.",
        images: [
          images.autumnCentralOtagoSheepHills,
          images.autumnCentralOtagoLake,
          images.autumnCentralOtagoCloud,
          images.autumnCentralOtagoTreeWalk,
          images.autumnCentralOtagoBridgeMountains,
        ],
        imageLayout: "landscape",
      },
      {
        name: "Clyde cycling day",
        description:
          "A Central Otago cycling-focused day around Clyde and nearby trail sections. Think easy riding, river scenery, historic streets, coffee stops, and vehicle support so the day stays comfortable.",
        images: [
          images.autumnClydeOrchardRow,
          images.autumnClydeCyclingGorge,
          images.autumnClydePoplarRoad,
          images.autumnClydeRuralCycling,
        ],
        imageLayout: "portrait",
      },
    ],
    highlights: ["Arrowtown", "Central Otago", "Wine country", "Gold rush towns"],
  },
  {
    id: "winter",
    label: "Winter",
    months: "June - August",
    theme: "Snow fields, hot pools, clear stars, and Queenstown nights",
    title: "Winter routes for Queenstown snow views, hot pools, stargazing, and nightlife.",
    intro:
      "Winter in Queenstown is not only for skiers. Snow scenery, hot pools, early dark skies, lakefront hot chocolate, and lively nights can all be shaped into a private cold-season route.",
    image:
      images.milford,
    routes: [
      {
        name: "Queenstown snow fields and alpine play",
        description:
          "A flexible winter day around Queenstown's nearby snow fields, including Coronet Peak and The Remarkables. You do not need to ski to enjoy the mountain: go for snow views, family snow play, scenic chairlift time, cafe stops, photos, and extra activities such as Go tobogganing! We can also build in transfers, gear rental stops, beginner-friendly support, or a warm recovery plan after the mountain.",
        images: [
          images.winterSkiCloudSea,
          images.winterSkiSnowPlay,
          images.winterSkiChairlift,
          images.remarkable,
        ],
        imageLayout: "landscape",
      },
      {
        name: "Onsen, spa, and hot pool recovery",
        description:
          "A recovery-focused winter route built around Queenstown's best hot pool and spa stops, including the famous Onsen Hot Pools. We can also include the newer hot pool experience near the base of the gondola, so you can ride up for Skyline snow views, come back down, and end the day soaking somewhere warm.",
        images: [],
        imageLayout: "landscape",
      },
      {
        name: "Winter stargazing and southern skies",
        description:
          "Winter gets dark earlier and the air is often clearer, which makes it a beautiful season for southern-sky stargazing. Join a Skyline or Cardrona stargazing experience, look for constellations you do not see in the Northern Hemisphere, or keep it simple on the Lake Wakatipu shore with a hot chocolate and a clear view overhead.",
        images: [
          images.winterAuroraTown,
          images.winterAuroraLake,
          images.winterStargazingVanStars,
          images.lakeHayesJetty,
        ],
        imageLayout: "landscape",
      },
      {
        name: "Queenstown winter nightlife and ice bar",
        description:
          "A night route for Queenstown after dark: lakefront drinks, small bars, lively town energy, and the ice bar experience for something especially wintry. Good after a snow day, spa afternoon, or stargazing plan when you still want the town to feel alive.",
        images: [
          images.winterNightlifeGroup,
          images.winterNightlifeClub,
        ],
        imageLayout: "mixed",
        imageFit: "contain",
      },
    ],
    highlights: ["Snow fields", "Hot pools", "Stargazing", "Ice bar"],
  },
];

const servicePages = [
  {
    id: "airport-transfers",
    title: "Queenstown Airport Private Transfers",
    kicker: "Private airport transfers",
    intro:
      "Door-to-door private airport transfers around Queenstown, timed around your flight and group pace. Rates are for a private 7-seat Mercedes people mover for up to 4 passengers. Luggage space may be limited for groups above 4; each extra passenger is $10, with a maximum of 6 passengers.",
    rates: [
      ["Frankton, including Hilton", "$28"],
      ["Shotover Country & Harleys Farm", "$38"],
      ["Lake Hayes Estate & Jack's Point", "$42"],
      ["Kelvin Heights, beyond Hilton", "$48"],
      ["Queenstown Town Centre", "$58"],
      ["Fernhill", "$62"],
      ["Arrowtown & Sunshine Bay", "$68"],
    ],
    note:
      "Any pickup or drop-off inside the airport area adds a $10 airport surcharge. Check-in assistance is available for $5 per person.",
  },
  {
    id: "private-day-tours",
    title: "Queenstown Private Day Tours",
    kicker: "Private touring rates",
    intro:
      "Flexible private touring from Queenstown for scenic routes, seasonal stops, food, wine, photography, and easy local planning. Tours use a 7-seat Mercedes people mover and can take up to 6 people. Rates include vehicle and driver-guide service; activities and meals are not included.",
    rates: [
      ["Hourly private touring", "$120 per hour"],
      ["Half day", "$500 for 5 hours"],
      ["Full day", "$920 for 10 hours"],
    ],
  },
  {
    id: "activity-bookings",
    title: "Activity Bookings",
    kicker: "Limited-time activity offer",
    intro:
      "Most New Zealand activities can be booked at 5% off, including Queenstown Skyline Gondola, the TSS Earnslaw steamship, helicopter experiences, and more.",
    details: [
      "Some activities can be booked any time with the discount applied immediately.",
      "Some activities need advance booking before the discount is available.",
      "Some activities need availability checked after the request is placed before we can confirm.",
    ],
  },
  {
    id: "latest-deals",
    title: "Latest Discounts",
    kicker: "Seasonal specials",
    intro:
      "Ask us for the current seasonal offers across private tours, transfers, activity bookings, snow days, wine routes, and lake experiences.",
    details: [
      "Offers change with weather, partner availability, and travel dates.",
      "We can combine private transport with discounted activities where available.",
      "Send your date, group size, and wish list, and we will check the best current option.",
    ],
  },
];

function App() {
  const [view, setView] = React.useState("home");
  const [selectedSeasonId, setSelectedSeasonId] = React.useState("spring");
  const [selectedServiceId, setSelectedServiceId] = React.useState(servicePages[0].id);
  const selectedSeason = seasons.find((season) => season.id === selectedSeasonId);
  const selectedService = servicePages.find((service) => service.id === selectedServiceId);

  function goTo(viewName) {
    setView(viewName);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function openSeason(seasonId) {
    setSelectedSeasonId(seasonId);
    goTo("season");
  }

  function openService(serviceId) {
    setSelectedServiceId(serviceId);
    goTo("service");
  }

  return (
    <main className="min-h-screen bg-stone-100 text-stone-950">
      {view === "home" && <HomePage onExplore={() => goTo("routes")} />}
      {view === "routes" && (
        <SeasonSelection
          onHome={() => goTo("home")}
          onSelectSeason={openSeason}
          onSelectService={openService}
        />
      )}
      {view === "season" && (
        <>
          <SeasonDetail
            onHome={() => goTo("home")}
            onSeasons={() => goTo("routes")}
            season={selectedSeason}
          />
          <Contact />
        </>
      )}
      {view === "service" && (
        <>
          <ServicePage
            onHome={() => goTo("home")}
            onServices={() => goTo("routes")}
            service={selectedService}
          />
          <Contact />
        </>
      )}
      <ImageCredits />
    </main>
  );
}

function BrandNav({ onHome, right, tone = "dark" }) {
  const isLight = tone === "light";

  return (
    <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
      <button className="flex items-center gap-3" onClick={onHome} type="button">
        <span
          className={`grid size-10 place-items-center rounded-full border backdrop-blur ${
            isLight ? "border-white/30 bg-white/16" : "border-stone-950/15 bg-white/60"
          }`}
        >
          <Mountain
            className={`size-5 ${isLight ? "text-white" : "text-stone-950"}`}
            aria-hidden="true"
          />
        </span>
        <span
          className={`text-sm font-semibold uppercase tracking-[0.28em] ${
            isLight ? "text-white" : "text-stone-950"
          }`}
        >
          Remarkable Routes
        </span>
      </button>
      {right}
    </nav>
  );
}

function HomePage({ onExplore }) {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-stone-950">
        <img
          className="absolute inset-0 h-full w-full object-cover object-[52%_0%]"
          src={heroImage}
          alt="Aerial arrival over Queenstown, Lake Wakatipu, and the Remarkables"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/8 via-stone-950/8 to-stone-950/72" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/38 via-stone-950/10 to-transparent" />
        <BrandNav onHome={() => {}} tone="light" />
        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-84px)] max-w-7xl items-end px-5 pb-14 pt-40 sm:px-8">
          <div className="max-w-4xl">
            <button
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-stone-950 shadow-lg shadow-stone-950/25 transition hover:bg-teal-100"
              onClick={onExplore}
              type="button"
            >
              Explore routes
              <ArrowRight className="size-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>
      <section className="bg-stone-50 px-5 py-16 text-stone-950 sm:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.4fr] lg:items-start">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-700">
            Private South Island journeys
          </p>
          <div>
            <p className="brand-display max-w-5xl text-4xl leading-tight text-stone-950 sm:text-5xl">
              Local private journeys from Queenstown, built by people who know where to go, when to
              move, and how to turn each season into a different South Island story.
            </p>
            <p className="mt-7 max-w-3xl text-base leading-8 text-stone-600 sm:text-lg">
              Remarkable Routes is a Queenstown-based private tour company run by locals who love
              the outdoors, good food, quiet viewpoints, snow days, lake days, and the hidden corners
              that rarely make it into standard itineraries.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function SeasonSelection({ onHome, onSelectSeason, onSelectService }) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const carouselRef = React.useRef(null);
  const activeSeason = seasons[activeIndex];

  React.useEffect(() => {
    const carousel = carouselRef.current;
    const activeCard = carousel?.children[activeIndex];
    activeCard?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [activeIndex]);

  function previousSeason() {
    setActiveIndex((current) => (current === 0 ? seasons.length - 1 : current - 1));
  }

  function nextSeason() {
    setActiveIndex((current) => (current === seasons.length - 1 ? 0 : current + 1));
  }

  return (
    <section className="min-h-screen bg-stone-100 text-stone-950">
      <BrandNav
        onHome={onHome}
        right={
          <button
            className="rounded-full border border-stone-200 bg-white px-5 py-2.5 text-sm font-semibold text-stone-950 transition hover:border-teal-700 hover:text-teal-700"
            onClick={onHome}
            type="button"
          >
            Home
          </button>
        }
      />
      <ServicesHoverMenu onSelectService={onSelectService} />
      <div className="mx-auto flex min-h-[calc(100svh-84px)] max-w-7xl flex-col justify-center px-5 pb-10 pt-8 sm:px-8">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-700">
            Explore routes
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Choose the season you want to play in.
          </h2>
        </div>

        <div className="rounded-lg border border-stone-200 bg-white p-4 shadow-sm sm:p-5">
          <div className="relative">
          <div className="season-carousel grid gap-4" ref={carouselRef}>
            {seasons.map((season, index) => (
              <button
                className={`group relative h-[420px] overflow-hidden rounded-md border bg-stone-200 transition focus:outline-none focus-visible:ring-4 focus-visible:ring-teal-300 sm:h-[520px] ${
                  activeIndex === index
                    ? "border-teal-700 shadow-lg"
                    : "border-stone-200 opacity-80 hover:border-teal-500 hover:opacity-100"
                }`}
                key={season.id}
                onClick={() => onSelectSeason(season.id)}
                type="button"
                aria-label={`View ${season.label} routes`}
              >
                <img
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  src={season.image}
                  alt={`${season.label} in New Zealand`}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-950/70 to-transparent p-5 text-left text-white">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-100">
                    {season.months}
                  </p>
                  <h3 className="mt-2 text-3xl font-semibold">{season.label}</h3>
                </div>
              </button>
            ))}
          </div>
            <button
              className="absolute left-3 top-1/2 grid size-12 -translate-y-1/2 place-items-center rounded-full border border-white/60 bg-white/85 text-stone-950 shadow-lg backdrop-blur transition hover:bg-white"
              onClick={previousSeason}
              type="button"
              aria-label="Previous season"
            >
              <ArrowRight className="size-5 rotate-180" aria-hidden="true" />
            </button>
            <button
              className="absolute right-3 top-1/2 grid size-12 -translate-y-1/2 place-items-center rounded-full border border-white/60 bg-white/85 text-stone-950 shadow-lg backdrop-blur transition hover:bg-white"
              onClick={nextSeason}
              type="button"
              aria-label="Next season"
            >
              <ArrowRight className="size-5" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-5 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
                {activeSeason.months}
              </p>
              <h3 className="mt-1 text-3xl font-semibold text-stone-950">{activeSeason.label}</h3>
              <p className="mt-2 max-w-2xl text-base leading-7 text-stone-600">
                {activeSeason.theme}
              </p>
            </div>
            <button
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-teal-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-teal-800"
              onClick={() => onSelectSeason(activeSeason.id)}
              type="button"
            >
              View {activeSeason.label.toLowerCase()} routes
              <ArrowRight className="size-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesHoverMenu({ onSelectService }) {
  return (
    <div className="relative z-20 mx-auto max-w-7xl px-5 sm:px-8">
      <div className="services-menu group relative inline-block pb-3">
        <button
          className="inline-flex items-center gap-3 rounded-full border border-teal-700/25 bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.24em] text-stone-950 shadow-sm shadow-stone-950/5 transition group-hover:border-teal-700 group-hover:bg-teal-50 group-hover:text-teal-800"
          type="button"
          aria-haspopup="true"
        >
          All Services
          <span className="text-base text-teal-700 transition group-hover:rotate-180" aria-hidden="true">
            v
          </span>
        </button>
        <div className="services-menu-panel absolute left-0 top-full hidden min-w-[min(92vw,520px)] border border-stone-200 bg-white px-7 py-6 shadow-xl group-hover:block group-focus-within:block">
          <ul className="grid gap-4">
            {servicePages.map((service) => (
              <li
                className="text-base font-medium uppercase tracking-[0.18em] text-stone-950 sm:text-lg"
                key={service.id}
              >
                <a
                  className="block transition hover:text-teal-700"
                  href={`#${service.id}`}
                  onClick={(event) => {
                    event.preventDefault();
                    onSelectService(service.id);
                  }}
                >
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function ServicePage({ onHome, onServices, service }) {
  return (
    <section className="min-h-screen bg-stone-100 text-stone-950">
      <BrandNav
        onHome={onHome}
        right={
          <button
            className="rounded-full border border-stone-200 bg-white px-5 py-2.5 text-sm font-semibold text-stone-950 transition hover:border-teal-700 hover:text-teal-700"
            onClick={onServices}
            type="button"
          >
            Services
          </button>
        }
      />
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-8 sm:px-8 lg:pb-28">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-700">
              {service.kicker}
            </p>
            <h1 className="mt-3 text-4xl font-semibold leading-tight sm:text-6xl">
              {service.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-600">{service.intro}</p>
          </div>

          <div className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm sm:p-7">
            {service.rates?.length > 0 && (
              <div className="grid gap-3">
                {service.rates.map(([label, price]) => (
                  <div
                    className="flex flex-col justify-between gap-2 border-b border-stone-200 py-4 sm:flex-row sm:items-center"
                    key={label}
                  >
                    <span className="font-semibold text-stone-950">{label}</span>
                    <span className="text-lg font-bold text-teal-700">{price}</span>
                  </div>
                ))}
              </div>
            )}

            {service.details?.length > 0 && (
              <div className="grid gap-3">
                {service.details.map((detail) => (
                  <p className="rounded-md bg-stone-50 px-4 py-4 leading-7 text-stone-700" key={detail}>
                    {detail}
                  </p>
                ))}
              </div>
            )}

            {service.note && (
              <p className="mt-5 rounded-md bg-teal-50 px-4 py-4 text-sm font-semibold leading-6 text-teal-900">
                {service.note}
              </p>
            )}

            <a
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-teal-800"
              href="#contact"
            >
              Enquire now
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SeasonDetail({ onHome, onSeasons, season }) {
  const [openRoute, setOpenRoute] = React.useState(0);
  const [routeImageIndex, setRouteImageIndex] = React.useState(0);
  const activeRoute = season.routes[openRoute ?? 0];
  const routeImages = activeRoute.images?.length ? activeRoute.images : [season.image];
  const featureImages = season.heroImages?.length ? season.heroImages : routeImages;
  const featureImageIndex = routeImageIndex % featureImages.length;
  const featureImagePosition = season.heroImagePosition ?? "object-center";
  const featureImageFit =
    activeRoute.imageFit === "contain" || season.heroImageFit === "contain"
      ? "object-contain"
      : "object-cover";
  const isLandscapeRoute = activeRoute.imageLayout !== "portrait";
  const isMixedRoute = activeRoute.imageLayout === "mixed";

  React.useEffect(() => {
    setOpenRoute(0);
    setRouteImageIndex(0);
  }, [season.id]);

  React.useEffect(() => {
    setRouteImageIndex(0);
  }, [openRoute]);

  function previousRouteImage() {
    setRouteImageIndex((current) => (current === 0 ? featureImages.length - 1 : current - 1));
  }

  function nextRouteImage() {
    setRouteImageIndex((current) => (current === featureImages.length - 1 ? 0 : current + 1));
  }

  return (
    <section className="bg-stone-100 text-stone-950">
      <BrandNav
        onHome={onHome}
        right={
          <button
            className="rounded-full border border-stone-200 bg-white px-5 py-2.5 text-sm font-semibold text-stone-950 transition hover:border-teal-700 hover:text-teal-700"
            onClick={onSeasons}
            type="button"
          >
            Seasons
          </button>
        }
      />
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-8 sm:px-8 lg:pb-28">
        <div className="grid min-w-0 grid-cols-1 overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm lg:grid-cols-[1.05fr_0.95fr]">
          <div
            className={`relative min-w-0 w-full max-w-full overflow-hidden ${
              isLandscapeRoute ? "aspect-[4/3] min-h-0" : "min-h-[420px]"
            } ${isMixedRoute ? "bg-stone-950" : ""}`}
          >
            <img
              className={`absolute inset-0 h-full w-full ${featureImageFit} ${featureImagePosition}`}
              src={featureImages[featureImageIndex]}
              alt={`${activeRoute.name} route highlight`}
              onError={(event) => {
                event.currentTarget.src = season.image;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-stone-950/5 to-transparent" />
            {featureImages.length > 1 && (
              <div className="absolute right-5 top-5 flex gap-2">
                <button
                  className="grid size-10 place-items-center rounded-full border border-white/60 bg-white/85 text-stone-950 shadow-lg backdrop-blur transition hover:bg-white"
                  onClick={previousRouteImage}
                  type="button"
                  aria-label="Previous route image"
                >
                  <ArrowRight className="size-4 rotate-180" aria-hidden="true" />
                </button>
                <button
                  className="grid size-10 place-items-center rounded-full border border-white/60 bg-white/85 text-stone-950 shadow-lg backdrop-blur transition hover:bg-white"
                  onClick={nextRouteImage}
                  type="button"
                  aria-label="Next route image"
                >
                  <ArrowRight className="size-4" aria-hidden="true" />
                </button>
              </div>
            )}
            <div className="absolute bottom-0 p-6 text-white sm:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-100">
                {season.months}
              </p>
              <h1 className="mt-3 text-4xl font-semibold sm:text-6xl">{season.label}</h1>
              <p className="mt-3 max-w-xl text-base font-semibold text-white/90">
                {activeRoute.name}
              </p>
              {featureImages.length > 1 && (
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-white/75">
                  Image {featureImageIndex + 1} / {featureImages.length}
                </p>
              )}
            </div>
          </div>
          <div className="p-6 sm:p-8 lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-700">
              Seasonal recommendations
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{season.title}</h2>
            <p className="mt-4 leading-7 text-stone-600">{season.intro}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {season.highlights.map((highlight) => (
                <span
                  className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1.5 text-sm font-medium text-stone-700"
                  key={highlight}
                >
                  {highlight}
                </span>
              ))}
            </div>

            <div className="mt-8 grid gap-3">
              {season.routes.map((route, index) => (
                <div className="rounded-lg border border-stone-200 bg-stone-50" key={route.name}>
                  <button
                    className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left"
                    onClick={() => setOpenRoute(openRoute === index ? null : index)}
                    type="button"
                    aria-expanded={openRoute === index}
                  >
                    <span className="font-semibold">{route.name}</span>
                    <span className="grid size-8 shrink-0 place-items-center rounded-full border border-stone-200 bg-white text-teal-700">
                      {openRoute === index ? (
                        <span className="h-0.5 w-3.5 rounded-full bg-current" aria-hidden="true" />
                      ) : (
                        <Plus className="size-4" aria-hidden="true" />
                      )}
                    </span>
                  </button>
                  {openRoute === index && (
                    <div className="border-t border-stone-200 px-4 pb-4 pt-3">
                      <p className="text-sm leading-6 text-stone-600">{route.description}</p>
                      {route.images?.length > 0 && (
                        <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
                          {route.images.map((image, imageIndex) => (
                            <button
                              className={`shrink-0 overflow-hidden rounded-md border border-stone-200 bg-stone-200 transition hover:border-teal-700 ${
                                route.imageLayout === "portrait"
                                  ? "h-56 w-36"
                                  : route.imageLayout === "mixed"
                                    ? "h-32 w-32 bg-stone-950"
                                    : "h-28 w-44"
                              }`}
                              key={`${route.name}-${imageIndex}`}
                              onClick={() => setRouteImageIndex(imageIndex)}
                              type="button"
                              aria-label={`Show ${route.name} image ${imageIndex + 1}`}
                            >
                              <img
                                className={`h-full w-full ${
                                  route.imageLayout === "mixed" ? "object-contain" : "object-cover"
                                }`}
                                src={image}
                                alt={`${route.name} thumbnail ${imageIndex + 1}`}
                                onError={(event) => {
                                  event.currentTarget.src = season.image;
                                }}
                              />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
              <div className="rounded-lg border border-teal-700/30 bg-teal-50 px-4 py-4">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-semibold text-teal-950">Customise your trip</span>
                  <Sparkles className="size-5 shrink-0 text-teal-700" aria-hidden="true" />
                </div>
                <p className="mt-2 text-sm leading-6 text-teal-900">
                  Tell us your dates, pace, group style, and must-see places. We will shape the route
                  around you.
                </p>
              </div>
            </div>

            <a
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-teal-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-teal-800"
              href="#contact"
            >
              Contact us to customise
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-stone-100 px-5 py-20 text-stone-950 sm:px-8 lg:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-600/40 to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-700">
            Contact
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-stone-950 sm:text-5xl">
            Tell us where you want the road to lead.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-600">
            Share your dates, group size, wish-list stops, and preferred pace. We will help shape a
            private Queenstown tour that feels considered from the first kilometre.
          </p>
        </div>
        <div className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm sm:p-7">
          <ContactLink icon={MessageCircle} label="WhatsApp" value="Placeholder" href="#" />
          <ContactLink icon={MessageCircle} label="WeChat" value="Placeholder" href="#" />
          <ContactLink
            icon={Mail}
            label="Email"
            value="hello@remarkableroutes.co.nz"
            href="mailto:hello@remarkableroutes.co.nz"
          />
          <a
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-teal-800"
            href="mailto:hello@remarkableroutes.co.nz"
          >
            Start an enquiry
            <MapPinned className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactLink({ icon: LinkIcon, label, value, href }) {
  return (
    <a
      className="flex items-center justify-between gap-4 border-b border-stone-200 py-5 text-stone-950 transition hover:text-teal-700"
      href={href}
      aria-label={`${label}: ${value}`}
    >
      <span className="flex min-w-0 items-center gap-4">
        <span className="grid size-11 shrink-0 place-items-center rounded-full bg-stone-100 text-teal-700">
          <LinkIcon className="size-5" aria-hidden="true" />
        </span>
        <span>
          <span className="block text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">
            {label}
          </span>
          <span className="mt-1 block break-words text-base font-semibold">{value}</span>
        </span>
      </span>
      <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
    </a>
  );
}

function ImageCredits() {
  return (
    <footer className="bg-white px-5 py-7 text-xs leading-6 text-stone-500 sm:px-8">
      <div className="mx-auto max-w-7xl">
        Images are from the uploaded Queenstown and South Island photo set.
      </div>
    </footer>
  );
}

createRoot(document.getElementById("root")).render(<App />);
