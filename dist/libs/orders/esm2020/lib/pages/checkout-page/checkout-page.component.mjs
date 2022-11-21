/** */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '@eshop-frontend/users';
import { KlarnaComponent } from '@eshop-frontend/users';
import { MessageService } from 'primeng/api';
import { Subject } from 'rxjs';
import { OrdersService } from '../../services/orders.service';
import { CartService } from '../../services/cart.service';
import { Order } from '../../models/order';
import { CheckoutService } from '../../services/checkout.service';
import { Cart } from '@eshop-frontend/users';
import { User } from '../../models/user';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@eshop-frontend/users";
import * as i3 from "@angular/forms";
import * as i4 from "../../services/cart.service";
import * as i5 from "../../services/orders.service";
import * as i6 from "primeng/api";
import * as i7 from "../../services/checkout.service";
import * as i8 from "primeng/button";
import * as i9 from "../../components/order-summary/order-summary.component";
import * as i10 from "@angular/common";
import * as i11 from "../my-profile-checkout/my-profile-checkout.component";
function CheckoutPageComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29);
    i0.ɵɵtext(1, "Please fill all the mandatory fields:");
    i0.ɵɵelementEnd();
} }
function CheckoutPageComponent_li_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const error_r2 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", error_r2, " ");
} }
export class CheckoutPageComponent {
    constructor(router, usersService, formBuilder, cartService, ordersService, messageService, checkout, kc, cart) {
        this.router = router;
        this.usersService = usersService;
        this.formBuilder = formBuilder;
        this.cartService = cartService;
        this.ordersService = ordersService;
        this.messageService = messageService;
        this.checkout = checkout;
        this.kc = kc;
        this.cart = cart;
        this.isSubmitted = false;
        this.orderItems = [];
        this.countries = [];
        this.unsubscribe$ = new Subject();
        this.paymentHandler = null;
        this.success = false;
        this.failure = false;
        this.user = new User;
    }
    ngOnInit() {
        this._initUserForm();
        this._autoFillUserData();
        this._getCountries();
        this._getCartItems();
        this.invokeStripe();
        this.data = this.parseJwt(sessionStorage.getItem("authToken"));
        this.user.country = this.data.country;
        this.user.address1 = this.data['address1'];
        this.user.address2 = this.data.address2;
        this.user.date = this.data.dateOfBirth;
        this.user.email = this.data.email;
        this.user.phone = this.data.phone;
        this.user.postalCode = this.data.postalCode;
        this.user.sex = this.data.gender;
        this.user.fName = this.data.fName;
        this.user.lName = this.data.lName;
        this.user.region = this.data.region;
        this.user.city = this.data.city;
        this.user.state = this.data.state;
        this.user.prefix = this.data.prefix;
        this.kc = new KlarnaComponent();
        this.kc.printHello();
        console.log("this user = " + JSON.stringify(this.user));
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
    _initUserForm() {
        this.checkoutFormGroup = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', Validators.required],
            city: ['', Validators.required],
            country: ['', Validators.required],
            zip: ['', Validators.required],
            apartment: ['', Validators.required],
            street: ['', Validators.required]
        });
    }
    _autoFillUserData() {
        /*
        this.usersService
          .observeCurrentUser()
          .pipe(takeUntil(this.unsubscribe$))
          .subscribe((user) => {
            if (user) {
              this.userId = user.id;
              this.checkoutForm.name.setValue(user.name);
              this.checkoutForm.email.setValue(user.email);
              this.checkoutForm.phone.setValue(user.phone);
              this.checkoutForm.city.setValue(user.city);
              this.checkoutForm.street.setValue(user.street);
              this.checkoutForm.country.setValue(user.country);
              this.checkoutForm.zip.setValue(user.zip);
              this.checkoutForm.apartment.setValue(user.apartment);
            }
          });
          */
    }
    _getCartItems() {
    }
    _getCountries() {
        this.countries = this.usersService.getCountries();
        console.log(this.countries);
    }
    backToCart() {
        this.router.navigate(['/cart']);
    }
    async placeOrder() {
        console.log("total price = " + this.cart.getTotalPrice());
        if (this.checkShippingAddress()) {
            //this.makePayment(this.cart.getTotalPrice());
            //await this.kc.pay(this.cart.getTotalPrice());
            this.router.navigate(['/payment/options']);
            this.errorMessage = false;
        }
        else {
            console.log("error in the shipping address");
            this.errorMessage = true;
        }
    }
    checkShippingAddress() {
        this.data = this.parseJwt(sessionStorage.getItem("authToken"));
        this.user.country = this.data.country;
        this.user.address1 = this.data['address1'];
        this.user.address2 = this.data.address2;
        this.user.date = this.data.dateOfBirth;
        this.user.email = this.data.email;
        this.user.phone = this.data.phone;
        this.user.postalCode = this.data.postalCode;
        this.user.sex = this.data.gender;
        this.user.fName = this.data.fName;
        this.user.lName = this.data.lName;
        this.user.region = this.data.region;
        this.user.city = this.data.city;
        this.user.state = this.data.state;
        this.user.prefix = this.data.prefix;
        this.errormessage = [];
        console.log("this errormessage array = " + JSON.stringify(this.errormessage));
        if (this.user.fName == null || this.user.fName == '') {
            this.errormessage.push("please provide a name");
        }
        if (this.user.lName == null || this.user.lName == '') {
            this.errormessage.push("please provide a surname");
        }
        if (this.user.address1 == null || this.user.address1 == '') {
            this.errormessage.push("please provide an address");
        }
        if (this.user.city == null || this.user.city == '') {
            this.errormessage.push("please provide a city");
        }
        if (this.user.country == null || this.user.country == '') {
            this.errormessage.push("please provide a country");
        }
        if (this.user.postalCode == null || this.user.postalCode == '') {
            this.errormessage.push("please provide a postal code");
        }
        if (this.user.prefix == null || this.user.prefix == '') {
            this.errormessage.push("please provide a prefix");
        }
        if (this.user.phone == null || this.user.phone == '') {
            this.errormessage.push("please provide a phone number");
        }
        if (this.errormessage.length == 0) {
            return true;
        }
        return false;
    }
    get checkoutForm() {
        return this.checkoutFormGroup.controls;
    }
    makePayment(amount) {
        document.getElementById('page-mask').style.display = "block";
        const paymentHandler = window.StripeCheckout.configure({
            key: 'pk_test_51LYUCGDEyiX3e3Pl89jqmVg1gTN2QhifywtIlg6Az1niGUV3ANRpANXJ8hdEIjwDNa8GTBvnrxq3zgdR8gEzxgRT00uHlftQnF',
            locale: 'auto',
            token: function (stripeToken) {
                console.log(stripeToken);
                paymentstripe(stripeToken);
            },
        });
        const paymentstripe = (stripeToken) => {
            const modal = document.querySelector(".modal");
            modal.classList.add("show");
            modal.style.display = "block";
            document.getElementById("closeModal").addEventListener('click', () => {
                modal.classList.remove("show");
                modal.style.display = "none";
                document.getElementById('page-mask').style.display = "none";
            });
            this.checkout.makePayment(stripeToken, amount).subscribe((data) => {
                console.log(data);
                document.getElementById("closeModalFooter").style.display = "block";
                document.getElementById("loadingSpinner").style.display = "none";
                const now = new Date();
                let order = new Order;
                order.city = this.user.city;
                order.country = this.user.country;
                order.dateOrdered = String(now);
                order.id = '123123123';
                order.phone = this.user.phone;
                order.shippingAddress1 = this.user.address1;
                order.totalPrice = String(this.cart.getTotalPrice());
                order.zip = this.user.postalCode;
                order.confirmed = false;
                order.user = this.data.userId;
                order.id = null;
                let variants = this.cart.getAllVariants();
                console.log("variants = " + JSON.stringify(variants));
                order.orderItems = this.cart.getAllVariants();
                if (data.data === "success") {
                    this.success = true;
                    this.failure = false;
                    this.ordersService.createNewOrder(order, this.user.email, this.user.prefix).subscribe((data) => {
                        console.log("I am creating this new order: " + JSON.stringify(data));
                        console.log("data: " + data);
                        document.getElementById("exampleModalLabel").innerText = "Your order number is: " + data._id;
                        //  sessionStorage.setItem()
                        localStorage.removeItem("cartByLuca");
                        this.cartService.getCart();
                        this.cart.emptyCart();
                        this.router.navigate(['/orders/' + data._id]);
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Succes',
                            detail: `Succesful transaction!`
                        });
                    });
                    document.getElementById("success").style.display = "block";
                }
                else {
                    this.failure = true;
                    this.success = false;
                    document.getElementById("failed").style.display = "block";
                }
            });
        };
        paymentHandler.open({
            name: 'Cataldo Store',
            description: 'Please fill your billing informations',
            amount: amount * 100,
        });
    }
    invokeStripe() {
        if (!window.document.getElementById('stripe-script')) {
            const script = window.document.createElement('script');
            script.id = 'stripe-script';
            script.type = 'text/javascript';
            script.src = 'https://checkout.stripe.com/checkout.js';
            script.onload = () => {
                this.paymentHandler = window.StripeCheckout.configure({
                    key: 'pk_test_51LYUCGDEyiX3e3Pl89jqmVg1gTN2QhifywtIlg6Az1niGUV3ANRpANXJ8hdEIjwDNa8GTBvnrxq3zgdR8gEzxgRT00uHlftQnF',
                    locale: 'auto',
                    token: function (stripeToken) {
                        console.log(stripeToken);
                    },
                });
            };
            window.document.body.appendChild(script);
        }
    }
}
CheckoutPageComponent.ɵfac = function CheckoutPageComponent_Factory(t) { return new (t || CheckoutPageComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.UsersService), i0.ɵɵdirectiveInject(i3.FormBuilder), i0.ɵɵdirectiveInject(i4.CartService), i0.ɵɵdirectiveInject(i5.OrdersService), i0.ɵɵdirectiveInject(i6.MessageService), i0.ɵɵdirectiveInject(i7.CheckoutService), i0.ɵɵdirectiveInject(i2.KlarnaComponent), i0.ɵɵdirectiveInject(i2.Cart)); };
CheckoutPageComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CheckoutPageComponent, selectors: [["orders-checkout-page"]], features: [i0.ɵɵProvidersFeature([KlarnaComponent])], decls: 38, vars: 2, consts: [[1, "p-2"], [1, "checkout-page", "pb-5"], ["label", "Torna al carrello", "icon", "pi pi-arrow-left", 3, "onClick"], [1, "grid", "checkout-form", "p-2"], [1, "row", 2, "justify-content", "center"], [1, "col-md-4"], ["id", "page-mask", 2, "display", "none"], ["id", "exampleModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade", "border", "border-info"], [1, "modal-dialog", "border", "border-info", "border-4", "rounded"], [1, "modal-content"], [1, "modal-header"], [1, "row"], [1, "col-auto"], [1, "d-flex", "justify-content-center"], ["id", "loadingSpinner", "role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "col"], ["id", "exampleModalLabel", 1, "modal-title"], ["id", "closeModal", "type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], ["id", "modalBody", 1, "modal-body"], ["id", "success", 1, "text-success", 2, "font-weight", "800", "display", "none"], ["id", "failed", 1, "text-danger", 2, "font-weight", "800", "display", "none"], [1, "modal-footer"], ["id", "closeModalFooter", 1, "text-secondary", 2, "font-size", "smaller", "display", "none"], [1, "checkout-button"], ["label", "Procedi", 3, "onClick"], ["class", "error mt-2", "style", "font-size: 29px; color:red; font-weight: 800;", 4, "ngIf"], ["style", "font-size: 20px; color:red; font-weight: 500;", 4, "ngFor", "ngForOf"], [1, "col-12", "col-md-8", "col-lg-8"], [1, "error", "mt-2", 2, "font-size", "29px", "color", "red", "font-weight", "800"], [2, "font-size", "20px", "color", "red", "font-weight", "500"]], template: function CheckoutPageComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "p-button", 2);
        i0.ɵɵlistener("onClick", function CheckoutPageComponent_Template_p_button_onClick_3_listener() { return ctx.backToCart(); });
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(4, "div", 3)(5, "div", 4)(6, "div", 5);
        i0.ɵɵelement(7, "div", 6);
        i0.ɵɵelementStart(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "div", 11)(13, "div", 12)(14, "div", 13)(15, "div", 14)(16, "span", 15);
        i0.ɵɵtext(17, "Loading...");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(18, "div", 16)(19, "h5", 17);
        i0.ɵɵtext(20, "We are validating your transaction, please wait");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelement(21, "button", 18);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "div", 19)(23, "div", 20);
        i0.ɵɵtext(24, " Transaction succesfull!");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "div", 21);
        i0.ɵɵtext(26, " Transaction failed!");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(27, "div", 22)(28, "div", 23);
        i0.ɵɵtext(29, " Now you can close this modal");
        i0.ɵɵelementEnd()()()()();
        i0.ɵɵelement(30, "orders-order-summary");
        i0.ɵɵelementStart(31, "div", 24)(32, "p-button", 25);
        i0.ɵɵlistener("onClick", function CheckoutPageComponent_Template_p_button_onClick_32_listener() { return ctx.placeOrder(); });
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(33, CheckoutPageComponent_div_33_Template, 2, 0, "div", 26);
        i0.ɵɵelementStart(34, "ul");
        i0.ɵɵtemplate(35, CheckoutPageComponent_li_35_Template, 2, 1, "li", 27);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(36, "div", 28);
        i0.ɵɵelement(37, "eshop-frontend-checkout-my-profile");
        i0.ɵɵelementEnd()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(33);
        i0.ɵɵproperty("ngIf", ctx.errorMessage);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.errormessage);
    } }, directives: [i8.Button, i9.OrderSummaryComponent, i10.NgIf, i10.NgForOf, i11.MyProfileCheckOutComponent], styles: ["#page-mask[_ngcontent-%COMP%]{background:rgba(0,0,0,.5);position:fixed;top:0;right:0;bottom:0;left:0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CheckoutPageComponent, [{
        type: Component,
        args: [{ selector: 'orders-checkout-page', styles: [`#page-mask {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }`], providers: [KlarnaComponent], template: "<script src=\"https://js.stripe.com/v3/\" defer></script>\r\n<div class=\"p-2\">\r\n<div class=\"checkout-page pb-5\">\r\n    <div>\r\n        <p-button label=\"Torna al carrello\" icon=\"pi pi-arrow-left\" (onClick)=\"backToCart()\"></p-button>\r\n    </div>\r\n</div>\r\n<div class=\"grid checkout-form p-2\">\r\n\r\n  <div class=\"row\" style=\"justify-content: center;\">\r\n    <div class=\"col-md-4\">\r\n\r\n    <div id=\"page-mask\" style=\"display: none;\"></div>\r\n\r\n      <!-- Modal -->\r\n      <div class=\"modal fade border border-info\" id=\"exampleModal\" tabindex=\"-1\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog border border-info border-4 rounded\">\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <div class=\"row\">\r\n                <div class=\"col-auto \" >\r\n                  <div class=\"d-flex justify-content-center\">\r\n                    <div id=\"loadingSpinner\" class=\"spinner-border text-primary\" role=\"status\">\r\n                      <span class=\"visually-hidden\">Loading...</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col\"><h5 class=\"modal-title\" id=\"exampleModalLabel\">We are validating your transaction, please wait</h5></div>\r\n              </div>\r\n\r\n\r\n              <button id=\"closeModal\" type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\r\n            </div>\r\n            <div id=\"modalBody\" class=\"modal-body\">\r\n              <div id=\"success\" class=\"text-success\" style=\"font-weight: 800; display: none;\"> Transaction succesfull!</div>\r\n              <div id=\"failed\" class=\"text-danger\" style=\"font-weight: 800; display: none;\"> Transaction failed!</div>\r\n\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <div id=\"closeModalFooter\" class=\"text-secondary\" style=\"font-size:smaller; display: none;\"> Now you can close this modal</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <orders-order-summary></orders-order-summary>\r\n      <div class=\"checkout-button\">\r\n        <p-button label=\"Procedi\" (onClick)=\"placeOrder()\"></p-button>\r\n      </div>\r\n\r\n      <div class=\"error mt-2\" style=\"font-size: 29px; color:red; font-weight: 800;\" *ngIf=\"errorMessage\" >Please fill all the mandatory fields:</div>\r\n      <ul>\r\n        <li style=\"font-size: 20px; color:red; font-weight: 500;\"  *ngFor=\"let error of errormessage\">\r\n            {{error}}\r\n        </li>\r\n      </ul>\r\n\r\n\r\n\r\n    </div>\r\n    <div class=\"col-12 col-md-8 col-lg-8\">\r\n      <eshop-frontend-checkout-my-profile></eshop-frontend-checkout-my-profile>\r\n\r\n    </div>\r\n  </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n" }]
    }], function () { return [{ type: i1.Router }, { type: i2.UsersService }, { type: i3.FormBuilder }, { type: i4.CartService }, { type: i5.OrdersService }, { type: i6.MessageService }, { type: i7.CheckoutService }, { type: i2.KlarnaComponent }, { type: i2.Cart }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL29yZGVycy9zcmMvbGliL3BhZ2VzL2NoZWNrb3V0LXBhZ2UvY2hlY2tvdXQtcGFnZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL29yZGVycy9zcmMvbGliL3BhZ2VzL2NoZWNrb3V0LXBhZ2UvY2hlY2tvdXQtcGFnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFhLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUcsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFBO0FBRXZELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDN0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRTFELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbEUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzdDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7SUNnQ25DLCtCQUFvRztJQUFBLHFEQUFxQztJQUFBLGlCQUFNOzs7SUFFN0ksOEJBQThGO0lBQzFGLFlBQ0o7SUFBQSxpQkFBSzs7O0lBREQsZUFDSjtJQURJLHlDQUNKOztBRG5CUixNQUFNLE9BQU8scUJBQXFCO0lBS2hDLFlBQW9CLE1BQWMsRUFDeEIsWUFBMEIsRUFDMUIsV0FBd0IsRUFDeEIsV0FBd0IsRUFDeEIsYUFBNEIsRUFDNUIsY0FBOEIsRUFDOUIsUUFBeUIsRUFDekIsRUFBb0IsRUFDcEIsSUFBVTtRQVJBLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDeEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBQ3pCLE9BQUUsR0FBRixFQUFFLENBQWtCO1FBQ3BCLFNBQUksR0FBSixJQUFJLENBQU07UUFNUixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixlQUFVLEdBQWdCLEVBQUUsQ0FBQztRQUU3QixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2QsaUJBQVksR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUMzQyxtQkFBYyxHQUFRLElBQUksQ0FBQztRQUMzQixZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLFlBQU8sR0FBVyxLQUFLLENBQUM7UUFYdkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQztJQUN2QixDQUFDO0lBZ0JiLFFBQVE7UUFDTixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksR0FBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzNDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxD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LElBQUksQ0FBQyxLQUFLLEdBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDekMsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFFdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQzlFLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsRUFBRTtZQUNuRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1NBQ2pEO1FBQ0QsSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxFQUFDO1lBQ2xELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUM7U0FDcEQ7UUFDRCxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLEVBQUM7WUFDeEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsQ0FBQztTQUNyRDtRQUNELElBQUcsSUFB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QUMsZUFBZSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXNlcjIzIH0gZnJvbSAnLi8uLi8uLi9tb2RlbHMvdXNlcjIzJztcclxuLyoqICovXHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7ICBVc2Vyc1NlcnZpY2UgfSBmcm9tICdAZXNob3AtZnJvbnRlbmQvdXNlcnMnO1xyXG5pbXBvcnQgeyBLbGFybmFDb21wb25lbnQgfSBmcm9tICdAZXNob3AtZnJvbnRlbmQvdXNlcnMnXHJcblxyXG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJ3ByaW1lbmcvYXBpJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE9yZGVyc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vcmRlcnMuc2VydmljZSc7XHJcbmltcG9ydCB7IENhcnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2FydC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgT3JkZXJJdGVtIH0gZnJvbSAnLi4vLi4vbW9kZWxzL29yZGVyLWl0ZW0nO1xyXG5pbXBvcnQgeyBPcmRlciB9IGZyb20gJy4uLy4uL21vZGVscy9vcmRlcic7XHJcbmltcG9ydCB7IENoZWNrb3V0U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NoZWNrb3V0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnQGVzaG9wLWZyb250ZW5kL3VzZXJzJztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL21vZGVscy91c2VyJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ29yZGVycy1jaGVja291dC1wYWdlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY2hlY2tvdXQtcGFnZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVzOiBbYCNwYWdlLW1hc2sge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gIH1gXSxcclxuICBwcm92aWRlcnM6IFtLbGFybmFDb21wb25lbnRdXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRQYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgZXJyb3JNZXNzYWdlOiBib29sZWFuO1xyXG4gIGVycm9ybWVzc2FnZTogU3RyaW5nW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIHVzZXJzU2VydmljZTogVXNlcnNTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXHJcbiAgICBwcml2YXRlIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSxcclxuICAgIHByaXZhdGUgb3JkZXJzU2VydmljZTogT3JkZXJzU2VydmljZSxcclxuICAgIHByaXZhdGUgbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjaGVja291dDogQ2hlY2tvdXRTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBrYyA6IEtsYXJuYUNvbXBvbmVudCxcclxuICAgIHByaXZhdGUgY2FydDogQ2FydCxcclxuICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXNlciA9IG5ldyBVc2VyO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgY2hlY2tvdXRGb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuICAgICAgICAgICAgICBpc1N1Ym1pdHRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIG9yZGVySXRlbXM6IE9yZGVySXRlbVtdID0gW107XHJcbiAgICAgICAgICAgICAgdXNlcklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgY291bnRyaWVzID0gW107XHJcbiAgICAgICAgICAgICAgIHVuc3Vic2NyaWJlJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcclxuICAgICAgICAgICAgICAgcGF5bWVudEhhbmRsZXI6IGFueSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgZmFpbHVyZTpib29sZWFuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgIHVzZXI6IFVzZXI7XHJcbiAgICAgICAgICAgICAgIGRhdGE7XHJcblxyXG5cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9pbml0VXNlckZvcm0oKTtcclxuICAgIHRoaXMuX2F1dG9GaWxsVXNlckRhdGEoKTtcclxuICAgIHRoaXMuX2dldENvdW50cmllcygpO1xyXG4gICAgdGhpcy5fZ2V0Q2FydEl0ZW1zKCk7XHJcbiAgICB0aGlzLmludm9rZVN0cmlwZSgpO1xyXG4gICAgdGhpcy5kYXRhID0gIHRoaXMucGFyc2VKd3Qoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImF1dGhUb2tlblwiKSk7XHJcbiAgICB0aGlzLnVzZXIuY291bnRyeT0gICAgICB0aGlzLmRhdGEuY291bnRyeTtcclxuICAgIHRoaXMudXNlci5hZGRyZXNzMT0gICAgIHRoaXMuZGF0YVsnYWRkcmVzczEnXTtcclxuICAgIHRoaXMudXNlci5hZGRyZXNzMj0gICAgIHRoaXMuZGF0YS5hZGRyZXNzMjtcclxuICAgIHRoaXMudXNlci5kYXRlPSAgICAgICAgIHRoaXMuZGF0YS5kYXRlT2ZCaXJ0aDtcclxuICAgIHRoaXMudXNlci5lbWFpbD0gICAgICAgIHRoaXMuZGF0YS5lbWFpbDtcclxuICAgIHRoaXMudXNlci5waG9uZT0gICAgICAgIHRoaXMuZGF0YS5waG9uZTtcclxuICAgIHRoaXMudXNlci5wb3N0YWxDb2RlPSAgIHRoaXMuZGF0YS5wb3N0YWxDb2RlO1xyXG4gICAgdGhpcy51c2VyLnNleD0gICAgICAgICAgdGhpcy5kYXRhLmdlbmRlcjtcclxuICAgIHRoaXMudXNlci5mTmFtZSA9ICAgICAgIHRoaXMuZGF0YS5mTmFtZTtcclxuICAgIHRoaXMudXNlci5sTmFtZSA9ICAgICAgIHRoaXMuZGF0YS5sTmFtZTtcclxuICAgIHRoaXMudXNlci5yZWdpb24gPSAgICAgIHRoaXMuZGF0YS5yZWdpb247XHJcbiAgICB0aGlzLnVzZXIuY2l0eSA9ICAgICAgICB0aGlzLmRhdGEuY2l0eTtcclxuICAgIHRoaXMudXNlci5zdGF0ZSA9ICAgICAgIHRoaXMuZGF0YS5zdGF0ZTtcclxuICAgIHRoaXMudXNlci5wcmVmaXggPSAgICAgIHRoaXMuZGF0YS5wcmVmaXg7XHJcbiAgICB0aGlzLmtjID0gbmV3IEtsYXJuYUNvbXBvbmVudCgpO1xyXG4gICAgdGhpcy5rYy5wcmludEhlbGxvKCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJ0aGlzIHVzZXIgPSBcIiArIEpTT04uc3RyaW5naWZ5KHRoaXMudXNlcikpO1xyXG4gIFxyXG5cclxuXHJcbiAgfVxyXG4gIHBhcnNlSnd0ICh0b2tlbikge1xyXG4gICAgdmFyIGJhc2U2NFVybCA9IHRva2VuLnNwbGl0KCcuJylbMV07XHJcbiAgICB2YXIgYmFzZTY0ID0gYmFzZTY0VXJsLnJlcGxhY2UoLy0vZywgJysnKS5yZXBsYWNlKC9fL2csICcvJyk7XHJcbiAgICB2YXIganNvblBheWxvYWQgPSBkZWNvZGVVUklDb21wb25lbnQod2luZG93LmF0b2IoYmFzZTY0KS5zcGxpdCgnJykubWFwKGZ1bmN0aW9uKGMpIHtcclxuICAgICAgICByZXR1cm4gJyUnICsgKCcwMCcgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpKS5zbGljZSgtMik7XHJcbiAgICB9KS5qb2luKCcnKSk7XHJcblxyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UoanNvblBheWxvYWQpO1xyXG59O1xyXG5cclxuICBwcml2YXRlIF9pbml0VXNlckZvcm0oKSB7XHJcbiAgICB0aGlzLmNoZWNrb3V0Rm9ybUdyb3VwID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgIG5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgIGVtYWlsOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLmVtYWlsXV0sXHJcbiAgICAgIHBob25lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICBjaXR5OiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICBjb3VudHJ5OiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICB6aXA6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgIGFwYXJ0bWVudDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgc3RyZWV0OiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIF9hdXRvRmlsbFVzZXJEYXRhKCkge1xyXG4gICAgLypcclxuICAgIHRoaXMudXNlcnNTZXJ2aWNlXHJcbiAgICAgIC5vYnNlcnZlQ3VycmVudFVzZXIoKVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKVxyXG4gICAgICAuc3Vic2NyaWJlKCh1c2VyKSA9PiB7XHJcbiAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAgIHRoaXMudXNlcklkID0gdXNlci5pZDtcclxuICAgICAgICAgIHRoaXMuY2hlY2tvdXRGb3JtLm5hbWUuc2V0VmFsdWUodXNlci5uYW1lKTtcclxuICAgICAgICAgIHRoaXMuY2hlY2tvdXRGb3JtLmVtYWlsLnNldFZhbHVlKHVzZXIuZW1haWwpO1xyXG4gICAgICAgICAgdGhpcy5jaGVja291dEZvcm0ucGhvbmUuc2V0VmFsdWUodXNlci5waG9uZSk7XHJcbiAgICAgICAgICB0aGlzLmNoZWNrb3V0Rm9ybS5jaXR5LnNldFZhbHVlKHVzZXIuY2l0eSk7XHJcbiAgICAgICAgICB0aGlzLmNoZWNrb3V0Rm9ybS5zdHJlZXQuc2V0VmFsdWUodXNlci5zdHJlZXQpO1xyXG4gICAgICAgICAgdGhpcy5jaGVja291dEZvcm0uY291bnRyeS5zZXRWYWx1ZSh1c2VyLmNvdW50cnkpO1xyXG4gICAgICAgICAgdGhpcy5jaGVja291dEZvcm0uemlwLnNldFZhbHVlKHVzZXIuemlwKTtcclxuICAgICAgICAgIHRoaXMuY2hlY2tvdXRGb3JtLmFwYXJ0bWVudC5zZXRWYWx1ZSh1c2VyLmFwYXJ0bWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgKi9cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2dldENhcnRJdGVtcygpe1xyXG5cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2dldENvdW50cmllcygpe1xyXG4gICAgdGhpcy5jb3VudHJpZXMgPSB0aGlzLnVzZXJzU2VydmljZS5nZXRDb3VudHJpZXMoKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuY291bnRyaWVzKTtcclxuICB9XHJcblxyXG5cclxuICBiYWNrVG9DYXJ0KCl7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9jYXJ0J10pO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgcGxhY2VPcmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKFwidG90YWwgcHJpY2UgPSBcIiArIHRoaXMuY2FydC5nZXRUb3RhbFByaWNlKCkpO1xyXG5cclxuICAgIGlmKHRoaXMuY2hlY2tTaGlwcGluZ0FkZHJlc3MoKSl7XHJcbiAgICAgIC8vdGhpcy5tYWtlUGF5bWVudCh0aGlzLmNhcnQuZ2V0VG90YWxQcmljZSgpKTtcclxuICAgICAgLy9hd2FpdCB0aGlzLmtjLnBheSh0aGlzLmNhcnQuZ2V0VG90YWxQcmljZSgpKTtcclxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvcGF5bWVudC9vcHRpb25zJ10pO1xyXG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IGZhbHNlO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgaW4gdGhlIHNoaXBwaW5nIGFkZHJlc3NcIik7XHJcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gIH1cclxuXHJcbiAgY2hlY2tTaGlwcGluZ0FkZHJlc3MoKTogQm9vbGVhbntcclxuICAgIHRoaXMuZGF0YSA9ICB0aGlzLnBhcnNlSnd0KHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJhdXRoVG9rZW5cIikpO1xyXG4gICAgdGhpcy51c2VyLmNvdW50cnk9ICAgICAgdGhpcy5kYXRhLmNvdW50cnk7XHJcbiAgICB0aGlzLnVzZXIuYWRkcmVzczE9ICAgICB0aGlzLmRhdGFbJ2FkZHJlc3MxJ107XHJcbiAgICB0aGlzLnVzZXIuYWRkcmVzczI9ICAgICB0aGlzLmRhdGEuYWRkcmVzczI7XHJcbiAgICB0aGlzLnVzZXIuZGF0ZT0gICAgICAgICB0aGlzLmRhdGEuZGF0ZU9mQmlydGg7XHJcbiAgICB0aGlzLnVzZXIuZW1haWw9ICAgICAgICB0aGlzLmRhdGEuZW1haWw7XHJcbiAgICB0aGlzLnVzZXIucGhvbmU9ICAgICAgICB0aGlzLmRhdGEucGhvbmU7XHJcbiAgICB0aGlzLnVzZXIucG9zdGFsQ29kZT0gICB0aGlzLmRhdGEucG9zdGFsQ29kZTtcclxuICAgIHRoaXMudXNlci5zZXg9ICAgICAgICAgIHRoaXMuZGF0YS5nZW5kZXI7XHJcbiAgICB0aGlzLnVzZXIuZk5hbWUgPSAgICAgICB0aGlzLmRhdGEuZk5hbWU7XHJcbiAgICB0aGlzLnVzZXIubE5hbWUgPSAgICAgICB0aGlzLmRhdGEubE5hbWU7XHJcbiAgICB0aGlzLnVzZXIucmVnaW9uID0gICAgICB0aGlzLmRhdGEucmVnaW9uO1xyXG4gICAgdGhpcy51c2VyLmNpdHkgPSAgICAgICAgdGhpcy5kYXRhLmNpdHk7XHJcbiAgICB0aGlzLnVzZXIuc3RhdGUgPSAgICAgICB0aGlzLmRhdGEuc3RhdGU7XHJcbiAgICB0aGlzLnVzZXIucHJlZml4ID0gICAgICB0aGlzLmRhdGEucHJlZml4O1xyXG4gICAgdGhpcy5lcnJvcm1lc3NhZ2UgPSBbXTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcInRoaXMgZXJyb3JtZXNzYWdlIGFycmF5ID0gXCIgKyBKU09OLnN0cmluZ2lmeSh0aGlzLmVycm9ybWVzc2FnZSkpO1xyXG4gICAgaWYodGhpcy51c2VyLmZOYW1lID09IG51bGwgfHwgdGhpcy51c2VyLmZOYW1lID09ICcnICl7XHJcbiAgICAgIHRoaXMuZXJyb3JtZXNzYWdlLnB1c2goXCJwbGVhc2UgcHJvdmlkZSBhIG5hbWVcIik7XHJcbiAgICB9XHJcbiAgICBpZih0aGlzLnVzZXIubE5hbWUgPT0gbnVsbCB8fCB0aGlzLnVzZXIubE5hbWUgPT0gJycpe1xyXG4gICAgICB0aGlzLmVycm9ybWVzc2FnZS5wdXNoKFwicGxlYXNlIHByb3ZpZGUgYSBzdXJuYW1lXCIpO1xyXG4gICAgfVxyXG4gICAgaWYodGhpcy51c2VyLmFkZHJlc3MxID09IG51bGwgfHwgdGhpcy51c2VyLmFkZHJlc3MxID09ICcnKXtcclxuICAgICAgdGhpcy5lcnJvcm1lc3NhZ2UucHVzaChcInBsZWFzZSBwcm92aWRlIGFuIGFkZHJlc3NcIik7XHJcbiAgICB9XHJcbiAgICBpZih0aGlzLnVzZXIuY2l0eSA9PSBudWxsIHx8IHRoaXMudXNlci5jaXR5ID09ICcnKXtcclxuICAgICAgdGhpcy5lcnJvcm1lc3NhZ2UucHVzaChcInBsZWFzZSBwcm92aWRlIGEgY2l0eVwiKTtcclxuICAgIH1cclxuICAgIGlmKHRoaXMudXNlci5jb3VudHJ5ID09IG51bGwgfHwgdGhpcy51c2VyLmNvdW50cnk9PSAnJyl7XHJcbiAgICAgIHRoaXMuZXJyb3JtZXNzYWdlLnB1c2goXCJwbGVhc2UgcHJvdmlkZSBhIGNvdW50cnlcIik7XHJcbiAgICB9XHJcbiAgICBpZih0aGlzLnVzZXIucG9zdGFsQ29kZSA9PSBudWxsIHx8IHRoaXMudXNlci5wb3N0YWxDb2RlID09ICcnKXtcclxuICAgICAgdGhpcy5lcnJvcm1lc3NhZ2UucHVzaChcInBsZWFzZSBwcm92aWRlIGEgcG9zdGFsIGNvZGVcIik7XHJcbiAgICB9XHJcbiAgICBpZih0aGlzLnVzZXIucHJlZml4ID09IG51bGwgfHwgdGhpcy51c2VyLnByZWZpeCA9PSAnJyl7XHJcbiAgICAgIHRoaXMuZXJyb3JtZXNzYWdlLnB1c2goXCJwbGVhc2UgcHJvdmlkZSBhIHByZWZpeFwiKTtcclxuICAgIH1cclxuICAgIGlmKHRoaXMudXNlci5waG9uZSA9PSBudWxsIHx8IHRoaXMudXNlci5waG9uZSA9PSAnJyl7XHJcbiAgICAgIHRoaXMuZXJyb3JtZXNzYWdlLnB1c2goXCJwbGVhc2UgcHJvdmlkZSBhIHBob25lIG51bWJlclwiKTtcclxuICAgIH1cclxuXHJcbiAgICBpZih0aGlzLmVycm9ybWVzc2FnZS5sZW5ndGggPT0gMCl7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNoZWNrb3V0Rm9ybSgpIHtcclxuICAgIHJldHVybiB0aGlzLmNoZWNrb3V0Rm9ybUdyb3VwLmNvbnRyb2xzO1xyXG4gIH1cclxuXHJcbiAgbWFrZVBheW1lbnQoYW1vdW50OiBudW1iZXIpIHtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZS1tYXNrJykuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHJcblxyXG4gICAgY29uc3QgcGF5bWVudEhhbmRsZXIgPSAoPGFueT53aW5kb3cpLlN0cmlwZUNoZWNrb3V0LmNvbmZpZ3VyZSh7XHJcbiAgICAgIGtleTogJ3BrX3Rlc3RfNTFMWVVDR0RFeWlYM2UzUGw4OWpxbVZnMWdUTjJRaGlmeXd0SWxnNkF6MW5pR1VWM0FOUnBBTlhKOGhkRUlqd0ROYThHVEJ2bnJ4cTN6Z2RSOGdFenhnUlQwMHVIbGZ0UW5GJyxcclxuICAgICAgbG9jYWxlOiAnYXV0bycsXHJcbiAgICAgIHRva2VuOiBmdW5jdGlvbiAoc3RyaXBlVG9rZW46IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHN0cmlwZVRva2VuKTtcclxuICAgICAgICBwYXltZW50c3RyaXBlKHN0cmlwZVRva2VuKTtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHBheW1lbnRzdHJpcGUgPSAoc3RyaXBlVG9rZW46IGFueSkgPT4ge1xyXG4gICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIikgYXMgSFRNTEVsZW1lbnQgfCBudWxsXHJcbiAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xyXG4gICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlTW9kYWxcIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcclxuICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlLW1hc2snKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLmNoZWNrb3V0Lm1ha2VQYXltZW50KHN0cmlwZVRva2VuLCBhbW91bnQpLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZU1vZGFsRm9vdGVyXCIpLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZGluZ1NwaW5uZXJcIikuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgICAgIGxldCBvcmRlcjogT3JkZXIgPSBuZXcgT3JkZXI7XHJcbiAgICAgICAgb3JkZXIuY2l0eSA9IHRoaXMudXNlci5jaXR5O1xyXG4gICAgICAgIG9yZGVyLmNvdW50cnkgPSB0aGlzLnVzZXIuY291bnRyeTtcclxuICAgICAgICBvcmRlci5kYXRlT3JkZXJlZCA9IFN0cmluZyhub3cpO1xyXG4gICAgICAgIG9yZGVyLmlkID0gJzEyMzEyMzEyMyc7XHJcbiAgICAgICAgb3JkZXIucGhvbmUgPSB0aGlzLnVzZXIucGhvbmU7XHJcbiAgICAgICAgb3JkZXIuc2hpcHBpbmdBZGRyZXNzMSA9IHRoaXMudXNlci5hZGRyZXNzMTtcclxuICAgICAgICBvcmRlci50b3RhbFByaWNlID0gU3RyaW5nKHRoaXMuY2FydC5nZXRUb3RhbFByaWNlKCkpO1xyXG4gICAgICAgIG9yZGVyLnppcCA9IHRoaXMudXNlci5wb3N0YWxDb2RlO1xyXG4gICAgICAgIG9yZGVyLmNvbmZpcm1lZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBvcmRlci51c2VyID0gdGhpcy5kYXRhLnVzZXJJZDtcclxuICAgICAgICBvcmRlci5pZCA9IG51bGw7XHJcbiAgICAgICAgbGV0IHZhcmlhbnRzID0gIHRoaXMuY2FydC5nZXRBbGxWYXJpYW50cygpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidmFyaWFudHMgPSBcIiArIEpTT04uc3RyaW5naWZ5KHZhcmlhbnRzKSk7XHJcbiAgICAgICAgb3JkZXIub3JkZXJJdGVtcyA9IHRoaXMuY2FydC5nZXRBbGxWYXJpYW50cygpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICBpZiAoZGF0YS5kYXRhID09PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgICAgdGhpcy5zdWNjZXNzID0gdHJ1ZTtcclxuICAgICAgICAgIHRoaXMuZmFpbHVyZSA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5vcmRlcnNTZXJ2aWNlLmNyZWF0ZU5ld09yZGVyKG9yZGVyLCB0aGlzLnVzZXIuZW1haWwsIHRoaXMudXNlci5wcmVmaXgpLnN1YnNjcmliZSgoZGF0YSkgPT57XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkkgYW0gY3JlYXRpbmcgdGhpcyBuZXcgb3JkZXI6IFwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGE6IFwiICsgZGF0YSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhhbXBsZU1vZGFsTGFiZWxcIikuaW5uZXJUZXh0PVwiWW91ciBvcmRlciBudW1iZXIgaXM6IFwiICsgZGF0YS5faWQ7XHJcblxyXG4gICAgICAgICAgLy8gIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oKVxyXG5cclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiY2FydEJ5THVjYVwiKTtcclxuICAgICAgICAgIHRoaXMuY2FydFNlcnZpY2UuZ2V0Q2FydCgpO1xyXG4gICAgICAgICAgdGhpcy5jYXJ0LmVtcHR5Q2FydCgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvb3JkZXJzLycgKyBkYXRhLl9pZF0pO1xyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmFkZCh7XHJcbiAgICAgICAgICAgICAgc2V2ZXJpdHk6ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICBzdW1tYXJ5OiAnU3VjY2VzJyxcclxuICAgICAgICAgICAgICBkZXRhaWw6IGBTdWNjZXNmdWwgdHJhbnNhY3Rpb24hYFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWNjZXNzXCIpLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmZhaWx1cmUgPSB0cnVlO1xyXG4gICAgICAgICAgdGhpcy5zdWNjZXNzID0gZmFsc2U7XHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZhaWxlZFwiKS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIjtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBwYXltZW50SGFuZGxlci5vcGVuKHtcclxuICAgICAgbmFtZTogJ0NhdGFsZG8gU3RvcmUnLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ1BsZWFzZSBmaWxsIHlvdXIgYmlsbGluZyBpbmZvcm1hdGlvbnMnLFxyXG4gICAgICBhbW91bnQ6IGFtb3VudCAqIDEwMCxcclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIGludm9rZVN0cmlwZSgpIHtcclxuICAgIGlmICghd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdHJpcGUtc2NyaXB0JykpIHtcclxuICAgICAgY29uc3Qgc2NyaXB0ID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgICBzY3JpcHQuaWQgPSAnc3RyaXBlLXNjcmlwdCc7XHJcbiAgICAgIHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XHJcbiAgICAgIHNjcmlwdC5zcmMgPSAnaHR0cHM6Ly9jaGVja291dC5zdHJpcGUuY29tL2NoZWNrb3V0LmpzJztcclxuICAgICAgc2NyaXB0Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnBheW1lbnRIYW5kbGVyID0gKDxhbnk+d2luZG93KS5TdHJpcGVDaGVja291dC5jb25maWd1cmUoe1xyXG4gICAgICAgICAga2V5OiAncGtfdGVzdF81MUxZVUNHREV5aVgzZTNQbDg5anFtVmcxZ1ROMlFoaWZ5d3RJbGc2QXoxbmlHVVYzQU5ScEFOWEo4aGRFSWp3RE5hOEdUQnZucnhxM3pnZFI4Z0V6eGdSVDAwdUhsZnRRbkYnLFxyXG4gICAgICAgICAgbG9jYWxlOiAnYXV0bycsXHJcbiAgICAgICAgICB0b2tlbjogZnVuY3Rpb24gKHN0cmlwZVRva2VuOiBhbnkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc3RyaXBlVG9rZW4pO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8c2NyaXB0IHNyYz1cImh0dHBzOi8vanMuc3RyaXBlLmNvbS92My9cIiBkZWZlcj48L3NjcmlwdD5cclxuPGRpdiBjbGFzcz1cInAtMlwiPlxyXG48ZGl2IGNsYXNzPVwiY2hlY2tvdXQtcGFnZSBwYi01XCI+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxwLWJ1dHRvbiBsYWJlbD1cIlRvcm5hIGFsIGNhcnJlbGxvXCIgaWNvbj1cInBpIHBpLWFycm93LWxlZnRcIiAob25DbGljayk9XCJiYWNrVG9DYXJ0KClcIj48L3AtYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwiZ3JpZCBjaGVja291dC1mb3JtIHAtMlwiPlxyXG5cclxuICA8ZGl2IGNsYXNzPVwicm93XCIgc3R5bGU9XCJqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNFwiPlxyXG5cclxuICAgIDxkaXYgaWQ9XCJwYWdlLW1hc2tcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+PC9kaXY+XHJcblxyXG4gICAgICA8IS0tIE1vZGFsIC0tPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWwgZmFkZSBib3JkZXIgYm9yZGVyLWluZm9cIiBpZD1cImV4YW1wbGVNb2RhbFwiIHRhYmluZGV4PVwiLTFcIiBhcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlTW9kYWxMYWJlbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2cgYm9yZGVyIGJvcmRlci1pbmZvIGJvcmRlci00IHJvdW5kZWRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWF1dG8gXCIgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibG9hZGluZ1NwaW5uZXJcIiBjbGFzcz1cInNwaW5uZXItYm9yZGVyIHRleHQtcHJpbWFyeVwiIHJvbGU9XCJzdGF0dXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmlzdWFsbHktaGlkZGVuXCI+TG9hZGluZy4uLjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj48aDUgY2xhc3M9XCJtb2RhbC10aXRsZVwiIGlkPVwiZXhhbXBsZU1vZGFsTGFiZWxcIj5XZSBhcmUgdmFsaWRhdGluZyB5b3VyIHRyYW5zYWN0aW9uLCBwbGVhc2Ugd2FpdDwvaDU+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiY2xvc2VNb2RhbFwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0bi1jbG9zZVwiIGRhdGEtYnMtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwibW9kYWxCb2R5XCIgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBpZD1cInN1Y2Nlc3NcIiBjbGFzcz1cInRleHQtc3VjY2Vzc1wiIHN0eWxlPVwiZm9udC13ZWlnaHQ6IDgwMDsgZGlzcGxheTogbm9uZTtcIj4gVHJhbnNhY3Rpb24gc3VjY2VzZnVsbCE8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGlkPVwiZmFpbGVkXCIgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiIHN0eWxlPVwiZm9udC13ZWlnaHQ6IDgwMDsgZGlzcGxheTogbm9uZTtcIj4gVHJhbnNhY3Rpb24gZmFpbGVkITwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGlkPVwiY2xvc2VNb2RhbEZvb3RlclwiIGNsYXNzPVwidGV4dC1zZWNvbmRhcnlcIiBzdHlsZT1cImZvbnQtc2l6ZTpzbWFsbGVyOyBkaXNwbGF5OiBub25lO1wiPiBOb3cgeW91IGNhbiBjbG9zZSB0aGlzIG1vZGFsPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8b3JkZXJzLW9yZGVyLXN1bW1hcnk+PC9vcmRlcnMtb3JkZXItc3VtbWFyeT5cclxuICAgICAgPGRpdiBjbGFzcz1cImNoZWNrb3V0LWJ1dHRvblwiPlxyXG4gICAgICAgIDxwLWJ1dHRvbiBsYWJlbD1cIlByb2NlZGlcIiAob25DbGljayk9XCJwbGFjZU9yZGVyKClcIj48L3AtYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJlcnJvciBtdC0yXCIgc3R5bGU9XCJmb250LXNpemU6IDI5cHg7IGNvbG9yOnJlZDsgZm9udC13ZWlnaHQ6IDgwMDtcIiAqbmdJZj1cImVycm9yTWVzc2FnZVwiID5QbGVhc2UgZmlsbCBhbGwgdGhlIG1hbmRhdG9yeSBmaWVsZHM6PC9kaXY+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICA8bGkgc3R5bGU9XCJmb250LXNpemU6IDIwcHg7IGNvbG9yOnJlZDsgZm9udC13ZWlnaHQ6IDUwMDtcIiAgKm5nRm9yPVwibGV0IGVycm9yIG9mIGVycm9ybWVzc2FnZVwiPlxyXG4gICAgICAgICAgICB7e2Vycm9yfX1cclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L3VsPlxyXG5cclxuXHJcblxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIGNvbC1tZC04IGNvbC1sZy04XCI+XHJcbiAgICAgIDxlc2hvcC1mcm9udGVuZC1jaGVja291dC1teS1wcm9maWxlPjwvZXNob3AtZnJvbnRlbmQtY2hlY2tvdXQtbXktcHJvZmlsZT5cclxuXHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuXHJcbjwvZGl2PlxyXG5cclxuXHJcbiJdfQ==