/** */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '@eshop-frontend/users';
import { KlarnaComponent } from '@eshop-frontend/users';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { Subject } from 'rxjs';
import { OrdersService } from '../../services/orders.service';
import { CartService } from '../../services/cart.service';
import { Order } from '../../models/order';
import { CheckoutService } from '../../services/checkout.service';
import { Cart } from '@eshop-frontend/users';
import { User } from '../../models/user';
import { ConfirmationService } from 'primeng/api';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@eshop-frontend/users";
import * as i3 from "@angular/forms";
import * as i4 from "../../services/cart.service";
import * as i5 from "../../services/orders.service";
import * as i6 from "primeng/api";
import * as i7 from "../../services/checkout.service";
import * as i8 from "primeng/confirmdialog";
import * as i9 from "primeng/button";
import * as i10 from "../../components/order-summary/order-summary.component";
import * as i11 from "@angular/common";
import * as i12 from "primeng/messages";
function PaymentOptions_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h3");
    i0.ɵɵtext(1, "Conferma ordine");
    i0.ɵɵelementEnd();
} }
function PaymentOptions_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 51);
    i0.ɵɵlistener("click", function PaymentOptions_ng_template_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6); i0.ɵɵnextContext(); const _r0 = i0.ɵɵreference(2); return _r0.reject(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(1, "button", 52);
    i0.ɵɵlistener("click", function PaymentOptions_ng_template_4_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r6); i0.ɵɵnextContext(); const _r0 = i0.ɵɵreference(2); return _r0.accept(); });
    i0.ɵɵelementEnd();
} }
function PaymentOptions_div_103_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 53);
    i0.ɵɵtext(1, "Please fill all the mandatory fields:");
    i0.ɵɵelementEnd();
} }
function PaymentOptions_li_105_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 54);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const error_r8 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", error_r8, " ");
} }
export class PaymentOptions {
    constructor(router, usersService, formBuilder, cartService, ordersService, messageService, checkout, kc, cart, confirmationService, primengConfig) {
        this.router = router;
        this.usersService = usersService;
        this.formBuilder = formBuilder;
        this.cartService = cartService;
        this.ordersService = ordersService;
        this.messageService = messageService;
        this.checkout = checkout;
        this.kc = kc;
        this.cart = cart;
        this.confirmationService = confirmationService;
        this.primengConfig = primengConfig;
        this.msgs = [];
        this.isSubmitted = false;
        this.orderItems = [];
        this.countries = [];
        this.unsubscribe$ = new Subject();
        this.paymentHandler = null;
        this.success = false;
        this.failure = false;
        this.user = new User;
        this.primengConfig.ripple = true;
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
                // localStorage.removeItem("order");
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
                order.email = this.user.email;
                order.paymentOption = "klarna";
                order.confirmed = false;
                let variants = this.cart.getAllVariants();
                console.log("variants = " + JSON.stringify(variants));
                order.orderItems = this.cart.getAllVariants();
                localStorage.setItem("order", JSON.stringify(order));
                console.log("prima di pagare con klarna sto usando questo ordine: " + localStorage.getItem("order") + "  " + JSON.stringify(localStorage.getItem("order")));
                await this.kc.pay(this.cart.getTotalPrice());
                break;
            case "contanti":
                console.log("contanti");
                this.confirm();
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
    confirm() {
        this.confirmationService.confirm({
            message: 'Cliccando su conferma ti impegni a pagare l\'ordine. <br> <b>Riceverai un sms all\'numero ' + this.user.phone + '<br>Per confermare l\'ordine dovrai rispondere all\'sms inviando \'SI\' </b>',
            accept: () => {
                this.msgs = [{ severity: 'info', summary: 'Confirmed', detail: 'Ricordati che per confermare l\'ordine dovrai rispondere inviando \'SI\' all\'sms ricevuto!' }];
                const now = new Date();
                let order = new Order;
                order.city = this.user.city;
                order.country = this.user.country;
                order.dateOrdered = String(now);
                order.id = '123123123';
                order.phone = this.user.phone;
                order.prefix = this.user.prefix;
                order.shippingAddress1 = this.user.address1;
                order.totalPrice = String(this.cart.getTotalPrice());
                order.zip = this.user.postalCode;
                order.user = this.data.userId;
                order.id = null;
                order.confirmed = false;
                order.paymentOption = "Contanti";
                let variants = this.cart.getAllVariants();
                console.log("variants = " + JSON.stringify(variants));
                order.orderItems = this.cart.getAllVariants();
                localStorage.setItem("order", JSON.stringify(order));
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
                    this.checkout.sendSms(data._id, data.phone, this.user.prefix).subscribe((data) => {
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Succes',
                            detail: `SMS inviato!`
                        });
                    });
                });
            },
            reject: () => {
                this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'L\'ordine non è stato confermato!' }];
            }
        });
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
                order.confirmed = true;
                order.paymentOption = "Carta di credito";
                let variants = this.cart.getAllVariants();
                console.log("variants = " + JSON.stringify(variants));
                order.orderItems = this.cart.getAllVariants();
                localStorage.setItem("order", JSON.stringify(order));
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
PaymentOptions.ɵfac = function PaymentOptions_Factory(t) { return new (t || PaymentOptions)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.UsersService), i0.ɵɵdirectiveInject(i3.FormBuilder), i0.ɵɵdirectiveInject(i4.CartService), i0.ɵɵdirectiveInject(i5.OrdersService), i0.ɵɵdirectiveInject(i6.MessageService), i0.ɵɵdirectiveInject(i7.CheckoutService), i0.ɵɵdirectiveInject(i2.KlarnaComponent), i0.ɵɵdirectiveInject(i2.Cart), i0.ɵɵdirectiveInject(i6.ConfirmationService), i0.ɵɵdirectiveInject(i6.PrimeNGConfig)); };
PaymentOptions.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PaymentOptions, selectors: [["payment-options"]], features: [i0.ɵɵProvidersFeature([KlarnaComponent])], decls: 107, vars: 4, consts: [[1, "p-2"], ["header", "Confirmation", "icon", "pi pi-exclamation-triangle"], ["cd", ""], ["pTemplate", "header"], ["pTemplate", "footer"], [1, "checkout-page", "pb-5"], ["label", "Torna al carrello", "icon", "pi pi-arrow-left", 3, "onClick"], [1, "grid", "p-2", 2, "width", "100%", "justify-content", "center"], [1, "row", 2, "justify-content", "center", "width", "inherit"], [1, "col-12", "col-md-7", "col-lg-7", "p-2", 2, "border", "1px solid var(--surface-200)"], [2, "text-align", "center", "margin-bottom", "30px"], [1, "row"], [1, "col-8"], ["type", "radio", "id", "radio1", "name", "optradio", "value", "credit", "checked", "", 1, "form-check-input"], [1, "col-4"], [1, "col-1", 2, "min-width", "50px"], [2, "display", "inline"], ["src", "assets/mastercard.png", "alt", "Responsive image", 1, "img-fluid"], ["src", "assets/visa.png", "alt", "Responsive image", 1, "img-fluid"], ["src", "assets/americanExpress.png", "alt", "Responsive image", 1, "img-fluid"], ["src", "assets/maestro.png", "alt", "Responsive image", 1, "img-fluid"], ["src", "assets/postepay.png", "alt", "Responsive image", 1, "img-fluid"], ["type", "radio", "id", "radio2", "name", "optradio", "value", "rate", "checked", "", 1, "form-check-input"], ["src", "assets/klarna.png", "alt", "Responsive image", 1, "img-fluid"], ["type", "radio", "id", "radio3", "name", "optradio", "value", "paypal", "checked", "", 1, "form-check-input"], ["src", "assets/paypal.png", "alt", "Responsive image", 1, "img-fluid"], [1, "col"], ["type", "radio", "id", "radio4", "name", "optradio", "value", "contanti", "checked", "", 1, "form-check-input"], [1, "col-12", "col-md-5", "col-lg-5"], ["id", "page-mask", 2, "display", "none"], ["id", "exampleModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade", "border", "border-info"], [1, "modal-dialog", "border", "border-info", "border-4", "rounded"], [1, "modal-content"], [1, "modal-header"], [1, "col-auto"], [1, "d-flex", "justify-content-center"], ["id", "loadingSpinner", "role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], ["id", "exampleModalLabel", 1, "modal-title"], ["id", "closeModal", "type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], ["id", "modalBody", 1, "modal-body"], ["id", "success", 1, "text-success", 2, "font-weight", "800", "display", "none"], ["id", "failed", 1, "text-danger", 2, "font-weight", "800", "display", "none"], [1, "modal-footer"], ["id", "closeModalFooter", 1, "text-secondary", 2, "font-size", "smaller", "display", "none"], [3, "isCheckOut"], [1, "checkout-button"], ["label", "Procedi", 3, "onClick"], ["class", "error mt-2", "style", "font-size: 29px; color:red; font-weight: 800;", 4, "ngIf"], ["style", "font-size: 20px; color:red; font-weight: 500;", 4, "ngFor", "ngForOf"], [3, "value"], ["type", "button", "pButton", "", "icon", "pi pi-times", "label", "Annulla", 3, "click"], ["type", "button", "pButton", "", "icon", "pi pi-check", "label", "Conferma", 3, "click"], [1, "error", "mt-2", 2, "font-size", "29px", "color", "red", "font-weight", "800"], [2, "font-size", "20px", "color", "red", "font-weight", "500"]], template: function PaymentOptions_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "p-confirmDialog", 1, 2);
        i0.ɵɵtemplate(3, PaymentOptions_ng_template_3_Template, 2, 0, "ng-template", 3);
        i0.ɵɵtemplate(4, PaymentOptions_ng_template_4_Template, 2, 0, "ng-template", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 5)(6, "div")(7, "p-button", 6);
        i0.ɵɵlistener("onClick", function PaymentOptions_Template_p_button_onClick_7_listener() { return ctx.backToCart(); });
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "h3", 10);
        i0.ɵɵtext(12, "Seleziona un metodo di pagamento");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(13, "hr");
        i0.ɵɵelementStart(14, "div", 11)(15, "div", 12);
        i0.ɵɵelement(16, "input", 13);
        i0.ɵɵtext(17, " CARTE DI CREDITO ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "div", 14)(19, "div", 11)(20, "div", 15)(21, "li", 16);
        i0.ɵɵelement(22, "img", 17);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(23, "div", 15)(24, "li", 16);
        i0.ɵɵelement(25, "img", 18);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(26, "div", 15)(27, "li", 16);
        i0.ɵɵelement(28, "img", 19);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(29, "div", 15)(30, "li", 16);
        i0.ɵɵelement(31, "img", 20);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(32, "div", 15)(33, "li", 16);
        i0.ɵɵelement(34, "img", 21);
        i0.ɵɵelementEnd()()()()();
        i0.ɵɵelement(35, "hr");
        i0.ɵɵelementStart(36, "div", 11)(37, "div", 12);
        i0.ɵɵelement(38, "input", 22);
        i0.ɵɵtext(39, " PAGAMENTO A RATE ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(40, "div", 14)(41, "div", 11)(42, "div", 15)(43, "li", 16);
        i0.ɵɵelement(44, "img", 23);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(45, "div", 15)(46, "li", 16);
        i0.ɵɵelement(47, "img", 17);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(48, "div", 15)(49, "li", 16);
        i0.ɵɵelement(50, "img", 18);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(51, "div", 15)(52, "li", 16);
        i0.ɵɵelement(53, "img", 19);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(54, "div", 15)(55, "li", 16);
        i0.ɵɵelement(56, "img", 20);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(57, "div", 15)(58, "li", 16);
        i0.ɵɵelement(59, "img", 21);
        i0.ɵɵelementEnd()()()()();
        i0.ɵɵelement(60, "hr");
        i0.ɵɵelementStart(61, "div", 11)(62, "div", 12);
        i0.ɵɵelement(63, "input", 24);
        i0.ɵɵtext(64, " PAYPAL ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(65, "div", 14)(66, "div", 11)(67, "div", 15)(68, "li", 16);
        i0.ɵɵelement(69, "img", 25);
        i0.ɵɵelementEnd()()()()();
        i0.ɵɵelement(70, "hr");
        i0.ɵɵelementStart(71, "div", 11)(72, "div", 26);
        i0.ɵɵelement(73, "input", 27);
        i0.ɵɵtext(74, " PAGA IN CONTANTI ALLA CONSEGNA ");
        i0.ɵɵelementEnd()();
        i0.ɵɵelement(75, "hr");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(76, "div", 28);
        i0.ɵɵelement(77, "div", 29);
        i0.ɵɵelementStart(78, "div", 30)(79, "div", 31)(80, "div", 32)(81, "div", 33)(82, "div", 11)(83, "div", 34)(84, "div", 35)(85, "div", 36)(86, "span", 37);
        i0.ɵɵtext(87, "Loading...");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(88, "div", 26)(89, "h5", 38);
        i0.ɵɵtext(90, "We are validating your transaction, please wait");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelement(91, "button", 39);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(92, "div", 40)(93, "div", 41);
        i0.ɵɵtext(94, " Transaction succesfull!");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(95, "div", 42);
        i0.ɵɵtext(96, " Transaction failed!");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(97, "div", 43)(98, "div", 44);
        i0.ɵɵtext(99, " Now you can close this modal");
        i0.ɵɵelementEnd()()()()();
        i0.ɵɵelement(100, "orders-order-summary", 45);
        i0.ɵɵelementStart(101, "div", 46)(102, "p-button", 47);
        i0.ɵɵlistener("onClick", function PaymentOptions_Template_p_button_onClick_102_listener() { return ctx.placeOrder(); });
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(103, PaymentOptions_div_103_Template, 2, 0, "div", 48);
        i0.ɵɵelementStart(104, "ul");
        i0.ɵɵtemplate(105, PaymentOptions_li_105_Template, 2, 1, "li", 49);
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelement(106, "p-messages", 50);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(100);
        i0.ɵɵproperty("isCheckOut", true);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.errorMessage);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.errormessage);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("value", ctx.msgs);
    } }, directives: [i8.ConfirmDialog, i6.PrimeTemplate, i9.ButtonDirective, i9.Button, i10.OrderSummaryComponent, i11.NgIf, i11.NgForOf, i12.Messages], styles: ["#page-mask[_ngcontent-%COMP%]{background:rgba(0,0,0,.5);position:fixed;top:0;right:0;bottom:0;left:0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaymentOptions, [{
        type: Component,
        args: [{ selector: 'payment-options', styles: [`#page-mask {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }`], providers: [KlarnaComponent], template: "<script src=\"https://js.stripe.com/v3/\" defer></script>\n<div class=\"p-2\">\n  <p-confirmDialog #cd  header=\"Confirmation\" icon=\"pi pi-exclamation-triangle\">\n    <ng-template pTemplate=\"header\">\n      <h3>Conferma ordine</h3>\n  </ng-template>\n\n  <ng-template pTemplate=\"footer\">\n    <button type=\"button\" pButton icon=\"pi pi-times\" label=\"Annulla\" (click)=\"cd.reject()\"></button>\n    <button type=\"button\" pButton icon=\"pi pi-check\" label=\"Conferma\" (click)=\"cd.accept()\"></button>\n</ng-template>\n  </p-confirmDialog>\n\n<div class=\"checkout-page pb-5\">\n    <div>\n        <p-button label=\"Torna al carrello\" icon=\"pi pi-arrow-left\" (onClick)=\"backToCart()\"></p-button>\n    </div>\n</div>\n<div class=\"grid p-2\" style=\"width: 100%; justify-content: center;\">\n\n  <div class=\"row\" style=\"justify-content: center; width: inherit; \">\n    <div class=\"col-12 col-md-7 col-lg-7 p-2\" style=\"\n    border: 1px solid var(--surface-200);\">\n    \n      <h3 style=\"text-align: center; margin-bottom: 30px;\">Seleziona un metodo di pagamento</h3>\n      <hr>\n      <div class=\"row\">\n        <div class=\"col-8\">\n          <input type=\"radio\" class=\"form-check-input\" id=\"radio1\" name=\"optradio\" value=\"credit\" checked>\n          CARTE DI CREDITO\n        </div>\n        <div class=\"col-4\">\n          \n          <div class=\"row\">        \n            <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src=\"assets/mastercard.png\"  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n            <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/visa.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n            <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/americanExpress.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n            <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/maestro.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n            <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/postepay.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n          </div>\n    \n        </div>\n      </div>\n    <hr>\n      <div class=\"row\">\n        <div class=\"col-8\">\n          <input type=\"radio\" class=\"form-check-input\" id=\"radio2\" name=\"optradio\" value=\"rate\" checked>\n          PAGAMENTO A RATE\n        </div>\n        <div class=\"col-4\">\n          \n          <div class=\"row\">        \n            <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/klarna.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n            <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src=\"assets/mastercard.png\"  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n            <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/visa.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n            <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/americanExpress.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n            <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/maestro.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n            <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/postepay.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n          </div>\n    \n        </div>\n      </div>\n      <hr>\n      <div class=\"row\">\n        <div class=\"col-8\">\n          <input type=\"radio\" class=\"form-check-input\" id=\"radio3\" name=\"optradio\" value=\"paypal\" checked>\n          PAYPAL\n        </div>\n        <div class=\"col-4\">\n          \n          <div class=\"row\">        \n            <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/paypal.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n          </div>\n    \n        </div>\n      </div>\n      <hr>\n      <div class=\"row\">\n        <div class=\"col\">\n          <input type=\"radio\" class=\"form-check-input\" id=\"radio4\" name=\"optradio\" value=\"contanti\" checked>\n          PAGA IN CONTANTI ALLA CONSEGNA\n        </div>\n      </div>\n     \n      <hr>\n    </div>\n    \n    <div class=\"col-12 col-md-5 col-lg-5\">\n\n    <div id=\"page-mask\" style=\"display: none;\"></div>\n\n      <!-- Modal -->\n      <div class=\"modal fade border border-info\" id=\"exampleModal\" tabindex=\"-1\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog border border-info border-4 rounded\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <div class=\"row\">\n                <div class=\"col-auto \" >\n                  <div class=\"d-flex justify-content-center\">\n                    <div id=\"loadingSpinner\" class=\"spinner-border text-primary\" role=\"status\">\n                      <span class=\"visually-hidden\">Loading...</span>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col\"><h5 class=\"modal-title\" id=\"exampleModalLabel\">We are validating your transaction, please wait</h5></div>\n              </div>\n\n\n              <button id=\"closeModal\" type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n            </div>\n            <div id=\"modalBody\" class=\"modal-body\">\n              <div id=\"success\" class=\"text-success\" style=\"font-weight: 800; display: none;\"> Transaction succesfull!</div>\n              <div id=\"failed\" class=\"text-danger\" style=\"font-weight: 800; display: none;\"> Transaction failed!</div>\n\n            </div>\n            <div class=\"modal-footer\">\n              <div id=\"closeModalFooter\" class=\"text-secondary\" style=\"font-size:smaller; display: none;\"> Now you can close this modal</div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <orders-order-summary [isCheckOut]=\"true\"></orders-order-summary>\n      <div class=\"checkout-button\">\n        <p-button label=\"Procedi\" (onClick)=\"placeOrder()\"></p-button>\n      </div>\n \n\n      <div class=\"error mt-2\" style=\"font-size: 29px; color:red; font-weight: 800;\" *ngIf=\"errorMessage\" >Please fill all the mandatory fields:</div>\n      <ul>\n        <li style=\"font-size: 20px; color:red; font-weight: 500;\"  *ngFor=\"let error of errormessage\">\n            {{error}}\n        </li>\n      </ul>\n\n\n\n    </div>\n\n  </div>\n  </div>\n  <p-messages [value]=\"msgs\"></p-messages>\n</div>\n" }]
    }], function () { return [{ type: i1.Router }, { type: i2.UsersService }, { type: i3.FormBuilder }, { type: i4.CartService }, { type: i5.OrdersService }, { type: i6.MessageService }, { type: i7.CheckoutService }, { type: i2.KlarnaComponent }, { type: i2.Cart }, { type: i6.ConfirmationService }, { type: i6.PrimeNGConfig }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1vcHRpb25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvb3JkZXJzL3NyYy9saWIvcGFnZXMvY2hvb3NlLXBheW1lbnQtb3B0aW9uL3BheW1lbnQtb3B0aW9ucy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL29yZGVycy9zcmMvbGliL3BhZ2VzL2Nob29zZS1wYXltZW50LW9wdGlvbi9wYXltZW50LW9wdGlvbnMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsTUFBTTtBQUNOLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBYSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFHLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQTtBQUV2RCxPQUFPLEVBQVcsY0FBYyxFQUFFLGFBQWEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNyRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFMUQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDN0MsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXpDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLGFBQWEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0lDZjFDLDBCQUFJO0lBQUEsK0JBQWU7SUFBQSxpQkFBSzs7OztJQUkxQixrQ0FBdUY7SUFBdEIsbUxBQVMsWUFBVyxJQUFDO0lBQUMsaUJBQVM7SUFDaEcsa0NBQXdGO0lBQXRCLG1MQUFTLFlBQVcsSUFBQztJQUFDLGlCQUFTOzs7SUFzSC9GLCtCQUFvRztJQUFBLHFEQUFxQztJQUFBLGlCQUFNOzs7SUFFN0ksOEJBQThGO0lBQzFGLFlBQ0o7SUFBQSxpQkFBSzs7O0lBREQsZUFDSjtJQURJLHlDQUNKOztBRDlGUixNQUFNLE9BQU8sY0FBYztJQU16QixZQUFvQixNQUFjLEVBQ3hCLFlBQTBCLEVBQzFCLFdBQXdCLEVBQ3hCLFdBQXdCLEVBQ3hCLGFBQTRCLEVBQzVCLGNBQThCLEVBQzlCLFFBQXlCLEVBQ3pCLEVBQW9CLEVBQ3BCLElBQVUsRUFDVixtQkFBd0MsRUFDeEMsYUFBNEI7UUFWbEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUN4QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFDekIsT0FBRSxHQUFGLEVBQUUsQ0FBa0I7UUFDcEIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFadEMsU0FBSSxHQUFjLEVBQUUsQ0FBQztRQW1CVCxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixlQUFVLEdBQWdCLEVBQUUsQ0FBQztRQUU3QixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2QsaUJBQVksR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUMzQyxtQkFBYyxHQUFRLElBQUksQ0FBQztRQUMzQixZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLFlBQU8sR0FBVyxLQUFLLENBQUM7UUFadkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDbkMsQ0FBQztJQWdCYixRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUMzQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBVSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBUSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBVSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBUSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN6QyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksZUFBZSxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUVyQixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBSTFELENBQUM7SUFDRCxRQUFRLENBQUUsS0FBSztRQUNiLElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEMsSUFBSSxNQUFNLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM3RCxJQUFJLFdBQVcsR0FBRyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBUyxDQUFDO1lBQzdFLE9BQU8sR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUFBLENBQUM7SUFFUSxhQUFhO1FBQ25CLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUM5QyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztZQUMvQixLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwRCxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztZQUNoQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztZQUMvQixPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztZQUNsQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztZQUM5QixTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztZQUNwQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztTQUNsQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBR08saUJBQWlCO1FBQ3ZCOzs7Ozs7Ozs7Ozs7Ozs7OztZQWlCSTtJQUNOLENBQUM7SUFFTyxhQUFhO0lBRXJCLENBQUM7SUFFTyxhQUFhO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBR0QsVUFBVTtRQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsS0FBSyxDQUFDLFVBQVU7UUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztRQUUxRCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDO1FBRXhELFFBQU8sSUFBSSxDQUFDLG9CQUFvQixFQUFFLEVBQUM7WUFDakMsS0FBSyxRQUFRO2dCQUNYLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO2dCQUM1QyxNQUFNO1lBQ1IsS0FBSyxNQUFNO2dCQUNWLG9DQUFvQztnQkFFbkMsTUFBTSxHQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztnQkFFdkIsSUFBSSxLQUFLLEdBQVUsSUFBSSxLQUFLLENBQUM7Z0JBQzdCLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQzVCLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ2xDLEtBQUssQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNoQyxLQUFLLENBQUMsRUFBRSxHQUFHLFdBQVcsQ0FBQztnQkFDdkIsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDOUIsS0FBSyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUM1QyxLQUFLLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7Z0JBQ3JELEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7Z0JBQ2pDLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQzlCLEtBQUssQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDO2dCQUNoQixLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUM5QixLQUFLLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQztnQkFDL0IsS0FBSyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7Z0JBRXhCLElBQUksUUFBUSxHQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDdEQsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUU5QyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBRXJELE9BQU8sQ0FBQyxHQUFHLENBQUMsdURBQXVELEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFNUosTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7Z0JBQzdDLE1BQU07WUFFTixLQUFLLFVBQVU7Z0JBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDeEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNmLE1BQU07U0FDWDtRQUVELElBQUcsSUFBSSxDQUFDLG9CQUFvQixFQUFFLEVBQUM7WUFDN0IsOENBQThDO1lBQ2pELGtEQUFrRDtZQUUvQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztTQUMzQjthQUFJO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1NBQzFCO0lBRUgsQ0FBQztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDO1lBQy9CLE9BQU8sRUFBRSw0RkFBNEYsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyw4RUFBOEU7WUFDeE0sTUFBTSxFQUFFLEdBQUcsRUFBRTtnQkFDVCxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBQyxRQUFRLEVBQUMsTUFBTSxFQUFFLE9BQU8sRUFBQyxXQUFXLEVBQUUsTUFBTSxFQUFDLDZGQUE2RixFQUFDLENBQUMsQ0FBQztnQkFHM0osTUFBTSxHQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztnQkFFdkIsSUFBSSxLQUFLLEdBQVUsSUFBSSxLQUFLLENBQUM7Z0JBQzdCLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQzVCLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ2xDLEtBQUssQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNoQyxLQUFLLENBQUMsRUFBRSxHQUFHLFdBQVcsQ0FBQztnQkFDdkIsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDOUIsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFDaEMsS0FBSyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUM1QyxLQUFLLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7Z0JBQ3JELEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7Z0JBRWpDLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQzlCLEtBQUssQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDO2dCQUNoQixLQUFLLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFDeEIsS0FBSyxDQUFDLGFBQWEsR0FBRyxVQUFVLENBQUM7Z0JBQ2pDLElBQUksUUFBUSxHQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDdEQsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUc5QyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBRXJELElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO29CQU03RixPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDckUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUM7b0JBQzdCLFFBQVEsQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxTQUFTLEdBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztvQkFFN0YsNEJBQTRCO29CQUU1QixZQUFZLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUN0QyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUVwQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDOUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUM7d0JBQ3RCLFFBQVEsRUFBRSxTQUFTO3dCQUNuQixPQUFPLEVBQUUsUUFBUTt3QkFDakIsTUFBTSxFQUFFLHdCQUF3QjtxQkFDakMsQ0FBQyxDQUFDO29CQUdILElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO3dCQUUvRSxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQzs0QkFDdEIsUUFBUSxFQUFFLFNBQVM7NEJBQ25CLE9BQU8sRUFBRSxRQUFROzRCQUNqQixNQUFNLEVBQUUsY0FBYzt5QkFDdkIsQ0FBQyxDQUFDO29CQUVMLENBQUMsQ0FBQyxDQUFDO2dCQUVQLENBQUMsQ0FBQyxDQUFBO1lBRUosQ0FBQztZQUNELE1BQU0sRUFBRSxHQUFHLEVBQUU7Z0JBQ1QsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUMsUUFBUSxFQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQyxtQ0FBbUMsRUFBQyxDQUFDLENBQUM7WUFDcEcsQ0FBQztTQUNKLENBQUMsQ0FBQztJQUNILENBQUM7SUFFRCxvQkFBb0I7UUFHbEIsT0FBMkIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxnQ0FBZ0MsQ0FBRSxDQUFDLEtBQUssQ0FBQztJQUU3RixDQUFDO0lBRUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDO0lBQ3pDLENBQUM7SUFFRCxXQUFXLENBQUMsTUFBYztRQUV4QixRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBRzdELE1BQU0sY0FBYyxHQUFTLE1BQU8sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDO1lBQzVELEdBQUcsRUFBRSw2R0FBNkc7WUFDbEgsTUFBTSxFQUFFLE1BQU07WUFDZCxLQUFLLEVBQUUsVUFBVSxXQUFnQjtnQkFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDekIsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzdCLENBQUM7U0FDRixDQUFDLENBQUM7UUFFSCxNQUFNLGFBQWEsR0FBRyxDQUFDLFdBQWdCLEVBQUUsRUFBRTtZQUN6QyxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBdUIsQ0FBQTtZQUNwRSxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM1QixLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFFNUIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO2dCQUNuRSxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDL0IsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO2dCQUM3QixRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1lBQzlELENBQUMsQ0FBQyxDQUFDO1lBRUwsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQVMsRUFBRSxFQUFFO2dCQUNyRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNsQixRQUFRLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBQyxPQUFPLENBQUM7Z0JBQ2xFLFFBQVEsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFDLE1BQU0sQ0FBQztnQkFHL0QsTUFBTSxHQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztnQkFFdkIsSUFBSSxLQUFLLEdBQVUsSUFBSSxLQUFLLENBQUM7Z0JBQzdCLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQzVCLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ2xDLEtBQUssQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNoQyxLQUFLLENBQUMsRUFBRSxHQUFHLFdBQVcsQ0FBQztnQkFDdkIsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDOUIsS0FBSyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUM1QyxLQUFLLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7Z0JBQ3JELEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7Z0JBRWpDLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQzlCLEtBQUssQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDO2dCQUNoQixLQUFLLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDdkIsS0FBSyxDQUFDLGFBQWEsR0FBRyxrQkFBa0IsQ0FBQztnQkFDekMsSUFBSSxRQUFRLEdBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUN0RCxLQUFLLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBRzlDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFRckQsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtvQkFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7b0JBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO29CQUNyQixJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTt3QkFFN0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ3JFLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDO3dCQUM3QixRQUFRLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDLENBQUMsU0FBUyxHQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7d0JBRTdGLDRCQUE0Qjt3QkFFNUIsWUFBWSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQzt3QkFDdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQzt3QkFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzt3QkFFcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQzlDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDOzRCQUN0QixRQUFRLEVBQUUsU0FBUzs0QkFDbkIsT0FBTyxFQUFFLFFBQVE7NEJBQ2pCLE1BQU0sRUFBRSx3QkFBd0I7eUJBQ2pDLENBQUMsQ0FBQztvQkFFUCxDQUFDLENBQUMsQ0FBQTtvQkFHQSxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUMsT0FBTyxDQUFDO2lCQUUxRDtxQkFDSTtvQkFDSCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztvQkFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7b0JBQ3JCLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBQyxPQUFPLENBQUM7aUJBQ3pEO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUM7UUFFRixjQUFjLENBQUMsSUFBSSxDQUFDO1lBQ2xCLElBQUksRUFBRSxlQUFlO1lBQ3JCLFdBQVcsRUFBRSx1Q0FBdUM7WUFDcEQsTUFBTSxFQUFFLE1BQU0sR0FBRyxHQUFHO1NBQ3JCLENBQUMsQ0FBQztJQUVMLENBQUM7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxFQUFFO1lBQ3BELE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3ZELE1BQU0sQ0FBQyxFQUFFLEdBQUcsZUFBZSxDQUFDO1lBQzVCLE1BQU0sQ0FBQyxJQUFJLEdBQUcsaUJBQWlCLENBQUM7WUFDaEMsTUFBTSxDQUFDLEdBQUcsR0FBRyx5Q0FBeUMsQ0FBQztZQUN2RCxNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLGNBQWMsR0FBUyxNQUFPLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQztvQkFDM0QsR0FBRyxFQUFFLDZHQUE2RztvQkFDbEgsTUFBTSxFQUFFLE1BQU07b0JBQ2QsS0FBSyxFQUFFLFVBQVUsV0FBZ0I7d0JBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQzNCLENBQUM7aUJBQ0YsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDO1lBRUYsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzFDO0lBQ0gsQ0FBQzs7NEVBcllVLGNBQWM7aUVBQWQsY0FBYyxxRUFIZCxDQUFDLGVBQWUsQ0FBQztRQ2pDOUIsOEJBQWlCLDRCQUFBO1FBRWIsK0VBRVk7UUFFZCwrRUFHWTtRQUNaLGlCQUFrQjtRQUVwQiw4QkFBZ0MsVUFBQSxrQkFBQTtRQUVvQyxpR0FBVyxnQkFBWSxJQUFDO1FBQUMsaUJBQVcsRUFBQSxFQUFBO1FBR3hHLDhCQUFvRSxhQUFBLGNBQUEsY0FBQTtRQU1ULGlEQUFnQztRQUFBLGlCQUFLO1FBQzFGLHNCQUFJO1FBQ0osZ0NBQWlCLGVBQUE7UUFFYiw2QkFBZ0c7UUFDaEcsbUNBQ0Y7UUFBQSxpQkFBTTtRQUNOLGdDQUFtQixlQUFBLGVBQUEsY0FBQTtRQUcyRCwyQkFBMkU7UUFBQSxpQkFBSyxFQUFBO1FBQzFKLGdDQUE2QyxjQUFBO1FBQTZCLDJCQUFxRTtRQUFBLGlCQUFLLEVBQUE7UUFDcEosZ0NBQTZDLGNBQUE7UUFBNkIsMkJBQWdGO1FBQUEsaUJBQUssRUFBQTtRQUMvSixnQ0FBNkMsY0FBQTtRQUE2QiwyQkFBd0U7UUFBQSxpQkFBSyxFQUFBO1FBQ3ZKLGdDQUE2QyxjQUFBO1FBQTZCLDJCQUF5RTtRQUFBLGlCQUFLLEVBQUEsRUFBQSxFQUFBLEVBQUE7UUFLaEssc0JBQUk7UUFDRixnQ0FBaUIsZUFBQTtRQUViLDZCQUE4RjtRQUM5RixtQ0FDRjtRQUFBLGlCQUFNO1FBQ04sZ0NBQW1CLGVBQUEsZUFBQSxjQUFBO1FBRzJELDJCQUF1RTtRQUFBLGlCQUFLLEVBQUE7UUFDdEosZ0NBQTZDLGNBQUE7UUFBNkIsMkJBQTJFO1FBQUEsaUJBQUssRUFBQTtRQUMxSixnQ0FBNkMsY0FBQTtRQUE2QiwyQkFBcUU7UUFBQSxpQkFBSyxFQUFBO1FBQ3BKLGdDQUE2QyxjQUFBO1FBQTZCLDJCQUFnRjtRQUFBLGlCQUFLLEVBQUE7UUFDL0osZ0NBQTZDLGNBQUE7UUFBNkIsMkJBQXdFO1FBQUEsaUJBQUssRUFBQTtRQUN2SixnQ0FBNkMsY0FBQTtRQUE2QiwyQkFBeUU7UUFBQSxpQkFBSyxFQUFBLEVBQUEsRUFBQSxFQUFBO1FBSzlKLHNCQUFJO1FBQ0osZ0NBQWlCLGVBQUE7UUFFYiw2QkFBZ0c7UUFDaEcseUJBQ0Y7UUFBQSxpQkFBTTtRQUNOLGdDQUFtQixlQUFBLGVBQUEsY0FBQTtRQUcyRCwyQkFBdUU7UUFBQSxpQkFBSyxFQUFBLEVBQUEsRUFBQSxFQUFBO1FBSzVKLHNCQUFJO1FBQ0osZ0NBQWlCLGVBQUE7UUFFYiw2QkFBa0c7UUFDbEcsaURBQ0Y7UUFBQSxpQkFBTSxFQUFBO1FBR1Isc0JBQUk7UUFDTixpQkFBTTtRQUVOLGdDQUFzQztRQUV0QywyQkFBaUQ7UUFHL0MsZ0NBQWtJLGVBQUEsZUFBQSxlQUFBLGVBQUEsZUFBQSxlQUFBLGVBQUEsZ0JBQUE7UUFRcEYsMkJBQVU7UUFBQSxpQkFBTyxFQUFBLEVBQUEsRUFBQTtRQUlyRCxnQ0FBaUIsY0FBQTtRQUErQyxnRUFBK0M7UUFBQSxpQkFBSyxFQUFBLEVBQUE7UUFJdEgsOEJBQTRHO1FBQzlHLGlCQUFNO1FBQ04sZ0NBQXVDLGVBQUE7UUFDNEMseUNBQXVCO1FBQUEsaUJBQU07UUFDOUcsZ0NBQThFO1FBQUMscUNBQW1CO1FBQUEsaUJBQU0sRUFBQTtRQUcxRyxnQ0FBMEIsZUFBQTtRQUNxRSw4Q0FBNEI7UUFBQSxpQkFBTSxFQUFBLEVBQUEsRUFBQSxFQUFBO1FBS3ZJLDZDQUFpRTtRQUNqRSxpQ0FBNkIscUJBQUE7UUFDRCxtR0FBVyxnQkFBWSxJQUFDO1FBQUMsaUJBQVcsRUFBQTtRQUloRSxvRUFBK0k7UUFDL0ksNEJBQUk7UUFDRixrRUFFSztRQUNQLGlCQUFLLEVBQUEsRUFBQSxFQUFBO1FBUVQsbUNBQXdDO1FBQzFDLGlCQUFNOztRQXBCc0IsaUJBQW1CO1FBQW5CLGlDQUFtQjtRQU1zQyxlQUFrQjtRQUFsQix1Q0FBa0I7UUFFbEIsZUFBZTtRQUFmLDBDQUFlO1FBV3RGLGVBQWM7UUFBZCxnQ0FBYzs7dUZEdkdmLGNBQWM7Y0FkMUIsU0FBUzsyQkFDRSxpQkFBaUIsVUFFbkIsQ0FBQzs7Ozs7OztJQU9QLENBQUMsYUFDUSxDQUFDLGVBQWUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXIyMyB9IGZyb20gJy4vLi4vLi4vbW9kZWxzL3VzZXIyMyc7XG4vKiogKi9cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7ICBVc2Vyc1NlcnZpY2UgfSBmcm9tICdAZXNob3AtZnJvbnRlbmQvdXNlcnMnO1xuaW1wb3J0IHsgS2xhcm5hQ29tcG9uZW50IH0gZnJvbSAnQGVzaG9wLWZyb250ZW5kL3VzZXJzJ1xuXG5pbXBvcnQgeyBNZXNzYWdlLCBNZXNzYWdlU2VydmljZSwgUHJpbWVOR0NvbmZpZyB9IGZyb20gJ3ByaW1lbmcvYXBpJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9yZGVyc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vcmRlcnMuc2VydmljZSc7XG5pbXBvcnQgeyBDYXJ0U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NhcnQuc2VydmljZSc7XG5pbXBvcnQgeyBPcmRlckl0ZW0gfSBmcm9tICcuLi8uLi9tb2RlbHMvb3JkZXItaXRlbSc7XG5pbXBvcnQgeyBPcmRlciB9IGZyb20gJy4uLy4uL21vZGVscy9vcmRlcic7XG5pbXBvcnQgeyBDaGVja291dFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jaGVja291dC5zZXJ2aWNlJztcbmltcG9ydCB7IENhcnQgfSBmcm9tICdAZXNob3AtZnJvbnRlbmQvdXNlcnMnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL21vZGVscy91c2VyJztcbmltcG9ydCB7Q29uZmlybURpYWxvZ01vZHVsZX0gZnJvbSAncHJpbWVuZy9jb25maXJtZGlhbG9nJztcbmltcG9ydCB7Q29uZmlybWF0aW9uU2VydmljZX0gZnJvbSAncHJpbWVuZy9hcGknO1xuXG5pbXBvcnQge01lc3NhZ2VzTW9kdWxlfSBmcm9tICdwcmltZW5nL21lc3NhZ2VzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGF5bWVudC1vcHRpb25zJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BheW1lbnQtb3B0aW9ucy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogW2AjcGFnZS1tYXNrIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgfWBdLFxuICBwcm92aWRlcnM6IFtLbGFybmFDb21wb25lbnRdXG5cbn0pXG5leHBvcnQgY2xhc3MgUGF5bWVudE9wdGlvbnMgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGVycm9yTWVzc2FnZTogYm9vbGVhbjtcbiAgZXJyb3JtZXNzYWdlOiBTdHJpbmdbXTtcbiAgbXNnczogTWVzc2FnZVtdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHVzZXJzU2VydmljZTogVXNlcnNTZXJ2aWNlLFxuICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuICAgIHByaXZhdGUgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgb3JkZXJzU2VydmljZTogT3JkZXJzU2VydmljZSxcbiAgICBwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSxcbiAgICBwcml2YXRlIGNoZWNrb3V0OiBDaGVja291dFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBrYyA6IEtsYXJuYUNvbXBvbmVudCxcbiAgICBwcml2YXRlIGNhcnQ6IENhcnQsXG4gICAgcHJpdmF0ZSBjb25maXJtYXRpb25TZXJ2aWNlOiBDb25maXJtYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgcHJpbWVuZ0NvbmZpZzogUHJpbWVOR0NvbmZpZ1xuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcjtcbiAgICAgICAgICAgICAgICB0aGlzLnByaW1lbmdDb25maWcucmlwcGxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGNoZWNrb3V0Rm9ybUdyb3VwOiBGb3JtR3JvdXA7XG4gICAgICAgICAgICAgIGlzU3VibWl0dGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgIG9yZGVySXRlbXM6IE9yZGVySXRlbVtdID0gW107XG4gICAgICAgICAgICAgIHVzZXJJZDogc3RyaW5nO1xuICAgICAgICAgICAgICBjb3VudHJpZXMgPSBbXTtcbiAgICAgICAgICAgICAgIHVuc3Vic2NyaWJlJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcbiAgICAgICAgICAgICAgIHBheW1lbnRIYW5kbGVyOiBhbnkgPSBudWxsO1xuICAgICAgICAgICAgICAgc3VjY2VzczogYm9vbGVhbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgZmFpbHVyZTpib29sZWFuID0gZmFsc2U7XG4gICAgICAgICAgICAgICB1c2VyOiBVc2VyO1xuICAgICAgICAgICAgICAgZGF0YTtcblxuXG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5faW5pdFVzZXJGb3JtKCk7XG4gICAgdGhpcy5fYXV0b0ZpbGxVc2VyRGF0YSgpO1xuICAgIHRoaXMuX2dldENvdW50cmllcygpO1xuICAgIHRoaXMuX2dldENhcnRJdGVtcygpO1xuICAgIHRoaXMuaW52b2tlU3RyaXBlKCk7XG4gICAgdGhpcy5kYXRhID0gIHRoaXMucGFyc2VKd3Qoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImF1dGhUb2tlblwiKSk7XG4gICAgdGhpcy51c2VyLmNvdW50cnk9ICAgICAgdGhpcy5kYXRhLmNvdW50cnk7XG4gICAgdGhpcy51c2VyLmFkZHJlc3MxPSAgICAgdGhpcy5kYXRhWydhZGRyZXNzMSddO1xuICAgIHRoaXMudXNlci5hZGRyZXNzMj0gICAgIHRoaXMuZGF0YS5hZGRyZXNzMjtcbiAgICB0aGlzLnVzZXIuZGF0ZT0gICAgICAgICB0aGlzLmRhdGEuZGF0ZU9mQmlydGg7XG4gICAgdGhpcy51c2VyLmVtYWlsPSAgICAgICAgdGhpcy5kYXRhLmVtYWlsO1xuICAgIHRoaXMudXNlci5waG9uZT0gICAgICAgIHRoaXMuZGF0YS5waG9uZTtcbiAgICB0aGlzLnVzZXIucG9zdGFsQ29kZT0gICB0aGlzLmRhdGEucG9zdGFsQ29kZTtcbiAgICB0aGlzLnVzZXIuc2V4PSAgICAgICAgICB0aGlzLmRhdGEuZ2VuZGVyO1xuICAgIHRoaXMudXNlci5mTmFtZSA9ICAgICAgIHRoaXMuZGF0YS5mTmFtZTtcbiAgICB0aGlzLnVzZXIubE5hbWUgPSAgICAgICB0aGlzLmRhdGEubE5hbWU7XG4gICAgdGhpcy51c2VyLnJlZ2lvbiA9ICAgICAgdGhpcy5kYXRhLnJlZ2lvbjtcbiAgICB0aGlzLnVzZXIuY2l0eSA9ICAgICAgICB0aGlzLmRhdGEuY2l0eTtcbiAgICB0aGlzLnVzZXIuc3RhdGUgPSAgICAgICB0aGlzLmRhdGEuc3RhdGU7XG4gICAgdGhpcy51c2VyLnByZWZpeCA9ICAgICAgdGhpcy5kYXRhLnByZWZpeDtcbiAgICB0aGlzLmtjID0gbmV3IEtsYXJuYUNvbXBvbmVudCgpO1xuICAgIHRoaXMua2MucHJpbnRIZWxsbygpO1xuXG4gICAgY29uc29sZS5sb2coXCJ0aGlzIHVzZXIgPSBcIiArIEpTT04uc3RyaW5naWZ5KHRoaXMudXNlcikpO1xuICBcblxuXG4gIH1cbiAgcGFyc2VKd3QgKHRva2VuKSB7XG4gICAgdmFyIGJhc2U2NFVybCA9IHRva2VuLnNwbGl0KCcuJylbMV07XG4gICAgdmFyIGJhc2U2NCA9IGJhc2U2NFVybC5yZXBsYWNlKC8tL2csICcrJykucmVwbGFjZSgvXy9nLCAnLycpO1xuICAgIHZhciBqc29uUGF5bG9hZCA9IGRlY29kZVVSSUNvbXBvbmVudCh3aW5kb3cuYXRvYihiYXNlNjQpLnNwbGl0KCcnKS5tYXAoZnVuY3Rpb24oYykge1xuICAgICAgICByZXR1cm4gJyUnICsgKCcwMCcgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpKS5zbGljZSgtMik7XG4gICAgfSkuam9pbignJykpO1xuXG4gICAgcmV0dXJuIEpTT04ucGFyc2UoanNvblBheWxvYWQpO1xufTtcblxuICBwcml2YXRlIF9pbml0VXNlckZvcm0oKSB7XG4gICAgdGhpcy5jaGVja291dEZvcm1Hcm91cCA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgbmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIGVtYWlsOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLmVtYWlsXV0sXG4gICAgICBwaG9uZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIGNpdHk6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBjb3VudHJ5OiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgemlwOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgYXBhcnRtZW50OiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgc3RyZWV0OiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgfSk7XG4gIH1cblxuXG4gIHByaXZhdGUgX2F1dG9GaWxsVXNlckRhdGEoKSB7XG4gICAgLypcbiAgICB0aGlzLnVzZXJzU2VydmljZVxuICAgICAgLm9ic2VydmVDdXJyZW50VXNlcigpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKVxuICAgICAgLnN1YnNjcmliZSgodXNlcikgPT4ge1xuICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgIHRoaXMudXNlcklkID0gdXNlci5pZDtcbiAgICAgICAgICB0aGlzLmNoZWNrb3V0Rm9ybS5uYW1lLnNldFZhbHVlKHVzZXIubmFtZSk7XG4gICAgICAgICAgdGhpcy5jaGVja291dEZvcm0uZW1haWwuc2V0VmFsdWUodXNlci5lbWFpbCk7XG4gICAgICAgICAgdGhpcy5jaGVja291dEZvcm0ucGhvbmUuc2V0VmFsdWUodXNlci5waG9uZSk7XG4gICAgICAgICAgdGhpcy5jaGVja291dEZvcm0uY2l0eS5zZXRWYWx1ZSh1c2VyLmNpdHkpO1xuICAgICAgICAgIHRoaXMuY2hlY2tvdXRGb3JtLnN0cmVldC5zZXRWYWx1ZSh1c2VyLnN0cmVldCk7XG4gICAgICAgICAgdGhpcy5jaGVja291dEZvcm0uY291bnRyeS5zZXRWYWx1ZSh1c2VyLmNvdW50cnkpO1xuICAgICAgICAgIHRoaXMuY2hlY2tvdXRGb3JtLnppcC5zZXRWYWx1ZSh1c2VyLnppcCk7XG4gICAgICAgICAgdGhpcy5jaGVja291dEZvcm0uYXBhcnRtZW50LnNldFZhbHVlKHVzZXIuYXBhcnRtZW50KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAqL1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0Q2FydEl0ZW1zKCl7XG5cbiAgfVxuXG4gIHByaXZhdGUgX2dldENvdW50cmllcygpe1xuICAgIHRoaXMuY291bnRyaWVzID0gdGhpcy51c2Vyc1NlcnZpY2UuZ2V0Q291bnRyaWVzKCk7XG4gICAgY29uc29sZS5sb2codGhpcy5jb3VudHJpZXMpO1xuICB9XG5cblxuICBiYWNrVG9DYXJ0KCl7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvY2FydCddKTtcbiAgfVxuXG4gIGFzeW5jIHBsYWNlT3JkZXIoKSB7XG4gICAgY29uc29sZS5sb2coXCJ0b3RhbCBwcmljZSA9IFwiICsgdGhpcy5jYXJ0LmdldFRvdGFsUHJpY2UoKSk7XG5cbiAgICBjb25zb2xlLmxvZyhcIm9wemlvbmUgPSBcIiArIHRoaXMuY2hlY2tTZWxlY3RlZE9wdGlvbnMoKSk7XG5cbiAgICBzd2l0Y2godGhpcy5jaGVja1NlbGVjdGVkT3B0aW9ucygpKXtcbiAgICAgIGNhc2UgXCJjcmVkaXRcIiA6XG4gICAgICAgIHRoaXMubWFrZVBheW1lbnQodGhpcy5jYXJ0LmdldFRvdGFsUHJpY2UoKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInJhdGVcIiA6XG4gICAgICAgLy8gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJvcmRlclwiKTtcblxuICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICAgIGxldCBvcmRlcjogT3JkZXIgPSBuZXcgT3JkZXI7XG4gICAgICAgIG9yZGVyLmNpdHkgPSB0aGlzLnVzZXIuY2l0eTtcbiAgICAgICAgb3JkZXIuY291bnRyeSA9IHRoaXMudXNlci5jb3VudHJ5O1xuICAgICAgICBvcmRlci5kYXRlT3JkZXJlZCA9IFN0cmluZyhub3cpO1xuICAgICAgICBvcmRlci5pZCA9ICcxMjMxMjMxMjMnO1xuICAgICAgICBvcmRlci5waG9uZSA9IHRoaXMudXNlci5waG9uZTtcbiAgICAgICAgb3JkZXIuc2hpcHBpbmdBZGRyZXNzMSA9IHRoaXMudXNlci5hZGRyZXNzMTtcbiAgICAgICAgb3JkZXIudG90YWxQcmljZSA9IFN0cmluZyh0aGlzLmNhcnQuZ2V0VG90YWxQcmljZSgpKTtcbiAgICAgICAgb3JkZXIuemlwID0gdGhpcy51c2VyLnBvc3RhbENvZGU7XG4gICAgICAgIG9yZGVyLnVzZXIgPSB0aGlzLmRhdGEudXNlcklkO1xuICAgICAgICBvcmRlci5pZCA9IG51bGw7XG4gICAgICAgIG9yZGVyLmVtYWlsID0gdGhpcy51c2VyLmVtYWlsO1xuICAgICAgICBvcmRlci5wYXltZW50T3B0aW9uID0gXCJrbGFybmFcIjtcbiAgICAgICAgb3JkZXIuY29uZmlybWVkID0gZmFsc2U7XG4gICAgICAgIFxuICAgICAgICBsZXQgdmFyaWFudHMgPSAgdGhpcy5jYXJ0LmdldEFsbFZhcmlhbnRzKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidmFyaWFudHMgPSBcIiArIEpTT04uc3RyaW5naWZ5KHZhcmlhbnRzKSk7XG4gICAgICAgIG9yZGVyLm9yZGVySXRlbXMgPSB0aGlzLmNhcnQuZ2V0QWxsVmFyaWFudHMoKTtcblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm9yZGVyXCIsIEpTT04uc3RyaW5naWZ5KG9yZGVyKSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJwcmltYSBkaSBwYWdhcmUgY29uIGtsYXJuYSBzdG8gdXNhbmRvIHF1ZXN0byBvcmRpbmU6IFwiICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJvcmRlclwiKSArIFwiICBcIiArIEpTT04uc3RyaW5naWZ5KGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwib3JkZXJcIikpKTtcblxuICAgICAgICBhd2FpdCB0aGlzLmtjLnBheSh0aGlzLmNhcnQuZ2V0VG90YWxQcmljZSgpKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcImNvbnRhbnRpXCIgOlxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29udGFudGlcIik7XG4gICAgICAgICAgdGhpcy5jb25maXJtKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYodGhpcy5jaGVja1NlbGVjdGVkT3B0aW9ucygpKXtcbiAgICAgIC8vdGhpcy5tYWtlUGF5bWVudCh0aGlzLmNhcnQuZ2V0VG90YWxQcmljZSgpKTtcbiAgIC8vICAgYXdhaXQgdGhpcy5rYy5wYXkodGhpcy5jYXJ0LmdldFRvdGFsUHJpY2UoKSk7XG4gICAgXG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IGZhbHNlO1xuICAgIH1lbHNle1xuICAgICAgY29uc29sZS5sb2coXCJlcnJvciBpbiB0aGUgc2hpcHBpbmcgYWRkcmVzc1wiKTtcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gdHJ1ZTtcbiAgICB9XG5cbiAgfVxuXG4gIGNvbmZpcm0oKSA6IHZvaWR7XG4gICAgdGhpcy5jb25maXJtYXRpb25TZXJ2aWNlLmNvbmZpcm0oe1xuICAgICAgbWVzc2FnZTogJ0NsaWNjYW5kbyBzdSBjb25mZXJtYSB0aSBpbXBlZ25pIGEgcGFnYXJlIGxcXCdvcmRpbmUuIDxicj4gPGI+UmljZXZlcmFpIHVuIHNtcyBhbGxcXCdudW1lcm8gJyArIHRoaXMudXNlci5waG9uZSArICc8YnI+UGVyIGNvbmZlcm1hcmUgbFxcJ29yZGluZSBkb3ZyYWkgcmlzcG9uZGVyZSBhbGxcXCdzbXMgaW52aWFuZG8gXFwnU0lcXCcgPC9iPicsXG4gICAgICBhY2NlcHQ6ICgpID0+IHtcbiAgICAgICAgICB0aGlzLm1zZ3MgPSBbe3NldmVyaXR5OidpbmZvJywgc3VtbWFyeTonQ29uZmlybWVkJywgZGV0YWlsOidSaWNvcmRhdGkgY2hlIHBlciBjb25mZXJtYXJlIGxcXCdvcmRpbmUgZG92cmFpIHJpc3BvbmRlcmUgaW52aWFuZG8gXFwnU0lcXCcgYWxsXFwnc21zIHJpY2V2dXRvISd9XTtcblxuXG4gICAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcblxuICAgICAgICAgIGxldCBvcmRlcjogT3JkZXIgPSBuZXcgT3JkZXI7XG4gICAgICAgICAgb3JkZXIuY2l0eSA9IHRoaXMudXNlci5jaXR5O1xuICAgICAgICAgIG9yZGVyLmNvdW50cnkgPSB0aGlzLnVzZXIuY291bnRyeTtcbiAgICAgICAgICBvcmRlci5kYXRlT3JkZXJlZCA9IFN0cmluZyhub3cpO1xuICAgICAgICAgIG9yZGVyLmlkID0gJzEyMzEyMzEyMyc7XG4gICAgICAgICAgb3JkZXIucGhvbmUgPSB0aGlzLnVzZXIucGhvbmU7XG4gICAgICAgICAgb3JkZXIucHJlZml4ID0gdGhpcy51c2VyLnByZWZpeDtcbiAgICAgICAgICBvcmRlci5zaGlwcGluZ0FkZHJlc3MxID0gdGhpcy51c2VyLmFkZHJlc3MxO1xuICAgICAgICAgIG9yZGVyLnRvdGFsUHJpY2UgPSBTdHJpbmcodGhpcy5jYXJ0LmdldFRvdGFsUHJpY2UoKSk7XG4gICAgICAgICAgb3JkZXIuemlwID0gdGhpcy51c2VyLnBvc3RhbENvZGU7XG4gIFxuICAgICAgICAgIG9yZGVyLnVzZXIgPSB0aGlzLmRhdGEudXNlcklkO1xuICAgICAgICAgIG9yZGVyLmlkID0gbnVsbDtcbiAgICAgICAgICBvcmRlci5jb25maXJtZWQgPSBmYWxzZTtcbiAgICAgICAgICBvcmRlci5wYXltZW50T3B0aW9uID0gXCJDb250YW50aVwiO1xuICAgICAgICAgIGxldCB2YXJpYW50cyA9ICB0aGlzLmNhcnQuZ2V0QWxsVmFyaWFudHMoKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInZhcmlhbnRzID0gXCIgKyBKU09OLnN0cmluZ2lmeSh2YXJpYW50cykpO1xuICAgICAgICAgIG9yZGVyLm9yZGVySXRlbXMgPSB0aGlzLmNhcnQuZ2V0QWxsVmFyaWFudHMoKTtcbiAgXG4gIFxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwib3JkZXJcIiwgSlNPTi5zdHJpbmdpZnkob3JkZXIpKTtcblxuICAgICAgICAgIHRoaXMub3JkZXJzU2VydmljZS5jcmVhdGVOZXdPcmRlcihvcmRlciwgdGhpcy51c2VyLmVtYWlsLCB0aGlzLnVzZXIucHJlZml4KS5zdWJzY3JpYmUoKGRhdGEpID0+e1xuXG5cbiAgICAgXG5cblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJJIGFtIGNyZWF0aW5nIHRoaXMgbmV3IG9yZGVyOiBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YTogXCIgKyBkYXRhKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhhbXBsZU1vZGFsTGFiZWxcIikuaW5uZXJUZXh0PVwiWW91ciBvcmRlciBudW1iZXIgaXM6IFwiICsgZGF0YS5faWQ7XG5cbiAgICAgICAgICAvLyAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgpXG5cbiAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImNhcnRCeUx1Y2FcIik7XG4gICAgICAgICAgdGhpcy5jYXJ0U2VydmljZS5nZXRDYXJ0KCk7XG4gICAgICAgICAgdGhpcy5jYXJ0LmVtcHR5Q2FydCgpO1xuXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9vcmRlcnMvJyArIGRhdGEuX2lkXSk7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmFkZCh7XG4gICAgICAgICAgICAgIHNldmVyaXR5OiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgIHN1bW1hcnk6ICdTdWNjZXMnLFxuICAgICAgICAgICAgICBkZXRhaWw6IGBTdWNjZXNmdWwgdHJhbnNhY3Rpb24hYFxuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgdGhpcy5jaGVja291dC5zZW5kU21zKGRhdGEuX2lkLCBkYXRhLnBob25lLCB0aGlzLnVzZXIucHJlZml4KS5zdWJzY3JpYmUoKGRhdGEpID0+e1xuXG4gICAgICAgICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuYWRkKHtcbiAgICAgICAgICAgICAgICBzZXZlcml0eTogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgIHN1bW1hcnk6ICdTdWNjZXMnLFxuICAgICAgICAgICAgICAgIGRldGFpbDogYFNNUyBpbnZpYXRvIWBcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pXG5cbiAgICAgIH0sXG4gICAgICByZWplY3Q6ICgpID0+IHtcbiAgICAgICAgICB0aGlzLm1zZ3MgPSBbe3NldmVyaXR5OidpbmZvJywgc3VtbWFyeTonUmVqZWN0ZWQnLCBkZXRhaWw6J0xcXCdvcmRpbmUgbm9uIMOoIHN0YXRvIGNvbmZlcm1hdG8hJ31dO1xuICAgICAgfVxuICB9KTtcbiAgfVxuXG4gIGNoZWNrU2VsZWN0ZWRPcHRpb25zKCkgOiBzdHJpbmd7XG5cblxuICAgIHJldHVybiAoPEhUTUxJbnB1dEVsZW1lbnQ+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJvcHRyYWRpb1wiXTpjaGVja2VkJykpLnZhbHVlO1xuXG4gIH1cbiBcbiAgZ2V0IGNoZWNrb3V0Rm9ybSgpIHtcbiAgICByZXR1cm4gdGhpcy5jaGVja291dEZvcm1Hcm91cC5jb250cm9scztcbiAgfVxuXG4gIG1ha2VQYXltZW50KGFtb3VudDogbnVtYmVyKSB7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZS1tYXNrJykuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuXG4gICAgY29uc3QgcGF5bWVudEhhbmRsZXIgPSAoPGFueT53aW5kb3cpLlN0cmlwZUNoZWNrb3V0LmNvbmZpZ3VyZSh7XG4gICAgICBrZXk6ICdwa190ZXN0XzUxTFlVQ0dERXlpWDNlM1BsODlqcW1WZzFnVE4yUWhpZnl3dElsZzZBejFuaUdVVjNBTlJwQU5YSjhoZEVJandETmE4R1RCdm5yeHEzemdkUjhnRXp4Z1JUMDB1SGxmdFFuRicsXG4gICAgICBsb2NhbGU6ICdhdXRvJyxcbiAgICAgIHRva2VuOiBmdW5jdGlvbiAoc3RyaXBlVG9rZW46IGFueSkge1xuICAgICAgICBjb25zb2xlLmxvZyhzdHJpcGVUb2tlbik7XG4gICAgICAgIHBheW1lbnRzdHJpcGUoc3RyaXBlVG9rZW4pO1xuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHBheW1lbnRzdHJpcGUgPSAoc3RyaXBlVG9rZW46IGFueSkgPT4ge1xuICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpIGFzIEhUTUxFbGVtZW50IHwgbnVsbFxuICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG4gICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2VNb2RhbFwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2UtbWFzaycpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfSk7XG5cbiAgICAgIHRoaXMuY2hlY2tvdXQubWFrZVBheW1lbnQoc3RyaXBlVG9rZW4sIGFtb3VudCkuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2VNb2RhbEZvb3RlclwiKS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2FkaW5nU3Bpbm5lclwiKS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xuXG5cbiAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcblxuICAgICAgICBsZXQgb3JkZXI6IE9yZGVyID0gbmV3IE9yZGVyO1xuICAgICAgICBvcmRlci5jaXR5ID0gdGhpcy51c2VyLmNpdHk7XG4gICAgICAgIG9yZGVyLmNvdW50cnkgPSB0aGlzLnVzZXIuY291bnRyeTtcbiAgICAgICAgb3JkZXIuZGF0ZU9yZGVyZWQgPSBTdHJpbmcobm93KTtcbiAgICAgICAgb3JkZXIuaWQgPSAnMTIzMTIzMTIzJztcbiAgICAgICAgb3JkZXIucGhvbmUgPSB0aGlzLnVzZXIucGhvbmU7XG4gICAgICAgIG9yZGVyLnNoaXBwaW5nQWRkcmVzczEgPSB0aGlzLnVzZXIuYWRkcmVzczE7XG4gICAgICAgIG9yZGVyLnRvdGFsUHJpY2UgPSBTdHJpbmcodGhpcy5jYXJ0LmdldFRvdGFsUHJpY2UoKSk7XG4gICAgICAgIG9yZGVyLnppcCA9IHRoaXMudXNlci5wb3N0YWxDb2RlO1xuXG4gICAgICAgIG9yZGVyLnVzZXIgPSB0aGlzLmRhdGEudXNlcklkO1xuICAgICAgICBvcmRlci5pZCA9IG51bGw7XG4gICAgICAgIG9yZGVyLmNvbmZpcm1lZCA9IHRydWU7XG4gICAgICAgIG9yZGVyLnBheW1lbnRPcHRpb24gPSBcIkNhcnRhIGRpIGNyZWRpdG9cIjtcbiAgICAgICAgbGV0IHZhcmlhbnRzID0gIHRoaXMuY2FydC5nZXRBbGxWYXJpYW50cygpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInZhcmlhbnRzID0gXCIgKyBKU09OLnN0cmluZ2lmeSh2YXJpYW50cykpO1xuICAgICAgICBvcmRlci5vcmRlckl0ZW1zID0gdGhpcy5jYXJ0LmdldEFsbFZhcmlhbnRzKCk7XG5cblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm9yZGVyXCIsIEpTT04uc3RyaW5naWZ5KG9yZGVyKSk7XG5cbiAgICAgICAgXG5cblxuXG5cblxuICAgICAgICBpZiAoZGF0YS5kYXRhID09PSBcInN1Y2Nlc3NcIikge1xuICAgICAgICAgIHRoaXMuc3VjY2VzcyA9IHRydWU7XG4gICAgICAgICAgdGhpcy5mYWlsdXJlID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5vcmRlcnNTZXJ2aWNlLmNyZWF0ZU5ld09yZGVyKG9yZGVyLCB0aGlzLnVzZXIuZW1haWwsIHRoaXMudXNlci5wcmVmaXgpLnN1YnNjcmliZSgoZGF0YSkgPT57XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSSBhbSBjcmVhdGluZyB0aGlzIG5ldyBvcmRlcjogXCIgKyBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGE6IFwiICsgZGF0YSk7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4YW1wbGVNb2RhbExhYmVsXCIpLmlubmVyVGV4dD1cIllvdXIgb3JkZXIgbnVtYmVyIGlzOiBcIiArIGRhdGEuX2lkO1xuXG4gICAgICAgICAgLy8gIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oKVxuXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJjYXJ0QnlMdWNhXCIpO1xuICAgICAgICAgIHRoaXMuY2FydFNlcnZpY2UuZ2V0Q2FydCgpO1xuICAgICAgICAgIHRoaXMuY2FydC5lbXB0eUNhcnQoKTtcblxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvb3JkZXJzLycgKyBkYXRhLl9pZF0pO1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5hZGQoe1xuICAgICAgICAgICAgICBzZXZlcml0eTogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICBzdW1tYXJ5OiAnU3VjY2VzJyxcbiAgICAgICAgICAgICAgZGV0YWlsOiBgU3VjY2VzZnVsIHRyYW5zYWN0aW9uIWBcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pXG5cblxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VjY2Vzc1wiKS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIjtcblxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMuZmFpbHVyZSA9IHRydWU7XG4gICAgICAgICAgdGhpcy5zdWNjZXNzID0gZmFsc2U7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmYWlsZWRcIikuc3R5bGUuZGlzcGxheT1cImJsb2NrXCI7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBwYXltZW50SGFuZGxlci5vcGVuKHtcbiAgICAgIG5hbWU6ICdDYXRhbGRvIFN0b3JlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnUGxlYXNlIGZpbGwgeW91ciBiaWxsaW5nIGluZm9ybWF0aW9ucycsXG4gICAgICBhbW91bnQ6IGFtb3VudCAqIDEwMCxcbiAgICB9KTtcblxuICB9XG5cbiAgaW52b2tlU3RyaXBlKCkge1xuICAgIGlmICghd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdHJpcGUtc2NyaXB0JykpIHtcbiAgICAgIGNvbnN0IHNjcmlwdCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgIHNjcmlwdC5pZCA9ICdzdHJpcGUtc2NyaXB0JztcbiAgICAgIHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgICBzY3JpcHQuc3JjID0gJ2h0dHBzOi8vY2hlY2tvdXQuc3RyaXBlLmNvbS9jaGVja291dC5qcyc7XG4gICAgICBzY3JpcHQub25sb2FkID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnBheW1lbnRIYW5kbGVyID0gKDxhbnk+d2luZG93KS5TdHJpcGVDaGVja291dC5jb25maWd1cmUoe1xuICAgICAgICAgIGtleTogJ3BrX3Rlc3RfNTFMWVVDR0RFeWlYM2UzUGw4OWpxbVZnMWdUTjJRaGlmeXd0SWxnNkF6MW5pR1VWM0FOUnBBTlhKOGhkRUlqd0ROYThHVEJ2bnJ4cTN6Z2RSOGdFenhnUlQwMHVIbGZ0UW5GJyxcbiAgICAgICAgICBsb2NhbGU6ICdhdXRvJyxcbiAgICAgICAgICB0b2tlbjogZnVuY3Rpb24gKHN0cmlwZVRva2VuOiBhbnkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0cmlwZVRva2VuKTtcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgfVxuICB9XG5cbn1cbiIsIjxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9qcy5zdHJpcGUuY29tL3YzL1wiIGRlZmVyPjwvc2NyaXB0PlxuPGRpdiBjbGFzcz1cInAtMlwiPlxuICA8cC1jb25maXJtRGlhbG9nICNjZCAgaGVhZGVyPVwiQ29uZmlybWF0aW9uXCIgaWNvbj1cInBpIHBpLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlXCI+XG4gICAgPG5nLXRlbXBsYXRlIHBUZW1wbGF0ZT1cImhlYWRlclwiPlxuICAgICAgPGgzPkNvbmZlcm1hIG9yZGluZTwvaDM+XG4gIDwvbmctdGVtcGxhdGU+XG5cbiAgPG5nLXRlbXBsYXRlIHBUZW1wbGF0ZT1cImZvb3RlclwiPlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHBCdXR0b24gaWNvbj1cInBpIHBpLXRpbWVzXCIgbGFiZWw9XCJBbm51bGxhXCIgKGNsaWNrKT1cImNkLnJlamVjdCgpXCI+PC9idXR0b24+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgcEJ1dHRvbiBpY29uPVwicGkgcGktY2hlY2tcIiBsYWJlbD1cIkNvbmZlcm1hXCIgKGNsaWNrKT1cImNkLmFjY2VwdCgpXCI+PC9idXR0b24+XG48L25nLXRlbXBsYXRlPlxuICA8L3AtY29uZmlybURpYWxvZz5cblxuPGRpdiBjbGFzcz1cImNoZWNrb3V0LXBhZ2UgcGItNVwiPlxuICAgIDxkaXY+XG4gICAgICAgIDxwLWJ1dHRvbiBsYWJlbD1cIlRvcm5hIGFsIGNhcnJlbGxvXCIgaWNvbj1cInBpIHBpLWFycm93LWxlZnRcIiAob25DbGljayk9XCJiYWNrVG9DYXJ0KClcIj48L3AtYnV0dG9uPlxuICAgIDwvZGl2PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwiZ3JpZCBwLTJcIiBzdHlsZT1cIndpZHRoOiAxMDAlOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcIj5cblxuICA8ZGl2IGNsYXNzPVwicm93XCIgc3R5bGU9XCJqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgd2lkdGg6IGluaGVyaXQ7IFwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgY29sLW1kLTcgY29sLWxnLTcgcC0yXCIgc3R5bGU9XCJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zdXJmYWNlLTIwMCk7XCI+XG4gICAgXG4gICAgICA8aDMgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXI7IG1hcmdpbi1ib3R0b206IDMwcHg7XCI+U2VsZXppb25hIHVuIG1ldG9kbyBkaSBwYWdhbWVudG88L2gzPlxuICAgICAgPGhyPlxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLThcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgaWQ9XCJyYWRpbzFcIiBuYW1lPVwib3B0cmFkaW9cIiB2YWx1ZT1cImNyZWRpdFwiIGNoZWNrZWQ+XG4gICAgICAgICAgQ0FSVEUgREkgQ1JFRElUT1xuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00XCI+XG4gICAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPiAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIiAgc3R5bGU9XCJtaW4td2lkdGg6IDUwcHg7XCI+PGxpIHN0eWxlPVwiZGlzcGxheTogaW5saW5lO1wiPjxpbWcgc3JjPVwiYXNzZXRzL21hc3RlcmNhcmQucG5nXCIgIGNsYXNzPVwiaW1nLWZsdWlkXCIgYWx0PVwiUmVzcG9uc2l2ZSBpbWFnZVwiPjwvbGk+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIiAgc3R5bGU9XCJtaW4td2lkdGg6IDUwcHg7XCI+PGxpIHN0eWxlPVwiZGlzcGxheTogaW5saW5lO1wiPjxpbWcgc3JjPSdhc3NldHMvdmlzYS5wbmcnICBjbGFzcz1cImltZy1mbHVpZFwiIGFsdD1cIlJlc3BvbnNpdmUgaW1hZ2VcIj48L2xpPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCIgIHN0eWxlPVwibWluLXdpZHRoOiA1MHB4O1wiPjxsaSBzdHlsZT1cImRpc3BsYXk6IGlubGluZTtcIj48aW1nIHNyYz0nYXNzZXRzL2FtZXJpY2FuRXhwcmVzcy5wbmcnICBjbGFzcz1cImltZy1mbHVpZFwiIGFsdD1cIlJlc3BvbnNpdmUgaW1hZ2VcIj48L2xpPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCIgIHN0eWxlPVwibWluLXdpZHRoOiA1MHB4O1wiPjxsaSBzdHlsZT1cImRpc3BsYXk6IGlubGluZTtcIj48aW1nIHNyYz0nYXNzZXRzL21hZXN0cm8ucG5nJyAgY2xhc3M9XCJpbWctZmx1aWRcIiBhbHQ9XCJSZXNwb25zaXZlIGltYWdlXCI+PC9saT48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiICBzdHlsZT1cIm1pbi13aWR0aDogNTBweDtcIj48bGkgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmU7XCI+PGltZyBzcmM9J2Fzc2V0cy9wb3N0ZXBheS5wbmcnICBjbGFzcz1cImltZy1mbHVpZFwiIGFsdD1cIlJlc3BvbnNpdmUgaW1hZ2VcIj48L2xpPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDxocj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC04XCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIGlkPVwicmFkaW8yXCIgbmFtZT1cIm9wdHJhZGlvXCIgdmFsdWU9XCJyYXRlXCIgY2hlY2tlZD5cbiAgICAgICAgICBQQUdBTUVOVE8gQSBSQVRFXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTRcIj5cbiAgICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+ICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiICBzdHlsZT1cIm1pbi13aWR0aDogNTBweDtcIj48bGkgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmU7XCI+PGltZyBzcmM9J2Fzc2V0cy9rbGFybmEucG5nJyAgY2xhc3M9XCJpbWctZmx1aWRcIiBhbHQ9XCJSZXNwb25zaXZlIGltYWdlXCI+PC9saT48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiICBzdHlsZT1cIm1pbi13aWR0aDogNTBweDtcIj48bGkgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmU7XCI+PGltZyBzcmM9XCJhc3NldHMvbWFzdGVyY2FyZC5wbmdcIiAgY2xhc3M9XCJpbWctZmx1aWRcIiBhbHQ9XCJSZXNwb25zaXZlIGltYWdlXCI+PC9saT48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiICBzdHlsZT1cIm1pbi13aWR0aDogNTBweDtcIj48bGkgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmU7XCI+PGltZyBzcmM9J2Fzc2V0cy92aXNhLnBuZycgIGNsYXNzPVwiaW1nLWZsdWlkXCIgYWx0PVwiUmVzcG9uc2l2ZSBpbWFnZVwiPjwvbGk+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIiAgc3R5bGU9XCJtaW4td2lkdGg6IDUwcHg7XCI+PGxpIHN0eWxlPVwiZGlzcGxheTogaW5saW5lO1wiPjxpbWcgc3JjPSdhc3NldHMvYW1lcmljYW5FeHByZXNzLnBuZycgIGNsYXNzPVwiaW1nLWZsdWlkXCIgYWx0PVwiUmVzcG9uc2l2ZSBpbWFnZVwiPjwvbGk+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIiAgc3R5bGU9XCJtaW4td2lkdGg6IDUwcHg7XCI+PGxpIHN0eWxlPVwiZGlzcGxheTogaW5saW5lO1wiPjxpbWcgc3JjPSdhc3NldHMvbWFlc3Ryby5wbmcnICBjbGFzcz1cImltZy1mbHVpZFwiIGFsdD1cIlJlc3BvbnNpdmUgaW1hZ2VcIj48L2xpPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCIgIHN0eWxlPVwibWluLXdpZHRoOiA1MHB4O1wiPjxsaSBzdHlsZT1cImRpc3BsYXk6IGlubGluZTtcIj48aW1nIHNyYz0nYXNzZXRzL3Bvc3RlcGF5LnBuZycgIGNsYXNzPVwiaW1nLWZsdWlkXCIgYWx0PVwiUmVzcG9uc2l2ZSBpbWFnZVwiPjwvbGk+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8aHI+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtOFwiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiBpZD1cInJhZGlvM1wiIG5hbWU9XCJvcHRyYWRpb1wiIHZhbHVlPVwicGF5cGFsXCIgY2hlY2tlZD5cbiAgICAgICAgICBQQVlQQUxcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNFwiPlxuICAgICAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj4gICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCIgIHN0eWxlPVwibWluLXdpZHRoOiA1MHB4O1wiPjxsaSBzdHlsZT1cImRpc3BsYXk6IGlubGluZTtcIj48aW1nIHNyYz0nYXNzZXRzL3BheXBhbC5wbmcnICBjbGFzcz1cImltZy1mbHVpZFwiIGFsdD1cIlJlc3BvbnNpdmUgaW1hZ2VcIj48L2xpPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGhyPlxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIGlkPVwicmFkaW80XCIgbmFtZT1cIm9wdHJhZGlvXCIgdmFsdWU9XCJjb250YW50aVwiIGNoZWNrZWQ+XG4gICAgICAgICAgUEFHQSBJTiBDT05UQU5USSBBTExBIENPTlNFR05BXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgIFxuICAgICAgPGhyPlxuICAgIDwvZGl2PlxuICAgIFxuICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgY29sLW1kLTUgY29sLWxnLTVcIj5cblxuICAgIDxkaXYgaWQ9XCJwYWdlLW1hc2tcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+PC9kaXY+XG5cbiAgICAgIDwhLS0gTW9kYWwgLS0+XG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWwgZmFkZSBib3JkZXIgYm9yZGVyLWluZm9cIiBpZD1cImV4YW1wbGVNb2RhbFwiIHRhYmluZGV4PVwiLTFcIiBhcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlTW9kYWxMYWJlbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nIGJvcmRlciBib3JkZXItaW5mbyBib3JkZXItNCByb3VuZGVkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtYXV0byBcIiA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImxvYWRpbmdTcGlubmVyXCIgY2xhc3M9XCJzcGlubmVyLWJvcmRlciB0ZXh0LXByaW1hcnlcIiByb2xlPVwic3RhdHVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2aXN1YWxseS1oaWRkZW5cIj5Mb2FkaW5nLi4uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj48aDUgY2xhc3M9XCJtb2RhbC10aXRsZVwiIGlkPVwiZXhhbXBsZU1vZGFsTGFiZWxcIj5XZSBhcmUgdmFsaWRhdGluZyB5b3VyIHRyYW5zYWN0aW9uLCBwbGVhc2Ugd2FpdDwvaDU+PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNsb3NlTW9kYWxcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4tY2xvc2VcIiBkYXRhLWJzLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwibW9kYWxCb2R5XCIgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJzdWNjZXNzXCIgY2xhc3M9XCJ0ZXh0LXN1Y2Nlc3NcIiBzdHlsZT1cImZvbnQtd2VpZ2h0OiA4MDA7IGRpc3BsYXk6IG5vbmU7XCI+IFRyYW5zYWN0aW9uIHN1Y2Nlc2Z1bGwhPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJmYWlsZWRcIiBjbGFzcz1cInRleHQtZGFuZ2VyXCIgc3R5bGU9XCJmb250LXdlaWdodDogODAwOyBkaXNwbGF5OiBub25lO1wiPiBUcmFuc2FjdGlvbiBmYWlsZWQhPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGlkPVwiY2xvc2VNb2RhbEZvb3RlclwiIGNsYXNzPVwidGV4dC1zZWNvbmRhcnlcIiBzdHlsZT1cImZvbnQtc2l6ZTpzbWFsbGVyOyBkaXNwbGF5OiBub25lO1wiPiBOb3cgeW91IGNhbiBjbG9zZSB0aGlzIG1vZGFsPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxvcmRlcnMtb3JkZXItc3VtbWFyeSBbaXNDaGVja091dF09XCJ0cnVlXCI+PC9vcmRlcnMtb3JkZXItc3VtbWFyeT5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaGVja291dC1idXR0b25cIj5cbiAgICAgICAgPHAtYnV0dG9uIGxhYmVsPVwiUHJvY2VkaVwiIChvbkNsaWNrKT1cInBsYWNlT3JkZXIoKVwiPjwvcC1idXR0b24+XG4gICAgICA8L2Rpdj5cbiBcblxuICAgICAgPGRpdiBjbGFzcz1cImVycm9yIG10LTJcIiBzdHlsZT1cImZvbnQtc2l6ZTogMjlweDsgY29sb3I6cmVkOyBmb250LXdlaWdodDogODAwO1wiICpuZ0lmPVwiZXJyb3JNZXNzYWdlXCIgPlBsZWFzZSBmaWxsIGFsbCB0aGUgbWFuZGF0b3J5IGZpZWxkczo8L2Rpdj5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpIHN0eWxlPVwiZm9udC1zaXplOiAyMHB4OyBjb2xvcjpyZWQ7IGZvbnQtd2VpZ2h0OiA1MDA7XCIgICpuZ0Zvcj1cImxldCBlcnJvciBvZiBlcnJvcm1lc3NhZ2VcIj5cbiAgICAgICAgICAgIHt7ZXJyb3J9fVxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cblxuXG5cbiAgICA8L2Rpdj5cblxuICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxwLW1lc3NhZ2VzIFt2YWx1ZV09XCJtc2dzXCI+PC9wLW1lc3NhZ2VzPlxuPC9kaXY+XG4iXX0=