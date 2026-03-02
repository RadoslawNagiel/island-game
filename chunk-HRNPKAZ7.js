import {
  CacheService,
  DayService,
  GameService,
  InfoComponent,
  MinimapComponent,
  MouseService,
  PropertiesService,
  WeatherComponent
} from "./chunk-GXEZV73E.js";
import "./chunk-YLZFPBEZ.js";
import "./chunk-WPFGNY4G.js";
import {
  ButtonComponent,
  HeaderComponent
} from "./chunk-R3G72D33.js";
import {
  CommonModule,
  Component,
  RouterLink,
  ViewChild,
  inject,
  setClassMetadata,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵviewQuerySignal
} from "./chunk-FUQELXHB.js";

// src/app/generator/generator.ts
var _c0 = ["mainCanvas"];
var GeneratorPage = class _GeneratorPage {
  mouseService = inject(MouseService);
  gameService = inject(GameService);
  cacheService = inject(CacheService);
  dayService = inject(DayService);
  propertiesService = inject(PropertiesService);
  mainCanvasRef = viewChild.required(`mainCanvas`);
  tickInterval;
  constructor() {
    this.cacheService.preloadImages(() => {
      this.gameService.drawViewport(this.mainCanvasRef().nativeElement);
    });
    this.tickInterval = setInterval(() => {
      this.dayService.tick();
      this.gameService.drawViewport(this.mainCanvasRef().nativeElement);
    }, 1e3);
  }
  ngAfterViewInit() {
    this.resizeMainCanvas();
    window.addEventListener("resize", () => {
      this.resizeMainCanvas();
      this.gameService.drawViewport(this.mainCanvasRef().nativeElement);
    });
    this.gameService.regenerateMap(this.mainCanvasRef().nativeElement, this.propertiesService.seed());
  }
  ngOnDestroy() {
    clearInterval(this.tickInterval);
  }
  resizeMainCanvas() {
    const canvas = this.mainCanvasRef().nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  static \u0275fac = function GeneratorPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GeneratorPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GeneratorPage, selectors: [["game-page"]], viewQuery: function GeneratorPage_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.mainCanvasRef, _c0, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, decls: 10, vars: 0, consts: [["mainCanvas", ""], [1, "w-full", "h-screen", "overflow-hidden", "flex", "flex-col"], ["title", "Generator Map"], ["text", "Gra", "routerLink", "/game"], ["text", "Wiki", "routerLink", "/wiki"], [1, "size-full", "relative", "overflow-hidden", "select-none"], [1, "absolute", "inset-0", "z-0", "cursor-crosshair", "active:cursor-grabbing", 3, "mousedown", "mousemove", "mouseup", "mouseleave", "wheel"], [1, "absolute", "top-4", "left-4", "z-10"], [1, "absolute", "top-4", "right-4", "z-20", 3, "positionChange"], [1, "absolute", "bottom-4", "left-4", "z-10", "rounded-2xl", "w-60", "overflow-hidden", "bg-slate-900", 3, "regenerate"]], template: function GeneratorPage_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "app-header", 2);
      \u0275\u0275element(2, "app-button", 3)(3, "app-button", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 5)(5, "canvas", 6, 0);
      \u0275\u0275listener("mousedown", function GeneratorPage_Template_canvas_mousedown_5_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.mouseService.onMouseDown($event));
      })("mousemove", function GeneratorPage_Template_canvas_mousemove_5_listener($event) {
        \u0275\u0275restoreView(_r1);
        const mainCanvas_r2 = \u0275\u0275reference(6);
        return \u0275\u0275resetView(ctx.mouseService.onMouseMove($event, mainCanvas_r2));
      })("mouseup", function GeneratorPage_Template_canvas_mouseup_5_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.mouseService.onMouseUp());
      })("mouseleave", function GeneratorPage_Template_canvas_mouseleave_5_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.mouseService.onMouseUp());
      })("wheel", function GeneratorPage_Template_canvas_wheel_5_listener($event) {
        \u0275\u0275restoreView(_r1);
        const mainCanvas_r2 = \u0275\u0275reference(6);
        return \u0275\u0275resetView(ctx.mouseService.onWheel($event, mainCanvas_r2));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(7, "weather", 7);
      \u0275\u0275elementStart(8, "minimap", 8);
      \u0275\u0275listener("positionChange", function GeneratorPage_Template_minimap_positionChange_8_listener() {
        \u0275\u0275restoreView(_r1);
        const mainCanvas_r2 = \u0275\u0275reference(6);
        return \u0275\u0275resetView(ctx.gameService.drawViewport(mainCanvas_r2));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "info", 9);
      \u0275\u0275listener("regenerate", function GeneratorPage_Template_info_regenerate_9_listener($event) {
        \u0275\u0275restoreView(_r1);
        const mainCanvas_r2 = \u0275\u0275reference(6);
        return \u0275\u0275resetView(ctx.gameService.regenerateMap(mainCanvas_r2, $event));
      });
      \u0275\u0275elementEnd()()();
    }
  }, dependencies: [CommonModule, MinimapComponent, InfoComponent, WeatherComponent, HeaderComponent, ButtonComponent, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GeneratorPage, [{
    type: Component,
    args: [{ selector: "game-page", imports: [CommonModule, MinimapComponent, InfoComponent, WeatherComponent, HeaderComponent, ButtonComponent, RouterLink], standalone: true, template: '<div class="w-full h-screen overflow-hidden flex flex-col">\r\n  <app-header title="Generator Map">\r\n    <app-button text="Gra" routerLink="/game" />\r\n    <app-button text="Wiki" routerLink="/wiki" />\r\n  </app-header>\r\n\r\n  <div class="size-full relative overflow-hidden select-none">\r\n    <canvas\r\n      #mainCanvas\r\n      class="absolute inset-0 z-0 cursor-crosshair active:cursor-grabbing"\r\n      (mousedown)="mouseService.onMouseDown($event)"\r\n      (mousemove)="mouseService.onMouseMove($event, mainCanvas)"\r\n      (mouseup)="mouseService.onMouseUp()"\r\n      (mouseleave)="mouseService.onMouseUp()"\r\n      (wheel)="mouseService.onWheel($event, mainCanvas)"\r\n    ></canvas>\r\n\r\n    <weather class="absolute top-4 left-4 z-10" />\r\n    <minimap class="absolute top-4 right-4 z-20" (positionChange)="gameService.drawViewport(mainCanvas)" />\r\n    <info class="absolute bottom-4 left-4 z-10 rounded-2xl w-60 overflow-hidden bg-slate-900" (regenerate)="gameService.regenerateMap(mainCanvas, $event)" />\r\n  </div>\r\n</div>\r\n' }]
  }], () => [], { mainCanvasRef: [{ type: ViewChild, args: [`mainCanvas`, { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GeneratorPage, { className: "GeneratorPage", filePath: "src/app/generator/generator.ts", lineNumber: 21 });
})();
export {
  GeneratorPage
};
//# sourceMappingURL=chunk-HRNPKAZ7.js.map
