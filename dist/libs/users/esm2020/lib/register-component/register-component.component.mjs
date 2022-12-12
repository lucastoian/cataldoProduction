import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { LocalstorageService } from '../services/localstorage.service';
import { Location } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../services/auth.service";
import * as i3 from "../services/localstorage.service";
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
    constructor(formBuilder, authService, localstorageService, router, location) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.localstorageService = localstorageService;
        this.router = router;
        this.location = location;
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
            password: ['', [Validators.required, Validators.minLength(8)]],
            password2: ['', Validators.required]
        });
    }
    onSubmit() {
        console.log("submitted");
        this.isSubmitted = true;
        console.log("email = " + this.user.email);
        console.log("password = " + this.loginFormGroup.get("password").value);
        console.log("password2 = " + this.loginFormGroup.get("password2").value);
        if (this.loginFormGroup.get("password").value !== this.loginFormGroup.get("password2").value) {
            return;
        }
        if (this.loginFormGroup.invalid)
            return;
        this.authService.register(this.user).subscribe(data => {
            let response = data;
            localStorage.setItem("authToken", response.token);
            localStorage.setItem("email", response.user);
            console.log(response.user + "  " + response.token);
            this.location.historyGo(-2);
            this.authError = false;
        }, error => {
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
RegisterComponentComponent.ɵfac = function RegisterComponentComponent_Factory(t) { return new (t || RegisterComponentComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.AuthService), i0.ɵɵdirectiveInject(i3.LocalstorageService), i0.ɵɵdirectiveInject(i4.Router), i0.ɵɵdirectiveInject(i5.Location)); };
RegisterComponentComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RegisterComponentComponent, selectors: [["eshop-frontend-register-component"]], decls: 33, vars: 7, consts: [[1, "container-fluid", "p-0", 2, "text-align", "center"], [1, "container-fluid", "login-register"], [1, "grid"], [1, "col-12", "p-0", "p-md-5", "container-fluid", 2, "background-color", "rgba(255, 255, 255, 0)"], [2, "margin-top", "20px"], [3, "formGroup"], [1, "grid", "mt-6", "container-fluid"], [1, "col-12"], [1, "p-inputgroup", 2, "max-width", "1000px", "margin", "auto"], [1, "p-inputgroup-addon"], [1, "pi", "pi-user"], ["type", "text", "formControlName", "email", "pInputText", "", "placeholder", "Email", 3, "ngModel", "ngModelChange"], ["class", "p-error", 4, "ngIf"], [1, "pi", "pi-lock"], ["type", "password", "formControlName", "password", "pInputText", "", "placeholder", "password"], ["type", "password", "formControlName", "password2", "pInputText", "", "placeholder", "password", 3, "ngModel", "ngModelChange"], [2, "max-width", "1000px", "margin", "auto"], ["label", "Submit", "styleClass", "full-btn", 3, "onClick"], ["href", "#login"], ["class", "col-12", 4, "ngIf"], [1, "p-error"], [4, "ngIf"], [1, "p-error", 2, "font-size", "40px", "font-weight", "800"]], template: function RegisterComponentComponent_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngIf", ctx.isSubmitted && ctx.authError);
    } }, directives: [i1.ɵNgNoValidate, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i6.InputText, i5.NgIf, i7.Button], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RegisterComponentComponent, [{
        type: Component,
        args: [{ selector: 'eshop-frontend-register-component', template: "<div class=\" container-fluid p-0\" style=\"text-align: center;\">\n  <div class=\"container-fluid  login-register\" >\n      <div class=\"grid\">\n<!--             <div class=\"col-6\">\n              <img src=\"assets/images/login-photo.png\" alt=\"\">\n          </div> -->\n          <div class=\"col-12 p-0 p-md-5 container-fluid\" style=\"background-color: rgba(255, 255, 255, 0);\">\n              <h2 style=\"    margin-top: 20px;\">Register</h2>\n              <form [formGroup]=\"loginFormGroup\">\n              <div class=\"grid  mt-6 container-fluid\" >\n                  <div class=\"col-12\">\n                      <div class=\"p-inputgroup\"  style=\"max-width: 1000px; margin: auto;\">\n                          <span class=\"p-inputgroup-addon\"><i class=\"pi pi-user\"></i></span>\n                          <input type=\"text\" formControlName=\"email\" pInputText placeholder=\"Email\" [(ngModel)]=\"user.email\">\n                      </div>\n                      <small *ngIf=\"loginForm.email.invalid && isSubmitted\" class=\"p-error\"\n                      ><span *ngIf=\"loginForm.email.errors.required\">email is required</span>\n                      <span *ngIf=\"loginForm.email.errors.email\">email is invalid</span></small>\n\n\n                  </div>\n                  <div class=\"col-12\">\n                      <div class=\"p-inputgroup\" style=\"max-width: 1000px;  margin: auto;\" >\n                          <span class=\"p-inputgroup-addon\"><i class=\"pi pi-lock\"></i></span>\n                          <input type=\"password\"\n                          formControlName=\"password\"\n                          pInputText\n                          placeholder=\"password\">\n                      </div>\n                      <small *ngIf=\"loginForm.password.invalid && isSubmitted\" class=\"p-error\">The password must have at least 8 characters</small>\n\n                  </div>\n\n                  <div class=\"col-12\">\n                    <div class=\"p-inputgroup\" style=\"max-width: 1000px;  margin: auto;\" >\n                        <span class=\"p-inputgroup-addon\"><i class=\"pi pi-lock\"></i></span>\n                        <input type=\"password\"\n                        formControlName=\"password2\"\n                        pInputText\n                        placeholder=\"password\"\n                        [(ngModel)]=\"user.password\"\n                        >\n                    </div>\n                    <small *ngIf=\"loginForm.password.invalid && isSubmitted\" class=\"p-error\">Password is required</small>\n\n                </div>\n                  <div class=\"col-12\" >\n                      <div style=\"max-width: 1000px;  margin: auto;\"><p-button label=\"Submit\" styleClass=\"full-btn\" (onClick)=\"onSubmit()\"  ></p-button></div>\n\n                  </div>\n                  <div class=\"col-12\">\n                    <a  href=\"#login\">Already Registered?</a>\n                  </div>\n\n\n                  <div class=\"col-12\" *ngIf=\"isSubmitted && authError\" >\n                      <small class=\"p-error\" style=\"font-size: 40px; font-weight: 800\">{{authMessage}}</small>\n                  </div>\n\n          </div>\n      </form>\n      </div>\n          </div>\n  </div>\n</div>\n\n", styles: [""] }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.AuthService }, { type: i3.LocalstorageService }, { type: i4.Router }, { type: i5.Location }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXItY29tcG9uZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdXNlcnMvc3JjL2xpYi9yZWdpc3Rlci1jb21wb25lbnQvcmVnaXN0ZXItY29tcG9uZW50LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdXNlcnMvc3JjL2xpYi9yZWdpc3Rlci1jb21wb25lbnQvcmVnaXN0ZXItY29tcG9uZW50LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLFdBQVcsRUFBYSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7Ozs7Ozs7SUNTcEIsNEJBQThDO0lBQUEsaUNBQWlCO0lBQUEsaUJBQU87OztJQUN2RSw0QkFBMkM7SUFBQSxnQ0FBZ0I7SUFBQSxpQkFBTzs7O0lBRmxFLGlDQUNDO0lBQUEsdUZBQXNFO0lBQ3ZFLHVGQUFrRTtJQUFBLGlCQUFROzs7SUFEbEUsZUFBcUM7SUFBckMsNkRBQXFDO0lBQ3RDLGVBQWtDO0lBQWxDLDBEQUFrQzs7O0lBWXpDLGlDQUF5RTtJQUFBLDREQUE0QztJQUFBLGlCQUFROzs7SUFjL0gsaUNBQXlFO0lBQUEsb0NBQW9CO0lBQUEsaUJBQVE7OztJQVl2Ryw4QkFBc0QsZ0JBQUE7SUFDZSxZQUFlO0lBQUEsaUJBQVEs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K0M7UUFBL0Msd0VBQStDO1FBWXBDLGVBQThCO1FBQTlCLHVEQUE4Qjs7dUZEdkN4RCwwQkFBMEI7Y0FMdEMsU0FBUzsyQkFDRSxtQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9tb2RlbHMvdXNlcic7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBMb2NhbHN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbG9jYWxzdG9yYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXNob3AtZnJvbnRlbmQtcmVnaXN0ZXItY29tcG9uZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JlZ2lzdGVyLWNvbXBvbmVudC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3JlZ2lzdGVyLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyQ29tcG9uZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgbG9naW5Gb3JtR3JvdXA6IEZvcm1Hcm91cDtcbiAgaXNTdWJtaXR0ZWQgPSBmYWxzZTtcbiAgYXV0aEVycm9yID0gZmFsc2U7XG4gIGF1dGhNZXNzYWdlID0gXCJFbWFpbCBvciBwYXNzd29yZCBpcyB3cm9uZ1wiO1xuICB1c2VyOiBVc2VyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIGxvY2Fsc3RvcmFnZVNlcnZpY2U6IExvY2Fsc3RvcmFnZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcbiAgICAgICAgICAgICAgIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9pbml0TG9naW5Gb3JtKCk7XG4gIH1cblxuICBwcml2YXRlIF9pbml0TG9naW5Gb3JtKCkge1xuICAgIHRoaXMubG9naW5Gb3JtR3JvdXAgPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIGVtYWlsOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLmVtYWlsXV0sXG4gICAgICBwYXNzd29yZDogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoOCldXSxcbiAgICAgIHBhc3N3b3JkMjogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgIH0pO1xuICB9XG5cblxuICBvblN1Ym1pdCgpIHtcbiAgICBjb25zb2xlLmxvZyhcInN1Ym1pdHRlZFwiKTtcbiAgICB0aGlzLmlzU3VibWl0dGVkID0gdHJ1ZTtcbiAgICBjb25zb2xlLmxvZyhcImVtYWlsID0gXCIgKyB0aGlzLnVzZXIuZW1haWwpO1xuICAgIGNvbnNvbGUubG9nKFwicGFzc3dvcmQgPSBcIiArIHRoaXMubG9naW5Gb3JtR3JvdXAuZ2V0KFwicGFzc3dvcmRcIikudmFsdWUpO1xuICAgIGNvbnNvbGUubG9nKFwicGFzc3dvcmQyID0gXCIgKyB0aGlzLmxvZ2luRm9ybUdyb3VwLmdldChcInBhc3N3b3JkMlwiKS52YWx1ZSk7XG4gICAgaWYodGhpcy5sb2dpbkZvcm1Hcm91cC5nZXQoXCJwYXNzd29yZFwiKS52YWx1ZSAhPT0gdGhpcy5sb2dpbkZvcm1Hcm91cC5nZXQoXCJwYXNzd29yZDJcIikudmFsdWUpe1xuXG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5sb2dpbkZvcm1Hcm91cC5pbnZhbGlkKSByZXR1cm47XG5cblxuXG4gICAgdGhpcy5hdXRoU2VydmljZS5yZWdpc3Rlcih0aGlzLnVzZXIpLnN1YnNjcmliZShcbiAgICAgIGRhdGEgPT4ge1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBkYXRhO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImF1dGhUb2tlblwiLCByZXNwb25zZS50b2tlbik7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZW1haWxcIiwgcmVzcG9uc2UudXNlcik7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLnVzZXIgKyBcIiAgXCIgKyByZXNwb25zZS50b2tlbik7XG4gICAgICAgIHRoaXMubG9jYXRpb24uaGlzdG9yeUdvKC0yKTtcbiAgICAgICAgdGhpcy5hdXRoRXJyb3IgPSBmYWxzZTtcbiAgICAgIH0sXG4gICAgICBlcnJvciA9PiB7XG4gICAgICAgIHRoaXMuYXV0aE1lc3NhZ2UgPSBcIkFuIGVycm9yIG9jY3VyZWRcIjtcbiAgICAgICAgdGhpcy5hdXRoRXJyb3IgPSB0cnVlO1xuICAgICAgfVxuICAgICk7XG4gIH1cbiAgZ29Ub0xvZ2luKCl7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4nXSk7XG4gIH1cbiAgZ2V0IGxvZ2luRm9ybSgpe1xuICAgIHJldHVybiB0aGlzLmxvZ2luRm9ybUdyb3VwLmNvbnRyb2xzO1xuICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCIgY29udGFpbmVyLWZsdWlkIHAtMFwiIHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyO1wiPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkICBsb2dpbi1yZWdpc3RlclwiID5cbiAgICAgIDxkaXYgY2xhc3M9XCJncmlkXCI+XG48IS0tICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNlwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvbG9naW4tcGhvdG8ucG5nXCIgYWx0PVwiXCI+XG4gICAgICAgICAgPC9kaXY+IC0tPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgcC0wIHAtbWQtNSBjb250YWluZXItZmx1aWRcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XCI+XG4gICAgICAgICAgICAgIDxoMiBzdHlsZT1cIiAgICBtYXJnaW4tdG9wOiAyMHB4O1wiPlJlZ2lzdGVyPC9oMj5cbiAgICAgICAgICAgICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJsb2dpbkZvcm1Hcm91cFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZCAgbXQtNiBjb250YWluZXItZmx1aWRcIiA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtaW5wdXRncm91cFwiICBzdHlsZT1cIm1heC13aWR0aDogMTAwMHB4OyBtYXJnaW46IGF1dG87XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicC1pbnB1dGdyb3VwLWFkZG9uXCI+PGkgY2xhc3M9XCJwaSBwaS11c2VyXCI+PC9pPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgZm9ybUNvbnRyb2xOYW1lPVwiZW1haWxcIiBwSW5wdXRUZXh0IHBsYWNlaG9sZGVyPVwiRW1haWxcIiBbKG5nTW9kZWwpXT1cInVzZXIuZW1haWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgKm5nSWY9XCJsb2dpbkZvcm0uZW1haWwuaW52YWxpZCAmJiBpc1N1Ym1pdHRlZFwiIGNsYXNzPVwicC1lcnJvclwiXG4gICAgICAgICAgICAgICAgICAgICAgPjxzcGFuICpuZ0lmPVwibG9naW5Gb3JtLmVtYWlsLmVycm9ycy5yZXF1aXJlZFwiPmVtYWlsIGlzIHJlcXVpcmVkPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwibG9naW5Gb3JtLmVtYWlsLmVycm9ycy5lbWFpbFwiPmVtYWlsIGlzIGludmFsaWQ8L3NwYW4+PC9zbWFsbD5cblxuXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1pbnB1dGdyb3VwXCIgc3R5bGU9XCJtYXgtd2lkdGg6IDEwMDBweDsgIG1hcmdpbjogYXV0bztcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicC1pbnB1dGdyb3VwLWFkZG9uXCI+PGkgY2xhc3M9XCJwaSBwaS1sb2NrXCI+PC9pPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcElucHV0VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPHNtYWxsICpuZ0lmPVwibG9naW5Gb3JtLnBhc3N3b3JkLmludmFsaWQgJiYgaXNTdWJtaXR0ZWRcIiBjbGFzcz1cInAtZXJyb3JcIj5UaGUgcGFzc3dvcmQgbXVzdCBoYXZlIGF0IGxlYXN0IDggY2hhcmFjdGVyczwvc21hbGw+XG5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWlucHV0Z3JvdXBcIiBzdHlsZT1cIm1heC13aWR0aDogMTAwMHB4OyAgbWFyZ2luOiBhdXRvO1wiID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicC1pbnB1dGdyb3VwLWFkZG9uXCI+PGkgY2xhc3M9XCJwaSBwaS1sb2NrXCI+PC9pPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwicGFzc3dvcmQyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBJbnB1dFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJ1c2VyLnBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzbWFsbCAqbmdJZj1cImxvZ2luRm9ybS5wYXNzd29yZC5pbnZhbGlkICYmIGlzU3VibWl0dGVkXCIgY2xhc3M9XCJwLWVycm9yXCI+UGFzc3dvcmQgaXMgcmVxdWlyZWQ8L3NtYWxsPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCIgPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJtYXgtd2lkdGg6IDEwMDBweDsgIG1hcmdpbjogYXV0bztcIj48cC1idXR0b24gbGFiZWw9XCJTdWJtaXRcIiBzdHlsZUNsYXNzPVwiZnVsbC1idG5cIiAob25DbGljayk9XCJvblN1Ym1pdCgpXCIgID48L3AtYnV0dG9uPjwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgIGhyZWY9XCIjbG9naW5cIj5BbHJlYWR5IFJlZ2lzdGVyZWQ/PC9hPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiICpuZ0lmPVwiaXNTdWJtaXR0ZWQgJiYgYXV0aEVycm9yXCIgPlxuICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cInAtZXJyb3JcIiBzdHlsZT1cImZvbnQtc2l6ZTogNDBweDsgZm9udC13ZWlnaHQ6IDgwMFwiPnt7YXV0aE1lc3NhZ2V9fTwvc21hbGw+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG5cbiJdfQ==