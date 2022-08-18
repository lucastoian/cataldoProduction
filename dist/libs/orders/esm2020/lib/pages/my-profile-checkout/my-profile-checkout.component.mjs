import { Component } from '@angular/core';
import { User23 } from '../../models/user23';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
function MyProfileCheckOutComponent_div_58_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 34);
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
MyProfileCheckOutComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MyProfileCheckOutComponent, selectors: [["eshop-frontend-checkout-my-profile"]], decls: 63, vars: 40, consts: [[1, "container"], [1, "text-center"], [1, "row", "jumbotron"], [1, "col-sm-6", "form-group"], ["for", "name-f"], ["type", "text", "name", "fname", "id", "name-f", "placeholder", "Enter your first name.", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "name-l"], ["type", "text", "name", "lname", "id", "name-l", "placeholder", "Enter your last name.", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "email"], ["type", "email", "name", "email", "id", "email", "placeholder", "Enter your email.", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "State"], ["type", "address", "name", "State", "id", "State", "placeholder", "Enter your province/district/region name", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "col-sm-4", "form-group"], ["type", "address", "name", "State", "id", "State", "placeholder", "Enter your city name", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "col-sm-2", "form-group"], ["for", "zip"], ["type", "zip", "name", "Zip", "id", "zip", "placeholder", "Postal-Code.", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "address-1"], ["type", "address", "name", "Locality", "id", "address-1", "placeholder", "Locality/House/Street no.", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "address-2"], ["type", "address", "name", "address", "id", "address-2", "placeholder", "eventual other informations", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "Country"], ["type", "address", "name", "Country", "id", "Country", "placeholder", "Country", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "Date"], ["type", "Date", "name", "dob", "id", "Date", "placeholder", "", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "sex"], ["type", "sex", "name", "sex", "id", "sex", "placeholder", "sex", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "cod"], ["type", "prefix", "name", "prefix", "id", "prefix", "placeholder", "prefix", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "tel"], ["type", "tel", "name", "phone", "id", "tel", "placeholder", "Enter Your Contact Number", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["class", "error", 4, "ngIf"], [1, "col-sm-12", "form-group", "mb-0", "mt-2", 2, "display", "flex", "justify-content", "space-between"], [1, "btn", "btn-primary", "float-right"], [1, "error"]], template: function MyProfileCheckOutComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "form")(2, "h2", 1);
        i0.ɵɵtext(3, "Your Profile");
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
        i0.ɵɵtext(15, "Email");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "input", 9);
        i0.ɵɵlistener("ngModelChange", function MyProfileCheckOutComponent_Template_input_ngModelChange_16_listener($event) { return ctx.user.email = $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵelement(17, "div", 3);
        i0.ɵɵelementStart(18, "div", 3)(19, "label", 10);
        i0.ɵɵtext(20, "Province/region");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "input", 11);
        i0.ɵɵlistener("ngModelChange", function MyProfileCheckOutComponent_Template_input_ngModelChange_21_listener($event) { return ctx.user.region = $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(22, "div", 12)(23, "label", 10);
        i0.ɵɵtext(24, "City");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "input", 13);
        i0.ɵɵlistener("ngModelChange", function MyProfileCheckOutComponent_Template_input_ngModelChange_25_listener($event) { return ctx.user.city = $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(26, "div", 14)(27, "label", 15);
        i0.ɵɵtext(28, "Postal-Code");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(29, "input", 16);
        i0.ɵɵlistener("ngModelChange", function MyProfileCheckOutComponent_Template_input_ngModelChange_29_listener($event) { return ctx.user.postalCode = $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(30, "div", 3)(31, "label", 17);
        i0.ɵɵtext(32, "Address Line-1");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(33, "input", 18);
        i0.ɵɵlistener("ngModelChange", function MyProfileCheckOutComponent_Template_input_ngModelChange_33_listener($event) { return ctx.user.address1 = $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(34, "div", 3)(35, "label", 19);
        i0.ɵɵtext(36, "Address Line-2");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(37, "input", 20);
        i0.ɵɵlistener("ngModelChange", function MyProfileCheckOutComponent_Template_input_ngModelChange_37_listener($event) { return ctx.user.address2 = $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(38, "div", 3)(39, "label", 21);
        i0.ɵɵtext(40, "Country");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(41, "input", 22);
        i0.ɵɵlistener("ngModelChange", function MyProfileCheckOutComponent_Template_input_ngModelChange_41_listener($event) { return ctx.user.country = $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(42, "div", 3)(43, "label", 23);
        i0.ɵɵtext(44, "Date Of Birth");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(45, "input", 24);
        i0.ɵɵlistener("ngModelChange", function MyProfileCheckOutComponent_Template_input_ngModelChange_45_listener($event) { return ctx.user.date = $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(46, "div", 3)(47, "label", 25);
        i0.ɵɵtext(48, "Gender");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(49, "input", 26);
        i0.ɵɵlistener("ngModelChange", function MyProfileCheckOutComponent_Template_input_ngModelChange_49_listener($event) { return ctx.user.sex = $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(50, "div", 14)(51, "label", 27);
        i0.ɵɵtext(52, "Country code");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(53, "input", 28);
        i0.ɵɵlistener("ngModelChange", function MyProfileCheckOutComponent_Template_input_ngModelChange_53_listener($event) { return ctx.user.prefix = $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(54, "div", 12)(55, "label", 29);
        i0.ɵɵtext(56, "Phone");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(57, "input", 30);
        i0.ɵɵlistener("ngModelChange", function MyProfileCheckOutComponent_Template_input_ngModelChange_57_listener($event) { return ctx.user.phone = $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(58, MyProfileCheckOutComponent_div_58_Template, 2, 1, "div", 31);
        i0.ɵɵelementStart(59, "div", 32)(60, "div")(61, "button", 33);
        i0.ɵɵtext(62, "Edit");
        i0.ɵɵelementEnd()()()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("ngModel", ctx.user.fName)("ngModelOptions", i0.ɵɵpureFunction0(27, _c0));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.user.lName)("ngModelOptions", i0.ɵɵpureFunction0(28, _c0));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.user.email)("ngModelOptions", i0.ɵɵpureFunction0(29, _c0));
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngModel", ctx.user.region)("ngModelOptions", i0.ɵɵpureFunction0(30, _c0));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.user.city)("ngModelOptions", i0.ɵɵpureFunction0(31, _c0));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.user.postalCode)("ngModelOptions", i0.ɵɵpureFunction0(32, _c0));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.user.address1)("ngModelOptions", i0.ɵɵpureFunction0(33, _c0));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.user.address2)("ngModelOptions", i0.ɵɵpureFunction0(34, _c0));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.user.country)("ngModelOptions", i0.ɵɵpureFunction0(35, _c0));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.user.date)("ngModelOptions", i0.ɵɵpureFunction0(36, _c0));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.user.sex)("ngModelOptions", i0.ɵɵpureFunction0(37, _c0));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.user.prefix)("ngModelOptions", i0.ɵɵpureFunction0(38, _c0));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.user.phone)("ngModelOptions", i0.ɵɵpureFunction0(39, _c0));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.displayError);
    } }, directives: [i1.ɵNgNoValidate, i1.NgControlStatusGroup, i1.NgForm, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel, i2.NgIf], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MyProfileCheckOutComponent, [{
        type: Component,
        args: [{ selector: 'eshop-frontend-checkout-my-profile', template: "<div class=\"container\">\r\n    <form>\r\n        <h2 class=\"text-center\">Your Profile</h2>\r\n    <div class=\"row jumbotron\">\r\n        <div class=\"col-sm-6 form-group\">\r\n            <label for=\"name-f\" >First Name</label>\r\n            <input  [(ngModel)]=\"user.fName\"   [ngModelOptions]=\"{standalone: true}\" type=\"text\" class=\"form-control\" name=\"fname\" id=\"name-f\" placeholder=\"Enter your first name.\" disabled>\r\n        </div>\r\n        <div class=\"col-sm-6 form-group\">\r\n            <label for=\"name-l\"  >Last name</label>\r\n            <input   [(ngModel)]=\"user.lName\"   [ngModelOptions]=\"{standalone: true}\"  type=\"text\" class=\"form-control\" name=\"lname\" id=\"name-l\" placeholder=\"Enter your last name.\" disabled>\r\n        </div>\r\n        <div class=\"col-sm-6 form-group\">\r\n            <label for=\"email\"  >Email</label>\r\n            <input [(ngModel)]=\"user.email\"   [ngModelOptions]=\"{standalone: true}\"     type=\"email\" class=\"form-control\" name=\"email\" id=\"email\" placeholder=\"Enter your email.\" disabled>\r\n        </div>\r\n        \r\n        <div class=\"col-sm-6 form-group\">\r\n       \r\n        </div>\r\n       \r\n        <div class=\"col-sm-6 form-group\">\r\n            <label for=\"State\"  >Province/region</label>\r\n            <input  [(ngModel)]=\"user.region\"   [ngModelOptions]=\"{standalone: true}\"    type=\"address\" class=\"form-control\" name=\"State\" id=\"State\" placeholder=\"Enter your province/district/region name\" disabled>\r\n        </div>\r\n        <div class=\"col-sm-4 form-group\">\r\n            <label for=\"State\"  >City</label>\r\n            <input  [(ngModel)]=\"user.city\"   [ngModelOptions]=\"{standalone: true}\"    type=\"address\" class=\"form-control\" name=\"State\" id=\"State\" placeholder=\"Enter your city name\" disabled>\r\n        </div>\r\n        <div class=\"col-sm-2 form-group\">\r\n            <label for=\"zip\">Postal-Code</label>\r\n            <input   [(ngModel)]=\"user.postalCode\"   [ngModelOptions]=\"{standalone: true}\"     type=\"zip\" class=\"form-control\" name=\"Zip\" id=\"zip\" placeholder=\"Postal-Code.\" disabled>\r\n        </div>\r\n        <div class=\"col-sm-6 form-group\">\r\n            <label for=\"address-1\"  >Address Line-1</label>\r\n            <input  [(ngModel)]=\"user.address1\"   [ngModelOptions]=\"{standalone: true}\"     type=\"address\" class=\"form-control\" name=\"Locality\" id=\"address-1\" placeholder=\"Locality/House/Street no.\" disabled>\r\n        </div>\r\n        <div class=\"col-sm-6 form-group\">\r\n            <label for=\"address-2\"  >Address Line-2</label>\r\n            <input  [(ngModel)]=\"user.address2\"   [ngModelOptions]=\"{standalone: true}\"       type=\"address\" class=\"form-control\" name=\"address\" id=\"address-2\" placeholder=\"eventual other informations\" disabled>\r\n        </div>\r\n        <div class=\"col-sm-6 form-group\">\r\n            <label for=\"Country\">Country</label>\r\n            <input [(ngModel)]=\"user.country\"   [ngModelOptions]=\"{standalone: true}\"     type=\"address\" class=\"form-control\" name=\"Country\" id=\"Country\" placeholder=\"Country\" disabled>\r\n \r\n        </div>\r\n        <div class=\"col-sm-6 form-group\">\r\n            <label for=\"Date\">Date Of Birth</label>\r\n            <input  [(ngModel)]=\"user.date\"   [ngModelOptions]=\"{standalone: true}\"    type=\"Date\" name=\"dob\" class=\"form-control\" id=\"Date\" placeholder=\"\" disabled>\r\n        </div>\r\n        <div class=\"col-sm-6 form-group\">\r\n            <label for=\"sex\">Gender</label>\r\n            <input [(ngModel)]=\"user.sex\"   [ngModelOptions]=\"{standalone: true}\"     type=\"sex\" class=\"form-control\" name=\"sex\" id=\"sex\" placeholder=\"sex\" disabled>\r\n         \r\n        </div>\r\n        <div class=\"col-sm-2 form-group\">\r\n            <label for=\"cod\">Country code</label>\r\n            <input  [(ngModel)]=\"user.prefix\"   [ngModelOptions]=\"{standalone: true}\"    type=\"prefix\" class=\"form-control\" name=\"prefix\" id=\"prefix\" placeholder=\"prefix\" disabled>\r\n        </div>\r\n        <div class=\"col-sm-4 form-group\">\r\n            <label for=\"tel\">Phone</label>\r\n            <input  [(ngModel)]=\"user.phone\"   [ngModelOptions]=\"{standalone: true}\"    type=\"tel\" name=\"phone\" class=\"form-control\" id=\"tel\" placeholder=\"Enter Your Contact Number\" disabled>\r\n        </div>\r\n      \r\n   \r\n\r\n        <div class=\"error\" *ngIf=\"displayError\" >{{errorMsg}}</div>\r\n        \r\n        <div class=\"col-sm-12 form-group mb-0 mt-2\" style=\"display: flex; justify-content:space-between\">\r\n  \r\n           <div>\r\n            <button class=\"btn btn-primary float-right\">Edit</button>\r\n      \r\n           </div>\r\n           \r\n        </div>\r\n\r\n  \r\n\r\n\r\n        \r\n    </div>\r\n    </form>\r\n</div>", styles: [""] }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktcHJvZmlsZS1jaGVja291dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL29yZGVycy9zcmMvbGliL3BhZ2VzL215LXByb2ZpbGUtY2hlY2tvdXQvbXktcHJvZmlsZS1jaGVja291dC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL29yZGVycy9zcmMvbGliL3BhZ2VzL215LXByb2ZpbGUtY2hlY2tvdXQvbXktcHJvZmlsZS1jaGVja291dC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7OztJQ2dFckMsK0JBQXlDO0lBQUEsWUFBWTtJQUFBLGlCQUFNOzs7SUFBbEIsZUFBWTtJQUFaLHFDQUFZOzs7QUR4RDdELE1BQU0sT0FBTywwQkFBMEI7SUFLckM7UUFIQSxpQkFBWSxHQUFXLEtBQUssQ0FBQztRQUszQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hFLElBQUksSUFBSSxHQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQy9ELE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV0QyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FB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RUFBQSxFQUFBOztRQWpFakQsZUFBd0I7UUFBeEIsd0NBQXdCLCtDQUFBO1FBSXZCLGVBQXdCO1FBQXhCLHdDQUF3QiwrQ0FBQTtRQUkxQixlQUF3QjtRQUF4Qix3Q0FBd0IsK0NBQUE7UUFTdkIsZUFBeUI7UUFBekIseUNBQXlCLCtDQUFBO1FBSXpCLGVBQXVCO1FBQXZCLHVDQUF1QiwrQ0FBQTtRQUl0QixlQUE2QjtRQUE3Qiw2Q0FBNkIsK0NBQUE7UUFJOUIsZUFBMkI7UUFBM0IsMkNBQTJCLCtDQUFBO1FBSTNCLGVBQTJCO1FBQTNCLDJDQUEyQiwrQ0FBQTtRQUk1QixlQUEwQjtRQUExQiwwQ0FBMEIsK0NBQUE7UUFLekIsZUFBdUI7UUFBdkIsdUNBQXVCLCtDQUFBO1FBSXhCLGVBQXNCO1FBQXRCLHNDQUFzQiwrQ0FBQTtRQUtyQixlQUF5QjtRQUF6Qix5Q0FBeUIsK0NBQUE7UUFJekIsZUFBd0I7UUFBeEIsd0NBQXdCLCtDQUFBO1FBS2hCLGVBQWtCO1FBQWxCLHVDQUFrQjs7dUZEeERqQywwQkFBMEI7Y0FMdEMsU0FBUzsyQkFDRSxvQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVXNlcjIzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3VzZXIyMyc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdlc2hvcC1mcm9udGVuZC1jaGVja291dC1teS1wcm9maWxlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbXktcHJvZmlsZS1jaGVja291dC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9teS1wcm9maWxlLWNoZWNrb3V0LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXlQcm9maWxlQ2hlY2tPdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBkaXNwbGF5RXJyb3I6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gIHVzZXI6VXNlcjIzO1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIHRoaXMudXNlciA9IG5ldyBVc2VyMjMoKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMucGFyc2VKd3Qoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImF1dGhUb2tlblwiKSkpO1xyXG4gICAgbGV0IGRhdGEgPSAgdGhpcy5wYXJzZUp3dChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYXV0aFRva2VuXCIpKTtcclxuICAgIGNvbnNvbGUubG9nKFwiZGF0YSA9IFwiICsgZGF0YS5jb3VudHJ5KTtcclxuICAgXHJcbiAgICB0aGlzLnVzZXIuY291bnRyeT0gIGRhdGEuY291bnRyeTtcclxuICAgIHRoaXMudXNlci5hZGRyZXNzMT0gZGF0YVsnYWRkcmVzczEnXTtcclxuICAgIHRoaXMudXNlci5hZGRyZXNzMj0gZGF0YS5hZGRyZXNzMjtcclxuICAgIHRoaXMudXNlci5kYXRlPSBkYXRhLmRhdGVPZkJpcnRoO1xyXG4gICAgdGhpcy51c2VyLmVtYWlsPSAgZGF0YS5lbWFpbDtcclxuICAgIHRoaXMudXNlci5waG9uZT0gIGRhdGEucGhvbmU7XHJcbiAgICB0aGlzLnVzZXIucG9zdGFsQ29kZT0gIGRhdGEucG9zdGFsQ29kZTtcclxuICAgIHRoaXMudXNlci5zZXg9ICBkYXRhLmdlbmRlcjtcclxuICAgIHRoaXMudXNlci5mTmFtZSA9IGRhdGEuZk5hbWU7XHJcbiAgICB0aGlzLnVzZXIubE5hbWUgPSBkYXRhLmxOYW1lO1xyXG4gICAgdGhpcy51c2VyLnJlZ2lvbiA9IGRhdGEucmVnaW9uO1xyXG4gICAgdGhpcy51c2VyLmNpdHkgPSBkYXRhLmNpdHk7XHJcbiAgICB0aGlzLnVzZXIuc3RhdGUgPSBkYXRhLnN0YXRlO1xyXG4gICAgdGhpcy51c2VyLnByZWZpeCA9IGRhdGEucHJlZml4O1xyXG4gICB9XHJcblxyXG5cclxuXHJcbiAgcGFyc2VKd3QgKHRva2VuKSB7XHJcbiAgICB2YXIgYmFzZTY0VXJsID0gdG9rZW4uc3BsaXQoJy4nKVsxXTtcclxuICAgIHZhciBiYXNlNjQgPSBiYXNlNjRVcmwucmVwbGFjZSgvLS9nLCAnKycpLnJlcGxhY2UoL18vZywgJy8nKTtcclxuICAgIHZhciBqc29uUGF5bG9hZCA9IGRlY29kZVVSSUNvbXBvbmVudCh3aW5kb3cuYXRvYihiYXNlNjQpLnNwbGl0KCcnKS5tYXAoZnVuY3Rpb24oYykge1xyXG4gICAgICAgIHJldHVybiAnJScgKyAoJzAwJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikpLnNsaWNlKC0yKTtcclxuICAgIH0pLmpvaW4oJycpKTtcclxuXHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShqc29uUGF5bG9hZCk7XHJcbn07XHJcblxyXG5cclxuICBsb2dvdXQoKXtcclxuICAgIGNvbnNvbGUubG9nKFwibG9nb3V0XCIpO1xyXG4gICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcImF1dGhUb2tlblwiKTtcclxuICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJlbWFpbFwiKTtcclxuICAgIGhpc3RvcnkuYmFjaygpO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgIDxmb3JtPlxyXG4gICAgICAgIDxoMiBjbGFzcz1cInRleHQtY2VudGVyXCI+WW91ciBQcm9maWxlPC9oMj5cclxuICAgIDxkaXYgY2xhc3M9XCJyb3cganVtYm90cm9uXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS02IGZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5hbWUtZlwiID5GaXJzdCBOYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0ICBbKG5nTW9kZWwpXT1cInVzZXIuZk5hbWVcIiAgIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImZuYW1lXCIgaWQ9XCJuYW1lLWZcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZmlyc3QgbmFtZS5cIiBkaXNhYmxlZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTYgZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwibmFtZS1sXCIgID5MYXN0IG5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgICBbKG5nTW9kZWwpXT1cInVzZXIubE5hbWVcIiAgIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIiAgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJsbmFtZVwiIGlkPVwibmFtZS1sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGxhc3QgbmFtZS5cIiBkaXNhYmxlZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTYgZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIiAgPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IFsobmdNb2RlbCldPVwidXNlci5lbWFpbFwiICAgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiICAgICB0eXBlPVwiZW1haWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZW1haWwuXCIgZGlzYWJsZWQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS02IGZvcm0tZ3JvdXBcIj5cclxuICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS02IGZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cIlN0YXRlXCIgID5Qcm92aW5jZS9yZWdpb248L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgIFsobmdNb2RlbCldPVwidXNlci5yZWdpb25cIiAgIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIiAgICB0eXBlPVwiYWRkcmVzc1wiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIlN0YXRlXCIgaWQ9XCJTdGF0ZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBwcm92aW5jZS9kaXN0cmljdC9yZWdpb24gbmFtZVwiIGRpc2FibGVkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNCBmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJTdGF0ZVwiICA+Q2l0eTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCAgWyhuZ01vZGVsKV09XCJ1c2VyLmNpdHlcIiAgIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIiAgICB0eXBlPVwiYWRkcmVzc1wiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIlN0YXRlXCIgaWQ9XCJTdGF0ZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBjaXR5IG5hbWVcIiBkaXNhYmxlZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTIgZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiemlwXCI+UG9zdGFsLUNvZGU8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgICBbKG5nTW9kZWwpXT1cInVzZXIucG9zdGFsQ29kZVwiICAgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiICAgICB0eXBlPVwiemlwXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiWmlwXCIgaWQ9XCJ6aXBcIiBwbGFjZWhvbGRlcj1cIlBvc3RhbC1Db2RlLlwiIGRpc2FibGVkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNiBmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJhZGRyZXNzLTFcIiAgPkFkZHJlc3MgTGluZS0xPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0ICBbKG5nTW9kZWwpXT1cInVzZXIuYWRkcmVzczFcIiAgIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIiAgICAgdHlwZT1cImFkZHJlc3NcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJMb2NhbGl0eVwiIGlkPVwiYWRkcmVzcy0xXCIgcGxhY2Vob2xkZXI9XCJMb2NhbGl0eS9Ib3VzZS9TdHJlZXQgbm8uXCIgZGlzYWJsZWQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS02IGZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImFkZHJlc3MtMlwiICA+QWRkcmVzcyBMaW5lLTI8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgIFsobmdNb2RlbCldPVwidXNlci5hZGRyZXNzMlwiICAgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiICAgICAgIHR5cGU9XCJhZGRyZXNzXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiYWRkcmVzc1wiIGlkPVwiYWRkcmVzcy0yXCIgcGxhY2Vob2xkZXI9XCJldmVudHVhbCBvdGhlciBpbmZvcm1hdGlvbnNcIiBkaXNhYmxlZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTYgZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiQ291bnRyeVwiPkNvdW50cnk8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgWyhuZ01vZGVsKV09XCJ1c2VyLmNvdW50cnlcIiAgIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIiAgICAgdHlwZT1cImFkZHJlc3NcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJDb3VudHJ5XCIgaWQ9XCJDb3VudHJ5XCIgcGxhY2Vob2xkZXI9XCJDb3VudHJ5XCIgZGlzYWJsZWQ+XHJcbiBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTYgZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiRGF0ZVwiPkRhdGUgT2YgQmlydGg8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgIFsobmdNb2RlbCldPVwidXNlci5kYXRlXCIgICBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCIgICAgdHlwZT1cIkRhdGVcIiBuYW1lPVwiZG9iXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIkRhdGVcIiBwbGFjZWhvbGRlcj1cIlwiIGRpc2FibGVkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNiBmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJzZXhcIj5HZW5kZXI8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgWyhuZ01vZGVsKV09XCJ1c2VyLnNleFwiICAgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiICAgICB0eXBlPVwic2V4XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwic2V4XCIgaWQ9XCJzZXhcIiBwbGFjZWhvbGRlcj1cInNleFwiIGRpc2FibGVkPlxyXG4gICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTIgZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiY29kXCI+Q291bnRyeSBjb2RlPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0ICBbKG5nTW9kZWwpXT1cInVzZXIucHJlZml4XCIgICBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCIgICAgdHlwZT1cInByZWZpeFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cInByZWZpeFwiIGlkPVwicHJlZml4XCIgcGxhY2Vob2xkZXI9XCJwcmVmaXhcIiBkaXNhYmxlZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTQgZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwidGVsXCI+UGhvbmU8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgIFsobmdNb2RlbCldPVwidXNlci5waG9uZVwiICAgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiICAgIHR5cGU9XCJ0ZWxcIiBuYW1lPVwicGhvbmVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwidGVsXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBZb3VyIENvbnRhY3QgTnVtYmVyXCIgZGlzYWJsZWQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICBcclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yXCIgKm5nSWY9XCJkaXNwbGF5RXJyb3JcIiA+e3tlcnJvck1zZ319PC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMiBmb3JtLWdyb3VwIG1iLTAgbXQtMlwiIHN0eWxlPVwiZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW5cIj5cclxuICBcclxuICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGZsb2F0LXJpZ2h0XCI+RWRpdDwvYnV0dG9uPlxyXG4gICAgICBcclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgXHJcblxyXG5cclxuICAgICAgICBcclxuICAgIDwvZGl2PlxyXG4gICAgPC9mb3JtPlxyXG48L2Rpdj4iXX0=