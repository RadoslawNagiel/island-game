import {
  AuthService
} from "./chunk-XAVCDGRK.js";
import {
  Component,
  Router,
  RouterOutlet,
  bootstrapApplication,
  inject,
  provideBrowserGlobalErrorListeners,
  provideRouter,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart
} from "./chunk-FUQELXHB.js";

// src/guards/auth.guard.ts
var authGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (auth.getToken())
    return true;
  void router.navigate(["/"]);
  return false;
};

// src/app/app.routes.ts
var routes = [
  { path: "", loadComponent: async () => import("./chunk-JH3RSSPV.js").then((module) => module.HomePage) },
  { path: "generator", loadComponent: async () => import("./chunk-HRNPKAZ7.js").then((module) => module.GeneratorPage) },
  { path: "wiki", loadComponent: async () => import("./chunk-Q74S4KWE.js").then((module) => module.WikiPage) },
  { path: "game", loadComponent: async () => import("./chunk-HZVBXV2N.js").then((module) => module.GamePage), canActivate: [authGuard] },
  { path: "**", redirectTo: "" }
];

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes)
  ]
};

// src/app/app.ts
var App = class _App {
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "min-h-screen", "bg-zinc-950", "text-zinc-300", "font-sans"]], template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "router-outlet");
      \u0275\u0275elementEnd();
    }
  }, dependencies: [RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{
      selector: "app-root",
      imports: [RouterOutlet],
      template: `
    <div class="min-h-screen bg-zinc-950 text-zinc-300 font-sans">
      <router-outlet />
    </div>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 13 });
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
