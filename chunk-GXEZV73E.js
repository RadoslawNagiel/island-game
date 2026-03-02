import {
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor,
  RequiredValidator
} from "./chunk-YLZFPBEZ.js";
import {
  BIOMES,
  BiomeType,
  PLANTS,
  getBiome,
  getBiomeFromHeight,
  getPlant
} from "./chunk-WPFGNY4G.js";
import {
  CommonModule,
  Component,
  DecimalPipe,
  Injectable,
  Input,
  NgClass,
  NgStyle,
  Output,
  ViewChild,
  __spreadValues,
  computed,
  effect,
  inject,
  input,
  output,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-FUQELXHB.js";

// src/services/cache.ts
var CacheService = class _CacheService {
  chunkCache = /* @__PURE__ */ new Map();
  imageCache = {};
  preloadImages(callback) {
    const objectsToLoad = [...Object.entries(BIOMES), ...Object.entries(PLANTS)];
    let loadedCount = 0;
    objectsToLoad.forEach(([key, plant]) => {
      const img = new Image();
      img.src = plant.image;
      img.onload = () => {
        this.imageCache[key] = img;
        loadedCount++;
        if (loadedCount === objectsToLoad.length)
          callback();
      };
      img.onerror = () => {
        console.error(`B\u0142\u0105d \u0142adowania grafiki dla: ${key} pod adresem ${plant.image}`);
        loadedCount++;
        if (loadedCount === objectsToLoad.length)
          callback();
      };
    });
  }
  clearChunkCache() {
    this.chunkCache.clear();
  }
  static \u0275fac = function CacheService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CacheService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CacheService, factory: _CacheService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CacheService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/services/properties.ts
var PropertiesService = class _PropertiesService {
  // 651587985
  seed = signal(0, ...ngDevMode ? [{ debugName: "seed" }] : []);
  sizeX = signal(1e3, ...ngDevMode ? [{ debugName: "sizeX" }] : []);
  sizeY = signal(1e3, ...ngDevMode ? [{ debugName: "sizeY" }] : []);
  static \u0275fac = function PropertiesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PropertiesService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PropertiesService, factory: _PropertiesService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PropertiesService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/services/day.ts
var TIME_PER_DAY_MS = 10 * 60 * 990;
var EPOCH_DATE_MS = (/* @__PURE__ */ new Date("2026-01-01T00:00:00Z")).getTime();
var DayService = class _DayService {
  realCurrentTimeMs = signal(Date.now(), ...ngDevMode ? [{ debugName: "realCurrentTimeMs" }] : []);
  dayOfYear = computed(() => Math.floor(this.gameDaysElapsed() % 365), ...ngDevMode ? [{ debugName: "dayOfYear" }] : []);
  gameYear = computed(() => Math.floor(this.gameDaysElapsed() / 365), ...ngDevMode ? [{ debugName: "gameYear" }] : []);
  timeOfDay = computed(() => this.gameDaysElapsed() % 1, ...ngDevMode ? [{ debugName: "timeOfDay" }] : []);
  formattedTime = computed(() => {
    const totalMinutes = Math.floor(this.timeOfDay() * 24 * 60);
    const hours = Math.floor(totalMinutes / 60).toString().padStart(2, "0");
    const minutes = (totalMinutes % 60).toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }, ...ngDevMode ? [{ debugName: "formattedTime" }] : []);
  gameDaysElapsed = computed(() => {
    const elapsedRealMs = this.realCurrentTimeMs() - EPOCH_DATE_MS;
    return Math.max(0, elapsedRealMs / TIME_PER_DAY_MS);
  }, ...ngDevMode ? [{ debugName: "gameDaysElapsed" }] : []);
  tick(currentRealMs = Date.now()) {
    this.realCurrentTimeMs.set(currentRealMs);
  }
  static \u0275fac = function DayService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DayService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DayService, factory: _DayService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DayService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/utils/generator/functions/seed-random.ts
var getSeededRandom = (seed, param1, param2) => () => {
  const value = seed++ + (param1 ?? 0) * 374761393 + (param2 ?? 0) * 668265263;
  const x = Math.sin(value) * 1e4;
  return x - Math.floor(x);
};

// src/utils/generator/chunk-details.ts
var trySpawnPlant = (currentBiome, prng) => {
  const density = getBiome(currentBiome).plantDensity ?? 0;
  if (prng() > density) {
    return null;
  }
  const availablePlants = Object.entries(PLANTS).filter(([, plantData]) => plantData.locations.some((loc) => loc.location === currentBiome));
  if (availablePlants.length === 0) {
    return null;
  }
  const weights = availablePlants.map(([, plantData]) => plantData.locations.find((l) => l.location === currentBiome).probability);
  const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
  if (totalWeight <= 0)
    return null;
  let randomValue = prng() * totalWeight;
  for (let index = 0; index < availablePlants.length; index++) {
    if (randomValue < weights[index]) {
      return availablePlants[index][0];
    }
    randomValue -= weights[index];
  }
  return null;
};
var getChunkDetails = (seed, chunkX, chunkY, corners, resolution = 32) => {
  const chunkDetails = Array.from({ length: resolution }, () => new Array(resolution));
  const chunkSeed = seed + chunkX * 73856 + chunkY * 19349;
  const chunkPrng = getSeededRandom(chunkSeed);
  for (let posY = 0; posY < resolution; posY++) {
    for (let posX = 0; posX < resolution; posX++) {
      const coordU = posX / resolution;
      const coordV = posY / resolution;
      const heightTop = (1 - coordU) * corners.tl.height + coordU * corners.tr.height;
      const heightBottom = (1 - coordU) * corners.bl.height + coordU * corners.br.height;
      const baseHeight = (1 - coordV) * heightTop + coordV * heightBottom;
      const localHeight = Math.max(0, Math.min(1, baseHeight));
      let biome = getBiomeFromHeight(localHeight);
      const waterCorners = Object.values(corners).filter((corner) => corner.isWater);
      const isWater = waterCorners.find((corner) => biome === getBiomeFromHeight(corner.height));
      if (biome !== BiomeType.sea && isWater) {
        biome = BiomeType.inlandWaters;
      }
      const spawnedPlant = trySpawnPlant(biome, chunkPrng);
      chunkDetails[posY][posX] = {
        height: localHeight,
        isWater: biome === BiomeType.inlandWaters || biome === BiomeType.sea,
        biome,
        plant: spawnedPlant
      };
    }
  }
  return chunkDetails;
};

// node_modules/simplex-noise/dist/esm/simplex-noise.js
var SQRT3 = /* @__PURE__ */ Math.sqrt(3);
var SQRT5 = /* @__PURE__ */ Math.sqrt(5);
var F2 = 0.5 * (SQRT3 - 1);
var G2 = (3 - SQRT3) / 6;
var F3 = 1 / 3;
var G3 = 1 / 6;
var F4 = (SQRT5 - 1) / 4;
var G4 = (5 - SQRT5) / 20;
var fastFloor = (x) => Math.floor(x) | 0;
var grad2 = /* @__PURE__ */ new Float64Array([
  1,
  1,
  -1,
  1,
  1,
  -1,
  -1,
  -1,
  1,
  0,
  -1,
  0,
  1,
  0,
  -1,
  0,
  0,
  1,
  0,
  -1,
  0,
  1,
  0,
  -1
]);
function createNoise2D(random = Math.random) {
  const perm = buildPermutationTable(random);
  const permGrad2x = new Float64Array(perm).map((v) => grad2[v % 12 * 2]);
  const permGrad2y = new Float64Array(perm).map((v) => grad2[v % 12 * 2 + 1]);
  return function noise2D(x, y) {
    let n0 = 0;
    let n1 = 0;
    let n2 = 0;
    const s = (x + y) * F2;
    const i = fastFloor(x + s);
    const j = fastFloor(y + s);
    const t = (i + j) * G2;
    const X0 = i - t;
    const Y0 = j - t;
    const x0 = x - X0;
    const y0 = y - Y0;
    let i1, j1;
    if (x0 > y0) {
      i1 = 1;
      j1 = 0;
    } else {
      i1 = 0;
      j1 = 1;
    }
    const x1 = x0 - i1 + G2;
    const y1 = y0 - j1 + G2;
    const x2 = x0 - 1 + 2 * G2;
    const y2 = y0 - 1 + 2 * G2;
    const ii = i & 255;
    const jj = j & 255;
    let t0 = 0.5 - x0 * x0 - y0 * y0;
    if (t0 >= 0) {
      const gi0 = ii + perm[jj];
      const g0x = permGrad2x[gi0];
      const g0y = permGrad2y[gi0];
      t0 *= t0;
      n0 = t0 * t0 * (g0x * x0 + g0y * y0);
    }
    let t1 = 0.5 - x1 * x1 - y1 * y1;
    if (t1 >= 0) {
      const gi1 = ii + i1 + perm[jj + j1];
      const g1x = permGrad2x[gi1];
      const g1y = permGrad2y[gi1];
      t1 *= t1;
      n1 = t1 * t1 * (g1x * x1 + g1y * y1);
    }
    let t2 = 0.5 - x2 * x2 - y2 * y2;
    if (t2 >= 0) {
      const gi2 = ii + 1 + perm[jj + 1];
      const g2x = permGrad2x[gi2];
      const g2y = permGrad2y[gi2];
      t2 *= t2;
      n2 = t2 * t2 * (g2x * x2 + g2y * y2);
    }
    return 70 * (n0 + n1 + n2);
  };
}
function buildPermutationTable(random) {
  const tableSize = 512;
  const p = new Uint8Array(tableSize);
  for (let i = 0; i < tableSize / 2; i++) {
    p[i] = i;
  }
  for (let i = 0; i < tableSize / 2 - 1; i++) {
    const r = i + ~~(random() * (256 - i));
    const aux = p[i];
    p[i] = p[r];
    p[r] = aux;
  }
  for (let i = 256; i < tableSize; i++) {
    p[i] = p[i - 256];
  }
  return p;
}

// src/utils/generator/terrain-generator.ts
var IslandGenerator = class {
  config;
  prng;
  shapeNoise;
  warpNoise;
  detailNoise;
  constructor(config) {
    this.config = __spreadValues({
      scale: 1.5,
      lacunarity: 2,
      persistance: 0.5,
      octaves: 6,
      lakeProbability: 0.3
    }, config);
    this.prng = getSeededRandom(this.config.seed);
    this.shapeNoise = createNoise2D(this.prng);
    this.warpNoise = createNoise2D(this.prng);
    this.detailNoise = createNoise2D(this.prng);
  }
  generateMap() {
    const { width, height, octaves, persistance, lacunarity, scale, lakeProbability } = this.config;
    const heightMap = Array.from({ length: height }, () => new Array(width));
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const nx = (x / width - 0.5) * 2 * (width / height);
        const ny = (y / height - 0.5) * 2;
        const qx = this.warpNoise(nx * 1.5, ny * 1.5);
        const qy = this.warpNoise(nx * 1.5 + 5.2, ny * 1.5 + 1.3);
        const dist = Math.sqrt((nx + qx * 0.3) ** 2 + (ny + qy * 0.3) ** 2);
        let mask = 1 - dist;
        mask += this.shapeNoise(nx * 0.8, ny * 0.8) * 0.3;
        const borderFactor = Math.min(x, y, width - 1 - x, height - 1 - y) / (Math.min(width, height) * 0.1);
        mask *= Math.min(1, borderFactor);
        if (mask <= 0) {
          heightMap[y][x] = 0;
          continue;
        }
        let elevation = 0;
        let amplitude = 1;
        let frequency = scale;
        let maxValue = 0;
        for (let index = 0; index < octaves; index++) {
          let noise = this.detailNoise(nx * frequency, ny * frequency);
          if (index > 0) {
            noise = 1 - Math.abs(noise);
            noise *= noise;
          } else {
            noise = (noise + 1) / 2;
          }
          elevation += noise * amplitude;
          maxValue += amplitude;
          amplitude *= persistance;
          frequency *= lacunarity;
        }
        let finalHeight = elevation / maxValue * mask;
        finalHeight **= 2.5;
        heightMap[y][x] = Math.max(0, Math.min(1, finalHeight));
      }
    }
    const isWaterMap = this.calculateWaterBodies(heightMap, width, height, lakeProbability);
    return heightMap.map((row, y) => row.map((h, x) => ({
      height: h,
      isWater: isWaterMap[y][x]
    })));
  }
  calculateWaterBodies(heightMap, width, height, lakeProbability) {
    const isWater = Array.from({ length: height }, () => new Array(width).fill(false));
    const visited = Array.from({ length: height }, () => new Array(width).fill(false));
    const lakeThresholds = [
      { min: BIOMES.sea.threshold, max: BIOMES.waterfront.threshold },
      { min: BIOMES.waterfront.threshold, max: BIOMES.grass.threshold },
      { min: BIOMES.grass.threshold, max: BIOMES.forest.threshold }
    ];
    for (let posY = 0; posY < height; posY++) {
      for (let posX = 0; posX < width; posX++) {
        if (visited[posY][posX])
          continue;
        const val = heightMap[posY][posX];
        if (val < BIOMES.sea.threshold) {
          isWater[posY][posX] = true;
          visited[posY][posX] = true;
          continue;
        }
        for (const threshold of lakeThresholds) {
          if (val >= threshold.min && val < threshold.max) {
            this.processRegion(posX, posY, width, height, heightMap, visited, isWater, threshold, lakeProbability);
            break;
          }
        }
      }
    }
    return isWater;
  }
  processRegion(startX, startY, width, height, map, visited, isWaterMap, threshold, lakeProbability) {
    const queue = [{ x: startX, y: startY }];
    const region = [];
    const regionSet = /* @__PURE__ */ new Set();
    visited[startY][startX] = true;
    let head = 0;
    while (head < queue.length) {
      const { x, y } = queue[head++];
      region.push({ x, y });
      regionSet.add(y * width + x);
      const dx = [1, -1, 0, 0];
      const dy = [0, 0, 1, -1];
      for (let index = 0; index < 4; index++) {
        const nx = x + dx[index];
        const ny = y + dy[index];
        if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
          const nVal = map[ny][nx];
          if (!visited[ny][nx] && nVal >= threshold.min && nVal < threshold.max) {
            visited[ny][nx] = true;
            queue.push({ x: nx, y: ny });
          }
        }
      }
    }
    let hasLeaks = false;
    for (const { x, y } of region) {
      for (let dy = -2; dy <= 2; dy++) {
        for (let dx = -2; dx <= 2; dx++) {
          const nx = x + dx;
          const ny = y + dy;
          if (nx < 0 || nx >= width || ny < 0 || ny >= height) {
            hasLeaks = true;
            break;
          }
          if (!regionSet.has(ny * width + nx)) {
            if (map[ny][nx] < threshold.max) {
              hasLeaks = true;
              break;
            }
          }
        }
        if (hasLeaks)
          break;
      }
      if (hasLeaks)
        break;
    }
    if (!hasLeaks && this.prng() < lakeProbability) {
      for (const point of region) {
        isWaterMap[point.y][point.x] = true;
      }
    }
  }
};

// src/utils/generator/minimap/lerp-color.ts
var lerp = (a, b, t) => a + (b - a) * t;
var lerpColor = (c1, c2, t) => [
  Math.round(lerp(c1[0], c2[0], t)),
  Math.round(lerp(c1[1], c2[1], t)),
  Math.round(lerp(c1[2], c2[2], t))
];

// src/utils/generator/minimap/get-point-color.ts
var getPointRGB = (point, tideLevel) => {
  const height = Math.max(0, Math.min(1, point.height));
  const waterThreshold = tideLevel === void 0 ? void 0 : getBiome(BiomeType.sea).threshold + (1 + tideLevel) * 15e-4;
  const biomeType = getBiomeFromHeight(height, waterThreshold);
  const biome = getBiome(biomeType);
  const biomeTypeArray = Object.values(BiomeType);
  const index = biomeTypeArray.findIndex((el) => el === biomeType) - 1;
  const previousBiomeThreshold = index >= 0 ? getBiome(biomeTypeArray[index]).threshold ?? 1 : 0;
  const multiplier = (height - previousBiomeThreshold) / (biome.threshold - previousBiomeThreshold);
  const waterBiome = getBiome(BiomeType.sea);
  const colorFrom = point.isWater ? waterBiome.colorFrom : biome.colorFrom;
  const colorTo = point.isWater ? waterBiome.colorTo : biome.colorTo;
  return lerpColor(colorFrom, colorTo, multiplier);
};
var getPointRGBString = (point, tideLevel) => {
  const [red, green, blue] = getPointRGB(point, tideLevel);
  return `rgb(${red},${green},${blue})`;
};

// src/services/weather.ts
var WeatherService = class _WeatherService {
  propertiesService = inject(PropertiesService);
  dayService = inject(DayService);
  season = computed(() => {
    const day = this.dayService.dayOfYear();
    if (day >= 60 && day < 152)
      return "Wiosna";
    if (day >= 152 && day < 244)
      return "Lato";
    if (day >= 244 && day < 335)
      return "Jesie\u0144";
    return "Zima";
  }, ...ngDevMode ? [{ debugName: "season" }] : []);
  sunElevation = computed(() => {
    const baseElevation = Math.sin((this.dayService.timeOfDay() - 0.25) * 2 * Math.PI);
    const dayLengthOffset = this.seasonFactor() * 0.2;
    return Math.max(-1, Math.min(1, baseElevation + dayLengthOffset));
  }, ...ngDevMode ? [{ debugName: "sunElevation" }] : []);
  moonPhase = computed(() => this.dayService.gameDaysElapsed() / 29.5 % 1, ...ngDevMode ? [{ debugName: "moonPhase" }] : []);
  moonElevation = computed(() => {
    const moonTime = (this.dayService.timeOfDay() - this.moonPhase() + 1) % 1;
    return Math.sin((moonTime - 0.25) * 2 * Math.PI);
  }, ...ngDevMode ? [{ debugName: "moonElevation" }] : []);
  cloudiness = computed(() => {
    const noise = this.weatherNoise();
    const cloudBias = this.seasonFactor() * -0.3;
    return Math.max(0, Math.min(1, noise + cloudBias));
  }, ...ngDevMode ? [{ debugName: "cloudiness" }] : []);
  rainPercentage = computed(() => {
    const clouds = this.cloudiness();
    if (clouds < 0.6)
      return 0;
    const rainIntensityBias = this.season() === "Zima" || this.season() === "Jesie\u0144" ? 1.2 : 0.5;
    return Math.min(1, (clouds - 0.6) / 0.4 * rainIntensityBias);
  }, ...ngDevMode ? [{ debugName: "rainPercentage" }] : []);
  temperature = computed(() => {
    const baseTemp = 21 + this.seasonFactor() * 11;
    const timeOffset = Math.sin((this.dayService.timeOfDay() - 0.375) * 2 * Math.PI);
    const dailyFluctuation = 6 * timeOffset;
    const cloudCooling = this.sunElevation() > 0 ? this.cloudiness() * -3 : this.cloudiness() * 2;
    return Math.round((baseTemp + dailyFluctuation + cloudCooling) * 10) / 10;
  }, ...ngDevMode ? [{ debugName: "temperature" }] : []);
  humidity = computed(() => {
    const rainImpact = this.rainPercentage() * 30;
    const timeImpact = this.sunElevation() < 0 ? 10 : 0;
    return Math.max(0, Math.min(100, Math.round(55 + rainImpact + timeImpact)));
  }, ...ngDevMode ? [{ debugName: "humidity" }] : []);
  sunBrightness = computed(() => {
    let light;
    const sun = this.sunElevation();
    if (sun > 0) {
      light = sun;
    } else {
      const moonElev = this.moonElevation();
      if (moonElev > 0) {
        const moonVisibility = 1 - Math.abs((this.moonPhase() - 0.5) * 2);
        light = moonElev * 0.1 * moonVisibility;
      } else {
        light = 0.02;
      }
    }
    return Math.max(0, Math.min(1, light));
  }, ...ngDevMode ? [{ debugName: "sunBrightness" }] : []);
  brightness = computed(() => {
    const cloudDarkening = 1 - this.cloudiness() * 0.4;
    return Math.max(0, Math.min(1, this.sunBrightness() * cloudDarkening));
  }, ...ngDevMode ? [{ debugName: "brightness" }] : []);
  tideLevel = computed(() => {
    const tidePower = 0.6 + (1 - Math.abs((this.moonPhase() - 0.5) * 2)) * 0.4;
    const tideCycle = Math.sin(this.dayService.gameDaysElapsed() * 4 * Math.PI - this.moonPhase() * 2 * Math.PI);
    return tideCycle * tidePower;
  }, ...ngDevMode ? [{ debugName: "tideLevel" }] : []);
  seasonFactor = computed(() => Math.sin((this.dayService.dayOfYear() - 80) / 365 * 2 * Math.PI), ...ngDevMode ? [{ debugName: "seasonFactor" }] : []);
  weatherNoise = computed(() => {
    const seed = this.propertiesService.seed();
    const currentDay = Math.floor(this.dayService.gameDaysElapsed());
    const progress = this.dayService.gameDaysElapsed() % 1;
    const valToday = getSeededRandom(seed + currentDay)();
    const valTomorrow = getSeededRandom(seed + currentDay + 1)();
    return valToday + (valTomorrow - valToday) * progress;
  }, ...ngDevMode ? [{ debugName: "weatherNoise" }] : []);
  static \u0275fac = function WeatherService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WeatherService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _WeatherService, factory: _WeatherService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WeatherService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/services/_params.ts
var MIN_IMAGES_ZOOM = 400;
var CHUNK_SIZE = 32;
var MAX_IMAGE_RAND_SCALE = 0.1;
var MAX_IMAGE_RAND_OFFSET = 0.2;
var MIN_ZOOM = 10;
var MAX_ZOOM = 1e4;

// src/services/game/utils/calculate-shading-params.ts
var calculateShadingParams = (terrain, tx, ty, maxTx, maxTy) => {
  const getHeight = (posX, posY) => {
    const clampedX = Math.max(0, Math.min(posX, maxTx));
    const clampedY = Math.max(0, Math.min(posY, maxTy));
    return terrain[clampedY][clampedX].height;
  };
  const angleRad = 150 * Math.PI / 180;
  const lX = Math.cos(angleRad);
  const lY = Math.sin(angleRad);
  const getShading = (posX, posY) => {
    const dX = getHeight(posX + 1, posY) - getHeight(posX - 1, posY);
    const dY = getHeight(posX, posY + 1) - getHeight(posX, posY - 1);
    return (dX * lX + dY * lY) * 20;
  };
  return {
    shadeTL: getShading(tx, ty),
    shadeTR: getShading(tx + 1, ty),
    shadeBL: getShading(tx, ty + 1),
    shadeBR: getShading(tx + 1, ty + 1)
  };
};

// src/services/game/utils/apply-shading-to-ctx.ts
var applyShadingToCtx = (ctx, microX, microY, drawSize, chunkX, coordV, shades) => {
  const coordU = chunkX / CHUNK_SIZE;
  const shadeTop = (1 - coordU) * shades.shadeTL + coordU * shades.shadeTR;
  const shadeBottom = (1 - coordU) * shades.shadeBL + coordU * shades.shadeBR;
  const localShading = (1 - coordV) * shadeTop + coordV * shadeBottom;
  if (Math.abs(localShading) > 0.01) {
    const alpha = Math.min(Math.abs(localShading), 1) * 0.5;
    ctx.globalCompositeOperation = "overlay";
    ctx.fillStyle = localShading < 0 ? `rgba(255, 255, 255, ${alpha})` : `rgba(0, 0, 0, ${alpha})`;
    ctx.fillRect(microX, microY, drawSize, drawSize);
    ctx.globalCompositeOperation = "source-over";
  }
};

// src/services/game/utils/apply-chunk-colors-to-ctx.ts
var applyChunkColorsToCtx = (canvas, ctx, chunk, sX, sY, objSize, drawSize, shades, step) => {
  for (let chunkY = 0; chunkY < CHUNK_SIZE; chunkY += step) {
    const microY = Math.floor(sY + chunkY * objSize);
    if (microY + drawSize < 0 || microY > canvas.height + 1)
      continue;
    const coordV = chunkY / CHUNK_SIZE;
    for (let chunkX = 0; chunkX < CHUNK_SIZE; chunkX += step) {
      const microX = Math.floor(sX + chunkX * objSize);
      if (microX + drawSize < 0 || microX > canvas.width + 1)
        continue;
      const microElement = chunk[chunkY][chunkX];
      if (!microElement)
        continue;
      ctx.fillStyle = getPointRGBString({
        height: microElement.height,
        isWater: microElement.isWater
      });
      ctx.fillRect(microX, microY, drawSize, drawSize);
      applyShadingToCtx(ctx, microX, microY, drawSize, chunkX, coordV, shades);
    }
  }
};

// src/services/game/utils/apply-chunk-plants-to-ctx.ts
var applyChunkPlantsToCtx = (seed, cacheService, canvas, ctx, chunk, tx, ty, sX, sY, objSize) => {
  for (let chunkY = 0; chunkY < CHUNK_SIZE; chunkY++) {
    const microY = Math.floor(sY + chunkY * objSize);
    if (microY + objSize * 2 < 0 || microY > canvas.height + objSize)
      continue;
    for (let chunkX = 0; chunkX < CHUNK_SIZE; chunkX++) {
      const microX = Math.floor(sX + chunkX * objSize);
      if (microX + objSize * 2 < 0 || microX > canvas.width + objSize)
        continue;
      const microElement = chunk[chunkY][chunkX];
      if (!microElement?.plant)
        continue;
      const img = cacheService.imageCache[microElement.plant];
      const plantDef = getPlant(microElement.plant);
      if (img && plantDef) {
        const globalX = tx * CHUNK_SIZE + chunkX;
        const globalY = ty * CHUNK_SIZE + chunkY;
        const randSize = getSeededRandom(seed, globalX + 100, globalY + 100)();
        const sizeMultiplier = randSize * MAX_IMAGE_RAND_SCALE * 2 - MAX_IMAGE_RAND_SCALE;
        const imageScale = plantDef.imageScale ?? 1;
        const finalScale = imageScale + sizeMultiplier * imageScale;
        const scaledSize = objSize * finalScale;
        const maxOffset = 1 + MAX_IMAGE_RAND_OFFSET - finalScale;
        const randX = getSeededRandom(seed, globalX, globalY)();
        const randY = getSeededRandom(seed, globalY, globalX)();
        const offsetX = (randX - 0.5) * objSize * maxOffset;
        const offsetY = (randY - 0.5) * objSize * maxOffset;
        const centeringOffset = (objSize - scaledSize) / 2;
        const { isWater } = microElement;
        if (isWater) {
          ctx.save();
          ctx.globalAlpha = 0.4;
        }
        ctx.drawImage(img, microX + centeringOffset + offsetX, microY + centeringOffset + offsetY, scaledSize, scaledSize);
        if (isWater) {
          ctx.restore();
        }
      }
    }
  }
};

// src/services/game/utils/apply-chunk-textures-to-ctx.ts
var applyChunkTexturesToCtx = (cacheService, canvas, ctx, chunk, sX, sY, objSize, drawSize, shades, step) => {
  for (let chunkY = 0; chunkY < CHUNK_SIZE; chunkY += step) {
    const microY = Math.floor(sY + chunkY * objSize);
    if (microY + objSize < 0 || microY > canvas.height + 1)
      continue;
    const coordV = chunkY / CHUNK_SIZE;
    for (let chunkX = 0; chunkX < CHUNK_SIZE; chunkX += step) {
      const microX = Math.floor(sX + chunkX * objSize);
      if (microX + objSize < 0 || microX > canvas.width + 1)
        continue;
      const microElement = chunk[chunkY][chunkX];
      if (!microElement)
        continue;
      const textureKey = microElement.isWater ? BiomeType.sea : getBiomeFromHeight(microElement.height);
      const textureImg = cacheService.imageCache[textureKey];
      if (textureImg) {
        ctx.drawImage(textureImg, microX, microY, drawSize, drawSize);
      } else {
        ctx.fillStyle = getPointRGBString({ height: microElement.height, isWater: microElement.isWater });
        ctx.fillRect(microX, microY, drawSize, drawSize);
      }
      const neighbors = [
        { dx: step, dy: 0 },
        { dx: -step, dy: 0 },
        { dx: 0, dy: step },
        { dx: 0, dy: -step }
      ];
      for (const { dx, dy } of neighbors) {
        const nx = chunkX + dx;
        const ny = chunkY + dy;
        if (ny >= 0 && ny < CHUNK_SIZE && nx >= 0 && nx < CHUNK_SIZE) {
          const neighbor = chunk[ny][nx];
          if (!neighbor)
            continue;
          const neighborKey = neighbor.isWater ? BiomeType.sea : getBiomeFromHeight(neighbor.height);
          if (neighborKey !== textureKey) {
            const neighborImg = cacheService.imageCache[neighborKey];
            ctx.globalAlpha = 0.15;
            if (neighborImg) {
              ctx.drawImage(neighborImg, microX, microY, drawSize, drawSize);
            } else {
              ctx.fillStyle = getPointRGBString({ height: neighbor.height, isWater: neighbor.isWater });
              ctx.fillRect(microX, microY, drawSize, drawSize);
            }
            ctx.globalAlpha = 1;
          }
        }
      }
      applyShadingToCtx(ctx, microX, microY, drawSize, chunkX, coordV, shades);
    }
  }
};

// src/services/game/game.ts
var GameService = class _GameService {
  cacheService = inject(CacheService);
  weatherService = inject(WeatherService);
  propertiesService = inject(PropertiesService);
  terrain = signal([], ...ngDevMode ? [{ debugName: "terrain" }] : []);
  cameraPos = signal({ posX: 0, posY: 0 }, ...ngDevMode ? [{ debugName: "cameraPos" }] : []);
  zoomLevel = signal(500, ...ngDevMode ? [{ debugName: "zoomLevel" }] : []);
  animationFrameId = signal(null, ...ngDevMode ? [{ debugName: "animationFrameId" }] : []);
  regenerateMap(canvas, seed) {
    const newSeed = seed === this.propertiesService.seed() ? Math.floor(Math.random() * 1e9) : seed;
    this.propertiesService.seed.set(newSeed);
    this.cacheService.clearChunkCache();
    const generator = new IslandGenerator({
      width: this.propertiesService.sizeX(),
      height: this.propertiesService.sizeY(),
      seed: this.propertiesService.seed(),
      scale: 1,
      lacunarity: 2,
      persistance: 0.45,
      octaves: 6,
      lakeProbability: 0.5
    });
    this.terrain.set(generator.generateMap());
    this.centerCamera(canvas);
    this.drawViewport(canvas);
  }
  centerCamera(canvas) {
    this.cameraPos.set({ posX: this.propertiesService.sizeX() / 2, posY: this.propertiesService.sizeY() / 2 });
    this.zoomLevel.set(canvas.width / 2);
  }
  drawViewport(canvas) {
    const animationFrameId = this.animationFrameId();
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }
    this.animationFrameId.set(requestAnimationFrame(() => {
      this.renderMainView(canvas);
    }));
  }
  renderMainView(canvas) {
    const ctx = canvas.getContext("2d", { alpha: false });
    const terrain = this.terrain();
    if (!ctx || !terrain.length)
      return;
    const { width, height } = canvas;
    const tileSize = this.zoomLevel();
    const cam = this.cameraPos();
    const halfScreenW = width / 2;
    const halfScreenH = height / 2;
    ctx.fillStyle = "#0f172a";
    ctx.fillRect(0, 0, width, height);
    const startCol = Math.floor(cam.posX - halfScreenW / tileSize) - 1;
    const endCol = Math.floor(cam.posX + halfScreenW / tileSize) + 1;
    const startRow = Math.floor(cam.posY - halfScreenH / tileSize) - 1;
    const endRow = Math.floor(cam.posY + halfScreenH / tileSize) + 1;
    const visibleChunks = [];
    let step = 1;
    if (tileSize < 60)
      step = 32;
    else if (tileSize < 80)
      step = 16;
    else if (tileSize < 120)
      step = 8;
    else if (tileSize < 200)
      step = 4;
    else if (tileSize < 300)
      step = 2;
    const maxTy = terrain.length - 1;
    const maxTx = terrain[0].length - 1;
    for (let posY = startRow; posY <= endRow; posY++) {
      if (posY < 0 || posY >= terrain.length)
        continue;
      for (let posX = startCol; posX <= endCol; posX++) {
        if (posX < 0 || posX >= terrain[0].length)
          continue;
        const screenX = Math.floor((posX - cam.posX) * tileSize + halfScreenW);
        const screenY = Math.floor((posY - cam.posY) * tileSize + halfScreenH);
        if (step < 32) {
          const chunk = this.renderDetailedChunkBase(canvas, ctx, posX, posY, screenX, screenY, tileSize, step);
          if (chunk && tileSize >= MIN_IMAGES_ZOOM) {
            visibleChunks.push({
              chunk,
              tx: posX,
              ty: posY,
              sX: screenX,
              sY: screenY,
              objSize: tileSize / CHUNK_SIZE
            });
          }
        } else {
          const drawSize = Math.ceil(tileSize);
          ctx.fillStyle = getPointRGBString(terrain[posY][posX]);
          ctx.fillRect(screenX, screenY, drawSize, drawSize);
          const shades = calculateShadingParams(terrain, posX, posY, maxTx, maxTy);
          applyShadingToCtx(ctx, screenX, screenY, drawSize, 0, 0, shades);
        }
      }
    }
    const seed = this.propertiesService.seed();
    for (const item of visibleChunks) {
      applyChunkPlantsToCtx(seed, this.cacheService, canvas, ctx, item.chunk, item.tx, item.ty, item.sX, item.sY, item.objSize);
    }
    const brightness = this.weatherService.brightness();
    const nightIntensity = Math.max(0, (1 - brightness) * 0.8);
    if (nightIntensity > 0) {
      ctx.save();
      ctx.globalCompositeOperation = "multiply";
      ctx.fillStyle = `rgba(30, 40, 90, ${nightIntensity})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = `rgba(0, 0, 0, ${nightIntensity * 0.3})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.restore();
    }
  }
  renderDetailedChunkBase(canvas, ctx, tx, ty, sX, sY, tSize, step) {
    const terrain = this.terrain();
    const maxTy = terrain.length - 1;
    const maxTx = terrain[0].length - 1;
    const chunkKey = `${tx}_${ty}_${this.propertiesService.seed()}`;
    let chunk = this.cacheService.chunkCache.get(chunkKey);
    if (!chunk) {
      const tl = terrain[ty][tx];
      const tr = tx + 1 <= maxTx ? terrain[ty][tx + 1] : tl;
      const bl = ty + 1 <= maxTy ? terrain[ty + 1][tx] : tl;
      const br = ty + 1 <= maxTy && tx + 1 <= maxTx ? terrain[ty + 1][tx + 1] : tr || bl || tl;
      const corners = { tl, tr, bl, br };
      chunk = getChunkDetails(this.propertiesService.seed(), tx, ty, corners, CHUNK_SIZE);
      this.cacheService.chunkCache.set(chunkKey, chunk);
      if (this.cacheService.chunkCache.size > 1e3) {
        const key = this.cacheService.chunkCache.keys().next().value;
        if (key)
          this.cacheService.chunkCache.delete(key);
      }
    }
    const baseObjSize = tSize / CHUNK_SIZE;
    const objSize = baseObjSize * step;
    const drawPadding = 1;
    const drawSize = Math.ceil(objSize) + drawPadding;
    const shades = calculateShadingParams(terrain, tx, ty, maxTx, maxTy);
    if (tSize >= MIN_IMAGES_ZOOM) {
      applyChunkTexturesToCtx(this.cacheService, canvas, ctx, chunk, sX, sY, baseObjSize, drawSize, shades, step);
    } else {
      applyChunkColorsToCtx(canvas, ctx, chunk, sX, sY, baseObjSize, drawSize, shades, step);
    }
    return chunk;
  }
  static \u0275fac = function GameService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GameService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GameService, factory: _GameService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GameService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/utils/generator/minimap/get-map-shade.ts
function getMapShade(map, x, y, width, height) {
  const hx = map[y][Math.min(width - 1, x + 1)].height - map[y][Math.max(0, x - 1)].height;
  const hy = map[Math.min(height - 1, y + 1)][x].height - map[Math.max(0, y - 1)][x].height;
  const shade = 0.5 + (hx - hy) * 20;
  return Math.max(0.3, Math.min(1.4, shade));
}

// src/utils/generator/minimap/render-minimap-on-canvas.ts
var renderMinimapOnCanvas = (canvas, map, tideLevel) => {
  const height = map.length;
  const width = map[0]?.length ?? 0;
  if (!width || !height)
    return;
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx)
    return;
  const imageData = ctx.createImageData(width, height);
  const { data } = imageData;
  let index = 0;
  for (let posY = 0; posY < height; posY++) {
    const row = map[posY];
    for (let posX = 0; posX < width; posX++) {
      const [red, green, blue] = getPointRGB(row[posX], tideLevel);
      const shade = getMapShade(map, posX, posY, width, height);
      data[index++] = Math.min(255, red * shade);
      data[index++] = Math.min(255, green * shade);
      data[index++] = Math.min(255, blue * shade);
      data[index++] = 255;
    }
  }
  ctx.putImageData(imageData, 0, 0);
};

// src/utils/generator/minimap/render-minimap-marker-on-canvas.ts
var MARKER = {
  radius: 5,
  width: 4,
  color: "#ff265c"
};
function renderMinimapMarkerOnCanvas(visibleMinimap, minimapCanvas, camX, camY) {
  const ctx = visibleMinimap.getContext("2d");
  if (!ctx || !minimapCanvas)
    return;
  ctx.clearRect(0, 0, visibleMinimap.width, visibleMinimap.height);
  ctx.drawImage(minimapCanvas, 0, 0);
  ctx.beginPath();
  ctx.arc(camX, camY, MARKER.radius, 0, Math.PI * 2);
  ctx.lineWidth = MARKER.width;
  ctx.strokeStyle = MARKER.color;
  ctx.stroke();
  ctx.closePath();
}

// src/components/minimap/minimap.ts
var _c0 = ["minimapCanvas"];
var MinimapComponent = class _MinimapComponent {
  gameService = inject(GameService);
  propertiesService = inject(PropertiesService);
  positionChange = output();
  minimapCanvasRef = viewChild.required(`minimapCanvas`);
  expanded = signal(true, ...ngDevMode ? [{ debugName: "expanded" }] : []);
  minimapCanvas = signal(null, ...ngDevMode ? [{ debugName: "minimapCanvas" }] : []);
  constructor() {
    effect(() => {
      this.setMinimapCanvas();
    });
    effect(() => {
      this.drawMinimapMarker();
    });
  }
  onMinimapClick(event) {
    const target = event.target;
    const posX = Math.round(event.offsetX / target.clientWidth * this.propertiesService.sizeX());
    const posY = Math.round(event.offsetY / target.clientHeight * this.propertiesService.sizeY());
    this.gameService.cameraPos.set({ posX, posY });
    this.positionChange.emit();
  }
  toggleExpanded() {
    this.expanded.set(!this.expanded());
  }
  setMinimapCanvas() {
    const minimapCanvas = document.createElement("canvas");
    renderMinimapOnCanvas(minimapCanvas, this.gameService.terrain());
    this.minimapCanvas.set(minimapCanvas);
    const visibleMinimap = this.minimapCanvasRef().nativeElement;
    visibleMinimap.width = this.propertiesService.sizeX();
    visibleMinimap.height = this.propertiesService.sizeY();
  }
  drawMinimapMarker() {
    const visibleMinimap = this.minimapCanvasRef().nativeElement;
    const minimapBackingStore = this.minimapCanvas();
    const cam = this.gameService.cameraPos();
    renderMinimapMarkerOnCanvas(visibleMinimap, minimapBackingStore, cam.posX, cam.posY);
  }
  static \u0275fac = function MinimapComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MinimapComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MinimapComponent, selectors: [["minimap"]], viewQuery: function MinimapComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.minimapCanvasRef, _c0, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, outputs: { positionChange: "positionChange" }, decls: 5, vars: 2, consts: [["minimapCanvas", ""], [1, "overflow-hidden", "transition-all", "cursor-crosshair", 3, "ngClass"], [1, "absolute", "top-3", "right-3", "cursor-pointer", 3, "click"], [1, "text-white", 3, "ngClass"], [1, "block", "rounded", "object-contain", "size-full", 3, "click"]], template: function MinimapComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
      \u0275\u0275listener("click", function MinimapComponent_Template_div_click_1_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.toggleExpanded());
      });
      \u0275\u0275element(2, "div", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "canvas", 4, 0);
      \u0275\u0275listener("click", function MinimapComponent_Template_canvas_click_3_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onMinimapClick($event));
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", ctx.expanded() ? "rounded-4xl size-96" : "rounded-2xl size-40");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", ctx.expanded() ? "svg-collapse text-2xl" : "svg-expand text-xl");
    }
  }, dependencies: [CommonModule, NgClass], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinimapComponent, [{
    type: Component,
    args: [{ selector: "minimap", imports: [CommonModule], standalone: true, template: `<div class="overflow-hidden transition-all cursor-crosshair" [ngClass]="expanded() ? 'rounded-4xl size-96' : 'rounded-2xl size-40'">\r
  <div class="absolute top-3 right-3 cursor-pointer" (click)="toggleExpanded()">\r
    <div class="text-white" [ngClass]="expanded() ? 'svg-collapse text-2xl' : 'svg-expand text-xl'"></div>\r
  </div>\r
  <canvas #minimapCanvas class="block rounded object-contain size-full" (click)="onMinimapClick($event)"></canvas>\r
</div>\r
` }]
  }], () => [], { positionChange: [{ type: Output, args: ["positionChange"] }], minimapCanvasRef: [{ type: ViewChild, args: [`minimapCanvas`, { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MinimapComponent, { className: "MinimapComponent", filePath: "src/components/minimap/minimap.ts", lineNumber: 14 });
})();

// src/services/mouse.ts
var MouseService = class _MouseService {
  gameService = inject(GameService);
  propertiesService = inject(PropertiesService);
  isDragging = signal(false, ...ngDevMode ? [{ debugName: "isDragging" }] : []);
  lastMousePos = signal({ posX: 0, posY: 0 }, ...ngDevMode ? [{ debugName: "lastMousePos" }] : []);
  onMouseDown(event) {
    this.isDragging.set(true);
    this.lastMousePos.set({ posX: event.clientX, posY: event.clientY });
  }
  onMouseUp() {
    this.isDragging.set(false);
  }
  onMouseMove(event, canvas) {
    if (!this.isDragging()) {
      return;
    }
    const dx = event.clientX - this.lastMousePos().posX;
    const dy = event.clientY - this.lastMousePos().posY;
    this.lastMousePos.set({ posX: event.clientX, posY: event.clientY });
    const moveX = dx / this.gameService.zoomLevel();
    const moveY = dy / this.gameService.zoomLevel();
    this.gameService.cameraPos.update((pos) => ({
      posX: Math.max(0, Math.min(this.propertiesService.sizeX(), pos.posX - moveX)),
      posY: Math.max(0, Math.min(this.propertiesService.sizeY(), pos.posY - moveY))
    }));
    this.gameService.drawViewport(canvas);
  }
  onWheel(event, canvas) {
    event.preventDefault();
    const zoomSpeed = 0.1;
    const direction = event.deltaY > 0 ? -1 : 1;
    let newZoom = this.gameService.zoomLevel() * (1 + direction * zoomSpeed);
    newZoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, newZoom));
    this.gameService.zoomLevel.set(newZoom);
    this.gameService.drawViewport(canvas);
  }
  static \u0275fac = function MouseService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MouseService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MouseService, factory: _MouseService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MouseService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/components/info/info.ts
var MAX_HEIGHT = 3e3;
var WATER_HEIGHT = BIOMES.sea.threshold * MAX_HEIGHT;
var InfoComponent = class _InfoComponent {
  propertiesService = inject(PropertiesService);
  gameService = inject(GameService);
  regenerate = output();
  newSeed = signal(0, ...ngDevMode ? [{ debugName: "newSeed" }] : []);
  pointHeight = computed(() => {
    const { posX, posY } = this.gameService.cameraPos();
    const point = this.gameService.terrain()?.[Math.round(posY)]?.[Math.round(posX)];
    const height = point?.height ?? 0;
    return height * (MAX_HEIGHT + WATER_HEIGHT) - WATER_HEIGHT;
  }, ...ngDevMode ? [{ debugName: "pointHeight" }] : []);
  constructor() {
    effect(() => {
      this.newSeed.set(this.propertiesService.seed());
    });
  }
  static \u0275fac = function InfoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InfoComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InfoComponent, selectors: [["info"]], outputs: { regenerate: "regenerate" }, decls: 19, vars: 21, consts: [["seedInput", ""], [1, "size-full", "p-4", "shadow-xl", "pointer-events-auto"], [1, "flex", "flex-col", "gap-2"], [1, "text-xs", "text-slate-400", "font-mono", "mt-1", "space-y-1"], ["type", "number", 1, "bg-slate-800", "text-slate-200", "p-1", "rounded", "w-24", "text-center", 3, "ngModelChange", "required", "min", "max", "ngModel"], [1, "px-4", "py-2", "bg-indigo-600", "hover:bg-indigo-500", "text-white", "rounded-lg", "transition", "cursor-pointer", "shadow-lg", "active:scale-95", "disabled:pointer-events-none", "disabled:opacity-30", 3, "click", "disabled"]], template: function InfoComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div");
      \u0275\u0275text(4, " Seed: ");
      \u0275\u0275elementStart(5, "input", 4, 0);
      \u0275\u0275twoWayListener("ngModelChange", function InfoComponent_Template_input_ngModelChange_5_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.newSeed, $event) || (ctx.newSeed = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div");
      \u0275\u0275text(8);
      \u0275\u0275pipe(9, "number");
      \u0275\u0275pipe(10, "number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div");
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div");
      \u0275\u0275text(15);
      \u0275\u0275pipe(16, "number");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "button", 5);
      \u0275\u0275listener("click", function InfoComponent_Template_button_click_17_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.regenerate.emit(ctx.newSeed()));
      });
      \u0275\u0275text(18, " Generuj ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      const seedInput_r2 = \u0275\u0275reference(6);
      \u0275\u0275advance(5);
      \u0275\u0275property("required", true)("min", 0)("max", 999999999);
      \u0275\u0275twoWayProperty("ngModel", ctx.newSeed);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2(" Pozycja: ", \u0275\u0275pipeBind2(9, 9, ctx.gameService.cameraPos().posX, "1.0-0"), " x ", \u0275\u0275pipeBind2(10, 12, ctx.gameService.cameraPos().posY, "1.0-0"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("Zoom: ", \u0275\u0275pipeBind2(13, 15, ctx.gameService.zoomLevel(), "1.0-0"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("Wysoko\u015B\u0107: ", \u0275\u0275pipeBind2(16, 18, ctx.pointHeight(), "1.0-0"), " m n.p.m.");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !seedInput_r2.validity.valid);
    }
  }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, RequiredValidator, MinValidator, MaxValidator, NgModel, DecimalPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InfoComponent, [{
    type: Component,
    args: [{ selector: "info", imports: [CommonModule, FormsModule], standalone: true, template: `<div class="size-full p-4 shadow-xl pointer-events-auto">\r
  <div class="flex flex-col gap-2">\r
    <div class="text-xs text-slate-400 font-mono mt-1 space-y-1">\r
      <div>\r
        Seed:\r
        <input\r
          #seedInput\r
          [required]="true"\r
          [min]="0"\r
          [max]="999999999"\r
          type="number"\r
          [(ngModel)]="newSeed"\r
          class="bg-slate-800 text-slate-200 p-1 rounded w-24 text-center"\r
        />\r
      </div>\r
      <div>\r
        Pozycja: {{ gameService.cameraPos().posX | number: '1.0-0' }} x\r
        {{ gameService.cameraPos().posY | number: '1.0-0' }}\r
      </div>\r
      <div>Zoom: {{ gameService.zoomLevel() | number: '1.0-0' }}</div>\r
      <div>Wysoko\u015B\u0107: {{ pointHeight() | number: '1.0-0' }} m n.p.m.</div>\r
    </div>\r
    <button\r
      [disabled]="!seedInput.validity.valid"\r
      (click)="regenerate.emit(newSeed())"\r
      class="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition cursor-pointer shadow-lg active:scale-95 disabled:pointer-events-none disabled:opacity-30"\r
    >\r
      Generuj\r
    </button>\r
  </div>\r
</div>\r
` }]
  }], () => [], { regenerate: [{ type: Output, args: ["regenerate"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InfoComponent, { className: "InfoComponent", filePath: "src/components/info/info.ts", lineNumber: 17 });
})();

// src/utils/weather/get-color-by-brightness.ts
var getColorByBrightness = (fromColor, toColor, brightness, opacity) => {
  const red = Math.round(fromColor[0] + (toColor[0] - fromColor[0]) * brightness);
  const green = Math.round(fromColor[1] + (toColor[1] - fromColor[1]) * brightness);
  const blue = Math.round(fromColor[2] + (toColor[2] - fromColor[2]) * brightness);
  if (opacity === void 0) {
    return `rgb(${red}, ${green}, ${blue})`;
  }
  return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
};

// src/components/weather/clouds/clouds.ts
var _c02 = (a0) => ({ "background-color": a0 });
var CloudsComponent = class _CloudsComponent {
  weather = inject(WeatherService);
  cloudRGB = computed(() => getColorByBrightness([92, 92, 92], [217, 217, 217], this.weather.brightness(), this.weather.cloudiness()), ...ngDevMode ? [{ debugName: "cloudRGB" }] : []);
  static \u0275fac = function CloudsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CloudsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CloudsComponent, selectors: [["clouds"]], decls: 7, vars: 15, consts: [[1, "animate-cloud-left"], [1, "absolute", "top-12", "left-[-20%]", "w-80", "h-24", "rounded-full", "blur-2xl", "transition-colors", "duration-1000", "ease-linear", 3, "ngStyle"], [1, "absolute", "top-32", "left-[10%]", "w-100", "h-32", "rounded-full", "blur-2xl", "transition-colors", "duration-1000", "ease-linear", 3, "ngStyle"], [1, "absolute", "top-0", "left-[10%]", "w-96", "h-28", "rounded-full", "blur-2xl", "transition-colors", "duration-1000", "ease-linear", 3, "ngStyle"], [1, "animate-cloud-right"], [1, "absolute", "top-0", "left-[-10%]", "w-96", "h-40", "rounded-full", "blur-2xl", "transition-colors", "duration-1000", "ease-linear", 3, "ngStyle"]], template: function CloudsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4);
      \u0275\u0275element(5, "div", 5)(6, "div", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(5, _c02, ctx.cloudRGB()));
      \u0275\u0275advance();
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(7, _c02, ctx.cloudRGB()));
      \u0275\u0275advance();
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(9, _c02, ctx.cloudRGB()));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(11, _c02, ctx.cloudRGB()));
      \u0275\u0275advance();
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(13, _c02, ctx.cloudRGB()));
    }
  }, dependencies: [CommonModule, NgStyle], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CloudsComponent, [{
    type: Component,
    args: [{ selector: "clouds", imports: [CommonModule], standalone: true, template: `<div class="animate-cloud-left">\r
  <div\r
    class="absolute top-12 left-[-20%] w-80 h-24 rounded-full blur-2xl transition-colors duration-1000 ease-linear"\r
    [ngStyle]="{ 'background-color': cloudRGB() }"\r
  ></div>\r
  <div\r
    class="absolute top-32 left-[10%] w-100 h-32 rounded-full blur-2xl transition-colors duration-1000 ease-linear"\r
    [ngStyle]="{ 'background-color': cloudRGB() }"\r
  ></div>\r
  <div\r
    class="absolute top-0 left-[10%] w-96 h-28 rounded-full blur-2xl transition-colors duration-1000 ease-linear"\r
    [ngStyle]="{ 'background-color': cloudRGB() }"\r
  ></div>\r
</div>\r
\r
<div class="animate-cloud-right">\r
  <div\r
    class="absolute top-0 left-[-10%] w-96 h-40 rounded-full blur-2xl transition-colors duration-1000 ease-linear"\r
    [ngStyle]="{ 'background-color': cloudRGB() }"\r
  ></div>\r
  <div\r
    class="absolute top-32 left-[10%] w-100 h-32 rounded-full blur-2xl transition-colors duration-1000 ease-linear"\r
    [ngStyle]="{ 'background-color': cloudRGB() }"\r
  ></div>\r
</div>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CloudsComponent, { className: "CloudsComponent", filePath: "src/components/weather/clouds/clouds.ts", lineNumber: 12 });
})();

// src/components/weather/rain/rain.ts
function RainComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "div", 1);
  }
  if (rf & 2) {
    const drop_r1 = ctx.$implicit;
    \u0275\u0275styleProp("left", drop_r1.left)("animation-duration", drop_r1.duration)("animation-delay", drop_r1.delay)("opacity", drop_r1.opacity);
  }
}
var RainComponent = class _RainComponent {
  weather = inject(WeatherService);
  rainDrops = computed(() => {
    const percentage = this.weather.rainPercentage() * 100;
    const count = Math.floor(percentage * 2);
    return Array.from({ length: count }).map(() => ({
      left: `${Math.random() * 100}%`,
      duration: `${1.1 - percentage / 100}s`,
      opacity: 0.1 + Math.random() * 0.5,
      delay: `${Math.random() * 2}s`
    }));
  }, ...ngDevMode ? [{ debugName: "rainDrops" }] : []);
  static \u0275fac = function RainComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RainComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RainComponent, selectors: [["rain"]], decls: 2, vars: 0, consts: [[1, "absolute", "bg-blue-100", "w-px", "h-5", "bottom-full", "animate-fall", 3, "left", "animation-duration", "animation-delay", "opacity"], [1, "absolute", "bg-blue-100", "w-px", "h-5", "bottom-full", "animate-fall"]], template: function RainComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275repeaterCreate(0, RainComponent_For_1_Template, 1, 8, "div", 0, \u0275\u0275repeaterTrackByIndex);
    }
    if (rf & 2) {
      \u0275\u0275repeater(ctx.rainDrops());
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RainComponent, [{
    type: Component,
    args: [{ selector: "rain", standalone: true, template: '@for (drop of rainDrops(); track $index) {\r\n  <div\r\n    class="absolute bg-blue-100 w-px h-5 bottom-full animate-fall"\r\n    [style.left]="drop.left"\r\n    [style.animation-duration]="drop.duration"\r\n    [style.animation-delay]="drop.delay"\r\n    [style.opacity]="drop.opacity"\r\n  ></div>\r\n}\r\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RainComponent, { className: "RainComponent", filePath: "src/components/weather/rain/rain.ts", lineNumber: 9 });
})();

// src/components/weather/moon/moon.ts
var MoonComponent = class _MoonComponent {
  dayService = inject(DayService);
  weather = inject(WeatherService);
  skyRGB = input.required(...ngDevMode ? [{ debugName: "skyRGB" }] : []);
  moonX = computed(() => {
    const moonTime = (this.dayService.timeOfDay() - this.weather.moonPhase() + 1) % 1;
    return moonTime * 150 - 25;
  }, ...ngDevMode ? [{ debugName: "moonX" }] : []);
  moonY = computed(() => -(this.weather.moonElevation() - 1) * 55 + 5, ...ngDevMode ? [{ debugName: "moonY" }] : []);
  shadowTransform = computed(() => {
    const phase = this.weather.moonPhase();
    let translateXPercentage;
    const maxOffset = 105;
    if (phase <= 0.5) {
      const progress = phase * 2;
      translateXPercentage = -progress * maxOffset;
    } else {
      const progressFromEnd = (1 - phase) * 2;
      translateXPercentage = progressFromEnd * maxOffset;
    }
    return `translateX(${translateXPercentage}%)`;
  }, ...ngDevMode ? [{ debugName: "shadowTransform" }] : []);
  static \u0275fac = function MoonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MoonComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MoonComponent, selectors: [["moon"]], inputs: { skyRGB: [1, "skyRGB"] }, decls: 10, vars: 8, consts: [[1, "absolute", "size-12", "rounded-full", "transition-all", "duration-1000", "ease-linear", "z-10", "overflow-hidden"], [1, "absolute", "inset-1", "bg-slate-100", "rounded-full", "overflow-hidden", "size-10", "shadow-[0_0_3px_1px", "rgba(255,", "255,", "255,", "0.5)]"], [1, "absolute", "inset-0", "opacity-10", "bg-[radial-gradient(circle_at_60%_60%,#94a3b8_0%,transparent_50%)]"], [1, "absolute", "top-[60%]", "left-[25%]", "size-3", "rounded-full", "bg-slate-300/40", "shadow-[inset_1px_1px_2px_rgba(0,0,0,0.1)]", "blur-[0.5px]"], [1, "absolute", "top-[30%]", "left-[55%]", "size-2", "rounded-full", "bg-slate-300/30", "shadow-[inset_-1px_-1px_1px_rgba(0,0,0,0.1)]"], [1, "absolute", "top-[20%]", "left-[30%]", "size-1.5", "rounded-full", "bg-slate-400/20"], [1, "absolute", "top-[60%]", "left-[60%]", "size-1", "rounded-full", "bg-slate-400/25"], [1, "absolute", "top-[45%]", "left-[15%]", "size-2.5", "rounded-full", "bg-slate-300/30", "blur-[0.2px]"], [1, "absolute", "top-[15%]", "left-[45%]", "w-5", "h-3", "rotate-[-20deg]", "rounded-full", "bg-slate-400/10", "blur-md"], [1, "absolute", "inset-0", "rounded-full", "transition-all", "duration-1000", "ease-linear", "z-20", "blur-xs", "size-12"]], template: function MoonComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275domElement(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(9, "div", 9);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275styleProp("left", ctx.moonX(), "%")("top", ctx.moonY(), "%");
      \u0275\u0275advance(9);
      \u0275\u0275styleProp("background-color", ctx.skyRGB())("transform", ctx.shadowTransform());
    }
  }, dependencies: [CommonModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MoonComponent, [{
    type: Component,
    args: [{ selector: "moon", imports: [CommonModule], standalone: true, template: '<div class="absolute size-12 rounded-full transition-all duration-1000 ease-linear z-10 overflow-hidden" [style.left.%]="moonX()" [style.top.%]="moonY()">\r\n  <div class="absolute inset-1 bg-slate-100 rounded-full overflow-hidden size-10 shadow-[0_0_3px_1px rgba(255, 255, 255, 0.5)]">\r\n    <div class="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_60%_60%,#94a3b8_0%,transparent_50%)]"></div>\r\n\r\n    <div class="absolute top-[60%] left-[25%] size-3 rounded-full bg-slate-300/40 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.1)] blur-[0.5px]"></div>\r\n    <div class="absolute top-[30%] left-[55%] size-2 rounded-full bg-slate-300/30 shadow-[inset_-1px_-1px_1px_rgba(0,0,0,0.1)]"></div>\r\n    <div class="absolute top-[20%] left-[30%] size-1.5 rounded-full bg-slate-400/20"></div>\r\n    <div class="absolute top-[60%] left-[60%] size-1 rounded-full bg-slate-400/25"></div>\r\n    <div class="absolute top-[45%] left-[15%] size-2.5 rounded-full bg-slate-300/30 blur-[0.2px]"></div>\r\n\r\n    <div class="absolute top-[15%] left-[45%] w-5 h-3 rotate-[-20deg] rounded-full bg-slate-400/10 blur-md"></div>\r\n  </div>\r\n  <div\r\n    class="absolute inset-0 rounded-full transition-all duration-1000 ease-linear z-20 blur-xs size-12"\r\n    [style.background-color]="skyRGB()"\r\n    [style.transform]="shadowTransform()"\r\n  ></div>\r\n</div>\r\n' }]
  }], null, { skyRGB: [{ type: Input, args: [{ isSignal: true, alias: "skyRGB", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MoonComponent, { className: "MoonComponent", filePath: "src/components/weather/moon/moon.ts", lineNumber: 12 });
})();

// src/components/weather/sun/sun.ts
var SunComponent = class _SunComponent {
  dayService = inject(DayService);
  weather = inject(WeatherService);
  sunX = computed(() => this.dayService.timeOfDay() * 150 - 25, ...ngDevMode ? [{ debugName: "sunX" }] : []);
  sunY = computed(() => -(this.weather.sunElevation() - 1) * 55 + 5, ...ngDevMode ? [{ debugName: "sunY" }] : []);
  static \u0275fac = function SunComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SunComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SunComponent, selectors: [["sun"]], decls: 1, vars: 4, consts: [[1, "absolute", "-ml-7", "w-14", "h-14", "bg-[#f6bb42]", "rounded-full", "shadow-[0_0_30px_#f6bb42]", "transition-all", "duration-1000", "ease-linear"]], template: function SunComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElement(0, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275styleProp("left", ctx.sunX(), "%")("top", ctx.sunY(), "%");
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SunComponent, [{
    type: Component,
    args: [{ selector: "sun", standalone: true, template: '<div\r\n  class="absolute -ml-7 w-14 h-14 bg-[#f6bb42] rounded-full shadow-[0_0_30px_#f6bb42] transition-all duration-1000 ease-linear"\r\n  [style.left.%]="sunX()"\r\n  [style.top.%]="sunY()"\r\n></div>\r\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SunComponent, { className: "SunComponent", filePath: "src/components/weather/sun/sun.ts", lineNumber: 10 });
})();

// src/components/weather/stars/stars.ts
function StarsComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "div", 2);
  }
  if (rf & 2) {
    const star_r1 = ctx.$implicit;
    \u0275\u0275styleProp("left", star_r1.posX, "%")("top", star_r1.posY, "%")("width", star_r1.size, "px")("height", star_r1.size, "px")("animation-duration", star_r1.duration, "s");
  }
}
var StarsComponent = class _StarsComponent {
  weather = inject(WeatherService);
  propertiesService = inject(PropertiesService);
  stars = computed(() => {
    const seed = this.propertiesService.seed();
    const starArray = [];
    for (let index = 0; index < 100; index++) {
      const posX = Math.sin(seed + index) * 1e4 % 100;
      const posY = Math.cos(seed + index * 2) * 1e4 % 75;
      const size = Math.abs(Math.sin(seed - index) * 3);
      const duration = 3 + Math.abs(Math.sin(index) * 12);
      starArray.push({ posX: Math.abs(posX), posY: Math.abs(posY), size, duration });
    }
    return starArray;
  }, ...ngDevMode ? [{ debugName: "stars" }] : []);
  starsOpacity = computed(() => {
    const brightness = this.weather.brightness();
    return Math.max(0, 1 - brightness * 3.3);
  }, ...ngDevMode ? [{ debugName: "starsOpacity" }] : []);
  static \u0275fac = function StarsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StarsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StarsComponent, selectors: [["stars"]], decls: 3, vars: 2, consts: [[1, "absolute", "inset-0", "z-0", "pointer-events-none", "transition-opacity", "duration-1000"], [1, "absolute", "bg-white", "rounded-full", "animate-twinkle", 3, "left", "top", "width", "height", "animation-duration"], [1, "absolute", "bg-white", "rounded-full", "animate-twinkle"]], template: function StarsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275repeaterCreate(1, StarsComponent_For_2_Template, 1, 10, "div", 1, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275styleProp("opacity", ctx.starsOpacity());
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.stars());
    }
  }, dependencies: [CommonModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StarsComponent, [{
    type: Component,
    args: [{ selector: "stars", imports: [CommonModule], standalone: true, template: '<div class="absolute inset-0 z-0 pointer-events-none transition-opacity duration-1000" [style.opacity]="starsOpacity()">\r\n  @for (star of stars(); track $index) {\r\n    <div\r\n      class="absolute bg-white rounded-full animate-twinkle"\r\n      [style.left.%]="star.posX"\r\n      [style.top.%]="star.posY"\r\n      [style.width.px]="star.size"\r\n      [style.height.px]="star.size"\r\n      [style.animation-duration.s]="star.duration"\r\n    ></div>\r\n  }\r\n</div>\r\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StarsComponent, { className: "StarsComponent", filePath: "src/components/weather/stars/stars.ts", lineNumber: 12 });
})();

// src/components/weather/weather.ts
var _c03 = (a0) => ({ "background-color": a0 });
var WeatherComponent = class _WeatherComponent {
  weatherService = inject(WeatherService);
  dayService = inject(DayService);
  skyRGB = computed(() => getColorByBrightness([15, 23, 42], [56, 139, 255], this.weatherService.brightness()), ...ngDevMode ? [{ debugName: "skyRGB" }] : []);
  grassRGB = computed(() => getColorByBrightness([50, 60, 42], [100, 160, 62], this.weatherService.brightness(), 0.6), ...ngDevMode ? [{ debugName: "grassRGB" }] : []);
  expanded = signal(true, ...ngDevMode ? [{ debugName: "expanded" }] : []);
  toggleExpanded() {
    this.expanded.set(!this.expanded());
  }
  static \u0275fac = function WeatherComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WeatherComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WeatherComponent, selectors: [["weather"]], decls: 56, vars: 34, consts: [[1, "overflow-hidden", "bg-slate-900", "cursor-pointer", "transition-all", 3, "click", "ngClass"], [1, "size-full", "relative", "shadow-2xl", "duration-1000", "ease-linear", "transition-colors", 3, "ngStyle"], [1, "absolute", "inset-x-0", "top-0", "w-full", "transition-all", "z-0", 3, "ngClass"], [1, "relative", "size-full", "block"], [1, "relative", "size-full", "block", 3, "skyRGB"], [1, "relative", "w-full", "min-h-96"], [1, "absolute", "inset-0", "pointer-events-none", "z-10"], [1, "absolute", "inset-0", "pointer-events-none", "overflow-hidden", "z-50"], [1, "absolute", "inset-0", "z-30", "flex", "flex-col", "justify-between", "pointer-events-none"], [1, "flex", "justify-end", "drop-shadow-md", "text-white", "transition-all", "px-6", 3, "ngClass"], [1, "absolute", "left-6"], [1, "font-bold", "tracking-tighter", "transition-all", 3, "ngClass"], [1, "flex", "gap-6", "justify-between", "font-light", "text-center"], [1, "transition-all", 3, "ngClass"], [1, "text-xl"], [1, "text-sm"], [1, "text-sm", "transition-all", 3, "ngClass"], [1, "backdrop-blur-xl", "p-6", "text-white", "drop-shadow-lg", "pointer-events-auto", "transition-colors", "duration-1000", "ease-linear", "flex", "flex-col", "gap-4", 3, "ngStyle"], [1, "flex", "justify-between", "items-center"], [1, "text-lg", "font-medium"], [1, "inline-block", "mt-2", "px-4", "py-1", "bg-white/20", "rounded-full", "text-sm", "font-semibold", "backdrop-blur-md", "border", "border-white/10", "shadow-sm"], [1, "grid", "grid-cols-3"], [1, "flex", "flex-col", "items-center"], [1, "text-xs", "uppercase", "opacity-70", "mb-1", "font-semibold", "tracking-wider"], [1, "font-bold", "text-xl"], [1, "font-bold", "text-xl", "text-blue-400"]], template: function WeatherComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function WeatherComponent_Template_div_click_0_listener() {
        return ctx.toggleExpanded();
      });
      \u0275\u0275elementStart(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "sun", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 2);
      \u0275\u0275element(5, "moon", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 5);
      \u0275\u0275element(7, "stars");
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "clouds", 6)(9, "rain", 7);
      \u0275\u0275elementStart(10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "h1", 11);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 12)(16, "div", 13)(17, "div", 14);
      \u0275\u0275text(18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 15);
      \u0275\u0275text(20, "Rok");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 13)(22, "div", 14);
      \u0275\u0275text(23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 15);
      \u0275\u0275text(25, "Dzie\u0144");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div")(27, "div", 13);
      \u0275\u0275text(28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 16);
      \u0275\u0275text(30);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(31, "div", 13)(32, "div", 17)(33, "div", 18)(34, "p", 19);
      \u0275\u0275text(35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "span", 20);
      \u0275\u0275text(37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 21)(39, "div", 22)(40, "span", 23);
      \u0275\u0275text(41, "Wilgotno\u015B\u0107");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "span", 24);
      \u0275\u0275text(43);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "div", 22)(45, "span", 23);
      \u0275\u0275text(46, "Chmury");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "span", 24);
      \u0275\u0275text(48);
      \u0275\u0275pipe(49, "number");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "div", 22)(51, "span", 23);
      \u0275\u0275text(52, "Opady");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "span", 25);
      \u0275\u0275text(54);
      \u0275\u0275pipe(55, "number");
      \u0275\u0275elementEnd()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", ctx.expanded() ? "rounded-4xl size-96" : "rounded-2xl h-20 w-96");
      \u0275\u0275advance();
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(30, _c03, ctx.skyRGB()));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.expanded() ? "h-96" : "h-40");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", ctx.expanded() ? "h-96" : "h-40");
      \u0275\u0275advance();
      \u0275\u0275property("skyRGB", ctx.skyRGB());
      \u0275\u0275advance(6);
      \u0275\u0275property("ngClass", ctx.expanded() ? "py-6" : "py-4");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", ctx.expanded() ? "text-6xl" : "text-5xl");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.dayService.formattedTime());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", ctx.expanded() ? "opacity-0" : "opacity-100");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.dayService.gameYear());
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", ctx.expanded() ? "opacity-0" : "opacity-100");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.dayService.dayOfYear());
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", ctx.expanded() ? "text-5xl" : "text-xl");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1("", ctx.weatherService.temperature(), "\xB0C");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.expanded() ? "opacity-0" : "opacity-100");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.weatherService.season());
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.expanded() ? "opacity-100" : "opacity-0");
      \u0275\u0275advance();
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(32, _c03, ctx.grassRGB()));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("Rok ", ctx.dayService.gameYear(), ", Dzie\u0144 ", ctx.dayService.dayOfYear());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.weatherService.season(), " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("", ctx.weatherService.humidity(), "%");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(49, 24, ctx.weatherService.cloudiness() * 100, "1.0-0"), "%");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(55, 27, ctx.weatherService.rainPercentage() * 100, "1.0-0"), "%");
    }
  }, dependencies: [CommonModule, NgClass, NgStyle, CloudsComponent, RainComponent, MoonComponent, SunComponent, StarsComponent, DecimalPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WeatherComponent, [{
    type: Component,
    args: [{ selector: "weather", imports: [CommonModule, CloudsComponent, RainComponent, MoonComponent, SunComponent, StarsComponent], standalone: true, template: `<div\r
  class="overflow-hidden bg-slate-900 cursor-pointer transition-all"\r
  [ngClass]="expanded() ? 'rounded-4xl size-96' : 'rounded-2xl h-20 w-96'"\r
  (click)="toggleExpanded()"\r
>\r
  <div class="size-full relative shadow-2xl duration-1000 ease-linear transition-colors" [ngStyle]="{ 'background-color': skyRGB() }">\r
    <div class="absolute inset-x-0 top-0 w-full transition-all z-0" [ngClass]="expanded() ? 'h-96' : 'h-40'">\r
      <sun class="relative size-full block" />\r
    </div>\r
    <div class="absolute inset-x-0 top-0 w-full transition-all z-0" [ngClass]="expanded() ? 'h-96' : 'h-40'">\r
      <moon class="relative size-full block" [skyRGB]="skyRGB()" />\r
    </div>\r
    <div class="relative w-full min-h-96">\r
      <stars />\r
    </div>\r
    <clouds class="absolute inset-0 pointer-events-none z-10" />\r
    <rain class="absolute inset-0 pointer-events-none overflow-hidden z-50" />\r
\r
    <div class="absolute inset-0 z-30 flex flex-col justify-between pointer-events-none">\r
      <div class="flex justify-end drop-shadow-md text-white transition-all px-6" [ngClass]="expanded() ? 'py-6' : 'py-4'">\r
        <div class="absolute left-6">\r
          <h1 class="font-bold tracking-tighter transition-all" [ngClass]="expanded() ? 'text-6xl' : 'text-5xl'">{{ dayService.formattedTime() }}</h1>\r
        </div>\r
        <div class="flex gap-6 justify-between font-light text-center">\r
          <div class="transition-all" [ngClass]="expanded() ? 'opacity-0' : 'opacity-100'">\r
            <div class="text-xl">{{ dayService.gameYear() }}</div>\r
            <div class="text-sm">Rok</div>\r
          </div>\r
          <div class="transition-all" [ngClass]="expanded() ? 'opacity-0' : 'opacity-100'">\r
            <div class="text-xl">{{ dayService.dayOfYear() }}</div>\r
            <div class="text-sm">Dzie\u0144</div>\r
          </div>\r
          <div>\r
            <div class="transition-all" [ngClass]="expanded() ? 'text-5xl' : 'text-xl'">{{ weatherService.temperature() }}\xB0C</div>\r
            <div class="text-sm transition-all" [ngClass]="expanded() ? 'opacity-0' : 'opacity-100'">{{ weatherService.season() }}</div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="transition-all" [ngClass]="expanded() ? 'opacity-100' : 'opacity-0'">\r
        <div\r
          class="backdrop-blur-xl p-6 text-white drop-shadow-lg pointer-events-auto transition-colors duration-1000 ease-linear flex flex-col gap-4"\r
          [ngStyle]="{ 'background-color': grassRGB() }"\r
        >\r
          <div class="flex justify-between items-center">\r
            <p class="text-lg font-medium">Rok {{ dayService.gameYear() }}, Dzie\u0144 {{ dayService.dayOfYear() }}</p>\r
            <span class="inline-block mt-2 px-4 py-1 bg-white/20 rounded-full text-sm font-semibold backdrop-blur-md border border-white/10 shadow-sm">\r
              {{ weatherService.season() }}\r
            </span>\r
          </div>\r
          <div class="grid grid-cols-3">\r
            <div class="flex flex-col items-center">\r
              <span class="text-xs uppercase opacity-70 mb-1 font-semibold tracking-wider">Wilgotno\u015B\u0107</span>\r
              <span class="font-bold text-xl">{{ weatherService.humidity() }}%</span>\r
            </div>\r
            <div class="flex flex-col items-center">\r
              <span class="text-xs uppercase opacity-70 mb-1 font-semibold tracking-wider">Chmury</span>\r
              <span class="font-bold text-xl">{{ weatherService.cloudiness() * 100 | number: '1.0-0' }}%</span>\r
            </div>\r
            <div class="flex flex-col items-center">\r
              <span class="text-xs uppercase opacity-70 mb-1 font-semibold tracking-wider">Opady</span>\r
              <span class="font-bold text-xl text-blue-400">{{ weatherService.rainPercentage() * 100 | number: '1.0-0' }}%</span>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WeatherComponent, { className: "WeatherComponent", filePath: "src/components/weather/weather.ts", lineNumber: 18 });
})();

export {
  CacheService,
  PropertiesService,
  DayService,
  GameService,
  MinimapComponent,
  MouseService,
  InfoComponent,
  WeatherComponent
};
//# sourceMappingURL=chunk-GXEZV73E.js.map
