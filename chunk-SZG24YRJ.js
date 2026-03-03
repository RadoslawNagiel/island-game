import {
  Component,
  Input,
  Output,
  input,
  output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-3EJW5EIV.js";

// src/components/dump/button/button.ts
var ButtonComponent = class _ButtonComponent {
  text = input.required(...ngDevMode ? [{ debugName: "text" }] : []);
  disabled = input(false, ...ngDevMode ? [{ debugName: "disabled" }] : []);
  buttonClick = output();
  static \u0275fac = function ButtonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ButtonComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ButtonComponent, selectors: [["app-button"]], inputs: { text: [1, "text"], disabled: [1, "disabled"] }, outputs: { buttonClick: "buttonClick" }, decls: 2, vars: 11, consts: [[1, "px-4", "md:px-8", "py-2", "md:py-3", "bg-emerald-600", "text-white", "rounded-xl", "font-bold", "shadow-lg", "shadow-emerald-900/50", "transition-all", "w-full", 3, "click"]], template: function ButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "button", 0);
      \u0275\u0275domListener("click", function ButtonComponent_Template_button_click_0_listener() {
        return ctx.buttonClick.emit();
      });
      \u0275\u0275text(1);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("pointer-events", ctx.disabled())("cursor-pointer", !ctx.disabled())("hover:-translate-y-1", !ctx.disabled())("hover:bg-emerald-500", !ctx.disabled())("opacity-30", ctx.disabled());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.text(), "\n");
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonComponent, [{
    type: Component,
    args: [{ selector: "app-button", standalone: true, template: '<button\r\n  (click)="buttonClick.emit()"\r\n  class="px-4 md:px-8 py-2 md:py-3 bg-emerald-600 text-white rounded-xl font-bold shadow-lg shadow-emerald-900/50 transition-all w-full"\r\n  [class.pointer-events.none]="disabled()"\r\n  [class.cursor-pointer]="!disabled()"\r\n  [class.hover:-translate-y-1]="!disabled()"\r\n  [class.hover:bg-emerald-500]="!disabled()"\r\n  [class.opacity-30]="disabled()"\r\n>\r\n  {{ text() }}\r\n</button>\r\n' }]
  }], null, { text: [{ type: Input, args: [{ isSignal: true, alias: "text", required: true }] }], disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false }] }], buttonClick: [{ type: Output, args: ["buttonClick"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ButtonComponent, { className: "ButtonComponent", filePath: "src/components/dump/button/button.ts", lineNumber: 8 });
})();

// src/components/dump/header/header.ts
var _c0 = ["*"];
var HeaderComponent = class _HeaderComponent {
  title = input.required(...ngDevMode ? [{ debugName: "title" }] : []);
  subtitle = input(...ngDevMode ? [void 0, { debugName: "subtitle" }] : []);
  static \u0275fac = function HeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], inputs: { title: [1, "title"], subtitle: [1, "subtitle"] }, ngContentSelectors: _c0, decls: 8, vars: 2, consts: [[1, "z-50", "flex", "flex-col", "md:flex-row", "justify-between", "md:items-center", "border-b", "border-zinc-800", "gap-4", "pt-2", "p-4", "md:p-6", "md:pb-4", "sticky", "top-0", "bg-zinc-950"], [1, "text-4xl", "font-extrabold", "text-emerald-500", "tracking-tight"], [1, "text-zinc-500", "mt-2"], [1, "flex", "gap-4"]], template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275domElementStart(0, "header", 0)(1, "div")(2, "h1", 1);
      \u0275\u0275text(3);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "p", 2);
      \u0275\u0275text(5);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(6, "div", 3);
      \u0275\u0275projection(7);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.title());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.subtitle());
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderComponent, [{
    type: Component,
    args: [{ selector: "app-header", standalone: true, template: '<header class="z-50 flex flex-col md:flex-row justify-between md:items-center border-b border-zinc-800 gap-4 pt-2 p-4 md:p-6 md:pb-4 sticky top-0 bg-zinc-950">\r\n  <div>\r\n    <h1 class="text-4xl font-extrabold text-emerald-500 tracking-tight">{{ title() }}</h1>\r\n    <p class="text-zinc-500 mt-2">{{ subtitle() }}</p>\r\n  </div>\r\n\r\n  <div class="flex gap-4">\r\n    <ng-content />\r\n  </div>\r\n</header>\r\n' }]
  }], null, { title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: true }] }], subtitle: [{ type: Input, args: [{ isSignal: true, alias: "subtitle", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "src/components/dump/header/header.ts", lineNumber: 8 });
})();

export {
  ButtonComponent,
  HeaderComponent
};
//# sourceMappingURL=chunk-SZG24YRJ.js.map
