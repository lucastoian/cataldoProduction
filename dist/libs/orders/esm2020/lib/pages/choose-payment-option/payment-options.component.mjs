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
function PaymentOptions_div_99_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 46);
    i0.ɵɵtext(1, "Please fill all the mandatory fields:");
    i0.ɵɵelementEnd();
} }
function PaymentOptions_li_101_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 47);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const error_r2 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", error_r2, " ");
} }
export class PaymentOptions {
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
        console.log("opzione = " + this.checkSelectedOptions());
        switch (this.checkSelectedOptions()) {
            case "credit":
                this.makePayment(this.cart.getTotalPrice());
                break;
            case "rate":
                await this.kc.pay(this.cart.getTotalPrice());
                break;
        }
        if (this.checkSelectedOptions()) {
            //this.makePayment(this.cart.getTotalPrice());
            //   await this.kc.pay(this.cart.getTotalPrice());
            this.errorMessage = false;
        }
        else {
            console.log("error in the shipping address");
            this.errorMessage = true;
        }
    }
    checkSelectedOptions() {
        return document.querySelector('input[name="optradio"]:checked').value;
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
                order.user = this.data.userId;
                order.id = null;
                let variants = this.cart.getAllVariants();
                console.log("variants = " + JSON.stringify(variants));
                order.orderItems = this.cart.getAllVariants();
                if (data.data === "success") {
                    this.success = true;
                    this.failure = false;
                    this.ordersService.createNewOrder(order, this.user.email).subscribe((data) => {
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
PaymentOptions.ɵfac = function PaymentOptions_Factory(t) { return new (t || PaymentOptions)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.UsersService), i0.ɵɵdirectiveInject(i3.FormBuilder), i0.ɵɵdirectiveInject(i4.CartService), i0.ɵɵdirectiveInject(i5.OrdersService), i0.ɵɵdirectiveInject(i6.MessageService), i0.ɵɵdirectiveInject(i7.CheckoutService), i0.ɵɵdirectiveInject(i2.KlarnaComponent), i0.ɵɵdirectiveInject(i2.Cart)); };
PaymentOptions.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PaymentOptions, selectors: [["payment-options"]], features: [i0.ɵɵProvidersFeature([KlarnaComponent])], decls: 102, vars: 3, consts: [[1, "p-2"], [1, "checkout-page", "pb-5"], ["label", "Torna al carrello", "icon", "pi pi-arrow-left", 3, "onClick"], [1, "grid", "p-2", 2, "width", "100%", "justify-content", "center"], [1, "row", 2, "justify-content", "center", "width", "inherit"], [1, "col-12", "col-md-7", "col-lg-7", "p-2", 2, "border", "1px solid var(--surface-200)"], [2, "text-align", "center", "margin-bottom", "30px"], [1, "row"], [1, "col-8"], ["type", "radio", "id", "radio1", "name", "optradio", "value", "credit", "checked", "", 1, "form-check-input"], [1, "col-4"], [1, "col-1", 2, "min-width", "50px"], [2, "display", "inline"], ["src", "assets/mastercard.png", "alt", "Responsive image", 1, "img-fluid"], ["src", "assets/visa.png", "alt", "Responsive image", 1, "img-fluid"], ["src", "assets/americanExpress.png", "alt", "Responsive image", 1, "img-fluid"], ["src", "assets/maestro.png", "alt", "Responsive image", 1, "img-fluid"], ["src", "assets/postepay.png", "alt", "Responsive image", 1, "img-fluid"], ["type", "radio", "id", "radio2", "name", "optradio", "value", "rate", "checked", "", 1, "form-check-input"], ["src", "assets/klarna.png", "alt", "Responsive image", 1, "img-fluid"], ["type", "radio", "id", "radio3", "name", "optradio", "value", "paypal", "checked", "", 1, "form-check-input"], ["src", "assets/paypal.png", "alt", "Responsive image", 1, "img-fluid"], [1, "col"], ["type", "radio", "id", "radio4", "name", "optradio", "value", "contanti", "checked", "", 1, "form-check-input"], [1, "col-12", "col-md-5", "col-lg-5"], ["id", "page-mask", 2, "display", "none"], ["id", "exampleModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade", "border", "border-info"], [1, "modal-dialog", "border", "border-info", "border-4", "rounded"], [1, "modal-content"], [1, "modal-header"], [1, "col-auto"], [1, "d-flex", "justify-content-center"], ["id", "loadingSpinner", "role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], ["id", "exampleModalLabel", 1, "modal-title"], ["id", "closeModal", "type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], ["id", "modalBody", 1, "modal-body"], ["id", "success", 1, "text-success", 2, "font-weight", "800", "display", "none"], ["id", "failed", 1, "text-danger", 2, "font-weight", "800", "display", "none"], [1, "modal-footer"], ["id", "closeModalFooter", 1, "text-secondary", 2, "font-size", "smaller", "display", "none"], [3, "isCheckOut"], [1, "checkout-button"], ["label", "Procedi", 3, "onClick"], ["class", "error mt-2", "style", "font-size: 29px; color:red; font-weight: 800;", 4, "ngIf"], ["style", "font-size: 20px; color:red; font-weight: 500;", 4, "ngFor", "ngForOf"], [1, "error", "mt-2", 2, "font-size", "29px", "color", "red", "font-weight", "800"], [2, "font-size", "20px", "color", "red", "font-weight", "500"]], template: function PaymentOptions_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "p-button", 2);
        i0.ɵɵlistener("onClick", function PaymentOptions_Template_p_button_onClick_3_listener() { return ctx.backToCart(); });
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "h3", 6);
        i0.ɵɵtext(8, "Seleziona un metodo di pagamento");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(9, "hr");
        i0.ɵɵelementStart(10, "div", 7)(11, "div", 8);
        i0.ɵɵelement(12, "input", 9);
        i0.ɵɵtext(13, " CARTE DI CREDITO ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "div", 10)(15, "div", 7)(16, "div", 11)(17, "li", 12);
        i0.ɵɵelement(18, "img", 13);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(19, "div", 11)(20, "li", 12);
        i0.ɵɵelement(21, "img", 14);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(22, "div", 11)(23, "li", 12);
        i0.ɵɵelement(24, "img", 15);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(25, "div", 11)(26, "li", 12);
        i0.ɵɵelement(27, "img", 16);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(28, "div", 11)(29, "li", 12);
        i0.ɵɵelement(30, "img", 17);
        i0.ɵɵelementEnd()()()()();
        i0.ɵɵelement(31, "hr");
        i0.ɵɵelementStart(32, "div", 7)(33, "div", 8);
        i0.ɵɵelement(34, "input", 18);
        i0.ɵɵtext(35, " PAGAMENTO A RATE ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(36, "div", 10)(37, "div", 7)(38, "div", 11)(39, "li", 12);
        i0.ɵɵelement(40, "img", 19);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(41, "div", 11)(42, "li", 12);
        i0.ɵɵelement(43, "img", 13);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(44, "div", 11)(45, "li", 12);
        i0.ɵɵelement(46, "img", 14);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(47, "div", 11)(48, "li", 12);
        i0.ɵɵelement(49, "img", 15);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(50, "div", 11)(51, "li", 12);
        i0.ɵɵelement(52, "img", 16);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(53, "div", 11)(54, "li", 12);
        i0.ɵɵelement(55, "img", 17);
        i0.ɵɵelementEnd()()()()();
        i0.ɵɵelement(56, "hr");
        i0.ɵɵelementStart(57, "div", 7)(58, "div", 8);
        i0.ɵɵelement(59, "input", 20);
        i0.ɵɵtext(60, " PAYPAL ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(61, "div", 10)(62, "div", 7)(63, "div", 11)(64, "li", 12);
        i0.ɵɵelement(65, "img", 21);
        i0.ɵɵelementEnd()()()()();
        i0.ɵɵelement(66, "hr");
        i0.ɵɵelementStart(67, "div", 7)(68, "div", 22);
        i0.ɵɵelement(69, "input", 23);
        i0.ɵɵtext(70, " PAGA IN CONTANTI ALLA CONSEGNA ");
        i0.ɵɵelementEnd()();
        i0.ɵɵelement(71, "hr");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(72, "div", 24);
        i0.ɵɵelement(73, "div", 25);
        i0.ɵɵelementStart(74, "div", 26)(75, "div", 27)(76, "div", 28)(77, "div", 29)(78, "div", 7)(79, "div", 30)(80, "div", 31)(81, "div", 32)(82, "span", 33);
        i0.ɵɵtext(83, "Loading...");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(84, "div", 22)(85, "h5", 34);
        i0.ɵɵtext(86, "We are validating your transaction, please wait");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelement(87, "button", 35);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(88, "div", 36)(89, "div", 37);
        i0.ɵɵtext(90, " Transaction succesfull!");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(91, "div", 38);
        i0.ɵɵtext(92, " Transaction failed!");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(93, "div", 39)(94, "div", 40);
        i0.ɵɵtext(95, " Now you can close this modal");
        i0.ɵɵelementEnd()()()()();
        i0.ɵɵelement(96, "orders-order-summary", 41);
        i0.ɵɵelementStart(97, "div", 42)(98, "p-button", 43);
        i0.ɵɵlistener("onClick", function PaymentOptions_Template_p_button_onClick_98_listener() { return ctx.placeOrder(); });
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(99, PaymentOptions_div_99_Template, 2, 0, "div", 44);
        i0.ɵɵelementStart(100, "ul");
        i0.ɵɵtemplate(101, PaymentOptions_li_101_Template, 2, 1, "li", 45);
        i0.ɵɵelementEnd()()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(96);
        i0.ɵɵproperty("isCheckOut", true);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.errorMessage);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.errormessage);
    } }, directives: [i8.Button, i9.OrderSummaryComponent, i10.NgIf, i10.NgForOf], styles: ["#page-mask[_ngcontent-%COMP%]{background:rgba(0,0,0,.5);position:fixed;top:0;right:0;bottom:0;left:0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaymentOptions, [{
        type: Component,
        args: [{ selector: 'payment-options', styles: [`#page-mask {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }`], providers: [KlarnaComponent], template: "<script src=\"https://js.stripe.com/v3/\" defer></script>\n<div class=\"p-2\">\n<div class=\"checkout-page pb-5\">\n    <div>\n        <p-button label=\"Torna al carrello\" icon=\"pi pi-arrow-left\" (onClick)=\"backToCart()\"></p-button>\n    </div>\n</div>\n<div class=\"grid p-2\" style=\"width: 100%; justify-content: center;\">\n\n  <div class=\"row\" style=\"justify-content: center; width: inherit; \">\n    <div class=\"col-12 col-md-7 col-lg-7 p-2\" style=\"\n    border: 1px solid var(--surface-200);\">\n    \n      <h3 style=\"text-align: center; margin-bottom: 30px;\">Seleziona un metodo di pagamento</h3>\n      <hr>\n      <div class=\"row\">\n        <div class=\"col-8\">\n          <input type=\"radio\" class=\"form-check-input\" id=\"radio1\" name=\"optradio\" value=\"credit\" checked>\n          CARTE DI CREDITO\n        </div>\n        <div class=\"col-4\">\n          \n          <div class=\"row\">        \n            <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src=\"assets/mastercard.png\"  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n            <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/visa.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n            <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/americanExpress.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n            <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/maestro.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n            <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/postepay.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n          </div>\n    \n        </div>\n      </div>\n    <hr>\n      <div class=\"row\">\n        <div class=\"col-8\">\n          <input type=\"radio\" class=\"form-check-input\" id=\"radio2\" name=\"optradio\" value=\"rate\" checked>\n          PAGAMENTO A RATE\n        </div>\n        <div class=\"col-4\">\n          \n          <div class=\"row\">        \n            <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/klarna.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n            <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src=\"assets/mastercard.png\"  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n            <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/visa.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n            <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/americanExpress.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n            <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/maestro.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n            <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/postepay.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n          </div>\n    \n        </div>\n      </div>\n      <hr>\n      <div class=\"row\">\n        <div class=\"col-8\">\n          <input type=\"radio\" class=\"form-check-input\" id=\"radio3\" name=\"optradio\" value=\"paypal\" checked>\n          PAYPAL\n        </div>\n        <div class=\"col-4\">\n          \n          <div class=\"row\">        \n            <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/paypal.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n          </div>\n    \n        </div>\n      </div>\n      <hr>\n      <div class=\"row\">\n        <div class=\"col\">\n          <input type=\"radio\" class=\"form-check-input\" id=\"radio4\" name=\"optradio\" value=\"contanti\" checked>\n          PAGA IN CONTANTI ALLA CONSEGNA\n        </div>\n      </div>\n     \n      <hr>\n    </div>\n    \n    <div class=\"col-12 col-md-5 col-lg-5\">\n\n    <div id=\"page-mask\" style=\"display: none;\"></div>\n\n      <!-- Modal -->\n      <div class=\"modal fade border border-info\" id=\"exampleModal\" tabindex=\"-1\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog border border-info border-4 rounded\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <div class=\"row\">\n                <div class=\"col-auto \" >\n                  <div class=\"d-flex justify-content-center\">\n                    <div id=\"loadingSpinner\" class=\"spinner-border text-primary\" role=\"status\">\n                      <span class=\"visually-hidden\">Loading...</span>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col\"><h5 class=\"modal-title\" id=\"exampleModalLabel\">We are validating your transaction, please wait</h5></div>\n              </div>\n\n\n              <button id=\"closeModal\" type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n            </div>\n            <div id=\"modalBody\" class=\"modal-body\">\n              <div id=\"success\" class=\"text-success\" style=\"font-weight: 800; display: none;\"> Transaction succesfull!</div>\n              <div id=\"failed\" class=\"text-danger\" style=\"font-weight: 800; display: none;\"> Transaction failed!</div>\n\n            </div>\n            <div class=\"modal-footer\">\n              <div id=\"closeModalFooter\" class=\"text-secondary\" style=\"font-size:smaller; display: none;\"> Now you can close this modal</div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <orders-order-summary [isCheckOut]=\"true\"></orders-order-summary>\n      <div class=\"checkout-button\">\n        <p-button label=\"Procedi\" (onClick)=\"placeOrder()\"></p-button>\n      </div>\n \n\n      <div class=\"error mt-2\" style=\"font-size: 29px; color:red; font-weight: 800;\" *ngIf=\"errorMessage\" >Please fill all the mandatory fields:</div>\n      <ul>\n        <li style=\"font-size: 20px; color:red; font-weight: 500;\"  *ngFor=\"let error of errormessage\">\n            {{error}}\n        </li>\n      </ul>\n\n\n\n    </div>\n\n  </div>\n  </div>\n\n</div>\n" }]
    }], function () { return [{ type: i1.Router }, { type: i2.UsersService }, { type: i3.FormBuilder }, { type: i4.CartService }, { type: i5.OrdersService }, { type: i6.MessageService }, { type: i7.CheckoutService }, { type: i2.KlarnaComponent }, { type: i2.Cart }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1vcHRpb25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvb3JkZXJzL3NyYy9saWIvcGFnZXMvY2hvb3NlLXBheW1lbnQtb3B0aW9uL3BheW1lbnQtb3B0aW9ucy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL29yZGVycy9zcmMvbGliL3BhZ2VzL2Nob29zZS1wYXltZW50LW9wdGlvbi9wYXltZW50LW9wdGlvbnMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsTUFBTTtBQUNOLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBYSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFHLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQTtBQUV2RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0IsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzlELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7Ozs7Ozs7Ozs7SUNtR25DLCtCQUFvRztJQUFBLHFEQUFxQztJQUFBLGlCQUFNOzs7SUFFN0ksOEJBQThGO0lBQzFGLFlBQ0o7SUFBQSxpQkFBSzs7O0lBREQsZUFDSjtJQURJLHlDQUNKOztBRHRGUixNQUFNLE9BQU8sY0FBYztJQUt6QixZQUFvQixNQUFjLEVBQ3hCLFlBQTBCLEVBQzFCLFdBQXdCLEVBQ3hCLFdBQXdCLEVBQ3hCLGFBQTRCLEVBQzVCLGNBQThCLEVBQzlCLFFBQXlCLEVBQ3pCLEVBQW9CLEVBQ3BCLElBQVU7UUFSQSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3hCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQUN6QixPQUFFLEdBQUYsRUFBRSxDQUFrQjtRQUNwQixTQUFJLEdBQUosSUFBSSxDQUFNO1FBTVIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsZUFBVSxHQUFnQixFQUFFLENBQUM7UUFFN0IsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNkLGlCQUFZLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFDM0MsbUJBQWMsR0FBUSxJQUFJLENBQUM7UUFDM0IsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUN6QixZQUFPLEdBQVcsS0FBSyxDQUFDO1FBWHZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUM7SUFDdkIsQ0FBQztJQWdCYixRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUMzQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBVSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBUSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBVSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBUyxJQUFJLENB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QUFBLGNBQUEsZUFBQSxlQUFBLGVBQUEsZ0JBQUE7UUFRcEYsMkJBQVU7UUFBQSxpQkFBTyxFQUFBLEVBQUEsRUFBQTtRQUlyRCxnQ0FBaUIsY0FBQTtRQUErQyxnRUFBK0M7UUFBQSxpQkFBSyxFQUFBLEVBQUE7UUFJdEgsOEJBQTRHO1FBQzlHLGlCQUFNO1FBQ04sZ0NBQXVDLGVBQUE7UUFDNEMseUNBQXVCO1FBQUEsaUJBQU07UUFDOUcsZ0NBQThFO1FBQUMscUNBQW1CO1FBQUEsaUJBQU0sRUFBQTtRQUcxRyxnQ0FBMEIsZUFBQTtRQUNxRSw4Q0FBNEI7UUFBQSxpQkFBTSxFQUFBLEVBQUEsRUFBQSxFQUFBO1FBS3ZJLDRDQUFpRTtRQUNqRSxnQ0FBNkIsb0JBQUE7UUFDRCxrR0FBVyxnQkFBWSxJQUFDO1FBQUMsaUJBQVcsRUFBQTtRQUloRSxrRUFBK0k7UUFDL0ksNEJBQUk7UUFDRixrRUFFSztRQUNQLGlCQUFLLEVBQUEsRUFBQSxFQUFBLEVBQUE7O1FBWGlCLGdCQUFtQjtRQUFuQixpQ0FBbUI7UUFNc0MsZUFBa0I7UUFBbEIsdUNBQWtCO1FBRWxCLGVBQWU7UUFBZiwwQ0FBZTs7dUZEcEZ2RixjQUFjO2NBZDFCLFNBQVM7MkJBQ0UsaUJBQWlCLFVBRW5CLENBQUM7Ozs7Ozs7SUFPUCxDQUFDLGFBQ1EsQ0FBQyxlQUFlLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVc2VyMjMgfSBmcm9tICcuLy4uLy4uL21vZGVscy91c2VyMjMnO1xuLyoqICovXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyAgVXNlcnNTZXJ2aWNlIH0gZnJvbSAnQGVzaG9wLWZyb250ZW5kL3VzZXJzJztcbmltcG9ydCB7IEtsYXJuYUNvbXBvbmVudCB9IGZyb20gJ0Blc2hvcC1mcm9udGVuZC91c2VycydcblxuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICdwcmltZW5nL2FwaSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPcmRlcnNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb3JkZXJzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FydFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jYXJ0LnNlcnZpY2UnO1xuaW1wb3J0IHsgT3JkZXJJdGVtIH0gZnJvbSAnLi4vLi4vbW9kZWxzL29yZGVyLWl0ZW0nO1xuaW1wb3J0IHsgT3JkZXIgfSBmcm9tICcuLi8uLi9tb2RlbHMvb3JkZXInO1xuaW1wb3J0IHsgQ2hlY2tvdXRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2hlY2tvdXQuc2VydmljZSc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnQGVzaG9wLWZyb250ZW5kL3VzZXJzJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9tb2RlbHMvdXNlcic7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGF5bWVudC1vcHRpb25zJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BheW1lbnQtb3B0aW9ucy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogW2AjcGFnZS1tYXNrIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgfWBdLFxuICBwcm92aWRlcnM6IFtLbGFybmFDb21wb25lbnRdXG5cbn0pXG5leHBvcnQgY2xhc3MgUGF5bWVudE9wdGlvbnMgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGVycm9yTWVzc2FnZTogYm9vbGVhbjtcbiAgZXJyb3JtZXNzYWdlOiBTdHJpbmdbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgdXNlcnNTZXJ2aWNlOiBVc2Vyc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG4gICAgcHJpdmF0ZSBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBvcmRlcnNTZXJ2aWNlOiBPcmRlcnNTZXJ2aWNlLFxuICAgIHByaXZhdGUgbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2hlY2tvdXQ6IENoZWNrb3V0U2VydmljZSxcbiAgICBwcml2YXRlIGtjIDogS2xhcm5hQ29tcG9uZW50LFxuICAgIHByaXZhdGUgY2FydDogQ2FydCxcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyID0gbmV3IFVzZXI7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBjaGVja291dEZvcm1Hcm91cDogRm9ybUdyb3VwO1xuICAgICAgICAgICAgICBpc1N1Ym1pdHRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICBvcmRlckl0ZW1zOiBPcmRlckl0ZW1bXSA9IFtdO1xuICAgICAgICAgICAgICB1c2VySWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgY291bnRyaWVzID0gW107XG4gICAgICAgICAgICAgICB1bnN1YnNjcmliZSQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG4gICAgICAgICAgICAgICBwYXltZW50SGFuZGxlcjogYW55ID0gbnVsbDtcbiAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgIGZhaWx1cmU6Ym9vbGVhbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgdXNlcjogVXNlcjtcbiAgICAgICAgICAgICAgIGRhdGE7XG5cblxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX2luaXRVc2VyRm9ybSgpO1xuICAgIHRoaXMuX2F1dG9GaWxsVXNlckRhdGEoKTtcbiAgICB0aGlzLl9nZXRDb3VudHJpZXMoKTtcbiAgICB0aGlzLl9nZXRDYXJ0SXRlbXMoKTtcbiAgICB0aGlzLmludm9rZVN0cmlwZSgpO1xuICAgIHRoaXMuZGF0YSA9ICB0aGlzLnBhcnNlSnd0KHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJhdXRoVG9rZW5cIikpO1xuICAgIHRoaXMudXNlci5jb3VudHJ5PSAgICAgIHRoaXMuZGF0YS5jb3VudHJ5O1xuICAgIHRoaXMudXNlci5hZGRyZXNzMT0gICAgIHRoaXMuZGF0YVsnYWRkcmVzczEnXTtcbiAgICB0aGlzLnVzZXIuYWRkcmVzczI9ICAgICB0aGlzLmRhdGEuYWRkcmVzczI7XG4gICAgdGhpcy51c2VyLmRhdGU9ICAgICAgICAgdGhpcy5kYXRhLmRhdGVPZkJpcnRoO1xuICAgIHRoaXMudXNlci5lbWFpbD0gICAgICAgIHRoaXMuZGF0YS5lbWFpbDtcbiAgICB0aGlzLnVzZXIucGhvbmU9ICAgICAgICB0aGlzLmRhdGEucGhvbmU7XG4gICAgdGhpcy51c2VyLnBvc3RhbENvZGU9ICAgdGhpcy5kYXRhLnBvc3RhbENvZGU7XG4gICAgdGhpcy51c2VyLnNleD0gICAgICAgICAgdGhpcy5kYXRhLmdlbmRlcjtcbiAgICB0aGlzLnVzZXIuZk5hbWUgPSAgICAgICB0aGlzLmRhdGEuZk5hbWU7XG4gICAgdGhpcy51c2VyLmxOYW1lID0gICAgICAgdGhpcy5kYXRhLmxOYW1lO1xuICAgIHRoaXMudXNlci5yZWdpb24gPSAgICAgIHRoaXMuZGF0YS5yZWdpb247XG4gICAgdGhpcy51c2VyLmNpdHkgPSAgICAgICAgdGhpcy5kYXRhLmNpdHk7XG4gICAgdGhpcy51c2VyLnN0YXRlID0gICAgICAgdGhpcy5kYXRhLnN0YXRlO1xuICAgIHRoaXMudXNlci5wcmVmaXggPSAgICAgIHRoaXMuZGF0YS5wcmVmaXg7XG4gICAgdGhpcy5rYyA9IG5ldyBLbGFybmFDb21wb25lbnQoKTtcbiAgICB0aGlzLmtjLnByaW50SGVsbG8oKTtcblxuICAgIGNvbnNvbGUubG9nKFwidGhpcyB1c2VyID0gXCIgKyBKU09OLnN0cmluZ2lmeSh0aGlzLnVzZXIpKTtcbiAgXG5cblxuICB9XG4gIHBhcnNlSnd0ICh0b2tlbikge1xuICAgIHZhciBiYXNlNjRVcmwgPSB0b2tlbi5zcGxpdCgnLicpWzFdO1xuICAgIHZhciBiYXNlNjQgPSBiYXNlNjRVcmwucmVwbGFjZSgvLS9nLCAnKycpLnJlcGxhY2UoL18vZywgJy8nKTtcbiAgICB2YXIganNvblBheWxvYWQgPSBkZWNvZGVVUklDb21wb25lbnQod2luZG93LmF0b2IoYmFzZTY0KS5zcGxpdCgnJykubWFwKGZ1bmN0aW9uKGMpIHtcbiAgICAgICAgcmV0dXJuICclJyArICgnMDAnICsgYy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTIpO1xuICAgIH0pLmpvaW4oJycpKTtcblxuICAgIHJldHVybiBKU09OLnBhcnNlKGpzb25QYXlsb2FkKTtcbn07XG5cbiAgcHJpdmF0ZSBfaW5pdFVzZXJGb3JtKCkge1xuICAgIHRoaXMuY2hlY2tvdXRGb3JtR3JvdXAgPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIG5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBlbWFpbDogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5lbWFpbF1dLFxuICAgICAgcGhvbmU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBjaXR5OiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgY291bnRyeTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIHppcDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIGFwYXJ0bWVudDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIHN0cmVldDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgIH0pO1xuICB9XG5cblxuICBwcml2YXRlIF9hdXRvRmlsbFVzZXJEYXRhKCkge1xuICAgIC8qXG4gICAgdGhpcy51c2Vyc1NlcnZpY2VcbiAgICAgIC5vYnNlcnZlQ3VycmVudFVzZXIoKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSlcbiAgICAgIC5zdWJzY3JpYmUoKHVzZXIpID0+IHtcbiAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICB0aGlzLnVzZXJJZCA9IHVzZXIuaWQ7XG4gICAgICAgICAgdGhpcy5jaGVja291dEZvcm0ubmFtZS5zZXRWYWx1ZSh1c2VyLm5hbWUpO1xuICAgICAgICAgIHRoaXMuY2hlY2tvdXRGb3JtLmVtYWlsLnNldFZhbHVlKHVzZXIuZW1haWwpO1xuICAgICAgICAgIHRoaXMuY2hlY2tvdXRGb3JtLnBob25lLnNldFZhbHVlKHVzZXIucGhvbmUpO1xuICAgICAgICAgIHRoaXMuY2hlY2tvdXRGb3JtLmNpdHkuc2V0VmFsdWUodXNlci5jaXR5KTtcbiAgICAgICAgICB0aGlzLmNoZWNrb3V0Rm9ybS5zdHJlZXQuc2V0VmFsdWUodXNlci5zdHJlZXQpO1xuICAgICAgICAgIHRoaXMuY2hlY2tvdXRGb3JtLmNvdW50cnkuc2V0VmFsdWUodXNlci5jb3VudHJ5KTtcbiAgICAgICAgICB0aGlzLmNoZWNrb3V0Rm9ybS56aXAuc2V0VmFsdWUodXNlci56aXApO1xuICAgICAgICAgIHRoaXMuY2hlY2tvdXRGb3JtLmFwYXJ0bWVudC5zZXRWYWx1ZSh1c2VyLmFwYXJ0bWVudCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgKi9cbiAgfVxuXG4gIHByaXZhdGUgX2dldENhcnRJdGVtcygpe1xuXG4gIH1cblxuICBwcml2YXRlIF9nZXRDb3VudHJpZXMoKXtcbiAgICB0aGlzLmNvdW50cmllcyA9IHRoaXMudXNlcnNTZXJ2aWNlLmdldENvdW50cmllcygpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuY291bnRyaWVzKTtcbiAgfVxuXG5cbiAgYmFja1RvQ2FydCgpe1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2NhcnQnXSk7XG4gIH1cblxuICBhc3luYyBwbGFjZU9yZGVyKCkge1xuICAgIGNvbnNvbGUubG9nKFwidG90YWwgcHJpY2UgPSBcIiArIHRoaXMuY2FydC5nZXRUb3RhbFByaWNlKCkpO1xuXG4gICAgY29uc29sZS5sb2coXCJvcHppb25lID0gXCIgKyB0aGlzLmNoZWNrU2VsZWN0ZWRPcHRpb25zKCkpO1xuXG4gICAgc3dpdGNoKHRoaXMuY2hlY2tTZWxlY3RlZE9wdGlvbnMoKSl7XG4gICAgICBjYXNlIFwiY3JlZGl0XCIgOlxuICAgICAgICB0aGlzLm1ha2VQYXltZW50KHRoaXMuY2FydC5nZXRUb3RhbFByaWNlKCkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJyYXRlXCIgOlxuICAgICAgICBhd2FpdCB0aGlzLmtjLnBheSh0aGlzLmNhcnQuZ2V0VG90YWxQcmljZSgpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYodGhpcy5jaGVja1NlbGVjdGVkT3B0aW9ucygpKXtcbiAgICAgIC8vdGhpcy5tYWtlUGF5bWVudCh0aGlzLmNhcnQuZ2V0VG90YWxQcmljZSgpKTtcbiAgIC8vICAgYXdhaXQgdGhpcy5rYy5wYXkodGhpcy5jYXJ0LmdldFRvdGFsUHJpY2UoKSk7XG4gICAgXG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IGZhbHNlO1xuICAgIH1lbHNle1xuICAgICAgY29uc29sZS5sb2coXCJlcnJvciBpbiB0aGUgc2hpcHBpbmcgYWRkcmVzc1wiKTtcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gdHJ1ZTtcbiAgICB9XG5cbiAgfVxuXG4gIGNoZWNrU2VsZWN0ZWRPcHRpb25zKCkgOiBzdHJpbmd7XG5cblxuICAgIHJldHVybiAoPEhUTUxJbnB1dEVsZW1lbnQ+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJvcHRyYWRpb1wiXTpjaGVja2VkJykpLnZhbHVlO1xuXG4gIH1cbiBcbiAgZ2V0IGNoZWNrb3V0Rm9ybSgpIHtcbiAgICByZXR1cm4gdGhpcy5jaGVja291dEZvcm1Hcm91cC5jb250cm9scztcbiAgfVxuXG4gIG1ha2VQYXltZW50KGFtb3VudDogbnVtYmVyKSB7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZS1tYXNrJykuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuXG4gICAgY29uc3QgcGF5bWVudEhhbmRsZXIgPSAoPGFueT53aW5kb3cpLlN0cmlwZUNoZWNrb3V0LmNvbmZpZ3VyZSh7XG4gICAgICBrZXk6ICdwa190ZXN0XzUxTFlVQ0dERXlpWDNlM1BsODlqcW1WZzFnVE4yUWhpZnl3dElsZzZBejFuaUdVVjNBTlJwQU5YSjhoZEVJandETmE4R1RCdm5yeHEzemdkUjhnRXp4Z1JUMDB1SGxmdFFuRicsXG4gICAgICBsb2NhbGU6ICdhdXRvJyxcbiAgICAgIHRva2VuOiBmdW5jdGlvbiAoc3RyaXBlVG9rZW46IGFueSkge1xuICAgICAgICBjb25zb2xlLmxvZyhzdHJpcGVUb2tlbik7XG4gICAgICAgIHBheW1lbnRzdHJpcGUoc3RyaXBlVG9rZW4pO1xuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHBheW1lbnRzdHJpcGUgPSAoc3RyaXBlVG9rZW46IGFueSkgPT4ge1xuICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpIGFzIEhUTUxFbGVtZW50IHwgbnVsbFxuICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG4gICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2VNb2RhbFwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2UtbWFzaycpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfSk7XG5cbiAgICAgIHRoaXMuY2hlY2tvdXQubWFrZVBheW1lbnQoc3RyaXBlVG9rZW4sIGFtb3VudCkuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2VNb2RhbEZvb3RlclwiKS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2FkaW5nU3Bpbm5lclwiKS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xuXG5cbiAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcblxuICAgICAgICBsZXQgb3JkZXI6IE9yZGVyID0gbmV3IE9yZGVyO1xuICAgICAgICBvcmRlci5jaXR5ID0gdGhpcy51c2VyLmNpdHk7XG4gICAgICAgIG9yZGVyLmNvdW50cnkgPSB0aGlzLnVzZXIuY291bnRyeTtcbiAgICAgICAgb3JkZXIuZGF0ZU9yZGVyZWQgPSBTdHJpbmcobm93KTtcbiAgICAgICAgb3JkZXIuaWQgPSAnMTIzMTIzMTIzJztcbiAgICAgICAgb3JkZXIucGhvbmUgPSB0aGlzLnVzZXIucGhvbmU7XG4gICAgICAgIG9yZGVyLnNoaXBwaW5nQWRkcmVzczEgPSB0aGlzLnVzZXIuYWRkcmVzczE7XG4gICAgICAgIG9yZGVyLnRvdGFsUHJpY2UgPSBTdHJpbmcodGhpcy5jYXJ0LmdldFRvdGFsUHJpY2UoKSk7XG4gICAgICAgIG9yZGVyLnppcCA9IHRoaXMudXNlci5wb3N0YWxDb2RlO1xuXG4gICAgICAgIG9yZGVyLnVzZXIgPSB0aGlzLmRhdGEudXNlcklkO1xuICAgICAgICBvcmRlci5pZCA9IG51bGw7XG4gICAgICAgIGxldCB2YXJpYW50cyA9ICB0aGlzLmNhcnQuZ2V0QWxsVmFyaWFudHMoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJ2YXJpYW50cyA9IFwiICsgSlNPTi5zdHJpbmdpZnkodmFyaWFudHMpKTtcbiAgICAgICAgb3JkZXIub3JkZXJJdGVtcyA9IHRoaXMuY2FydC5nZXRBbGxWYXJpYW50cygpO1xuXG5cblxuXG5cblxuXG4gICAgICAgIGlmIChkYXRhLmRhdGEgPT09IFwic3VjY2Vzc1wiKSB7XG4gICAgICAgICAgdGhpcy5zdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmZhaWx1cmUgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLm9yZGVyc1NlcnZpY2UuY3JlYXRlTmV3T3JkZXIob3JkZXIsIHRoaXMudXNlci5lbWFpbCkuc3Vic2NyaWJlKChkYXRhKSA9PntcblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJJIGFtIGNyZWF0aW5nIHRoaXMgbmV3IG9yZGVyOiBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YTogXCIgKyBkYXRhKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhhbXBsZU1vZGFsTGFiZWxcIikuaW5uZXJUZXh0PVwiWW91ciBvcmRlciBudW1iZXIgaXM6IFwiICsgZGF0YS5faWQ7XG5cbiAgICAgICAgICAvLyAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgpXG5cbiAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImNhcnRCeUx1Y2FcIik7XG4gICAgICAgICAgdGhpcy5jYXJ0U2VydmljZS5nZXRDYXJ0KCk7XG4gICAgICAgICAgdGhpcy5jYXJ0LmVtcHR5Q2FydCgpO1xuXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9vcmRlcnMvJyArIGRhdGEuX2lkXSk7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmFkZCh7XG4gICAgICAgICAgICAgIHNldmVyaXR5OiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgIHN1bW1hcnk6ICdTdWNjZXMnLFxuICAgICAgICAgICAgICBkZXRhaWw6IGBTdWNjZXNmdWwgdHJhbnNhY3Rpb24hYFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSlcblxuXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWNjZXNzXCIpLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiO1xuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5mYWlsdXJlID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnN1Y2Nlc3MgPSBmYWxzZTtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZhaWxlZFwiKS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHBheW1lbnRIYW5kbGVyLm9wZW4oe1xuICAgICAgbmFtZTogJ0NhdGFsZG8gU3RvcmUnLFxuICAgICAgZGVzY3JpcHRpb246ICdQbGVhc2UgZmlsbCB5b3VyIGJpbGxpbmcgaW5mb3JtYXRpb25zJyxcbiAgICAgIGFtb3VudDogYW1vdW50ICogMTAwLFxuICAgIH0pO1xuXG4gIH1cblxuICBpbnZva2VTdHJpcGUoKSB7XG4gICAgaWYgKCF3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0cmlwZS1zY3JpcHQnKSkge1xuICAgICAgY29uc3Qgc2NyaXB0ID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgc2NyaXB0LmlkID0gJ3N0cmlwZS1zY3JpcHQnO1xuICAgICAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICAgIHNjcmlwdC5zcmMgPSAnaHR0cHM6Ly9jaGVja291dC5zdHJpcGUuY29tL2NoZWNrb3V0LmpzJztcbiAgICAgIHNjcmlwdC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucGF5bWVudEhhbmRsZXIgPSAoPGFueT53aW5kb3cpLlN0cmlwZUNoZWNrb3V0LmNvbmZpZ3VyZSh7XG4gICAgICAgICAga2V5OiAncGtfdGVzdF81MUxZVUNHREV5aVgzZTNQbDg5anFtVmcxZ1ROMlFoaWZ5d3RJbGc2QXoxbmlHVVYzQU5ScEFOWEo4aGRFSWp3RE5hOEdUQnZucnhxM3pnZFI4Z0V6eGdSVDAwdUhsZnRRbkYnLFxuICAgICAgICAgIGxvY2FsZTogJ2F1dG8nLFxuICAgICAgICAgIHRva2VuOiBmdW5jdGlvbiAoc3RyaXBlVG9rZW46IGFueSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coc3RyaXBlVG9rZW4pO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICB9XG4gIH1cblxufVxuIiwiPHNjcmlwdCBzcmM9XCJodHRwczovL2pzLnN0cmlwZS5jb20vdjMvXCIgZGVmZXI+PC9zY3JpcHQ+XG48ZGl2IGNsYXNzPVwicC0yXCI+XG48ZGl2IGNsYXNzPVwiY2hlY2tvdXQtcGFnZSBwYi01XCI+XG4gICAgPGRpdj5cbiAgICAgICAgPHAtYnV0dG9uIGxhYmVsPVwiVG9ybmEgYWwgY2FycmVsbG9cIiBpY29uPVwicGkgcGktYXJyb3ctbGVmdFwiIChvbkNsaWNrKT1cImJhY2tUb0NhcnQoKVwiPjwvcC1idXR0b24+XG4gICAgPC9kaXY+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJncmlkIHAtMlwiIHN0eWxlPVwid2lkdGg6IDEwMCU7IGp1c3RpZnktY29udGVudDogY2VudGVyO1wiPlxuXG4gIDxkaXYgY2xhc3M9XCJyb3dcIiBzdHlsZT1cImp1c3RpZnktY29udGVudDogY2VudGVyOyB3aWR0aDogaW5oZXJpdDsgXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbC0xMiBjb2wtbWQtNyBjb2wtbGctNyBwLTJcIiBzdHlsZT1cIlxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXN1cmZhY2UtMjAwKTtcIj5cbiAgICBcbiAgICAgIDxoMyBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlcjsgbWFyZ2luLWJvdHRvbTogMzBweDtcIj5TZWxlemlvbmEgdW4gbWV0b2RvIGRpIHBhZ2FtZW50bzwvaDM+XG4gICAgICA8aHI+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtOFwiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiBpZD1cInJhZGlvMVwiIG5hbWU9XCJvcHRyYWRpb1wiIHZhbHVlPVwiY3JlZGl0XCIgY2hlY2tlZD5cbiAgICAgICAgICBDQVJURSBESSBDUkVESVRPXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTRcIj5cbiAgICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+ICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiICBzdHlsZT1cIm1pbi13aWR0aDogNTBweDtcIj48bGkgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmU7XCI+PGltZyBzcmM9XCJhc3NldHMvbWFzdGVyY2FyZC5wbmdcIiAgY2xhc3M9XCJpbWctZmx1aWRcIiBhbHQ9XCJSZXNwb25zaXZlIGltYWdlXCI+PC9saT48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiICBzdHlsZT1cIm1pbi13aWR0aDogNTBweDtcIj48bGkgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmU7XCI+PGltZyBzcmM9J2Fzc2V0cy92aXNhLnBuZycgIGNsYXNzPVwiaW1nLWZsdWlkXCIgYWx0PVwiUmVzcG9uc2l2ZSBpbWFnZVwiPjwvbGk+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIiAgc3R5bGU9XCJtaW4td2lkdGg6IDUwcHg7XCI+PGxpIHN0eWxlPVwiZGlzcGxheTogaW5saW5lO1wiPjxpbWcgc3JjPSdhc3NldHMvYW1lcmljYW5FeHByZXNzLnBuZycgIGNsYXNzPVwiaW1nLWZsdWlkXCIgYWx0PVwiUmVzcG9uc2l2ZSBpbWFnZVwiPjwvbGk+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIiAgc3R5bGU9XCJtaW4td2lkdGg6IDUwcHg7XCI+PGxpIHN0eWxlPVwiZGlzcGxheTogaW5saW5lO1wiPjxpbWcgc3JjPSdhc3NldHMvbWFlc3Ryby5wbmcnICBjbGFzcz1cImltZy1mbHVpZFwiIGFsdD1cIlJlc3BvbnNpdmUgaW1hZ2VcIj48L2xpPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCIgIHN0eWxlPVwibWluLXdpZHRoOiA1MHB4O1wiPjxsaSBzdHlsZT1cImRpc3BsYXk6IGlubGluZTtcIj48aW1nIHNyYz0nYXNzZXRzL3Bvc3RlcGF5LnBuZycgIGNsYXNzPVwiaW1nLWZsdWlkXCIgYWx0PVwiUmVzcG9uc2l2ZSBpbWFnZVwiPjwvbGk+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPGhyPlxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLThcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgaWQ9XCJyYWRpbzJcIiBuYW1lPVwib3B0cmFkaW9cIiB2YWx1ZT1cInJhdGVcIiBjaGVja2VkPlxuICAgICAgICAgIFBBR0FNRU5UTyBBIFJBVEVcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNFwiPlxuICAgICAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj4gICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCIgIHN0eWxlPVwibWluLXdpZHRoOiA1MHB4O1wiPjxsaSBzdHlsZT1cImRpc3BsYXk6IGlubGluZTtcIj48aW1nIHNyYz0nYXNzZXRzL2tsYXJuYS5wbmcnICBjbGFzcz1cImltZy1mbHVpZFwiIGFsdD1cIlJlc3BvbnNpdmUgaW1hZ2VcIj48L2xpPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCIgIHN0eWxlPVwibWluLXdpZHRoOiA1MHB4O1wiPjxsaSBzdHlsZT1cImRpc3BsYXk6IGlubGluZTtcIj48aW1nIHNyYz1cImFzc2V0cy9tYXN0ZXJjYXJkLnBuZ1wiICBjbGFzcz1cImltZy1mbHVpZFwiIGFsdD1cIlJlc3BvbnNpdmUgaW1hZ2VcIj48L2xpPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCIgIHN0eWxlPVwibWluLXdpZHRoOiA1MHB4O1wiPjxsaSBzdHlsZT1cImRpc3BsYXk6IGlubGluZTtcIj48aW1nIHNyYz0nYXNzZXRzL3Zpc2EucG5nJyAgY2xhc3M9XCJpbWctZmx1aWRcIiBhbHQ9XCJSZXNwb25zaXZlIGltYWdlXCI+PC9saT48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiICBzdHlsZT1cIm1pbi13aWR0aDogNTBweDtcIj48bGkgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmU7XCI+PGltZyBzcmM9J2Fzc2V0cy9hbWVyaWNhbkV4cHJlc3MucG5nJyAgY2xhc3M9XCJpbWctZmx1aWRcIiBhbHQ9XCJSZXNwb25zaXZlIGltYWdlXCI+PC9saT48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiICBzdHlsZT1cIm1pbi13aWR0aDogNTBweDtcIj48bGkgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmU7XCI+PGltZyBzcmM9J2Fzc2V0cy9tYWVzdHJvLnBuZycgIGNsYXNzPVwiaW1nLWZsdWlkXCIgYWx0PVwiUmVzcG9uc2l2ZSBpbWFnZVwiPjwvbGk+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIiAgc3R5bGU9XCJtaW4td2lkdGg6IDUwcHg7XCI+PGxpIHN0eWxlPVwiZGlzcGxheTogaW5saW5lO1wiPjxpbWcgc3JjPSdhc3NldHMvcG9zdGVwYXkucG5nJyAgY2xhc3M9XCJpbWctZmx1aWRcIiBhbHQ9XCJSZXNwb25zaXZlIGltYWdlXCI+PC9saT48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxocj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC04XCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIGlkPVwicmFkaW8zXCIgbmFtZT1cIm9wdHJhZGlvXCIgdmFsdWU9XCJwYXlwYWxcIiBjaGVja2VkPlxuICAgICAgICAgIFBBWVBBTFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00XCI+XG4gICAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPiAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIiAgc3R5bGU9XCJtaW4td2lkdGg6IDUwcHg7XCI+PGxpIHN0eWxlPVwiZGlzcGxheTogaW5saW5lO1wiPjxpbWcgc3JjPSdhc3NldHMvcGF5cGFsLnBuZycgIGNsYXNzPVwiaW1nLWZsdWlkXCIgYWx0PVwiUmVzcG9uc2l2ZSBpbWFnZVwiPjwvbGk+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8aHI+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgaWQ9XCJyYWRpbzRcIiBuYW1lPVwib3B0cmFkaW9cIiB2YWx1ZT1cImNvbnRhbnRpXCIgY2hlY2tlZD5cbiAgICAgICAgICBQQUdBIElOIENPTlRBTlRJIEFMTEEgQ09OU0VHTkFcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgXG4gICAgICA8aHI+XG4gICAgPC9kaXY+XG4gICAgXG4gICAgPGRpdiBjbGFzcz1cImNvbC0xMiBjb2wtbWQtNSBjb2wtbGctNVwiPlxuXG4gICAgPGRpdiBpZD1cInBhZ2UtbWFza1wiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj48L2Rpdj5cblxuICAgICAgPCEtLSBNb2RhbCAtLT5cbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbCBmYWRlIGJvcmRlciBib3JkZXItaW5mb1wiIGlkPVwiZXhhbXBsZU1vZGFsXCIgdGFiaW5kZXg9XCItMVwiIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGVNb2RhbExhYmVsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2cgYm9yZGVyIGJvcmRlci1pbmZvIGJvcmRlci00IHJvdW5kZWRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1hdXRvIFwiID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibG9hZGluZ1NwaW5uZXJcIiBjbGFzcz1cInNwaW5uZXItYm9yZGVyIHRleHQtcHJpbWFyeVwiIHJvbGU9XCJzdGF0dXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZpc3VhbGx5LWhpZGRlblwiPkxvYWRpbmcuLi48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPjxoNSBjbGFzcz1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJleGFtcGxlTW9kYWxMYWJlbFwiPldlIGFyZSB2YWxpZGF0aW5nIHlvdXIgdHJhbnNhY3Rpb24sIHBsZWFzZSB3YWl0PC9oNT48L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiY2xvc2VNb2RhbFwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0bi1jbG9zZVwiIGRhdGEtYnMtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJtb2RhbEJvZHlcIiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cInN1Y2Nlc3NcIiBjbGFzcz1cInRleHQtc3VjY2Vzc1wiIHN0eWxlPVwiZm9udC13ZWlnaHQ6IDgwMDsgZGlzcGxheTogbm9uZTtcIj4gVHJhbnNhY3Rpb24gc3VjY2VzZnVsbCE8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cImZhaWxlZFwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIiBzdHlsZT1cImZvbnQtd2VpZ2h0OiA4MDA7IGRpc3BsYXk6IG5vbmU7XCI+IFRyYW5zYWN0aW9uIGZhaWxlZCE8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJjbG9zZU1vZGFsRm9vdGVyXCIgY2xhc3M9XCJ0ZXh0LXNlY29uZGFyeVwiIHN0eWxlPVwiZm9udC1zaXplOnNtYWxsZXI7IGRpc3BsYXk6IG5vbmU7XCI+IE5vdyB5b3UgY2FuIGNsb3NlIHRoaXMgbW9kYWw8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPG9yZGVycy1vcmRlci1zdW1tYXJ5IFtpc0NoZWNrT3V0XT1cInRydWVcIj48L29yZGVycy1vcmRlci1zdW1tYXJ5PlxuICAgICAgPGRpdiBjbGFzcz1cImNoZWNrb3V0LWJ1dHRvblwiPlxuICAgICAgICA8cC1idXR0b24gbGFiZWw9XCJQcm9jZWRpXCIgKG9uQ2xpY2spPVwicGxhY2VPcmRlcigpXCI+PC9wLWJ1dHRvbj5cbiAgICAgIDwvZGl2PlxuIFxuXG4gICAgICA8ZGl2IGNsYXNzPVwiZXJyb3IgbXQtMlwiIHN0eWxlPVwiZm9udC1zaXplOiAyOXB4OyBjb2xvcjpyZWQ7IGZvbnQtd2VpZ2h0OiA4MDA7XCIgKm5nSWY9XCJlcnJvck1lc3NhZ2VcIiA+UGxlYXNlIGZpbGwgYWxsIHRoZSBtYW5kYXRvcnkgZmllbGRzOjwvZGl2PlxuICAgICAgPHVsPlxuICAgICAgICA8bGkgc3R5bGU9XCJmb250LXNpemU6IDIwcHg7IGNvbG9yOnJlZDsgZm9udC13ZWlnaHQ6IDUwMDtcIiAgKm5nRm9yPVwibGV0IGVycm9yIG9mIGVycm9ybWVzc2FnZVwiPlxuICAgICAgICAgICAge3tlcnJvcn19XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuXG5cblxuICAgIDwvZGl2PlxuXG4gIDwvZGl2PlxuICA8L2Rpdj5cblxuPC9kaXY+XG4iXX0=