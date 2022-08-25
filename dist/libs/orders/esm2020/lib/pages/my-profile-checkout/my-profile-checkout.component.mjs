import { Component } from '@angular/core';
import { User23 } from '../../models/user23';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
function MyProfileCheckOutComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 32);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.errorMsg);
} }
const _c0 = function () { return { standalone: true }; };
export class MyProfileCheckOutComponent {
    constructor() {
        this.displayError = false;
        this.user = new User23();
        console.log(this.parseJwt(sessionStorage.getItem("authToken")));
        let data = this.parseJwt(sessionStorage.getItem("authToken"));
        console.log("data = " + data.country);
        this.user.country = data.country;
        this.user.address1 = data['address1'];
        this.user.address2 = data.address2;
        this.user.date = data.dateOfBirth;
        this.user.email = data.email;
        this.user.phone = data.phone;
        this.user.postalCode = data.postalCode;
        this.user.sex = data.gender;
        this.user.fName = data.fName;
        this.user.lName = data.lName;
        this.user.region = data.region;
        this.user.city = data.city;
        this.user.state = data.state;
        this.user.prefix = data.prefix;
    }
    parseJwt(token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return JSON.parse(jsonPayload);
    }
    ;
    logout() {
        console.log("logout");
        sessionStorage.removeItem("authToken");
        sessionStorage.removeItem("email");
        history.back();
    }
    ngOnInit() {
    }
}
MyProfileCheckOutComponent.ɵfac = function MyProfileCheckOutComponent_Factory(t) { return new (t || MyProfileCheckOutComponent)(); };
MyProfileCheckOutComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MyProfileCheckOutComponent, selectors: [["eshop-frontend-checkout-my-profile"]], decls: 58, vars: 37, consts: [[1, "container-fluid"], [1, "text-center"], [1, "row", "jumbotron"], [1, "col-sm-6", "form-group"], ["for", "name-f"], ["type", "text", "name", "fname", "id", "name-f", "placeholder", "Enter your first name.", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "name-l"], ["type", "text", "name", "lname", "id", "name-l", "placeholder", "Enter your last name.", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "State"], ["type", "address", "name", "State", "id", "State", "placeholder", "Enter your province/district/region name", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "col-sm-4", "form-group"], ["type", "address", "name", "State", "id", "State", "placeholder", "Enter your city name", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "col-sm-2", "form-group"], ["for", "zip"], ["type", "zip", "name", "Zip", "id", "zip", "placeholder", "Postal-Code.", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "address-1"], ["type", "address", "name", "Locality", "id", "address-1", "placeholder", "Locality/House/Street no.", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "address-2"], ["type", "address", "name", "address", "id", "address-2", "placeholder", "eventual other informations", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "Country"], ["type", "address", "name", "Country", "id", "Country", "placeholder", "Country", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "Date"], ["type", "Date", "name", "dob", "id", "Date", "placeholder", "", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "sex"], ["type", "sex", "name", "sex", "id", "sex", "placeholder", "sex", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "cod"], ["type", "prefix", "name", "prefix", "id", "prefix", "placeholder", "prefix", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "tel"], ["type", "tel", "name", "phone", "id", "tel", "placeholder", "Enter Your Contact Number", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["class", "error", 4, "ngIf"], [1, "col-sm-12", "form-group", "mb-0", "mt-2", 2, "display", "flex", "justify-content", "space-between"], [1, "btn", "btn-primary", "float-right"], [1, "error"]], template: function MyProfileCheckOutComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "form")(2, "h2", 1);
        i0.ɵɵtext(3, "Your Shipping Address");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 2)(5, "div", 3)(6, "label", 4);
        i0.ɵɵtext(7, "First Name");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "input", 5);
        i0.ɵɵlistener("ngModelChange", function MyProfileCheckOutComponent_Template_input_ngModelChange_8_listener($event) { return ctx.user.fName = $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(9, "div", 3)(10, "label", 6);
        i0.ɵɵtext(11, "Last name");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "input", 7);
        i0.ɵɵlistener("ngModelChange", function MyProfileCheckOutComponent_Template_input_ngModelChange_12_listener($event) { return ctx.user.lName = $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(13, "div", 3)(14, "label", 8);
        i0.ɵɵtext(15, "Province/region");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "input", 9);
        i0.ɵɵlistener("ngModelChange", function MyProfileCheckOutComponent_Template_input_ngModelChange_16_listener($event) { return ctx.user.region = $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(17, "div", 10)(18, "label", 8);
        i0.ɵɵtext(19, "City");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "input", 11);
        i0.ɵɵlistener("ngModelChange", function MyProfileCheckOutComponent_Template_input_ngModelChange_20_listener($event) { return ctx.user.city = $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(21, "div", 12)(22, "label", 13);
        i0.ɵɵtext(23, "Postal-Code");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(24, "input", 14);
        i0.ɵɵlistener("ngModelChange", function MyProfileCheckOutComponent_Template_input_ngModelChange_24_listener($event) { return ctx.user.postalCode = $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(25, "div", 3)(26, "label", 15);
        i0.ɵɵtext(27, "Address Line-1");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(28, "input", 16);
        i0.ɵɵlistener("ngModelChange", function MyProfileCheckOutComponent_Template_input_ngModelChange_28_listener($event) { return ctx.user.address1 = $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(29, "div", 3)(30, "label", 17);
        i0.ɵɵtext(31, "Address Line-2");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(32, "input", 18);
        i0.ɵɵlistener("ngModelChange", function MyProfileCheckOutComponent_Template_input_ngModelChange_32_listener($event) { return ctx.user.address2 = $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(33, "div", 3)(34, "label", 19);
        i0.ɵɵtext(35, "Country");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(36, "input", 20);
        i0.ɵɵlistener("ngModelChange", function MyProfileCheckOutComponent_Template_input_ngModelChange_36_listener($event) { return ctx.user.country = $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(37, "div", 3)(38, "label", 21);
        i0.ɵɵtext(39, "Date Of Birth");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(40, "input", 22);
        i0.ɵɵlistener("ngModelChange", function MyProfileCheckOutComponent_Template_input_ngModelChange_40_listener($event) { return ctx.user.date = $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(41, "div", 3)(42, "label", 23);
        i0.ɵɵtext(43, "Gender");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(44, "input", 24);
        i0.ɵɵlistener("ngModelChange", function MyProfileCheckOutComponent_Template_input_ngModelChange_44_listener($event) { return ctx.user.sex = $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(45, "div", 12)(46, "label", 25);
        i0.ɵɵtext(47, "Country code");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(48, "input", 26);
        i0.ɵɵlistener("ngModelChange", function MyProfileCheckOutComponent_Template_input_ngModelChange_48_listener($event) { return ctx.user.prefix = $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(49, "div", 10)(50, "label", 27);
        i0.ɵɵtext(51, "Phone");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(52, "input", 28);
        i0.ɵɵlistener("ngModelChange", function MyProfileCheckOutComponent_Template_input_ngModelChange_52_listener($event) { return ctx.user.phone = $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(53, MyProfileCheckOutComponent_div_53_Template, 2, 1, "div", 29);
        i0.ɵɵelementStart(54, "div", 30)(55, "div")(56, "button", 31);
        i0.ɵɵtext(57, "Edit");
        i0.ɵɵelementEnd()()()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("ngModel", ctx.user.fName)("ngModelOptions", i0.ɵɵpureFunction0(25, _c0));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.user.lName)("ngModelOptions", i0.ɵɵpureFunction0(26, _c0));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.user.region)("ngModelOptions", i0.ɵɵpureFunction0(27, _c0));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.user.city)("ngModelOptions", i0.ɵɵpureFunction0(28, _c0));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.user.postalCode)("ngModelOptions", i0.ɵɵpureFunction0(29, _c0));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.user.address1)("ngModelOptions", i0.ɵɵpureFunction0(30, _c0));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.user.address2)("ngModelOptions", i0.ɵɵpureFunction0(31, _c0));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.user.country)("ngModelOptions", i0.ɵɵpureFunction0(32, _c0));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.user.date)("ngModelOptions", i0.ɵɵpureFunction0(33, _c0));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.user.sex)("ngModelOptions", i0.ɵɵpureFunction0(34, _c0));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.user.prefix)("ngModelOptions", i0.ɵɵpureFunction0(35, _c0));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.user.phone)("ngModelOptions", i0.ɵɵpureFunction0(36, _c0));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.displayError);
    } }, directives: [i1.ɵNgNoValidate, i1.NgControlStatusGroup, i1.NgForm, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel, i2.NgIf], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MyProfileCheckOutComponent, [{
        type: Component,
        args: [{ selector: 'eshop-frontend-checkout-my-profile', template: "<div class=\"container-fluid\">\r\n    <form>\r\n        <h2 class=\"text-center\">Your Shipping Address</h2>\r\n    <div class=\"row jumbotron\">\r\n        <div class=\"col-sm-6 form-group\">\r\n            <label for=\"name-f\" >First Name</label>\r\n            <input  [(ngModel)]=\"user.fName\"   [ngModelOptions]=\"{standalone: true}\" type=\"text\" class=\"form-control\" name=\"fname\" id=\"name-f\" placeholder=\"Enter your first name.\" disabled>\r\n        </div>\r\n        <div class=\"col-sm-6 form-group\">\r\n            <label for=\"name-l\"  >Last name</label>\r\n            <input   [(ngModel)]=\"user.lName\"   [ngModelOptions]=\"{standalone: true}\"  type=\"text\" class=\"form-control\" name=\"lname\" id=\"name-l\" placeholder=\"Enter your last name.\" disabled>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-sm-6 form-group\">\r\n            <label for=\"State\"  >Province/region</label>\r\n            <input  [(ngModel)]=\"user.region\"   [ngModelOptions]=\"{standalone: true}\"    type=\"address\" class=\"form-control\" name=\"State\" id=\"State\" placeholder=\"Enter your province/district/region name\" disabled>\r\n        </div>\r\n        <div class=\"col-sm-4 form-group\">\r\n            <label for=\"State\"  >City</label>\r\n            <input  [(ngModel)]=\"user.city\"   [ngModelOptions]=\"{standalone: true}\"    type=\"address\" class=\"form-control\" name=\"State\" id=\"State\" placeholder=\"Enter your city name\" disabled>\r\n        </div>\r\n        <div class=\"col-sm-2 form-group\">\r\n            <label for=\"zip\">Postal-Code</label>\r\n            <input   [(ngModel)]=\"user.postalCode\"   [ngModelOptions]=\"{standalone: true}\"     type=\"zip\" class=\"form-control\" name=\"Zip\" id=\"zip\" placeholder=\"Postal-Code.\" disabled>\r\n        </div>\r\n        <div class=\"col-sm-6 form-group\">\r\n            <label for=\"address-1\"  >Address Line-1</label>\r\n            <input  [(ngModel)]=\"user.address1\"   [ngModelOptions]=\"{standalone: true}\"     type=\"address\" class=\"form-control\" name=\"Locality\" id=\"address-1\" placeholder=\"Locality/House/Street no.\" disabled>\r\n        </div>\r\n        <div class=\"col-sm-6 form-group\">\r\n            <label for=\"address-2\"  >Address Line-2</label>\r\n            <input  [(ngModel)]=\"user.address2\"   [ngModelOptions]=\"{standalone: true}\"       type=\"address\" class=\"form-control\" name=\"address\" id=\"address-2\" placeholder=\"eventual other informations\" disabled>\r\n        </div>\r\n        <div class=\"col-sm-6 form-group\">\r\n            <label for=\"Country\">Country</label>\r\n            <input [(ngModel)]=\"user.country\"   [ngModelOptions]=\"{standalone: true}\"     type=\"address\" class=\"form-control\" name=\"Country\" id=\"Country\" placeholder=\"Country\" disabled>\r\n\r\n        </div>\r\n        <div class=\"col-sm-6 form-group\">\r\n            <label for=\"Date\">Date Of Birth</label>\r\n            <input  [(ngModel)]=\"user.date\"   [ngModelOptions]=\"{standalone: true}\"    type=\"Date\" name=\"dob\" class=\"form-control\" id=\"Date\" placeholder=\"\" disabled>\r\n        </div>\r\n        <div class=\"col-sm-6 form-group\">\r\n            <label for=\"sex\">Gender</label>\r\n            <input [(ngModel)]=\"user.sex\"   [ngModelOptions]=\"{standalone: true}\"     type=\"sex\" class=\"form-control\" name=\"sex\" id=\"sex\" placeholder=\"sex\" disabled>\r\n\r\n        </div>\r\n        <div class=\"col-sm-2 form-group\">\r\n            <label for=\"cod\">Country code</label>\r\n            <input  [(ngModel)]=\"user.prefix\"   [ngModelOptions]=\"{standalone: true}\"    type=\"prefix\" class=\"form-control\" name=\"prefix\" id=\"prefix\" placeholder=\"prefix\" disabled>\r\n        </div>\r\n        <div class=\"col-sm-4 form-group\">\r\n            <label for=\"tel\">Phone</label>\r\n            <input  [(ngModel)]=\"user.phone\"   [ngModelOptions]=\"{standalone: true}\"    type=\"tel\" name=\"phone\" class=\"form-control\" id=\"tel\" placeholder=\"Enter Your Contact Number\" disabled>\r\n        </div>\r\n\r\n\r\n\r\n        <div class=\"error\" *ngIf=\"displayError\" >{{errorMsg}}</div>\r\n\r\n        <div class=\"col-sm-12 form-group mb-0 mt-2\" style=\"display: flex; justify-content:space-between\">\r\n\r\n           <div>\r\n            <button class=\"btn btn-primary float-right\">Edit</button>\r\n\r\n           </div>\r\n\r\n        </div>\r\n\r\n\r\n\r\n\r\n\r\n    </div>\r\n    </form>\r\n</div>\r\n", styles: [""] }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktcHJvZmlsZS1jaGVja291dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL29yZGVycy9zcmMvbGliL3BhZ2VzL215LXByb2ZpbGUtY2hlY2tvdXQvbXktcHJvZmlsZS1jaGVja291dC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL29yZGVycy9zcmMvbGliL3BhZ2VzL215LXByb2ZpbGUtY2hlY2tvdXQvbXktcHJvZmlsZS1jaGVja291dC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7OztJQ3lEckMsK0JBQXlDO0lBQUEsWUFBWTtJQUFBLGlCQUFNOzs7SUFBbEIsZUFBWTtJQUFaLHFDQUFZOzs7QURqRDdELE1BQU0sT0FBTywwQkFBMEI7SUFLckM7UUFIQSxpQkFBWSxHQUFXLEtBQUssQ0FBQztRQUszQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hFLElBQUksSUFBSSxHQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQy9ELE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV0QyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FB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QXlCLCtDQUFBO1FBSXpCLGVBQXVCO1FBQXZCLHVDQUF1QiwrQ0FBQTtRQUl0QixlQUE2QjtRQUE3Qiw2Q0FBNkIsK0NBQUE7UUFJOUIsZUFBMkI7UUFBM0IsMkNBQTJCLCtDQUFBO1FBSTNCLGVBQTJCO1FBQTNCLDJDQUEyQiwrQ0FBQTtRQUk1QixlQUEwQjtRQUExQiwwQ0FBMEIsK0NBQUE7UUFLekIsZUFBdUI7UUFBdkIsdUNBQXVCLCtDQUFBO1FBSXhCLGVBQXNCO1FBQXRCLHNDQUFzQiwrQ0FBQTtRQUtyQixlQUF5QjtRQUF6Qix5Q0FBeUIsK0NBQUE7UUFJekIsZUFBd0I7UUFBeEIsd0NBQXdCLCtDQUFBO1FBS2hCLGVBQWtCO1FBQWxCLHVDQUFrQjs7dUZEakRqQywwQkFBMEI7Y0FMdEMsU0FBUzsyQkFDRSxvQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVXNlcjIzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3VzZXIyMyc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdlc2hvcC1mcm9udGVuZC1jaGVja291dC1teS1wcm9maWxlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbXktcHJvZmlsZS1jaGVja291dC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9teS1wcm9maWxlLWNoZWNrb3V0LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXlQcm9maWxlQ2hlY2tPdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBkaXNwbGF5RXJyb3I6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gIHVzZXI6VXNlcjIzO1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIHRoaXMudXNlciA9IG5ldyBVc2VyMjMoKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMucGFyc2VKd3Qoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImF1dGhUb2tlblwiKSkpO1xyXG4gICAgbGV0IGRhdGEgPSAgdGhpcy5wYXJzZUp3dChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYXV0aFRva2VuXCIpKTtcclxuICAgIGNvbnNvbGUubG9nKFwiZGF0YSA9IFwiICsgZGF0YS5jb3VudHJ5KTtcclxuICAgXHJcbiAgICB0aGlzLnVzZXIuY291bnRyeT0gIGRhdGEuY291bnRyeTtcclxuICAgIHRoaXMudXNlci5hZGRyZXNzMT0gZGF0YVsnYWRkcmVzczEnXTtcclxuICAgIHRoaXMudXNlci5hZGRyZXNzMj0gZGF0YS5hZGRyZXNzMjtcclxuICAgIHRoaXMudXNlci5kYXRlPSBkYXRhLmRhdGVPZkJpcnRoO1xyXG4gICAgdGhpcy51c2VyLmVtYWlsPSAgZGF0YS5lbWFpbDtcclxuICAgIHRoaXMudXNlci5waG9uZT0gIGRhdGEucGhvbmU7XHJcbiAgICB0aGlzLnVzZXIucG9zdGFsQ29kZT0gIGRhdGEucG9zdGFsQ29kZTtcclxuICAgIHRoaXMudXNlci5zZXg9ICBkYXRhLmdlbmRlcjtcclxuICAgIHRoaXMudXNlci5mTmFtZSA9IGRhdGEuZk5hbWU7XHJcbiAgICB0aGlzLnVzZXIubE5hbWUgPSBkYXRhLmxOYW1lO1xyXG4gICAgdGhpcy51c2VyLnJlZ2lvbiA9IGRhdGEucmVnaW9uO1xyXG4gICAgdGhpcy51c2VyLmNpdHkgPSBkYXRhLmNpdHk7XHJcbiAgICB0aGlzLnVzZXIuc3RhdGUgPSBkYXRhLnN0YXRlO1xyXG4gICAgdGhpcy51c2VyLnByZWZpeCA9IGRhdGEucHJlZml4O1xyXG4gICB9XHJcblxyXG5cclxuXHJcbiAgcGFyc2VKd3QgKHRva2VuKSB7XHJcbiAgICB2YXIgYmFzZTY0VXJsID0gdG9rZW4uc3BsaXQoJy4nKVsxXTtcclxuICAgIHZhciBiYXNlNjQgPSBiYXNlNjRVcmwucmVwbGFjZSgvLS9nLCAnKycpLnJlcGxhY2UoL18vZywgJy8nKTtcclxuICAgIHZhciBqc29uUGF5bG9hZCA9IGRlY29kZVVSSUNvbXBvbmVudCh3aW5kb3cuYXRvYihiYXNlNjQpLnNwbGl0KCcnKS5tYXAoZnVuY3Rpb24oYykge1xyXG4gICAgICAgIHJldHVybiAnJScgKyAoJzAwJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikpLnNsaWNlKC0yKTtcclxuICAgIH0pLmpvaW4oJycpKTtcclxuXHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShqc29uUGF5bG9hZCk7XHJcbn07XHJcblxyXG5cclxuICBsb2dvdXQoKXtcclxuICAgIGNvbnNvbGUubG9nKFwibG9nb3V0XCIpO1xyXG4gICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcImF1dGhUb2tlblwiKTtcclxuICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJlbWFpbFwiKTtcclxuICAgIGhpc3RvcnkuYmFjaygpO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgIDxmb3JtPlxyXG4gICAgICAgIDxoMiBjbGFzcz1cInRleHQtY2VudGVyXCI+WW91ciBTaGlwcGluZyBBZGRyZXNzPC9oMj5cclxuICAgIDxkaXYgY2xhc3M9XCJyb3cganVtYm90cm9uXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS02IGZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5hbWUtZlwiID5GaXJzdCBOYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0ICBbKG5nTW9kZWwpXT1cInVzZXIuZk5hbWVcIiAgIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImZuYW1lXCIgaWQ9XCJuYW1lLWZcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZmlyc3QgbmFtZS5cIiBkaXNhYmxlZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTYgZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwibmFtZS1sXCIgID5MYXN0IG5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgICBbKG5nTW9kZWwpXT1cInVzZXIubE5hbWVcIiAgIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIiAgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJsbmFtZVwiIGlkPVwibmFtZS1sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGxhc3QgbmFtZS5cIiBkaXNhYmxlZD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNiBmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJTdGF0ZVwiICA+UHJvdmluY2UvcmVnaW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0ICBbKG5nTW9kZWwpXT1cInVzZXIucmVnaW9uXCIgICBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCIgICAgdHlwZT1cImFkZHJlc3NcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJTdGF0ZVwiIGlkPVwiU3RhdGVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgcHJvdmluY2UvZGlzdHJpY3QvcmVnaW9uIG5hbWVcIiBkaXNhYmxlZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTQgZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiU3RhdGVcIiAgPkNpdHk8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgIFsobmdNb2RlbCldPVwidXNlci5jaXR5XCIgICBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCIgICAgdHlwZT1cImFkZHJlc3NcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJTdGF0ZVwiIGlkPVwiU3RhdGVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgY2l0eSBuYW1lXCIgZGlzYWJsZWQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0yIGZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInppcFwiPlBvc3RhbC1Db2RlPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0ICAgWyhuZ01vZGVsKV09XCJ1c2VyLnBvc3RhbENvZGVcIiAgIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIiAgICAgdHlwZT1cInppcFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIlppcFwiIGlkPVwiemlwXCIgcGxhY2Vob2xkZXI9XCJQb3N0YWwtQ29kZS5cIiBkaXNhYmxlZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTYgZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiYWRkcmVzcy0xXCIgID5BZGRyZXNzIExpbmUtMTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCAgWyhuZ01vZGVsKV09XCJ1c2VyLmFkZHJlc3MxXCIgICBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCIgICAgIHR5cGU9XCJhZGRyZXNzXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiTG9jYWxpdHlcIiBpZD1cImFkZHJlc3MtMVwiIHBsYWNlaG9sZGVyPVwiTG9jYWxpdHkvSG91c2UvU3RyZWV0IG5vLlwiIGRpc2FibGVkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNiBmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJhZGRyZXNzLTJcIiAgPkFkZHJlc3MgTGluZS0yPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0ICBbKG5nTW9kZWwpXT1cInVzZXIuYWRkcmVzczJcIiAgIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIiAgICAgICB0eXBlPVwiYWRkcmVzc1wiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImFkZHJlc3NcIiBpZD1cImFkZHJlc3MtMlwiIHBsYWNlaG9sZGVyPVwiZXZlbnR1YWwgb3RoZXIgaW5mb3JtYXRpb25zXCIgZGlzYWJsZWQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS02IGZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cIkNvdW50cnlcIj5Db3VudHJ5PC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IFsobmdNb2RlbCldPVwidXNlci5jb3VudHJ5XCIgICBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCIgICAgIHR5cGU9XCJhZGRyZXNzXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiQ291bnRyeVwiIGlkPVwiQ291bnRyeVwiIHBsYWNlaG9sZGVyPVwiQ291bnRyeVwiIGRpc2FibGVkPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTYgZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiRGF0ZVwiPkRhdGUgT2YgQmlydGg8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgIFsobmdNb2RlbCldPVwidXNlci5kYXRlXCIgICBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCIgICAgdHlwZT1cIkRhdGVcIiBuYW1lPVwiZG9iXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIkRhdGVcIiBwbGFjZWhvbGRlcj1cIlwiIGRpc2FibGVkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNiBmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJzZXhcIj5HZW5kZXI8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgWyhuZ01vZGVsKV09XCJ1c2VyLnNleFwiICAgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiICAgICB0eXBlPVwic2V4XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwic2V4XCIgaWQ9XCJzZXhcIiBwbGFjZWhvbGRlcj1cInNleFwiIGRpc2FibGVkPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTIgZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiY29kXCI+Q291bnRyeSBjb2RlPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0ICBbKG5nTW9kZWwpXT1cInVzZXIucHJlZml4XCIgICBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCIgICAgdHlwZT1cInByZWZpeFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cInByZWZpeFwiIGlkPVwicHJlZml4XCIgcGxhY2Vob2xkZXI9XCJwcmVmaXhcIiBkaXNhYmxlZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTQgZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwidGVsXCI+UGhvbmU8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgIFsobmdNb2RlbCldPVwidXNlci5waG9uZVwiICAgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiICAgIHR5cGU9XCJ0ZWxcIiBuYW1lPVwicGhvbmVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwidGVsXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBZb3VyIENvbnRhY3QgTnVtYmVyXCIgZGlzYWJsZWQ+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yXCIgKm5nSWY9XCJkaXNwbGF5RXJyb3JcIiA+e3tlcnJvck1zZ319PC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTIgZm9ybS1ncm91cCBtYi0wIG10LTJcIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuXCI+XHJcblxyXG4gICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgZmxvYXQtcmlnaHRcIj5FZGl0PC9idXR0b24+XHJcblxyXG4gICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2Zvcm0+XHJcbjwvZGl2PlxyXG4iXX0=