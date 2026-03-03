import {
  Injectable,
  computed,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-3EJW5EIV.js";

// src/services/day.ts
var TIME_PER_DAY_MS = 10 * 60 * 990;
var EPOCH_DATE_MS = (/* @__PURE__ */ new Date("2026-01-01T00:00:00Z")).getTime();
var DayService = class _DayService {
  timeDiff = signal(0, ...ngDevMode ? [{ debugName: "timeDiff" }] : []);
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
  tick() {
    this.realCurrentTimeMs.set(Date.now() + this.timeDiff());
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

export {
  DayService
};
//# sourceMappingURL=chunk-4PYCKPBI.js.map
