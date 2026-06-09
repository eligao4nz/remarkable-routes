import React from "react";
import { createRoot } from "react-dom/client";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
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

function Instagram(props) {
  return (
    <Icon {...props}>
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <circle cx="12" cy="12" r="3.2" />
      <path d="M16.8 7.2h.01" />
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

const heroImage = "/gallery/rrhomepagepic2.png";
const mobileHeroImage = "/gallery/queenstown-arrival.jpg";
const web3FormsAccessKey = "b32095ed-5e6a-409e-bf90-0c86b93f1e6e";

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
    theme:
      "Lupin season, fresh alpine landscapes, and the first signs of summer across the Southern Alps.",
    themeZh: "鲁冰花盛开，雪山渐渐苏醒，南岛迎来一年中最鲜活的色彩。",
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
    theme:
      "Long daylight hours, lake adventures, cherry season, and the South Island at its most energetic.",
    themeZh: "漫长白昼、水上活动与樱桃季，让南岛展现最热闹也最自由的一面。",
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
          "A slower gateway-to-Fiordland route with Te Anau lakefront time and well-known day hike options, including sections inspired by the Kepler Track, forest walks, birdlife, optional glowworm caves, and quiet lake views.",
        descriptionZh:
          "一条节奏更从容的峡湾边缘路线，可安排蒂阿瑙湖边停留、凯普勒步道灵感的一日轻徒步、森林步道、鸟类观察、可选萤火虫洞体验，以及安静的湖景时间。",
        images: [
          images.teAnauDayHike01,
          images.teAnauDayHike02,
          images.teAnauDayHike03,
          images.teAnauDayHike04,
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
    theme:
      "Arrowtown autumn colours, vineyard landscapes, and some of the South Island's most beautiful drives.",
    themeZh: "箭镇缤纷秋色、酒庄风景与稳定天气，是许多人最喜欢的南岛季节。",
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
    theme: "Snow-covered mountains, ski days, hot pools, and clear southern skies after dark.",
    themeZh: "滑雪、雪山、温泉与璀璨星空，构成皇后镇最经典的冬季体验。",
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

const seasonQuickFacts = {
  spring: {
    en: {
      title: "From Queenstown",
      rows: [
        ["Main example route:", "Glenorchy / Paradise"],
        ["Distance:", "Approx. 45 km one way"],
        ["Drive time:", "Approx. 45 min one way"],
        ["Recommended time:", "Half day"],
      ],
    },
    zh: {
      title: "从皇后镇出发",
      rows: [
        ["推荐方向：", "格林诺奇 / 天堂镇"],
        ["距离：", "约45公里单程"],
        ["车程：", "约45分钟单程"],
        ["建议时间：", "半日游"],
      ],
    },
  },
  summer: {
    en: {
      title: "From Queenstown",
      rows: [
        ["Main example route:", "Cromwell / Lake Dunstan / Cherries"],
        ["Distance:", "Approx. 60 km one way"],
        ["Drive time:", "Approx. 50 min one way"],
        ["Recommended time:", "Half day to full day"],
      ],
    },
    zh: {
      title: "从皇后镇出发",
      rows: [
        ["推荐方向：", "Cromwell / Lake Dunstan / 樱桃季"],
        ["距离：", "约60公里单程"],
        ["车程：", "约50分钟单程"],
        ["建议时间：", "半日游至一日游"],
      ],
    },
  },
  autumn: {
    en: {
      title: "From Queenstown",
      rows: [
        ["Main example route:", "Arrowtown / Central Otago"],
        ["Distance:", "Approx. 20 km to Arrowtown"],
        ["Drive time:", "Approx. 25 min one way"],
        ["Recommended time:", "Half day"],
      ],
    },
    zh: {
      title: "从皇后镇出发",
      rows: [
        ["推荐方向：", "箭镇 / 中奥塔哥"],
        ["距离：", "至箭镇约20公里"],
        ["车程：", "约25分钟单程"],
        ["建议时间：", "半日游"],
      ],
    },
  },
  winter: {
    en: {
      title: "From Queenstown",
      rows: [
        ["Main example route:", "Coronet Peak / Arrowtown / Hot Pools"],
        ["Distance:", "Approx. 20–40 km depending on route"],
        ["Drive time:", "Approx. 25–45 min one way"],
        ["Recommended time:", "Half day to full day"],
      ],
    },
    zh: {
      title: "从皇后镇出发",
      rows: [
        ["推荐方向：", "Coronet Peak / 箭镇 / 温泉"],
        ["距离：", "约20–40公里，视路线而定"],
        ["车程：", "约25–45分钟单程"],
        ["建议时间：", "半日游至一日游"],
      ],
    },
  },
};

const seasonRouteReferences = {
  spring: {
    en: {
      title: "From Queenstown",
      headers: ["Route", "Distance", "Drive time", "Suggested time"],
      rows: [
        ["Glenorchy / Paradise", "approx. 45 km one way", "approx. 1 hr 5 min one way", "half day"],
        ["Lake Tekapo / Lupins", "approx. 260 km one way", "approx. 3 hr 20 min one way", "full day or overnight"],
        ["Local gardens / blossom stops", "varies", "approx. 35 min–1 hr 5 min", "half day"],
      ],
    },
    zh: {
      title: "从皇后镇出发",
      headers: ["方向", "距离", "车程", "建议时间"],
      rows: [
        ["格林诺奇 / 天堂镇", "约45公里单程", "约1小时5分钟单程", "半日游"],
        ["特卡波 / 鲁冰花", "约260公里单程", "约3小时20分钟单程", "一日游或过夜"],
        ["本地花园 / 花季停留点", "视地点而定", "约35分钟–1小时5分钟", "半日游"],
      ],
    },
  },
  summer: {
    en: {
      title: "From Queenstown",
      headers: ["Route", "Distance", "Drive time", "Suggested time"],
      rows: [
        ["Queenstown lake activities", "local", "approx. 25–40 min", "half day"],
        ["Cromwell / Lake Dunstan / cherries", "approx. 60 km one way", "approx. 1 hr 10 min one way", "half day to full day"],
        ["Te Anau / Fiordland edge", "approx. 170 km one way", "approx. 2 hr 20 min one way", "full day"],
        ["Milford Sound", "approx. 290 km one way", "approx. 4 hr 20 min one way", "full day"],
      ],
    },
    zh: {
      title: "从皇后镇出发",
      headers: ["方向", "距离", "车程", "建议时间"],
      rows: [
        ["皇后镇湖上活动", "市区及周边", "约25–40分钟", "半日游"],
        ["Cromwell / Lake Dunstan / 樱桃季", "约60公里单程", "约1小时10分钟单程", "半日游至一日游"],
        ["Te Anau / 峡湾边缘", "约170公里单程", "约2小时20分钟单程", "一日游"],
        ["Milford Sound", "约290公里单程", "约4小时20分钟单程", "一日游"],
      ],
    },
  },
  autumn: {
    en: {
      title: "From Queenstown",
      headers: ["Route", "Distance", "Drive time", "Suggested time"],
      rows: [
        ["Arrowtown", "approx. 20 km one way", "approx. 45 min one way", "half day"],
        ["Gibbston / wineries", "approx. 25 km one way", "approx. 45 min one way", "half day"],
        ["Cromwell / Bannockburn / Clyde", "approx. 60–90 km one way", "approx. 1 hr 10 min–1 hr 35 min one way", "full day"],
      ],
    },
    zh: {
      title: "从皇后镇出发",
      headers: ["方向", "距离", "车程", "建议时间"],
      rows: [
        ["箭镇", "约20公里单程", "约45分钟单程", "半日游"],
        ["Gibbston / 酒庄", "约25公里单程", "约45分钟单程", "半日游"],
        ["Cromwell / Bannockburn / Clyde", "约60–90公里单程", "约1小时10分钟–1小时35分钟单程", "一日游"],
      ],
    },
  },
  winter: {
    en: {
      title: "From Queenstown",
      headers: ["Route", "Distance", "Drive time", "Suggested time"],
      rows: [
        ["Coronet Peak", "approx. 20 km one way", "approx. 45 min one way", "half day to full day"],
        ["The Remarkables ski area", "approx. 24 km one way", "approx. 55 min–1 hr 5 min one way", "half day to full day"],
        ["Arrowtown / hot pools", "approx. 20–40 km depending on route", "approx. 45 min–1 hr 5 min", "half day"],
        ["Tekapo / stargazing extension", "approx. 260 km one way", "approx. 3 hr 20 min one way", "overnight recommended"],
      ],
    },
    zh: {
      title: "从皇后镇出发",
      headers: ["方向", "距离", "车程", "建议时间"],
      rows: [
        ["Coronet Peak", "约20公里单程", "约45分钟单程", "半日至一日游"],
        ["The Remarkables 滑雪场", "约24公里单程", "约55分钟–1小时5分钟单程", "半日至一日游"],
        ["箭镇 / 温泉", "约20–40公里，视路线而定", "约45分钟–1小时5分钟", "半日游"],
        ["Tekapo / 星空延伸路线", "约260公里单程", "约3小时20分钟单程", "建议过夜"],
      ],
    },
  },
};

const servicePages = [
  {
    id: "airport-transfers",
    title: "Queenstown Airport Transfers",
    kicker: "Private Airport Transfers",
    intro:
      "Door-to-door airport transfers between Queenstown Airport and your hotel, accommodation or holiday home.\n\nTimed around your flight and group pace, suitable for individuals, couples, families and small groups.\n\nRates are for a private 7-seat Mercedes people mover for up to 4 passengers. Luggage space may be limited for groups above 4; each extra passenger is $10, with a maximum of 6 passengers.",
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
      "Airport terminal pickup or drop-off incurs a $10 airport access fee. Check-in assistance is available for $5 per person.",
    zh: {
      title: "皇后镇机场接送服务",
      kicker: "机场接送服务",
      intro:
        "提供皇后镇机场至酒店、民宿及度假屋的接送服务。\n\n根据您的航班时间与行程节奏安排，适合个人、情侣、家庭及小型团体。\n\n价格基于最多4位乘客的7座奔驰商务车。4位以上乘客每人加收 NZ$10，最多可乘坐6位乘客。",
      rates: [
        ["Frankton（含 Hilton）", "$28"],
        ["Shotover Country & Harleys Farm", "$38"],
        ["Lake Hayes Estate & Jack's Point", "$42"],
        ["Kelvin Heights", "$48"],
        ["皇后镇市中心", "$58"],
        ["Fernhill", "$62"],
        ["箭镇 & Sunshine Bay", "$68"],
      ],
      note:
        "机场航站楼接送需加收 NZ$10 机场通行费。如需协助办理机场值机或行李托运手续，可提供额外服务，每位 NZ$5。",
      cta: "咨询接送服务",
    },
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

const serviceNavItems = [
  { id: "airport-transfers", en: "Airport Transfers", zh: "机场接送" },
  { id: "private-day-tours", en: "Private Charters", zh: "包车服务" },
  { id: "activity-bookings", en: "Activity Bookings", zh: "活动预订" },
  { id: "latest-deals", en: "Special Offers", zh: "特别优惠" },
];

const copy = {
  en: {
    nav: {
      home: "Home",
      routes: "Routes",
      services: "Services",
      contact: "Contact",
    },
    routes: {
      kicker: "DISCOVER THE SOUTH ISLAND",
      heading: "Every season tells a different South Island story.",
      subtitle:
        "Start with the season you're visiting, and discover the routes, landscapes, and experiences locals recommend most.",
    },
    hero: {
      title: "Queenstown Private Tours & Scenic Routes",
      subtitle:
        "Personalised South Island journeys from Queenstown, shaped by local knowledge and your pace.",
      explore: "Explore routes",
      plan: "Plan My Trip",
    },
    intro: {
      kicker: "Private South Island journeys",
      title:
        "Local private journeys from Queenstown, built by people who know where to go, when to move, and how to turn each season into a different South Island story.",
      body:
        "Remarkable Routes is a Queenstown-based private tour company run by locals who love the outdoors, good food, quiet viewpoints, snow days, lake days, and the hidden corners that rarely make it into standard itineraries.",
    },
    contact: {
      kicker: "Contact",
      title: "Tell us where you want the road to lead.",
      body:
        "Share your dates, group size, wish-list stops, and preferred pace. We will help shape a private Queenstown tour that feels considered from the first kilometre.",
      email: "Email",
      instagram: "Instagram",
      instagramValue: "@remarkableroutes",
      wechat: "WeChat",
      cta: "Start an enquiry",
      form: {
        name: "Name",
        email: "Email",
        phoneWechat: "Phone / WeChat",
        travelDates: "Travel Dates",
        travellers: "Number of Travellers",
        message: "Message",
        send: "Send Enquiry",
        tripType: "Trip Type",
        oneDayTrip: "One-day trip",
        multiDayTrip: "Multi-day trip",
        travelDate: "Travel Date",
        startDate: "Start Date",
        endDate: "End Date",
        messagePlaceholder: "Tell us what you'd like to see or experience.",
        success: "Thank you. Your enquiry has been sent.",
        error: "Sorry, something went wrong. Please email info@remarkableroutes.com.",
        dateError: "Please select your trip type and travel date.",
      },
    },
  },
  zh: {
    nav: {
      home: "首页",
      routes: "路线",
      services: "服务",
      contact: "联系",
    },
    routes: {
      kicker: "探索南岛",
      heading: "每个季节，都有不同的南岛故事。",
      subtitle: "从你到访的季节开始，看看本地人最推荐的路线、风景和玩法。",
    },
    hero: {
      title: "皇后镇私人旅行与风景路线",
      subtitle:
        "从皇后镇出发的个性化南岛旅程，结合本地经验，并按你的节奏安排。",
      explore: "探索路线",
      plan: "规划行程",
    },
    intro: {
      kicker: "私人南岛旅程",
      title: "每个季节，都有不同的南岛故事。",
      body:
        "Remarkable Routes 诞生于皇后镇。\n我们根据你到访的季节、兴趣和旅行节奏，打造属于你的南岛路线。\n从经典风景到鲜为人知的角落，让每一段旅程都更贴近这片土地原本的样子。",
    },
    contact: {
      kicker: "联系",
      title: "告诉我们你想去哪里。",
      body:
        "请分享你的日期、人数、想去的地点和喜欢的节奏。我们会帮你规划一段贴合你的皇后镇私人旅程。",
      wechat: "微信",
      wechatValue: "可按需提供微信联系方式",
      email: "邮箱",
      cta: "开始咨询",
      form: {
        name: "姓名",
        email: "邮箱",
        phoneWechat: "微信或电话",
        travelDates: "旅行日期",
        travellers: "出行人数",
        message: "留言",
        send: "提交咨询",
        tripType: "行程类型",
        oneDayTrip: "一日游",
        multiDayTrip: "多日行程",
        travelDate: "出行日期",
        startDate: "开始日期",
        endDate: "结束日期",
        messagePlaceholder: "告诉我们您想去哪里、喜欢什么样的体验，剩下的交给我们。",
        success: "感谢您的咨询，我们已收到。",
        error: "提交失败，请发送邮件至 info@remarkableroutes.com。",
        dateError: "请选择行程类型和旅行日期。",
      },
    },
  },
};

function App() {
  const [language, setLanguage] = React.useState("en");
  const [view, setView] = React.useState("home");
  const [shouldOpenContact, setShouldOpenContact] = React.useState(false);
  const [selectedSeasonId, setSelectedSeasonId] = React.useState("spring");
  const [selectedServiceId, setSelectedServiceId] = React.useState(servicePages[0].id);
  const text = copy[language];
  const selectedSeason = seasons.find((season) => season.id === selectedSeasonId);
  const selectedService = servicePages.find((service) => service.id === selectedServiceId);

  React.useEffect(() => {
    if (!shouldOpenContact) {
      return;
    }

    window.requestAnimationFrame(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      setShouldOpenContact(false);
    });
  }, [shouldOpenContact, view]);

  function goTo(viewName) {
    setView(viewName);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function openRoutes() {
    goTo("routes");
  }

  function openServices() {
    openService(servicePages[0].id);
  }

  function openSeason(seasonId) {
    setSelectedSeasonId(seasonId);
    goTo("season");
  }

  function openService(serviceId) {
    setSelectedServiceId(serviceId);
    goTo("service");
  }

  function openContact() {
    if (view === "season" || view === "service") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      return;
    }

    setSelectedServiceId(servicePages[0].id);
    setShouldOpenContact(true);
    setView("service");
  }

  return (
    <main className="min-h-screen bg-stone-100 text-stone-950">
      {view === "home" && (
        <HomePage
          language={language}
          onContact={openContact}
          onExplore={openRoutes}
          onLanguageChange={setLanguage}
          onRoutes={openRoutes}
          onSelectService={openService}
          onServices={openServices}
          text={text}
        />
      )}
      {view === "routes" && (
        <SeasonSelection
          language={language}
          onContact={openContact}
          onHome={() => goTo("home")}
          onLanguageChange={setLanguage}
          onSelectSeason={openSeason}
          onSelectService={(serviceId) => {
            openService(serviceId);
          }}
          onRoutes={openRoutes}
          onServices={openServices}
          text={text}
        />
      )}
      {view === "season" && (
        <>
          <SeasonDetail
            language={language}
            onContact={openContact}
            onHome={() => goTo("home")}
            onLanguageChange={setLanguage}
            onRoutes={openRoutes}
            onSelectService={openService}
            onServices={openServices}
            season={selectedSeason}
            text={text}
          />
          <Contact text={text.contact} />
        </>
      )}
      {view === "service" && (
        <>
          <ServicePage
            language={language}
            onContact={openContact}
            onHome={() => goTo("home")}
            onLanguageChange={setLanguage}
            onRoutes={openRoutes}
            onSelectService={openService}
            onServices={openServices}
            service={selectedService}
            text={text}
          />
          <Contact text={text.contact} />
        </>
      )}
      <ImageCredits />
    </main>
  );
}

function BrandNav({
  language,
  onContact,
  onHome,
  onLanguageChange,
  onRoutes,
  onSelectService,
  onServices,
  right,
  text,
  tone = "dark",
}) {
  const isLight = tone === "light";
  const [isMobileServicesOpen, setIsMobileServicesOpen] = React.useState(false);

  function openServiceFromNav(serviceId) {
    setIsMobileServicesOpen(false);
    onSelectService?.(serviceId);
  }

  return (
    <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
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
      <div
        className={`desktop-nav ${isLight ? "desktop-nav-hero" : ""} items-center gap-4 text-sm font-semibold uppercase tracking-[0.18em] ${
          isLight ? "text-white" : "text-stone-950"
        }`}
      >
        <button className="transition hover:text-teal-700" onClick={onRoutes} type="button">
          {text.nav.routes}
        </button>
        <div className="services-nav group relative">
          <button
            className="transition hover:text-teal-700"
            type="button"
            aria-haspopup="true"
          >
            {text.nav.services}
          </button>
          <ServicesNavDropdown language={language} onSelectService={openServiceFromNav} />
        </div>
        <button className="transition hover:text-teal-700" onClick={onContact} type="button">
          {text.nav.contact}
        </button>
      </div>
      <div
        className={`flex items-center gap-2 text-sm font-semibold ${
          isLight ? "text-white" : "text-stone-950"
        }`}
        aria-label="Language selection"
      >
        <button
          className={`transition hover:text-teal-700 ${language === "en" ? "" : "opacity-80"}`}
          onClick={() => onLanguageChange("en")}
          type="button"
        >
          EN
        </button>
        <span aria-hidden="true">|</span>
        <button
          className={`transition hover:text-teal-700 ${language === "zh" ? "" : "opacity-80"}`}
          onClick={() => onLanguageChange("zh")}
          type="button"
        >
          中文
        </button>
      </div>
      <div className="mobile-services-nav relative">
        <button
          className={`text-sm font-semibold uppercase tracking-[0.18em] transition hover:text-teal-700 ${
            isLight ? "text-white" : "text-stone-950"
          }`}
          onClick={() => setIsMobileServicesOpen((open) => !open)}
          type="button"
          aria-expanded={isMobileServicesOpen}
          aria-haspopup="true"
        >
          {text.nav.services}
        </button>
        {isMobileServicesOpen && (
          <ServicesNavDropdown
            language={language}
            mobile
            onSelectService={openServiceFromNav}
          />
        )}
      </div>
      {right}
    </nav>
  );
}

function ServicesNavDropdown({ language, mobile = false, onSelectService }) {
  return (
    <div
      className={`services-nav-dropdown rounded-md border border-stone-200 bg-white py-2 shadow-xl ${
        mobile ? "services-nav-dropdown-mobile" : ""
      }`}
    >
      {serviceNavItems.map((item) => (
        <button
          className="services-nav-item block w-full text-left font-semibold text-stone-950 transition hover:bg-teal-50 hover:text-teal-800"
          key={item.id}
          onClick={() => onSelectService(item.id)}
          type="button"
        >
          {language === "zh" ? item.zh : item.en}
        </button>
      ))}
    </div>
  );
}

function HomePage({
  language,
  onContact,
  onExplore,
  onLanguageChange,
  onRoutes,
  onSelectService,
  onServices,
  text,
}) {
  return (
    <>
      <section className="hero-section relative min-h-screen overflow-hidden bg-stone-950">
        <picture>
          <source media="(min-width: 768px)" srcSet={heroImage} />
          <img
            className="hero-image absolute inset-0 h-full w-full object-cover"
            src={mobileHeroImage}
            alt="Aerial arrival over Queenstown, Lake Wakatipu, and the Remarkables"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/8 via-stone-950/8 to-stone-950/72" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/38 via-stone-950/10 to-transparent" />
        <BrandNav
          language={language}
          onContact={onContact}
          onHome={() => {}}
          onLanguageChange={onLanguageChange}
          onRoutes={onRoutes}
          onSelectService={onSelectService}
          onServices={onServices}
          text={text}
          tone="light"
        />
        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-84px)] max-w-7xl items-end px-5 pb-14 pt-40 sm:px-8">
          <div className="max-w-4xl">
            <button
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-stone-950 shadow-lg shadow-stone-950/25 transition hover:bg-teal-100"
              onClick={onExplore}
              type="button"
            >
              {text.hero.explore}
              <ArrowRight className="size-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>
      <section className="bg-stone-50 px-5 py-16 text-stone-950 sm:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.4fr] lg:items-start">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-700">
            {text.intro.kicker}
          </p>
          <div>
            <p className="brand-display max-w-5xl text-4xl leading-tight text-stone-950 sm:text-5xl">
              {text.intro.title}
            </p>
            <p className="mt-7 max-w-3xl text-base leading-8 text-stone-600 sm:text-lg">
              {text.intro.body}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function SeasonSelection({
  language,
  onContact,
  onHome,
  onLanguageChange,
  onRoutes,
  onServices,
  onSelectSeason,
  onSelectService,
  text,
}) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const carouselRef = React.useRef(null);
  const activeSeason = seasons[activeIndex];
  const seasonChineseLabels = {
    spring: { label: "春季", months: "9月 - 11月", action: "查看春季路线" },
    summer: { label: "夏季", months: "12月 - 2月", action: "查看夏季路线" },
    autumn: { label: "秋季", months: "3月 - 5月", action: "查看秋季路线" },
    winter: { label: "冬季", months: "6月 - 8月", action: "查看冬季路线" },
  };
  const getSeasonLabel = (season) =>
    language === "zh" ? seasonChineseLabels[season.id]?.label ?? season.label : season.label;
  const getSeasonMonths = (season) =>
    language === "zh" ? seasonChineseLabels[season.id]?.months ?? season.months : season.months;
  const getSeasonAction = (season) =>
    language === "zh"
      ? seasonChineseLabels[season.id]?.action ?? `查看${getSeasonLabel(season)}路线`
      : `View ${season.label.toLowerCase()} routes`;

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
        language={language}
        onContact={onContact}
        onHome={onHome}
        onLanguageChange={onLanguageChange}
        onRoutes={onRoutes}
        onSelectService={onSelectService}
        onServices={onServices}
        text={text}
        right={
          <button
            className="rounded-full border border-stone-200 bg-white px-5 py-2.5 text-sm font-semibold text-stone-950 transition hover:border-teal-700 hover:text-teal-700"
            onClick={onHome}
            type="button"
          >
            {text.nav.home}
          </button>
        }
      />
      <div className="mx-auto flex min-h-[calc(100svh-84px)] max-w-7xl flex-col justify-center px-5 pb-10 pt-8 sm:px-8">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-700">
            {text.routes.kicker}
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            {text.routes.heading}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-stone-600 sm:text-lg">
            {text.routes.subtitle}
          </p>
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
                onClick={() => setActiveIndex(index)}
                type="button"
                aria-label={`Select ${getSeasonLabel(season)}`}
              >
                <img
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  src={season.image}
                  alt={`${getSeasonLabel(season)} in New Zealand`}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-950/70 to-transparent p-5 text-left text-white">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-100">
                    {getSeasonMonths(season)}
                  </p>
                  <h3 className="mt-2 text-3xl font-semibold">{getSeasonLabel(season)}</h3>
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
                {getSeasonMonths(activeSeason)}
              </p>
              <h3 className="mt-1 text-3xl font-semibold text-stone-950">
                {getSeasonLabel(activeSeason)}
              </h3>
              <p className="mt-2 max-w-2xl text-base leading-7 text-stone-600">
                {language === "zh" ? activeSeason.themeZh : activeSeason.theme}
              </p>
            </div>
            <button
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-teal-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-teal-800"
              onClick={() => onSelectSeason(activeSeason.id)}
              type="button"
            >
              {getSeasonAction(activeSeason)}
              <ArrowRight className="size-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicePage({
  language,
  onContact,
  onHome,
  onLanguageChange,
  onRoutes,
  onSelectService,
  onServices,
  service,
  text,
}) {
  const serviceContent = language === "zh" && service.zh ? { ...service, ...service.zh } : service;

  return (
    <section className="min-h-screen bg-stone-100 text-stone-950">
      <BrandNav
        language={language}
        onContact={onContact}
        onHome={onHome}
        onLanguageChange={onLanguageChange}
        onRoutes={onRoutes}
        onSelectService={onSelectService}
        onServices={onServices}
        text={text}
        right={
          <button
            className="rounded-full border border-stone-200 bg-white px-5 py-2.5 text-sm font-semibold text-stone-950 transition hover:border-teal-700 hover:text-teal-700"
            onClick={onServices}
            type="button"
          >
            {text.nav.services}
          </button>
        }
      />
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-8 sm:px-8 lg:pb-28">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-700">
              {serviceContent.kicker}
            </p>
            <h1 className="mt-3 text-4xl font-semibold leading-tight sm:text-6xl">
              {serviceContent.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-600" style={{ whiteSpace: "pre-line" }}>
              {serviceContent.intro}
            </p>
          </div>

          <div className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm sm:p-7">
            {serviceContent.rates?.length > 0 && (
              <div className="grid gap-3">
                {serviceContent.rates.map(([label, price]) => (
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

            {serviceContent.details?.length > 0 && (
              <div className="grid gap-3">
                {serviceContent.details.map((detail) => (
                  <p className="rounded-md bg-stone-50 px-4 py-4 leading-7 text-stone-700" key={detail}>
                    {detail}
                  </p>
                ))}
              </div>
            )}

            {serviceContent.note && (
              <p className="mt-5 rounded-md bg-teal-50 px-4 py-4 text-sm font-semibold leading-6 text-teal-900">
                {serviceContent.note}
              </p>
            )}

            <a
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-teal-800"
              href="#contact"
            >
              {serviceContent.cta ?? "Enquire now"}
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SeasonDetail({
  language,
  onContact,
  onHome,
  onLanguageChange,
  onRoutes,
  onSelectService,
  onServices,
  season,
  text,
}) {
  const [openRoute, setOpenRoute] = React.useState(0);
  const [routeImageIndex, setRouteImageIndex] = React.useState(0);
  const [lightboxImage, setLightboxImage] = React.useState(null);
  const activeRoute = season.routes[openRoute ?? 0];
  const routeImages = activeRoute.images?.length ? activeRoute.images : [season.image];
  const featureImages = season.heroImages?.length ? season.heroImages : routeImages;
  const featureImageIndex = routeImageIndex % featureImages.length;
  const featureImagePosition = season.heroImagePosition ?? "object-center";
  const featureImageFit =
    activeRoute.imageFit === "contain" || season.heroImageFit === "contain"
      ? "object-contain"
      : "object-cover";
  const isMixedRoute = activeRoute.imageLayout === "mixed";
  const quickFacts = seasonRouteReferences[season.id]?.[language === "zh" ? "zh" : "en"];

  React.useEffect(() => {
    setOpenRoute(0);
    setRouteImageIndex(0);
  }, [season.id]);

  React.useEffect(() => {
    setRouteImageIndex(0);
  }, [openRoute]);

  React.useEffect(() => {
    if (!lightboxImage) return undefined;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setLightboxImage(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxImage]);

  function previousRouteImage() {
    setRouteImageIndex((current) => (current === 0 ? featureImages.length - 1 : current - 1));
  }

  function nextRouteImage() {
    setRouteImageIndex((current) => (current === featureImages.length - 1 ? 0 : current + 1));
  }

  return (
    <section className="bg-stone-100 text-stone-950">
      <BrandNav
        language={language}
        onContact={onContact}
        onHome={onHome}
        onLanguageChange={onLanguageChange}
        onRoutes={onRoutes}
        onSelectService={onSelectService}
        onServices={onServices}
        text={text}
        right={
          <button
            className="rounded-full border border-stone-200 bg-white px-5 py-2.5 text-sm font-semibold text-stone-950 transition hover:border-teal-700 hover:text-teal-700"
            onClick={onRoutes}
            type="button"
          >
            {text.nav.routes}
          </button>
        }
      />
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-8 sm:px-8 lg:pb-28">
        <div className="grid min-w-0 grid-cols-1 overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="min-w-0">
          <div
            className={`relative aspect-[4/3] min-w-0 w-full max-w-full overflow-hidden ${
              isMixedRoute ? "bg-stone-950" : ""
            }`}
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
          {quickFacts && (
            <div className="border-t border-stone-200 bg-stone-50 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
                {quickFacts.title}
              </p>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-stone-500">
                {quickFacts.headers.join(" / ")}
              </p>
              <div className="mt-3 grid gap-2">
                {quickFacts.rows.map(([route, distance, driveTime, suggestedTime]) => (
                  <p className="text-sm leading-6 text-stone-700" key={route}>
                    <span className="font-semibold text-stone-950">{route}</span>
                    {" / "}
                    {distance}
                    {" / "}
                    {driveTime}
                    {" / "}
                    {suggestedTime}
                  </p>
                ))}
              </div>
            </div>
          )}
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
                      <p className="text-sm leading-6 text-stone-600">
                        {language === "zh" && route.descriptionZh ? route.descriptionZh : route.description}
                      </p>
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
                              onClick={() => {
                                setRouteImageIndex(imageIndex);
                                setLightboxImage(image);
                              }}
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
      {lightboxImage && (
        <div
          style={{
            alignItems: "center",
            background: "rgba(12, 10, 9, 0.82)",
            display: "grid",
            inset: 0,
            justifyItems: "center",
            padding: "1.25rem",
            position: "fixed",
            zIndex: 50,
          }}
          onClick={() => setLightboxImage(null)}
          role="presentation"
        >
          <button
            className="absolute right-5 top-5 grid size-10 place-items-center rounded-full border border-white/60 bg-white/90 text-sm font-bold text-stone-950 shadow-lg transition hover:bg-white"
            onClick={(event) => {
              event.stopPropagation();
              setLightboxImage(null);
            }}
            type="button"
            aria-label="Close image preview"
          >
            X
          </button>
          <img
            className="rounded-lg object-contain shadow-lg"
            style={{
              maxHeight: "86vh",
              maxWidth: "94vw",
            }}
            src={lightboxImage}
            alt="Route preview"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

function Contact({ text }) {
  const wechatQrImage = "/gallery/WeChatQR.png";
  const [isEnquiryOpen, setIsEnquiryOpen] = React.useState(false);

  return (
    <section id="contact" className="relative overflow-hidden bg-stone-100 px-5 py-20 text-stone-950 sm:px-8 lg:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-600/40 to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-700">
            {text.kicker}
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-stone-950 sm:text-5xl">
            {text.title}
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-600">
            {text.body}
          </p>
        </div>
        <div className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm sm:p-7">
          <ContactLink
            icon={Mail}
            label="Email"
            value="info@remarkableroutes.com"
            href="mailto:info@remarkableroutes.com"
          />
          <ContactLink
            icon={Instagram}
            label="Instagram"
            value="@remarkableroutes"
            href="https://instagram.com/remarkableroutes"
            target="_blank"
          />
          <div className="border-b border-stone-200 py-5 text-stone-950">
            <div className="flex items-center gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-stone-100 text-teal-700">
                <MessageCircle className="size-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">
                  WeChat
                </span>
              </span>
            </div>
            <div className="mt-4 rounded-md border border-stone-200 bg-stone-50 p-4">
              <img src={wechatQrImage} alt="WeChat QR code" />
            </div>
          </div>
          <button
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-teal-800"
            onClick={() => setIsEnquiryOpen(true)}
            type="button"
          >
            {text.cta}
            <MapPinned className="size-4" aria-hidden="true" />
          </button>
        </div>
      </div>
      {isEnquiryOpen && <EnquiryModal formText={text.form} onClose={() => setIsEnquiryOpen(false)} />}
    </section>
  );
}

function EnquiryModal({ formText, onClose }) {
  const [status, setStatus] = React.useState("idle");
  const [statusMessage, setStatusMessage] = React.useState("");
  const [resetCount, setResetCount] = React.useState(0);

  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const tripType = formData.get("Trip Type");
    const travelDates = formData.get("travel_dates");

    if (!tripType || !travelDates) {
      setStatus("error");
      setStatusMessage(formText.dateError);
      return;
    }

    formData.append("access_key", web3FormsAccessKey);
    formData.append("subject", "New Remarkable Routes enquiry");

    setStatus("submitting");
    setStatusMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to send enquiry");
      }

      form.reset();
      setResetCount((count) => count + 1);
      setStatus("success");
      setStatusMessage(formText.success);
    } catch (error) {
      setStatus("error");
      setStatusMessage(formText.error);
    }
  }

  return (
    <div
      style={{
        alignItems: "center",
        background: "rgba(12, 10, 9, 0.72)",
        display: "grid",
        inset: 0,
        justifyItems: "center",
        padding: "1.25rem",
        position: "fixed",
        zIndex: 60,
      }}
      onClick={onClose}
      role="presentation"
    >
      <div
        className="w-full max-w-2xl rounded-lg border border-stone-200 bg-white p-5 shadow-xl sm:p-7"
        style={{ maxHeight: "90vh", overflowY: "auto" }}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold text-stone-950">{formText.send}</h2>
          <button
            className="grid size-10 place-items-center rounded-full border border-stone-200 bg-stone-50 text-sm font-bold text-stone-950 transition hover:border-teal-700 hover:text-teal-700"
            onClick={onClose}
            type="button"
            aria-label="Close enquiry form"
          >
            X
          </button>
        </div>

        <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
          <input type="checkbox" name="botcheck" className="hidden" tabIndex="-1" autoComplete="off" />
          <FormField label={formText.name} name="name" required />
          <FormField label={formText.email} name="email" type="email" required />
          <FormField label={formText.phoneWechat} name="phone_wechat" />
          <TravelDatePicker formText={formText} resetCount={resetCount} />

          <label className="grid gap-2 text-sm font-semibold text-stone-950">
            {formText.travellers}
            <select
              className="rounded-md border border-stone-200 bg-white px-4 py-3 text-base font-normal text-stone-700 outline-none transition focus:border-teal-700"
              name="number_of_travellers"
              required
              defaultValue=""
            >
              <option value="" disabled />
              {["1", "2", "3", "4", "5", "6", "7+"].map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </label>

          <label className="grid gap-2 text-sm font-semibold text-stone-950">
            {formText.message}
            <textarea
              className="min-h-[140px] rounded-md border border-stone-200 bg-white px-4 py-3 text-base font-normal leading-7 text-stone-700 outline-none transition focus:border-teal-700"
              name="message"
              placeholder={formText.messagePlaceholder}
              required
            />
          </label>

          {statusMessage && (
            <p
              className={`rounded-md px-4 py-3 text-sm font-semibold ${
                status === "success" ? "bg-teal-50 text-teal-900" : "bg-stone-100 text-stone-700"
              }`}
            >
              {statusMessage}
            </p>
          )}

          <button
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-teal-800"
            disabled={status === "submitting"}
            type="submit"
          >
            {formText.send}
            <ArrowRight className="size-4" aria-hidden="true" />
          </button>
        </form>
      </div>
    </div>
  );
}

function TravelDatePicker({ formText, resetCount }) {
  const [tripType, setTripType] = React.useState("");
  const [selectedDate, setSelectedDate] = React.useState(undefined);
  const [selectedRange, setSelectedRange] = React.useState(undefined);
  const [isCalendarOpen, setIsCalendarOpen] = React.useState(false);
  const isOneDayTrip = tripType === "One-day trip";
  const isMultiDayTrip = tripType === "Multi-day trip";
  const formattedTravelDates = isOneDayTrip
    ? formatTravelDate(selectedDate)
    : formatTravelDates(selectedRange);

  React.useEffect(() => {
    setTripType("");
    setSelectedDate(undefined);
    setSelectedRange(undefined);
    setIsCalendarOpen(false);
  }, [resetCount]);

  function handleTripTypeChange(event) {
    const nextTripType = event.target.value;

    setTripType(nextTripType);
    setSelectedDate(undefined);
    setSelectedRange(undefined);
    setIsCalendarOpen(false);
  }

  return (
    <fieldset className="grid gap-3 text-sm font-semibold text-stone-950" style={{ border: 0, margin: 0, padding: 0 }}>
      <legend>{formText.tripType}</legend>
      <input type="hidden" name="travel_dates" value={formattedTravelDates} />
      <div className="flex flex-col gap-3 sm:flex-row">
        {[
          ["One-day trip", formText.oneDayTrip],
          ["Multi-day trip", formText.multiDayTrip],
        ].map(([value, label]) => (
          <label
            className="flex items-center gap-3 rounded-md border border-stone-200 bg-white px-4 py-3 text-base font-semibold text-stone-700 transition"
            key={value}
            style={{ flex: 1 }}
          >
            <input
              checked={tripType === value}
              name="Trip Type"
              onChange={handleTripTypeChange}
              required
              type="radio"
              value={value}
            />
            {label}
          </label>
        ))}
      </div>

      {isOneDayTrip && (
        <CalendarPopover
          label={formText.travelDate}
          isOpen={isCalendarOpen}
          onToggle={() => setIsCalendarOpen((open) => !open)}
          value={formattedTravelDates}
        >
          <DayPicker
            className="enquiry-calendar"
            mode="single"
            onSelect={(date) => {
              setSelectedDate(date);
              if (date) {
                setIsCalendarOpen(false);
              }
            }}
            required={false}
            selected={selectedDate}
          />
        </CalendarPopover>
      )}

      {isMultiDayTrip && (
        <CalendarPopover
          label={formText.travelDates}
          isOpen={isCalendarOpen}
          onToggle={() => setIsCalendarOpen((open) => !open)}
          value={formattedTravelDates || `${formText.startDate} - ${formText.endDate}`}
        >
          <DayPicker
            className="enquiry-calendar"
            mode="range"
            onSelect={(range) => {
              setSelectedRange(range);
              if (range?.from && range?.to) {
                setIsCalendarOpen(false);
              }
            }}
            selected={selectedRange}
          />
        </CalendarPopover>
      )}

      {formattedTravelDates && (
        <span className="rounded-md bg-stone-50 px-4 py-3 text-sm font-semibold text-stone-700">
          {formattedTravelDates}
        </span>
      )}
    </fieldset>
  );
}

function CalendarPopover({ children, isOpen, label, onToggle, value }) {
  return (
    <div className="relative">
      <span className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-stone-500">
        {label}
      </span>
      <button
        className="flex w-full items-center justify-between gap-3 rounded-md border border-stone-200 bg-white px-4 py-3 text-left text-base font-normal text-stone-700 outline-none transition hover:border-teal-700"
        onClick={onToggle}
        type="button"
      >
        <span>{value || label}</span>
        <span aria-hidden="true">v</span>
      </button>
      {isOpen && (
        <div
          className="enquiry-calendar-popover rounded-md border border-stone-200 bg-white p-3 shadow-xl"
          style={{
            marginTop: "0.5rem",
            maxWidth: "100%",
            position: "absolute",
            width: "min(100%, 22rem)",
            zIndex: 80,
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}

function formatTravelDate(date) {
  if (!date) return "";

  return formatDisplayDate(date);
}

function formatTravelDates(range) {
  if (!range?.from || !range?.to) return "";

  return `${formatDisplayDate(range.from)} - ${formatDisplayDate(range.to)}`;
}

function formatDisplayDate(dateValue) {
  return new Intl.DateTimeFormat("en-NZ", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(dateValue);
}

function FormField({ label, name, placeholder, required = false, type = "text" }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-stone-950">
      {label}
      <input
        className="rounded-md border border-stone-200 bg-white px-4 py-3 text-base font-normal text-stone-700 outline-none transition focus:border-teal-700"
        name={name}
        placeholder={placeholder}
        required={required}
        type={type}
      />
    </label>
  );
}

function ContactLink({ icon: LinkIcon, label, value, href, target }) {
  return (
    <a
      className="flex items-center justify-between gap-4 border-b border-stone-200 py-5 text-stone-950 transition hover:text-teal-700"
      href={href}
      aria-label={`${label}: ${value}`}
      target={target}
      rel={target === "_blank" ? "noreferrer" : undefined}
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
