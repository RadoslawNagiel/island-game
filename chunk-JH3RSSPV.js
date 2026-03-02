import {
  AuthService
} from "./chunk-XAVCDGRK.js";
import {
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControl,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-YLZFPBEZ.js";
import {
  ButtonComponent,
  HeaderComponent
} from "./chunk-R3G72D33.js";
import {
  CommonModule,
  Component,
  Input,
  Router,
  RouterLink,
  inject,
  input,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-FUQELXHB.js";

// src/components/dump/input/input.ts
var _c0 = [[["", "customError", ""]]];
var _c1 = ["[customError]"];
function InputComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage(), " ");
  }
}
var InputComponent = class _InputComponent {
  label = input.required(...ngDevMode ? [{ debugName: "label" }] : []);
  type = input("text", ...ngDevMode ? [{ debugName: "type" }] : []);
  placeholder = input("", ...ngDevMode ? [{ debugName: "placeholder" }] : []);
  errorMessage = input("", ...ngDevMode ? [{ debugName: "errorMessage" }] : []);
  ngControl = inject(NgControl, { optional: true, self: true });
  value = "";
  disabled = false;
  constructor() {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }
  onChange = () => {
  };
  onTouched = () => {
  };
  writeValue(value) {
    this.value = value || "";
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  onInput(event) {
    const val = event.target.value;
    this.value = val;
    this.onChange(val);
  }
  static \u0275fac = function InputComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InputComponent, selectors: [["app-input"]], inputs: { label: [1, "label"], type: [1, "type"], placeholder: [1, "placeholder"], errorMessage: [1, "errorMessage"] }, ngContentSelectors: _c1, decls: 7, vars: 6, consts: [[1, "block", "text-zinc-400", "text-sm", "mb-1"], [1, "w-full", "px-4", "py-2", "bg-zinc-950", "border", "border-zinc-800", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-emerald-500", "disabled:opacity-50", 3, "input", "blur", "type", "placeholder", "value", "disabled"], [1, "text-rose-400", "text-sm", "my-1", "min-h-5"]], template: function InputComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c0);
      \u0275\u0275domElementStart(0, "div")(1, "label", 0);
      \u0275\u0275text(2);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(3, "input", 1);
      \u0275\u0275domListener("input", function InputComponent_Template_input_input_3_listener($event) {
        return ctx.onInput($event);
      })("blur", function InputComponent_Template_input_blur_3_listener() {
        return ctx.onTouched();
      });
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "div", 2);
      \u0275\u0275projection(5);
      \u0275\u0275conditionalCreate(6, InputComponent_Conditional_6_Template, 1, 1);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.label());
      \u0275\u0275advance();
      \u0275\u0275domProperty("type", ctx.type())("placeholder", ctx.placeholder())("value", ctx.value)("disabled", ctx.disabled);
      \u0275\u0275advance(3);
      \u0275\u0275conditional((ctx.ngControl == null ? null : ctx.ngControl.touched) && (ctx.ngControl == null ? null : ctx.ngControl.invalid) ? 6 : -1);
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputComponent, [{
    type: Component,
    args: [{ selector: "app-input", standalone: true, template: '<div>\r\n  <label class="block text-zinc-400 text-sm mb-1">{{ label() }}</label>\r\n  <input\r\n    [type]="type()"\r\n    [placeholder]="placeholder()"\r\n    [value]="value"\r\n    [disabled]="disabled"\r\n    (input)="onInput($event)"\r\n    (blur)="onTouched()"\r\n    class="w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:opacity-50"\r\n  />\r\n\r\n  <div class="text-rose-400 text-sm my-1 min-h-5">\r\n    <ng-content select="[customError]"></ng-content>\r\n    @if (ngControl?.touched && ngControl?.invalid) {\r\n      {{ errorMessage() }}\r\n    }\r\n  </div>\r\n</div>\r\n' }]
  }], () => [], { label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: true }] }], type: [{ type: Input, args: [{ isSignal: true, alias: "type", required: false }] }], placeholder: [{ type: Input, args: [{ isSignal: true, alias: "placeholder", required: false }] }], errorMessage: [{ type: Input, args: [{ isSignal: true, alias: "errorMessage", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InputComponent, { className: "InputComponent", filePath: "src/components/dump/input/input.ts", lineNumber: 10 });
})();

// src/validators/password.ts
var passwordMatchValidator = (control) => {
  const password = control.get("password")?.value;
  const repeat = control.get("confirmPassword")?.value;
  return password && repeat && password !== repeat ? { passwordMismatch: true } : null;
};

// src/services/api/api.models.ts
var AuthError;
(function(AuthError2) {
  AuthError2["userAlreadyTaken"] = "User already taken";
  AuthError2["invalidCredentials"] = "Invalid credentials";
})(AuthError || (AuthError = {}));

// src/app/home/home.ts
function HomePage_Conditional_10_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Wprowadzone has\u0142a nie s\u0105 zgodne ");
  }
}
function HomePage_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-input", 9)(1, "span", 14);
    \u0275\u0275conditionalCreate(2, HomePage_Conditional_10_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx_r0.authForm.errors == null ? null : ctx_r0.authForm.errors["passwordMismatch"]) && ctx_r0.authForm.controls.password.touched && ctx_r0.authForm.controls.confirmPassword.touched ? 2 : -1);
  }
}
function HomePage_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", ctx, " ");
  }
}
var HomePage = class _HomePage {
  authService = inject(AuthService);
  router = inject(Router);
  formBuilder = inject(FormBuilder);
  isLoginMode = signal(true, ...ngDevMode ? [{ debugName: "isLoginMode" }] : []);
  loginError = signal(null, ...ngDevMode ? [{ debugName: "loginError" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  authForm = this.formBuilder.nonNullable.group({
    nick: ["", [Validators.required]],
    password: ["", [Validators.required]],
    confirmPassword: ["", []]
  });
  toggleRegister() {
    this.authForm.reset();
    this.isLoginMode.set(!this.isLoginMode());
    if (this.isLoginMode()) {
      this.authForm.controls.nick.setValidators([Validators.required]);
      this.authForm.controls.password.setValidators([Validators.required]);
      this.authForm.controls.confirmPassword.setValidators([]);
      this.authForm.removeValidators(passwordMatchValidator);
    } else {
      this.authForm.controls.nick.setValidators([Validators.required, Validators.minLength(3)]);
      this.authForm.controls.password.setValidators([Validators.required, Validators.minLength(8)]);
      this.authForm.controls.confirmPassword.setValidators([Validators.required]);
      this.authForm.addValidators(passwordMatchValidator);
    }
  }
  async submit() {
    if (this.loading()) {
      return;
    }
    this.loading.set(true);
    this.loginError.set(null);
    this.authForm.markAllAsTouched();
    if (this.authForm.valid) {
      try {
        const { nick, password } = this.authForm.value;
        if (!nick || !password) {
          return;
        }
        if (this.isLoginMode()) {
          await this.authService.login(nick, password);
        } else {
          await this.authService.register(nick, password);
        }
        await this.router.navigate(["/game"]);
      } catch (error) {
        switch (error?.error?.message) {
          case AuthError.invalidCredentials:
            this.loginError.set("B\u0142\u0119dny login lub has\u0142o");
            break;
          case AuthError.userAlreadyTaken:
            this.loginError.set("Ten nick jest ju\u017C zaj\u0119ty");
            break;
          default:
            this.loginError.set("B\u0142\u0105d serwera");
        }
      }
    }
    this.loading.set(false);
  }
  static \u0275fac = function HomePage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomePage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomePage, selectors: [["home-page"]], decls: 18, vars: 10, consts: [["title", "Gra Ciosy", "subtitle", "Zaloguj si\u0119 lub odkrywaj \u015Bwiat gry"], ["text", "Wiki", "routerLink", "/wiki"], ["text", "Generator Map", "routerLink", "/generator"], [1, "flex", "justify-center", "p-12"], [1, "w-full", "max-w-md", "bg-zinc-900", "border", "border-zinc-800", "rounded-3xl", "shadow-2xl", "p-8"], [1, "text-3xl", "font-black", "text-white", "mb-6", "text-center"], [1, "flex", "flex-col", "gap-2", 3, "formGroup"], ["formControlName", "nick", "label", "Nick", 3, "errorMessage"], ["formControlName", "password", "label", "Has\u0142o", "type", "password", 3, "errorMessage"], ["formControlName", "confirmPassword", "label", "Powt\xF3rz has\u0142o", "type", "password", "errorMessage", "Powt\xF3rz has\u0142o"], [1, "text-rose-600", "text-sm", "text-center", "mb-2", "min-h-5"], [3, "buttonClick", "text", "disabled"], [1, "mt-6", "text-center", "text-sm", "text-zinc-500"], [1, "text-emerald-400", "hover:text-emerald-300", "font-semibold", "ml-1", "cursor-pointer", 3, "click"], ["customError", ""]], template: function HomePage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-header", 0);
      \u0275\u0275element(1, "app-button", 1)(2, "app-button", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "h2", 5);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "form", 6);
      \u0275\u0275element(8, "app-input", 7)(9, "app-input", 8);
      \u0275\u0275conditionalCreate(10, HomePage_Conditional_10_Template, 3, 1, "app-input", 9);
      \u0275\u0275elementStart(11, "div", 10);
      \u0275\u0275conditionalCreate(12, HomePage_Conditional_12_Template, 1, 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "app-button", 11);
      \u0275\u0275listener("buttonClick", function HomePage_Template_app_button_buttonClick_13_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 12);
      \u0275\u0275text(15);
      \u0275\u0275elementStart(16, "button", 13);
      \u0275\u0275listener("click", function HomePage_Template_button_click_16_listener() {
        return ctx.toggleRegister();
      });
      \u0275\u0275text(17);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      let tmp_5_0;
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.isLoginMode() ? "Logowanie" : "Rejestracja", " ");
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.authForm);
      \u0275\u0275advance();
      \u0275\u0275property("errorMessage", ctx.isLoginMode() ? "Wprowad\u017A nazw\u0119 u\u017Cytkownika" : "Wprowad\u017A nazw\u0119 u\u017Cytkownika sk\u0142adaj\u0105c\u0105 si\u0119 z co najmniej 3 znak\xF3w");
      \u0275\u0275advance();
      \u0275\u0275property("errorMessage", ctx.isLoginMode() ? "Wprowad\u017A has\u0142o" : "Wprowad\u017A has\u0142o sk\u0142adaj\u0105ce si\u0119 z co najmniej 8 znak\xF3w");
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isLoginMode() ? 10 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional((tmp_5_0 = ctx.loginError()) ? 12 : -1, tmp_5_0);
      \u0275\u0275advance();
      \u0275\u0275property("text", ctx.isLoginMode() ? "Zaloguj si\u0119" : "Zarejestruj si\u0119")("disabled", ctx.loading());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.isLoginMode() ? "Nie masz konta?" : "Masz ju\u017C konto?", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.isLoginMode() ? "Zarejestruj si\u0119?" : "Zaloguj si\u0119", " ");
    }
  }, dependencies: [CommonModule, RouterLink, FormsModule, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName, ButtonComponent, HeaderComponent, InputComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomePage, [{
    type: Component,
    args: [{ selector: "home-page", imports: [CommonModule, RouterLink, FormsModule, ReactiveFormsModule, ButtonComponent, HeaderComponent, InputComponent], standalone: true, template: `<app-header title="Gra Ciosy" subtitle="Zaloguj si\u0119 lub odkrywaj \u015Bwiat gry">\r
  <app-button text="Wiki" routerLink="/wiki" />\r
  <app-button text="Generator Map" routerLink="/generator" />\r
</app-header>\r
\r
<div class="flex justify-center p-12">\r
  <div class="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-3xl shadow-2xl p-8">\r
    <h2 class="text-3xl font-black text-white mb-6 text-center">\r
      {{ isLoginMode() ? 'Logowanie' : 'Rejestracja' }}\r
    </h2>\r
\r
    <form [formGroup]="authForm" class="flex flex-col gap-2">\r
      <app-input\r
        formControlName="nick"\r
        label="Nick"\r
        [errorMessage]="isLoginMode() ? 'Wprowad\u017A nazw\u0119 u\u017Cytkownika' : 'Wprowad\u017A nazw\u0119 u\u017Cytkownika sk\u0142adaj\u0105c\u0105 si\u0119 z co najmniej 3 znak\xF3w'"\r
      />\r
      <app-input\r
        formControlName="password"\r
        label="Has\u0142o"\r
        type="password"\r
        [errorMessage]="isLoginMode() ? 'Wprowad\u017A has\u0142o' : 'Wprowad\u017A has\u0142o sk\u0142adaj\u0105ce si\u0119 z co najmniej 8 znak\xF3w'"\r
      />\r
      @if (!isLoginMode()) {\r
        <app-input formControlName="confirmPassword" label="Powt\xF3rz has\u0142o" type="password" errorMessage="Powt\xF3rz has\u0142o">\r
          <span customError>\r
            @if (authForm.errors?.['passwordMismatch'] && authForm.controls.password.touched && authForm.controls.confirmPassword.touched) {\r
              Wprowadzone has\u0142a nie s\u0105 zgodne\r
            }\r
          </span>\r
        </app-input>\r
      }\r
\r
      <div class="text-rose-600 text-sm text-center mb-2 min-h-5">\r
        @if (loginError(); as loginError) {\r
          {{ loginError }}\r
        }\r
      </div>\r
\r
      <app-button [text]="isLoginMode() ? 'Zaloguj si\u0119' : 'Zarejestruj si\u0119'" [disabled]="loading()" (buttonClick)="submit()" />\r
\r
      <div class="mt-6 text-center text-sm text-zinc-500">\r
        {{ isLoginMode() ? 'Nie masz konta?' : 'Masz ju\u017C konto?' }}\r
        <button (click)="toggleRegister()" class="text-emerald-400 hover:text-emerald-300 font-semibold ml-1 cursor-pointer">\r
          {{ isLoginMode() ? 'Zarejestruj si\u0119?' : 'Zaloguj si\u0119' }}\r
        </button>\r
      </div>\r
    </form>\r
  </div>\r
</div>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomePage, { className: "HomePage", filePath: "src/app/home/home.ts", lineNumber: 19 });
})();
export {
  HomePage
};
//# sourceMappingURL=chunk-JH3RSSPV.js.map
