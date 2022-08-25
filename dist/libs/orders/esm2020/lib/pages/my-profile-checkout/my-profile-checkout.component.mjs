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
MyProfileCheckOutComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MyProfileCheckOutComponent, selectors: [["eshop-frontend-checkout-my-profile"]], decls: 63, vars: 40, consts: [[1, "container-fluid"], [1, "text-center"], [1, "row", "jumbotron"], [1, "col-sm-6", "form-group"], ["for", "name-f"], ["type", "text", "name", "fname", "id", "name-f", "placeholder", "Enter your first name.", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "name-l"], ["type", "text", "name", "lname", "id", "name-l", "placeholder", "Enter your last name.", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "email"], ["type", "email", "name", "email", "id", "email", "placeholder", "Enter your email.", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "State"], ["type", "address", "name", "State", "id", "State", "placeholder", "Enter your province/district/region name", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "col-sm-4", "form-group"], ["type", "address", "name", "State", "id", "State", "placeholder", "Enter your city name", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "col-sm-2", "form-group"], ["for", "zip"], ["type", "zip", "name", "Zip", "id", "zip", "placeholder", "Postal-Code.", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "address-1"], ["type", "address", "name", "Locality", "id", "address-1", "placeholder", "Locality/House/Street no.", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "address-2"], ["type", "address", "name", "address", "id", "address-2", "placeholder", "eventual other informations", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "Country"], ["type", "address", "name", "Country", "id", "Country", "placeholder", "Country", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "Date"], ["type", "Date", "name", "dob", "id", "Date", "placeholder", "", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "sex"], ["type", "sex", "name", "sex", "id", "sex", "placeholder", "sex", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "cod"], ["type", "prefix", "name", "prefix", "id", "prefix", "placeholder", "prefix", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "tel"], ["type", "tel", "name", "phone", "id", "tel", "placeholder", "Enter Your Contact Number", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["class", "error", 4, "ngIf"], [1, "col-sm-12", "form-group", "mb-0", "mt-2", 2, "display", "flex", "justify-content", "space-between"], [1, "btn", "btn-primary", "float-right"], [1, "error"]], template: function MyProfileCheckOutComponent_Template(rf, ctx) { if (rf & 1) {
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
        args: [{ selector: 'eshop-frontend-checkout-my-profile', template: "<div class=\"container-fluid\">\r\n    <form>\r\n        <h2 class=\"text-center\">Your Shipping Address</h2>\r\n    <div class=\"row jumbotron\">\r\n        <div class=\"col-sm-6 form-group\">\r\n            <label for=\"name-f\" >First Name</label>\r\n            <input  [(ngModel)]=\"user.fName\"   [ngModelOptions]=\"{standalone: true}\" type=\"text\" class=\"form-control\" name=\"fname\" id=\"name-f\" placeholder=\"Enter your first name.\" disabled>\r\n        </div>\r\n        <div class=\"col-sm-6 form-group\">\r\n            <label for=\"name-l\"  >Last name</label>\r\n            <input   [(ngModel)]=\"user.lName\"   [ngModelOptions]=\"{standalone: true}\"  type=\"text\" class=\"form-control\" name=\"lname\" id=\"name-l\" placeholder=\"Enter your last name.\" disabled>\r\n        </div>\r\n        <div class=\"col-sm-6 form-group\">\r\n            <label for=\"email\"  >Email</label>\r\n            <input [(ngModel)]=\"user.email\"   [ngModelOptions]=\"{standalone: true}\"     type=\"email\" class=\"form-control\" name=\"email\" id=\"email\" placeholder=\"Enter your email.\" disabled>\r\n        </div>\r\n\r\n        <div class=\"col-sm-6 form-group\">\r\n\r\n        </div>\r\n\r\n        <div class=\"col-sm-6 form-group\">\r\n            <label for=\"State\"  >Province/region</label>\r\n            <input  [(ngModel)]=\"user.region\"   [ngModelOptions]=\"{standalone: true}\"    type=\"address\" class=\"form-control\" name=\"State\" id=\"State\" placeholder=\"Enter your province/district/region name\" disabled>\r\n        </div>\r\n        <div class=\"col-sm-4 form-group\">\r\n            <label for=\"State\"  >City</label>\r\n            <input  [(ngModel)]=\"user.city\"   [ngModelOptions]=\"{standalone: true}\"    type=\"address\" class=\"form-control\" name=\"State\" id=\"State\" placeholder=\"Enter your city name\" disabled>\r\n        </div>\r\n        <div class=\"col-sm-2 form-group\">\r\n            <label for=\"zip\">Postal-Code</label>\r\n            <input   [(ngModel)]=\"user.postalCode\"   [ngModelOptions]=\"{standalone: true}\"     type=\"zip\" class=\"form-control\" name=\"Zip\" id=\"zip\" placeholder=\"Postal-Code.\" disabled>\r\n        </div>\r\n        <div class=\"col-sm-6 form-group\">\r\n            <label for=\"address-1\"  >Address Line-1</label>\r\n            <input  [(ngModel)]=\"user.address1\"   [ngModelOptions]=\"{standalone: true}\"     type=\"address\" class=\"form-control\" name=\"Locality\" id=\"address-1\" placeholder=\"Locality/House/Street no.\" disabled>\r\n        </div>\r\n        <div class=\"col-sm-6 form-group\">\r\n            <label for=\"address-2\"  >Address Line-2</label>\r\n            <input  [(ngModel)]=\"user.address2\"   [ngModelOptions]=\"{standalone: true}\"       type=\"address\" class=\"form-control\" name=\"address\" id=\"address-2\" placeholder=\"eventual other informations\" disabled>\r\n        </div>\r\n        <div class=\"col-sm-6 form-group\">\r\n            <label for=\"Country\">Country</label>\r\n            <input [(ngModel)]=\"user.country\"   [ngModelOptions]=\"{standalone: true}\"     type=\"address\" class=\"form-control\" name=\"Country\" id=\"Country\" placeholder=\"Country\" disabled>\r\n\r\n        </div>\r\n        <div class=\"col-sm-6 form-group\">\r\n            <label for=\"Date\">Date Of Birth</label>\r\n            <input  [(ngModel)]=\"user.date\"   [ngModelOptions]=\"{standalone: true}\"    type=\"Date\" name=\"dob\" class=\"form-control\" id=\"Date\" placeholder=\"\" disabled>\r\n        </div>\r\n        <div class=\"col-sm-6 form-group\">\r\n            <label for=\"sex\">Gender</label>\r\n            <input [(ngModel)]=\"user.sex\"   [ngModelOptions]=\"{standalone: true}\"     type=\"sex\" class=\"form-control\" name=\"sex\" id=\"sex\" placeholder=\"sex\" disabled>\r\n\r\n        </div>\r\n        <div class=\"col-sm-2 form-group\">\r\n            <label for=\"cod\">Country code</label>\r\n            <input  [(ngModel)]=\"user.prefix\"   [ngModelOptions]=\"{standalone: true}\"    type=\"prefix\" class=\"form-control\" name=\"prefix\" id=\"prefix\" placeholder=\"prefix\" disabled>\r\n        </div>\r\n        <div class=\"col-sm-4 form-group\">\r\n            <label for=\"tel\">Phone</label>\r\n            <input  [(ngModel)]=\"user.phone\"   [ngModelOptions]=\"{standalone: true}\"    type=\"tel\" name=\"phone\" class=\"form-control\" id=\"tel\" placeholder=\"Enter Your Contact Number\" disabled>\r\n        </div>\r\n\r\n\r\n\r\n        <div class=\"error\" *ngIf=\"displayError\" >{{errorMsg}}</div>\r\n\r\n        <div class=\"col-sm-12 form-group mb-0 mt-2\" style=\"display: flex; justify-content:space-between\">\r\n\r\n           <div>\r\n            <button class=\"btn btn-primary float-right\">Edit</button>\r\n\r\n           </div>\r\n\r\n        </div>\r\n\r\n\r\n\r\n\r\n\r\n    </div>\r\n    </form>\r\n</div>\r\n", styles: [""] }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktcHJvZmlsZS1jaGVja291dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL29yZGVycy9zcmMvbGliL3BhZ2VzL215LXByb2ZpbGUtY2hlY2tvdXQvbXktcHJvZmlsZS1jaGVja291dC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL29yZGVycy9zcmMvbGliL3BhZ2VzL215LXByb2ZpbGUtY2hlY2tvdXQvbXktcHJvZmlsZS1jaGVja291dC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7OztJQ2dFckMsK0JBQXlDO0lBQUEsWUFBWTtJQUFBLGlCQUFNOzs7SUFBbEIsZUFBWTtJQUFaLHFDQUFZOzs7QUR4RDdELE1BQU0sT0FBTywwQkFBMEI7SUFLckM7UUFIQSxpQkFBWSxHQUFXLEtBQUssQ0FBQztRQUszQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hFLElBQUksSUFBSSxHQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQy9ELE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV0QyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FB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LEVBQUEsRUFBQTs7UUFqRWpELGVBQXdCO1FBQXhCLHdDQUF3QiwrQ0FBQTtRQUl2QixlQUF3QjtRQUF4Qix3Q0FBd0IsK0NBQUE7UUFJMUIsZUFBd0I7UUFBeEIsd0NBQXdCLCtDQUFBO1FBU3ZCLGVBQXlCO1FBQXpCLHlDQUF5QiwrQ0FBQTtRQUl6QixlQUF1QjtRQUF2Qix1Q0FBdUIsK0NBQUE7UUFJdEIsZUFBNkI7UUFBN0IsNkNBQTZCLCtDQUFBO1FBSTlCLGVBQTJCO1FBQTNCLDJDQUEyQiwrQ0FBQTtRQUkzQixlQUEyQjtRQUEzQiwyQ0FBMkIsK0NBQUE7UUFJNUIsZUFBMEI7UUFBMUIsMENBQTBCLCtDQUFBO1FBS3pCLGVBQXVCO1FBQXZCLHVDQUF1QiwrQ0FBQTtRQUl4QixlQUFzQjtRQUF0QixzQ0FBc0IsK0NBQUE7UUFLckIsZUFBeUI7UUFBekIseUNBQXlCLCtDQUFBO1FBSXpCLGVBQXdCO1FBQXhCLHdDQUF3QiwrQ0FBQTtRQUtoQixlQUFrQjtRQUFsQix1Q0FBa0I7O3VGRHhEakMsMEJBQTBCO2NBTHRDLFNBQVM7MkJBQ0Usb0NBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFVzZXIyMyB9IGZyb20gJy4uLy4uL21vZGVscy91c2VyMjMnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZXNob3AtZnJvbnRlbmQtY2hlY2tvdXQtbXktcHJvZmlsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL215LXByb2ZpbGUtY2hlY2tvdXQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbXktcHJvZmlsZS1jaGVja291dC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE15UHJvZmlsZUNoZWNrT3V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgZGlzcGxheUVycm9yOmJvb2xlYW4gPSBmYWxzZTtcclxuICB1c2VyOlVzZXIyMztcclxuICBcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcjIzKCk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnBhcnNlSnd0KHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJhdXRoVG9rZW5cIikpKTtcclxuICAgIGxldCBkYXRhID0gIHRoaXMucGFyc2VKd3Qoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImF1dGhUb2tlblwiKSk7XHJcbiAgICBjb25zb2xlLmxvZyhcImRhdGEgPSBcIiArIGRhdGEuY291bnRyeSk7XHJcbiAgIFxyXG4gICAgdGhpcy51c2VyLmNvdW50cnk9ICBkYXRhLmNvdW50cnk7XHJcbiAgICB0aGlzLnVzZXIuYWRkcmVzczE9IGRhdGFbJ2FkZHJlc3MxJ107XHJcbiAgICB0aGlzLnVzZXIuYWRkcmVzczI9IGRhdGEuYWRkcmVzczI7XHJcbiAgICB0aGlzLnVzZXIuZGF0ZT0gZGF0YS5kYXRlT2ZCaXJ0aDtcclxuICAgIHRoaXMudXNlci5lbWFpbD0gIGRhdGEuZW1haWw7XHJcbiAgICB0aGlzLnVzZXIucGhvbmU9ICBkYXRhLnBob25lO1xyXG4gICAgdGhpcy51c2VyLnBvc3RhbENvZGU9ICBkYXRhLnBvc3RhbENvZGU7XHJcbiAgICB0aGlzLnVzZXIuc2V4PSAgZGF0YS5nZW5kZXI7XHJcbiAgICB0aGlzLnVzZXIuZk5hbWUgPSBkYXRhLmZOYW1lO1xyXG4gICAgdGhpcy51c2VyLmxOYW1lID0gZGF0YS5sTmFtZTtcclxuICAgIHRoaXMudXNlci5yZWdpb24gPSBkYXRhLnJlZ2lvbjtcclxuICAgIHRoaXMudXNlci5jaXR5ID0gZGF0YS5jaXR5O1xyXG4gICAgdGhpcy51c2VyLnN0YXRlID0gZGF0YS5zdGF0ZTtcclxuICAgIHRoaXMudXNlci5wcmVmaXggPSBkYXRhLnByZWZpeDtcclxuICAgfVxyXG5cclxuXHJcblxyXG4gIHBhcnNlSnd0ICh0b2tlbikge1xyXG4gICAgdmFyIGJhc2U2NFVybCA9IHRva2VuLnNwbGl0KCcuJylbMV07XHJcbiAgICB2YXIgYmFzZTY0ID0gYmFzZTY0VXJsLnJlcGxhY2UoLy0vZywgJysnKS5yZXBsYWNlKC9fL2csICcvJyk7XHJcbiAgICB2YXIganNvblBheWxvYWQgPSBkZWNvZGVVUklDb21wb25lbnQod2luZG93LmF0b2IoYmFzZTY0KS5zcGxpdCgnJykubWFwKGZ1bmN0aW9uKGMpIHtcclxuICAgICAgICByZXR1cm4gJyUnICsgKCcwMCcgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpKS5zbGljZSgtMik7XHJcbiAgICB9KS5qb2luKCcnKSk7XHJcblxyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UoanNvblBheWxvYWQpO1xyXG59O1xyXG5cclxuXHJcbiAgbG9nb3V0KCl7XHJcbiAgICBjb25zb2xlLmxvZyhcImxvZ291dFwiKTtcclxuICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJhdXRoVG9rZW5cIik7XHJcbiAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwiZW1haWxcIik7XHJcbiAgICBoaXN0b3J5LmJhY2soKTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICA8Zm9ybT5cclxuICAgICAgICA8aDIgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPllvdXIgU2hpcHBpbmcgQWRkcmVzczwvaDI+XHJcbiAgICA8ZGl2IGNsYXNzPVwicm93IGp1bWJvdHJvblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNiBmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lLWZcIiA+Rmlyc3QgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCAgWyhuZ01vZGVsKV09XCJ1c2VyLmZOYW1lXCIgICBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJmbmFtZVwiIGlkPVwibmFtZS1mXCIgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGZpcnN0IG5hbWUuXCIgZGlzYWJsZWQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS02IGZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5hbWUtbFwiICA+TGFzdCBuYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0ICAgWyhuZ01vZGVsKV09XCJ1c2VyLmxOYW1lXCIgICBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCIgIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwibG5hbWVcIiBpZD1cIm5hbWUtbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBsYXN0IG5hbWUuXCIgZGlzYWJsZWQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS02IGZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCIgID5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCBbKG5nTW9kZWwpXT1cInVzZXIuZW1haWxcIiAgIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIiAgICAgdHlwZT1cImVtYWlsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGVtYWlsLlwiIGRpc2FibGVkPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTYgZm9ybS1ncm91cFwiPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS02IGZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cIlN0YXRlXCIgID5Qcm92aW5jZS9yZWdpb248L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgIFsobmdNb2RlbCldPVwidXNlci5yZWdpb25cIiAgIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIiAgICB0eXBlPVwiYWRkcmVzc1wiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIlN0YXRlXCIgaWQ9XCJTdGF0ZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBwcm92aW5jZS9kaXN0cmljdC9yZWdpb24gbmFtZVwiIGRpc2FibGVkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNCBmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJTdGF0ZVwiICA+Q2l0eTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCAgWyhuZ01vZGVsKV09XCJ1c2VyLmNpdHlcIiAgIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIiAgICB0eXBlPVwiYWRkcmVzc1wiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIlN0YXRlXCIgaWQ9XCJTdGF0ZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBjaXR5IG5hbWVcIiBkaXNhYmxlZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTIgZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiemlwXCI+UG9zdGFsLUNvZGU8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgICBbKG5nTW9kZWwpXT1cInVzZXIucG9zdGFsQ29kZVwiICAgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiICAgICB0eXBlPVwiemlwXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiWmlwXCIgaWQ9XCJ6aXBcIiBwbGFjZWhvbGRlcj1cIlBvc3RhbC1Db2RlLlwiIGRpc2FibGVkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNiBmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJhZGRyZXNzLTFcIiAgPkFkZHJlc3MgTGluZS0xPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0ICBbKG5nTW9kZWwpXT1cInVzZXIuYWRkcmVzczFcIiAgIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIiAgICAgdHlwZT1cImFkZHJlc3NcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJMb2NhbGl0eVwiIGlkPVwiYWRkcmVzcy0xXCIgcGxhY2Vob2xkZXI9XCJMb2NhbGl0eS9Ib3VzZS9TdHJlZXQgbm8uXCIgZGlzYWJsZWQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS02IGZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImFkZHJlc3MtMlwiICA+QWRkcmVzcyBMaW5lLTI8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgIFsobmdNb2RlbCldPVwidXNlci5hZGRyZXNzMlwiICAgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiICAgICAgIHR5cGU9XCJhZGRyZXNzXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiYWRkcmVzc1wiIGlkPVwiYWRkcmVzcy0yXCIgcGxhY2Vob2xkZXI9XCJldmVudHVhbCBvdGhlciBpbmZvcm1hdGlvbnNcIiBkaXNhYmxlZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTYgZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiQ291bnRyeVwiPkNvdW50cnk8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgWyhuZ01vZGVsKV09XCJ1c2VyLmNvdW50cnlcIiAgIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIiAgICAgdHlwZT1cImFkZHJlc3NcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJDb3VudHJ5XCIgaWQ9XCJDb3VudHJ5XCIgcGxhY2Vob2xkZXI9XCJDb3VudHJ5XCIgZGlzYWJsZWQ+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNiBmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJEYXRlXCI+RGF0ZSBPZiBCaXJ0aDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCAgWyhuZ01vZGVsKV09XCJ1c2VyLmRhdGVcIiAgIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIiAgICB0eXBlPVwiRGF0ZVwiIG5hbWU9XCJkb2JcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiRGF0ZVwiIHBsYWNlaG9sZGVyPVwiXCIgZGlzYWJsZWQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS02IGZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInNleFwiPkdlbmRlcjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCBbKG5nTW9kZWwpXT1cInVzZXIuc2V4XCIgICBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCIgICAgIHR5cGU9XCJzZXhcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJzZXhcIiBpZD1cInNleFwiIHBsYWNlaG9sZGVyPVwic2V4XCIgZGlzYWJsZWQ+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMiBmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjb2RcIj5Db3VudHJ5IGNvZGU8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgIFsobmdNb2RlbCldPVwidXNlci5wcmVmaXhcIiAgIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIiAgICB0eXBlPVwicHJlZml4XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwicHJlZml4XCIgaWQ9XCJwcmVmaXhcIiBwbGFjZWhvbGRlcj1cInByZWZpeFwiIGRpc2FibGVkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNCBmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0ZWxcIj5QaG9uZTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCAgWyhuZ01vZGVsKV09XCJ1c2VyLnBob25lXCIgICBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCIgICAgdHlwZT1cInRlbFwiIG5hbWU9XCJwaG9uZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJ0ZWxcIiBwbGFjZWhvbGRlcj1cIkVudGVyIFlvdXIgQ29udGFjdCBOdW1iZXJcIiBkaXNhYmxlZD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3JcIiAqbmdJZj1cImRpc3BsYXlFcnJvclwiID57e2Vycm9yTXNnfX08L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMiBmb3JtLWdyb3VwIG1iLTAgbXQtMlwiIHN0eWxlPVwiZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW5cIj5cclxuXHJcbiAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBmbG9hdC1yaWdodFwiPkVkaXQ8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICA8L2Rpdj5cclxuICAgIDwvZm9ybT5cclxuPC9kaXY+XHJcbiJdfQ==