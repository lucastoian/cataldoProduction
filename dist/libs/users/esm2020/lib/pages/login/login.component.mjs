import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LocalstorageService } from '../../services/localstorage.service';
import { Location } from '@angular/common';
import { MessageService } from 'primeng/api';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../../services/auth.service";
import * as i3 from "../../services/localstorage.service";
import * as i4 from "@angular/router";
import * as i5 from "@angular/common";
import * as i6 from "primeng/api";
import * as i7 from "primeng/inputtext";
import * as i8 from "primeng/button";
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
    constructor(formBuilder, auth, localstorageService, router, location, messageService) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.localstorageService = localstorageService;
        this.router = router;
        this.location = location;
        this.messageService = messageService;
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
            this.messageService.add({
                severity: 'success',
                summary: 'Succesful login',
                detail: `Welcome back!`
            });
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
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.AuthService), i0.ɵɵdirectiveInject(i3.LocalstorageService), i0.ɵɵdirectiveInject(i4.Router), i0.ɵɵdirectiveInject(i5.Location), i0.ɵɵdirectiveInject(i6.MessageService)); };
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
    } }, directives: [i1.ɵNgNoValidate, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i7.InputText, i5.NgIf, i8.Button], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoginComponent, [{
        type: Component,
        args: [{ selector: 'users-login', styles: [], template: "<div class=\" container-fluid p-0\" style=\"text-align: center;\">\r\n    <div class=\"container-fluid  login-register\" >\r\n        <div class=\"grid\">\r\n<!--             <div class=\"col-6\">\r\n                <img src=\"assets/images/login-photo.png\" alt=\"\">\r\n            </div> -->\r\n            <div class=\"col-12 p-0 p-md-5 container-fluid\" style=\"background-color: rgba(255, 255, 255, 0);\">\r\n                <h2 style=\"    margin-top: 20px;\">Login</h2>\r\n                <form [formGroup]=\"loginFormGroup\">\r\n                <div class=\"grid  mt-6 container-fluid\" >\r\n                    <div class=\"col-12\">\r\n                        <div class=\"p-inputgroup\"  style=\"max-width: 1000px; margin: auto;\">\r\n                            <span class=\"p-inputgroup-addon\"><i class=\"pi pi-user\"></i></span>\r\n                            <input type=\"text\" formControlName=\"email\" pInputText placeholder=\"Email\">\r\n                        </div>\r\n                        <small *ngIf=\"loginForm.email.invalid && isSubmitted\" class=\"p-error\"\r\n                        ><span *ngIf=\"loginForm.email.errors.required\">email is required</span>\r\n                        <span *ngIf=\"loginForm.email.errors.email\">email is invalid</span></small>\r\n\r\n\r\n                    </div>\r\n                    <div class=\"col-12\">\r\n                        <div class=\"p-inputgroup\" style=\"max-width: 1000px;  margin: auto;\" >\r\n                            <span class=\"p-inputgroup-addon\"><i class=\"pi pi-lock\"></i></span>\r\n                            <input type=\"password\"\r\n                            formControlName=\"password\"\r\n                            pInputText\r\n                            placeholder=\"password\">\r\n                        </div>\r\n                        <small *ngIf=\"loginForm.password.invalid && isSubmitted\" class=\"p-error\">Password is required</small>\r\n\r\n                    </div>\r\n                    <div class=\"col-12\" >\r\n                        <div style=\"max-width: 1000px;  margin: auto;\"><p-button label=\"Submit\" styleClass=\"full-btn\" (onClick)=\"onSubmit()\"  ></p-button></div>\r\n\r\n                    </div>\r\n                    <div class=\"col-12\">\r\n                      <a  href=\"#register\">Not registered?</a>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"col-12\" *ngIf=\"isSubmitted && authError\" >\r\n                        <small class=\"p-error\">{{authMessage}}</small>\r\n                    </div>\r\n\r\n            </div>\r\n        </form>\r\n        </div>\r\n            </div>\r\n    </div>\r\n</div>\r\n" }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.AuthService }, { type: i3.LocalstorageService }, { type: i4.Router }, { type: i5.Location }, { type: i6.MessageService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy91c2Vycy9zcmMvbGliL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdXNlcnMvc3JjL2xpYi9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxXQUFXLEVBQWEsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7Ozs7Ozs7Ozs7SUNTcEIsNEJBQThDO0lBQUEsaUNBQWlCO0lBQUEsaUJBQU87OztJQUN2RSw0QkFBMkM7SUFBQSxnQ0FBZ0I7SUFBQSxpQkFBTzs7O0lBRmxFLGlDQUNDO0lBQUEsMkVBQXNFO0lBQ3ZFLDJFQUFrRTtJQUFBLGlCQUFROzs7SUFEbEUsZUFBcUM7SUFBckMsNkRBQXFDO0lBQ3RDLGVBQWtDO0lBQWxDLDBEQUFrQzs7O0lBWXpDLGlDQUF5RTtJQUFBLG9DQUFvQjtJQUFBLGlCQUFROzs7SUFZekcsOEJBQXNELGdCQUFBO0lBQzNCLFlBQWU7SUFBQSxpQkFBUSxFQUFBOzs7SUFBdkIsZUFBZTtJQUFmLHdDQUFlOztBRDNCOUQsTUFBTSxPQUFPLGNBQWM7SUFNekIsWUFBb0IsV0FBd0IsRUFDeEIsSUFBaUIsRUFD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QUd0SSwrQkFBb0IsYUFBQTtRQUNHLGdDQUFlO1FBQUEsaUJBQUksRUFBQTtRQUkxQyxrRUFFTTtRQUVkLGlCQUFNLEVBQUEsRUFBQSxFQUFBLEVBQUEsRUFBQTs7UUFyQ0ksZUFBNEI7UUFBNUIsOENBQTRCO1FBT2xCLGVBQTRDO1FBQTVDLHFFQUE0QztRQWM1QyxlQUErQztRQUEvQyx3RUFBK0M7UUFZdEMsZUFBOEI7UUFBOUIsdURBQThCOzt1RkQxQjFELGNBQWM7Y0FOMUIsU0FBUzsyQkFDRSxhQUFhLFVBRWYsRUFDUCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IExvY2Fsc3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9sb2NhbHN0b3JhZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICdwcmltZW5nL2FwaSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3VzZXJzLWxvZ2luJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlczogW1xyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBsb2dpbkZvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG4gIGlzU3VibWl0dGVkID0gZmFsc2U7XHJcbiAgYXV0aEVycm9yID0gZmFsc2U7XHJcbiAgYXV0aE1lc3NhZ2UgPSBcIkVtYWlsIG9yIHBhc3N3b3JkIGlzIHdyb25nXCI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgYXV0aDogQXV0aFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBsb2NhbHN0b3JhZ2VTZXJ2aWNlOiBMb2NhbHN0b3JhZ2VTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UsKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9pbml0TG9naW5Gb3JtKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9pbml0TG9naW5Gb3JtKCkge1xyXG4gICAgdGhpcy5sb2dpbkZvcm1Hcm91cCA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICBlbWFpbDogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5lbWFpbF1dLFxyXG4gICAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgb25TdWJtaXQoKSB7XHJcbiAgICB0aGlzLmlzU3VibWl0dGVkID0gdHJ1ZTtcclxuXHJcbiAgICBpZiAodGhpcy5sb2dpbkZvcm1Hcm91cC5pbnZhbGlkKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5hdXRoLmxvZ2luKHRoaXMubG9naW5Gb3JtLmVtYWlsLnZhbHVlLCB0aGlzLmxvZ2luRm9ybS5wYXNzd29yZC52YWx1ZSkuc3Vic2NyaWJlKFxyXG4gICAgICAodXNlcikgPT4ge1xyXG4gICAgICAgIHRoaXMuYXV0aEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImF1dGhUb2tlblwiLCB1c2VyLnRva2VuKTtcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiZW1haWxcIiwgdXNlci5lbWFpbCk7XHJcbiAgICAgICAgdGhpcy5sb2NhbHN0b3JhZ2VTZXJ2aWNlLnNldFRva2VuKHVzZXIudG9rZW4pO1xyXG4gICAgICAgIHRoaXMubG9jYXRpb24uYmFjaygpO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuYWRkKHtcclxuICAgICAgICAgIHNldmVyaXR5OiAnc3VjY2VzcycsXHJcbiAgICAgICAgICBzdW1tYXJ5OiAnU3VjY2VzZnVsIGxvZ2luJyxcclxuICAgICAgICAgIGRldGFpbDogYFdlbGNvbWUgYmFjayFgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcclxuICAgICAgICB0aGlzLmF1dGhFcnJvciA9IHRydWU7XHJcbiAgICAgICAgaWYgKGVycm9yLnN0YXR1cyAhPT0gNDAwKSB7XHJcbiAgICAgICAgICB0aGlzLmF1dGhNZXNzYWdlID0gJ0Vycm9yIGluIHRoZSBTZXJ2ZXIsIHBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIhJztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXQgbG9naW5Gb3JtKCl7XHJcbiAgICByZXR1cm4gdGhpcy5sb2dpbkZvcm1Hcm91cC5jb250cm9scztcclxuICB9XHJcblxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCIgY29udGFpbmVyLWZsdWlkIHAtMFwiIHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyO1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZCAgbG9naW4tcmVnaXN0ZXJcIiA+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImdyaWRcIj5cclxuPCEtLSAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTZcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9sb2dpbi1waG90by5wbmdcIiBhbHQ9XCJcIj5cclxuICAgICAgICAgICAgPC9kaXY+IC0tPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIHAtMCBwLW1kLTUgY29udGFpbmVyLWZsdWlkXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1wiPlxyXG4gICAgICAgICAgICAgICAgPGgyIHN0eWxlPVwiICAgIG1hcmdpbi10b3A6IDIwcHg7XCI+TG9naW48L2gyPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJsb2dpbkZvcm1Hcm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQgIG10LTYgY29udGFpbmVyLWZsdWlkXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtaW5wdXRncm91cFwiICBzdHlsZT1cIm1heC13aWR0aDogMTAwMHB4OyBtYXJnaW46IGF1dG87XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtaW5wdXRncm91cC1hZGRvblwiPjxpIGNsYXNzPVwicGkgcGktdXNlclwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBmb3JtQ29udHJvbE5hbWU9XCJlbWFpbFwiIHBJbnB1dFRleHQgcGxhY2Vob2xkZXI9XCJFbWFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsICpuZ0lmPVwibG9naW5Gb3JtLmVtYWlsLmludmFsaWQgJiYgaXNTdWJtaXR0ZWRcIiBjbGFzcz1cInAtZXJyb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+PHNwYW4gKm5nSWY9XCJsb2dpbkZvcm0uZW1haWwuZXJyb3JzLnJlcXVpcmVkXCI+ZW1haWwgaXMgcmVxdWlyZWQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwibG9naW5Gb3JtLmVtYWlsLmVycm9ycy5lbWFpbFwiPmVtYWlsIGlzIGludmFsaWQ8L3NwYW4+PC9zbWFsbD5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtaW5wdXRncm91cFwiIHN0eWxlPVwibWF4LXdpZHRoOiAxMDAwcHg7ICBtYXJnaW46IGF1dG87XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwLWlucHV0Z3JvdXAtYWRkb25cIj48aSBjbGFzcz1cInBpIHBpLWxvY2tcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwSW5wdXRUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgKm5nSWY9XCJsb2dpbkZvcm0ucGFzc3dvcmQuaW52YWxpZCAmJiBpc1N1Ym1pdHRlZFwiIGNsYXNzPVwicC1lcnJvclwiPlBhc3N3b3JkIGlzIHJlcXVpcmVkPC9zbWFsbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cIm1heC13aWR0aDogMTAwMHB4OyAgbWFyZ2luOiBhdXRvO1wiPjxwLWJ1dHRvbiBsYWJlbD1cIlN1Ym1pdFwiIHN0eWxlQ2xhc3M9XCJmdWxsLWJ0blwiIChvbkNsaWNrKT1cIm9uU3VibWl0KClcIiAgPjwvcC1idXR0b24+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhICBocmVmPVwiI3JlZ2lzdGVyXCI+Tm90IHJlZ2lzdGVyZWQ/PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiICpuZ0lmPVwiaXNTdWJtaXR0ZWQgJiYgYXV0aEVycm9yXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJwLWVycm9yXCI+e3thdXRoTWVzc2FnZX19PC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==