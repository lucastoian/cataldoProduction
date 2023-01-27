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
        this.loading = false;
        this.authMessage = "Email or password is wrong";
        this.loading = false;
    }
    ngOnInit() {
        this.loading = false;
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
        this.loading = true;
        if (this.loginFormGroup.invalid) {
            this.loading = false;
            return;
        }
        this.auth.login(this.loginForm.email.value, this.loginForm.password.value).subscribe((user) => {
            this.authError = false;
            localStorage.setItem("authToken", user.token);
            localStorage.setItem("email", user.email);
            this.localstorageService.setToken(user.token);
            this.location.back();
            this.messageService.add({
                severity: 'success',
                summary: 'Succesful login',
                detail: `Welcome back!`
            });
        }, (error) => {
            this.authError = true;
            this.loading = false;
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
LoginComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LoginComponent, selectors: [["users-login"]], decls: 27, vars: 5, consts: [[1, "container-fluid", "p-0", 2, "text-align", "center"], [1, "container-fluid", "login-register"], [1, "grid"], [1, "col-12", "p-0", "p-md-5", "container-fluid", 2, "background-color", "rgba(255, 255, 255, 0)"], [2, "margin-top", "20px"], [3, "formGroup"], [1, "grid", "mt-6", "container-fluid"], [1, "col-12"], [1, "p-inputgroup", 2, "max-width", "1000px", "margin", "auto"], [1, "p-inputgroup-addon"], [1, "pi", "pi-user"], ["type", "text", "formControlName", "email", "pInputText", "", "placeholder", "Email"], ["class", "p-error", 4, "ngIf"], [1, "pi", "pi-lock"], ["type", "password", "formControlName", "password", "pInputText", "", "placeholder", "password"], [2, "max-width", "1000px", "margin", "auto"], ["label", "Submit", "styleClass", "full-btn", 3, "loading", "onClick"], ["href", "/register"], ["class", "col-12", 4, "ngIf"], [1, "p-error"], [4, "ngIf"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("loading", ctx.loading);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", ctx.isSubmitted && ctx.authError);
    } }, directives: [i1.ɵNgNoValidate, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i7.InputText, i5.NgIf, i8.Button], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoginComponent, [{
        type: Component,
        args: [{ selector: 'users-login', styles: [], template: "<div class=\" container-fluid p-0\" style=\"text-align: center;\">\n    <div class=\"container-fluid  login-register\" >\n        <div class=\"grid\">\n<!--             <div class=\"col-6\">\n                <img src=\"assets/images/login-photo.png\" alt=\"\">\n            </div> -->\n            <div class=\"col-12 p-0 p-md-5 container-fluid\" style=\"background-color: rgba(255, 255, 255, 0);\">\n                <h2 style=\"    margin-top: 20px;\">Login</h2>\n                <form [formGroup]=\"loginFormGroup\">\n                <div class=\"grid  mt-6 container-fluid\" >\n                    <div class=\"col-12\">\n                        <div class=\"p-inputgroup\"  style=\"max-width: 1000px; margin: auto;\">\n                            <span class=\"p-inputgroup-addon\"><i class=\"pi pi-user\"></i></span>\n                            <input type=\"text\" formControlName=\"email\" pInputText placeholder=\"Email\">\n                        </div>\n                        <small *ngIf=\"loginForm.email.invalid && isSubmitted\" class=\"p-error\"\n                        ><span *ngIf=\"loginForm.email.errors.required\">email is required</span>\n                        <span *ngIf=\"loginForm.email.errors.email\">email is invalid</span></small>\n\n\n                    </div>\n                    <div class=\"col-12\">\n                        <div class=\"p-inputgroup\" style=\"max-width: 1000px;  margin: auto;\" >\n                            <span class=\"p-inputgroup-addon\"><i class=\"pi pi-lock\"></i></span>\n                            <input type=\"password\"\n                            formControlName=\"password\"\n                            pInputText\n                            placeholder=\"password\">\n                        </div>\n                        <small *ngIf=\"loginForm.password.invalid && isSubmitted\" class=\"p-error\">Password is required</small>\n\n                    </div>\n                    <div class=\"col-12\" >\n                        <div style=\"max-width: 1000px;  margin: auto;\"><p-button [loading]=\"loading\" label=\"Submit\" styleClass=\"full-btn\" (onClick)=\"onSubmit()\"  ></p-button></div>\n\n                    </div>\n                    <div class=\"col-12\">\n                      <a  href=\"/register\">Not registered?</a>\n                    </div>\n\n\n                    <div class=\"col-12\" *ngIf=\"isSubmitted && authError\" >\n                        <small class=\"p-error\">{{authMessage}}</small>\n                    </div>\n\n            </div>\n        </form>\n        </div>\n            </div>\n    </div>\n</div>\n" }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.AuthService }, { type: i3.LocalstorageService }, { type: i4.Router }, { type: i5.Location }, { type: i6.MessageService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy91c2Vycy9zcmMvbGliL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdXNlcnMvc3JjL2xpYi9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxXQUFXLEVBQWEsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7Ozs7Ozs7Ozs7SUNTcEIsNEJBQThDO0lBQUEsaUNBQWlCO0lBQUEsaUJBQU87OztJQUN2RSw0QkFBMkM7SUFBQSxnQ0FBZ0I7SUFBQSxpQkFBTzs7O0lBRmxFLGlDQUNDO0lBQUEsMkVBQXNFO0lBQ3ZFLDJFQUFrRTtJQUFBLGlCQUFROzs7SUFEbEUsZUFBcUM7SUFBckMsNkRBQXFDO0lBQ3RDLGVBQWtDO0lBQWxDLDBEQUFrQzs7O0lBWXpDLGlDQUF5RTtJQUFBLG9DQUFvQjtJQUFBLGlCQUFROzs7SUFZekcsOEJBQXNELGdCQUFBO0lBQzNCLFlBQWU7SUFBQSxpQkFBUSxFQUFBOzs7SUFBdkIsZUFBZTtJQUFmLHdDQUFlOztBRDNCOUQsTUFBTSxPQUFPLGNBQWM7SUFPekIsWUFBb0IsV0FBd0IsRUFDeEIsSUFBaUIsRUFD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QkFBTztRQUNsRSw2QkFBMEU7UUFDOUUsaUJBQU07UUFDTixzRUFFMEU7UUFHOUUsaUJBQU07UUFDTiwrQkFBb0IsY0FBQSxlQUFBO1FBRXFCLHlCQUEwQjtRQUFBLGlCQUFPO1FBQ2xFLDZCQUd1QjtRQUMzQixpQkFBTTtRQUNOLHNFQUFxRztRQUV6RyxpQkFBTTtRQUNOLCtCQUFxQixlQUFBLG9CQUFBO1FBQ2lHLGtHQUFXLGNBQVUsSUFBQztRQUFHLGlCQUFXLEVBQUEsRUFBQTtRQUcxSiwrQkFBb0IsYUFBQTtRQUNHLGdDQUFlO1FBQUEsaUJBQUksRUFBQTtRQUkxQyxrRUFFTTtRQUVkLGlCQUFNLEVBQUEsRUFBQSxFQUFBLEVBQUEsRUFBQTs7UUFyQ0ksZUFBNEI7UUFBNUIsOENBQTRCO1FBT2xCLGVBQTRDO1FBQTVDLHFFQUE0QztRQWM1QyxlQUErQztRQUEvQyx3RUFBK0M7UUFJRSxlQUFtQjtRQUFuQixxQ0FBbUI7UUFRM0QsZUFBOEI7UUFBOUIsdURBQThCOzt1RkQxQjFELGNBQWM7Y0FOMUIsU0FBUzsyQkFDRSxhQUFhLFVBRWYsRUFDUCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgTG9jYWxzdG9yYWdlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xvY2Fsc3RvcmFnZS5zZXJ2aWNlJztcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAncHJpbWVuZy9hcGknO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd1c2Vycy1sb2dpbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2dpbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogW1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgbG9naW5Gb3JtR3JvdXA6IEZvcm1Hcm91cDtcbiAgaXNTdWJtaXR0ZWQgPSBmYWxzZTtcbiAgYXV0aEVycm9yID0gZmFsc2U7XG4gIGxvYWRpbmc6Ym9vbGVhbiA9IGZhbHNlO1xuICBhdXRoTWVzc2FnZSA9IFwiRW1haWwgb3IgcGFzc3dvcmQgaXMgd3JvbmdcIjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBhdXRoOiBBdXRoU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBsb2NhbHN0b3JhZ2VTZXJ2aWNlOiBMb2NhbHN0b3JhZ2VTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UsKSB7IFxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5faW5pdExvZ2luRm9ybSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaW5pdExvZ2luRm9ybSgpIHtcbiAgICB0aGlzLmxvZ2luRm9ybUdyb3VwID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBlbWFpbDogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5lbWFpbF1dLFxuICAgICAgcGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICB9KTtcbiAgfVxuXG5cbiAgb25TdWJtaXQoKSB7XG4gICAgdGhpcy5pc1N1Ym1pdHRlZCA9IHRydWU7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLmxvZ2luRm9ybUdyb3VwLmludmFsaWQpe1xuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfSBcblxuICAgIHRoaXMuYXV0aC5sb2dpbih0aGlzLmxvZ2luRm9ybS5lbWFpbC52YWx1ZSwgdGhpcy5sb2dpbkZvcm0ucGFzc3dvcmQudmFsdWUpLnN1YnNjcmliZShcbiAgICAgICh1c2VyKSA9PiB7XG4gICAgICAgIHRoaXMuYXV0aEVycm9yID0gZmFsc2U7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYXV0aFRva2VuXCIsIHVzZXIudG9rZW4pO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImVtYWlsXCIsIHVzZXIuZW1haWwpO1xuICAgICAgICB0aGlzLmxvY2Fsc3RvcmFnZVNlcnZpY2Uuc2V0VG9rZW4odXNlci50b2tlbik7XG4gICAgICAgIHRoaXMubG9jYXRpb24uYmFjaygpO1xuICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmFkZCh7XG4gICAgICAgICAgc2V2ZXJpdHk6ICdzdWNjZXNzJyxcbiAgICAgICAgICBzdW1tYXJ5OiAnU3VjY2VzZnVsIGxvZ2luJyxcbiAgICAgICAgICBkZXRhaWw6IGBXZWxjb21lIGJhY2shYFxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICAoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRoaXMuYXV0aEVycm9yID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGlmIChlcnJvci5zdGF0dXMgIT09IDQwMCkge1xuICAgICAgICAgIHRoaXMuYXV0aE1lc3NhZ2UgPSAnRXJyb3IgaW4gdGhlIFNlcnZlciwgcGxlYXNlIHRyeSBhZ2FpbiBsYXRlciEnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIGdldCBsb2dpbkZvcm0oKXtcbiAgICByZXR1cm4gdGhpcy5sb2dpbkZvcm1Hcm91cC5jb250cm9scztcbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwiIGNvbnRhaW5lci1mbHVpZCBwLTBcIiBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlcjtcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkICBsb2dpbi1yZWdpc3RlclwiID5cbiAgICAgICAgPGRpdiBjbGFzcz1cImdyaWRcIj5cbjwhLS0gICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02XCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL2xvZ2luLXBob3RvLnBuZ1wiIGFsdD1cIlwiPlxuICAgICAgICAgICAgPC9kaXY+IC0tPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBwLTAgcC1tZC01IGNvbnRhaW5lci1mbHVpZFwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcIj5cbiAgICAgICAgICAgICAgICA8aDIgc3R5bGU9XCIgICAgbWFyZ2luLXRvcDogMjBweDtcIj5Mb2dpbjwvaDI+XG4gICAgICAgICAgICAgICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJsb2dpbkZvcm1Hcm91cFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkICBtdC02IGNvbnRhaW5lci1mbHVpZFwiID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtaW5wdXRncm91cFwiICBzdHlsZT1cIm1heC13aWR0aDogMTAwMHB4OyBtYXJnaW46IGF1dG87XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwLWlucHV0Z3JvdXAtYWRkb25cIj48aSBjbGFzcz1cInBpIHBpLXVzZXJcIj48L2k+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGZvcm1Db250cm9sTmFtZT1cImVtYWlsXCIgcElucHV0VGV4dCBwbGFjZWhvbGRlcj1cIkVtYWlsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCAqbmdJZj1cImxvZ2luRm9ybS5lbWFpbC5pbnZhbGlkICYmIGlzU3VibWl0dGVkXCIgY2xhc3M9XCJwLWVycm9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID48c3BhbiAqbmdJZj1cImxvZ2luRm9ybS5lbWFpbC5lcnJvcnMucmVxdWlyZWRcIj5lbWFpbCBpcyByZXF1aXJlZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwibG9naW5Gb3JtLmVtYWlsLmVycm9ycy5lbWFpbFwiPmVtYWlsIGlzIGludmFsaWQ8L3NwYW4+PC9zbWFsbD5cblxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1pbnB1dGdyb3VwXCIgc3R5bGU9XCJtYXgtd2lkdGg6IDEwMDBweDsgIG1hcmdpbjogYXV0bztcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwLWlucHV0Z3JvdXAtYWRkb25cIj48aSBjbGFzcz1cInBpIHBpLWxvY2tcIj48L2k+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwSW5wdXRUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgKm5nSWY9XCJsb2dpbkZvcm0ucGFzc3dvcmQuaW52YWxpZCAmJiBpc1N1Ym1pdHRlZFwiIGNsYXNzPVwicC1lcnJvclwiPlBhc3N3b3JkIGlzIHJlcXVpcmVkPC9zbWFsbD5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJtYXgtd2lkdGg6IDEwMDBweDsgIG1hcmdpbjogYXV0bztcIj48cC1idXR0b24gW2xvYWRpbmddPVwibG9hZGluZ1wiIGxhYmVsPVwiU3VibWl0XCIgc3R5bGVDbGFzcz1cImZ1bGwtYnRuXCIgKG9uQ2xpY2spPVwib25TdWJtaXQoKVwiICA+PC9wLWJ1dHRvbj48L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxhICBocmVmPVwiL3JlZ2lzdGVyXCI+Tm90IHJlZ2lzdGVyZWQ/PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIiAqbmdJZj1cImlzU3VibWl0dGVkICYmIGF1dGhFcnJvclwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cInAtZXJyb3JcIj57e2F1dGhNZXNzYWdlfX08L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuIl19