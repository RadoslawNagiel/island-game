import {
  FormControl,
  FormControlDirective,
  FormsModule,
  InputComponent,
  NgControlStatus,
  ReactiveFormsModule,
  Validators
} from "./chunk-25GJI2PB.js";
import {
  GameMapComponent,
  GameService,
  GeneratorService,
  MAX_ZOOM,
  MIN_ZOOM,
  MinimapComponent,
  SidePanelComponent,
  WeatherComponent
} from "./chunk-ITJMHY5Q.js";
import "./chunk-4PYCKPBI.js";
import {
  BIOMES
} from "./chunk-WPFGNY4G.js";
import {
  ButtonComponent,
  HeaderComponent
} from "./chunk-SZG24YRJ.js";
import {
  CommonModule,
  Component,
  DecimalPipe,
  Input,
  Output,
  RouterLink,
  computed,
  inject,
  input,
  output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-3EJW5EIV.js";

// src/components/smart/info/info.ts
var MAX_HEIGHT = 3e3;
var WATER_HEIGHT = BIOMES.sea.threshold * MAX_HEIGHT;
var InfoComponent = class _InfoComponent {
  gameService = inject(GameService);
  seed = input.required(...ngDevMode ? [{ debugName: "seed" }] : []);
  regenerate = output();
  seedFormControl = new FormControl(0, [Validators.required, Validators.minLength(1), Validators.maxLength(9)]);
  pointHeight = computed(() => {
    const { posX, posY } = this.gameService.cameraPos();
    const point = this.gameService.terrain()?.[Math.round(posY)]?.[Math.round(posX)];
    const height = point?.height ?? 0;
    return height * (MAX_HEIGHT + WATER_HEIGHT) - WATER_HEIGHT;
  }, ...ngDevMode ? [{ debugName: "pointHeight" }] : []);
  ngOnChanges(changes) {
    if (changes.seed) {
      this.seedFormControl.setValue(this.seed());
    }
  }
  regenerateMap() {
    const newSeed = this.seedFormControl.value;
    if (newSeed) {
      this.regenerate.emit(Number(newSeed));
    }
  }
  static \u0275fac = function InfoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InfoComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InfoComponent, selectors: [["info"]], inputs: { seed: [1, "seed"] }, outputs: { regenerate: "regenerate" }, features: [\u0275\u0275NgOnChangesFeature], decls: 13, vars: 19, consts: [[1, "w-full", "pointer-events-auto", "font-mono", "mt-1", "space-y-2"], ["type", "number", "label", "Seed", 1, "block", 3, "formControl", "keepErrorSpace"], [1, "text-zinc-400", "text-sm"], ["text", "Generuj", 3, "buttonClick", "disabled"]], template: function InfoComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-input", 1);
      \u0275\u0275elementStart(2, "div", 2);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "number");
      \u0275\u0275pipe(5, "number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 2);
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 2);
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "app-button", 3);
      \u0275\u0275listener("buttonClick", function InfoComponent_Template_app_button_buttonClick_12_listener() {
        return ctx.regenerateMap();
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("formControl", ctx.seedFormControl)("keepErrorSpace", false);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2(" Pozycja: ", \u0275\u0275pipeBind2(4, 7, ctx.gameService.cameraPos().posX, "1.0-0"), " x ", \u0275\u0275pipeBind2(5, 10, ctx.gameService.cameraPos().posY, "1.0-0"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("Zoom: ", \u0275\u0275pipeBind2(8, 13, ctx.gameService.zoomLevel(), "1.0-0"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("Wysoko\u015B\u0107: ", \u0275\u0275pipeBind2(11, 16, ctx.pointHeight(), "1.0-0"), " m n.p.m.");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !ctx.seedFormControl.valid || !ctx.seedFormControl.value);
    }
  }, dependencies: [CommonModule, FormsModule, NgControlStatus, ReactiveFormsModule, FormControlDirective, ButtonComponent, InputComponent, DecimalPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InfoComponent, [{
    type: Component,
    args: [{ selector: "info", imports: [CommonModule, FormsModule, ReactiveFormsModule, ButtonComponent, InputComponent], standalone: true, template: `<div class="w-full pointer-events-auto font-mono mt-1 space-y-2">\r
  <app-input class="block" [formControl]="seedFormControl" [keepErrorSpace]="false" type="number" label="Seed" />\r
\r
  <div class="text-zinc-400 text-sm">\r
    Pozycja: {{ gameService.cameraPos().posX | number: '1.0-0' }} x\r
    {{ gameService.cameraPos().posY | number: '1.0-0' }}\r
  </div>\r
  <div class="text-zinc-400 text-sm">Zoom: {{ gameService.zoomLevel() | number: '1.0-0' }}</div>\r
  <div class="text-zinc-400 text-sm">Wysoko\u015B\u0107: {{ pointHeight() | number: '1.0-0' }} m n.p.m.</div>\r
  <app-button text="Generuj" [disabled]="!seedFormControl.valid || !seedFormControl.value" (buttonClick)="regenerateMap()" />\r
</div>\r
` }]
  }], null, { seed: [{ type: Input, args: [{ isSignal: true, alias: "seed", required: true }] }], regenerate: [{ type: Output, args: ["regenerate"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InfoComponent, { className: "InfoComponent", filePath: "src/components/smart/info/info.ts", lineNumber: 18 });
})();

// src/app/generator/generator.ts
var GeneratorPage = class _GeneratorPage {
  generatorService = inject(GeneratorService);
  maxZoom = MAX_ZOOM;
  minZoom = MIN_ZOOM;
  constructor() {
    this.regenerateMap(0);
  }
  regenerateMap(seed) {
    const newSeed = seed === this.generatorService.seed() ? Math.floor(Math.random() * 1e9) : seed;
    this.generatorService.seed.set(newSeed);
  }
  static \u0275fac = function GeneratorPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GeneratorPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GeneratorPage, selectors: [["game-page"]], decls: 12, vars: 9, consts: [["gameMap", ""], [1, "w-full", "h-screen", "overflow-hidden", "flex", "flex-col"], ["title", "Generator Map"], ["text", "Odkryj \u015Awiat", "routerLink", "/wiki"], ["text", "Wejd\u017A do Gry", "routerLink", "/game"], [1, "size-full", "relative", "select-none", "flex", "overflow-hidden"], [1, "size-full"], [3, "seed", "sizeX", "sizeY", "maxZoom", "minZoom"], [3, "sizeX", "sizeY"], [3, "seed"], [3, "regenerate", "seed"]], template: function GeneratorPage_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "app-header", 2);
      \u0275\u0275element(2, "app-button", 3)(3, "app-button", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 5)(5, "div", 6);
      \u0275\u0275element(6, "game-map", 7, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "app-side-panel");
      \u0275\u0275element(9, "minimap", 8)(10, "weather", 9);
      \u0275\u0275elementStart(11, "info", 10);
      \u0275\u0275listener("regenerate", function GeneratorPage_Template_info_regenerate_11_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.regenerateMap($event));
      });
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("seed", ctx.generatorService.seed())("sizeX", ctx.generatorService.sizeX())("sizeY", ctx.generatorService.sizeY())("maxZoom", ctx.maxZoom)("minZoom", ctx.minZoom);
      \u0275\u0275advance(3);
      \u0275\u0275property("sizeX", ctx.generatorService.sizeX())("sizeY", ctx.generatorService.sizeY());
      \u0275\u0275advance();
      \u0275\u0275property("seed", ctx.generatorService.seed());
      \u0275\u0275advance();
      \u0275\u0275property("seed", ctx.generatorService.seed());
    }
  }, dependencies: [MinimapComponent, InfoComponent, WeatherComponent, HeaderComponent, ButtonComponent, RouterLink, SidePanelComponent, GameMapComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GeneratorPage, [{
    type: Component,
    args: [{ selector: "game-page", imports: [MinimapComponent, InfoComponent, WeatherComponent, HeaderComponent, ButtonComponent, RouterLink, SidePanelComponent, GameMapComponent], standalone: true, template: '<div class="w-full h-screen overflow-hidden flex flex-col">\r\n  <app-header title="Generator Map">\r\n    <app-button text="Odkryj \u015Awiat" routerLink="/wiki" />\r\n    <app-button text="Wejd\u017A do Gry" routerLink="/game" />\r\n  </app-header>\r\n\r\n  <div class="size-full relative select-none flex overflow-hidden">\r\n    <div class="size-full">\r\n      <game-map\r\n        #gameMap\r\n        [seed]="generatorService.seed()"\r\n        [sizeX]="generatorService.sizeX()"\r\n        [sizeY]="generatorService.sizeY()"\r\n        [maxZoom]="maxZoom"\r\n        [minZoom]="minZoom"\r\n      />\r\n    </div>\r\n\r\n    <app-side-panel>\r\n      <minimap [sizeX]="generatorService.sizeX()" [sizeY]="generatorService.sizeY()" />\r\n      <weather [seed]="generatorService.seed()" />\r\n      <info [seed]="generatorService.seed()" (regenerate)="regenerateMap($event)" />\r\n    </app-side-panel>\r\n  </div>\r\n</div>\r\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GeneratorPage, { className: "GeneratorPage", filePath: "src/app/generator/generator.ts", lineNumber: 19 });
})();
export {
  GeneratorPage
};
//# sourceMappingURL=chunk-ZG4JVPGK.js.map
