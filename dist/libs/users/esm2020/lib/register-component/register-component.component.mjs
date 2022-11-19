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
            sessionStorage.setItem("authToken", response.token);
            sessionStorage.setItem("email", response.user);
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
        args: [{ selector: 'eshop-frontend-register-component', template: "<div class=\" container-fluid p-0\" style=\"text-align: center;\">\r\n  <div class=\"container-fluid  login-register\" >\r\n      <div class=\"grid\">\r\n<!--             <div class=\"col-6\">\r\n              <img src=\"assets/images/login-photo.png\" alt=\"\">\r\n          </div> -->\r\n          <div class=\"col-12 p-0 p-md-5 container-fluid\" style=\"background-color: rgba(255, 255, 255, 0);\">\r\n              <h2 style=\"    margin-top: 20px;\">Register</h2>\r\n              <form [formGroup]=\"loginFormGroup\">\r\n              <div class=\"grid  mt-6 container-fluid\" >\r\n                  <div class=\"col-12\">\r\n                      <div class=\"p-inputgroup\"  style=\"max-width: 1000px; margin: auto;\">\r\n                          <span class=\"p-inputgroup-addon\"><i class=\"pi pi-user\"></i></span>\r\n                          <input type=\"text\" formControlName=\"email\" pInputText placeholder=\"Email\" [(ngModel)]=\"user.email\">\r\n                      </div>\r\n                      <small *ngIf=\"loginForm.email.invalid && isSubmitted\" class=\"p-error\"\r\n                      ><span *ngIf=\"loginForm.email.errors.required\">email is required</span>\r\n                      <span *ngIf=\"loginForm.email.errors.email\">email is invalid</span></small>\r\n\r\n\r\n                  </div>\r\n                  <div class=\"col-12\">\r\n                      <div class=\"p-inputgroup\" style=\"max-width: 1000px;  margin: auto;\" >\r\n                          <span class=\"p-inputgroup-addon\"><i class=\"pi pi-lock\"></i></span>\r\n                          <input type=\"password\"\r\n                          formControlName=\"password\"\r\n                          pInputText\r\n                          placeholder=\"password\">\r\n                      </div>\r\n                      <small *ngIf=\"loginForm.password.invalid && isSubmitted\" class=\"p-error\">The password must have at least 8 characters</small>\r\n\r\n                  </div>\r\n\r\n                  <div class=\"col-12\">\r\n                    <div class=\"p-inputgroup\" style=\"max-width: 1000px;  margin: auto;\" >\r\n                        <span class=\"p-inputgroup-addon\"><i class=\"pi pi-lock\"></i></span>\r\n                        <input type=\"password\"\r\n                        formControlName=\"password2\"\r\n                        pInputText\r\n                        placeholder=\"password\"\r\n                        [(ngModel)]=\"user.password\"\r\n                        >\r\n                    </div>\r\n                    <small *ngIf=\"loginForm.password.invalid && isSubmitted\" class=\"p-error\">Password is required</small>\r\n\r\n                </div>\r\n                  <div class=\"col-12\" >\r\n                      <div style=\"max-width: 1000px;  margin: auto;\"><p-button label=\"Submit\" styleClass=\"full-btn\" (onClick)=\"onSubmit()\"  ></p-button></div>\r\n\r\n                  </div>\r\n                  <div class=\"col-12\">\r\n                    <a  href=\"#login\">Already Registered?</a>\r\n                  </div>\r\n\r\n\r\n                  <div class=\"col-12\" *ngIf=\"isSubmitted && authError\" >\r\n                      <small class=\"p-error\" style=\"font-size: 40px; font-weight: 800\">{{authMessage}}</small>\r\n                  </div>\r\n\r\n          </div>\r\n      </form>\r\n      </div>\r\n          </div>\r\n  </div>\r\n</div>\r\n\r\n", styles: [""] }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.AuthService }, { type: i3.LocalstorageService }, { type: i4.Router }, { type: i5.Location }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXItY29tcG9uZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdXNlcnMvc3JjL2xpYi9yZWdpc3Rlci1jb21wb25lbnQvcmVnaXN0ZXItY29tcG9uZW50LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdXNlcnMvc3JjL2xpYi9yZWdpc3Rlci1jb21wb25lbnQvcmVnaXN0ZXItY29tcG9uZW50LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLFdBQVcsRUFBYSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7Ozs7Ozs7SUNTcEIsNEJBQThDO0lBQUEsaUNBQWlCO0lBQUEsaUJBQU87OztJQUN2RSw0QkFBMkM7SUFBQSxnQ0FBZ0I7SUFBQSxpQkFBTzs7O0lBRmxFLGlDQUNDO0lBQUEsdUZBQXNFO0lBQ3ZFLHVGQUFrRTtJQUFBLGlCQUFROzs7SUFEbEUsZUFBcUM7SUFBckMsNkRBQXFDO0lBQ3RDLGVBQWtDO0lBQWxDLDBEQUFrQzs7O0lBWXpDLGlDQUF5RTtJQUFBLDREQUE0QztJQUFBLGlCQUFROzs7SUFjL0gsaUNBQXlFO0lBQUEsb0NBQW9CO0lBQUEsaUJBQVE7OztJQVl2Ryw4QkFBc0QsZ0JBQUE7SUFDZSxZQUFlO0lBQUEsaUJBQVEsRUFBQTs7O0lBQXZCLGVBQWU7SUFBZix3Q0FBZTs7QUR4Q3RHLE1BQU0sT0FBTywwQkFBMEI7SUFPckMsWUFBb0IsV0FBd0IsRUFDbEMsV0FBd0IsRUFDZCxtQkFBd0MsRUFDeEMsTUFBYyxFQUNkLFFBQWtCO1FBSmxCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ2xDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ2Qsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQVR0QyxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGdCQUFXLEdBQUcsNEJBQTRCLENBQUM7UUFRN0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFZCxRQUFRO1FBQ04sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFTyxjQUFjO1FBQ3BCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDM0MsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEQsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUQsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7U0FDckMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdELFFBQVE7UUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekUsSUFBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxFQUFDO1lBRXhGLE9BQU87U0FDVjtRQUVELElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUl4QyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUM1QyxJQUFJLENBQUMsRUFBRTtZQUNMLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQztZQUNwQixjQUFjLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEQsY0FBYyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDekIsQ0FBQyxFQUNELEtBQUssQ0FBQyxFQUFFO1lBQ04sSUFBSSxDQUFDLFdBQVcsR0FBRyxrQkFBa0IsQ0FBQztZQUN0QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN4QixDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFDRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFDRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDO0lBQ3RDLENBQUM7O29HQS9EVSwwQkFBMEI7NkVBQTFCLDBCQUEwQjtRQ2hCdkMsOEJBQThELGFBQUEsYUFBQSxhQUFBLFlBQUE7UUFPZCx3QkFBUTtRQUFBLGlCQUFLO1FBQy9DLCtCQUFtQyxhQUFBLGFBQUEsYUFBQSxlQUFBO1FBSVUseUJBQTBCO1FBQUEsaUJBQU87UUFDbEUsa0NBQW1HO1FBQXpCLHdKQUF3QjtRQUFsRyxpQkFBbUcsRUFBQTtRQUV2RyxrRkFFMEU7UUFHOUUsaUJBQU07UUFDTiwrQkFBb0IsY0FBQSxlQUFBO1FBRXFCLHlCQUEwQjtRQUFBLGlCQUFPO1FBQ2xFLDZCQUd1QjtRQUMzQixpQkFBTTtRQUNOLGtGQUE2SDtRQUVqSSxpQkFBTTtRQUVOLCtCQUFvQixjQUFBLGVBQUE7UUFFbUIseUJBQTBCO1FBQUEsaUJBQU87UUFDbEUsa0NBS0M7UUFERCwySkFBMkI7UUFKM0IsaUJBS0MsRUFBQTtRQUVMLGtGQUFxRztRQUV6RyxpQkFBTTtRQUNKLCtCQUFxQixlQUFBLG9CQUFBO1FBQzZFLDhHQUFXLGNBQVUsSUFBQztRQUFHLGlCQUFXLEVBQUEsRUFBQTtRQUd0SSwrQkFBb0IsYUFBQTtRQUNBLG9DQUFtQjtRQUFBLGlCQUFJLEVBQUE7UUFJM0MsOEVBRU07UUFFZCxpQkFBTSxFQUFBLEVBQUEsRUFBQSxFQUFBLEVBQUE7O1FBbkRJLGVBQTRCO1FBQTVCLDhDQUE0QjtRQUtvRCxlQUF3QjtRQUF4Qix3Q0FBd0I7UUFFOUYsZUFBNEM7UUFBNUMscUVBQTRDO1FBYzVDLGVBQStDO1FBQS9DLHdFQUErQztRQVdyRCxlQUEyQjtRQUEzQiwyQ0FBMkI7UUFHdkIsZUFBK0M7UUFBL0Msd0VBQStDO1FBWXBDLGVBQThCO1FBQTlCLHVEQUE4Qjs7dUZEdkN4RCwwQkFBMEI7Y0FMdEMsU0FBUzsyQkFDRSxtQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL21vZGVscy91c2VyJztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2NhbHN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbG9jYWxzdG9yYWdlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZXNob3AtZnJvbnRlbmQtcmVnaXN0ZXItY29tcG9uZW50JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcmVnaXN0ZXItY29tcG9uZW50LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9yZWdpc3Rlci1jb21wb25lbnQuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJDb21wb25lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGxvZ2luRm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcbiAgaXNTdWJtaXR0ZWQgPSBmYWxzZTtcclxuICBhdXRoRXJyb3IgPSBmYWxzZTtcclxuICBhdXRoTWVzc2FnZSA9IFwiRW1haWwgb3IgcGFzc3dvcmQgaXMgd3JvbmdcIjtcclxuICB1c2VyOiBVc2VyO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcclxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgbG9jYWxzdG9yYWdlU2VydmljZTogTG9jYWxzdG9yYWdlU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xyXG4gICAgICAgICAgICAgICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5faW5pdExvZ2luRm9ybSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfaW5pdExvZ2luRm9ybSgpIHtcclxuICAgIHRoaXMubG9naW5Gb3JtR3JvdXAgPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgZW1haWw6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMuZW1haWxdXSxcclxuICAgICAgcGFzc3dvcmQ6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDgpXV0sXHJcbiAgICAgIHBhc3N3b3JkMjogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgb25TdWJtaXQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInN1Ym1pdHRlZFwiKTtcclxuICAgIHRoaXMuaXNTdWJtaXR0ZWQgPSB0cnVlO1xyXG4gICAgY29uc29sZS5sb2coXCJlbWFpbCA9IFwiICsgdGhpcy51c2VyLmVtYWlsKTtcclxuICAgIGNvbnNvbGUubG9nKFwicGFzc3dvcmQgPSBcIiArIHRoaXMubG9naW5Gb3JtR3JvdXAuZ2V0KFwicGFzc3dvcmRcIikudmFsdWUpO1xyXG4gICAgY29uc29sZS5sb2coXCJwYXNzd29yZDIgPSBcIiArIHRoaXMubG9naW5Gb3JtR3JvdXAuZ2V0KFwicGFzc3dvcmQyXCIpLnZhbHVlKTtcclxuICAgIGlmKHRoaXMubG9naW5Gb3JtR3JvdXAuZ2V0KFwicGFzc3dvcmRcIikudmFsdWUgIT09IHRoaXMubG9naW5Gb3JtR3JvdXAuZ2V0KFwicGFzc3dvcmQyXCIpLnZhbHVlKXtcclxuXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmxvZ2luRm9ybUdyb3VwLmludmFsaWQpIHJldHVybjtcclxuXHJcblxyXG5cclxuICAgIHRoaXMuYXV0aFNlcnZpY2UucmVnaXN0ZXIodGhpcy51c2VyKS5zdWJzY3JpYmUoXHJcbiAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IGRhdGE7XHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImF1dGhUb2tlblwiLCByZXNwb25zZS50b2tlbik7XHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImVtYWlsXCIsIHJlc3BvbnNlLnVzZXIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLnVzZXIgKyBcIiAgXCIgKyByZXNwb25zZS50b2tlbik7XHJcbiAgICAgICAgdGhpcy5sb2NhdGlvbi5oaXN0b3J5R28oLTIpO1xyXG4gICAgICAgIHRoaXMuYXV0aEVycm9yID0gZmFsc2U7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yID0+IHtcclxuICAgICAgICB0aGlzLmF1dGhNZXNzYWdlID0gXCJBbiBlcnJvciBvY2N1cmVkXCI7XHJcbiAgICAgICAgdGhpcy5hdXRoRXJyb3IgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuICBnb1RvTG9naW4oKXtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2xvZ2luJ10pO1xyXG4gIH1cclxuICBnZXQgbG9naW5Gb3JtKCl7XHJcbiAgICByZXR1cm4gdGhpcy5sb2dpbkZvcm1Hcm91cC5jb250cm9scztcclxuICB9XHJcblxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCIgY29udGFpbmVyLWZsdWlkIHAtMFwiIHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyO1wiPlxyXG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWQgIGxvZ2luLXJlZ2lzdGVyXCIgPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZ3JpZFwiPlxyXG48IS0tICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNlwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9sb2dpbi1waG90by5wbmdcIiBhbHQ9XCJcIj5cclxuICAgICAgICAgIDwvZGl2PiAtLT5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgcC0wIHAtbWQtNSBjb250YWluZXItZmx1aWRcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XCI+XHJcbiAgICAgICAgICAgICAgPGgyIHN0eWxlPVwiICAgIG1hcmdpbi10b3A6IDIwcHg7XCI+UmVnaXN0ZXI8L2gyPlxyXG4gICAgICAgICAgICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwibG9naW5Gb3JtR3JvdXBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZCAgbXQtNiBjb250YWluZXItZmx1aWRcIiA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWlucHV0Z3JvdXBcIiAgc3R5bGU9XCJtYXgtd2lkdGg6IDEwMDBweDsgbWFyZ2luOiBhdXRvO1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicC1pbnB1dGdyb3VwLWFkZG9uXCI+PGkgY2xhc3M9XCJwaSBwaS11c2VyXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBmb3JtQ29udHJvbE5hbWU9XCJlbWFpbFwiIHBJbnB1dFRleHQgcGxhY2Vob2xkZXI9XCJFbWFpbFwiIFsobmdNb2RlbCldPVwidXNlci5lbWFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgKm5nSWY9XCJsb2dpbkZvcm0uZW1haWwuaW52YWxpZCAmJiBpc1N1Ym1pdHRlZFwiIGNsYXNzPVwicC1lcnJvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+PHNwYW4gKm5nSWY9XCJsb2dpbkZvcm0uZW1haWwuZXJyb3JzLnJlcXVpcmVkXCI+ZW1haWwgaXMgcmVxdWlyZWQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImxvZ2luRm9ybS5lbWFpbC5lcnJvcnMuZW1haWxcIj5lbWFpbCBpcyBpbnZhbGlkPC9zcGFuPjwvc21hbGw+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWlucHV0Z3JvdXBcIiBzdHlsZT1cIm1heC13aWR0aDogMTAwMHB4OyAgbWFyZ2luOiBhdXRvO1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtaW5wdXRncm91cC1hZGRvblwiPjxpIGNsYXNzPVwicGkgcGktbG9ja1wiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBJbnB1dFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCAqbmdJZj1cImxvZ2luRm9ybS5wYXNzd29yZC5pbnZhbGlkICYmIGlzU3VibWl0dGVkXCIgY2xhc3M9XCJwLWVycm9yXCI+VGhlIHBhc3N3b3JkIG11c3QgaGF2ZSBhdCBsZWFzdCA4IGNoYXJhY3RlcnM8L3NtYWxsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtaW5wdXRncm91cFwiIHN0eWxlPVwibWF4LXdpZHRoOiAxMDAwcHg7ICBtYXJnaW46IGF1dG87XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtaW5wdXRncm91cC1hZGRvblwiPjxpIGNsYXNzPVwicGkgcGktbG9ja1wiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJwYXNzd29yZDJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwSW5wdXRUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInVzZXIucGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNtYWxsICpuZ0lmPVwibG9naW5Gb3JtLnBhc3N3b3JkLmludmFsaWQgJiYgaXNTdWJtaXR0ZWRcIiBjbGFzcz1cInAtZXJyb3JcIj5QYXNzd29yZCBpcyByZXF1aXJlZDwvc21hbGw+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwibWF4LXdpZHRoOiAxMDAwcHg7ICBtYXJnaW46IGF1dG87XCI+PHAtYnV0dG9uIGxhYmVsPVwiU3VibWl0XCIgc3R5bGVDbGFzcz1cImZ1bGwtYnRuXCIgKG9uQ2xpY2spPVwib25TdWJtaXQoKVwiICA+PC9wLWJ1dHRvbj48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgIGhyZWY9XCIjbG9naW5cIj5BbHJlYWR5IFJlZ2lzdGVyZWQ/PC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCIgKm5nSWY9XCJpc1N1Ym1pdHRlZCAmJiBhdXRoRXJyb3JcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJwLWVycm9yXCIgc3R5bGU9XCJmb250LXNpemU6IDQwcHg7IGZvbnQtd2VpZ2h0OiA4MDBcIj57e2F1dGhNZXNzYWdlfX08L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbiJdfQ==