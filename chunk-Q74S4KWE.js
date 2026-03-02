import {
  BIOMES,
  BiomeType,
  PLANTS,
  getFood,
  getResource,
  getTool
} from "./chunk-WPFGNY4G.js";
import {
  ButtonComponent,
  HeaderComponent
} from "./chunk-R3G72D33.js";
import {
  CommonModule,
  Component,
  PercentPipe,
  RouterLink,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-FUQELXHB.js";

// src/app/wiki/wiki.ts
var _forTrack0 = ($index, $item) => $item.type;
var _forTrack1 = ($index, $item) => $item.id;
function WikiPage_For_5_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "span", 15);
    \u0275\u0275text(2, "G\u0119sto\u015B\u0107 ro\u015Blinno\u015Bci:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 16);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "percent");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const biome_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, biome_r1.plantDensity));
  }
}
function WikiPage_For_5_For_13_Conditional_15_For_1_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getTool(t_r2).name);
  }
}
function WikiPage_For_5_For_13_Conditional_15_For_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275repeaterCreate(1, WikiPage_For_5_For_13_Conditional_15_For_1_Conditional_7_For_2_Template, 2, 1, "span", 34, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(item_r4.requiredTools);
  }
}
function WikiPage_For_5_For_13_Conditional_15_For_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1, "Brak narz\u0119dzi");
    \u0275\u0275elementEnd();
  }
}
function WikiPage_For_5_For_13_Conditional_15_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28)(2, "div", 29);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 30);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 31);
    \u0275\u0275conditionalCreate(7, WikiPage_For_5_For_13_Conditional_15_For_1_Conditional_7_Template, 3, 0, "div", 32)(8, WikiPage_For_5_For_13_Conditional_15_For_1_Conditional_8_Template, 2, 0, "span", 33);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.getLootLabel(item_r4.type));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Czas zbioru: ", item_r4.acquisitionTime, " min");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(item_r4.requiredTools && item_r4.requiredTools.length ? 7 : 8);
  }
}
function WikiPage_For_5_For_13_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, WikiPage_For_5_For_13_Conditional_15_For_1_Template, 9, 3, "div", 27, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const plant_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275repeater(plant_r5.loot);
  }
}
function WikiPage_For_5_For_13_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275text(1, "Brak \u0142up\xF3w");
    \u0275\u0275elementEnd();
  }
}
function WikiPage_For_5_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 14)(1, "div", 17);
    \u0275\u0275element(2, "img", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 20)(6, "div", 21)(7, "span", 22);
    \u0275\u0275text(8, "Szansa spotkania");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 23);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "percent");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 24)(13, "span", 25);
    \u0275\u0275text(14, "\u0141upy");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, WikiPage_For_5_For_13_Conditional_15_Template, 2, 0)(16, WikiPage_For_5_For_13_Conditional_16_Template, 2, 0, "div", 26);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const plant_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", plant_r5.image, \u0275\u0275sanitizeUrl)("alt", plant_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(plant_r5.name);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 5, plant_r5.spawnProbability));
    \u0275\u0275advance(5);
    \u0275\u0275conditional(plant_r5.loot && plant_r5.loot.length ? 15 : 16);
  }
}
function WikiPage_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 4)(1, "div", 5);
    \u0275\u0275element(2, "div", 6)(3, "img", 7);
    \u0275\u0275elementStart(4, "div", 8)(5, "h2", 9);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, WikiPage_For_5_Conditional_7_Template, 6, 3, "div", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 11)(9, "h3", 12);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 13);
    \u0275\u0275repeaterCreate(12, WikiPage_For_5_For_13_Template, 17, 7, "article", 14, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const biome_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("src", biome_r1.image, \u0275\u0275sanitizeUrl)("alt", biome_r1.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(biome_r1.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(biome_r1.plants.length ? 7 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", biome_r1.plants.length ? "Ro\u015Bliny w tym regionie" : "Brak ro\u015Blin w tym regionie", " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(biome_r1.plants);
  }
}
var WikiPage = class _WikiPage {
  biomeNames = {
    [BiomeType.sea]: "Morze",
    [BiomeType.inlandWaters]: "Wody \u015Br\xF3dl\u0105dowe",
    [BiomeType.waterfront]: "Wybrze\u017Ce",
    [BiomeType.grass]: "\u0141\u0105ka",
    [BiomeType.forest]: "Las",
    [BiomeType.mountain]: "Ska\u0142y",
    [BiomeType.snow]: "\u015Anieg"
  };
  getTool = getTool;
  wikiData = signal(Object.entries(BIOMES).map(([key, biomeData]) => {
    const biomeType = key;
    const plantsInThisBiome = Object.entries(PLANTS).filter(([, plant]) => Array.isArray(plant.locations) && plant.locations.some((loc) => loc.location === biomeType)).map(([plantId, plant]) => __spreadProps(__spreadValues({}, plant), {
      id: plantId,
      spawnProbability: (Array.isArray(plant.locations) ? plant.locations.find((loc) => loc.location === biomeType)?.probability : 0) ?? 0
    }));
    return __spreadProps(__spreadValues({
      type: biomeType,
      name: this.biomeNames[biomeType] ?? biomeType
    }, biomeData), {
      plants: plantsInThisBiome
    });
  }), ...ngDevMode ? [{ debugName: "wikiData" }] : []);
  getLootLabel(type) {
    const food = getFood(type);
    if (food) {
      return food.name;
    }
    const resource = getResource(type);
    if (resource) {
      return resource.name;
    }
    return type;
  }
  static \u0275fac = function WikiPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WikiPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WikiPage, selectors: [["wiki-page"]], decls: 6, vars: 0, consts: [["title", "Encyklopedia Ro\u015Blin", "subtitle", "Przewodnik po florze \u015Bwiata gry"], ["text", "Gra", "routerLink", "/game"], ["text", "Generator Map", "routerLink", "/generator"], [1, "space-y-16", "p-12"], [1, "bg-zinc-900", "rounded-3xl", "overflow-hidden", "border", "border-zinc-800", "shadow-2xl"], [1, "relative", "h-48", "md:h-64", "overflow-hidden", "border-b", "border-zinc-800"], [1, "absolute", "inset-0", "bg-linear-to-r", "from-zinc-950/90", "via-zinc-900/60", "to-transparent", "z-10"], [1, "absolute", "inset-0", "w-full", "h-full", "object-cover", "opacity-60", 3, "src", "alt"], [1, "relative", "z-20", "h-full", "p-8", "md:p-12", "flex", "flex-col", "justify-center"], [1, "text-4xl", "md:text-5xl", "font-black", "text-white", "drop-shadow-lg"], [1, "mt-4", "inline-flex", "items-center", "gap-2", "bg-zinc-950/50", "px-4", "py-2", "rounded-lg", "w-max", "backdrop-blur-sm", "border", "border-zinc-700/50"], [1, "p-8", "md:p-12"], [1, "text-2xl", "font-semibold", "mb-8", "text-zinc-100", "border-l-4", "border-emerald-500", "pl-4"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-3", "xl:grid-cols-4", "gap-8"], [1, "bg-zinc-950", "rounded-2xl", "p-6", "flex", "flex-col", "items-center", "text-center", "border", "border-zinc-800", "hover:border-emerald-500/50", "transition-colors", "group"], [1, "text-zinc-400", "font-medium"], [1, "text-emerald-400", "font-bold"], [1, "h-32", "w-32", "mb-6", "flex", "items-center", "justify-center", "p-2", "bg-zinc-900", "rounded-full", "border", "border-zinc-800", "group-hover:bg-zinc-800", "transition-colors"], [1, "max-h-full", "max-w-full", "object-contain", "drop-shadow-xl", 3, "src", "alt"], [1, "text-xl", "font-bold", "text-emerald-300", "mb-4"], [1, "w-full", "space-y-3", "text-sm", "text-left"], [1, "flex", "justify-between", "bg-zinc-900", "px-4", "py-2", "rounded-lg"], [1, "text-zinc-500"], [1, "text-emerald-400", "font-medium"], [1, "bg-zinc-900", "px-4", "py-3", "rounded-lg", "flex", "flex-col", "gap-2"], [1, "text-zinc-500", "mb-1"], [1, "text-zinc-400"], [1, "flex", "justify-between", "items-center"], [1, "text-left"], [1, "font-medium", "text-zinc-200"], [1, "text-zinc-500", "text-xs"], [1, "text-right"], [1, "flex", "flex-wrap", "gap-2", "justify-end"], [1, "text-zinc-400", "text-xs"], [1, "bg-zinc-800", "border", "border-zinc-700", "text-zinc-300", "text-xs", "px-2", "py-1", "rounded-md"]], template: function WikiPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-header", 0);
      \u0275\u0275element(1, "app-button", 1)(2, "app-button", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 3);
      \u0275\u0275repeaterCreate(4, WikiPage_For_5_Template, 14, 5, "section", 4, _forTrack0);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.wikiData());
    }
  }, dependencies: [CommonModule, ButtonComponent, HeaderComponent, RouterLink, PercentPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WikiPage, [{
    type: Component,
    args: [{ selector: "wiki-page", imports: [CommonModule, PercentPipe, ButtonComponent, HeaderComponent, RouterLink], standalone: true, template: `<app-header title="Encyklopedia Ro\u015Blin" subtitle="Przewodnik po florze \u015Bwiata gry">
  <app-button text="Gra" routerLink="/game" />
  <app-button text="Generator Map" routerLink="/generator" />
</app-header>

<div class="space-y-16 p-12">
  @for (biome of wikiData(); track biome.type) {
    <section class="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">
      <div class="relative h-48 md:h-64 overflow-hidden border-b border-zinc-800">
        <div class="absolute inset-0 bg-linear-to-r from-zinc-950/90 via-zinc-900/60 to-transparent z-10"></div>

        <img [src]="biome.image" [alt]="biome.name" class="absolute inset-0 w-full h-full object-cover opacity-60" />

        <div class="relative z-20 h-full p-8 md:p-12 flex flex-col justify-center">
          <h2 class="text-4xl md:text-5xl font-black text-white drop-shadow-lg">{{ biome.name }}</h2>
          @if (biome.plants.length) {
            <div class="mt-4 inline-flex items-center gap-2 bg-zinc-950/50 px-4 py-2 rounded-lg w-max backdrop-blur-sm border border-zinc-700/50">
              <span class="text-zinc-400 font-medium">G\u0119sto\u015B\u0107 ro\u015Blinno\u015Bci:</span>
              <span class="text-emerald-400 font-bold">{{ biome.plantDensity | percent }}</span>
            </div>
          }
        </div>
      </div>

      <div class="p-8 md:p-12">
        <h3 class="text-2xl font-semibold mb-8 text-zinc-100 border-l-4 border-emerald-500 pl-4">
          {{ biome.plants.length ? 'Ro\u015Bliny w tym regionie' : 'Brak ro\u015Blin w tym regionie' }}
        </h3>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          @for (plant of biome.plants; track plant.id) {
            <article
              class="bg-zinc-950 rounded-2xl p-6 flex flex-col items-center text-center border border-zinc-800 hover:border-emerald-500/50 transition-colors group"
            >
              <div
                class="h-32 w-32 mb-6 flex items-center justify-center p-2 bg-zinc-900 rounded-full border border-zinc-800 group-hover:bg-zinc-800 transition-colors"
              >
                <img [src]="plant.image" [alt]="plant.name" class="max-h-full max-w-full object-contain drop-shadow-xl" />
              </div>

              <h4 class="text-xl font-bold text-emerald-300 mb-4">{{ plant.name }}</h4>

              <div class="w-full space-y-3 text-sm text-left">
                <div class="flex justify-between bg-zinc-900 px-4 py-2 rounded-lg">
                  <span class="text-zinc-500">Szansa spotkania</span>
                  <span class="text-emerald-400 font-medium">{{ plant.spawnProbability | percent }}</span>
                </div>

                <div class="bg-zinc-900 px-4 py-3 rounded-lg flex flex-col gap-2">
                  <span class="text-zinc-500 mb-1">\u0141upy</span>

                  @if (plant.loot && plant.loot.length) {
                    @for (item of plant.loot; track item) {
                      <div class="flex justify-between items-center">
                        <div class="text-left">
                          <div class="font-medium text-zinc-200">{{ getLootLabel(item.type) }}</div>
                          <div class="text-zinc-500 text-xs">Czas zbioru: {{ item.acquisitionTime }} min</div>
                        </div>

                        <div class="text-right">
                          @if (item.requiredTools && item.requiredTools.length) {
                            <div class="flex flex-wrap gap-2 justify-end">
                              @for (t of item.requiredTools; track t) {
                                <span class="bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs px-2 py-1 rounded-md">{{ getTool(t).name }}</span>
                              }
                            </div>
                          } @else {
                            <span class="text-zinc-400 text-xs">Brak narz\u0119dzi</span>
                          }
                        </div>
                      </div>
                    }
                  } @else {
                    <div class="text-zinc-400">Brak \u0142up\xF3w</div>
                  }
                </div>
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  }
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WikiPage, { className: "WikiPage", filePath: "src/app/wiki/wiki.ts", lineNumber: 23 });
})();
export {
  WikiPage
};
//# sourceMappingURL=chunk-Q74S4KWE.js.map
