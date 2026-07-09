import React from "react";
import { createRoot } from "react-dom/client";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import "./styles.css";
import logoDarkNav from "./assets/logo-dark-nav.png";
import logoLightNav from "./assets/logo-light-nav.png";

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

function CheckCircle(props) {
  return (
    <Icon {...props}>
      <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      <path d="m9 12 2 2 4-4" />
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
    labelZh: "春季",
    months: "September - November",
    monthsZh: "9月 - 11月",
    theme:
      "Lupin season, fresh alpine landscapes, and the first signs of summer across the Southern Alps.",
    themeZh: "鲁冰花盛开，山谷重新变绿，南岛在春光里慢慢醒来。",
    title: "Spring routes for Glenorchy, Tekapo, flowers, and soft alpine light.",
    titleZh: "春季路线：格林诺奇、特卡波花海与柔和山光。",
    intro:
      "Spring is made for Glenorchy's green valleys, Lake Tekapo lupins, snow still sitting high above the roads, and slower photo-rich days before peak season.",
    introZh:
      "春天适合把节奏放慢：从皇后镇出发，看格林诺奇的新绿山谷、特卡波湖畔的鲁冰花，以及高山上仍未融尽的积雪。旺季到来前，路上更安静，也更适合停下来好好拍照。",
    image:
      images.tekapo,
    heroImages: [images.springDaffodils, images.springCherry, images.springLakeJetty],
    routes: [
      {
        name: "Glenorchy spring valley",
        nameZh: "格林诺奇春日山谷",
        description:
          "A scenic spring road day from Queenstown along Lake Wakatipu to Glenorchy. Expect fresh green valleys, braided rivers, mountain reflections, short nature walks, and quiet photo stops before the busy summer season arrives.",
        descriptionZh:
          "从皇后镇沿瓦卡蒂普湖一路前往格林诺奇，是春季最舒服的风景路线之一。沿途湖光山色相伴，新绿山谷、辫状河流与远处雪山交织成南岛很经典的风景画面。途中可停留 Bennetts Bluff、格林诺奇码头、达特河观景区等经典地点，在游客较少的季节里慢慢前行，感受春天刚刚苏醒的南岛。",
        images: [images.glenorchyHorseLupins, images.glenorchyLupinsLake],
      },
      {
        name: "Lake Tekapo lupin journey",
        nameZh: "特卡波湖鲁冰花之旅",
        description:
          "A flower-focused journey through the Mackenzie Basin when lupins are in bloom. We can build in Lake Pukaki viewpoints, Church of the Good Shepherd, easy lakeside walks, golden-hour photography, and optional stargazing if you want a longer day.",
        descriptionZh:
          "花季时前往麦肯齐盆地，重点欣赏特卡波湖一带的鲁冰花。行程可加入普卡基湖观景点、好牧羊人教堂、轻松湖边散步和黄昏拍照；如果想把一天安排得更完整，也可以延伸到夜晚观星。",
        images: [images.tekapoLupinsLake, images.springTekapoPukakiSnowView],
      },
      {
        name: "Cherry blossom and garden pockets",
        nameZh: "樱花街区与春日花园",
        description:
          "A gentle route for cherry blossom streets, spring gardens, lakeside walks, and local cafe stops around Queenstown, Arrowtown, and nearby residential pockets where the season feels quiet and local.",
        descriptionZh:
          "这是一条轻松的本地春日路线，适合看樱花街道、花园角落和湖边步道。我们会在皇后镇、箭镇及周边安静社区之间安排停留，也可加入咖啡馆小憩，让春天显得更从容、更有当地生活感。",
        images: [images.springCherry, uploadedImages[47], images.springCherryBlueSky],
      },
    ],
    highlights: ["Glenorchy", "Tekapo lupins", "Cherry blossom", "Photography"],
    highlightsZh: ["格林诺奇", "特卡波鲁冰花", "樱花", "摄影"],
  },
  {
    id: "summer",
    label: "Summer",
    labelZh: "夏季",
    months: "December - February",
    monthsZh: "12月 - 2月",
    theme:
      "Long daylight hours, lake adventures, cherry season, and the South Island at its most energetic.",
    themeZh: "白昼很长，湖边活动、樱桃季和夏日公路旅行，让南岛的节奏更轻快。",
    title: "Summer routes for Milford Sound, waterfalls, kayaking, and lake time.",
    titleZh: "夏季路线：樱桃、湖上活动、蒂阿瑙萤火虫与夏日公路旅行。",
    intro:
      "Summer opens up bigger days: Milford Sound waterfalls, lake cruises, kayaking options, swim stops, picnic viewpoints, and late golden-hour drives.",
    introZh:
      "夏天的皇后镇适合把一天安排得更丰富：清晨出发去湖边活动，午后到酒庄和果园，傍晚还有很长的金色光线。我们会按天气、体力和兴趣，把樱桃季、瓦纳卡公路、蒂阿瑙萤火虫或峡湾方向灵活串起来。",
    image:
      images.summerForest,
    heroImages: [images.summerLakeKayakPicnicLevel],
    heroImagePosition: "object-[50%_54%]",
    routes: [
      {
        name: "Queenstown lake and water day",
        nameZh: "皇后镇湖边与水上夏日",
        description:
          "Start local with Lake Wakatipu and Queenstown's summer water energy: kayaking, Moke Lake, Lake Hayes, lake fishing, scenic cruises, jet boating, the Shark Boat, picnic coves, and golden-hour viewpoints.",
        descriptionZh:
          "从皇后镇本地的湖边节奏开始，围绕瓦卡蒂普湖安排皮划艇、湖边野餐、喷射快艇、湖上巡游、湖钓或轻松散步。也可以加入 Moke Lake、Lake Hayes 和傍晚观景点，让一天既有水上活动，也有安静的夏日停留。",
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
        nameZh: "Cromwell 樱桃与酒庄乡野",
        description:
          "A sunny Central Otago day through Gibbston, Bannockburn, Cromwell, and orchard country. Seasonal cherry picking, cellar doors, lakeside stops, fruit stalls, and relaxed winery lunches can all be built in.",
        descriptionZh:
          "夏季去中奥塔哥很适合把樱桃和酒庄安排在同一天。从 Gibbston 到 Bannockburn、Cromwell 和果园乡间，可加入樱桃采摘、果摊停留、酒庄品尝、湖边观景和轻松午餐，节奏可以很悠闲。",
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
        nameZh: "蒂阿瑙、凯普勒步道与萤火虫",
        description:
          "A slower gateway-to-Fiordland route with Te Anau lakefront time and well-known day hike options, including sections inspired by the Kepler Track, forest walks, birdlife, optional glowworm caves, and quiet lake views.",
        descriptionZh:
          "这是一条节奏更从容的峡湾边缘路线，适合想看湖景、森林和萤火虫的客人。可安排蒂阿瑙湖边停留、凯普勒步道灵感的一日轻徒步、森林步道、鸟类观察，也可以加入蒂阿瑙萤火虫洞体验，把夏日白天和夜晚都用得刚刚好。",
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
        nameZh: "米尔福德峡湾瀑布与游船",
        description:
          "A full scenic fiord day with rainforest, alpine road stops, mirror lakes, dramatic valley viewpoints, waterfall watching, and optional Milford Sound cruise or kayak timing depending on weather and pace.",
        descriptionZh:
          "如果想把夏日的一天留给峡湾，可以安排米尔福德方向的完整风景日。沿途有雨林、高山公路停留点、镜湖、山谷观景台和瀑布；抵达后可按天气和节奏衔接峡湾游船，或在合适条件下安排皮划艇体验。",
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
        nameZh: "南部海岸延伸路线",
        description:
          "For adventurous travellers, we can plan a serious South Coast extension toward Bluff for great white shark cage diving, coastal seafood, wild ocean scenery, and overnight routing if needed.",
        descriptionZh:
          "如果时间更充裕，也可以根据兴趣规划南部海岸方向的延伸路线，加入海岸风景、当地海鲜、南端地标或过夜行程。适合想把南岛旅程走得更远、节奏更完整的客人。",
        images: [images.summerBluffShellBeach],
        imageLayout: "portrait",
      },
    ],
    highlights: ["Milford Sound", "Kayaking options", "Lake days", "Late sunsets"],
    highlightsZh: ["樱桃季", "湖上活动", "蒂阿瑙萤火虫", "瓦纳卡公路旅行"],
  },
  {
    id: "autumn",
    label: "Autumn",
    labelZh: "秋季",
    months: "March - May",
    monthsZh: "3月 - 5月",
    theme:
      "Arrowtown autumn colours, vineyard landscapes, and some of the South Island's most beautiful drives.",
    themeZh: "箭镇渐渐转金，酒庄和中奥塔哥的山谷也进入一年中最适合慢慢看的季节。",
    title: "Autumn routes for Arrowtown colour and Central Otago depth.",
    titleZh: "秋季路线：箭镇秋色、Gibbston 酒庄与中奥塔哥风景公路。",
    intro:
      "Autumn is Queenstown's most photogenic slow season: Arrowtown turns gold, Central Otago softens, and the wine roads feel made for private touring.",
    introZh:
      "秋天是皇后镇最适合摄影和慢行的季节之一。箭镇的树色变得温暖，中奥塔哥的山谷光线更柔和，Gibbston 和周边酒庄路段也很适合私人包车慢慢走。",
    image: images.autumnTrees,
    routes: [
      {
        name: "Arrowtown autumn colour walk",
        nameZh: "箭镇秋色慢行",
        description:
          "A golden autumn loop through Arrowtown's riverside colour, Millbrook Resort, quiet resort lanes, and Lake Hayes reflections. Best for slow walking, photo stops, cafes, soft afternoon light, and an easy return from Queenstown.",
        descriptionZh:
          "从皇后镇轻松前往箭镇，适合把时间留给河边秋色、老街散步、咖啡馆和安静的拍照点。可顺路加入 Millbrook Resort 周边、Lake Hayes 倒影和午后柔和光线，是一条不赶路、但很有季节感的半日路线。",
        images: [
          images.autumnArrowtownHillside,
          images.autumnMillbrookValley,
          images.autumnLakeHayes,
        ],
        imageLayout: "landscape",
      },
      {
        name: "Central Otago winery trail",
        nameZh: "中奥塔哥酒庄风景线",
        description:
          "A private wine-country route through Gibbston, Bannockburn, Cromwell, or Bendigo. Pinot Noir, long lunches, cellar doors, lake viewpoints, and autumn vineyard colour make this one of the most relaxed seasonal days.",
        descriptionZh:
          "沿 Gibbston、Bannockburn、Cromwell 或 Bendigo 一带安排私人酒乡路线，适合喜欢黑皮诺、酒庄午餐和开阔风景的客人。秋季葡萄园颜色更有层次，路上也可以加入湖景停留和中奥塔哥山谷观景点。",
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
        nameZh: "Clyde 轻骑行与河谷风景",
        description:
          "A Central Otago cycling-focused day around Clyde and nearby trail sections. Think easy riding, river scenery, historic streets, coffee stops, and vehicle support so the day stays comfortable.",
        descriptionZh:
          "围绕 Clyde 和附近步道安排轻松骑行，很适合想体验中奥塔哥河谷风景、历史街区和咖啡停留的客人。我们可以根据体力选择路段，并用车辆做接驳支持，让一天保持舒适，不需要把行程变成运动挑战。",
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
    highlightsZh: ["箭镇秋色", "Gibbston 酒庄", "中奥塔哥", "摄影"],
  },
  {
    id: "winter",
    label: "Winter",
    labelZh: "冬季",
    months: "June - August",
    monthsZh: "6月 - 8月",
    theme: "Snow-covered mountains, ski days, hot pools, and clear southern skies after dark.",
    themeZh: "雪山、滑雪场、温泉和清冷夜空，让皇后镇的冬天既有活力，也很适合放慢。",
    title: "Winter routes for Queenstown snow views, hot pools, stargazing, and nightlife.",
    titleZh: "冬季路线：雪山风景、滑雪场、Onsen 温泉与清澈夜空。",
    intro:
      "Winter in Queenstown is not only for skiers. Snow scenery, hot pools, early dark skies, lakefront hot chocolate, and lively nights can all be shaped into a private cold-season route.",
    introZh:
      "皇后镇的冬天不只属于滑雪者。即使不滑雪，也可以上山看雪、坐缆车、泡 Onsen Hot Pools、在湖边喝热饮，或等夜色早点落下后看清澈的南半球星空。",
    image:
      images.milford,
    routes: [
      {
        name: "Queenstown snow fields and alpine play",
        nameZh: "皇后镇雪场与高山玩雪",
        description:
          "A flexible winter day around Queenstown's nearby snow fields, including Coronet Peak and The Remarkables. You do not need to ski to enjoy the mountain: go for snow views, family snow play, scenic chairlift time, cafe stops, photos, and extra activities such as Go tobogganing! We can also build in transfers, gear rental stops, beginner-friendly support, or a warm recovery plan after the mountain.",
        descriptionZh:
          "围绕皇后镇附近雪场安排灵活的一日冬季路线，包括 Coronet Peak 和 The Remarkables。即使不滑雪，也可以上山看雪景、玩雪、坐观景缆车、在山上咖啡馆停留和拍照；如果想尝试滑雪，我们也可以加入接送、雪具租赁和适合初学者的安排。",
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
        nameZh: "Onsen 温泉与冬日放松",
        description:
          "A recovery-focused winter route built around Queenstown's best hot pool and spa stops, including the famous Onsen Hot Pools. We can also include the newer hot pool experience near the base of the gondola, so you can ride up for Skyline snow views, come back down, and end the day soaking somewhere warm.",
        descriptionZh:
          "冬天很适合把温泉安排进行程里。可以围绕 Onsen Hot Pools、湖边或山景 spa 体验设计一个放松半日，也可结合 Skyline 观景、山景晚餐或镇中心轻松活动，再用温泉为一天收尾。适合雪场之后恢复体力，也适合完全不滑雪的轻松冬日。",
        images: [],
        imageLayout: "landscape",
      },
      {
        name: "Winter stargazing and southern skies",
        nameZh: "冬季观星与南半球夜空",
        description:
          "Winter gets dark earlier and the air is often clearer, which makes it a beautiful season for southern-sky stargazing. Join a Skyline or Cardrona stargazing experience, look for constellations you do not see in the Northern Hemisphere, or keep it simple on the Lake Wakatipu shore with a hot chocolate and a clear view overhead.",
        descriptionZh:
          "冬季天黑得早，空气也常常更清透，很适合安排观星。可以选择 Skyline 或 Cardrona 一带的观星体验，也可以简单地在瓦卡蒂普湖边停留，带上一杯热饮，看南半球独有的星空和清冷夜色。",
        images: [
          images.winterAuroraTown,
          images.winterAuroraLake,
          images.winterStargazingVanStars,
        ],
        imageLayout: "landscape",
      },
      {
        name: "Queenstown winter nightlife and ice bar",
        nameZh: "皇后镇冬夜与冰吧体验",
        description:
          "A night route for Queenstown after dark: lakefront drinks, small bars, lively town energy, and the ice bar experience for something especially wintry. Good after a snow day, spa afternoon, or stargazing plan when you still want the town to feel alive.",
        descriptionZh:
          "冬天的皇后镇夜晚也很有气氛。雪场、温泉或观星之后，可以安排湖边小酌、镇中心酒吧、餐厅和冰吧体验，让一天从白天的雪景自然过渡到更温暖、热闹的夜晚。",
        images: [
          images.winterNightlifeGroup,
          images.winterNightlifeClub,
        ],
        imageLayout: "mixed",
        imageFit: "contain",
      },
    ],
    highlights: ["Snow fields", "Hot pools", "Stargazing", "Ice bar"],
    highlightsZh: ["雪山风景", "滑雪场", "Onsen 温泉", "清澈夜空"],
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
        ["皇后镇湖边活动", "市区及周边", "约25–40分钟", "半日游"],
        ["Cromwell / Lake Dunstan / 樱桃季", "约60公里单程", "约1小时10分钟单程", "半日至一日游"],
        ["蒂阿瑙 / 峡湾边缘", "约170公里单程", "约2小时20分钟单程", "一日游"],
        ["米尔福德峡湾", "约290公里单程", "约4小时20分钟单程", "一日游"],
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
        ["箭镇秋色", "约20公里单程", "约45分钟单程", "半日游"],
        ["Gibbston 酒庄区", "约25公里单程", "约45分钟单程", "半日游"],
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
        ["箭镇 / Onsen 温泉", "约20–40公里，视路线而定", "约45分钟–1小时5分钟", "半日游"],
        ["特卡波 / 观星延伸路线", "约260公里单程", "约3小时20分钟单程", "建议过夜"],
      ],
    },
  },
};

const servicePages = [
  {
    id: "airport-transfers",
    title: "Queenstown Airport Transfers",
    kicker: "Private Airport Transfers",
    seoTitle: "Queenstown Airport Transfers | Remarkable Routes",
    seoDescription:
      "Book a private Queenstown Airport transfer with a local driver, flight-aware scheduling, door-to-door service, and a comfortable Mercedes people mover.",
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
    whyTitle: "Why Choose Our Airport Transfers",
    why: [
      ["Private door-to-door service", "Travel directly between Queenstown Airport and your accommodation without shared stops."],
      ["Local drivers", "Ride with a local who understands Queenstown roads, accommodation locations, and airport access."],
      ["Flight-aware scheduling", "Share your flight number and we will plan pickup timing around your arrival or departure."],
      ["Comfortable vehicle", "Travel in a clean 7-seat Mercedes people mover with space planned around your group and luggage."],
      ["Made for smaller groups", "A practical option for individuals, couples, families, and small groups of up to 6 passengers."],
    ],
    faqTitle: "Airport Transfer FAQs",
    faqs: [
      ["How much does a Queenstown airport transfer cost?", "Private transfer prices start from $28 and vary by destination. The pricing table above shows our current one-way local rates. Airport terminal pickup or drop-off has a $10 airport access fee."],
      ["Can you accommodate delayed flights?", "Yes. Please include your flight number when booking so we can allow for schedule changes and adjust your pickup where possible."],
      ["How many passengers can travel?", "Our Mercedes people mover can carry up to 6 passengers. Luggage space can be limited for groups above 4, so please tell us how many bags you will have."],
      ["Do you provide child seats?", "Please include each child's age and seating needs in your enquiry. We will confirm suitable child-seat arrangements before your booking is finalised."],
      ["Where will I meet my driver?", "Your pickup instructions will be confirmed before travel. For airport arrivals, your driver will meet you at the agreed terminal meeting point and stay in contact if plans change."],
    ],
    zh: {
      title: "皇后镇机场接送服务",
      kicker: "机场接送服务",
      seoTitle: "皇后镇机场接送服务 | Remarkable Routes",
      seoDescription:
        "预订皇后镇机场私人接送，本地司机按航班时间安排，提供点对点服务，并使用舒适的奔驰商务车接送。",
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
      whyTitle: "为什么选择我们的机场接送",
      why: [
        ["私人点对点接送", "从皇后镇机场直接前往您的住宿地点，无需与其他乘客拼车或中途停靠。"],
        ["本地司机", "熟悉皇后镇道路、住宿地点和机场接送流程，让抵达与离开都更顺畅。"],
        ["配合航班时间", "提供航班号后，我们会根据抵达或出发时间安排接送，并留意行程变化。"],
        ["舒适车辆", "使用整洁舒适的7座奔驰商务车，并根据同行人数与行李情况提前安排。"],
        ["适合小型团队", "适合个人、情侣、家庭及小型团体，最多可乘坐6位客人。"],
      ],
      faqTitle: "机场接送常见问题",
      faqs: [
        ["皇后镇机场接送多少钱？", "私人接送价格由 $28 起，具体取决于目的地。上方价格表列出了目前常用地区的单程价格；机场航站楼接送另收 $10 机场通行费。"],
        ["航班延误可以调整接送时间吗？", "可以。预订时请提供航班号，我们会预留时间关注航班变化，并在条件允许时调整接送安排。"],
        ["最多可以乘坐多少人？", "奔驰商务车最多可乘坐6位客人。超过4位客人时，行李空间可能有限，请在咨询时告诉我们行李数量。"],
        ["可以提供儿童安全座椅吗？", "请在咨询中填写儿童年龄和座椅需求，我们会在确认预订前回复合适的儿童座椅安排。"],
        ["在哪里与司机会合？", "出行前会向您确认清楚的接送说明。机场抵达时，司机会在约定的航站楼会合点等候；如计划变化，也会与您保持联系。"],
      ],
      cta: "咨询接送服务",
    },
  },
  {
    id: "private-day-tours",
    title: "Queenstown Private Charters",
    kicker: "Private touring rates",
    seoTitle: "Queenstown Private Charters | Remarkable Routes",
    seoDescription:
      "Book a private Queenstown charter with a local driver-guide and a flexible itinerary to Glenorchy, Wanaka, Milford Sound, wineries, and scenic stops.",
    intro:
      "Flexible private touring from Queenstown for scenic routes, seasonal stops, food, wine, photography, and easy local planning. Tours use a 7-seat Mercedes people mover and can take up to 6 people. Rates include vehicle and driver-guide service; activities and meals are not included.",
    rates: [
      ["Hourly private touring", "$120 per hour"],
      ["Half day", "$500 for 5 hours"],
      ["Full day", "$920 for 10 hours"],
    ],
    destinationsTitle: "Popular Charter Destinations",
    destinationsIntro:
      "Start with a favourite destination or combine nearby stops into a private route shaped around your time and interests.",
    destinations: ["Glenorchy", "Arrowtown", "Wanaka", "Cardrona", "Cromwell", "Te Anau", "Milford Sound"],
    whyTitle: "Why Choose a Private Charter",
    why: [
      ["Flexible itinerary", "Shape the day around the places and experiences that matter most to you."],
      ["Travel at your own pace", "Spend longer at favourite stops and move on when you are ready."],
      ["Scenic stops", "Build in viewpoints, short walks, local food, and seasonal places along the way."],
      ["Photography opportunities", "Allow time for changing light, quiet viewpoints, and unhurried photo stops."],
      ["Local recommendations", "Use local knowledge to choose sensible routes, timing, and worthwhile detours."],
      ["Small groups and families", "Enjoy a comfortable private day designed for couples, families, and groups of up to 6."],
    ],
    faqTitle: "Private Charter FAQs",
    faqs: [
      ["Can I customise my itinerary?", "Yes. Share your dates, interests, preferred pace, and must-see places, and we will shape a practical private route around them."],
      ["How many stops can we make?", "There is no fixed number. The best plan depends on distance, road conditions, and how long you would like at each stop."],
      ["Can we visit multiple destinations in one day?", "Yes, when the driving times work comfortably. Nearby places such as Arrowtown, Cardrona, and Wanaka can often be combined, while longer routes may need a full day or overnight plan."],
      ["What vehicle is used?", "Private charters use a 7-seat Mercedes people mover for up to 6 passengers. Please tell us about larger luggage items when enquiring."],
      ["Is a driver-guide included?", "Yes. The charter rate includes the vehicle and local driver-guide service. Activity tickets, meals, and other third-party costs are separate unless stated otherwise."],
    ],
    zh: {
      title: "皇后镇私人包车一日游",
      kicker: "私人包车价格",
      seoTitle: "皇后镇私人包车服务 | Remarkable Routes",
      seoDescription:
        "预订皇后镇私人包车，由本地司机向导灵活安排格林诺奇、瓦纳卡、米尔福德峡湾、酒庄与沿途风景停留。",
      intro:
        "从皇后镇出发，灵活安排风景路线、季节停留、美食、酒庄、摄影和本地轻松规划。行程使用7座奔驰商务车，最多可乘坐6位客人。价格包含车辆与司机向导服务；活动门票与餐食不包含在内。",
      rates: [
        ["私人包车按小时", "每小时 $120"],
        ["半日行程", "5小时 $500"],
        ["一日行程", "10小时 $920"],
      ],
      destinationsTitle: "热门包车目的地",
      destinationsIntro: "可以从一个喜欢的目的地开始，也可以按时间与兴趣组合附近停留点，设计专属路线。",
      destinations: ["格林诺奇", "箭镇", "瓦纳卡", "卡德罗纳", "Cromwell", "蒂阿瑙", "米尔福德峡湾"],
      whyTitle: "为什么选择私人包车",
      why: [
        ["灵活安排行程", "围绕您真正想看的地方和体验设计当天路线。"],
        ["按自己的节奏旅行", "喜欢的地方可以多停留一会儿，准备好后再继续出发。"],
        ["沿途风景停留", "可加入观景点、短途散步、当地美食和季节限定地点。"],
        ["摄影机会", "为光线变化、安静观景点和从容拍照留出时间。"],
        ["本地建议", "根据本地经验选择合理路线、出发时间和值得停留的小绕路。"],
        ["适合家庭与小型团体", "为情侣、家庭和最多6位客人的小团体安排舒适私人行程。"],
      ],
      faqTitle: "私人包车常见问题",
      faqs: [
        ["可以定制行程吗？", "可以。请告诉我们日期、兴趣、喜欢的节奏和必去地点，我们会据此设计合理的私人路线。"],
        ["一天可以停留多少个地点？", "没有固定数量。合适的安排取决于行驶距离、路况，以及您希望在每个地点停留多久。"],
        ["一天可以前往多个目的地吗？", "可以，只要整体车程保持舒适。箭镇、卡德罗纳和瓦纳卡等附近地点通常可以组合；较远路线可能需要完整一日或过夜安排。"],
        ["使用什么车辆？", "私人包车使用7座奔驰商务车，最多可乘坐6位客人。如有大型行李，请在咨询时提前说明。"],
        ["费用包含司机向导吗？", "包含。包车价格包含车辆与本地司机向导服务；活动门票、餐食及其他第三方费用需另行支付，除非特别说明。"],
      ],
      cta: "咨询私人包车",
    },
  },
  {
    id: "queenstown-private-tours",
    title: "Queenstown Private Tours",
    kicker: "Private touring from Queenstown",
    seoTitle: "Queenstown Private Tours | Remarkable Routes",
    seoDescription:
      "Plan a Queenstown private tour with a local driver-guide and a flexible itinerary to Glenorchy, Wanaka, Arrowtown, Milford Sound, and beyond.",
    intro:
      "Explore Queenstown and the South Island on a private tour shaped around your pace, interests, and available time. Choose an easy local half-day, a full scenic day, or a longer journey with a local driver-guide and a comfortable 7-seat Mercedes people mover.",
    serviceLinksTitle: "Choose Your Private Travel Service",
    serviceLinks: [
      {
        title: "Airport Transfers",
        description: "Private door-to-door travel between Queenstown Airport and your accommodation, timed around your flight.",
        href: "/airport-transfers",
        serviceId: "airport-transfers",
      },
      {
        title: "Private Charters",
        description: "Flexible hourly, half-day, and full-day touring with scenic stops and practical local recommendations.",
        href: "/private-charters",
        serviceId: "private-day-tours",
      },
    ],
    destinationsTitle: "Popular Queenstown Private Tour Routes",
    destinationsIntro:
      "Start with one destination or ask us to combine nearby places into a comfortable route for your group.",
    destinations: ["Glenorchy", "Wanaka", "Arrowtown", "Milford Sound"],
    whyTitle: "Private Touring, Planned Around You",
    why: [
      ["A route that fits your day", "Plan around your arrival time, must-see places, activity bookings, and preferred pace."],
      ["Local driver-guide", "Use practical local knowledge for timing, scenic stops, weather changes, and worthwhile detours."],
      ["Comfortable small-group travel", "Travel privately as an individual, couple, family, or group of up to 6 passengers."],
      ["Time for the places you enjoy", "Pause for photography, short walks, food, lake views, or seasonal highlights without following a fixed coach schedule."],
    ],
    faqTitle: "Queenstown Private Tour FAQs",
    faqs: [
      ["What can I include in a Queenstown private tour?", "Your tour can include scenic drives, viewpoints, short walks, local food, wineries, activity connections, and destinations such as Glenorchy, Wanaka, Arrowtown, or Milford Sound."],
      ["Can I customise the itinerary?", "Yes. Tell us your dates, group size, interests, and must-see places, and we will suggest a practical route with comfortable driving times."],
      ["How long is a private tour?", "Private touring can be booked by the hour, as a half-day, or as a full day. Longer and multi-day plans can also be discussed."],
      ["How many passengers can travel?", "Our 7-seat Mercedes people mover carries up to 6 passengers. Please include your luggage details when enquiring, especially for airport pickups or longer journeys."],
      ["Can I combine an airport transfer with a tour?", "Yes. Depending on your flight time and luggage, we can plan a direct transfer or add suitable scenic stops before hotel check-in or departure."],
    ],
    cta: "Plan your private tour",
    zh: {
      title: "皇后镇私人旅行",
      kicker: "从皇后镇出发的私人行程",
      seoTitle: "皇后镇私人旅行 | Remarkable Routes",
      seoDescription: "由本地司导为您安排皇后镇私人旅行，灵活前往格林诺奇、瓦纳卡、箭镇、米尔福德峡湾及南岛更多目的地。",
      intro: "从皇后镇出发，按照您的时间、兴趣和旅行节奏安排私人行程。无论是轻松的半日路线、完整的一日风景行程，还是更远的南岛旅程，都可乘坐舒适的7座奔驰商务车，由本地司导陪同出发。",
      serviceLinksTitle: "选择适合您的私人出行服务",
      serviceLinks: [
        {
          title: "机场接送",
          description: "皇后镇机场与住宿地点之间的私人点对点接送，并根据航班时间安排出发。",
          href: "/airport-transfers",
          serviceId: "airport-transfers",
        },
        {
          title: "私人包车",
          description: "可按小时、半日或一日安排，灵活加入沿途风景停留与实用本地建议。",
          href: "/private-charters",
          serviceId: "private-day-tours",
        },
      ],
      destinationsTitle: "热门皇后镇私人路线",
      destinationsIntro: "可以选择一个主要目的地，也可以告诉我们您的兴趣，由我们组合附近地点，安排节奏舒适的专属路线。",
      destinations: ["格林诺奇", "瓦纳卡", "箭镇", "米尔福德峡湾"],
      whyTitle: "围绕您的需要安排行程",
      why: [
        ["适合当天时间的路线", "根据抵达时间、必去地点、活动预订和喜欢的节奏来规划。"],
        ["本地司导", "结合本地经验安排出发时间、风景停留、天气变化和值得前往的小绕路。"],
        ["舒适的小团体出行", "适合个人、情侣、家庭及最多6位客人的私人小团体。"],
        ["把时间留给喜欢的地方", "可从容安排摄影、短途散步、当地美食、湖景和季节限定体验，无需跟随固定大巴行程。"],
      ],
      faqTitle: "皇后镇私人旅行常见问题",
      faqs: [
        ["皇后镇私人旅行可以包含哪些内容？", "可安排风景公路、观景点、短途散步、当地美食、酒庄、活动接送，以及格林诺奇、瓦纳卡、箭镇或米尔福德峡湾等目的地。"],
        ["可以定制行程吗？", "可以。请告诉我们日期、人数、兴趣和必去地点，我们会按照舒适的车程与停留时间建议合适路线。"],
        ["私人行程通常多长？", "可按小时、半日或一日预订，也欢迎咨询更长时间或多日行程。"],
        ["最多可以乘坐多少人？", "7座奔驰商务车最多可乘坐6位客人。如包含机场接送或长途行程，请在咨询时说明行李数量。"],
        ["可以把机场接送和私人行程结合吗？", "可以。我们会根据航班时间和行李情况，安排直接接送，或在入住酒店、前往机场之前加入合适的风景停留。"],
      ],
      cta: "定制私人行程",
    },
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
    zh: {
      title: "活动预订",
      kicker: "限时活动优惠",
      intro:
        "大部分新西兰活动可享受95折预订，包括皇后镇 Skyline 缆车、TSS Earnslaw 蒸汽船、直升机体验等。",
      details: [
        "部分活动可随时预订，并立即使用优惠。",
        "部分活动需要提前预订，优惠才可确认。",
        "部分活动需要先查询名额，提交需求后我们会为您确认可订选项。",
      ],
      cta: "咨询活动预订",
    },
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
    zh: {
      title: "最新优惠",
      kicker: "季节限定优惠",
      intro:
        "欢迎咨询当前适用的季节优惠，范围包括私人包车、接送服务、活动预订、雪场行程、酒庄路线和湖边体验。",
      details: [
        "优惠会根据天气、合作方名额和出行日期而变化。",
        "如条件合适，我们可以把私人交通与优惠活动组合安排。",
        "请发送您的日期、人数和想体验的内容，我们会帮您查询当前最合适的选择。",
      ],
      cta: "咨询最新优惠",
    },
  },
];

