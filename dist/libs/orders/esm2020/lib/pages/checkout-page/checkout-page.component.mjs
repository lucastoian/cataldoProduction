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
        this.loading = false;
        this.isSubmitted = false;
        this.orderItems = [];
        this.countries = [];
        this.unsubscribe$ = new Subject();
        this.paymentHandler = null;
        this.success = false;
        this.failure = false;
        this.user = new User;
        this.loading = false;
    }
    ngOnInit() {
        this._initUserForm();
        this._autoFillUserData();
        this._getCountries();
        this._getCartItems();
        this.loading = false;
        this.invokeStripe();
        this.data = this.parseJwt(localStorage.getItem("authToken"));
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
        this.loading = true;
        console.log("total price = " + this.cart.getTotalPrice());
        if (this.checkShippingAddress()) {
            //this.makePayment(this.cart.getTotalPrice());
            //await this.kc.pay(this.cart.getTotalPrice());
            this.router.navigate(['/payment/options']);
            this.errorMessage = false;
        }
        else {
            this.loading = false;
            console.log("error in the shipping address");
            this.errorMessage = true;
        }
    }
    checkShippingAddress() {
        this.data = this.parseJwt(localStorage.getItem("authToken"));
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
            key: 'pk_live_51LYUCGDEyiX3e3PlZ6YXzMTMSvGkcCPrbxY7HU3N4PHkJgo00eXmUxV65d81LeSks3ZCkr4jY7liJdzIPMoH6RNZ00qmPvQJMW',
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
                    key: 'pk_live_51LYUCGDEyiX3e3PlZ6YXzMTMSvGkcCPrbxY7HU3N4PHkJgo00eXmUxV65d81LeSks3ZCkr4jY7liJdzIPMoH6RNZ00qmPvQJMW',
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
CheckoutPageComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CheckoutPageComponent, selectors: [["orders-checkout-page"]], features: [i0.ɵɵProvidersFeature([KlarnaComponent])], decls: 38, vars: 3, consts: [[1, "p-2"], [1, "checkout-page", "pb-5"], ["label", "Torna al carrello", "icon", "pi pi-arrow-left", 3, "onClick"], [1, "grid", "checkout-form", "p-2"], [1, "row", 2, "justify-content", "center"], [1, "col-md-4"], ["id", "page-mask", 2, "display", "none"], ["id", "exampleModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade", "border", "border-info"], [1, "modal-dialog", "border", "border-info", "border-4", "rounded"], [1, "modal-content"], [1, "modal-header"], [1, "row"], [1, "col-auto"], [1, "d-flex", "justify-content-center"], ["id", "loadingSpinner", "role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "col"], ["id", "exampleModalLabel", 1, "modal-title"], ["id", "closeModal", "type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], ["id", "modalBody", 1, "modal-body"], ["id", "success", 1, "text-success", 2, "font-weight", "800", "display", "none"], ["id", "failed", 1, "text-danger", 2, "font-weight", "800", "display", "none"], [1, "modal-footer"], ["id", "closeModalFooter", 1, "text-secondary", 2, "font-size", "smaller", "display", "none"], [1, "checkout-button"], ["label", "Procedi", 3, "loading", "onClick"], ["class", "error mt-2", "style", "font-size: 29px; color:red; font-weight: 800;", 4, "ngIf"], ["style", "font-size: 20px; color:red; font-weight: 500;", 4, "ngFor", "ngForOf"], [1, "col-12", "col-md-8", "col-lg-8"], [1, "error", "mt-2", 2, "font-size", "29px", "color", "red", "font-weight", "800"], [2, "font-size", "20px", "color", "red", "font-weight", "500"]], template: function CheckoutPageComponent_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵadvance(32);
        i0.ɵɵproperty("loading", ctx.loading);
        i0.ɵɵadvance(1);
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
  }`], providers: [KlarnaComponent], template: "<script src=\"https://js.stripe.com/v3/\" defer></script>\n<div class=\"p-2\">\n<div class=\"checkout-page pb-5\">\n    <div>\n        <p-button label=\"Torna al carrello\" icon=\"pi pi-arrow-left\" (onClick)=\"backToCart()\"></p-button>\n    </div>\n</div>\n<div class=\"grid checkout-form p-2\">\n\n  <div class=\"row\" style=\"justify-content: center;\">\n    <div class=\"col-md-4\">\n\n    <div id=\"page-mask\" style=\"display: none;\"></div>\n\n      <!-- Modal -->\n      <div class=\"modal fade border border-info\" id=\"exampleModal\" tabindex=\"-1\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog border border-info border-4 rounded\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <div class=\"row\">\n                <div class=\"col-auto \" >\n                  <div class=\"d-flex justify-content-center\">\n                    <div id=\"loadingSpinner\" class=\"spinner-border text-primary\" role=\"status\">\n                      <span class=\"visually-hidden\">Loading...</span>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col\"><h5 class=\"modal-title\" id=\"exampleModalLabel\">We are validating your transaction, please wait</h5></div>\n              </div>\n\n\n              <button id=\"closeModal\" type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n            </div>\n            <div id=\"modalBody\" class=\"modal-body\">\n              <div id=\"success\" class=\"text-success\" style=\"font-weight: 800; display: none;\"> Transaction succesfull!</div>\n              <div id=\"failed\" class=\"text-danger\" style=\"font-weight: 800; display: none;\"> Transaction failed!</div>\n\n            </div>\n            <div class=\"modal-footer\">\n              <div id=\"closeModalFooter\" class=\"text-secondary\" style=\"font-size:smaller; display: none;\"> Now you can close this modal</div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <orders-order-summary></orders-order-summary>\n      <div class=\"checkout-button\">\n        <p-button  [loading]=\"loading\" label=\"Procedi\" (onClick)=\"placeOrder()\"></p-button>\n      </div>\n\n      <div class=\"error mt-2\" style=\"font-size: 29px; color:red; font-weight: 800;\" *ngIf=\"errorMessage\" >Please fill all the mandatory fields:</div>\n      <ul>\n        <li style=\"font-size: 20px; color:red; font-weight: 500;\"  *ngFor=\"let error of errormessage\">\n            {{error}}\n        </li>\n      </ul>\n\n\n\n    </div>\n    <div class=\"col-12 col-md-8 col-lg-8\">\n      <eshop-frontend-checkout-my-profile></eshop-frontend-checkout-my-profile>\n\n    </div>\n  </div>\n  </div>\n\n</div>\n\n\n" }]
    }], function () { return [{ type: i1.Router }, { type: i2.UsersService }, { type: i3.FormBuilder }, { type: i4.CartService }, { type: i5.OrdersService }, { type: i6.MessageService }, { type: i7.CheckoutService }, { type: i2.KlarnaComponent }, { type: i2.Cart }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL29yZGVycy9zcmMvbGliL3BhZ2VzL2NoZWNrb3V0LXBhZ2UvY2hlY2tvdXQtcGFnZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL29yZGVycy9zcmMvbGliL3BhZ2VzL2NoZWNrb3V0LXBhZ2UvY2hlY2tvdXQtcGFnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFhLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUcsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFBO0FBRXZELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDN0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRTFELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbEUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzdDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7SUNnQ25DLCtCQUFvRztJQUFBLHFEQUFxQztJQUFBLGlC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QUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDekMsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFFdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQzlFLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsRUFBRTtZQUNuRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1NBQ2pEO1FBQ0QsSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxFQUFDO1lBQ2xELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENB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UCxnQ0FBc0M7UUFDcEMsc0RBQXlFO1FBRTNFLGlCQUFNLEVBQUEsRUFBQSxFQUFBOztRQWhCUyxnQkFBbUI7UUFBbkIscUNBQW1CO1FBRytDLGVBQWtCO1FBQWxCLHVDQUFrQjtRQUVsQixlQUFlO1FBQWYsMENBQWU7O3VGRGZ2RixxQkFBcUI7Y0FkakMsU0FBUzsyQkFDRSxzQkFBc0IsVUFFeEIsQ0FBQzs7Ozs7OztJQU9QLENBQUMsYUFDUSxDQUFDLGVBQWUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXIyMyB9IGZyb20gJy4vLi4vLi4vbW9kZWxzL3VzZXIyMyc7XG4vKiogKi9cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7ICBVc2Vyc1NlcnZpY2UgfSBmcm9tICdAZXNob3AtZnJvbnRlbmQvdXNlcnMnO1xuaW1wb3J0IHsgS2xhcm5hQ29tcG9uZW50IH0gZnJvbSAnQGVzaG9wLWZyb250ZW5kL3VzZXJzJ1xuXG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJ3ByaW1lbmcvYXBpJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9yZGVyc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vcmRlcnMuc2VydmljZSc7XG5pbXBvcnQgeyBDYXJ0U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NhcnQuc2VydmljZSc7XG5pbXBvcnQgeyBPcmRlckl0ZW0gfSBmcm9tICcuLi8uLi9tb2RlbHMvb3JkZXItaXRlbSc7XG5pbXBvcnQgeyBPcmRlciB9IGZyb20gJy4uLy4uL21vZGVscy9vcmRlcic7XG5pbXBvcnQgeyBDaGVja291dFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jaGVja291dC5zZXJ2aWNlJztcbmltcG9ydCB7IENhcnQgfSBmcm9tICdAZXNob3AtZnJvbnRlbmQvdXNlcnMnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL21vZGVscy91c2VyJztcblxuXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnb3JkZXJzLWNoZWNrb3V0LXBhZ2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hlY2tvdXQtcGFnZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogW2AjcGFnZS1tYXNrIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgfWBdLFxuICBwcm92aWRlcnM6IFtLbGFybmFDb21wb25lbnRdXG5cbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRQYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBlcnJvck1lc3NhZ2U6IGJvb2xlYW47XG4gIGVycm9ybWVzc2FnZTogU3RyaW5nW107XG4gIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHVzZXJzU2VydmljZTogVXNlcnNTZXJ2aWNlLFxuICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuICAgIHByaXZhdGUgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgb3JkZXJzU2VydmljZTogT3JkZXJzU2VydmljZSxcbiAgICBwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSxcbiAgICBwcml2YXRlIGNoZWNrb3V0OiBDaGVja291dFNlcnZpY2UsXG5cbiAgICBwcml2YXRlIGtjIDogS2xhcm5hQ29tcG9uZW50LFxuICAgIHByaXZhdGUgY2FydDogQ2FydCxcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyID0gbmV3IFVzZXI7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBjaGVja291dEZvcm1Hcm91cDogRm9ybUdyb3VwO1xuICAgICAgICAgICAgICBpc1N1Ym1pdHRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICBvcmRlckl0ZW1zOiBPcmRlckl0ZW1bXSA9IFtdO1xuICAgICAgICAgICAgICB1c2VySWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgY291bnRyaWVzID0gW107XG4gICAgICAgICAgICAgICB1bnN1YnNjcmliZSQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG4gICAgICAgICAgICAgICBwYXltZW50SGFuZGxlcjogYW55ID0gbnVsbDtcbiAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgIGZhaWx1cmU6Ym9vbGVhbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgdXNlcjogVXNlcjtcbiAgICAgICAgICAgICAgIGRhdGE7XG5cblxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX2luaXRVc2VyRm9ybSgpO1xuICAgIHRoaXMuX2F1dG9GaWxsVXNlckRhdGEoKTtcbiAgICB0aGlzLl9nZXRDb3VudHJpZXMoKTtcbiAgICB0aGlzLl9nZXRDYXJ0SXRlbXMoKTtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmludm9rZVN0cmlwZSgpO1xuICAgIHRoaXMuZGF0YSA9ICB0aGlzLnBhcnNlSnd0KGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXV0aFRva2VuXCIpKTtcbiAgICB0aGlzLnVzZXIuY291bnRyeT0gICAgICB0aGlzLmRhdGEuY291bnRyeTtcbiAgICB0aGlzLnVzZXIuYWRkcmVzczE9ICAgICB0aGlzLmRhdGFbJ2FkZHJlc3MxJ107XG4gICAgdGhpcy51c2VyLmFkZHJlc3MyPSAgICAgdGhpcy5kYXRhLmFkZHJlc3MyO1xuICAgIHRoaXMudXNlci5kYXRlPSAgICAgICAgIHRoaXMuZGF0YS5kYXRlT2ZCaXJ0aDtcbiAgICB0aGlzLnVzZXIuZW1haWw9ICAgICAgICB0aGlzLmRhdGEuZW1haWw7XG4gICAgdGhpcy51c2VyLnBob25lPSAgICAgICAgdGhpcy5kYXRhLnBob25lO1xuICAgIHRoaXMudXNlci5wb3N0YWxDb2RlPSAgIHRoaXMuZGF0YS5wb3N0YWxDb2RlO1xuICAgIHRoaXMudXNlci5zZXg9ICAgICAgICAgIHRoaXMuZGF0YS5nZW5kZXI7XG4gICAgdGhpcy51c2VyLmZOYW1lID0gICAgICAgdGhpcy5kYXRhLmZOYW1lO1xuICAgIHRoaXMudXNlci5sTmFtZSA9ICAgICAgIHRoaXMuZGF0YS5sTmFtZTtcbiAgICB0aGlzLnVzZXIucmVnaW9uID0gICAgICB0aGlzLmRhdGEucmVnaW9uO1xuICAgIHRoaXMudXNlci5jaXR5ID0gICAgICAgIHRoaXMuZGF0YS5jaXR5O1xuICAgIHRoaXMudXNlci5zdGF0ZSA9ICAgICAgIHRoaXMuZGF0YS5zdGF0ZTtcbiAgICB0aGlzLnVzZXIucHJlZml4ID0gICAgICB0aGlzLmRhdGEucHJlZml4O1xuICAgIHRoaXMua2MgPSBuZXcgS2xhcm5hQ29tcG9uZW50KCk7XG4gICAgdGhpcy5rYy5wcmludEhlbGxvKCk7XG5cbiAgICBjb25zb2xlLmxvZyhcInRoaXMgdXNlciA9IFwiICsgSlNPTi5zdHJpbmdpZnkodGhpcy51c2VyKSk7XG4gIFxuXG5cbiAgfVxuICBwYXJzZUp3dCAodG9rZW4pIHtcbiAgICB2YXIgYmFzZTY0VXJsID0gdG9rZW4uc3BsaXQoJy4nKVsxXTtcbiAgICB2YXIgYmFzZTY0ID0gYmFzZTY0VXJsLnJlcGxhY2UoLy0vZywgJysnKS5yZXBsYWNlKC9fL2csICcvJyk7XG4gICAgdmFyIGpzb25QYXlsb2FkID0gZGVjb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5hdG9iKGJhc2U2NCkuc3BsaXQoJycpLm1hcChmdW5jdGlvbihjKSB7XG4gICAgICAgIHJldHVybiAnJScgKyAoJzAwJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikpLnNsaWNlKC0yKTtcbiAgICB9KS5qb2luKCcnKSk7XG5cbiAgICByZXR1cm4gSlNPTi5wYXJzZShqc29uUGF5bG9hZCk7XG59O1xuXG4gIHByaXZhdGUgX2luaXRVc2VyRm9ybSgpIHtcbiAgICB0aGlzLmNoZWNrb3V0Rm9ybUdyb3VwID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBuYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgZW1haWw6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMuZW1haWxdXSxcbiAgICAgIHBob25lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgY2l0eTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIGNvdW50cnk6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICB6aXA6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBhcGFydG1lbnQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBzdHJlZXQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICB9KTtcbiAgfVxuXG5cbiAgcHJpdmF0ZSBfYXV0b0ZpbGxVc2VyRGF0YSgpIHtcbiAgICAvKlxuICAgIHRoaXMudXNlcnNTZXJ2aWNlXG4gICAgICAub2JzZXJ2ZUN1cnJlbnRVc2VyKClcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpXG4gICAgICAuc3Vic2NyaWJlKCh1c2VyKSA9PiB7XG4gICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgdGhpcy51c2VySWQgPSB1c2VyLmlkO1xuICAgICAgICAgIHRoaXMuY2hlY2tvdXRGb3JtLm5hbWUuc2V0VmFsdWUodXNlci5uYW1lKTtcbiAgICAgICAgICB0aGlzLmNoZWNrb3V0Rm9ybS5lbWFpbC5zZXRWYWx1ZSh1c2VyLmVtYWlsKTtcbiAgICAgICAgICB0aGlzLmNoZWNrb3V0Rm9ybS5waG9uZS5zZXRWYWx1ZSh1c2VyLnBob25lKTtcbiAgICAgICAgICB0aGlzLmNoZWNrb3V0Rm9ybS5jaXR5LnNldFZhbHVlKHVzZXIuY2l0eSk7XG4gICAgICAgICAgdGhpcy5jaGVja291dEZvcm0uc3RyZWV0LnNldFZhbHVlKHVzZXIuc3RyZWV0KTtcbiAgICAgICAgICB0aGlzLmNoZWNrb3V0Rm9ybS5jb3VudHJ5LnNldFZhbHVlKHVzZXIuY291bnRyeSk7XG4gICAgICAgICAgdGhpcy5jaGVja291dEZvcm0uemlwLnNldFZhbHVlKHVzZXIuemlwKTtcbiAgICAgICAgICB0aGlzLmNoZWNrb3V0Rm9ybS5hcGFydG1lbnQuc2V0VmFsdWUodXNlci5hcGFydG1lbnQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgICovXG4gIH1cblxuICBwcml2YXRlIF9nZXRDYXJ0SXRlbXMoKXtcblxuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0Q291bnRyaWVzKCl7XG4gICAgdGhpcy5jb3VudHJpZXMgPSB0aGlzLnVzZXJzU2VydmljZS5nZXRDb3VudHJpZXMoKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmNvdW50cmllcyk7XG4gIH1cblxuXG4gIGJhY2tUb0NhcnQoKXtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9jYXJ0J10pO1xuICB9XG5cbiAgYXN5bmMgcGxhY2VPcmRlcigpIHtcbiAgICB0aGlzLmxvYWRpbmc9dHJ1ZTtcbiAgICBjb25zb2xlLmxvZyhcInRvdGFsIHByaWNlID0gXCIgKyB0aGlzLmNhcnQuZ2V0VG90YWxQcmljZSgpKTtcblxuICAgIGlmKHRoaXMuY2hlY2tTaGlwcGluZ0FkZHJlc3MoKSl7XG4gICAgICAvL3RoaXMubWFrZVBheW1lbnQodGhpcy5jYXJ0LmdldFRvdGFsUHJpY2UoKSk7XG4gICAgICAvL2F3YWl0IHRoaXMua2MucGF5KHRoaXMuY2FydC5nZXRUb3RhbFByaWNlKCkpO1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvcGF5bWVudC9vcHRpb25zJ10pO1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBmYWxzZTtcbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgY29uc29sZS5sb2coXCJlcnJvciBpbiB0aGUgc2hpcHBpbmcgYWRkcmVzc1wiKTtcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gdHJ1ZTtcbiAgICB9XG5cblxuXG5cblxuICB9XG5cbiAgY2hlY2tTaGlwcGluZ0FkZHJlc3MoKTogQm9vbGVhbntcbiAgICB0aGlzLmRhdGEgPSAgdGhpcy5wYXJzZUp3dChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImF1dGhUb2tlblwiKSk7XG4gICAgdGhpcy51c2VyLmNvdW50cnk9ICAgICAgdGhpcy5kYXRhLmNvdW50cnk7XG4gICAgdGhpcy51c2VyLmFkZHJlc3MxPSAgICAgdGhpcy5kYXRhWydhZGRyZXNzMSddO1xuICAgIHRoaXMudXNlci5hZGRyZXNzMj0gICAgIHRoaXMuZGF0YS5hZGRyZXNzMjtcbiAgICB0aGlzLnVzZXIuZGF0ZT0gICAgICAgICB0aGlzLmRhdGEuZGF0ZU9mQmlydGg7XG4gICAgdGhpcy51c2VyLmVtYWlsPSAgICAgICAgdGhpcy5kYXRhLmVtYWlsO1xuICAgIHRoaXMudXNlci5waG9uZT0gICAgICAgIHRoaXMuZGF0YS5waG9uZTtcbiAgICB0aGlzLnVzZXIucG9zdGFsQ29kZT0gICB0aGlzLmRhdGEucG9zdGFsQ29kZTtcbiAgICB0aGlzLnVzZXIuc2V4PSAgICAgICAgICB0aGlzLmRhdGEuZ2VuZGVyO1xuICAgIHRoaXMudXNlci5mTmFtZSA9ICAgICAgIHRoaXMuZGF0YS5mTmFtZTtcbiAgICB0aGlzLnVzZXIubE5hbWUgPSAgICAgICB0aGlzLmRhdGEubE5hbWU7XG4gICAgdGhpcy51c2VyLnJlZ2lvbiA9ICAgICAgdGhpcy5kYXRhLnJlZ2lvbjtcbiAgICB0aGlzLnVzZXIuY2l0eSA9ICAgICAgICB0aGlzLmRhdGEuY2l0eTtcbiAgICB0aGlzLnVzZXIuc3RhdGUgPSAgICAgICB0aGlzLmRhdGEuc3RhdGU7XG4gICAgdGhpcy51c2VyLnByZWZpeCA9ICAgICAgdGhpcy5kYXRhLnByZWZpeDtcbiAgICB0aGlzLmVycm9ybWVzc2FnZSA9IFtdO1xuXG4gICAgY29uc29sZS5sb2coXCJ0aGlzIGVycm9ybWVzc2FnZSBhcnJheSA9IFwiICsgSlNPTi5zdHJpbmdpZnkodGhpcy5lcnJvcm1lc3NhZ2UpKTtcbiAgICBpZih0aGlzLnVzZXIuZk5hbWUgPT0gbnVsbCB8fCB0aGlzLnVzZXIuZk5hbWUgPT0gJycgKXtcbiAgICAgIHRoaXMuZXJyb3JtZXNzYWdlLnB1c2goXCJwbGVhc2UgcHJvdmlkZSBhIG5hbWVcIik7XG4gICAgfVxuICAgIGlmKHRoaXMudXNlci5sTmFtZSA9PSBudWxsIHx8IHRoaXMudXNlci5sTmFtZSA9PSAnJyl7XG4gICAgICB0aGlzLmVycm9ybWVzc2FnZS5wdXNoKFwicGxlYXNlIHByb3ZpZGUgYSBzdXJuYW1lXCIpO1xuICAgIH1cbiAgICBpZih0aGlzLnVzZXIuYWRkcmVzczEgPT0gbnVsbCB8fCB0aGlzLnVzZXIuYWRkcmVzczEgPT0gJycpe1xuICAgICAgdGhpcy5lcnJvcm1lc3NhZ2UucHVzaChcInBsZWFzZSBwcm92aWRlIGFuIGFkZHJlc3NcIik7XG4gICAgfVxuICAgIGlmKHRoaXMudXNlci5jaXR5ID09IG51bGwgfHwgdGhpcy51c2VyLmNpdHkgPT0gJycpe1xuICAgICAgdGhpcy5lcnJvcm1lc3NhZ2UucHVzaChcInBsZWFzZSBwcm92aWRlIGEgY2l0eVwiKTtcbiAgICB9XG4gICAgaWYodGhpcy51c2VyLmNvdW50cnkgPT0gbnVsbCB8fCB0aGlzLnVzZXIuY291bnRyeT09ICcnKXtcbiAgICAgIHRoaXMuZXJyb3JtZXNzYWdlLnB1c2goXCJwbGVhc2UgcHJvdmlkZSBhIGNvdW50cnlcIik7XG4gICAgfVxuICAgIGlmKHRoaXMudXNlci5wb3N0YWxDb2RlID09IG51bGwgfHwgdGhpcy51c2VyLnBvc3RhbENvZGUgPT0gJycpe1xuICAgICAgdGhpcy5lcnJvcm1lc3NhZ2UucHVzaChcInBsZWFzZSBwcm92aWRlIGEgcG9zdGFsIGNvZGVcIik7XG4gICAgfVxuICAgIGlmKHRoaXMudXNlci5wcmVmaXggPT0gbnVsbCB8fCB0aGlzLnVzZXIucHJlZml4ID09ICcnKXtcbiAgICAgIHRoaXMuZXJyb3JtZXNzYWdlLnB1c2goXCJwbGVhc2UgcHJvdmlkZSBhIHByZWZpeFwiKTtcbiAgICB9XG4gICAgaWYodGhpcy51c2VyLnBob25lID09IG51bGwgfHwgdGhpcy51c2VyLnBob25lID09ICcnKXtcbiAgICAgIHRoaXMuZXJyb3JtZXNzYWdlLnB1c2goXCJwbGVhc2UgcHJvdmlkZSBhIHBob25lIG51bWJlclwiKTtcbiAgICB9XG5cbiAgICBpZih0aGlzLmVycm9ybWVzc2FnZS5sZW5ndGggPT0gMCl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0IGNoZWNrb3V0Rm9ybSgpIHtcbiAgICByZXR1cm4gdGhpcy5jaGVja291dEZvcm1Hcm91cC5jb250cm9scztcbiAgfVxuXG4gIG1ha2VQYXltZW50KGFtb3VudDogbnVtYmVyKSB7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZS1tYXNrJykuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuXG4gICAgY29uc3QgcGF5bWVudEhhbmRsZXIgPSAoPGFueT53aW5kb3cpLlN0cmlwZUNoZWNrb3V0LmNvbmZpZ3VyZSh7XG4gICAgICBrZXk6ICdwa19saXZlXzUxTFlVQ0dERXlpWDNlM1BsWjZZWHpNVE1TdkdrY0NQcmJ4WTdIVTNONFBIa0pnbzAwZVhtVXhWNjVkODFMZVNrczNaQ2tyNGpZN2xpSmR6SVBNb0g2Uk5aMDBxbVB2UUpNVycsXG4gICAgICBsb2NhbGU6ICdhdXRvJyxcbiAgICAgIHRva2VuOiBmdW5jdGlvbiAoc3RyaXBlVG9rZW46IGFueSkge1xuICAgICAgICBjb25zb2xlLmxvZyhzdHJpcGVUb2tlbik7XG4gICAgICAgIHBheW1lbnRzdHJpcGUoc3RyaXBlVG9rZW4pO1xuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHBheW1lbnRzdHJpcGUgPSAoc3RyaXBlVG9rZW46IGFueSkgPT4ge1xuICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpIGFzIEhUTUxFbGVtZW50IHwgbnVsbFxuICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG4gICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2VNb2RhbFwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2UtbWFzaycpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfSk7XG5cbiAgICAgIHRoaXMuY2hlY2tvdXQubWFrZVBheW1lbnQoc3RyaXBlVG9rZW4sIGFtb3VudCkuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2VNb2RhbEZvb3RlclwiKS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2FkaW5nU3Bpbm5lclwiKS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xuXG5cbiAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcblxuICAgICAgICBsZXQgb3JkZXI6IE9yZGVyID0gbmV3IE9yZGVyO1xuICAgICAgICBvcmRlci5jaXR5ID0gdGhpcy51c2VyLmNpdHk7XG4gICAgICAgIG9yZGVyLmNvdW50cnkgPSB0aGlzLnVzZXIuY291bnRyeTtcbiAgICAgICAgb3JkZXIuZGF0ZU9yZGVyZWQgPSBTdHJpbmcobm93KTtcbiAgICAgICAgb3JkZXIuaWQgPSAnMTIzMTIzMTIzJztcbiAgICAgICAgb3JkZXIucGhvbmUgPSB0aGlzLnVzZXIucGhvbmU7XG4gICAgICAgIG9yZGVyLnNoaXBwaW5nQWRkcmVzczEgPSB0aGlzLnVzZXIuYWRkcmVzczE7XG4gICAgICAgIG9yZGVyLnRvdGFsUHJpY2UgPSBTdHJpbmcodGhpcy5jYXJ0LmdldFRvdGFsUHJpY2UoKSk7XG4gICAgICAgIG9yZGVyLnppcCA9IHRoaXMudXNlci5wb3N0YWxDb2RlO1xuICAgICAgICBvcmRlci5jb25maXJtZWQgPSBmYWxzZTtcblxuICAgICAgICBvcmRlci51c2VyID0gdGhpcy5kYXRhLnVzZXJJZDtcbiAgICAgICAgb3JkZXIuaWQgPSBudWxsO1xuICAgICAgICBsZXQgdmFyaWFudHMgPSAgdGhpcy5jYXJ0LmdldEFsbFZhcmlhbnRzKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidmFyaWFudHMgPSBcIiArIEpTT04uc3RyaW5naWZ5KHZhcmlhbnRzKSk7XG4gICAgICAgIG9yZGVyLm9yZGVySXRlbXMgPSB0aGlzLmNhcnQuZ2V0QWxsVmFyaWFudHMoKTtcblxuXG5cblxuXG5cblxuICAgICAgICBpZiAoZGF0YS5kYXRhID09PSBcInN1Y2Nlc3NcIikge1xuICAgICAgICAgIHRoaXMuc3VjY2VzcyA9IHRydWU7XG4gICAgICAgICAgdGhpcy5mYWlsdXJlID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5vcmRlcnNTZXJ2aWNlLmNyZWF0ZU5ld09yZGVyKG9yZGVyLCB0aGlzLnVzZXIuZW1haWwsIHRoaXMudXNlci5wcmVmaXgpLnN1YnNjcmliZSgoZGF0YSkgPT57XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSSBhbSBjcmVhdGluZyB0aGlzIG5ldyBvcmRlcjogXCIgKyBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGE6IFwiICsgZGF0YSk7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4YW1wbGVNb2RhbExhYmVsXCIpLmlubmVyVGV4dD1cIllvdXIgb3JkZXIgbnVtYmVyIGlzOiBcIiArIGRhdGEuX2lkO1xuXG4gICAgICAgICAgLy8gIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oKVxuXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJjYXJ0QnlMdWNhXCIpO1xuICAgICAgICAgIHRoaXMuY2FydFNlcnZpY2UuZ2V0Q2FydCgpO1xuICAgICAgICAgIHRoaXMuY2FydC5lbXB0eUNhcnQoKTtcblxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvb3JkZXJzLycgKyBkYXRhLl9pZF0pO1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5hZGQoe1xuICAgICAgICAgICAgICBzZXZlcml0eTogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICBzdW1tYXJ5OiAnU3VjY2VzJyxcbiAgICAgICAgICAgICAgZGV0YWlsOiBgU3VjY2VzZnVsIHRyYW5zYWN0aW9uIWBcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pXG5cblxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VjY2Vzc1wiKS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIjtcblxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMuZmFpbHVyZSA9IHRydWU7XG4gICAgICAgICAgdGhpcy5zdWNjZXNzID0gZmFsc2U7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmYWlsZWRcIikuc3R5bGUuZGlzcGxheT1cImJsb2NrXCI7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBwYXltZW50SGFuZGxlci5vcGVuKHtcbiAgICAgIG5hbWU6ICdDYXRhbGRvIFN0b3JlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnUGxlYXNlIGZpbGwgeW91ciBiaWxsaW5nIGluZm9ybWF0aW9ucycsXG4gICAgICBhbW91bnQ6IGFtb3VudCAqIDEwMCxcbiAgICB9KTtcblxuICB9XG5cbiAgaW52b2tlU3RyaXBlKCkge1xuICAgIGlmICghd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdHJpcGUtc2NyaXB0JykpIHtcbiAgICAgIGNvbnN0IHNjcmlwdCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgIHNjcmlwdC5pZCA9ICdzdHJpcGUtc2NyaXB0JztcbiAgICAgIHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgICBzY3JpcHQuc3JjID0gJ2h0dHBzOi8vY2hlY2tvdXQuc3RyaXBlLmNvbS9jaGVja291dC5qcyc7XG4gICAgICBzY3JpcHQub25sb2FkID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnBheW1lbnRIYW5kbGVyID0gKDxhbnk+d2luZG93KS5TdHJpcGVDaGVja291dC5jb25maWd1cmUoe1xuICAgICAgICAgIGtleTogJ3BrX2xpdmVfNTFMWVVDR0RFeWlYM2UzUGxaNllYek1UTVN2R2tjQ1ByYnhZN0hVM040UEhrSmdvMDBlWG1VeFY2NWQ4MUxlU2tzM1pDa3I0alk3bGlKZHpJUE1vSDZSTlowMHFtUHZRSk1XJyxcbiAgICAgICAgICBsb2NhbGU6ICdhdXRvJyxcbiAgICAgICAgICB0b2tlbjogZnVuY3Rpb24gKHN0cmlwZVRva2VuOiBhbnkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0cmlwZVRva2VuKTtcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgfVxuICB9XG5cbn1cbiIsIjxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9qcy5zdHJpcGUuY29tL3YzL1wiIGRlZmVyPjwvc2NyaXB0PlxuPGRpdiBjbGFzcz1cInAtMlwiPlxuPGRpdiBjbGFzcz1cImNoZWNrb3V0LXBhZ2UgcGItNVwiPlxuICAgIDxkaXY+XG4gICAgICAgIDxwLWJ1dHRvbiBsYWJlbD1cIlRvcm5hIGFsIGNhcnJlbGxvXCIgaWNvbj1cInBpIHBpLWFycm93LWxlZnRcIiAob25DbGljayk9XCJiYWNrVG9DYXJ0KClcIj48L3AtYnV0dG9uPlxuICAgIDwvZGl2PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwiZ3JpZCBjaGVja291dC1mb3JtIHAtMlwiPlxuXG4gIDxkaXYgY2xhc3M9XCJyb3dcIiBzdHlsZT1cImp1c3RpZnktY29udGVudDogY2VudGVyO1wiPlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNFwiPlxuXG4gICAgPGRpdiBpZD1cInBhZ2UtbWFza1wiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj48L2Rpdj5cblxuICAgICAgPCEtLSBNb2RhbCAtLT5cbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbCBmYWRlIGJvcmRlciBib3JkZXItaW5mb1wiIGlkPVwiZXhhbXBsZU1vZGFsXCIgdGFiaW5kZXg9XCItMVwiIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGVNb2RhbExhYmVsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2cgYm9yZGVyIGJvcmRlci1pbmZvIGJvcmRlci00IHJvdW5kZWRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1hdXRvIFwiID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibG9hZGluZ1NwaW5uZXJcIiBjbGFzcz1cInNwaW5uZXItYm9yZGVyIHRleHQtcHJpbWFyeVwiIHJvbGU9XCJzdGF0dXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZpc3VhbGx5LWhpZGRlblwiPkxvYWRpbmcuLi48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPjxoNSBjbGFzcz1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJleGFtcGxlTW9kYWxMYWJlbFwiPldlIGFyZSB2YWxpZGF0aW5nIHlvdXIgdHJhbnNhY3Rpb24sIHBsZWFzZSB3YWl0PC9oNT48L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiY2xvc2VNb2RhbFwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0bi1jbG9zZVwiIGRhdGEtYnMtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJtb2RhbEJvZHlcIiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cInN1Y2Nlc3NcIiBjbGFzcz1cInRleHQtc3VjY2Vzc1wiIHN0eWxlPVwiZm9udC13ZWlnaHQ6IDgwMDsgZGlzcGxheTogbm9uZTtcIj4gVHJhbnNhY3Rpb24gc3VjY2VzZnVsbCE8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cImZhaWxlZFwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIiBzdHlsZT1cImZvbnQtd2VpZ2h0OiA4MDA7IGRpc3BsYXk6IG5vbmU7XCI+IFRyYW5zYWN0aW9uIGZhaWxlZCE8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJjbG9zZU1vZGFsRm9vdGVyXCIgY2xhc3M9XCJ0ZXh0LXNlY29uZGFyeVwiIHN0eWxlPVwiZm9udC1zaXplOnNtYWxsZXI7IGRpc3BsYXk6IG5vbmU7XCI+IE5vdyB5b3UgY2FuIGNsb3NlIHRoaXMgbW9kYWw8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPG9yZGVycy1vcmRlci1zdW1tYXJ5Pjwvb3JkZXJzLW9yZGVyLXN1bW1hcnk+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2hlY2tvdXQtYnV0dG9uXCI+XG4gICAgICAgIDxwLWJ1dHRvbiAgW2xvYWRpbmddPVwibG9hZGluZ1wiIGxhYmVsPVwiUHJvY2VkaVwiIChvbkNsaWNrKT1cInBsYWNlT3JkZXIoKVwiPjwvcC1idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImVycm9yIG10LTJcIiBzdHlsZT1cImZvbnQtc2l6ZTogMjlweDsgY29sb3I6cmVkOyBmb250LXdlaWdodDogODAwO1wiICpuZ0lmPVwiZXJyb3JNZXNzYWdlXCIgPlBsZWFzZSBmaWxsIGFsbCB0aGUgbWFuZGF0b3J5IGZpZWxkczo8L2Rpdj5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpIHN0eWxlPVwiZm9udC1zaXplOiAyMHB4OyBjb2xvcjpyZWQ7IGZvbnQtd2VpZ2h0OiA1MDA7XCIgICpuZ0Zvcj1cImxldCBlcnJvciBvZiBlcnJvcm1lc3NhZ2VcIj5cbiAgICAgICAgICAgIHt7ZXJyb3J9fVxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cblxuXG5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIGNvbC1tZC04IGNvbC1sZy04XCI+XG4gICAgICA8ZXNob3AtZnJvbnRlbmQtY2hlY2tvdXQtbXktcHJvZmlsZT48L2VzaG9wLWZyb250ZW5kLWNoZWNrb3V0LW15LXByb2ZpbGU+XG5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDwvZGl2PlxuXG48L2Rpdj5cblxuXG4iXX0=