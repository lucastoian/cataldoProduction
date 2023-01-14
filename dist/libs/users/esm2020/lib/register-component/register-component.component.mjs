import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { Location } from '@angular/common';
import { Title } from "@angular/platform-browser";
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../services/auth.service";
import * as i3 from "@angular/platform-browser";
import * as i4 from "@angular/router";
import * as i5 from "@angular/common";
import * as i6 from "primeng/inputtext";
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
    i0.ɵɵelementStart(0, "small", 20);
    i0.ɵɵtemplate(1, RegisterComponentComponent_small_13_span_1_Template, 2, 0, "span", 21);
    i0.ɵɵtemplate(2, RegisterComponentComponent_small_13_span_2_Template, 2, 0, "span", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.loginForm.email.errors.required);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.loginForm.email.errors.email);
} }
function RegisterComponentComponent_small_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 20);
    i0.ɵɵtext(1, "The password must have at least 8 characters");
    i0.ɵɵelementEnd();
} }
function RegisterComponentComponent_small_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 20);
    i0.ɵɵtext(1, "Password is required");
    i0.ɵɵelementEnd();
} }
function RegisterComponentComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7)(1, "small", 22);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r3.authMessage);
} }
export class RegisterComponentComponent {
    constructor(formBuilder, authService, titleService, router, location) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.titleService = titleService;
        this.router = router;
        this.location = location;
        this.isSubmitted = false;
        this.authError = false;
        this.loading = false;
        this.authMessage = "Email or password is wrong";
        this.loading = false;
        this.user = new User();
        this.titleService.setTitle("Registrati | Cataldo Store");
    }
    ngOnInit() {
        this.loading = false;
        this._initLoginForm();
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
RegisterComponentComponent.ɵfac = function RegisterComponentComponent_Factory(t) { return new (t || RegisterComponentComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.AuthService), i0.ɵɵdirectiveInject(i3.Title), i0.ɵɵdirectiveInject(i4.Router), i0.ɵɵdirectiveInject(i5.Location)); };
RegisterComponentComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RegisterComponentComponent, selectors: [["eshop-frontend-register-component"]], decls: 33, vars: 8, consts: [[1, "container-fluid", "p-0", 2, "text-align", "center"], [1, "container-fluid", "login-register"], [1, "grid"], [1, "col-12", "p-0", "p-md-5", "container-fluid", 2, "background-color", "rgba(255, 255, 255, 0)"], [2, "margin-top", "20px"], [3, "formGroup"], [1, "grid", "mt-6", "container-fluid"], [1, "col-12"], [1, "p-inputgroup", 2, "max-width", "1000px", "margin", "auto"], [1, "p-inputgroup-addon"], [1, "pi", "pi-user"], ["type", "text", "formControlName", "email", "pInputText", "", "placeholder", "Email", 3, "ngModel", "ngModelChange"], ["class", "p-error", 4, "ngIf"], [1, "pi", "pi-lock"], ["type", "password", "formControlName", "password", "pInputText", "", "placeholder", "password"], ["type", "password", "formControlName", "password2", "pInputText", "", "placeholder", "password", 3, "ngModel", "ngModelChange"], [2, "max-width", "1000px", "margin", "auto"], ["label", "Submit", "styleClass", "full-btn", 3, "loading", "onClick"], ["href", "#login"], ["class", "col-12", 4, "ngIf"], [1, "p-error"], [4, "ngIf"], [1, "p-error", 2, "font-size", "40px", "font-weight", "800"]], template: function RegisterComponentComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
        i0.ɵɵtext(5, "Register");
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
        i0.ɵɵelementStart(29, "div", 7)(30, "a", 18);
        i0.ɵɵtext(31, "Already Registered?");
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(32, RegisterComponentComponent_div_32_Template, 3, 1, "div", 19);
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
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("loading", ctx.loading);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", ctx.isSubmitted && ctx.authError);
    } }, directives: [i1.ɵNgNoValidate, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i6.InputText, i5.NgIf, i7.Button], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RegisterComponentComponent, [{
        type: Component,
        args: [{ selector: 'eshop-frontend-register-component', template: "<div class=\" container-fluid p-0\" style=\"text-align: center;\">\n  <div class=\"container-fluid  login-register\" >\n      <div class=\"grid\">\n<!--             <div class=\"col-6\">\n              <img src=\"assets/images/login-photo.png\" alt=\"\">\n          </div> -->\n          <div class=\"col-12 p-0 p-md-5 container-fluid\" style=\"background-color: rgba(255, 255, 255, 0);\">\n              <h2 style=\"    margin-top: 20px;\">Register</h2>\n              <form [formGroup]=\"loginFormGroup\">\n              <div class=\"grid  mt-6 container-fluid\" >\n                  <div class=\"col-12\">\n                      <div class=\"p-inputgroup\"  style=\"max-width: 1000px; margin: auto;\">\n                          <span class=\"p-inputgroup-addon\"><i class=\"pi pi-user\"></i></span>\n                          <input type=\"text\" formControlName=\"email\" pInputText placeholder=\"Email\" [(ngModel)]=\"user.email\">\n                      </div>\n                      <small *ngIf=\"loginForm.email.invalid && isSubmitted\" class=\"p-error\"\n                      ><span *ngIf=\"loginForm.email.errors.required\">email is required</span>\n                      <span *ngIf=\"loginForm.email.errors.email\">email is invalid</span></small>\n\n\n                  </div>\n                  <div class=\"col-12\">\n                      <div class=\"p-inputgroup\" style=\"max-width: 1000px;  margin: auto;\" >\n                          <span class=\"p-inputgroup-addon\"><i class=\"pi pi-lock\"></i></span>\n                          <input type=\"password\"\n                          formControlName=\"password\"\n                          pInputText\n                          placeholder=\"password\">\n                      </div>\n                      <small *ngIf=\"loginForm.password.invalid && isSubmitted\" class=\"p-error\">The password must have at least 8 characters</small>\n\n                  </div>\n\n                  <div class=\"col-12\">\n                    <div class=\"p-inputgroup\" style=\"max-width: 1000px;  margin: auto;\" >\n                        <span class=\"p-inputgroup-addon\"><i class=\"pi pi-lock\"></i></span>\n                        <input type=\"password\"\n                        formControlName=\"password2\"\n                        pInputText\n                        placeholder=\"password\"\n                        [(ngModel)]=\"user.password\"\n                        >\n                    </div>\n                    <small *ngIf=\"loginForm.password.invalid && isSubmitted\" class=\"p-error\">Password is required</small>\n\n                </div>\n                  <div class=\"col-12\" >\n                      <div style=\"max-width: 1000px;  margin: auto;\"><p-button [loading]=\"loading\" label=\"Submit\" styleClass=\"full-btn\" (onClick)=\"onSubmit()\"  ></p-button></div>\n\n                  </div>\n                  <div class=\"col-12\">\n                    <a  href=\"#login\">Already Registered?</a>\n                  </div>\n\n\n                  <div class=\"col-12\" *ngIf=\"isSubmitted && authError\" >\n                      <small class=\"p-error\" style=\"font-size: 40px; font-weight: 800\">{{authMessage}}</small>\n                  </div>\n\n          </div>\n      </form>\n      </div>\n          </div>\n  </div>\n</div>\n\n", styles: [""] }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.AuthService }, { type: i3.Title }, { type: i4.Router }, { type: i5.Location }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXItY29tcG9uZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdXNlcnMvc3JjL2xpYi9yZWdpc3Rlci1jb21wb25lbnQvcmVnaXN0ZXItY29tcG9uZW50LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdXNlcnMvc3JjL2xpYi9yZWdpc3Rlci1jb21wb25lbnQvcmVnaXN0ZXItY29tcG9uZW50LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLFdBQVcsRUFBYSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLDJCQUEyQixDQUFDOzs7Ozs7Ozs7O0lDUXpCLDRCQUE4QztJQUFBLGlDQUFpQjtJQUFBLGlCQUFPOzs7SUFDdkUsNEJBQTJDO0lBQUEsZ0NBQWdCO0lBQUEsaUJBQU87OztJQUZsRSxpQ0FDQztJQUFBLHVGQUFzRTtJQUN2RSx1RkFBa0U7SUFBQSxpQkFBUTs7O0lBRGxFLGVBQXFDO0lBQXJDLDZEQUFxQztJQUN0QyxlQUFrQztJQUFsQywwREFBa0M7OztJQVl6QyxpQ0FBeUU7SUFBQSw0REFBNEM7SUFBQSxpQkFBUTs7O0lBYy9ILGlDQUF5RTtJQUFBLG9DQUFvQjtJQUFBLGlCQUFROzs7SUFZdkcsOEJBQXNELGdCQUFBO0lBQ2UsWUFBZTtJQUFBLGlCQUFRLEVB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TTtRQUNKLCtCQUFxQixlQUFBLG9CQUFBO1FBQ2lHLDhHQUFXLGNBQVUsSUFBQztRQUFHLGlCQUFXLEVBQUEsRUFBQTtRQUcxSiwrQkFBb0IsYUFBQTtRQUNBLG9DQUFtQjtRQUFBLGlCQUFJLEVBQUE7UUFJM0MsOEVBRU07UUFFZCxpQkFBTSxFQUFBLEVBQUEsRUFBQSxFQUFBLEVBQUE7O1FBbkRJLGVBQTRCO1FBQTVCLDhDQUE0QjtRQUtvRCxlQUF3QjtRQUF4Qix3Q0FBd0I7UUFFOUYsZUFBNEM7UUFBNUMscUVBQTRDO1FBYzVDLGVBQStDO1FBQS9DLHdFQUErQztRQVdyRCxlQUEyQjtRQUEzQiwyQ0FBMkI7UUFHdkIsZUFBK0M7UUFBL0Msd0VBQStDO1FBSUksZUFBbUI7UUFBbkIscUNBQW1CO1FBUTNELGVBQThCO1FBQTlCLHVEQUE4Qjs7dUZEdEN4RCwwQkFBMEI7Y0FMdEMsU0FBUzsyQkFDRSxtQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9tb2RlbHMvdXNlcic7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBMb2NhbHN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbG9jYWxzdG9yYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtUaXRsZX0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcblxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VzaG9wLWZyb250ZW5kLXJlZ2lzdGVyLWNvbXBvbmVudCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZWdpc3Rlci1jb21wb25lbnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yZWdpc3Rlci1jb21wb25lbnQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBSZWdpc3RlckNvbXBvbmVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGxvZ2luRm9ybUdyb3VwOiBGb3JtR3JvdXA7XG4gIGlzU3VibWl0dGVkID0gZmFsc2U7XG4gIGF1dGhFcnJvciA9IGZhbHNlO1xuICBsb2FkaW5nOmJvb2xlYW4gPSBmYWxzZTtcbiAgYXV0aE1lc3NhZ2UgPSBcIkVtYWlsIG9yIHBhc3N3b3JkIGlzIHdyb25nXCI7XG4gIHVzZXI6IFVzZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG4gICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgdGl0bGVTZXJ2aWNlOlRpdGxlLFxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy50aXRsZVNlcnZpY2Uuc2V0VGl0bGUoXCJSZWdpc3RyYXRpIHwgQ2F0YWxkbyBTdG9yZVwiKTtcbiAgICAgICAgICAgICAgIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLl9pbml0TG9naW5Gb3JtKCk7XG4gIH1cblxuICBwcml2YXRlIF9pbml0TG9naW5Gb3JtKCkge1xuICAgIHRoaXMubG9naW5Gb3JtR3JvdXAgPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIGVtYWlsOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLmVtYWlsXV0sXG4gICAgICBwYXNzd29yZDogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoOCldXSxcbiAgICAgIHBhc3N3b3JkMjogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgIH0pO1xuICB9XG5cblxuICBvblN1Ym1pdCgpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIGNvbnNvbGUubG9nKFwic3VibWl0dGVkXCIpO1xuICAgIHRoaXMuaXNTdWJtaXR0ZWQgPSB0cnVlO1xuICAgIGNvbnNvbGUubG9nKFwiZW1haWwgPSBcIiArIHRoaXMudXNlci5lbWFpbCk7XG4gICAgY29uc29sZS5sb2coXCJwYXNzd29yZCA9IFwiICsgdGhpcy5sb2dpbkZvcm1Hcm91cC5nZXQoXCJwYXNzd29yZFwiKS52YWx1ZSk7XG4gICAgY29uc29sZS5sb2coXCJwYXNzd29yZDIgPSBcIiArIHRoaXMubG9naW5Gb3JtR3JvdXAuZ2V0KFwicGFzc3dvcmQyXCIpLnZhbHVlKTtcbiAgICBpZih0aGlzLmxvZ2luRm9ybUdyb3VwLmdldChcInBhc3N3b3JkXCIpLnZhbHVlICE9PSB0aGlzLmxvZ2luRm9ybUdyb3VwLmdldChcInBhc3N3b3JkMlwiKS52YWx1ZSl7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubG9naW5Gb3JtR3JvdXAuaW52YWxpZCl7XG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cblxuXG4gICAgdGhpcy5hdXRoU2VydmljZS5yZWdpc3Rlcih0aGlzLnVzZXIpLnN1YnNjcmliZShcbiAgICAgIGRhdGEgPT4ge1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBkYXRhO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImF1dGhUb2tlblwiLCByZXNwb25zZS50b2tlbik7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZW1haWxcIiwgcmVzcG9uc2UudXNlcik7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLnVzZXIgKyBcIiAgXCIgKyByZXNwb25zZS50b2tlbik7XG4gICAgICAgIHRoaXMubG9jYXRpb24uaGlzdG9yeUdvKC0yKTtcbiAgICAgICAgdGhpcy5hdXRoRXJyb3IgPSBmYWxzZTtcbiAgICAgIH0sXG4gICAgICBlcnJvciA9PiB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmF1dGhNZXNzYWdlID0gXCJBbiBlcnJvciBvY2N1cmVkXCI7XG4gICAgICAgIHRoaXMuYXV0aEVycm9yID0gdHJ1ZTtcbiAgICAgIH1cbiAgICApO1xuICB9XG4gIGdvVG9Mb2dpbigpe1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2xvZ2luJ10pO1xuICB9XG4gIGdldCBsb2dpbkZvcm0oKXtcbiAgICByZXR1cm4gdGhpcy5sb2dpbkZvcm1Hcm91cC5jb250cm9scztcbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwiIGNvbnRhaW5lci1mbHVpZCBwLTBcIiBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlcjtcIj5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZCAgbG9naW4tcmVnaXN0ZXJcIiA+XG4gICAgICA8ZGl2IGNsYXNzPVwiZ3JpZFwiPlxuPCEtLSAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTZcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL2xvZ2luLXBob3RvLnBuZ1wiIGFsdD1cIlwiPlxuICAgICAgICAgIDwvZGl2PiAtLT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIHAtMCBwLW1kLTUgY29udGFpbmVyLWZsdWlkXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1wiPlxuICAgICAgICAgICAgICA8aDIgc3R5bGU9XCIgICAgbWFyZ2luLXRvcDogMjBweDtcIj5SZWdpc3RlcjwvaDI+XG4gICAgICAgICAgICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwibG9naW5Gb3JtR3JvdXBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQgIG10LTYgY29udGFpbmVyLWZsdWlkXCIgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWlucHV0Z3JvdXBcIiAgc3R5bGU9XCJtYXgtd2lkdGg6IDEwMDBweDsgbWFyZ2luOiBhdXRvO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtaW5wdXRncm91cC1hZGRvblwiPjxpIGNsYXNzPVwicGkgcGktdXNlclwiPjwvaT48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGZvcm1Db250cm9sTmFtZT1cImVtYWlsXCIgcElucHV0VGV4dCBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgWyhuZ01vZGVsKV09XCJ1c2VyLmVtYWlsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPHNtYWxsICpuZ0lmPVwibG9naW5Gb3JtLmVtYWlsLmludmFsaWQgJiYgaXNTdWJtaXR0ZWRcIiBjbGFzcz1cInAtZXJyb3JcIlxuICAgICAgICAgICAgICAgICAgICAgID48c3BhbiAqbmdJZj1cImxvZ2luRm9ybS5lbWFpbC5lcnJvcnMucmVxdWlyZWRcIj5lbWFpbCBpcyByZXF1aXJlZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImxvZ2luRm9ybS5lbWFpbC5lcnJvcnMuZW1haWxcIj5lbWFpbCBpcyBpbnZhbGlkPC9zcGFuPjwvc21hbGw+XG5cblxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtaW5wdXRncm91cFwiIHN0eWxlPVwibWF4LXdpZHRoOiAxMDAwcHg7ICBtYXJnaW46IGF1dG87XCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtaW5wdXRncm91cC1hZGRvblwiPjxpIGNsYXNzPVwicGkgcGktbG9ja1wiPjwvaT48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBJbnB1dFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCAqbmdJZj1cImxvZ2luRm9ybS5wYXNzd29yZC5pbnZhbGlkICYmIGlzU3VibWl0dGVkXCIgY2xhc3M9XCJwLWVycm9yXCI+VGhlIHBhc3N3b3JkIG11c3QgaGF2ZSBhdCBsZWFzdCA4IGNoYXJhY3RlcnM8L3NtYWxsPlxuXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1pbnB1dGdyb3VwXCIgc3R5bGU9XCJtYXgtd2lkdGg6IDEwMDBweDsgIG1hcmdpbjogYXV0bztcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtaW5wdXRncm91cC1hZGRvblwiPjxpIGNsYXNzPVwicGkgcGktbG9ja1wiPjwvaT48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInBhc3N3b3JkMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwSW5wdXRUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwidXNlci5wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c21hbGwgKm5nSWY9XCJsb2dpbkZvcm0ucGFzc3dvcmQuaW52YWxpZCAmJiBpc1N1Ym1pdHRlZFwiIGNsYXNzPVwicC1lcnJvclwiPlBhc3N3b3JkIGlzIHJlcXVpcmVkPC9zbWFsbD5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiID5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwibWF4LXdpZHRoOiAxMDAwcHg7ICBtYXJnaW46IGF1dG87XCI+PHAtYnV0dG9uIFtsb2FkaW5nXT1cImxvYWRpbmdcIiBsYWJlbD1cIlN1Ym1pdFwiIHN0eWxlQ2xhc3M9XCJmdWxsLWJ0blwiIChvbkNsaWNrKT1cIm9uU3VibWl0KClcIiAgPjwvcC1idXR0b24+PC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICA8YSAgaHJlZj1cIiNsb2dpblwiPkFscmVhZHkgUmVnaXN0ZXJlZD88L2E+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCIgKm5nSWY9XCJpc1N1Ym1pdHRlZCAmJiBhdXRoRXJyb3JcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwicC1lcnJvclwiIHN0eWxlPVwiZm9udC1zaXplOiA0MHB4OyBmb250LXdlaWdodDogODAwXCI+e3thdXRoTWVzc2FnZX19PC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cblxuIl19