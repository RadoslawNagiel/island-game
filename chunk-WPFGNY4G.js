// src/utils/interfaces/biomes.ts
var BiomeType;
(function(BiomeType2) {
  BiomeType2["sea"] = "sea";
  BiomeType2["inlandWaters"] = "inlandWaters";
  BiomeType2["waterfront"] = "waterfront";
  BiomeType2["grass"] = "grass";
  BiomeType2["forest"] = "forest";
  BiomeType2["mountain"] = "mountain";
  BiomeType2["snow"] = "snow";
})(BiomeType || (BiomeType = {}));
var BIOMES = {
  [BiomeType.sea]: {
    threshold: 3e-3,
    image: "assets/images/textures/water.jpg",
    plantDensity: 0.05,
    colorFrom: [28, 78, 75],
    colorTo: [47, 131, 126]
  },
  [BiomeType.inlandWaters]: {
    threshold: 3e-3,
    image: "assets/images/textures/water.jpg",
    plantDensity: 0.05,
    colorFrom: [28, 78, 75],
    colorTo: [47, 131, 126]
  },
  [BiomeType.waterfront]: {
    threshold: 4e-3,
    image: "assets/images/textures/sand.webp",
    plantDensity: 0.05,
    colorFrom: [169, 141, 86],
    colorTo: [160, 129, 68]
  },
  [BiomeType.grass]: {
    threshold: 0.015,
    image: "assets/images/textures/grass.webp",
    plantDensity: 0.1,
    colorFrom: [81, 105, 31],
    colorTo: [64, 84, 24]
  },
  [BiomeType.forest]: {
    threshold: 0.12,
    image: "assets/images/textures/forest.jpg",
    plantDensity: 0.7,
    colorFrom: [49, 63, 28],
    colorTo: [39, 50, 22]
  },
  [BiomeType.mountain]: {
    threshold: 0.5,
    image: "assets/images/textures/mountain.webp",
    plantDensity: 0.01,
    colorFrom: [84, 82, 63],
    colorTo: [67, 65, 50]
  },
  [BiomeType.snow]: {
    threshold: 1,
    image: "assets/images/textures/snow.webp",
    plantDensity: 0,
    colorFrom: [161, 164, 164],
    colorTo: [212, 215, 215]
  }
};
var getBiome = (type) => BIOMES[type];
var getBiomeFromHeight = (height, waterThreshold) => {
  if (waterThreshold && height < waterThreshold)
    return BiomeType.sea;
  for (const [key, biome] of Object.entries(BIOMES)) {
    if (height < biome.threshold)
      return key;
  }
  return BiomeType.snow;
};

// src/utils/interfaces/tools.ts
var ToolType;
(function(ToolType2) {
  ToolType2["spear"] = "spear";
  ToolType2["bow"] = "bow";
  ToolType2["arrow"] = "arrow";
  ToolType2["fishingRod"] = "fishingRod";
  ToolType2["harpoon"] = "harpoon";
  ToolType2["net"] = "net";
  ToolType2["snare"] = "snare";
  ToolType2["trap"] = "trap";
  ToolType2["slingshot"] = "slingshot";
  ToolType2["huntingKnife"] = "huntingKnife";
  ToolType2["knife"] = "knife";
  ToolType2["boat"] = "boat";
  ToolType2["climbingRope"] = "climbingRope";
  ToolType2["axe"] = "axe";
  ToolType2["sickle"] = "sickle";
  ToolType2["shovel"] = "shovel";
  ToolType2["basket"] = "basket";
})(ToolType || (ToolType = {}));
var TOOLS = {
  spear: {
    name: "\u0141opata",
    weight: 3
  },
  bow: {
    name: "\u0141uk",
    weight: 2
  },
  arrow: {
    name: "Strza\u0142a",
    weight: 0.12
  },
  fishingRod: {
    name: "W\u0119dka",
    weight: 1.5
  },
  harpoon: {
    name: "Harpun",
    weight: 4
  },
  net: {
    name: "Siatka",
    weight: 2
  },
  snare: {
    name: "Sid\u0142a",
    weight: 0.25
  },
  trap: {
    name: "Pu\u0142apka",
    weight: 5
  },
  slingshot: {
    name: "Proca",
    weight: 0.35
  },
  huntingKnife: {
    name: "N\xF3\u017C My\u015Bliwski",
    weight: 0.5
  },
  knife: {
    name: "Ma\u0142y N\xF3\u017C",
    weight: 0.2
  },
  boat: {
    name: "\u0141\xF3dka",
    weight: 10
  },
  climbingRope: {
    name: "Sznur wspinaczkowy",
    weight: 4
  },
  axe: {
    name: "Top\xF3r",
    weight: 2.5
  },
  sickle: {
    name: "Sierp",
    weight: 0.9
  },
  shovel: {
    name: "\u0141opata",
    weight: 3.2
  },
  basket: {
    name: "Kosz",
    weight: 1
  }
};
var getTool = (type) => TOOLS[type];

