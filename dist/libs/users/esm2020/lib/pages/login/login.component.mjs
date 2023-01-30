import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LocalstorageService } from '../../services/localstorage.service';
import { Location } from '@angular/common';
import { MessageService } from 'primeng/api';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../../services/auth.service";
import * as i3 from "../../services/localstorage.service";
import * as i4 from "@angular/common";
import * as i5 from "primeng/api";
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
    i0.ɵɵelementStart(0, "small", 20);
    i0.ɵɵtemplate(1, LoginComponent_small_13_span_1_Template, 2, 0, "span", 21);
    i0.ɵɵtemplate(2, LoginComponent_small_13_span_2_Template, 2, 0, "span", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.loginForm.email.errors.required);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.loginForm.email.errors.email);
} }
function LoginComponent_small_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 20);
    i0.ɵɵtext(1, "Password is required");
    i0.ɵɵelementEnd();
} }
function LoginComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7)(1, "small", 20);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.authMessage);
} }
const _c0 = function () { return { "padding": "8px !important" }; };
const _c1 = function () { return { "width": "160px" }; };
export class LoginComponent {
    constructor(formBuilder, auth, localstorageService, 
    //   private authService: SocialAuthService,
    location, messageService) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.localstorageService = localstorageService;
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
        this.auth.google(response['credential']).subscribe((data) => {
            console.log(data);
            localStorage.setItem("authToken", data.token);
            localStorage.setItem("email", data.email);
            this.localstorageService.setToken(data.token);
            this.location.back();
            this.messageService.add({
                severity: 'success',
                summary: 'Succesful login',
                detail: `Welcome back!`
            });
        });
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
    registerWithGoogle() {
        //  this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
        console.log("clicked");
    }
    get loginForm() {
        return this.loginFormGroup.controls;
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.AuthService), i0.ɵɵdirectiveInject(i3.LocalstorageService), i0.ɵɵdirectiveInject(i4.Location), i0.ɵɵdirectiveInject(i5.MessageService)); };
LoginComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LoginComponent, selectors: [["users-login"]], decls: 30, vars: 14, consts: [[1, "container", 2, "text-align", "center", "background-color", "white !important", "border", "1px solid", "margin-top", "30px"], [1, "container", "m-2", 2, "background-color", "white !important"], [1, "grid"], [1, "col-12", "p-0", "p-md-5", "container-fluid", 2, "background-color", "rgba(255, 255, 255, 0)"], [2, "margin-top", "20px"], [3, "formGroup"], [1, "grid", "mt-6", "container-fluid"], [1, "col-12"], [1, "p-inputgroup", 2, "max-width", "1000px", "margin", "auto"], [1, "p-inputgroup-addon"], [1, "pi", "pi-user"], ["type", "text", "formControlName", "email", "pInputText", "", "placeholder", "Email"], ["class", "p-error", 4, "ngIf"], [1, "pi", "pi-lock"], ["type", "password", "formControlName", "password", "pInputText", "", "placeholder", "password"], [2, "max-width", "1000px", "margin", "auto"], ["label", "Invia", "styleClass", "full-btn", 3, "loading", "onClick"], ["href", "/register", 2, "color", "rgb(70, 138, 255)", "text-decoration", "none"], ["id", "google-button", 1, ""], ["class", "col-12", 4, "ngIf"], [1, "p-error"], [4, "ngIf"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
        i0.ɵɵtext(5, "Accedi");
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
        i0.ɵɵelementStart(23, "div", 7)(24, "span");
        i0.ɵɵtext(25, "Non sei registrato? ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "a", 17);
        i0.ɵɵtext(27, "Clicca per registrarti");
        i0.ɵɵelementEnd()();
        i0.ɵɵelement(28, "div", 18);
        i0.ɵɵtemplate(29, LoginComponent_div_29_Template, 3, 1, "div", 19);
        i0.ɵɵelementEnd()()()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("formGroup", ctx.loginFormGroup);
        i0.ɵɵadvance(6);
        i0.ɵɵstyleMap(i0.ɵɵpureFunction0(11, _c0));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.loginForm.email.invalid && ctx.isSubmitted);
        i0.ɵɵadvance(5);
        i0.ɵɵstyleMap(i0.ɵɵpureFunction0(12, _c0));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.loginForm.password.invalid && ctx.isSubmitted);
        i0.ɵɵadvance(3);
        i0.ɵɵstyleMap(i0.ɵɵpureFunction0(13, _c1));
        i0.ɵɵproperty("loading", ctx.loading);
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngIf", ctx.isSubmitted && ctx.authError);
    } }, dependencies: [i4.NgIf, i6.InputText, i7.Button, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoginComponent, [{
        type: Component,
        args: [{ selector: 'users-login', template: "<div class=\" container \" style=\"text-align: center; background-color: white !important;border: 1px solid;    margin-top: 30px;\">\n\n\n    <div class=\"container  m-2\" style=\" background-color: white !important;\">\n        <div class=\"grid\">\n\n            <div class=\"col-12 p-0 p-md-5 container-fluid\" style=\"background-color: rgba(255, 255, 255, 0);\">\n                <h2 style=\"    margin-top: 20px;\">Accedi</h2>\n                <form [formGroup]=\"loginFormGroup\">\n                <div class=\"grid  mt-6 container-fluid\" >\n                    <div class=\"col-12\">\n                        <div class=\"p-inputgroup\"  style=\"max-width: 1000px; margin: auto;\">\n                            <span class=\"p-inputgroup-addon\"><i class=\"pi pi-user\"></i></span>\n                            <input type=\"text\" formControlName=\"email\" pInputText placeholder=\"Email\"    [style]=\"{'padding': '8px !important'}\">\n                        </div>\n                        <small *ngIf=\"loginForm.email.invalid && isSubmitted\" class=\"p-error\"\n                        ><span *ngIf=\"loginForm.email.errors.required\">email is required</span>\n                        <span *ngIf=\"loginForm.email.errors.email\">email is invalid</span></small>\n\n\n                    </div>\n                    <div class=\"col-12\">\n                        <div class=\"p-inputgroup\" style=\"max-width: 1000px;  margin: auto;\" >\n                            <span class=\"p-inputgroup-addon\"><i class=\"pi pi-lock\"></i></span>\n                            <input type=\"password\"\n                            [style]=\"{'padding': '8px !important'}\"\n                            formControlName=\"password\"\n                            pInputText\n                            placeholder=\"password\">\n                        </div>\n                        <small *ngIf=\"loginForm.password.invalid && isSubmitted\" class=\"p-error\">Password is required</small>\n\n                    </div>\n                    <div class=\"col-12\" >\n                        <div style=\"max-width: 1000px;  margin: auto;\"><p-button [loading]=\"loading\" label=\"Invia\" styleClass=\"full-btn\" (onClick)=\"onSubmit()\" [style]=\"{'width': '160px'}\" ></p-button></div>\n\n                    </div>\n                    <div class=\"col-12\">\n                      <span>Non sei registrato? </span><a  href=\"/register\" style=\"color: rgb(70, 138, 255); text-decoration: none;\">Clicca per registrarti</a>\n                    </div>\n\n                    <div class=\"\" id=\"google-button\"></div>\n                    <div class=\"col-12\" *ngIf=\"isSubmitted && authError\" >\n                        <small class=\"p-error\">{{authMessage}}</small>\n                    </div>\n\n            </div>\n        </form>\n        </div>\n            </div>\n    </div>\n\n" }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.AuthService }, { type: i3.LocalstorageService }, { type: i4.Location }, { type: i5.MessageService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy91c2Vycy9zcmMvbGliL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdXNlcnMvc3JjL2xpYi9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxXQUFXLEVBQWEsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzFELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7Ozs7Ozs7O0lDU3BCLDRCQUE4QztJQUFBLGlDQUFpQjtJQUFBLGlCQUFPOzs7SUFDdkUsNEJBQTJDO0lBQUEsZ0NBQWdCO0lBQUEsaUJBQU87OztJQUZsRSxpQ0FDQztJQUFBLDJFQUFzRTtJQUN2RSwyRUFBa0U7SUFBQSxpQkFBUTs7O0lBRGxFLGVBQXFDO0lBQXJDLDZEQUFxQztJQUN0QyxlQUFrQztJQUFsQywwREFBa0M7OztJQWF6QyxpQ0FBeUU7SUFBQSxvQ0FBb0I7SUFBQSxpQkFBUTs7O0lBWXpHLDhCQUFzRCxnQkFBQTtJQUMzQixZQUFlO0lBQUEsaUJBQVEsRUFBQTs7O0lBQXZCLGVBQWU7SUFBZix3Q0FBZTs7OztBRDVCOUQsTUFBTSxPQUFPLGNBQWM7SUFPekIsWUFBb0IsV0FBd0IsRUFDeEIsSUFBaUIsRUFDakIsbUJBQXdDO0lBQ25ELDRDQUE0QztJQUNqQyxRQUFrQixFQUNsQixj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LE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUM7SUFDdEMsQ0FBQzs7NEVBN0dVLGNBQWM7aUVBQWQsY0FBYztRQ2YzQiw4QkFBZ0ksYUFBQSxhQUFBLGFBQUEsWUFBQTtRQU85RSxzQkFBTTtRQUFBLGlCQUFLO1FBQzdDLCtCQUFtQyxhQUFBLGFBQUEsYUFBQSxlQUFBO1FBSVUseUJBQTBCO1FBQUEsaUJBQU87UUFDbEUsNkJBQXFIO1FBQ3pILGlCQUFNO1FBQ04sc0VBRTBFO1FBRzlFLGlCQUFNO1FBQ04sK0JBQW9CLGNBQUEsZUFBQTtRQUVxQix5QkFBMEI7UUFBQSxpQkFBTztRQUNsRSw2QkFJdUI7UUFDM0IsaUJBQU07UUFDTixzRUFBcUc7UUFFekcsaUJBQU07UUFDTiwrQkFBcUIsZUFBQSxvQkFBQTtRQUNnRyxrR0FBVyxjQUFVLElBQUM7UUFBK0IsaUJBQVcsRUFBQSxFQUFBO1FBR3JMLCtCQUFvQixZQUFBO1FBQ1oscUNBQW9CO1FBQUEsaUJBQU87UUFBQSw4QkFBOEU7UUFBQSx1Q0FBc0I7UUFBQSxpQkFBSSxFQUFBO1FBRzNJLDJCQUF1QztRQUN2QyxrRUFFTTtRQUVkLGlCQUFNLEVBQUEsRUFBQSxFQUFBLEVBQUEsRUFBQTs7UUF0Q0ksZUFBNEI7UUFBNUIsOENBQTRCO1FBS3VELGVBQXVDO1FBQXZDLDBDQUF1QztRQUVoSCxlQUE0QztRQUE1QyxxRUFBNEM7UUFVaEQsZUFBdUM7UUFBdkMsMENBQXVDO1FBS25DLGVBQStDO1FBQS9DLHdFQUErQztRQUlpRixlQUE0QjtRQUE1QiwwQ0FBNEI7UUFBM0cscUNBQW1CO1FBUTNELGVBQThCO1FBQTlCLHVEQUE4Qjs7dUZEM0IxRCxjQUFjO2NBTjFCLFNBQVM7MkJBQ0UsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImRlY2xhcmUgdmFyIGdvb2dsZTogYW55O1xuaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IExvY2Fsc3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9sb2NhbHN0b3JhZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJ3ByaW1lbmcvYXBpJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndXNlcnMtbG9naW4nLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXM6IFtcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGxvZ2luRm9ybUdyb3VwOiBGb3JtR3JvdXA7XG4gIGlzU3VibWl0dGVkID0gZmFsc2U7XG4gIGF1dGhFcnJvciA9IGZhbHNlO1xuICBsb2FkaW5nOmJvb2xlYW4gPSBmYWxzZTtcbiAgYXV0aE1lc3NhZ2UgPSBcIkVtYWlsIG9yIHBhc3N3b3JkIGlzIHdyb25nXCI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgYXV0aDogQXV0aFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgbG9jYWxzdG9yYWdlU2VydmljZTogTG9jYWxzdG9yYWdlU2VydmljZSxcbiAgICAgICAgICAgLy8gICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBTb2NpYWxBdXRoU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sXG4gICAgICAgICAgICAgIHByaXZhdGUgbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlLCkgeyBcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5faW5pdExvZ2luRm9ybSgpO1xuICAgIGdvb2dsZS5hY2NvdW50cy5pZC5pbml0aWFsaXplKHtcbiAgICAgIGNsaWVudF9pZDogXCI5MDg4MDQ3NDk3MTMtOXE2N2tzbHJlZXJsdGFnOGpwc2k3dGFkZjg0NW1tczYuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb21cIixcbiAgICAgIGNhbGxiYWNrOiB0aGlzLmhhbmRsZUNyZWRlbnRpYWxSZXNwb25zZS5iaW5kKHRoaXMpLFxuICAgICAgYXV0b19zZWxlY3Q6IGZhbHNlLFxuICAgICAgY2FuY2VsX29uX3RhcF9vdXRzaWRlOiB0cnVlLFxuICBcbiAgICB9KTtcblxuICAgIGdvb2dsZS5hY2NvdW50cy5pZC5yZW5kZXJCdXR0b24oXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdvb2dsZS1idXR0b25cIiksXG4gICAgICAgIHsgdGhlbWU6IFwib3V0bGluZVwiLCBzaXplOiBcImxhcmdlXCIsIHdpZHRoOiBcIjEwMCVcIiB9XG4gICAgICApO1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgZ29vZ2xlLmFjY291bnRzLmlkLnByb21wdCgobm90aWZpY2F0aW9uOiBQcm9tcHRNb21lbnROb3RpZmljYXRpb24pID0+IHt9KVxuLypcbiAgICB0aGlzLmF1dGhTZXJ2aWNlLmF1dGhTdGF0ZS5zdWJzY3JpYmUodXNlciA9PiB7XG4gICAgICB0aGlzLnVzZXIgPSB1c2VyO1xuICAgICAgY29uc29sZS5sb2codXNlcik7XG4gICAgfSk7XG4gICAgKi9cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZUNyZWRlbnRpYWxSZXNwb25zZShyZXNwb25zZTogYW55KSB7XG4gICAgLy8gSGVyZSB3aWxsIGJlIHlvdXIgcmVzcG9uc2UgZnJvbSBHb29nbGUuXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgIHRoaXMuYXV0aC5nb29nbGUocmVzcG9uc2VbJ2NyZWRlbnRpYWwnXSkuc3Vic2NyaWJlKChkYXRhKSA9PntcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImF1dGhUb2tlblwiLCBkYXRhLnRva2VuKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZW1haWxcIiwgZGF0YS5lbWFpbCk7XG4gICAgICB0aGlzLmxvY2Fsc3RvcmFnZVNlcnZpY2Uuc2V0VG9rZW4oZGF0YS50b2tlbik7XG4gICAgICB0aGlzLmxvY2F0aW9uLmJhY2soKTtcbiAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuYWRkKHtcbiAgICAgICAgc2V2ZXJpdHk6ICdzdWNjZXNzJyxcbiAgICAgICAgc3VtbWFyeTogJ1N1Y2Nlc2Z1bCBsb2dpbicsXG4gICAgICAgIGRldGFpbDogYFdlbGNvbWUgYmFjayFgXG4gICAgICB9KTtcbiAgICAgIFxuICAgIH0pXG4gIH1cblxuICBwcml2YXRlIF9pbml0TG9naW5Gb3JtKCkge1xuICAgIHRoaXMubG9naW5Gb3JtR3JvdXAgPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIGVtYWlsOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLmVtYWlsXV0sXG4gICAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgIH0pO1xuICB9XG5cblxuICBvblN1Ym1pdCgpIHtcbiAgICB0aGlzLmlzU3VibWl0dGVkID0gdHJ1ZTtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMubG9naW5Gb3JtR3JvdXAuaW52YWxpZCl7XG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9IFxuXG4gICAgdGhpcy5hdXRoLmxvZ2luKHRoaXMubG9naW5Gb3JtLmVtYWlsLnZhbHVlLCB0aGlzLmxvZ2luRm9ybS5wYXNzd29yZC52YWx1ZSkuc3Vic2NyaWJlKFxuICAgICAgKHVzZXIpID0+IHtcbiAgICAgICAgdGhpcy5hdXRoRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhdXRoVG9rZW5cIiwgdXNlci50b2tlbik7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZW1haWxcIiwgdXNlci5lbWFpbCk7XG4gICAgICAgIHRoaXMubG9jYWxzdG9yYWdlU2VydmljZS5zZXRUb2tlbih1c2VyLnRva2VuKTtcbiAgICAgICAgdGhpcy5sb2NhdGlvbi5iYWNrKCk7XG4gICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuYWRkKHtcbiAgICAgICAgICBzZXZlcml0eTogJ3N1Y2Nlc3MnLFxuICAgICAgICAgIHN1bW1hcnk6ICdTdWNjZXNmdWwgbG9naW4nLFxuICAgICAgICAgIGRldGFpbDogYFdlbGNvbWUgYmFjayFgXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGhpcy5hdXRoRXJyb3IgPSB0cnVlO1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgaWYgKGVycm9yLnN0YXR1cyAhPT0gNDAwKSB7XG4gICAgICAgICAgdGhpcy5hdXRoTWVzc2FnZSA9ICdFcnJvciBpbiB0aGUgU2VydmVyLCBwbGVhc2UgdHJ5IGFnYWluIGxhdGVyISc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgcHVibGljIHJlZ2lzdGVyV2l0aEdvb2dsZSgpOiB2b2lkIHtcbiAgLy8gIHRoaXMuYXV0aFNlcnZpY2Uuc2lnbkluKEdvb2dsZUxvZ2luUHJvdmlkZXIuUFJPVklERVJfSUQpO1xuICBjb25zb2xlLmxvZyhcImNsaWNrZWRcIilcbiAgfVxuXG4gIGdldCBsb2dpbkZvcm0oKXtcbiAgICByZXR1cm4gdGhpcy5sb2dpbkZvcm1Hcm91cC5jb250cm9scztcbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwiIGNvbnRhaW5lciBcIiBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlcjsgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtib3JkZXI6IDFweCBzb2xpZDsgICAgbWFyZ2luLXRvcDogMzBweDtcIj5cblxuXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciAgbS0yXCIgc3R5bGU9XCIgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImdyaWRcIj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBwLTAgcC1tZC01IGNvbnRhaW5lci1mbHVpZFwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcIj5cbiAgICAgICAgICAgICAgICA8aDIgc3R5bGU9XCIgICAgbWFyZ2luLXRvcDogMjBweDtcIj5BY2NlZGk8L2gyPlxuICAgICAgICAgICAgICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwibG9naW5Gb3JtR3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZCAgbXQtNiBjb250YWluZXItZmx1aWRcIiA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWlucHV0Z3JvdXBcIiAgc3R5bGU9XCJtYXgtd2lkdGg6IDEwMDBweDsgbWFyZ2luOiBhdXRvO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicC1pbnB1dGdyb3VwLWFkZG9uXCI+PGkgY2xhc3M9XCJwaSBwaS11c2VyXCI+PC9pPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBmb3JtQ29udHJvbE5hbWU9XCJlbWFpbFwiIHBJbnB1dFRleHQgcGxhY2Vob2xkZXI9XCJFbWFpbFwiICAgIFtzdHlsZV09XCJ7J3BhZGRpbmcnOiAnOHB4ICFpbXBvcnRhbnQnfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgKm5nSWY9XCJsb2dpbkZvcm0uZW1haWwuaW52YWxpZCAmJiBpc1N1Ym1pdHRlZFwiIGNsYXNzPVwicC1lcnJvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+PHNwYW4gKm5nSWY9XCJsb2dpbkZvcm0uZW1haWwuZXJyb3JzLnJlcXVpcmVkXCI+ZW1haWwgaXMgcmVxdWlyZWQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImxvZ2luRm9ybS5lbWFpbC5lcnJvcnMuZW1haWxcIj5lbWFpbCBpcyBpbnZhbGlkPC9zcGFuPjwvc21hbGw+XG5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtaW5wdXRncm91cFwiIHN0eWxlPVwibWF4LXdpZHRoOiAxMDAwcHg7ICBtYXJnaW46IGF1dG87XCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicC1pbnB1dGdyb3VwLWFkZG9uXCI+PGkgY2xhc3M9XCJwaSBwaS1sb2NrXCI+PC9pPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc3R5bGVdPVwieydwYWRkaW5nJzogJzhweCAhaW1wb3J0YW50J31cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwSW5wdXRUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgKm5nSWY9XCJsb2dpbkZvcm0ucGFzc3dvcmQuaW52YWxpZCAmJiBpc1N1Ym1pdHRlZFwiIGNsYXNzPVwicC1lcnJvclwiPlBhc3N3b3JkIGlzIHJlcXVpcmVkPC9zbWFsbD5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJtYXgtd2lkdGg6IDEwMDBweDsgIG1hcmdpbjogYXV0bztcIj48cC1idXR0b24gW2xvYWRpbmddPVwibG9hZGluZ1wiIGxhYmVsPVwiSW52aWFcIiBzdHlsZUNsYXNzPVwiZnVsbC1idG5cIiAob25DbGljayk9XCJvblN1Ym1pdCgpXCIgW3N0eWxlXT1cInsnd2lkdGgnOiAnMTYwcHgnfVwiID48L3AtYnV0dG9uPjwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Tm9uIHNlaSByZWdpc3RyYXRvPyA8L3NwYW4+PGEgIGhyZWY9XCIvcmVnaXN0ZXJcIiBzdHlsZT1cImNvbG9yOiByZ2IoNzAsIDEzOCwgMjU1KTsgdGV4dC1kZWNvcmF0aW9uOiBub25lO1wiPkNsaWNjYSBwZXIgcmVnaXN0cmFydGk8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIiBpZD1cImdvb2dsZS1idXR0b25cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiICpuZ0lmPVwiaXNTdWJtaXR0ZWQgJiYgYXV0aEVycm9yXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwicC1lcnJvclwiPnt7YXV0aE1lc3NhZ2V9fTwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4iXX0=