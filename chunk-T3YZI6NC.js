import {
  HttpClient,
  Injectable,
  Router,
  firstValueFrom,
  inject,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable
} from "./chunk-3EJW5EIV.js";

// src/environments/environment.ts
var environment = {
  production: false,
  apiUrl: "http://localhost:3000"
};

// src/services/api/auth.ts
var API_URL = environment.apiUrl;
var AuthService = class _AuthService {
  httpClient = inject(HttpClient);
  router = inject(Router);
  async register(nick, password) {
    return firstValueFrom(this.httpClient.post(`${API_URL}/auth/register`, { nick, password }).pipe(tap((res) => {
      localStorage.setItem("token", res.accessToken);
    })));
  }
  async login(nick, password) {
    return firstValueFrom(this.httpClient.post(`${API_URL}/auth/login`, { nick, password }).pipe(tap((res) => {
      localStorage.setItem("token", res.accessToken);
    })));
  }
  getToken() {
    return localStorage.getItem("token");
  }
  logout() {
    localStorage.removeItem("token");
    void this.router.navigate(["/"]);
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  API_URL,
  AuthService
};
//# sourceMappingURL=chunk-T3YZI6NC.js.map
