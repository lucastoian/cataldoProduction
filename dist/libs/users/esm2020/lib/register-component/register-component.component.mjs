import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { LocalstorageService } from '../services/localstorage.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../services/auth.service";
import * as i3 from "../services/localstorage.service";
import * as i4 from "@angular/router";
import * as i5 from "primeng/inputtext";
import * as i6 from "@angular/common";
import * as i7 from "primeng/button";
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
    i0.ɵɵelementStart(0, "small", 19);
    i0.ɵɵtemplate(1, RegisterComponentComponent_small_13_span_1_Template, 2, 0, "span", 20);
    i0.ɵɵtemplate(2, RegisterComponentComponent_small_13_span_2_Template, 2, 0, "span", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.loginForm.email.errors.required);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.loginForm.email.errors.email);
} }
function RegisterComponentComponent_small_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 19);
    i0.ɵɵtext(1, "Password is required");
    i0.ɵɵelementEnd();
} }
function RegisterComponentComponent_small_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 19);
    i0.ɵɵtext(1, "Password is required");
    i0.ɵɵelementEnd();
} }
function RegisterComponentComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "small", 19);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r3.authMessage);
} }
export class RegisterComponentComponent {
    constructor(formBuilder, authService, localstorageService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.localstorageService = localstorageService;
        this.router = router;
        this.isSubmitted = false;
        this.authError = false;
        this.authMessage = "Email or password is wrong";
        this.user = new User();
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
        console.log("submitted");
        this.isSubmitted = true;
        console.log("email = " + this.user.email);
        if (this.loginFormGroup.invalid)
            return;
        this.authService.register(this.user).subscribe(data => {
            let response = data;
            sessionStorage.setItem("authToken", response.token);
            sessionStorage.setItem("email", response.user);
            console.log(response.user + "  " + response.token);
            this.router.navigate(['/']);
            this.authError = false;
        }, error => {
            this.authMessage = "An error occured";
            this.authError = true;
        });
    }
    get loginForm() {
        return this.loginFormGroup.controls;
    }
}
RegisterComponentComponent.ɵfac = function RegisterComponentComponent_Factory(t) { return new (t || RegisterComponentComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.AuthService), i0.ɵɵdirectiveInject(i3.LocalstorageService), i0.ɵɵdirectiveInject(i4.Router)); };
RegisterComponentComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RegisterComponentComponent, selectors: [["eshop-frontend-register-component"]], decls: 33, vars: 7, consts: [[1, "container-fluid", "p-0", 2, "text-align", "center"], [1, "container-fluid", "login-register"], [1, "grid"], [1, "col-12", "p-0", "p-md-5", "container-fluid", 2, "background-color", "rgba(255, 255, 255, 0)"], [3, "formGroup"], [1, "grid", "mt-6", "container-fluid"], [1, "col-12"], [1, "p-inputgroup", 2, "max-width", "1000px", "margin", "auto"], [1, "p-inputgroup-addon"], [1, "pi", "pi-user"], ["type", "text", "formControlName", "email", "pInputText", "", "placeholder", "Email", 3, "ngModel", "ngModelChange"], ["class", "p-error", 4, "ngIf"], [1, "pi", "pi-lock"], ["type", "password", "formControlName", "password", "pInputText", "", "placeholder", "password"], ["type", "password", "formControlName", "password", "pInputText", "", "placeholder", "password", 3, "ngModel", "ngModelChange"], [2, "max-width", "1000px", "margin", "auto"], ["label", "Submit", "styleClass", "full-btn", 3, "onClick"], ["href", "/login"], ["class", "col-12", 4, "ngIf"], [1, "p-error"], [4, "ngIf"]], template: function RegisterComponentComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2");
        i0.ɵɵtext(5, "Register");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "form", 4)(7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "span", 8);
        i0.ɵɵelement(11, "i", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "input", 10);
        i0.ɵɵlistener("ngModelChange", function RegisterComponentComponent_Template_input_ngModelChange_12_listener($event) { return ctx.user.email = $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(13, RegisterComponentComponent_small_13_Template, 3, 2, "small", 11);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "div", 6)(15, "div", 7)(16, "span", 8);
        i0.ɵɵelement(17, "i", 12);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(18, "input", 13);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(19, RegisterComponentComponent_small_19_Template, 2, 0, "small", 11);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "div", 6)(21, "div", 7)(22, "span", 8);
        i0.ɵɵelement(23, "i", 12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(24, "input", 14);
        i0.ɵɵlistener("ngModelChange", function RegisterComponentComponent_Template_input_ngModelChange_24_listener($event) { return ctx.user.password = $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(25, RegisterComponentComponent_small_25_Template, 2, 0, "small", 11);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "div", 6)(27, "div", 15)(28, "p-button", 16);
        i0.ɵɵlistener("onClick", function RegisterComponentComponent_Template_p_button_onClick_28_listener() { return ctx.onSubmit(); });
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(29, "div", 6)(30, "a", 17);
        i0.ɵɵtext(31, "Already registered?");
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(32, RegisterComponentComponent_div_32_Template, 3, 1, "div", 18);
        i0.ɵɵelementEnd()()()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("formGroup", ctx.loginFormGroup);
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngModel", ctx.user.email);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.loginForm.email.invalid && ctx.isSubmitted);
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngIf", ctx.loginForm.password.invalid && ctx.isSubmitted);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngModel", ctx.user.password);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.loginForm.password.invalid && ctx.isSubmitted);
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngIf", ctx.isSubmitted && ctx.authError);
    } }, directives: [i1.ɵNgNoValidate, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i5.InputText, i6.NgIf, i7.Button], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RegisterComponentComponent, [{
        type: Component,
        args: [{ selector: 'eshop-frontend-register-component', template: "<div class=\" container-fluid p-0\" style=\"text-align: center;\">\n  <div class=\"container-fluid  login-register\" >\n      <div class=\"grid\">\n<!--             <div class=\"col-6\">\n              <img src=\"assets/images/login-photo.png\" alt=\"\">\n          </div> -->\n          <div class=\"col-12 p-0 p-md-5 container-fluid\" style=\"background-color: rgba(255, 255, 255, 0);\">\n              <h2>Register</h2>\n              <form [formGroup]=\"loginFormGroup\">\n              <div class=\"grid  mt-6 container-fluid\" >\n                  <div class=\"col-12\">\n                      <div class=\"p-inputgroup\"  style=\"max-width: 1000px; margin: auto;\">\n                          <span class=\"p-inputgroup-addon\"><i class=\"pi pi-user\"></i></span>\n                          <input type=\"text\" formControlName=\"email\" pInputText placeholder=\"Email\" [(ngModel)]=\"user.email\">\n                      </div>\n                      <small *ngIf=\"loginForm.email.invalid && isSubmitted\" class=\"p-error\"\n                      ><span *ngIf=\"loginForm.email.errors.required\">email is required</span>\n                      <span *ngIf=\"loginForm.email.errors.email\">email is invalid</span></small>\n\n\n                  </div>\n                  <div class=\"col-12\">\n                      <div class=\"p-inputgroup\" style=\"max-width: 1000px;  margin: auto;\" >\n                          <span class=\"p-inputgroup-addon\"><i class=\"pi pi-lock\"></i></span>\n                          <input type=\"password\"\n                          formControlName=\"password\"\n                          pInputText\n                          placeholder=\"password\">\n                      </div>\n                      <small *ngIf=\"loginForm.password.invalid && isSubmitted\" class=\"p-error\">Password is required</small>\n\n                  </div>\n\n                  <div class=\"col-12\">\n                    <div class=\"p-inputgroup\" style=\"max-width: 1000px;  margin: auto;\" >\n                        <span class=\"p-inputgroup-addon\"><i class=\"pi pi-lock\"></i></span>\n                        <input type=\"password\"\n                        formControlName=\"password\"\n                        pInputText\n                        placeholder=\"password\"\n                        [(ngModel)]=\"user.password\"\n                        >\n                    </div>\n                    <small *ngIf=\"loginForm.password.invalid && isSubmitted\" class=\"p-error\">Password is required</small>\n\n                </div>\n                  <div class=\"col-12\" >\n                      <div style=\"max-width: 1000px;  margin: auto;\"><p-button label=\"Submit\" styleClass=\"full-btn\" (onClick)=\"onSubmit()\"  ></p-button></div>\n\n                  </div>\n                  <div class=\"col-12\">\n                      <a href=\"/login\">Already registered?</a>\n                  </div>\n\n\n                  <div class=\"col-12\" *ngIf=\"isSubmitted && authError\" >\n                      <small class=\"p-error\">{{authMessage}}</small>\n                  </div>\n\n          </div>\n      </form>\n      </div>\n          </div>\n  </div>\n</div>\n\n", styles: [""] }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.AuthService }, { type: i3.LocalstorageService }, { type: i4.Router }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXItY29tcG9uZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdXNlcnMvc3JjL2xpYi9yZWdpc3Rlci1jb21wb25lbnQvcmVnaXN0ZXItY29tcG9uZW50LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdXNlcnMvc3JjL2xpYi9yZWdpc3Rlci1jb21wb25lbnQvcmVnaXN0ZXItY29tcG9uZW50LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLFdBQVcsRUFBYSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7Ozs7Ozs7OztJQ1VoRCw0QkFBOEM7SUFBQSxpQ0FBaUI7SUFBQSxpQkFBTzs7O0lBQ3ZFLDRCQUEyQztJQUFBLGdDQUFnQjtJQUFBLGlCQUFPOzs7SUFGbEUsaUNBQ0M7SUFBQSx1RkFBc0U7SUFDdkUsdUZBQWtFO0lBQUEsaUJBQVE7OztJQURsRSxlQUFxQztJQUFyQyw2REFBcUM7SUFDdEMsZUFBa0M7SUFBbEMsMERBQWtDOzs7SUFZekMsaUNBQXlFO0lBQUEsb0NBQW9CO0lBQUEsaUJBQVE7OztJQWN2RyxpQ0FBeUU7SUFBQSxvQ0FBb0I7SUFBQSxpQkFBUTs7O0lBWXZHLDhCQUFzRCxnQkFBQTtJQUMzQixZQUFlO0lBQUEsaUJBQVEsRUFBQTs7O0lBQXZCLGVBQWU7SUFBZix3Q0FBZTs7QUR6QzVELE1BQU0s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QTtRQUVMLGtGQUFxRztRQUV6RyxpQkFBTTtRQUNKLCtCQUFxQixlQUFBLG9CQUFBO1FBQzZFLDhHQUFXLGNBQVUsSUFBQztRQUFHLGlCQUFXLEVBQUEsRUFBQTtRQUd0SSwrQkFBb0IsYUFBQTtRQUNDLG9DQUFtQjtRQUFBLGlCQUFJLEVBQUE7UUFJNUMsOEVBRU07UUFFZCxpQkFBTSxFQUFBLEVBQUEsRUFBQSxFQUFBLEVBQUE7O1FBbkRJLGVBQTRCO1FBQTVCLDhDQUE0QjtRQUtvRCxlQUF3QjtRQUF4Qix3Q0FBd0I7UUFFOUYsZUFBNEM7UUFBNUMscUVBQTRDO1FBYzVDLGVBQStDO1FBQS9DLHdFQUErQztRQVdyRCxlQUEyQjtRQUEzQiwyQ0FBMkI7UUFHdkIsZUFBK0M7UUFBL0Msd0VBQStDO1FBWXBDLGVBQThCO1FBQTlCLHVEQUE4Qjs7dUZEeEN4RCwwQkFBMEI7Y0FMdEMsU0FBUzsyQkFDRSxtQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9tb2RlbHMvdXNlcic7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBMb2NhbHN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbG9jYWxzdG9yYWdlLnNlcnZpY2UnO1xuXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXNob3AtZnJvbnRlbmQtcmVnaXN0ZXItY29tcG9uZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JlZ2lzdGVyLWNvbXBvbmVudC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3JlZ2lzdGVyLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyQ29tcG9uZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgbG9naW5Gb3JtR3JvdXA6IEZvcm1Hcm91cDtcbiAgaXNTdWJtaXR0ZWQgPSBmYWxzZTtcbiAgYXV0aEVycm9yID0gZmFsc2U7XG4gIGF1dGhNZXNzYWdlID0gXCJFbWFpbCBvciBwYXNzd29yZCBpcyB3cm9uZ1wiO1xuICB1c2VyOiBVc2VyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIGxvY2Fsc3RvcmFnZVNlcnZpY2U6IExvY2Fsc3RvcmFnZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xuICAgICAgICAgICAgICAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX2luaXRMb2dpbkZvcm0oKTtcbiAgfVxuXG4gIHByaXZhdGUgX2luaXRMb2dpbkZvcm0oKSB7XG4gICAgdGhpcy5sb2dpbkZvcm1Hcm91cCA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgZW1haWw6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMuZW1haWxdXSxcbiAgICAgIHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgfSk7XG4gIH1cblxuXG4gIG9uU3VibWl0KCkge1xuICAgIGNvbnNvbGUubG9nKFwic3VibWl0dGVkXCIpO1xuICAgIHRoaXMuaXNTdWJtaXR0ZWQgPSB0cnVlO1xuICAgIGNvbnNvbGUubG9nKFwiZW1haWwgPSBcIiArIHRoaXMudXNlci5lbWFpbCk7XG5cbiAgICBpZiAodGhpcy5sb2dpbkZvcm1Hcm91cC5pbnZhbGlkKSByZXR1cm47XG5cblxuXG4gICAgdGhpcy5hdXRoU2VydmljZS5yZWdpc3Rlcih0aGlzLnVzZXIpLnN1YnNjcmliZShcbiAgICAgIGRhdGEgPT4ge1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBkYXRhO1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiYXV0aFRva2VuXCIsIHJlc3BvbnNlLnRva2VuKTtcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImVtYWlsXCIsIHJlc3BvbnNlLnVzZXIpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS51c2VyICsgXCIgIFwiICsgcmVzcG9uc2UudG9rZW4pO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nXSk7XG4gICAgICAgIHRoaXMuYXV0aEVycm9yID0gZmFsc2U7XG4gICAgICB9LFxuICAgICAgZXJyb3IgPT4ge1xuICAgICAgICB0aGlzLmF1dGhNZXNzYWdlID0gXCJBbiBlcnJvciBvY2N1cmVkXCI7XG4gICAgICAgIHRoaXMuYXV0aEVycm9yID0gdHJ1ZTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgZ2V0IGxvZ2luRm9ybSgpe1xuICAgIHJldHVybiB0aGlzLmxvZ2luRm9ybUdyb3VwLmNvbnRyb2xzO1xuICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCIgY29udGFpbmVyLWZsdWlkIHAtMFwiIHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyO1wiPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkICBsb2dpbi1yZWdpc3RlclwiID5cbiAgICAgIDxkaXYgY2xhc3M9XCJncmlkXCI+XG48IS0tICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNlwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvbG9naW4tcGhvdG8ucG5nXCIgYWx0PVwiXCI+XG4gICAgICAgICAgPC9kaXY+IC0tPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgcC0wIHAtbWQtNSBjb250YWluZXItZmx1aWRcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XCI+XG4gICAgICAgICAgICAgIDxoMj5SZWdpc3RlcjwvaDI+XG4gICAgICAgICAgICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwibG9naW5Gb3JtR3JvdXBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQgIG10LTYgY29udGFpbmVyLWZsdWlkXCIgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWlucHV0Z3JvdXBcIiAgc3R5bGU9XCJtYXgtd2lkdGg6IDEwMDBweDsgbWFyZ2luOiBhdXRvO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtaW5wdXRncm91cC1hZGRvblwiPjxpIGNsYXNzPVwicGkgcGktdXNlclwiPjwvaT48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGZvcm1Db250cm9sTmFtZT1cImVtYWlsXCIgcElucHV0VGV4dCBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgWyhuZ01vZGVsKV09XCJ1c2VyLmVtYWlsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPHNtYWxsICpuZ0lmPVwibG9naW5Gb3JtLmVtYWlsLmludmFsaWQgJiYgaXNTdWJtaXR0ZWRcIiBjbGFzcz1cInAtZXJyb3JcIlxuICAgICAgICAgICAgICAgICAgICAgID48c3BhbiAqbmdJZj1cImxvZ2luRm9ybS5lbWFpbC5lcnJvcnMucmVxdWlyZWRcIj5lbWFpbCBpcyByZXF1aXJlZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImxvZ2luRm9ybS5lbWFpbC5lcnJvcnMuZW1haWxcIj5lbWFpbCBpcyBpbnZhbGlkPC9zcGFuPjwvc21hbGw+XG5cblxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtaW5wdXRncm91cFwiIHN0eWxlPVwibWF4LXdpZHRoOiAxMDAwcHg7ICBtYXJnaW46IGF1dG87XCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtaW5wdXRncm91cC1hZGRvblwiPjxpIGNsYXNzPVwicGkgcGktbG9ja1wiPjwvaT48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBJbnB1dFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCAqbmdJZj1cImxvZ2luRm9ybS5wYXNzd29yZC5pbnZhbGlkICYmIGlzU3VibWl0dGVkXCIgY2xhc3M9XCJwLWVycm9yXCI+UGFzc3dvcmQgaXMgcmVxdWlyZWQ8L3NtYWxsPlxuXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1pbnB1dGdyb3VwXCIgc3R5bGU9XCJtYXgtd2lkdGg6IDEwMDBweDsgIG1hcmdpbjogYXV0bztcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtaW5wdXRncm91cC1hZGRvblwiPjxpIGNsYXNzPVwicGkgcGktbG9ja1wiPjwvaT48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBJbnB1dFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJ1c2VyLnBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzbWFsbCAqbmdJZj1cImxvZ2luRm9ybS5wYXNzd29yZC5pbnZhbGlkICYmIGlzU3VibWl0dGVkXCIgY2xhc3M9XCJwLWVycm9yXCI+UGFzc3dvcmQgaXMgcmVxdWlyZWQ8L3NtYWxsPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCIgPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJtYXgtd2lkdGg6IDEwMDBweDsgIG1hcmdpbjogYXV0bztcIj48cC1idXR0b24gbGFiZWw9XCJTdWJtaXRcIiBzdHlsZUNsYXNzPVwiZnVsbC1idG5cIiAob25DbGljayk9XCJvblN1Ym1pdCgpXCIgID48L3AtYnV0dG9uPjwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2xvZ2luXCI+QWxyZWFkeSByZWdpc3RlcmVkPzwvYT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIiAqbmdJZj1cImlzU3VibWl0dGVkICYmIGF1dGhFcnJvclwiID5cbiAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJwLWVycm9yXCI+e3thdXRoTWVzc2FnZX19PC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cblxuIl19