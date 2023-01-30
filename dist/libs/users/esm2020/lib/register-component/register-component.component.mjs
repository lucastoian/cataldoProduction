import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { LocalstorageService } from '../services/localstorage.service';
import { Location } from '@angular/common';
import { MessageService } from 'primeng/api';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../services/auth.service";
import * as i3 from "../services/localstorage.service";
import * as i4 from "@angular/router";
import * as i5 from "primeng/api";
import * as i6 from "@angular/common";
import * as i7 from "primeng/inputtext";
import * as i8 from "primeng/button";
function RegisterComponentComponent_small_13_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "email is required");
    i0.ɵɵelementEnd();
} }
function RegisterComponentComponent_small_13_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "email is invalid");
    i0.ɵɵelementEnd();
} }
function RegisterComponentComponent_small_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 21);
    i0.ɵɵtemplate(1, RegisterComponentComponent_small_13_span_1_Template, 2, 0, "span", 22);
    i0.ɵɵtemplate(2, RegisterComponentComponent_small_13_span_2_Template, 2, 0, "span", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.loginForm.email.errors.required);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.loginForm.email.errors.email);
} }
function RegisterComponentComponent_small_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 21);
    i0.ɵɵtext(1, "The password must have at least 8 characters");
    i0.ɵɵelementEnd();
} }
function RegisterComponentComponent_small_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 21);
    i0.ɵɵtext(1, "Password is required");
    i0.ɵɵelementEnd();
} }
function RegisterComponentComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7)(1, "small", 23);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r3.authMessage);
} }
const _c0 = function () { return { "padding": "8px !important" }; };
const _c1 = function () { return { "width": "160px" }; };
export class RegisterComponentComponent {
    constructor(formBuilder, authService, localstorageService, router, messageService, location) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.localstorageService = localstorageService;
        this.router = router;
        this.messageService = messageService;
        this.location = location;
        this.isSubmitted = false;
        this.authError = false;
        this.loading = false;
        this.authMessage = "Email or password is wrong";
        this.loading = false;
        this.user = new User();
    }
    ngOnInit() {
        this.loading = false;
        this._initLoginForm();
        google.accounts.id.initialize({
            client_id: "908804749713-9q67kslreerltag8jpsi7tadf845mms6.apps.googleusercontent.com",
            callback: this.handleCredentialResponse.bind(this),
            auto_select: false,
            cancel_on_tap_outside: true,
        });
        google.accounts.id.renderButton(
        // @ts-ignore
        document.getElementById("google-button"), { theme: "outline", size: "large", width: "100%" });
        // @ts-ignore
        google.accounts.id.prompt((notification) => { });
        /*
            this.authService.authState.subscribe(user => {
              this.user = user;
              console.log(user);
            });
            */
    }
    async handleCredentialResponse(response) {
        // Here will be your response from Google.
        console.log(response);
        this.authService.google(response['credential']).subscribe((data) => {
            console.log(data);
            localStorage.setItem("authToken", data.token);
            localStorage.setItem("email", data.email);
            this.localstorageService.setToken(data.token);
            // this.location.back();
            this.router.navigate(['/']);
            this.messageService.add({
                severity: 'success',
                summary: 'Accesso effettuato correttamente',
                detail: `Benvenuto!`
            });
        });
    }
    _initLoginForm() {
        this.loginFormGroup = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8)]],
            password2: ['', Validators.required]
        });
    }
    onSubmit() {
        this.loading = true;
        console.log("submitted");
        this.isSubmitted = true;
        console.log("email = " + this.user.email);
        console.log("password = " + this.loginFormGroup.get("password").value);
        console.log("password2 = " + this.loginFormGroup.get("password2").value);
        if (this.loginFormGroup.get("password").value !== this.loginFormGroup.get("password2").value) {
            this.loading = false;
            return;
        }
        if (this.loginFormGroup.invalid) {
            this.loading = false;
            return;
        }
        this.authService.register(this.user).subscribe(data => {
            let response = data;
            localStorage.setItem("authToken", response.token);
            localStorage.setItem("email", response.user);
            console.log(response.user + "  " + response.token);
            this.location.historyGo(-2);
            this.authError = false;
        }, error => {
            this.loading = false;
            this.authMessage = "An error occured";
            this.authError = true;
        });
    }
    goToLogin() {
        this.router.navigate(['/login']);
    }
    get loginForm() {
        return this.loginFormGroup.controls;
    }
}
RegisterComponentComponent.ɵfac = function RegisterComponentComponent_Factory(t) { return new (t || RegisterComponentComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.AuthService), i0.ɵɵdirectiveInject(i3.LocalstorageService), i0.ɵɵdirectiveInject(i4.Router), i0.ɵɵdirectiveInject(i5.MessageService), i0.ɵɵdirectiveInject(i6.Location)); };
RegisterComponentComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RegisterComponentComponent, selectors: [["eshop-frontend-register-component"]], decls: 36, vars: 20, consts: [[1, "container", 2, "text-align", "center", "background-color", "white !important", "border", "1px solid", "margin-top", "30px"], [1, "container", "m-2", 2, "background-color", "white !important"], [1, "grid"], [1, "col-12", "p-0", "p-md-5", "container-fluid", 2, "background-color", "rgba(255, 255, 255, 0)"], [2, "margin-top", "20px"], [3, "formGroup"], [1, "grid", "mt-6", "container-fluid"], [1, "col-12"], [1, "p-inputgroup", 2, "max-width", "1000px", "margin", "auto"], [1, "p-inputgroup-addon"], [1, "pi", "pi-user"], ["type", "text", "formControlName", "email", "pInputText", "", "placeholder", "Email", 3, "ngModel", "ngModelChange"], ["class", "p-error", 4, "ngIf"], [1, "pi", "pi-lock"], ["type", "password", "formControlName", "password", "pInputText", "", "placeholder", "password"], ["type", "password", "formControlName", "password2", "pInputText", "", "placeholder", "password", 3, "ngModel", "ngModelChange"], [2, "max-width", "1000px", "margin", "auto"], ["label", "Invia", "styleClass", "full-btn", 3, "loading", "onClick"], ["href", "/login", 2, "color", "rgb(70, 138, 255)", "text-decoration", "none"], ["id", "google-button", 1, ""], ["class", "col-12", 4, "ngIf"], [1, "p-error"], [4, "ngIf"], [1, "p-error", 2, "font-size", "40px", "font-weight", "800"]], template: function RegisterComponentComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
        i0.ɵɵtext(5, "Registrati");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "form", 5)(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "span", 9);
        i0.ɵɵelement(11, "i", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "input", 11);
        i0.ɵɵlistener("ngModelChange", function RegisterComponentComponent_Template_input_ngModelChange_12_listener($event) { return ctx.user.email = $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(13, RegisterComponentComponent_small_13_Template, 3, 2, "small", 12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "div", 7)(15, "div", 8)(16, "span", 9);
        i0.ɵɵelement(17, "i", 13);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(18, "input", 14);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(19, RegisterComponentComponent_small_19_Template, 2, 0, "small", 12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "div", 7)(21, "div", 8)(22, "span", 9);
        i0.ɵɵelement(23, "i", 13);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(24, "input", 15);
        i0.ɵɵlistener("ngModelChange", function RegisterComponentComponent_Template_input_ngModelChange_24_listener($event) { return ctx.user.password = $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(25, RegisterComponentComponent_small_25_Template, 2, 0, "small", 12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "div", 7)(27, "div", 16)(28, "p-button", 17);
        i0.ɵɵlistener("onClick", function RegisterComponentComponent_Template_p_button_onClick_28_listener() { return ctx.onSubmit(); });
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(29, "div", 7)(30, "span");
        i0.ɵɵtext(31, "Ti sei gi\u00E0 registerato? ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(32, "a", 18);
        i0.ɵɵtext(33, "Clicca per effettuare l'accesso");
        i0.ɵɵelementEnd()();
        i0.ɵɵelement(34, "div", 19);
        i0.ɵɵtemplate(35, RegisterComponentComponent_div_35_Template, 3, 1, "div", 20);
        i0.ɵɵelementEnd()()()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("formGroup", ctx.loginFormGroup);
        i0.ɵɵadvance(6);
        i0.ɵɵstyleMap(i0.ɵɵpureFunction0(16, _c0));
        i0.ɵɵproperty("ngModel", ctx.user.email);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.loginForm.email.invalid && ctx.isSubmitted);
        i0.ɵɵadvance(5);
        i0.ɵɵstyleMap(i0.ɵɵpureFunction0(17, _c0));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.loginForm.password.invalid && ctx.isSubmitted);
        i0.ɵɵadvance(5);
        i0.ɵɵstyleMap(i0.ɵɵpureFunction0(18, _c0));
        i0.ɵɵproperty("ngModel", ctx.user.password);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.loginForm.password.invalid && ctx.isSubmitted);
        i0.ɵɵadvance(3);
        i0.ɵɵstyleMap(i0.ɵɵpureFunction0(19, _c1));
        i0.ɵɵproperty("loading", ctx.loading);
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngIf", ctx.isSubmitted && ctx.authError);
    } }, dependencies: [i6.NgIf, i7.InputText, i8.Button, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RegisterComponentComponent, [{
        type: Component,
        args: [{ selector: 'eshop-frontend-register-component', template: "<div class=\" container \" style=\"text-align: center; background-color: white !important;border: 1px solid;    margin-top: 30px;\">\n\n\n    <div class=\"container  m-2\" style=\" background-color: white !important;\">\n      <div class=\"grid\">\n<!--             <div class=\"col-6\">\n              <img src=\"assets/images/login-photo.png\" alt=\"\">\n          </div> -->\n          <div class=\"col-12 p-0 p-md-5 container-fluid\" style=\"background-color: rgba(255, 255, 255, 0);\">\n              <h2 style=\"    margin-top: 20px;\">Registrati</h2>\n              <form [formGroup]=\"loginFormGroup\">\n              <div class=\"grid  mt-6 container-fluid\" >\n                  <div class=\"col-12\">\n                      <div class=\"p-inputgroup\"  style=\"max-width: 1000px; margin: auto;\">\n                          <span class=\"p-inputgroup-addon\"><i class=\"pi pi-user\"></i></span>\n                          <input type=\"text\" formControlName=\"email\" pInputText placeholder=\"Email\" [(ngModel)]=\"user.email\"         [style]=\"{'padding': '8px !important'}\">\n                      </div>\n                      <small *ngIf=\"loginForm.email.invalid && isSubmitted\" class=\"p-error\"\n                      ><span *ngIf=\"loginForm.email.errors.required\">email is required</span>\n                      <span *ngIf=\"loginForm.email.errors.email\">email is invalid</span></small>\n\n\n                  </div>\n                  <div class=\"col-12\">\n                      <div class=\"p-inputgroup\" style=\"max-width: 1000px;  margin: auto;\" >\n                          <span class=\"p-inputgroup-addon\"><i class=\"pi pi-lock\"></i></span>\n                          <input type=\"password\"\n                          formControlName=\"password\"\n                          pInputText\n                          [style]=\"{'padding': '8px !important'}\"\n                          placeholder=\"password\">\n                      </div>\n                      <small *ngIf=\"loginForm.password.invalid && isSubmitted\" class=\"p-error\">The password must have at least 8 characters</small>\n\n                  </div>\n\n                  <div class=\"col-12\">\n                    <div class=\"p-inputgroup\" style=\"max-width: 1000px;  margin: auto;\" >\n                        <span class=\"p-inputgroup-addon\"><i class=\"pi pi-lock\"></i></span>\n                        <input type=\"password\"\n                        formControlName=\"password2\"\n                        pInputText\n                        [style]=\"{'padding': '8px !important'}\"\n                        placeholder=\"password\"\n                        [(ngModel)]=\"user.password\"\n                        >\n                    </div>\n                    <small *ngIf=\"loginForm.password.invalid && isSubmitted\" class=\"p-error\">Password is required</small>\n\n                </div>\n                  <div class=\"col-12\" >\n                    <div style=\"max-width: 1000px;  margin: auto;\"><p-button [loading]=\"loading\" label=\"Invia\" styleClass=\"full-btn\" (onClick)=\"onSubmit()\" [style]=\"{'width': '160px'}\" ></p-button></div>\n\n                  </div>\n                  <div class=\"col-12\">\n                    <span>Ti sei gi\u00E0 registerato? </span><a  href=\"/login\" style=\"color: rgb(70, 138, 255); text-decoration: none;\">Clicca per effettuare l'accesso</a>\n                  </div>\n\n                  <div class=\"\" id=\"google-button\"></div>\n                  <div class=\"col-12\" *ngIf=\"isSubmitted && authError\" >\n                      <small class=\"p-error\" style=\"font-size: 40px; font-weight: 800\">{{authMessage}}</small>\n                  </div>\n\n          </div>\n      </form>\n      </div>\n          </div>\n  </div>\n</div>\n\n" }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.AuthService }, { type: i3.LocalstorageService }, { type: i4.Router }, { type: i5.MessageService }, { type: i6.Location }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXItY29tcG9uZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdXNlcnMvc3JjL2xpYi9yZWdpc3Rlci1jb21wb25lbnQvcmVnaXN0ZXItY29tcG9uZW50LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdXNlcnMvc3JjL2xpYi9yZWdpc3Rlci1jb21wb25lbnQvcmVnaXN0ZXItY29tcG9uZW50LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLFdBQVcsRUFBYSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7Ozs7Ozs7Ozs7SUNTdEIsNEJBQThDO0lBQUEsaUNBQWlCO0lBQUEsaUJBQU87OztJQUN2RSw0QkFBMkM7SUFBQSxnQ0FBZ0I7SUFBQSxpQkFBTzs7O0lBRmxFLGlDQUNDO0lBQUEsdUZBQXNFO0lBQ3ZFLHVGQUFrRTtJQUFBLGlCQUFROzs7SUFEbEUsZUFBcUM7SUFBckMsNkRBQXFDO0lBQ3RDLGVBQWtDO0lBQWxDLDBEQUFrQzs7O0lBYXpDLGlDQUF5RTtJQUFBLDREQUE0QztJQUFBLGlCQUFROzs7SUFlL0gsaUNBQXlFO0lBQUEsb0NBQW9CO0lBQUEsaUJBQVE7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bUosRUFBQTtRQUV2SixrRkFFMEU7UUFHOUUsaUJBQU07UUFDTiwrQkFBb0IsY0FBQSxlQUFBO1FBRXFCLHlCQUEwQjtRQUFBLGlCQUFPO1FBQ2xFLDZCQUl1QjtRQUMzQixpQkFBTTtRQUNOLGtGQUE2SDtRQUVqSSxpQkFBTTtRQUVOLCtCQUFvQixjQUFBLGVBQUE7UUFFbUIseUJBQTBCO1FBQUEsaUJBQU87UUFDbEUsa0NBTUM7UUFERCwySkFBMkI7UUFMM0IsaUJBTUMsRUFBQTtRQUVMLGtGQUFxRztRQUV6RyxpQkFBTTtRQUNKLCtCQUFxQixlQUFBLG9CQUFBO1FBQzhGLDhHQUFXLGNBQVUsSUFBQztRQUErQixpQkFBVyxFQUFBLEVBQUE7UUFHbkwsK0JBQW9CLFlBQUE7UUFDWiw4Q0FBd0I7UUFBQSxpQkFBTztRQUFBLDhCQUEyRTtRQUFBLGdEQUErQjtRQUFBLGlCQUFJLEVBQUE7UUFHckosMkJBQXVDO1FBQ3ZDLDhFQUVNO1FBRWQsaUJBQU0sRUFBQSxFQUFBLEVBQUEsRUFBQSxFQUFBOztRQXJESSxlQUE0QjtRQUE1Qiw4Q0FBNEI7UUFLcUYsZUFBdUM7UUFBdkMsMENBQXVDO1FBQXhFLHdDQUF3QjtRQUU5RixlQUE0QztRQUE1QyxxRUFBNEM7UUFZaEQsZUFBdUM7UUFBdkMsMENBQXVDO1FBR25DLGVBQStDO1FBQS9DLHdFQUErQztRQVVyRCxlQUF1QztRQUF2QywwQ0FBdUM7UUFFdkMsMkNBQTJCO1FBR3ZCLGVBQStDO1FBQS9DLHdFQUErQztRQUlpRixlQUE0QjtRQUE1QiwwQ0FBNEI7UUFBM0cscUNBQW1CO1FBUXpELGVBQThCO1FBQTlCLHVEQUE4Qjs7dUZEMUN4RCwwQkFBMEI7Y0FMdEMsU0FBUzsyQkFDRSxtQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJkZWNsYXJlIHZhciBnb29nbGU6IGFueTtcbmltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL21vZGVscy91c2VyJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IExvY2Fsc3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9sb2NhbHN0b3JhZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJ3ByaW1lbmcvYXBpJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlc2hvcC1mcm9udGVuZC1yZWdpc3Rlci1jb21wb25lbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vcmVnaXN0ZXItY29tcG9uZW50LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmVnaXN0ZXItY29tcG9uZW50LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJDb21wb25lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBsb2dpbkZvcm1Hcm91cDogRm9ybUdyb3VwO1xuICBpc1N1Ym1pdHRlZCA9IGZhbHNlO1xuICBhdXRoRXJyb3IgPSBmYWxzZTtcbiAgbG9hZGluZzpib29sZWFuID0gZmFsc2U7XG4gIGF1dGhNZXNzYWdlID0gXCJFbWFpbCBvciBwYXNzd29yZCBpcyB3cm9uZ1wiO1xuICB1c2VyOiBVc2VyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIGxvY2Fsc3RvcmFnZVNlcnZpY2U6IExvY2Fsc3RvcmFnZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XG4gICAgICAgICAgICAgICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5faW5pdExvZ2luRm9ybSgpO1xuICAgIGdvb2dsZS5hY2NvdW50cy5pZC5pbml0aWFsaXplKHtcbiAgICAgIGNsaWVudF9pZDogXCI5MDg4MDQ3NDk3MTMtOXE2N2tzbHJlZXJsdGFnOGpwc2k3dGFkZjg0NW1tczYuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb21cIixcbiAgICAgIGNhbGxiYWNrOiB0aGlzLmhhbmRsZUNyZWRlbnRpYWxSZXNwb25zZS5iaW5kKHRoaXMpLFxuICAgICAgYXV0b19zZWxlY3Q6IGZhbHNlLFxuICAgICAgY2FuY2VsX29uX3RhcF9vdXRzaWRlOiB0cnVlLFxuICBcbiAgICB9KTtcbiAgICBnb29nbGUuYWNjb3VudHMuaWQucmVuZGVyQnV0dG9uKFxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnb29nbGUtYnV0dG9uXCIpLFxuICAgICAgICB7IHRoZW1lOiBcIm91dGxpbmVcIiwgc2l6ZTogXCJsYXJnZVwiLCB3aWR0aDogXCIxMDAlXCIgfVxuICAgICAgKTtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGdvb2dsZS5hY2NvdW50cy5pZC5wcm9tcHQoKG5vdGlmaWNhdGlvbjogUHJvbXB0TW9tZW50Tm90aWZpY2F0aW9uKSA9PiB7fSlcbi8qXG4gICAgdGhpcy5hdXRoU2VydmljZS5hdXRoU3RhdGUuc3Vic2NyaWJlKHVzZXIgPT4ge1xuICAgICAgdGhpcy51c2VyID0gdXNlcjtcbiAgICAgIGNvbnNvbGUubG9nKHVzZXIpO1xuICAgIH0pO1xuICAgICovXG4gIH1cblxuICBhc3luYyBoYW5kbGVDcmVkZW50aWFsUmVzcG9uc2UocmVzcG9uc2U6IGFueSkge1xuICAgIC8vIEhlcmUgd2lsbCBiZSB5b3VyIHJlc3BvbnNlIGZyb20gR29vZ2xlLlxuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlLmdvb2dsZShyZXNwb25zZVsnY3JlZGVudGlhbCddKS5zdWJzY3JpYmUoKGRhdGEpID0+e1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICBcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYXV0aFRva2VuXCIsIGRhdGEudG9rZW4pO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJlbWFpbFwiLCBkYXRhLmVtYWlsKTtcbiAgICAgIHRoaXMubG9jYWxzdG9yYWdlU2VydmljZS5zZXRUb2tlbihkYXRhLnRva2VuKTtcbiAgICAgLy8gdGhpcy5sb2NhdGlvbi5iYWNrKCk7XG4gICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLyddKVxuICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5hZGQoe1xuICAgICAgICBzZXZlcml0eTogJ3N1Y2Nlc3MnLFxuICAgICAgICBzdW1tYXJ5OiAnQWNjZXNzbyBlZmZldHR1YXRvIGNvcnJldHRhbWVudGUnLFxuICAgICAgICBkZXRhaWw6IGBCZW52ZW51dG8hYFxuICAgICAgfSk7XG4gICAgICBcbiAgICB9KVxuICB9XG5cbiAgcHJpdmF0ZSBfaW5pdExvZ2luRm9ybSgpIHtcbiAgICB0aGlzLmxvZ2luRm9ybUdyb3VwID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBlbWFpbDogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5lbWFpbF1dLFxuICAgICAgcGFzc3dvcmQ6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDgpXV0sXG4gICAgICBwYXNzd29yZDI6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICB9KTtcbiAgfVxuXG5cbiAgb25TdWJtaXQoKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICBjb25zb2xlLmxvZyhcInN1Ym1pdHRlZFwiKTtcbiAgICB0aGlzLmlzU3VibWl0dGVkID0gdHJ1ZTtcbiAgICBjb25zb2xlLmxvZyhcImVtYWlsID0gXCIgKyB0aGlzLnVzZXIuZW1haWwpO1xuICAgIGNvbnNvbGUubG9nKFwicGFzc3dvcmQgPSBcIiArIHRoaXMubG9naW5Gb3JtR3JvdXAuZ2V0KFwicGFzc3dvcmRcIikudmFsdWUpO1xuICAgIGNvbnNvbGUubG9nKFwicGFzc3dvcmQyID0gXCIgKyB0aGlzLmxvZ2luRm9ybUdyb3VwLmdldChcInBhc3N3b3JkMlwiKS52YWx1ZSk7XG4gICAgaWYodGhpcy5sb2dpbkZvcm1Hcm91cC5nZXQoXCJwYXNzd29yZFwiKS52YWx1ZSAhPT0gdGhpcy5sb2dpbkZvcm1Hcm91cC5nZXQoXCJwYXNzd29yZDJcIikudmFsdWUpe1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmxvZ2luRm9ybUdyb3VwLmludmFsaWQpe1xuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG5cblxuICAgIHRoaXMuYXV0aFNlcnZpY2UucmVnaXN0ZXIodGhpcy51c2VyKS5zdWJzY3JpYmUoXG4gICAgICBkYXRhID0+IHtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gZGF0YTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhdXRoVG9rZW5cIiwgcmVzcG9uc2UudG9rZW4pO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImVtYWlsXCIsIHJlc3BvbnNlLnVzZXIpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS51c2VyICsgXCIgIFwiICsgcmVzcG9uc2UudG9rZW4pO1xuICAgICAgICB0aGlzLmxvY2F0aW9uLmhpc3RvcnlHbygtMik7XG4gICAgICAgIHRoaXMuYXV0aEVycm9yID0gZmFsc2U7XG4gICAgICB9LFxuICAgICAgZXJyb3IgPT4ge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hdXRoTWVzc2FnZSA9IFwiQW4gZXJyb3Igb2NjdXJlZFwiO1xuICAgICAgICB0aGlzLmF1dGhFcnJvciA9IHRydWU7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuICBnb1RvTG9naW4oKXtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddKTtcbiAgfVxuICBnZXQgbG9naW5Gb3JtKCl7XG4gICAgcmV0dXJuIHRoaXMubG9naW5Gb3JtR3JvdXAuY29udHJvbHM7XG4gIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cIiBjb250YWluZXIgXCIgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXI7IGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7Ym9yZGVyOiAxcHggc29saWQ7ICAgIG1hcmdpbi10b3A6IDMwcHg7XCI+XG5cblxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgIG0tMlwiIHN0eWxlPVwiIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZ3JpZFwiPlxuPCEtLSAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTZcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL2xvZ2luLXBob3RvLnBuZ1wiIGFsdD1cIlwiPlxuICAgICAgICAgIDwvZGl2PiAtLT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIHAtMCBwLW1kLTUgY29udGFpbmVyLWZsdWlkXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1wiPlxuICAgICAgICAgICAgICA8aDIgc3R5bGU9XCIgICAgbWFyZ2luLXRvcDogMjBweDtcIj5SZWdpc3RyYXRpPC9oMj5cbiAgICAgICAgICAgICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJsb2dpbkZvcm1Hcm91cFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZCAgbXQtNiBjb250YWluZXItZmx1aWRcIiA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtaW5wdXRncm91cFwiICBzdHlsZT1cIm1heC13aWR0aDogMTAwMHB4OyBtYXJnaW46IGF1dG87XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicC1pbnB1dGdyb3VwLWFkZG9uXCI+PGkgY2xhc3M9XCJwaSBwaS11c2VyXCI+PC9pPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgZm9ybUNvbnRyb2xOYW1lPVwiZW1haWxcIiBwSW5wdXRUZXh0IHBsYWNlaG9sZGVyPVwiRW1haWxcIiBbKG5nTW9kZWwpXT1cInVzZXIuZW1haWxcIiAgICAgICAgIFtzdHlsZV09XCJ7J3BhZGRpbmcnOiAnOHB4ICFpbXBvcnRhbnQnfVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCAqbmdJZj1cImxvZ2luRm9ybS5lbWFpbC5pbnZhbGlkICYmIGlzU3VibWl0dGVkXCIgY2xhc3M9XCJwLWVycm9yXCJcbiAgICAgICAgICAgICAgICAgICAgICA+PHNwYW4gKm5nSWY9XCJsb2dpbkZvcm0uZW1haWwuZXJyb3JzLnJlcXVpcmVkXCI+ZW1haWwgaXMgcmVxdWlyZWQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJsb2dpbkZvcm0uZW1haWwuZXJyb3JzLmVtYWlsXCI+ZW1haWwgaXMgaW52YWxpZDwvc3Bhbj48L3NtYWxsPlxuXG5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWlucHV0Z3JvdXBcIiBzdHlsZT1cIm1heC13aWR0aDogMTAwMHB4OyAgbWFyZ2luOiBhdXRvO1wiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwLWlucHV0Z3JvdXAtYWRkb25cIj48aSBjbGFzcz1cInBpIHBpLWxvY2tcIj48L2k+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBwSW5wdXRUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtzdHlsZV09XCJ7J3BhZGRpbmcnOiAnOHB4ICFpbXBvcnRhbnQnfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgKm5nSWY9XCJsb2dpbkZvcm0ucGFzc3dvcmQuaW52YWxpZCAmJiBpc1N1Ym1pdHRlZFwiIGNsYXNzPVwicC1lcnJvclwiPlRoZSBwYXNzd29yZCBtdXN0IGhhdmUgYXQgbGVhc3QgOCBjaGFyYWN0ZXJzPC9zbWFsbD5cblxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtaW5wdXRncm91cFwiIHN0eWxlPVwibWF4LXdpZHRoOiAxMDAwcHg7ICBtYXJnaW46IGF1dG87XCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwLWlucHV0Z3JvdXAtYWRkb25cIj48aSBjbGFzcz1cInBpIHBpLWxvY2tcIj48L2k+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJwYXNzd29yZDJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcElucHV0VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgW3N0eWxlXT1cInsncGFkZGluZyc6ICc4cHggIWltcG9ydGFudCd9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJ1c2VyLnBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzbWFsbCAqbmdJZj1cImxvZ2luRm9ybS5wYXNzd29yZC5pbnZhbGlkICYmIGlzU3VibWl0dGVkXCIgY2xhc3M9XCJwLWVycm9yXCI+UGFzc3dvcmQgaXMgcmVxdWlyZWQ8L3NtYWxsPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCIgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwibWF4LXdpZHRoOiAxMDAwcHg7ICBtYXJnaW46IGF1dG87XCI+PHAtYnV0dG9uIFtsb2FkaW5nXT1cImxvYWRpbmdcIiBsYWJlbD1cIkludmlhXCIgc3R5bGVDbGFzcz1cImZ1bGwtYnRuXCIgKG9uQ2xpY2spPVwib25TdWJtaXQoKVwiIFtzdHlsZV09XCJ7J3dpZHRoJzogJzE2MHB4J31cIiA+PC9wLWJ1dHRvbj48L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlRpIHNlaSBnacOgIHJlZ2lzdGVyYXRvPyA8L3NwYW4+PGEgIGhyZWY9XCIvbG9naW5cIiBzdHlsZT1cImNvbG9yOiByZ2IoNzAsIDEzOCwgMjU1KTsgdGV4dC1kZWNvcmF0aW9uOiBub25lO1wiPkNsaWNjYSBwZXIgZWZmZXR0dWFyZSBsJ2FjY2Vzc288L2E+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiIGlkPVwiZ29vZ2xlLWJ1dHRvblwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiICpuZ0lmPVwiaXNTdWJtaXR0ZWQgJiYgYXV0aEVycm9yXCIgPlxuICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cInAtZXJyb3JcIiBzdHlsZT1cImZvbnQtc2l6ZTogNDBweDsgZm9udC13ZWlnaHQ6IDgwMFwiPnt7YXV0aE1lc3NhZ2V9fTwvc21hbGw+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG5cbiJdfQ==