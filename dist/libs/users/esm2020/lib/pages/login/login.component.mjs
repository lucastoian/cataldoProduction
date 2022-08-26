import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LocalstorageService } from '../../services/localstorage.service';
import { Location } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../../services/auth.service";
import * as i3 from "../../services/localstorage.service";
import * as i4 from "@angular/router";
import * as i5 from "@angular/common";
import * as i6 from "primeng/inputtext";
import * as i7 from "primeng/button";
function LoginComponent_small_13_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "email is required");
    i0.ɵɵelementEnd();
} }
function LoginComponent_small_13_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "email is invalid");
    i0.ɵɵelementEnd();
} }
function LoginComponent_small_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 19);
    i0.ɵɵtemplate(1, LoginComponent_small_13_span_1_Template, 2, 0, "span", 20);
    i0.ɵɵtemplate(2, LoginComponent_small_13_span_2_Template, 2, 0, "span", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.loginForm.email.errors.required);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.loginForm.email.errors.email);
} }
function LoginComponent_small_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 19);
    i0.ɵɵtext(1, "Password is required");
    i0.ɵɵelementEnd();
} }
function LoginComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7)(1, "small", 19);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.authMessage);
} }
export class LoginComponent {
    constructor(formBuilder, auth, localstorageService, router, location) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.localstorageService = localstorageService;
        this.router = router;
        this.location = location;
        this.isSubmitted = false;
        this.authError = false;
        this.authMessage = "Email or password is wrong";
    }
    ngOnInit() {
        this._initLoginForm();
    }
    _initLoginForm() {
        this.loginFormGroup = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }
    onSubmit() {
        this.isSubmitted = true;
        if (this.loginFormGroup.invalid)
            return;
        this.auth.login(this.loginForm.email.value, this.loginForm.password.value).subscribe((user) => {
            this.authError = false;
            sessionStorage.setItem("authToken", user.token);
            sessionStorage.setItem("email", user.email);
            this.localstorageService.setToken(user.token);
            this.location.back();
        }, (error) => {
            this.authError = true;
            if (error.status !== 400) {
                this.authMessage = 'Error in the Server, please try again later!';
            }
        });
    }
    get loginForm() {
        return this.loginFormGroup.controls;
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.AuthService), i0.ɵɵdirectiveInject(i3.LocalstorageService), i0.ɵɵdirectiveInject(i4.Router), i0.ɵɵdirectiveInject(i5.Location)); };
LoginComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LoginComponent, selectors: [["users-login"]], decls: 27, vars: 4, consts: [[1, "container-fluid", "p-0", 2, "text-align", "center"], [1, "container-fluid", "login-register"], [1, "grid"], [1, "col-12", "p-0", "p-md-5", "container-fluid", 2, "background-color", "rgba(255, 255, 255, 0)"], [2, "margin-top", "20px"], [3, "formGroup"], [1, "grid", "mt-6", "container-fluid"], [1, "col-12"], [1, "p-inputgroup", 2, "max-width", "1000px", "margin", "auto"], [1, "p-inputgroup-addon"], [1, "pi", "pi-user"], ["type", "text", "formControlName", "email", "pInputText", "", "placeholder", "Email"], ["class", "p-error", 4, "ngIf"], [1, "pi", "pi-lock"], ["type", "password", "formControlName", "password", "pInputText", "", "placeholder", "password"], [2, "max-width", "1000px", "margin", "auto"], ["label", "Submit", "styleClass", "full-btn", 3, "onClick"], ["href", "#register"], ["class", "col-12", 4, "ngIf"], [1, "p-error"], [4, "ngIf"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
        i0.ɵɵtext(5, "Login");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "form", 5)(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "span", 9);
        i0.ɵɵelement(11, "i", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(12, "input", 11);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(13, LoginComponent_small_13_Template, 3, 2, "small", 12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "div", 7)(15, "div", 8)(16, "span", 9);
        i0.ɵɵelement(17, "i", 13);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(18, "input", 14);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(19, LoginComponent_small_19_Template, 2, 0, "small", 12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "div", 7)(21, "div", 15)(22, "p-button", 16);
        i0.ɵɵlistener("onClick", function LoginComponent_Template_p_button_onClick_22_listener() { return ctx.onSubmit(); });
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(23, "div", 7)(24, "a", 17);
        i0.ɵɵtext(25, "Not registered?");
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(26, LoginComponent_div_26_Template, 3, 1, "div", 18);
        i0.ɵɵelementEnd()()()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("formGroup", ctx.loginFormGroup);
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngIf", ctx.loginForm.email.invalid && ctx.isSubmitted);
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngIf", ctx.loginForm.password.invalid && ctx.isSubmitted);
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngIf", ctx.isSubmitted && ctx.authError);
    } }, directives: [i1.ɵNgNoValidate, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i6.InputText, i5.NgIf, i7.Button], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoginComponent, [{
        type: Component,
        args: [{ selector: 'users-login', styles: [], template: "<div class=\" container-fluid p-0\" style=\"text-align: center;\">\r\n    <div class=\"container-fluid  login-register\" >\r\n        <div class=\"grid\">\r\n<!--             <div class=\"col-6\">\r\n                <img src=\"assets/images/login-photo.png\" alt=\"\">\r\n            </div> -->\r\n            <div class=\"col-12 p-0 p-md-5 container-fluid\" style=\"background-color: rgba(255, 255, 255, 0);\">\r\n                <h2 style=\"    margin-top: 20px;\">Login</h2>\r\n                <form [formGroup]=\"loginFormGroup\">\r\n                <div class=\"grid  mt-6 container-fluid\" >\r\n                    <div class=\"col-12\">\r\n                        <div class=\"p-inputgroup\"  style=\"max-width: 1000px; margin: auto;\">\r\n                            <span class=\"p-inputgroup-addon\"><i class=\"pi pi-user\"></i></span>\r\n                            <input type=\"text\" formControlName=\"email\" pInputText placeholder=\"Email\">\r\n                        </div>\r\n                        <small *ngIf=\"loginForm.email.invalid && isSubmitted\" class=\"p-error\"\r\n                        ><span *ngIf=\"loginForm.email.errors.required\">email is required</span>\r\n                        <span *ngIf=\"loginForm.email.errors.email\">email is invalid</span></small>\r\n\r\n\r\n                    </div>\r\n                    <div class=\"col-12\">\r\n                        <div class=\"p-inputgroup\" style=\"max-width: 1000px;  margin: auto;\" >\r\n                            <span class=\"p-inputgroup-addon\"><i class=\"pi pi-lock\"></i></span>\r\n                            <input type=\"password\"\r\n                            formControlName=\"password\"\r\n                            pInputText\r\n                            placeholder=\"password\">\r\n                        </div>\r\n                        <small *ngIf=\"loginForm.password.invalid && isSubmitted\" class=\"p-error\">Password is required</small>\r\n\r\n                    </div>\r\n                    <div class=\"col-12\" >\r\n                        <div style=\"max-width: 1000px;  margin: auto;\"><p-button label=\"Submit\" styleClass=\"full-btn\" (onClick)=\"onSubmit()\"  ></p-button></div>\r\n\r\n                    </div>\r\n                    <div class=\"col-12\">\r\n                      <a  href=\"#register\">Not registered?</a>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"col-12\" *ngIf=\"isSubmitted && authError\" >\r\n                        <small class=\"p-error\">{{authMessage}}</small>\r\n                    </div>\r\n\r\n            </div>\r\n        </form>\r\n        </div>\r\n            </div>\r\n    </div>\r\n</div>\r\n" }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.AuthService }, { type: i3.LocalstorageService }, { type: i4.Router }, { type: i5.Location }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy91c2Vycy9zcmMvbGliL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdXNlcnMvc3JjL2xpYi9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxXQUFXLEVBQWEsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7Ozs7Ozs7SUNVbEIsNEJBQThDO0lBQUEsaUNBQWlCO0lBQUEsaUJBQU87OztJQUN2RSw0QkFBMkM7SUFBQSxnQ0FBZ0I7SUFBQSxpQkFBTzs7O0lBRmxFLGlDQUNDO0lBQUEsMkVBQXNFO0lBQ3ZFLDJFQUFrRTtJQUFBLGlCQUFROzs7SUFEbEUsZUFBcUM7SUFBckMsNkRBQXFDO0lBQ3RDLGVBQWtDO0lBQWxDLDBEQUFrQzs7O0lBWXpDLGlDQUF5RTtJQUFBLG9DQUFvQjtJQUFBLGlCQUFROzs7SUFZekcsOEJBQXNELGdCQUFBO0lBQzNCLFlBQWU7SUFBQSxpQkFBUSxFQUFBOzs7SUFBdkIsZUFBZTtJQUFmLHdDQUFlOztBRDVCOUQsTUFBTSxPQUFPLGNBQWM7SUFNekIsWUFBb0IsV0FBd0IsRUFDeEIsSUFBaUIsRUFDakIsbUJBQXdDLEVBQ3hDLE1BQWMsRUFDZCxRQUFrQjtRQUpsQixnQkFB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LGNBQWM7Y0FOMUIsU0FBUzsyQkFDRSxhQUFhLFVBRWYsRUFDUCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IExvY2Fsc3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9sb2NhbHN0b3JhZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndXNlcnMtbG9naW4nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2dpbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVzOiBbXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGxvZ2luRm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcbiAgaXNTdWJtaXR0ZWQgPSBmYWxzZTtcclxuICBhdXRoRXJyb3IgPSBmYWxzZTtcclxuICBhdXRoTWVzc2FnZSA9IFwiRW1haWwgb3IgcGFzc3dvcmQgaXMgd3JvbmdcIjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBhdXRoOiBBdXRoU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGxvY2Fsc3RvcmFnZVNlcnZpY2U6IExvY2Fsc3RvcmFnZVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICAgICAgICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbikgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5faW5pdExvZ2luRm9ybSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfaW5pdExvZ2luRm9ybSgpIHtcclxuICAgIHRoaXMubG9naW5Gb3JtR3JvdXAgPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgZW1haWw6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMuZW1haWxdXSxcclxuICAgICAgcGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG4gIG9uU3VibWl0KCkge1xyXG4gICAgdGhpcy5pc1N1Ym1pdHRlZCA9IHRydWU7XHJcblxyXG4gICAgaWYgKHRoaXMubG9naW5Gb3JtR3JvdXAuaW52YWxpZCkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuYXV0aC5sb2dpbih0aGlzLmxvZ2luRm9ybS5lbWFpbC52YWx1ZSwgdGhpcy5sb2dpbkZvcm0ucGFzc3dvcmQudmFsdWUpLnN1YnNjcmliZShcclxuICAgICAgKHVzZXIpID0+IHtcclxuICAgICAgICB0aGlzLmF1dGhFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJhdXRoVG9rZW5cIiwgdXNlci50b2tlbik7XHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImVtYWlsXCIsIHVzZXIuZW1haWwpO1xyXG4gICAgICAgIHRoaXMubG9jYWxzdG9yYWdlU2VydmljZS5zZXRUb2tlbih1c2VyLnRva2VuKTtcclxuICAgICAgICB0aGlzLmxvY2F0aW9uLmJhY2soKTtcclxuICAgICAgfSxcclxuICAgICAgKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuYXV0aEVycm9yID0gdHJ1ZTtcclxuICAgICAgICBpZiAoZXJyb3Iuc3RhdHVzICE9PSA0MDApIHtcclxuICAgICAgICAgIHRoaXMuYXV0aE1lc3NhZ2UgPSAnRXJyb3IgaW4gdGhlIFNlcnZlciwgcGxlYXNlIHRyeSBhZ2FpbiBsYXRlciEnO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdldCBsb2dpbkZvcm0oKXtcclxuICAgIHJldHVybiB0aGlzLmxvZ2luRm9ybUdyb3VwLmNvbnRyb2xzO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cIiBjb250YWluZXItZmx1aWQgcC0wXCIgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXI7XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkICBsb2dpbi1yZWdpc3RlclwiID5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZFwiPlxyXG48IS0tICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNlwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL2xvZ2luLXBob3RvLnBuZ1wiIGFsdD1cIlwiPlxyXG4gICAgICAgICAgICA8L2Rpdj4gLS0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgcC0wIHAtbWQtNSBjb250YWluZXItZmx1aWRcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgc3R5bGU9XCIgICAgbWFyZ2luLXRvcDogMjBweDtcIj5Mb2dpbjwvaDI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cImxvZ2luRm9ybUdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZCAgbXQtNiBjb250YWluZXItZmx1aWRcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1pbnB1dGdyb3VwXCIgIHN0eWxlPVwibWF4LXdpZHRoOiAxMDAwcHg7IG1hcmdpbjogYXV0bztcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicC1pbnB1dGdyb3VwLWFkZG9uXCI+PGkgY2xhc3M9XCJwaSBwaS11c2VyXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGZvcm1Db250cm9sTmFtZT1cImVtYWlsXCIgcElucHV0VGV4dCBwbGFjZWhvbGRlcj1cIkVtYWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgKm5nSWY9XCJsb2dpbkZvcm0uZW1haWwuaW52YWxpZCAmJiBpc1N1Ym1pdHRlZFwiIGNsYXNzPVwicC1lcnJvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48c3BhbiAqbmdJZj1cImxvZ2luRm9ybS5lbWFpbC5lcnJvcnMucmVxdWlyZWRcIj5lbWFpbCBpcyByZXF1aXJlZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJsb2dpbkZvcm0uZW1haWwuZXJyb3JzLmVtYWlsXCI+ZW1haWwgaXMgaW52YWxpZDwvc3Bhbj48L3NtYWxsPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1pbnB1dGdyb3VwXCIgc3R5bGU9XCJtYXgtd2lkdGg6IDEwMDBweDsgIG1hcmdpbjogYXV0bztcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtaW5wdXRncm91cC1hZGRvblwiPjxpIGNsYXNzPVwicGkgcGktbG9ja1wiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBJbnB1dFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCAqbmdJZj1cImxvZ2luRm9ybS5wYXNzd29yZC5pbnZhbGlkICYmIGlzU3VibWl0dGVkXCIgY2xhc3M9XCJwLWVycm9yXCI+UGFzc3dvcmQgaXMgcmVxdWlyZWQ8L3NtYWxsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwibWF4LXdpZHRoOiAxMDAwcHg7ICBtYXJnaW46IGF1dG87XCI+PHAtYnV0dG9uIGxhYmVsPVwiU3VibWl0XCIgc3R5bGVDbGFzcz1cImZ1bGwtYnRuXCIgKG9uQ2xpY2spPVwib25TdWJtaXQoKVwiICA+PC9wLWJ1dHRvbj48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgIGhyZWY9XCIjcmVnaXN0ZXJcIj5Ob3QgcmVnaXN0ZXJlZD88L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCIgKm5nSWY9XCJpc1N1Ym1pdHRlZCAmJiBhdXRoRXJyb3JcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cInAtZXJyb3JcIj57e2F1dGhNZXNzYWdlfX08L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19