// src/utils/interfaces/food.ts
var FoodType;
(function(FoodType2) {
  FoodType2["olive"] = "olive";
  FoodType2["fig"] = "fig";
  FoodType2["grape"] = "grape";
  FoodType2["herb"] = "herb";
  FoodType2["edibleLeaf"] = "edibleLeaf";
  FoodType2["cactusFruit"] = "cactusFruit";
  FoodType2["seaweed"] = "seaweed";
  FoodType2["asparagus"] = "asparagus";
  FoodType2["edibleRoot"] = "edibleRoot";
})(FoodType || (FoodType = {}));
var FOODS = {
  [FoodType.olive]: {
    name: `Oliwa`,
    weight: 0.15
  },
  [FoodType.fig]: {
    name: `Figi`,
    weight: 0.12
  },
  [FoodType.grape]: {
    name: `Winogrono`,
    weight: 0.08
  },
  [FoodType.herb]: {
    name: `Zio\u0142o`,
    weight: 0.02
  },
  [FoodType.edibleLeaf]: {
    name: `Jadalny li\u015B\u0107`,
    weight: 0
  },
  [FoodType.cactusFruit]: {
    name: `Owoce kaktusa`,
    weight: 0.18
  },
  [FoodType.seaweed]: {
    name: `Wodorosty`,
    weight: 0.25
  },
  [FoodType.asparagus]: {
    name: `Szparagi`,
    weight: 0.12
  },
  [FoodType.edibleRoot]: {
    name: `Jadalne korzenie`,
    weight: 0.4
  }
};
var getFood = (type) => FOODS[type];

// src/utils/interfaces/resource.ts
var ResourceType;
(function(ResourceType2) {
  ResourceType2["wood"] = "wood";
  ResourceType2["firewood"] = "firewood";
  ResourceType2["fiber"] = "fiber";
  ResourceType2["resin"] = "resin";
  ResourceType2["oil"] = "oil";
  ResourceType2["seeds"] = "seeds";
  ResourceType2["thatch"] = "thatch";
  ResourceType2["tinder"] = "tinder";
})(ResourceType || (ResourceType = {}));
var RESOURCES = {
  [ResourceType.wood]: {
    name: `Drewno`,
    weight: 9
  },
  [ResourceType.firewood]: {
    name: `Drewno opa\u0142owe`,
    weight: 0
  },
  [ResourceType.fiber]: {
    name: `W\u0142\xF3kno`,
    weight: 0.5
  },
  [ResourceType.resin]: {
    name: `\u017Bywica`,
    weight: 0.35
  },
  [ResourceType.oil]: {
    name: `Olej`,
    weight: 0.5
  },
  [ResourceType.seeds]: {
    name: `Nasiona`,
    weight: 0.02
  },
  [ResourceType.thatch]: {
    name: `S\u0142oma`,
    weight: 0.6
  },
  [ResourceType.tinder]: {
    name: `Podpa\u0142ka`,
    weight: 0.05
  }
};
var getResource = (type) => RESOURCES[type];

