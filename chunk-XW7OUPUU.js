import {
  API_URL,
  AuthService
} from "./chunk-T3YZI6NC.js";
import {
  GameMapComponent,
  MAX_GAME_ZOOM,
  MIN_GAME_ZOOM,
  MinimapComponent,
  SidePanelComponent,
  WeatherComponent
} from "./chunk-ITJMHY5Q.js";
import {
  DayService
} from "./chunk-4PYCKPBI.js";
import "./chunk-WPFGNY4G.js";
import {
  ButtonComponent,
  HeaderComponent
} from "./chunk-SZG24YRJ.js";
import {
  CommonModule,
  Component,
  HttpClient,
  Injectable,
  RouterLink,
  catchError,
  firstValueFrom,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty
} from "./chunk-3EJW5EIV.js";

// src/services/api/api.ts
var ApiService = class _ApiService {
  authService = inject(AuthService);
  httpClient = inject(HttpClient);
  async getGameInfo() {
    return firstValueFrom(this.httpClient.post(`${API_URL}/game/info`, {}).pipe(catchError((error) => {
      if (error.status === 401) {
        this.authService.logout();
      }
      throw error;
    })));
  }
  static \u0275fac = function ApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApiService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApiService, factory: _ApiService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApiService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/game/game.ts
function GamePage_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "game-map", 8, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "app-side-panel");
    \u0275\u0275element(4, "minimap", 9)(5, "weather", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const seed_r1 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("seed", seed_r1)("sizeX", ctx_r1.sizeX())("sizeY", ctx_r1.sizeY())("maxZoom", ctx_r1.maxZoom)("minZoom", ctx_r1.minZoom);
    \u0275\u0275advance(3);
    \u0275\u0275property("sizeX", ctx_r1.sizeX())("sizeY", ctx_r1.sizeY());
    \u0275\u0275advance();
    \u0275\u0275property("seed", seed_r1);
  }
}
var GamePage = class _GamePage {
  authService = inject(AuthService);
  dayService = inject(DayService);
  apiService = inject(ApiService);
  maxZoom = MAX_GAME_ZOOM;
  minZoom = MIN_GAME_ZOOM;
  seed = signal(void 0, ...ngDevMode ? [{ debugName: "seed" }] : []);
  sizeX = signal(500, ...ngDevMode ? [{ debugName: "sizeX" }] : []);
  sizeY = signal(500, ...ngDevMode ? [{ debugName: "sizeY" }] : []);
  constructor() {
    void this.getGameInfo();
  }
  async getGameInfo() {
    const data = await this.apiService.getGameInfo();
    const { seed, sizeX, sizeY } = data.map;
    this.sizeX.set(sizeX);
    this.sizeY.set(sizeY);
    this.seed.set(seed);
    this.dayService.timeDiff.set(data.time - Date.now());
  }
  static \u0275fac = function GamePage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GamePage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GamePage, selectors: [["game-page"]], decls: 7, vars: 1, consts: [["gameMap", ""], [1, "w-full", "h-screen", "overflow-hidden", "flex", "flex-col"], ["title", "Gra Ciosy"], ["text", "Odkryj \u015Awiat", "routerLink", "/wiki"], ["text", "Generator Map", "routerLink", "/generator"], ["text", "Wyloguj", 3, "buttonClick"], [1, "size-full", "relative", "select-none", "flex", "overflow-hidden"], [1, "size-full"], [3, "seed", "sizeX", "sizeY", "maxZoom", "minZoom"], [3, "sizeX", "sizeY"], [3, "seed"]], template: function GamePage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "app-header", 2);
      \u0275\u0275element(2, "app-button", 3)(3, "app-button", 4);
      \u0275\u0275elementStart(4, "app-button", 5);
      \u0275\u0275listener("buttonClick", function GamePage_Template_app_button_buttonClick_4_listener() {
        return ctx.authService.logout();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 6);
      \u0275\u0275conditionalCreate(6, GamePage_Conditional_6_Template, 6, 8);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance(6);
      \u0275\u0275conditional((tmp_0_0 = ctx.seed()) ? 6 : -1, tmp_0_0);
    }
  }, dependencies: [CommonModule, MinimapComponent, WeatherComponent, HeaderComponent, ButtonComponent, SidePanelComponent, RouterLink, GameMapComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GamePage, [{
    type: Component,
    args: [{ selector: "game-page", imports: [CommonModule, MinimapComponent, WeatherComponent, HeaderComponent, ButtonComponent, SidePanelComponent, RouterLink, GameMapComponent], standalone: true, template: '<div class="w-full h-screen overflow-hidden flex flex-col">\r\n  <app-header title="Gra Ciosy">\r\n    <app-button text="Odkryj \u015Awiat" routerLink="/wiki" />\r\n    <app-button text="Generator Map" routerLink="/generator" />\r\n    <app-button text="Wyloguj" (buttonClick)="authService.logout()" />\r\n  </app-header>\r\n\r\n  <div class="size-full relative select-none flex overflow-hidden">\r\n    @if (seed(); as seed) {\r\n      <div class="size-full">\r\n        <game-map #gameMap [seed]="seed" [sizeX]="sizeX()" [sizeY]="sizeY()" [maxZoom]="maxZoom" [minZoom]="minZoom" />\r\n      </div>\r\n\r\n      <app-side-panel>\r\n        <minimap [sizeX]="sizeX()" [sizeY]="sizeY()" />\r\n        <weather [seed]="seed" />\r\n      </app-side-panel>\r\n    }\r\n  </div>\r\n</div>\r\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GamePage, { className: "GamePage", filePath: "src/app/game/game.ts", lineNumber: 21 });
})();
export {
  GamePage
};
//# sourceMappingURL=chunk-XW7OUPUU.js.map