const serviceNavItems = [
  { id: "airport-transfers", en: "Airport Transfers", zh: "机场接送", path: "/airport-transfers" },
  { id: "private-day-tours", en: "Private Charters", zh: "包车服务", path: "/private-charters" },
  { id: "activity-bookings", en: "Activity Bookings", zh: "活动预订" },
  { id: "latest-deals", en: "Special Offers", zh: "特别优惠" },
];

const servicePaths = {
  "airport-transfers": "/airport-transfers",
  "private-day-tours": "/private-charters",
  "queenstown-private-tours": "/queenstown-private-tours",
};

const serviceIdsByPath = Object.fromEntries(
  Object.entries(servicePaths).map(([serviceId, path]) => [path, serviceId]),
);

const defaultSeo = {
  en: {
    title: "Remarkable Routes | Queenstown Private Tours",
    description:
      "Remarkable Routes creates private luxury adventure tours from Queenstown to Milford Sound, Glenorchy, Wanaka, Lake Hawea, and custom South Island destinations.",
  },
  zh: {
    title: "Remarkable Routes | 皇后镇私人旅行",
    description: "从皇后镇出发的私人南岛旅行、风景路线、机场接送与定制包车服务。",
  },
};

const siteUrl = "https://remarkableroutes.com";

function normalisePath(pathname) {
  if (pathname === "/") return pathname;
  return pathname.replace(/\/+$/, "");
}

function getRouteFromPath(pathname) {
  const serviceId = serviceIdsByPath[normalisePath(pathname)];
  return serviceId ? { view: "service", serviceId } : { view: "home", serviceId: servicePages[0].id };
}

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
        messagePlaceholder:
          "Tell us your travel dates, group size, places you'd like to visit, and experiences you're interested in.\nIf you have a promo code, referral, or special request, feel free to include it here.",
        successTitle: "Thank you for your enquiry.",
        successBody: "We have received your message and will reply within 24 hours.",
        successRedirect: "Redirecting you back to Routes...",
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
        messagePlaceholder:
          "告诉我们您的出行日期、人数、想去的地方或喜欢的体验。\n如有优惠码、推荐人或特殊需求，也欢迎一并填写。",
        successTitle: "感谢您的咨询。",
        successBody: "我们已经收到您的信息，并将在24小时内回复。",
        successRedirect: "正在返回路线页面...",
        error: "提交失败，请发送邮件至 info@remarkableroutes.com。",
        dateError: "请选择行程类型和旅行日期。",
      },
    },
  },
};

function App() {
  const initialRoute = React.useRef(getRouteFromPath(window.location.pathname)).current;
  const [language, setLanguage] = React.useState("en");
  const [view, setView] = React.useState(initialRoute.view);
  const [shouldOpenContact, setShouldOpenContact] = React.useState(false);
  const [selectedSeasonId, setSelectedSeasonId] = React.useState("spring");
  const [selectedServiceId, setSelectedServiceId] = React.useState(initialRoute.serviceId);
  const text = copy[language];
  const selectedSeason = seasons.find((season) => season.id === selectedSeasonId);
  const selectedService = servicePages.find((service) => service.id === selectedServiceId);

  React.useEffect(() => {
    function handlePopState() {
      const route = getRouteFromPath(window.location.pathname);
      setView(route.view);
      setSelectedServiceId(route.serviceId);
      window.scrollTo({ top: 0, behavior: "auto" });
    }

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  React.useEffect(() => {
    const isStandaloneService = view === "service" && servicePaths[selectedServiceId];
    const serviceContent =
      language === "zh" && selectedService?.zh
        ? { ...selectedService, ...selectedService.zh }
        : selectedService;
    const seo = isStandaloneService
      ? {
          title: serviceContent.seoTitle,
          description: serviceContent.seoDescription,
        }
      : defaultSeo[language];

    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    document.title = seo.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", seo.description);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute(
      "href",
      `${siteUrl}${isStandaloneService ? servicePaths[selectedServiceId] : "/"}`,
    );
  }, [language, selectedService, selectedServiceId, view]);

  React.useEffect(() => {
    if (!shouldOpenContact) {
      return;
    }

    window.requestAnimationFrame(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      setShouldOpenContact(false);
    });
  }, [shouldOpenContact, view]);

  function goTo(viewName, path = "/") {
    if (normalisePath(window.location.pathname) !== path) {
      window.history.pushState({}, "", path);
    }
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
    goTo("service", servicePaths[serviceId] ?? "/");
  }

  function openContact() {
    if (view === "season" || view === "service") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      return;
    }

    setSelectedServiceId(servicePages[0].id);
    setShouldOpenContact(true);
    openService(servicePages[0].id);
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
          <Contact onSuccess={openRoutes} text={text.contact} />
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
          <Contact onSuccess={openRoutes} text={text.contact} />
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
    <nav className="site-nav relative z-20 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
      <button
        className={`site-brand logo-brand ${isLight ? "logo-brand-light" : "logo-brand-dark"}`}
        onClick={onHome}
        type="button"
        aria-label="Remarkable Routes home"
      >
        <img
          className="brand-logo"
          src={isLight ? logoLightNav : logoDarkNav}
          alt="Remarkable Routes"
        />
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
      {serviceNavItems.map((item) =>
        item.path ? (
          <a
            className="services-nav-item block w-full text-left font-semibold text-stone-950 transition hover:bg-teal-50 hover:text-teal-800"
            href={item.path}
            key={item.id}
            onClick={(event) => {
              if (
                event.button !== 0 ||
                event.metaKey ||
                event.ctrlKey ||
                event.shiftKey ||
                event.altKey
              ) {
                return;
              }
              event.preventDefault();
              onSelectService(item.id);
            }}
          >
            {language === "zh" ? item.zh : item.en}
          </a>
        ) : (
          <button
            className="services-nav-item block w-full text-left font-semibold text-stone-950 transition hover:bg-teal-50 hover:text-teal-800"
            key={item.id}
            onClick={() => onSelectService(item.id)}
            type="button"
          >
            {language === "zh" ? item.zh : item.en}
          </button>
        ),
      )}
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
    spring: { label: "春季", months: "9月 - 11月" },
    summer: { label: "夏季", months: "12月 - 2月" },
    autumn: { label: "秋季", months: "3月 - 5月" },
    winter: { label: "冬季", months: "6月 - 8月" },
  };
  const getSeasonLabel = (season) =>
    language === "zh" ? seasonChineseLabels[season.id]?.label ?? season.label : season.label;
  const getSeasonMonths = (season) =>
    language === "zh" ? seasonChineseLabels[season.id]?.months ?? season.months : season.months;

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
              <article
                className={`group relative h-[420px] overflow-hidden rounded-md border bg-stone-200 transition sm:h-[520px] ${
                  activeIndex === index
                    ? "border-teal-700 shadow-lg"
                    : "border-stone-200 opacity-80 hover:border-teal-500 hover:opacity-100"
                }`}
                key={season.id}
                aria-current={activeIndex === index ? "true" : undefined}
              >
                <img
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  src={season.image}
                  alt={`${getSeasonLabel(season)} in New Zealand`}
                />
                <button
                  className="season-panel-selector absolute inset-0 focus:outline-none focus-visible:ring-4 focus-visible:ring-teal-300"
                  onClick={() => setActiveIndex(index)}
                  type="button"
                  aria-label={`Show ${getSeasonLabel(season)} details`}
                  aria-pressed={activeIndex === index}
                />
                <div className="season-card-copy absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-stone-950/70 to-transparent p-5 text-left text-white">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-100">
                    {getSeasonMonths(season)}
                  </p>
                  <h3 className="mt-2 text-3xl font-semibold">
                    <button
                      className="season-title-link focus:outline-none focus-visible:ring-4 focus-visible:ring-teal-300"
                      onClick={() => onSelectSeason(season.id)}
                      type="button"
                    >
                      {getSeasonLabel(season)}
                    </button>
                  </h3>
                </div>
              </article>
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
                <button
                  className="season-title-link season-title-link-dark focus:outline-none focus-visible:ring-4 focus-visible:ring-teal-300"
                  onClick={() => onSelectSeason(activeSeason.id)}
                  type="button"
                >
                  {getSeasonLabel(activeSeason)}
                </button>
              </h3>
              <p className="mt-2 max-w-2xl text-base leading-7 text-stone-600">
                {language === "zh" ? activeSeason.themeZh : activeSeason.theme}
              </p>
            </div>
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
            {serviceContent.serviceLinks?.length > 0 && (
              <div className="grid gap-3">
                <h2 className="text-lg font-semibold text-stone-950">
                  {serviceContent.serviceLinksTitle}
                </h2>
                {serviceContent.serviceLinks.map((option) => (
                  <a
                    className="rounded-md bg-stone-50 px-4 py-4 transition hover:bg-teal-50"
                    href={option.href}
                    key={option.serviceId}
                    onClick={(event) => {
                      if (
                        event.button !== 0 ||
                        event.metaKey ||
                        event.ctrlKey ||
                        event.shiftKey ||
                        event.altKey
                      ) {
                        return;
                      }
                      event.preventDefault();
                      onSelectService(option.serviceId);
                    }}
                  >
                    <h3 className="font-semibold text-stone-950">{option.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-stone-600">{option.description}</p>
                  </a>
                ))}
              </div>
            )}

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
              {serviceContent.cta ?? (language === "zh" ? "立即咨询" : "Enquire now")}
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {serviceContent.destinations?.length > 0 && (
          <section className="mt-8 border-t border-stone-200 pt-8" aria-labelledby="charter-destinations">
            <h2 className="text-3xl font-semibold text-stone-950" id="charter-destinations">
              {serviceContent.destinationsTitle}
            </h2>
            <p className="mt-3 max-w-3xl leading-7 text-stone-600">
              {serviceContent.destinationsIntro}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {serviceContent.destinations.map((destination) => (
                <a
                  className="rounded-md border border-stone-200 bg-white px-4 py-3 font-semibold text-stone-950 transition hover:border-teal-700 hover:text-teal-700"
                  href="/"
                  key={destination}
                  onClick={(event) => {
                    if (
                      event.button !== 0 ||
                      event.metaKey ||
                      event.ctrlKey ||
                      event.shiftKey ||
                      event.altKey
                    ) {
                      return;
                    }
                    event.preventDefault();
                    onRoutes();
                  }}
                >
                  {destination}
                </a>
              ))}
            </div>
          </section>
        )}

        {serviceContent.why?.length > 0 && (
          <section className="mt-8 border-t border-stone-200 pt-8" aria-labelledby="service-benefits">
            <h2 className="text-3xl font-semibold text-stone-950" id="service-benefits">
              {serviceContent.whyTitle}
            </h2>
            <div className="mt-5 grid gap-3">
              {serviceContent.why.map(([title, description]) => (
                <article className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm" key={title}>
                  <h3 className="text-lg font-semibold text-stone-950">{title}</h3>
                  <p className="mt-2 leading-7 text-stone-600">{description}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {serviceContent.faqs?.length > 0 && (
          <section className="mt-8 border-t border-stone-200 pt-8" aria-labelledby="service-faqs">
            <h2 className="text-3xl font-semibold text-stone-950" id="service-faqs">
              {serviceContent.faqTitle}
            </h2>
            <div className="mt-5 grid gap-3">
              {serviceContent.faqs.map(([question, answer]) => (
                <article className="rounded-lg border border-stone-200 bg-white p-5" key={question}>
                  <h3 className="text-lg font-semibold text-stone-950">{question}</h3>
                  <p className="mt-2 leading-7 text-stone-600">{answer}</p>
                </article>
              ))}
            </div>
          </section>
        )}
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
  const isChinese = language === "zh";
  const seasonLabel = isChinese ? season.labelZh ?? season.label : season.label;
  const seasonMonths = isChinese ? season.monthsZh ?? season.months : season.months;
  const seasonTitle = isChinese ? season.titleZh ?? season.title : season.title;
  const seasonIntro = isChinese ? season.introZh ?? season.intro : season.intro;
  const seasonHighlights = isChinese ? season.highlightsZh ?? season.highlights : season.highlights;
  const activeRouteName = isChinese ? activeRoute.nameZh ?? activeRoute.name : activeRoute.name;
  const recommendationLabel = isChinese ? "季节路线推荐" : "Seasonal recommendations";
  const imageCounterLabel = isChinese
    ? `图片 ${featureImageIndex + 1} / ${featureImages.length}`
    : `Image ${featureImageIndex + 1} / ${featureImages.length}`;
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
    <section className="season-detail bg-stone-100 text-stone-950">
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
      <div className="season-detail-container mx-auto max-w-7xl px-5 pb-10 pt-8 sm:px-8">
        <div className="season-detail-grid grid min-w-0 grid-cols-1 overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="min-w-0">
          <div
            className={`relative aspect-[4/3] min-w-0 w-full max-w-full overflow-hidden ${
              isMixedRoute ? "bg-stone-950" : ""
            }`}
          >
            <img
              className={`absolute inset-0 h-full w-full ${featureImageFit} ${featureImagePosition}`}
              src={featureImages[featureImageIndex]}
              alt={`${activeRouteName} route highlight`}
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
                  aria-label={isChinese ? "上一张路线图片" : "Previous route image"}
                >
                  <ArrowRight className="size-4 rotate-180" aria-hidden="true" />
                </button>
                <button
                  className="grid size-10 place-items-center rounded-full border border-white/60 bg-white/85 text-stone-950 shadow-lg backdrop-blur transition hover:bg-white"
                  onClick={nextRouteImage}
                  type="button"
                  aria-label={isChinese ? "下一张路线图片" : "Next route image"}
                >
                  <ArrowRight className="size-4" aria-hidden="true" />
                </button>
              </div>
            )}
            <div className="absolute bottom-0 p-6 text-white sm:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-100">
                {seasonMonths}
              </p>
              <h1 className="mt-3 text-4xl font-semibold sm:text-6xl">{seasonLabel}</h1>
              <p className="mt-3 max-w-xl text-base font-semibold text-white/90">
                {activeRouteName}
              </p>
              {featureImages.length > 1 && (
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-white/75">
                  {imageCounterLabel}
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
          <div className="season-detail-content p-6 sm:p-8 lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-700">
              {recommendationLabel}
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{seasonTitle}</h2>
            <p className="mt-4 leading-7 text-stone-600">{seasonIntro}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {seasonHighlights.map((highlight) => (
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
                <div className="season-route-card rounded-lg border border-stone-200 bg-stone-50" key={route.name}>
                  <button
                    className="season-route-toggle flex w-full items-center justify-between gap-4 px-4 py-4 text-left"
                    onClick={() => setOpenRoute(openRoute === index ? null : index)}
                    type="button"
                    aria-expanded={openRoute === index}
                  >
                    <span className="min-w-0 font-semibold">
                      {isChinese ? route.nameZh ?? route.name : route.name}
                    </span>
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
                      <p className="season-route-description text-sm leading-6 text-stone-600">
                        {language === "zh" && route.descriptionZh ? route.descriptionZh : route.description}
                      </p>
                      {route.images?.length > 0 && (
                        <div className="route-image-grid mt-4 flex gap-3 overflow-x-auto pb-1">
                          {route.images.map((image, imageIndex) => (
                            <button
                              className={`route-image-thumb shrink-0 overflow-hidden rounded-md border border-stone-200 bg-stone-200 transition hover:border-teal-700 ${
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
                              aria-label={
                                isChinese
                                  ? `查看${route.nameZh ?? route.name}图片 ${imageIndex + 1}`
                                  : `Show ${route.name} image ${imageIndex + 1}`
                              }
                            >
                              <img
                                className={`h-full w-full ${
                                  route.imageLayout === "mixed" ? "object-contain" : "object-cover"
                                }`}
                                src={image}
                                alt={`${
                                  isChinese ? route.nameZh ?? route.name : route.name
                                } thumbnail ${imageIndex + 1}`}
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
                  <span className="font-semibold text-teal-950">
                    {isChinese ? "定制您的专属行程" : "Customise your trip"}
                  </span>
                  <Sparkles className="size-5 shrink-0 text-teal-700" aria-hidden="true" />
                </div>
                <p className="mt-2 text-sm leading-6 text-teal-900">
                  {isChinese
                    ? "告诉我们您的出行日期、旅行节奏、同行人数，以及想看的风景和体验。我们会根据您的需求设计专属路线。"
                    : "Tell us your dates, pace, group style, and must-see places. We will shape the route around you."}
                </p>
              </div>
            </div>

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

function Contact({ onSuccess, text }) {
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
      {isEnquiryOpen && (
        <EnquiryModal
          formText={text.form}
          onClose={() => setIsEnquiryOpen(false)}
          onSuccess={() => {
            setIsEnquiryOpen(false);
            onSuccess?.();
          }}
        />
      )}
    </section>
  );
}

function EnquiryModal({ formText, onClose, onSuccess }) {
  const [status, setStatus] = React.useState("idle");
  const [statusMessage, setStatusMessage] = React.useState("");
  const [resetCount, setResetCount] = React.useState(0);
  const isSuccess = status === "success";

  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape" && !isSuccess) {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSuccess, onClose]);

  React.useEffect(() => {
    if (!isSuccess) {
      return undefined;
    }

    const redirectTimer = window.setTimeout(() => {
      onSuccess();
    }, 3000);

    return () => window.clearTimeout(redirectTimer);
  }, [isSuccess, onSuccess]);

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
    formData.append("from_name", "Remarkable Routes");

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
      setStatusMessage("");
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
      onClick={isSuccess ? undefined : onClose}
      role="presentation"
    >
      <div
        className={`w-full rounded-lg border border-stone-200 bg-white shadow-xl ${
          isSuccess ? "max-w-xl p-7 text-center sm:p-10" : "max-w-2xl p-5 sm:p-7"
        }`}
        style={{ maxHeight: "90vh", overflowY: "auto" }}
        onClick={(event) => event.stopPropagation()}
      >
        {isSuccess ? (
          <div className="grid justify-items-center gap-5">
            <span className="grid size-16 place-items-center rounded-full bg-teal-50 text-teal-700 ring-1 ring-teal-200">
              <CheckCircle className="size-9" aria-hidden="true" />
            </span>
            <div>
              <h2 className="text-3xl font-semibold text-stone-950">{formText.successTitle}</h2>
              <p className="mt-3 text-base font-medium leading-7 text-stone-600">
                {formText.successBody}
              </p>
            </div>
            <p className="rounded-full bg-stone-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-teal-800">
              {formText.successRedirect}
            </p>
          </div>
        ) : (
          <>
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
              className="rounded-md bg-stone-100 px-4 py-3 text-sm font-semibold text-stone-700"
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
          </>
        )}
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
