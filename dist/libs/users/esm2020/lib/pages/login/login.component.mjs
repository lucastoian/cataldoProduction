import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LocalstorageService } from '../../services/localstorage.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../../services/auth.service";
import * as i3 from "../../services/localstorage.service";
import * as i4 from "@angular/router";
import * as i5 from "primeng/inputtext";
import * as i6 from "@angular/common";
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
    i0.ɵɵelementStart(0, "small", 18);
    i0.ɵɵtemplate(1, LoginComponent_small_13_span_1_Template, 2, 0, "span", 19);
    i0.ɵɵtemplate(2, LoginComponent_small_13_span_2_Template, 2, 0, "span", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.loginForm.email.errors.required);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.loginForm.email.errors.email);
} }
function LoginComponent_small_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 18);
    i0.ɵɵtext(1, "Password is required");
    i0.ɵɵelementEnd();
} }
function LoginComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "small", 18);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.authMessage);
} }
export class LoginComponent {
    constructor(formBuilder, auth, localstorageService, router) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.localstorageService = localstorageService;
        this.router = router;
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
            this.router.navigate(['/']);
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
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.AuthService), i0.ɵɵdirectiveInject(i3.LocalstorageService), i0.ɵɵdirectiveInject(i4.Router)); };
LoginComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LoginComponent, selectors: [["users-login"]], decls: 27, vars: 4, consts: [[1, "container-fluid", "p-0", 2, "text-align", "center"], [1, "container-fluid", "login-register"], [1, "grid"], [1, "col-12", "p-0", "p-md-5", "container-fluid", 2, "background-color", "rgba(255, 255, 255, 0)"], [3, "formGroup"], [1, "grid", "mt-6", "container-fluid"], [1, "col-12"], [1, "p-inputgroup", 2, "max-width", "1000px", "margin", "auto"], [1, "p-inputgroup-addon"], [1, "pi", "pi-user"], ["type", "text", "formControlName", "email", "pInputText", "", "placeholder", "Email"], ["class", "p-error", 4, "ngIf"], [1, "pi", "pi-lock"], ["type", "password", "formControlName", "password", "pInputText", "", "placeholder", "password"], [2, "max-width", "1000px", "margin", "auto"], ["label", "Submit", "styleClass", "full-btn", 3, "onClick"], ["href", "/login"], ["class", "col-12", 4, "ngIf"], [1, "p-error"], [4, "ngIf"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2");
        i0.ɵɵtext(5, "Login");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "form", 4)(7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "span", 8);
        i0.ɵɵelement(11, "i", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(12, "input", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(13, LoginComponent_small_13_Template, 3, 2, "small", 11);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "div", 6)(15, "div", 7)(16, "span", 8);
        i0.ɵɵelement(17, "i", 12);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(18, "input", 13);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(19, LoginComponent_small_19_Template, 2, 0, "small", 11);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "div", 6)(21, "div", 14)(22, "p-button", 15);
        i0.ɵɵlistener("onClick", function LoginComponent_Template_p_button_onClick_22_listener() { return ctx.onSubmit(); });
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(23, "div", 6)(24, "a", 16);
        i0.ɵɵtext(25, "Forgot your password?");
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(26, LoginComponent_div_26_Template, 3, 1, "div", 17);
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
    } }, directives: [i1.ɵNgNoValidate, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i5.InputText, i6.NgIf, i7.Button], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoginComponent, [{
        type: Component,
        args: [{ selector: 'users-login', styles: [], template: "<div class=\" container-fluid p-0\" style=\"text-align: center;\">\r\n    <div class=\"container-fluid  login-register\" >\r\n        <div class=\"grid\">\r\n<!--             <div class=\"col-6\">\r\n                <img src=\"assets/images/login-photo.png\" alt=\"\">\r\n            </div> -->\r\n            <div class=\"col-12 p-0 p-md-5 container-fluid\" style=\"background-color: rgba(255, 255, 255, 0);\">\r\n                <h2>Login</h2>\r\n                <form [formGroup]=\"loginFormGroup\">\r\n                <div class=\"grid  mt-6 container-fluid\" >\r\n                    <div class=\"col-12\">\r\n                        <div class=\"p-inputgroup\"  style=\"max-width: 1000px; margin: auto;\">\r\n                            <span class=\"p-inputgroup-addon\"><i class=\"pi pi-user\"></i></span>\r\n                            <input type=\"text\" formControlName=\"email\" pInputText placeholder=\"Email\">         \r\n                        </div>\r\n                        <small *ngIf=\"loginForm.email.invalid && isSubmitted\" class=\"p-error\"\r\n                        ><span *ngIf=\"loginForm.email.errors.required\">email is required</span>\r\n                        <span *ngIf=\"loginForm.email.errors.email\">email is invalid</span></small>                      \r\n \r\n    \r\n                    </div>\r\n                    <div class=\"col-12\">\r\n                        <div class=\"p-inputgroup\" style=\"max-width: 1000px;  margin: auto;\" >\r\n                            <span class=\"p-inputgroup-addon\"><i class=\"pi pi-lock\"></i></span>\r\n                            <input type=\"password\"\r\n                            formControlName=\"password\"\r\n                            pInputText\r\n                            placeholder=\"password\">         \r\n                        </div>\r\n                        <small *ngIf=\"loginForm.password.invalid && isSubmitted\" class=\"p-error\">Password is required</small>\r\n    \r\n                    </div>\r\n                    <div class=\"col-12\" >\r\n                        <div style=\"max-width: 1000px;  margin: auto;\"><p-button label=\"Submit\" styleClass=\"full-btn\" (onClick)=\"onSubmit()\"  ></p-button></div>\r\n                        \r\n                    </div>\r\n                    <div class=\"col-12\">\r\n                        <a href=\"/login\">Forgot your password?</a>\r\n                    </div>\r\n                 \r\n\r\n                    <div class=\"col-12\" *ngIf=\"isSubmitted && authError\" >\r\n                        <small class=\"p-error\">{{authMessage}}</small>\r\n                    </div>\r\n\r\n            </div>\r\n        </form>\r\n        </div>\r\n            </div>\r\n    </div>\r\n</div>\r\n" }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.AuthService }, { type: i3.LocalstorageService }, { type: i4.Router }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy91c2Vycy9zcmMvbGliL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdXNlcnMvc3JjL2xpYi9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxXQUFXLEVBQWEsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQzs7Ozs7Ozs7OztJQ1dqRCw0QkFBOEM7SUFBQSxpQ0FBaUI7SUFBQSxpQkFBTzs7O0lBQ3ZFLDRCQUEyQztJQUFBLGdDQUFnQjtJQUFBLGlCQUFPOzs7SUFGbEUsaUNBQ0M7SUFBQSwyRUFBc0U7SUFDdkUsMkVBQWtFO0lBQUEsaUJBQVE7OztJQURsRSxlQUFxQztJQUFyQyw2REFBcUM7SUFDdEMsZUFBa0M7SUFBbEMsMERBQWtDOzs7SUFZekMsaUNBQXlFO0lBQUEsb0NBQW9CO0lBQUEsaUJBQVE7OztJQVl6Ryw4QkFBc0QsZ0JBQUE7SUFDM0IsWUFBZTtJQUFBLGlCQUFRLEVBQUE7OztJQUF2QixlQUFlO0lBQWYsd0NBQWU7O0FENUI5RCxNQUFNLE9BQU8sY0FBYztJQU16QixZQUFvQixXQUF3QixFQUN4QixJQUFpQixFQUNqQixtQkFBd0MsRUFDeEMsTUFBYztRQUhkLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFNBQUksR0FBSixJQUFJLENBQWE7UUFDakIsd0JBQW1C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bXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2NhbHN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbG9jYWxzdG9yYWdlLnNlcnZpY2UnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndXNlcnMtbG9naW4nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2dpbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVzOiBbXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGxvZ2luRm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcbiAgaXNTdWJtaXR0ZWQgPSBmYWxzZTtcclxuICBhdXRoRXJyb3IgPSBmYWxzZTtcclxuICBhdXRoTWVzc2FnZSA9IFwiRW1haWwgb3IgcGFzc3dvcmQgaXMgd3JvbmdcIjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBhdXRoOiBBdXRoU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGxvY2Fsc3RvcmFnZVNlcnZpY2U6IExvY2Fsc3RvcmFnZVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5faW5pdExvZ2luRm9ybSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfaW5pdExvZ2luRm9ybSgpIHtcclxuICAgIHRoaXMubG9naW5Gb3JtR3JvdXAgPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgZW1haWw6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMuZW1haWxdXSxcclxuICAgICAgcGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG4gIG9uU3VibWl0KCkge1xyXG4gICAgdGhpcy5pc1N1Ym1pdHRlZCA9IHRydWU7XHJcblxyXG4gICAgaWYgKHRoaXMubG9naW5Gb3JtR3JvdXAuaW52YWxpZCkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuYXV0aC5sb2dpbih0aGlzLmxvZ2luRm9ybS5lbWFpbC52YWx1ZSwgdGhpcy5sb2dpbkZvcm0ucGFzc3dvcmQudmFsdWUpLnN1YnNjcmliZShcclxuICAgICAgKHVzZXIpID0+IHtcclxuICAgICAgICB0aGlzLmF1dGhFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJhdXRoVG9rZW5cIiwgdXNlci50b2tlbik7XHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImVtYWlsXCIsIHVzZXIuZW1haWwpO1xyXG4gICAgICAgIHRoaXMubG9jYWxzdG9yYWdlU2VydmljZS5zZXRUb2tlbih1c2VyLnRva2VuKTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nXSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcclxuICAgICAgICB0aGlzLmF1dGhFcnJvciA9IHRydWU7XHJcbiAgICAgICAgaWYgKGVycm9yLnN0YXR1cyAhPT0gNDAwKSB7XHJcbiAgICAgICAgICB0aGlzLmF1dGhNZXNzYWdlID0gJ0Vycm9yIGluIHRoZSBTZXJ2ZXIsIHBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIhJztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXQgbG9naW5Gb3JtKCl7XHJcbiAgICByZXR1cm4gdGhpcy5sb2dpbkZvcm1Hcm91cC5jb250cm9scztcclxuICB9XHJcblxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCIgY29udGFpbmVyLWZsdWlkIHAtMFwiIHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyO1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZCAgbG9naW4tcmVnaXN0ZXJcIiA+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImdyaWRcIj5cclxuPCEtLSAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTZcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9sb2dpbi1waG90by5wbmdcIiBhbHQ9XCJcIj5cclxuICAgICAgICAgICAgPC9kaXY+IC0tPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIHAtMCBwLW1kLTUgY29udGFpbmVyLWZsdWlkXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1wiPlxyXG4gICAgICAgICAgICAgICAgPGgyPkxvZ2luPC9oMj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwibG9naW5Gb3JtR3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkICBtdC02IGNvbnRhaW5lci1mbHVpZFwiID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWlucHV0Z3JvdXBcIiAgc3R5bGU9XCJtYXgtd2lkdGg6IDEwMDBweDsgbWFyZ2luOiBhdXRvO1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwLWlucHV0Z3JvdXAtYWRkb25cIj48aSBjbGFzcz1cInBpIHBpLXVzZXJcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgZm9ybUNvbnRyb2xOYW1lPVwiZW1haWxcIiBwSW5wdXRUZXh0IHBsYWNlaG9sZGVyPVwiRW1haWxcIj4gICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCAqbmdJZj1cImxvZ2luRm9ybS5lbWFpbC5pbnZhbGlkICYmIGlzU3VibWl0dGVkXCIgY2xhc3M9XCJwLWVycm9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPjxzcGFuICpuZ0lmPVwibG9naW5Gb3JtLmVtYWlsLmVycm9ycy5yZXF1aXJlZFwiPmVtYWlsIGlzIHJlcXVpcmVkPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImxvZ2luRm9ybS5lbWFpbC5lcnJvcnMuZW1haWxcIj5lbWFpbCBpcyBpbnZhbGlkPC9zcGFuPjwvc21hbGw+ICAgICAgICAgICAgICAgICAgICAgIFxyXG4gXHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWlucHV0Z3JvdXBcIiBzdHlsZT1cIm1heC13aWR0aDogMTAwMHB4OyAgbWFyZ2luOiBhdXRvO1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicC1pbnB1dGdyb3VwLWFkZG9uXCI+PGkgY2xhc3M9XCJwaSBwaS1sb2NrXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcElucHV0VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiPiAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsICpuZ0lmPVwibG9naW5Gb3JtLnBhc3N3b3JkLmludmFsaWQgJiYgaXNTdWJtaXR0ZWRcIiBjbGFzcz1cInAtZXJyb3JcIj5QYXNzd29yZCBpcyByZXF1aXJlZDwvc21hbGw+XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwibWF4LXdpZHRoOiAxMDAwcHg7ICBtYXJnaW46IGF1dG87XCI+PHAtYnV0dG9uIGxhYmVsPVwiU3VibWl0XCIgc3R5bGVDbGFzcz1cImZ1bGwtYnRuXCIgKG9uQ2xpY2spPVwib25TdWJtaXQoKVwiICA+PC9wLWJ1dHRvbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2xvZ2luXCI+Rm9yZ290IHlvdXIgcGFzc3dvcmQ/PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCIgKm5nSWY9XCJpc1N1Ym1pdHRlZCAmJiBhdXRoRXJyb3JcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cInAtZXJyb3JcIj57e2F1dGhNZXNzYWdlfX08L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19