// src/utils/interfaces/plants.ts
var PlantType;
(function(PlantType2) {
  PlantType2["oliveTree"] = "oliveTree";
  PlantType2["mediterraneanPine"] = "mediterraneanPine";
  PlantType2["holmOak"] = "holmOak";
  PlantType2["grapeVine"] = "grapeVine";
  PlantType2["figTree"] = "figTree";
  PlantType2["thyme"] = "thyme";
  PlantType2["rosemary"] = "rosemary";
  PlantType2["lavender"] = "lavender";
  PlantType2["pricklyPear"] = "pricklyPear";
  PlantType2["tamarisk"] = "tamarisk";
  PlantType2["reed"] = "reed";
  PlantType2["seaweed"] = "seaweed";
  PlantType2["wildAsparagus"] = "wildAsparagus";
  PlantType2["agave"] = "agave";
})(PlantType || (PlantType = {}));
var PLANTS = {
  [PlantType.oliveTree]: {
    image: `assets/images/plants/oliveTree.webp`,
    name: "Drzewo oliwne",
    imageScale: 0.9,
    locations: [
      { location: BiomeType.grass, probability: 0.15 },
      { location: BiomeType.forest, probability: 0.25 }
    ],
    loot: [
      {
        acquisitionTime: 6,
        requiredTools: [ToolType.knife],
        type: FoodType.olive
      },
      {
        acquisitionTime: 45,
        requiredTools: [ToolType.axe],
        type: ResourceType.wood
      },
      {
        acquisitionTime: 90,
        requiredTools: [ToolType.axe],
        type: ResourceType.oil
      }
    ]
  },
  [PlantType.mediterraneanPine]: {
    image: `assets/images/plants/mediterraneanPine.webp`,
    name: "Sosna",
    imageScale: 1.1,
    locations: [
      { location: BiomeType.forest, probability: 0.35 },
      { location: BiomeType.mountain, probability: 0.25 }
    ],
    loot: [
      {
        acquisitionTime: 60,
        requiredTools: [ToolType.axe],
        type: ResourceType.wood
      },
      {
        acquisitionTime: 20,
        requiredTools: [ToolType.axe],
        type: ResourceType.resin
      },
      {
        acquisitionTime: 8,
        requiredTools: [],
        type: ResourceType.tinder
      }
    ]
  },
  [PlantType.holmOak]: {
    image: `assets/images/plants/holmOak.webp`,
    name: "D\u0105b ostrolistny",
    imageScale: 1.1,
    locations: [
      { location: BiomeType.forest, probability: 0.2 },
      { location: BiomeType.grass, probability: 0.1 }
    ],
    loot: [
      {
        acquisitionTime: 70,
        requiredTools: [ToolType.axe],
        type: ResourceType.wood
      },
      {
        acquisitionTime: 10,
        requiredTools: [],
        type: ResourceType.seeds
      }
    ]
  },
  [PlantType.grapeVine]: {
    image: `assets/images/plants/grapeVine.webp`,
    name: "Winoro\u015Bl",
    imageScale: 0.5,
    locations: [
      { location: BiomeType.grass, probability: 0.18 },
      { location: BiomeType.mountain, probability: 0.08 },
      { location: BiomeType.forest, probability: 0.05 }
    ],
    loot: [
      {
        acquisitionTime: 4,
        requiredTools: [ToolType.knife],
        type: FoodType.grape
      },
      {
        acquisitionTime: 15,
        requiredTools: [ToolType.sickle],
        type: ResourceType.fiber
      }
    ]
  },
  [PlantType.figTree]: {
    image: `assets/images/plants/figTree.webp`,
    name: "Drzewo figowe",
    imageScale: 0.8,
    locations: [
      { location: BiomeType.grass, probability: 0.12 },
      { location: BiomeType.forest, probability: 0.06 }
    ],
    loot: [
      {
        acquisitionTime: 5,
        requiredTools: [ToolType.knife],
        type: FoodType.fig
      },
      {
        acquisitionTime: 40,
        requiredTools: [ToolType.axe],
        type: ResourceType.wood
      }
    ]
  },
  [PlantType.thyme]: {
    image: `assets/images/plants/thyme.webp`,
    name: "Tymianek",
    imageScale: 0.22,
    locations: [
      { location: BiomeType.grass, probability: 0.3 },
      { location: BiomeType.mountain, probability: 0.25 }
    ],
    loot: [
      {
        acquisitionTime: 6,
        requiredTools: [ToolType.sickle],
        type: FoodType.herb
      }
    ]
  },
  [PlantType.rosemary]: {
    image: `assets/images/plants/rosemary.webp`,
    name: "Rozmaryn",
    imageScale: 0.24,
    locations: [
      { location: BiomeType.grass, probability: 0.18 },
      { location: BiomeType.mountain, probability: 0.12 }
    ],
    loot: [
      {
        acquisitionTime: 8,
        requiredTools: [ToolType.sickle],
        type: FoodType.herb
      }
    ]
  },
  [PlantType.lavender]: {
    image: `assets/images/plants/lavender.webp`,
    name: "Lawenda",
    imageScale: 0.23,
    locations: [
      { location: BiomeType.grass, probability: 0.12 },
      { location: BiomeType.mountain, probability: 0.1 }
    ],
    loot: [
      {
        acquisitionTime: 7,
        requiredTools: [ToolType.sickle],
        type: FoodType.herb
      }
    ]
  },
  [PlantType.pricklyPear]: {
    image: `assets/images/plants/pricklyPear.webp`,
    name: "Opuncja",
    imageScale: 0.45,
    locations: [
      { location: BiomeType.waterfront, probability: 0.12 },
      { location: BiomeType.grass, probability: 0.08 }
    ],
    loot: [
      {
        acquisitionTime: 6,
        requiredTools: [ToolType.knife],
        type: FoodType.cactusFruit
      },
      {
        acquisitionTime: 20,
        requiredTools: [ToolType.shovel],
        type: ResourceType.fiber
      }
    ]
  },
  [PlantType.tamarisk]: {
    image: `assets/images/plants/tamarisk.webp`,
    name: "Tamaryszek",
    imageScale: 0.5,
    locations: [{ location: BiomeType.waterfront, probability: 0.25 }],
    loot: [
      {
        acquisitionTime: 30,
        requiredTools: [ToolType.axe],
        type: ResourceType.wood
      }
    ]
  },
  [PlantType.reed]: {
    image: `assets/images/plants/reed.webp`,
    name: "Trzcina",
    imageScale: 0.6,
    locations: [{ location: BiomeType.waterfront, probability: 0.12 }],
    loot: [
      {
        acquisitionTime: 4,
        requiredTools: [ToolType.sickle],
        type: ResourceType.thatch
      },
      {
        acquisitionTime: 8,
        requiredTools: [ToolType.shovel],
        type: ResourceType.fiber
      }
    ]
  },
  [PlantType.seaweed]: {
    image: `assets/images/plants/seaweed.webp`,
    name: "Wodorosty",
    imageScale: 0.3,
    locations: [
      { location: BiomeType.sea, probability: 0.5 },
      { location: BiomeType.inlandWaters, probability: 0.15 }
    ],
    loot: [
      {
        acquisitionTime: 12,
        requiredTools: [ToolType.net],
        type: FoodType.seaweed
      }
    ]
  },
  [PlantType.wildAsparagus]: {
    image: `assets/images/plants/wildAsparagus.webp`,
    name: "Szparag",
    imageScale: 0.18,
    locations: [
      { location: BiomeType.grass, probability: 0.12 },
      { location: BiomeType.forest, probability: 0.06 },
      { location: BiomeType.mountain, probability: 0.04 }
    ],
    loot: [
      {
        acquisitionTime: 5,
        requiredTools: [],
        type: FoodType.asparagus
      },
      {
        acquisitionTime: 15,
        requiredTools: [ToolType.shovel],
        type: FoodType.edibleRoot
      }
    ]
  },
  [PlantType.agave]: {
    image: `assets/images/plants/agave.webp`,
    name: "Agawa",
    imageScale: 0.5,
    locations: [
      { location: BiomeType.waterfront, probability: 0.06 },
      { location: BiomeType.grass, probability: 0.05 },
      { location: BiomeType.mountain, probability: 0.02 }
    ],
    loot: [
      {
        acquisitionTime: 20,
        requiredTools: [ToolType.knife],
        type: ResourceType.fiber
      },
      {
        acquisitionTime: 25,
        requiredTools: [ToolType.knife],
        type: ResourceType.resin
      }
    ]
  }
};
var getPlant = (type) => PLANTS[type];

export {
  BiomeType,
  BIOMES,
  getBiome,
  getBiomeFromHeight,
  getTool,
  getFood,
  getResource,
  PLANTS,
  getPlant
};
//# sourceMappingURL=chunk-WPFGNY4G.js.map
