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
import * as i8 from "@angular/common";
import * as i9 from "primeng/button";
import * as i10 from "primeng/confirmdialog";
import * as i11 from "primeng/messages";
import * as i12 from "../../components/order-summary/order-summary.component";
function PaymentOptions_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h3");
    i0.ɵɵtext(1, "Conferma ordine");
    i0.ɵɵelementEnd();
} }
function PaymentOptions_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 51);
    i0.ɵɵlistener("click", function PaymentOptions_ng_template_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6); i0.ɵɵnextContext(); const _r0 = i0.ɵɵreference(2); return i0.ɵɵresetView(_r0.reject()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(1, "button", 52);
    i0.ɵɵlistener("click", function PaymentOptions_ng_template_4_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r6); i0.ɵɵnextContext(); const _r0 = i0.ɵɵreference(2); return i0.ɵɵresetView(_r0.accept()); });
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
    constructor(router, usersService, formBuilder, cartService, ordersService, messageService, checkout, kc, confirmationService, primengConfig) {
        this.router = router;
        this.usersService = usersService;
        this.formBuilder = formBuilder;
        this.cartService = cartService;
        this.ordersService = ordersService;
        this.messageService = messageService;
        this.checkout = checkout;
        this.kc = kc;
        this.confirmationService = confirmationService;
        this.primengConfig = primengConfig;
        this.loading = false;
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
        this.cart = this.cartService.getCart();
        this.loading = false;
    }
    ngOnInit() {
        this.loading = false;
        this.cart = this.cartService.getCart();
        this._initUserForm();
        this._autoFillUserData();
        this._getCountries();
        this._getCartItems();
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
        console.log("opzione = " + this.checkSelectedOptions());
        switch (this.checkSelectedOptions()) {
            case "credit":
                this.makePayment(this.cart.getTotalPrice());
                break;
            case "rate":
                // localStorage.removeItem("order");
                let userSession = this.parseJwt(localStorage.getItem("authToken"));
                console.log("HO TROVATO QUESTO USER DALL'AUTH TOKEN:" + JSON.stringify(userSession));
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
                order.user = userSession.userId;
                order.id = null;
                order.email = this.user.email;
                order.paymentOption = "klarna";
                order.confirmed = true;
                let variants = this.cart.getAllVariants();
                console.log("variants = " + JSON.stringify(variants));
                order.orderItems = this.cart.getAllVariants();
                localStorage.setItem("order", JSON.stringify(order));
                console.log("prima di pagare con klarna sto usando questo ordine: " + localStorage.getItem("order") + "  " + JSON.stringify(localStorage.getItem("order")));
                await this.kc.pay(this.cart.getTotalPrice());
                break;
            case "contanti":
                console.log("contanti");
                let unconfirmedOrders = this.ordersService.getUnconfirmedOrder(this.user.prefix, this.user.phone).subscribe(data => {
                    console.log("UNCONFIRMET ORDERS = " + JSON.stringify(data));
                    if (data.count == '0') {
                        this.confirm();
                    }
                    else {
                        this.cantConfirm(data.count);
                        this.loading = false;
                    }
                });
                break;
            case "paypal":
                console.log("paypal");
                const now2 = new Date();
                let userSession2 = this.parseJwt(localStorage.getItem("authToken"));
                let order2 = new Order();
                order2.city = this.user.city;
                order2.country = this.user.country;
                order2.dateOrdered = String(now2);
                order2.id = '123123123';
                order2.phone = this.user.phone;
                order2.shippingAddress1 = this.user.address1;
                order2.totalPrice = String(this.cart.getTotalPrice());
                order2.zip = this.user.postalCode;
                order2.user = userSession2.userId;
                order2.id = null;
                order2.email = this.user.email;
                order2.paymentOption = "Paypal";
                order2.confirmed = true;
                let variants2 = this.cart.getAllVariants();
                console.log("variants = " + JSON.stringify(variants2));
                order2.orderItems = this.cart.getAllVariants();
                localStorage.setItem("order", JSON.stringify(order2));
                // this.router.navigate(['/paypal']);
                this.checkout.payPal(this.cart, order2).subscribe((data) => {
                    console.log(data);
                    window.location.href = data.redirect;
                });
        }
        if (this.checkSelectedOptions()) {
            //this.makePayment(this.cart.getTotalPrice());
            //   await this.kc.pay(this.cart.getTotalPrice());
            this.errorMessage = false;
        }
        else {
            console.log("error in the shipping address");
            this.loading = false;
            this.errorMessage = true;
        }
    }
    cantConfirm(n) {
        this.confirmationService.confirm({
            message: 'Ci sono attualmente ' + n + ' ordini non confermati.<br>Non puoi registrare nuovi ordini finchè hai altri ordini registrati e non confermati tramite sms.<br></b>Puoi confermare/annullare gli ordini andando su <a href=\'https://cataldoproduction.herokuapp.com/#/myOrders\'>I miei ordini</a>',
            accept: () => {
                this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'Impossibile registrare l\'ordine' }];
            },
            reject: () => {
                this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'Impossibile registrare l\'ordine' }];
            }
        });
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
                order.email = this.data.email;
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
        let userSession = this.parseJwt(localStorage.getItem("authToken"));
        document.getElementById('page-mask').style.display = "block";
        const paymentHandler = window.StripeCheckout.configure({
            key: 'pk_live_51LYUCGDEyiX3e3PlZ6YXzMTMSvGkcCPrbxY7HU3N4PHkJgo00eXmUxV65d81LeSks3ZCkr4jY7liJdzIPMoH6RNZ00qmPvQJMW',
            locale: 'auto',
            currency: 'eur',
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
                if (data.data === "success") {
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
                    order.email = this.data.email;
                    order.user = this.data.userId;
                    order.id = null;
                    order.confirmed = true;
                    order.paymentOption = "Carta di credito";
                    let variants = this.cart.getAllVariants();
                    console.log("variants = " + JSON.stringify(variants));
                    order.orderItems = this.cart.getAllVariants();
                    localStorage.setItem("order", JSON.stringify(order));
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
PaymentOptions.ɵfac = function PaymentOptions_Factory(t) { return new (t || PaymentOptions)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.UsersService), i0.ɵɵdirectiveInject(i3.FormBuilder), i0.ɵɵdirectiveInject(i4.CartService), i0.ɵɵdirectiveInject(i5.OrdersService), i0.ɵɵdirectiveInject(i6.MessageService), i0.ɵɵdirectiveInject(i7.CheckoutService), i0.ɵɵdirectiveInject(i2.KlarnaComponent), i0.ɵɵdirectiveInject(i6.ConfirmationService), i0.ɵɵdirectiveInject(i6.PrimeNGConfig)); };
PaymentOptions.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PaymentOptions, selectors: [["payment-options"]], features: [i0.ɵɵProvidersFeature([KlarnaComponent])], decls: 107, vars: 5, consts: [[1, "p-2"], ["header", "Confirmation", "icon", "pi pi-exclamation-triangle"], ["cd", ""], ["pTemplate", "header"], ["pTemplate", "footer"], [1, "checkout-page", "pb-5"], ["label", "Torna al carrello", "icon", "pi pi-arrow-left", 3, "onClick"], [1, "grid", "p-2", 2, "width", "100%", "justify-content", "center"], [1, "row", 2, "justify-content", "center", "width", "inherit"], [1, "col-12", "col-md-7", "col-lg-7", "p-2", 2, "border", "1px solid var(--surface-200)"], [2, "text-align", "center", "margin-bottom", "30px"], [1, "row"], [1, "col-8"], ["type", "radio", "id", "radio1", "name", "optradio", "value", "credit", "checked", "", 1, "form-check-input"], [1, "col-4"], [1, "col-1", 2, "min-width", "50px"], [2, "display", "inline"], ["src", "assets/mastercard.png", "alt", "Responsive image", 1, "img-fluid"], ["src", "assets/visa.png", "alt", "Responsive image", 1, "img-fluid"], ["src", "assets/americanExpress.png", "alt", "Responsive image", 1, "img-fluid"], ["src", "assets/maestro.png", "alt", "Responsive image", 1, "img-fluid"], ["src", "assets/postepay.png", "alt", "Responsive image", 1, "img-fluid"], ["type", "radio", "id", "radio2", "name", "optradio", "value", "rate", "checked", "", 1, "form-check-input"], ["src", "assets/klarna.png", "alt", "Responsive image", 1, "img-fluid"], ["type", "radio", "id", "radio3", "name", "optradio", "value", "paypal", "checked", "", 1, "form-check-input"], ["src", "assets/paypal.png", "alt", "Responsive image", 1, "img-fluid"], [1, "col"], ["type", "radio", "id", "radio4", "name", "optradio", "value", "contanti", "checked", "", 1, "form-check-input"], [1, "col-12", "col-md-5", "col-lg-5"], ["id", "page-mask", 2, "display", "none"], ["id", "exampleModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade", "border", "border-info"], [1, "modal-dialog", "border", "border-info", "border-4", "rounded"], [1, "modal-content"], [1, "modal-header"], [1, "col-auto"], [1, "d-flex", "justify-content-center"], ["id", "loadingSpinner", "role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], ["id", "exampleModalLabel", 1, "modal-title"], ["id", "closeModal", "type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], ["id", "modalBody", 1, "modal-body"], ["id", "success", 1, "text-success", 2, "font-weight", "800", "display", "none"], ["id", "failed", 1, "text-danger", 2, "font-weight", "800", "display", "none"], [1, "modal-footer"], ["id", "closeModalFooter", 1, "text-secondary", 2, "font-size", "smaller", "display", "none"], [3, "isCheckOut"], [1, "checkout-button"], ["label", "Procedi", 3, "loading", "onClick"], ["class", "error mt-2", "style", "font-size: 29px; color:red; font-weight: 800;", 4, "ngIf"], ["style", "font-size: 20px; color:red; font-weight: 500;", 4, "ngFor", "ngForOf"], [3, "value"], ["type", "button", "pButton", "", "icon", "pi pi-times", "label", "Annulla", 3, "click"], ["type", "button", "pButton", "", "icon", "pi pi-check", "label", "Conferma", 3, "click"], [1, "error", "mt-2", 2, "font-size", "29px", "color", "red", "font-weight", "800"], [2, "font-size", "20px", "color", "red", "font-weight", "500"]], template: function PaymentOptions_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("loading", ctx.loading);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.errorMessage);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.errormessage);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("value", ctx.msgs);
    } }, dependencies: [i8.NgForOf, i8.NgIf, i6.PrimeTemplate, i9.ButtonDirective, i9.Button, i10.ConfirmDialog, i11.Messages, i12.OrderSummaryComponent], styles: ["#page-mask[_ngcontent-%COMP%]{background:rgba(0,0,0,.5);position:fixed;inset:0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaymentOptions, [{
        type: Component,
        args: [{ selector: 'payment-options', providers: [KlarnaComponent], template: "<script src=\"https://js.stripe.com/v3/\" defer></script>\n<div class=\"p-2\">\n  <p-confirmDialog #cd  header=\"Confirmation\" icon=\"pi pi-exclamation-triangle\">\n    <ng-template pTemplate=\"header\">\n      <h3>Conferma ordine</h3>\n  </ng-template>\n\n  <ng-template pTemplate=\"footer\">\n    <button type=\"button\" pButton icon=\"pi pi-times\" label=\"Annulla\" (click)=\"cd.reject()\"></button>\n    <button type=\"button\" pButton icon=\"pi pi-check\" label=\"Conferma\" (click)=\"cd.accept()\"></button>\n</ng-template>\n  </p-confirmDialog>\n\n<div class=\"checkout-page pb-5\">\n    <div>\n        <p-button label=\"Torna al carrello\" icon=\"pi pi-arrow-left\" (onClick)=\"backToCart()\"></p-button>\n    </div>\n</div>\n<div class=\"grid p-2\" style=\"width: 100%; justify-content: center;\">\n\n  <div class=\"row\" style=\"justify-content: center; width: inherit; \">\n    <div class=\"col-12 col-md-7 col-lg-7 p-2\" style=\"\n    border: 1px solid var(--surface-200);\">\n    \n      <h3 style=\"text-align: center; margin-bottom: 30px;\">Seleziona un metodo di pagamento</h3>\n      <hr>\n      <div class=\"row\">\n        <div class=\"col-8\">\n          <input type=\"radio\" class=\"form-check-input\" id=\"radio1\" name=\"optradio\" value=\"credit\" checked>\n          CARTE DI CREDITO\n        </div>\n        <div class=\"col-4\">\n          \n          <div class=\"row\">        \n            <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src=\"assets/mastercard.png\"  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n            <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/visa.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n            <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/americanExpress.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n            <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/maestro.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n            <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/postepay.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n          </div>\n    \n        </div>\n      </div>\n    <hr>\n      <div class=\"row\">\n        <div class=\"col-8\">\n          <input type=\"radio\" class=\"form-check-input\" id=\"radio2\" name=\"optradio\" value=\"rate\" checked>\n          PAGAMENTO A RATE\n        </div>\n        <div class=\"col-4\">\n          \n          <div class=\"row\">        \n            <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/klarna.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n            <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src=\"assets/mastercard.png\"  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n            <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/visa.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n            <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/americanExpress.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n            <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/maestro.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n            <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/postepay.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n          </div>\n    \n        </div>\n      </div>\n      <hr>\n      <div class=\"row\">\n        <div class=\"col-8\">\n          <input type=\"radio\" class=\"form-check-input\" id=\"radio3\" name=\"optradio\" value=\"paypal\" checked>\n          PAYPAL\n        </div>\n        <div class=\"col-4\">\n          \n          <div class=\"row\">        \n            <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/paypal.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n          </div>\n    \n        </div>\n      </div>\n      <hr>\n      <div class=\"row\">\n        <div class=\"col\">\n          <input type=\"radio\" class=\"form-check-input\" id=\"radio4\" name=\"optradio\" value=\"contanti\" checked>\n          PAGA IN CONTANTI ALLA CONSEGNA\n        </div>\n      </div>\n     \n      <hr>\n    </div>\n    \n    <div class=\"col-12 col-md-5 col-lg-5\">\n\n    <div id=\"page-mask\" style=\"display: none;\"></div>\n\n      <!-- Modal -->\n      <div class=\"modal fade border border-info\" id=\"exampleModal\" tabindex=\"-1\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog border border-info border-4 rounded\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <div class=\"row\">\n                <div class=\"col-auto \" >\n                  <div class=\"d-flex justify-content-center\">\n                    <div id=\"loadingSpinner\" class=\"spinner-border text-primary\" role=\"status\">\n                      <span class=\"visually-hidden\">Loading...</span>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col\"><h5 class=\"modal-title\" id=\"exampleModalLabel\">We are validating your transaction, please wait</h5></div>\n              </div>\n\n\n              <button id=\"closeModal\" type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n            </div>\n            <div id=\"modalBody\" class=\"modal-body\">\n              <div id=\"success\" class=\"text-success\" style=\"font-weight: 800; display: none;\"> Transaction succesfull!</div>\n              <div id=\"failed\" class=\"text-danger\" style=\"font-weight: 800; display: none;\"> Transaction failed!</div>\n\n            </div>\n            <div class=\"modal-footer\">\n              <div id=\"closeModalFooter\" class=\"text-secondary\" style=\"font-size:smaller; display: none;\"> Now you can close this modal</div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <orders-order-summary [isCheckOut]=\"true\"></orders-order-summary>\n      <div class=\"checkout-button\">\n        <p-button  [loading]=\"loading\"  label=\"Procedi\" (onClick)=\"placeOrder()\"></p-button>\n      </div>\n \n\n      <div class=\"error mt-2\" style=\"font-size: 29px; color:red; font-weight: 800;\" *ngIf=\"errorMessage\" >Please fill all the mandatory fields:</div>\n      <ul>\n        <li style=\"font-size: 20px; color:red; font-weight: 500;\"  *ngFor=\"let error of errormessage\">\n            {{error}}\n        </li>\n      </ul>\n\n\n\n    </div>\n\n  </div>\n  </div>\n  <p-messages [value]=\"msgs\"></p-messages>\n</div>\n", styles: ["#page-mask{background:rgba(0,0,0,.5);position:fixed;inset:0}\n"] }]
    }], function () { return [{ type: i1.Router }, { type: i2.UsersService }, { type: i3.FormBuilder }, { type: i4.CartService }, { type: i5.OrdersService }, { type: i6.MessageService }, { type: i7.CheckoutService }, { type: i2.KlarnaComponent }, { type: i6.ConfirmationService }, { type: i6.PrimeNGConfig }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1vcHRpb25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvb3JkZXJzL3NyYy9saWIvcGFnZXMvY2hvb3NlLXBheW1lbnQtb3B0aW9uL3BheW1lbnQtb3B0aW9ucy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL29yZGVycy9zcmMvbGliL3BhZ2VzL2Nob29zZS1wYXltZW50LW9wdGlvbi9wYXltZW50LW9wdGlvbnMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsTUFBTTtBQUNOLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBYSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFHLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQTtBQUV2RCxPQUFPLEVBQVcsY0FBYyxFQUFFLGFBQWEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNyRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFMUQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUVsRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFekMsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sYUFBYSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7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QUEsRUFBQTtRQUlyRCxnQ0FBaUIsY0FBQTtRQUErQyxnRUFBK0M7UUFBQSxpQkFBSyxFQUFBLEVBQUE7UUFJdEgsOEJBQTRHO1FBQzlHLGlCQUFNO1FBQ04sZ0NBQXVDLGVBQUE7UUFDNEMseUNBQXVCO1FBQUEsaUJBQU07UUFDOUcsZ0NBQThFO1FBQUMscUNBQW1CO1FBQUEsaUJBQU0sRUFBQTtRQUcxRyxnQ0FBMEIsZUFBQTtRQUNxRSw4Q0FBNEI7UUFBQSxpQkFBTSxFQUFBLEVBQUEsRUFBQSxFQUFBO1FBS3ZJLDZDQUFpRTtRQUNqRSxpQ0FBNkIscUJBQUE7UUFDcUIsbUdBQVcsZ0JBQVksSUFBQztRQUFDLGlCQUFXLEVBQUE7UUFJdEYsb0VBQStJO1FBQy9JLDRCQUFJO1FBQ0Ysa0VBRUs7UUFDUCxpQkFBSyxFQUFBLEVBQUEsRUFBQTtRQVFULG1DQUF3QztRQUMxQyxpQkFBTTs7UUFwQnNCLGlCQUFtQjtRQUFuQixpQ0FBbUI7UUFFNUIsZUFBbUI7UUFBbkIscUNBQW1CO1FBSStDLGVBQWtCO1FBQWxCLHVDQUFrQjtRQUVsQixlQUFlO1FBQWYsMENBQWU7UUFXdEYsZUFBYztRQUFkLGdDQUFjOzt1RkRyR2YsY0FBYztjQWQxQixTQUFTOzJCQUNFLGlCQUFpQixhQVVoQixDQUFDLGVBQWUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXIyMyB9IGZyb20gJy4vLi4vLi4vbW9kZWxzL3VzZXIyMyc7XG4vKiogKi9cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7ICBVc2Vyc1NlcnZpY2UgfSBmcm9tICdAZXNob3AtZnJvbnRlbmQvdXNlcnMnO1xuaW1wb3J0IHsgS2xhcm5hQ29tcG9uZW50IH0gZnJvbSAnQGVzaG9wLWZyb250ZW5kL3VzZXJzJ1xuXG5pbXBvcnQgeyBNZXNzYWdlLCBNZXNzYWdlU2VydmljZSwgUHJpbWVOR0NvbmZpZyB9IGZyb20gJ3ByaW1lbmcvYXBpJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9yZGVyc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vcmRlcnMuc2VydmljZSc7XG5pbXBvcnQgeyBDYXJ0U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NhcnQuc2VydmljZSc7XG5pbXBvcnQgeyBPcmRlckl0ZW0gfSBmcm9tICcuLi8uLi9tb2RlbHMvb3JkZXItaXRlbSc7XG5pbXBvcnQgeyBPcmRlciB9IGZyb20gJy4uLy4uL21vZGVscy9vcmRlcic7XG5pbXBvcnQgeyBDaGVja291dFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jaGVja291dC5zZXJ2aWNlJztcbmltcG9ydCB7IENhcnQgfSBmcm9tICdAZXNob3AtZnJvbnRlbmQvdXNlcnMnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL21vZGVscy91c2VyJztcbmltcG9ydCB7Q29uZmlybURpYWxvZ01vZHVsZX0gZnJvbSAncHJpbWVuZy9jb25maXJtZGlhbG9nJztcbmltcG9ydCB7Q29uZmlybWF0aW9uU2VydmljZX0gZnJvbSAncHJpbWVuZy9hcGknO1xuXG5pbXBvcnQge01lc3NhZ2VzTW9kdWxlfSBmcm9tICdwcmltZW5nL21lc3NhZ2VzJztcblxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BheW1lbnQtb3B0aW9ucycsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYXltZW50LW9wdGlvbnMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXM6IFtgI3BhZ2UtbWFzayB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gIH1gXSxcbiAgcHJvdmlkZXJzOiBbS2xhcm5hQ29tcG9uZW50XVxuXG59KVxuZXhwb3J0IGNsYXNzIFBheW1lbnRPcHRpb25zIGltcGxlbWVudHMgT25Jbml0IHtcblxuICBlcnJvck1lc3NhZ2U6IGJvb2xlYW47XG4gIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgZXJyb3JtZXNzYWdlOiBTdHJpbmdbXTtcbiAgbXNnczogTWVzc2FnZVtdID0gW107XG4gIHByaXZhdGUgY2FydDogQ2FydDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgdXNlcnNTZXJ2aWNlOiBVc2Vyc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG4gICAgcHJpdmF0ZSBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBvcmRlcnNTZXJ2aWNlOiBPcmRlcnNTZXJ2aWNlLFxuICAgIHByaXZhdGUgbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2hlY2tvdXQ6IENoZWNrb3V0U2VydmljZSxcbiAgICBwcml2YXRlIGtjIDogS2xhcm5hQ29tcG9uZW50LFxuXG4gICAgXG4gICAgcHJpdmF0ZSBjb25maXJtYXRpb25TZXJ2aWNlOiBDb25maXJtYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgcHJpbWVuZ0NvbmZpZzogUHJpbWVOR0NvbmZpZ1xuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcjtcbiAgICAgICAgICAgICAgICB0aGlzLnByaW1lbmdDb25maWcucmlwcGxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhcnQgPSB0aGlzLmNhcnRTZXJ2aWNlLmdldENhcnQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGNoZWNrb3V0Rm9ybUdyb3VwOiBGb3JtR3JvdXA7XG4gICAgICAgICAgICAgIGlzU3VibWl0dGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgIG9yZGVySXRlbXM6IE9yZGVySXRlbVtdID0gW107XG4gICAgICAgICAgICAgIHVzZXJJZDogc3RyaW5nO1xuICAgICAgICAgICAgICBjb3VudHJpZXMgPSBbXTtcbiAgICAgICAgICAgICAgIHVuc3Vic2NyaWJlJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcbiAgICAgICAgICAgICAgIHBheW1lbnRIYW5kbGVyOiBhbnkgPSBudWxsO1xuICAgICAgICAgICAgICAgc3VjY2VzczogYm9vbGVhbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgZmFpbHVyZTpib29sZWFuID0gZmFsc2U7XG4gICAgICAgICAgICAgICB1c2VyOiBVc2VyO1xuICAgICAgICAgICAgICAgZGF0YTtcblxuXG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5jYXJ0ID0gdGhpcy5jYXJ0U2VydmljZS5nZXRDYXJ0KCk7XG5cbiAgICB0aGlzLl9pbml0VXNlckZvcm0oKTtcbiAgICB0aGlzLl9hdXRvRmlsbFVzZXJEYXRhKCk7XG4gICAgdGhpcy5fZ2V0Q291bnRyaWVzKCk7XG4gICAgdGhpcy5fZ2V0Q2FydEl0ZW1zKCk7XG4gICAgdGhpcy5pbnZva2VTdHJpcGUoKTtcbiAgICB0aGlzLmRhdGEgPSAgdGhpcy5wYXJzZUp3dChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImF1dGhUb2tlblwiKSk7XG4gICAgdGhpcy51c2VyLmNvdW50cnk9ICAgICAgdGhpcy5kYXRhLmNvdW50cnk7XG4gICAgdGhpcy51c2VyLmFkZHJlc3MxPSAgICAgdGhpcy5kYXRhWydhZGRyZXNzMSddO1xuICAgIHRoaXMudXNlci5hZGRyZXNzMj0gICAgIHRoaXMuZGF0YS5hZGRyZXNzMjtcbiAgICB0aGlzLnVzZXIuZGF0ZT0gICAgICAgICB0aGlzLmRhdGEuZGF0ZU9mQmlydGg7XG4gICAgdGhpcy51c2VyLmVtYWlsPSAgICAgICAgdGhpcy5kYXRhLmVtYWlsO1xuICAgIHRoaXMudXNlci5waG9uZT0gICAgICAgIHRoaXMuZGF0YS5waG9uZTtcbiAgICB0aGlzLnVzZXIucG9zdGFsQ29kZT0gICB0aGlzLmRhdGEucG9zdGFsQ29kZTtcbiAgICB0aGlzLnVzZXIuc2V4PSAgICAgICAgICB0aGlzLmRhdGEuZ2VuZGVyO1xuICAgIHRoaXMudXNlci5mTmFtZSA9ICAgICAgIHRoaXMuZGF0YS5mTmFtZTtcbiAgICB0aGlzLnVzZXIubE5hbWUgPSAgICAgICB0aGlzLmRhdGEubE5hbWU7XG4gICAgdGhpcy51c2VyLnJlZ2lvbiA9ICAgICAgdGhpcy5kYXRhLnJlZ2lvbjtcbiAgICB0aGlzLnVzZXIuY2l0eSA9ICAgICAgICB0aGlzLmRhdGEuY2l0eTtcbiAgICB0aGlzLnVzZXIuc3RhdGUgPSAgICAgICB0aGlzLmRhdGEuc3RhdGU7XG4gICAgdGhpcy51c2VyLnByZWZpeCA9ICAgICAgdGhpcy5kYXRhLnByZWZpeDtcbiAgICB0aGlzLmtjID0gbmV3IEtsYXJuYUNvbXBvbmVudCgpO1xuICAgIHRoaXMua2MucHJpbnRIZWxsbygpO1xuXG4gICAgY29uc29sZS5sb2coXCJ0aGlzIHVzZXIgPSBcIiArIEpTT04uc3RyaW5naWZ5KHRoaXMudXNlcikpO1xuICBcblxuXG4gIH1cbiAgcGFyc2VKd3QgKHRva2VuKSB7XG4gICAgdmFyIGJhc2U2NFVybCA9IHRva2VuLnNwbGl0KCcuJylbMV07XG4gICAgdmFyIGJhc2U2NCA9IGJhc2U2NFVybC5yZXBsYWNlKC8tL2csICcrJykucmVwbGFjZSgvXy9nLCAnLycpO1xuICAgIHZhciBqc29uUGF5bG9hZCA9IGRlY29kZVVSSUNvbXBvbmVudCh3aW5kb3cuYXRvYihiYXNlNjQpLnNwbGl0KCcnKS5tYXAoZnVuY3Rpb24oYykge1xuICAgICAgICByZXR1cm4gJyUnICsgKCcwMCcgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpKS5zbGljZSgtMik7XG4gICAgfSkuam9pbignJykpO1xuXG4gICAgcmV0dXJuIEpTT04ucGFyc2UoanNvblBheWxvYWQpO1xufTtcblxuICBwcml2YXRlIF9pbml0VXNlckZvcm0oKSB7XG4gICAgdGhpcy5jaGVja291dEZvcm1Hcm91cCA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgbmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIGVtYWlsOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLmVtYWlsXV0sXG4gICAgICBwaG9uZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIGNpdHk6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBjb3VudHJ5OiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgemlwOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgYXBhcnRtZW50OiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgc3RyZWV0OiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgfSk7XG4gIH1cblxuXG4gIHByaXZhdGUgX2F1dG9GaWxsVXNlckRhdGEoKSB7XG4gICAgLypcbiAgICB0aGlzLnVzZXJzU2VydmljZVxuICAgICAgLm9ic2VydmVDdXJyZW50VXNlcigpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKVxuICAgICAgLnN1YnNjcmliZSgodXNlcikgPT4ge1xuICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgIHRoaXMudXNlcklkID0gdXNlci5pZDtcbiAgICAgICAgICB0aGlzLmNoZWNrb3V0Rm9ybS5uYW1lLnNldFZhbHVlKHVzZXIubmFtZSk7XG4gICAgICAgICAgdGhpcy5jaGVja291dEZvcm0uZW1haWwuc2V0VmFsdWUodXNlci5lbWFpbCk7XG4gICAgICAgICAgdGhpcy5jaGVja291dEZvcm0ucGhvbmUuc2V0VmFsdWUodXNlci5waG9uZSk7XG4gICAgICAgICAgdGhpcy5jaGVja291dEZvcm0uY2l0eS5zZXRWYWx1ZSh1c2VyLmNpdHkpO1xuICAgICAgICAgIHRoaXMuY2hlY2tvdXRGb3JtLnN0cmVldC5zZXRWYWx1ZSh1c2VyLnN0cmVldCk7XG4gICAgICAgICAgdGhpcy5jaGVja291dEZvcm0uY291bnRyeS5zZXRWYWx1ZSh1c2VyLmNvdW50cnkpO1xuICAgICAgICAgIHRoaXMuY2hlY2tvdXRGb3JtLnppcC5zZXRWYWx1ZSh1c2VyLnppcCk7XG4gICAgICAgICAgdGhpcy5jaGVja291dEZvcm0uYXBhcnRtZW50LnNldFZhbHVlKHVzZXIuYXBhcnRtZW50KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAqL1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0Q2FydEl0ZW1zKCl7XG5cbiAgfVxuXG4gIHByaXZhdGUgX2dldENvdW50cmllcygpe1xuICAgIHRoaXMuY291bnRyaWVzID0gdGhpcy51c2Vyc1NlcnZpY2UuZ2V0Q291bnRyaWVzKCk7XG4gICAgY29uc29sZS5sb2codGhpcy5jb3VudHJpZXMpO1xuICB9XG5cblxuICBiYWNrVG9DYXJ0KCl7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvY2FydCddKTtcbiAgfVxuXG4gIGFzeW5jIHBsYWNlT3JkZXIoKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICBjb25zb2xlLmxvZyhcInRvdGFsIHByaWNlID0gXCIgKyB0aGlzLmNhcnQuZ2V0VG90YWxQcmljZSgpKTtcblxuICAgIGNvbnNvbGUubG9nKFwib3B6aW9uZSA9IFwiICsgdGhpcy5jaGVja1NlbGVjdGVkT3B0aW9ucygpKTtcblxuICAgIHN3aXRjaCh0aGlzLmNoZWNrU2VsZWN0ZWRPcHRpb25zKCkpe1xuICAgICAgY2FzZSBcImNyZWRpdFwiIDpcbiAgICAgICAgdGhpcy5tYWtlUGF5bWVudCh0aGlzLmNhcnQuZ2V0VG90YWxQcmljZSgpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwicmF0ZVwiIDpcbiAgICAgICAvLyBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcIm9yZGVyXCIpO1xuICAgICAgICBsZXQgdXNlclNlc3Npb24gPSAgdGhpcy5wYXJzZUp3dChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImF1dGhUb2tlblwiKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSE8gVFJPVkFUTyBRVUVTVE8gVVNFUiBEQUxMJ0FVVEggVE9LRU46XCIgKyBKU09OLnN0cmluZ2lmeSh1c2VyU2Vzc2lvbikpXG5cbiAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcblxuICAgICAgICBsZXQgb3JkZXI6IE9yZGVyID0gbmV3IE9yZGVyO1xuICAgICAgICBvcmRlci5jaXR5ID0gdGhpcy51c2VyLmNpdHk7XG4gICAgICAgIG9yZGVyLmNvdW50cnkgPSB0aGlzLnVzZXIuY291bnRyeTtcbiAgICAgICAgb3JkZXIuZGF0ZU9yZGVyZWQgPSBTdHJpbmcobm93KTtcbiAgICAgICAgb3JkZXIuaWQgPSAnMTIzMTIzMTIzJztcbiAgICAgICAgb3JkZXIucGhvbmUgPSB0aGlzLnVzZXIucGhvbmU7XG4gICAgICAgIG9yZGVyLnNoaXBwaW5nQWRkcmVzczEgPSB0aGlzLnVzZXIuYWRkcmVzczE7XG4gICAgICAgIG9yZGVyLnRvdGFsUHJpY2UgPSBTdHJpbmcodGhpcy5jYXJ0LmdldFRvdGFsUHJpY2UoKSk7XG4gICAgICAgIG9yZGVyLnppcCA9IHRoaXMudXNlci5wb3N0YWxDb2RlO1xuICAgICAgICBvcmRlci51c2VyID0gdXNlclNlc3Npb24udXNlcklkO1xuICAgICAgICBvcmRlci5pZCA9IG51bGw7XG4gICAgICAgIG9yZGVyLmVtYWlsID0gdGhpcy51c2VyLmVtYWlsO1xuICAgICAgICBvcmRlci5wYXltZW50T3B0aW9uID0gXCJrbGFybmFcIjtcbiAgICAgICAgb3JkZXIuY29uZmlybWVkID0gdHJ1ZTtcbiAgICAgICAgXG4gICAgICAgIGxldCB2YXJpYW50cyA9ICB0aGlzLmNhcnQuZ2V0QWxsVmFyaWFudHMoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJ2YXJpYW50cyA9IFwiICsgSlNPTi5zdHJpbmdpZnkodmFyaWFudHMpKTtcbiAgICAgICAgb3JkZXIub3JkZXJJdGVtcyA9IHRoaXMuY2FydC5nZXRBbGxWYXJpYW50cygpO1xuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwib3JkZXJcIiwgSlNPTi5zdHJpbmdpZnkob3JkZXIpKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcInByaW1hIGRpIHBhZ2FyZSBjb24ga2xhcm5hIHN0byB1c2FuZG8gcXVlc3RvIG9yZGluZTogXCIgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm9yZGVyXCIpICsgXCIgIFwiICsgSlNPTi5zdHJpbmdpZnkobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJvcmRlclwiKSkpO1xuXG4gICAgICAgIGF3YWl0IHRoaXMua2MucGF5KHRoaXMuY2FydC5nZXRUb3RhbFByaWNlKCkpO1xuICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwiY29udGFudGlcIiA6XG4gICAgICAgICAgY29uc29sZS5sb2coXCJjb250YW50aVwiKTtcbiAgICAgICAgICBsZXQgdW5jb25maXJtZWRPcmRlcnMgPSB0aGlzLm9yZGVyc1NlcnZpY2UuZ2V0VW5jb25maXJtZWRPcmRlcih0aGlzLnVzZXIucHJlZml4LCB0aGlzLnVzZXIucGhvbmUpLnN1YnNjcmliZShkYXRhID0+e1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJVTkNPTkZJUk1FVCBPUkRFUlMgPSBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgICAgIGlmKGRhdGEuY291bnQgPT0gJzAnKXtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpcm0oKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHRoaXMuY2FudENvbmZpcm0oZGF0YS5jb3VudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIFxuICAgICAgICBjYXNlIFwicGF5cGFsXCI6XG4gICAgICAgICAgY29uc29sZS5sb2coXCJwYXlwYWxcIilcbiAgICAgICAgICBjb25zdCBub3cyID0gbmV3IERhdGUoKTtcbiAgICAgICAgICBsZXQgdXNlclNlc3Npb24yID0gIHRoaXMucGFyc2VKd3QobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhdXRoVG9rZW5cIikpO1xuICAgICAgICAgIGxldCBvcmRlcjIgPSBuZXcgT3JkZXIoKTtcbiAgICAgICAgICBvcmRlcjIuY2l0eSA9IHRoaXMudXNlci5jaXR5O1xuICAgICAgICAgIG9yZGVyMi5jb3VudHJ5ID0gdGhpcy51c2VyLmNvdW50cnk7XG4gICAgICAgICAgb3JkZXIyLmRhdGVPcmRlcmVkID0gU3RyaW5nKG5vdzIpO1xuICAgICAgICAgIG9yZGVyMi5pZCA9ICcxMjMxMjMxMjMnO1xuICAgICAgICAgIG9yZGVyMi5waG9uZSA9IHRoaXMudXNlci5waG9uZTtcbiAgICAgICAgICBvcmRlcjIuc2hpcHBpbmdBZGRyZXNzMSA9IHRoaXMudXNlci5hZGRyZXNzMTtcbiAgICAgICAgICBvcmRlcjIudG90YWxQcmljZSA9IFN0cmluZyh0aGlzLmNhcnQuZ2V0VG90YWxQcmljZSgpKTtcbiAgICAgICAgICBvcmRlcjIuemlwID0gdGhpcy51c2VyLnBvc3RhbENvZGU7XG4gICAgICAgICAgb3JkZXIyLnVzZXIgPSB1c2VyU2Vzc2lvbjIudXNlcklkO1xuICAgICAgICAgIG9yZGVyMi5pZCA9IG51bGw7XG4gICAgICAgICAgb3JkZXIyLmVtYWlsID0gdGhpcy51c2VyLmVtYWlsO1xuICAgICAgICAgIG9yZGVyMi5wYXltZW50T3B0aW9uID0gXCJQYXlwYWxcIjtcbiAgICAgICAgICBvcmRlcjIuY29uZmlybWVkID0gdHJ1ZTtcbiAgICAgICAgICBcbiAgICAgICAgICBsZXQgdmFyaWFudHMyID0gIHRoaXMuY2FydC5nZXRBbGxWYXJpYW50cygpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwidmFyaWFudHMgPSBcIiArIEpTT04uc3RyaW5naWZ5KHZhcmlhbnRzMikpO1xuICAgICAgICAgIG9yZGVyMi5vcmRlckl0ZW1zID0gdGhpcy5jYXJ0LmdldEFsbFZhcmlhbnRzKCk7XG4gIFxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwib3JkZXJcIiwgSlNPTi5zdHJpbmdpZnkob3JkZXIyKSk7XG5cblxuICAgICAgICAgLy8gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvcGF5cGFsJ10pO1xuICAgICAgICAgdGhpcy5jaGVja291dC5wYXlQYWwodGhpcy5jYXJ0LCBvcmRlcjIpLnN1YnNjcmliZSgoZGF0YSk9PntcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRhdGEucmVkaXJlY3RcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYodGhpcy5jaGVja1NlbGVjdGVkT3B0aW9ucygpKXtcbiAgICAgIC8vdGhpcy5tYWtlUGF5bWVudCh0aGlzLmNhcnQuZ2V0VG90YWxQcmljZSgpKTtcbiAgIC8vICAgYXdhaXQgdGhpcy5rYy5wYXkodGhpcy5jYXJ0LmdldFRvdGFsUHJpY2UoKSk7XG4gICAgXG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IGZhbHNlO1xuICAgIH1lbHNle1xuICAgICAgY29uc29sZS5sb2coXCJlcnJvciBpbiB0aGUgc2hpcHBpbmcgYWRkcmVzc1wiKTtcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSB0cnVlO1xuICAgIH1cblxuICB9XG5cbiAgY2FudENvbmZpcm0obiA6IHN0cmluZykgOiB2b2lke1xuICAgIHRoaXMuY29uZmlybWF0aW9uU2VydmljZS5jb25maXJtKHtcblxuICAgICAgbWVzc2FnZTogJ0NpIHNvbm8gYXR0dWFsbWVudGUgJyArIG4gKyAnIG9yZGluaSBub24gY29uZmVybWF0aS48YnI+Tm9uIHB1b2kgcmVnaXN0cmFyZSBudW92aSBvcmRpbmkgZmluY2jDqCBoYWkgYWx0cmkgb3JkaW5pIHJlZ2lzdHJhdGkgZSBub24gY29uZmVybWF0aSB0cmFtaXRlIHNtcy48YnI+PC9iPlB1b2kgY29uZmVybWFyZS9hbm51bGxhcmUgZ2xpIG9yZGluaSBhbmRhbmRvIHN1IDxhIGhyZWY9XFwnaHR0cHM6Ly9jYXRhbGRvcHJvZHVjdGlvbi5oZXJva3VhcHAuY29tLyMvbXlPcmRlcnNcXCc+SSBtaWVpIG9yZGluaTwvYT4nICxcbiAgICAgIGFjY2VwdDogKCkgPT4ge1xuICAgICAgICB0aGlzLm1zZ3MgPSBbe3NldmVyaXR5OidpbmZvJywgc3VtbWFyeTonUmVqZWN0ZWQnLCBkZXRhaWw6J0ltcG9zc2liaWxlIHJlZ2lzdHJhcmUgbFxcJ29yZGluZSd9XTtcbiAgICAgIH0sXG4gICAgICByZWplY3Q6ICgpID0+IHtcbiAgICAgICAgICB0aGlzLm1zZ3MgPSBbe3NldmVyaXR5OidpbmZvJywgc3VtbWFyeTonUmVqZWN0ZWQnLCBkZXRhaWw6J0ltcG9zc2liaWxlIHJlZ2lzdHJhcmUgbFxcJ29yZGluZSd9XTtcbiAgICAgIH1cbiAgICAgICAgXG4gIH0pO1xufVxuXG4gIGNvbmZpcm0oKSA6IHZvaWR7XG5cblxuXG4gICAgdGhpcy5jb25maXJtYXRpb25TZXJ2aWNlLmNvbmZpcm0oe1xuICAgICAgbWVzc2FnZTogJ0NsaWNjYW5kbyBzdSBjb25mZXJtYSB0aSBpbXBlZ25pIGEgcGFnYXJlIGxcXCdvcmRpbmUuIDxicj4gPGI+UmljZXZlcmFpIHVuIHNtcyBhbGxcXCdudW1lcm8gJyArIHRoaXMudXNlci5waG9uZSArICc8YnI+UGVyIGNvbmZlcm1hcmUgbFxcJ29yZGluZSBkb3ZyYWkgcmlzcG9uZGVyZSBhbGxcXCdzbXMgaW52aWFuZG8gXFwnU0lcXCcgPC9iPicsXG4gICAgICBhY2NlcHQ6ICgpID0+IHtcbiAgICAgICAgICB0aGlzLm1zZ3MgPSBbe3NldmVyaXR5OidpbmZvJywgc3VtbWFyeTonQ29uZmlybWVkJywgZGV0YWlsOidSaWNvcmRhdGkgY2hlIHBlciBjb25mZXJtYXJlIGxcXCdvcmRpbmUgZG92cmFpIHJpc3BvbmRlcmUgaW52aWFuZG8gXFwnU0lcXCcgYWxsXFwnc21zIHJpY2V2dXRvISd9XTtcblxuXG4gICAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcblxuICAgICAgICAgIGxldCBvcmRlcjogT3JkZXIgPSBuZXcgT3JkZXI7XG4gICAgICAgICAgb3JkZXIuY2l0eSA9IHRoaXMudXNlci5jaXR5O1xuICAgICAgICAgIG9yZGVyLmNvdW50cnkgPSB0aGlzLnVzZXIuY291bnRyeTtcbiAgICAgICAgICBvcmRlci5kYXRlT3JkZXJlZCA9IFN0cmluZyhub3cpO1xuICAgICAgICAgIG9yZGVyLmlkID0gJzEyMzEyMzEyMyc7XG4gICAgICAgICAgb3JkZXIucGhvbmUgPSB0aGlzLnVzZXIucGhvbmU7XG4gICAgICAgICAgb3JkZXIucHJlZml4ID0gdGhpcy51c2VyLnByZWZpeDtcbiAgICAgICAgICBvcmRlci5zaGlwcGluZ0FkZHJlc3MxID0gdGhpcy51c2VyLmFkZHJlc3MxO1xuICAgICAgICAgIG9yZGVyLnRvdGFsUHJpY2UgPSBTdHJpbmcodGhpcy5jYXJ0LmdldFRvdGFsUHJpY2UoKSk7XG4gICAgICAgICAgb3JkZXIuemlwID0gdGhpcy51c2VyLnBvc3RhbENvZGU7XG4gICAgICAgICAgb3JkZXIuZW1haWwgPSB0aGlzLmRhdGEuZW1haWw7XG4gICAgICAgICAgb3JkZXIudXNlciA9IHRoaXMuZGF0YS51c2VySWQ7XG4gICAgICAgICAgb3JkZXIuaWQgPSBudWxsO1xuICAgICAgICAgIG9yZGVyLmNvbmZpcm1lZCA9IGZhbHNlO1xuICAgICAgICAgIG9yZGVyLnBheW1lbnRPcHRpb24gPSBcIkNvbnRhbnRpXCI7XG4gICAgICAgICAgbGV0IHZhcmlhbnRzID0gIHRoaXMuY2FydC5nZXRBbGxWYXJpYW50cygpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwidmFyaWFudHMgPSBcIiArIEpTT04uc3RyaW5naWZ5KHZhcmlhbnRzKSk7XG4gICAgICAgICAgb3JkZXIub3JkZXJJdGVtcyA9IHRoaXMuY2FydC5nZXRBbGxWYXJpYW50cygpO1xuICBcbiAgXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJvcmRlclwiLCBKU09OLnN0cmluZ2lmeShvcmRlcikpO1xuXG4gICAgICAgICAgdGhpcy5vcmRlcnNTZXJ2aWNlLmNyZWF0ZU5ld09yZGVyKG9yZGVyLCB0aGlzLnVzZXIuZW1haWwsIHRoaXMudXNlci5wcmVmaXgpLnN1YnNjcmliZSgoZGF0YSkgPT57XG5cblxuICAgICBcblxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkkgYW0gY3JlYXRpbmcgdGhpcyBuZXcgb3JkZXI6IFwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhOiBcIiArIGRhdGEpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleGFtcGxlTW9kYWxMYWJlbFwiKS5pbm5lclRleHQ9XCJZb3VyIG9yZGVyIG51bWJlciBpczogXCIgKyBkYXRhLl9pZDtcblxuICAgICAgICAgIC8vICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKClcblxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiY2FydEJ5THVjYVwiKTtcbiAgICAgICAgICB0aGlzLmNhcnRTZXJ2aWNlLmdldENhcnQoKTtcbiAgICAgICAgICB0aGlzLmNhcnQuZW1wdHlDYXJ0KCk7XG5cbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL29yZGVycy8nICsgZGF0YS5faWRdKTtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuYWRkKHtcbiAgICAgICAgICAgICAgc2V2ZXJpdHk6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgc3VtbWFyeTogJ1N1Y2NlcycsXG4gICAgICAgICAgICAgIGRldGFpbDogYFN1Y2Nlc2Z1bCB0cmFuc2FjdGlvbiFgXG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICB0aGlzLmNoZWNrb3V0LnNlbmRTbXMoZGF0YS5faWQsIGRhdGEucGhvbmUsIHRoaXMudXNlci5wcmVmaXgpLnN1YnNjcmliZSgoZGF0YSkgPT57XG5cbiAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5hZGQoe1xuICAgICAgICAgICAgICAgIHNldmVyaXR5OiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgc3VtbWFyeTogJ1N1Y2NlcycsXG4gICAgICAgICAgICAgICAgZGV0YWlsOiBgU01TIGludmlhdG8hYFxuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSlcblxuICAgICAgfSxcbiAgICAgIHJlamVjdDogKCkgPT4ge1xuICAgICAgICAgIHRoaXMubXNncyA9IFt7c2V2ZXJpdHk6J2luZm8nLCBzdW1tYXJ5OidSZWplY3RlZCcsIGRldGFpbDonTFxcJ29yZGluZSBub24gw6ggc3RhdG8gY29uZmVybWF0byEnfV07XG4gICAgICB9XG4gIH0pO1xuICB9XG5cbiAgY2hlY2tTZWxlY3RlZE9wdGlvbnMoKSA6IHN0cmluZ3tcblxuXG4gICAgcmV0dXJuICg8SFRNTElucHV0RWxlbWVudD4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cIm9wdHJhZGlvXCJdOmNoZWNrZWQnKSkudmFsdWU7XG5cbiAgfVxuIFxuICBnZXQgY2hlY2tvdXRGb3JtKCkge1xuICAgIHJldHVybiB0aGlzLmNoZWNrb3V0Rm9ybUdyb3VwLmNvbnRyb2xzO1xuICB9XG5cbiAgbWFrZVBheW1lbnQoYW1vdW50OiBudW1iZXIpIHtcblxuXG4gICAgbGV0IHVzZXJTZXNzaW9uID0gIHRoaXMucGFyc2VKd3QobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhdXRoVG9rZW5cIikpO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2UtbWFzaycpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cblxuICAgIGNvbnN0IHBheW1lbnRIYW5kbGVyID0gKDxhbnk+d2luZG93KS5TdHJpcGVDaGVja291dC5jb25maWd1cmUoe1xuICAgICAga2V5OiAncGtfbGl2ZV81MUxZVUNHREV5aVgzZTNQbFo2WVh6TVRNU3ZHa2NDUHJieFk3SFUzTjRQSGtKZ28wMGVYbVV4VjY1ZDgxTGVTa3MzWkNrcjRqWTdsaUpkeklQTW9INlJOWjAwcW1QdlFKTVcnLFxuICAgICAgbG9jYWxlOiAnYXV0bycsXG4gICAgICBjdXJyZW5jeTogJ2V1cicsXG4gICAgICB0b2tlbjogZnVuY3Rpb24gKHN0cmlwZVRva2VuOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5sb2coc3RyaXBlVG9rZW4pO1xuICAgICAgICBwYXltZW50c3RyaXBlKHN0cmlwZVRva2VuKTtcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjb25zdCBwYXltZW50c3RyaXBlID0gKHN0cmlwZVRva2VuOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbFwiKSBhcyBIVE1MRWxlbWVudCB8IG51bGxcbiAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xuICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlTW9kYWxcIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlLW1hc2snKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH0pO1xuXG4gICAgICB0aGlzLmNoZWNrb3V0Lm1ha2VQYXltZW50KHN0cmlwZVRva2VuLCBhbW91bnQpLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlTW9kYWxGb290ZXJcIikuc3R5bGUuZGlzcGxheT1cImJsb2NrXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZGluZ1NwaW5uZXJcIikuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtcblxuXG4gICAgICAgXG5cbiAgICBcblxuXG5cblxuICAgICAgICBpZiAoZGF0YS5kYXRhID09PSBcInN1Y2Nlc3NcIikge1xuXG4gICAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcblxuICAgICAgICAgIGxldCBvcmRlcjogT3JkZXIgPSBuZXcgT3JkZXI7XG4gICAgICAgICAgb3JkZXIuY2l0eSA9IHRoaXMudXNlci5jaXR5O1xuICAgICAgICAgIG9yZGVyLmNvdW50cnkgPSB0aGlzLnVzZXIuY291bnRyeTtcbiAgICAgICAgICBvcmRlci5kYXRlT3JkZXJlZCA9IFN0cmluZyhub3cpO1xuICAgICAgICAgIG9yZGVyLmlkID0gJzEyMzEyMzEyMyc7XG4gICAgICAgICAgb3JkZXIucGhvbmUgPSB0aGlzLnVzZXIucGhvbmU7XG4gICAgICAgICAgb3JkZXIuc2hpcHBpbmdBZGRyZXNzMSA9IHRoaXMudXNlci5hZGRyZXNzMTtcbiAgICAgICAgICBvcmRlci50b3RhbFByaWNlID0gU3RyaW5nKHRoaXMuY2FydC5nZXRUb3RhbFByaWNlKCkpO1xuICAgICAgICAgIG9yZGVyLnppcCA9IHRoaXMudXNlci5wb3N0YWxDb2RlO1xuICAgICAgICAgIG9yZGVyLmVtYWlsID0gdGhpcy5kYXRhLmVtYWlsO1xuICAgICAgICAgIG9yZGVyLnVzZXIgPSB0aGlzLmRhdGEudXNlcklkO1xuICAgICAgICAgIG9yZGVyLmlkID0gbnVsbDtcbiAgICAgICAgICBvcmRlci5jb25maXJtZWQgPSB0cnVlO1xuICAgICAgICAgIG9yZGVyLnBheW1lbnRPcHRpb24gPSBcIkNhcnRhIGRpIGNyZWRpdG9cIjtcbiAgICAgICAgICBsZXQgdmFyaWFudHMgPSAgdGhpcy5jYXJ0LmdldEFsbFZhcmlhbnRzKCk7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJ2YXJpYW50cyA9IFwiICsgSlNPTi5zdHJpbmdpZnkodmFyaWFudHMpKTtcbiAgICAgICAgICBvcmRlci5vcmRlckl0ZW1zID0gdGhpcy5jYXJ0LmdldEFsbFZhcmlhbnRzKCk7XG4gIFxuICBcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm9yZGVyXCIsIEpTT04uc3RyaW5naWZ5KG9yZGVyKSk7XG5cbiAgICAgICAgICB0aGlzLnN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuZmFpbHVyZSA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMub3JkZXJzU2VydmljZS5jcmVhdGVOZXdPcmRlcihvcmRlciwgdGhpcy51c2VyLmVtYWlsLCB0aGlzLnVzZXIucHJlZml4KS5zdWJzY3JpYmUoKGRhdGEpID0+e1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkkgYW0gY3JlYXRpbmcgdGhpcyBuZXcgb3JkZXI6IFwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhOiBcIiArIGRhdGEpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleGFtcGxlTW9kYWxMYWJlbFwiKS5pbm5lclRleHQ9XCJZb3VyIG9yZGVyIG51bWJlciBpczogXCIgKyBkYXRhLl9pZDtcblxuICAgICAgICAgIC8vICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKClcblxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiY2FydEJ5THVjYVwiKTtcbiAgICAgICAgICB0aGlzLmNhcnRTZXJ2aWNlLmdldENhcnQoKTtcbiAgICAgICAgICB0aGlzLmNhcnQuZW1wdHlDYXJ0KCk7XG5cbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL29yZGVycy8nICsgZGF0YS5faWRdKTtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuYWRkKHtcbiAgICAgICAgICAgICAgc2V2ZXJpdHk6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgc3VtbWFyeTogJ1N1Y2NlcycsXG4gICAgICAgICAgICAgIGRldGFpbDogYFN1Y2Nlc2Z1bCB0cmFuc2FjdGlvbiFgXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KVxuXG5cbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Y2Nlc3NcIikuc3R5bGUuZGlzcGxheT1cImJsb2NrXCI7XG5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLmZhaWx1cmUgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuc3VjY2VzcyA9IGZhbHNlO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmFpbGVkXCIpLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcGF5bWVudEhhbmRsZXIub3Blbih7XG4gICAgICBuYW1lOiAnQ2F0YWxkbyBTdG9yZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ1BsZWFzZSBmaWxsIHlvdXIgYmlsbGluZyBpbmZvcm1hdGlvbnMnLFxuICAgICAgYW1vdW50OiBhbW91bnQgKiAxMDAsXG4gICAgfSk7XG5cbiAgfVxuXG4gIGludm9rZVN0cmlwZSgpIHtcbiAgICBpZiAoIXdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RyaXBlLXNjcmlwdCcpKSB7XG4gICAgICBjb25zdCBzY3JpcHQgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICBzY3JpcHQuaWQgPSAnc3RyaXBlLXNjcmlwdCc7XG4gICAgICBzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgICAgc2NyaXB0LnNyYyA9ICdodHRwczovL2NoZWNrb3V0LnN0cmlwZS5jb20vY2hlY2tvdXQuanMnO1xuICAgICAgc2NyaXB0Lm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5wYXltZW50SGFuZGxlciA9ICg8YW55PndpbmRvdykuU3RyaXBlQ2hlY2tvdXQuY29uZmlndXJlKHtcbiAgICAgICAgICBrZXk6ICdwa19saXZlXzUxTFlVQ0dERXlpWDNlM1BsWjZZWHpNVE1TdkdrY0NQcmJ4WTdIVTNONFBIa0pnbzAwZVhtVXhWNjVkODFMZVNrczNaQ2tyNGpZN2xpSmR6SVBNb0g2Uk5aMDBxbVB2UUpNVycsXG4gICAgICAgICAgbG9jYWxlOiAnYXV0bycsXG4gICAgICAgICAgdG9rZW46IGZ1bmN0aW9uIChzdHJpcGVUb2tlbjogYW55KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdHJpcGVUb2tlbik7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIH1cbiAgfVxuXG59XG4iLCI8c2NyaXB0IHNyYz1cImh0dHBzOi8vanMuc3RyaXBlLmNvbS92My9cIiBkZWZlcj48L3NjcmlwdD5cbjxkaXYgY2xhc3M9XCJwLTJcIj5cbiAgPHAtY29uZmlybURpYWxvZyAjY2QgIGhlYWRlcj1cIkNvbmZpcm1hdGlvblwiIGljb249XCJwaSBwaS1leGNsYW1hdGlvbi10cmlhbmdsZVwiPlxuICAgIDxuZy10ZW1wbGF0ZSBwVGVtcGxhdGU9XCJoZWFkZXJcIj5cbiAgICAgIDxoMz5Db25mZXJtYSBvcmRpbmU8L2gzPlxuICA8L25nLXRlbXBsYXRlPlxuXG4gIDxuZy10ZW1wbGF0ZSBwVGVtcGxhdGU9XCJmb290ZXJcIj5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBwQnV0dG9uIGljb249XCJwaSBwaS10aW1lc1wiIGxhYmVsPVwiQW5udWxsYVwiIChjbGljayk9XCJjZC5yZWplY3QoKVwiPjwvYnV0dG9uPlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHBCdXR0b24gaWNvbj1cInBpIHBpLWNoZWNrXCIgbGFiZWw9XCJDb25mZXJtYVwiIChjbGljayk9XCJjZC5hY2NlcHQoKVwiPjwvYnV0dG9uPlxuPC9uZy10ZW1wbGF0ZT5cbiAgPC9wLWNvbmZpcm1EaWFsb2c+XG5cbjxkaXYgY2xhc3M9XCJjaGVja291dC1wYWdlIHBiLTVcIj5cbiAgICA8ZGl2PlxuICAgICAgICA8cC1idXR0b24gbGFiZWw9XCJUb3JuYSBhbCBjYXJyZWxsb1wiIGljb249XCJwaSBwaS1hcnJvdy1sZWZ0XCIgKG9uQ2xpY2spPVwiYmFja1RvQ2FydCgpXCI+PC9wLWJ1dHRvbj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cImdyaWQgcC0yXCIgc3R5bGU9XCJ3aWR0aDogMTAwJTsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XCI+XG5cbiAgPGRpdiBjbGFzcz1cInJvd1wiIHN0eWxlPVwianVzdGlmeS1jb250ZW50OiBjZW50ZXI7IHdpZHRoOiBpbmhlcml0OyBcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIGNvbC1tZC03IGNvbC1sZy03IHAtMlwiIHN0eWxlPVwiXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc3VyZmFjZS0yMDApO1wiPlxuICAgIFxuICAgICAgPGgzIHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyOyBtYXJnaW4tYm90dG9tOiAzMHB4O1wiPlNlbGV6aW9uYSB1biBtZXRvZG8gZGkgcGFnYW1lbnRvPC9oMz5cbiAgICAgIDxocj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC04XCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIGlkPVwicmFkaW8xXCIgbmFtZT1cIm9wdHJhZGlvXCIgdmFsdWU9XCJjcmVkaXRcIiBjaGVja2VkPlxuICAgICAgICAgIENBUlRFIERJIENSRURJVE9cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNFwiPlxuICAgICAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj4gICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCIgIHN0eWxlPVwibWluLXdpZHRoOiA1MHB4O1wiPjxsaSBzdHlsZT1cImRpc3BsYXk6IGlubGluZTtcIj48aW1nIHNyYz1cImFzc2V0cy9tYXN0ZXJjYXJkLnBuZ1wiICBjbGFzcz1cImltZy1mbHVpZFwiIGFsdD1cIlJlc3BvbnNpdmUgaW1hZ2VcIj48L2xpPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCIgIHN0eWxlPVwibWluLXdpZHRoOiA1MHB4O1wiPjxsaSBzdHlsZT1cImRpc3BsYXk6IGlubGluZTtcIj48aW1nIHNyYz0nYXNzZXRzL3Zpc2EucG5nJyAgY2xhc3M9XCJpbWctZmx1aWRcIiBhbHQ9XCJSZXNwb25zaXZlIGltYWdlXCI+PC9saT48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiICBzdHlsZT1cIm1pbi13aWR0aDogNTBweDtcIj48bGkgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmU7XCI+PGltZyBzcmM9J2Fzc2V0cy9hbWVyaWNhbkV4cHJlc3MucG5nJyAgY2xhc3M9XCJpbWctZmx1aWRcIiBhbHQ9XCJSZXNwb25zaXZlIGltYWdlXCI+PC9saT48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiICBzdHlsZT1cIm1pbi13aWR0aDogNTBweDtcIj48bGkgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmU7XCI+PGltZyBzcmM9J2Fzc2V0cy9tYWVzdHJvLnBuZycgIGNsYXNzPVwiaW1nLWZsdWlkXCIgYWx0PVwiUmVzcG9uc2l2ZSBpbWFnZVwiPjwvbGk+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIiAgc3R5bGU9XCJtaW4td2lkdGg6IDUwcHg7XCI+PGxpIHN0eWxlPVwiZGlzcGxheTogaW5saW5lO1wiPjxpbWcgc3JjPSdhc3NldHMvcG9zdGVwYXkucG5nJyAgY2xhc3M9XCJpbWctZmx1aWRcIiBhbHQ9XCJSZXNwb25zaXZlIGltYWdlXCI+PC9saT48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8aHI+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtOFwiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiBpZD1cInJhZGlvMlwiIG5hbWU9XCJvcHRyYWRpb1wiIHZhbHVlPVwicmF0ZVwiIGNoZWNrZWQ+XG4gICAgICAgICAgUEFHQU1FTlRPIEEgUkFURVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00XCI+XG4gICAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPiAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIiAgc3R5bGU9XCJtaW4td2lkdGg6IDUwcHg7XCI+PGxpIHN0eWxlPVwiZGlzcGxheTogaW5saW5lO1wiPjxpbWcgc3JjPSdhc3NldHMva2xhcm5hLnBuZycgIGNsYXNzPVwiaW1nLWZsdWlkXCIgYWx0PVwiUmVzcG9uc2l2ZSBpbWFnZVwiPjwvbGk+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIiAgc3R5bGU9XCJtaW4td2lkdGg6IDUwcHg7XCI+PGxpIHN0eWxlPVwiZGlzcGxheTogaW5saW5lO1wiPjxpbWcgc3JjPVwiYXNzZXRzL21hc3RlcmNhcmQucG5nXCIgIGNsYXNzPVwiaW1nLWZsdWlkXCIgYWx0PVwiUmVzcG9uc2l2ZSBpbWFnZVwiPjwvbGk+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIiAgc3R5bGU9XCJtaW4td2lkdGg6IDUwcHg7XCI+PGxpIHN0eWxlPVwiZGlzcGxheTogaW5saW5lO1wiPjxpbWcgc3JjPSdhc3NldHMvdmlzYS5wbmcnICBjbGFzcz1cImltZy1mbHVpZFwiIGFsdD1cIlJlc3BvbnNpdmUgaW1hZ2VcIj48L2xpPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCIgIHN0eWxlPVwibWluLXdpZHRoOiA1MHB4O1wiPjxsaSBzdHlsZT1cImRpc3BsYXk6IGlubGluZTtcIj48aW1nIHNyYz0nYXNzZXRzL2FtZXJpY2FuRXhwcmVzcy5wbmcnICBjbGFzcz1cImltZy1mbHVpZFwiIGFsdD1cIlJlc3BvbnNpdmUgaW1hZ2VcIj48L2xpPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCIgIHN0eWxlPVwibWluLXdpZHRoOiA1MHB4O1wiPjxsaSBzdHlsZT1cImRpc3BsYXk6IGlubGluZTtcIj48aW1nIHNyYz0nYXNzZXRzL21hZXN0cm8ucG5nJyAgY2xhc3M9XCJpbWctZmx1aWRcIiBhbHQ9XCJSZXNwb25zaXZlIGltYWdlXCI+PC9saT48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiICBzdHlsZT1cIm1pbi13aWR0aDogNTBweDtcIj48bGkgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmU7XCI+PGltZyBzcmM9J2Fzc2V0cy9wb3N0ZXBheS5wbmcnICBjbGFzcz1cImltZy1mbHVpZFwiIGFsdD1cIlJlc3BvbnNpdmUgaW1hZ2VcIj48L2xpPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGhyPlxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLThcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgaWQ9XCJyYWRpbzNcIiBuYW1lPVwib3B0cmFkaW9cIiB2YWx1ZT1cInBheXBhbFwiIGNoZWNrZWQ+XG4gICAgICAgICAgUEFZUEFMXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTRcIj5cbiAgICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+ICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiICBzdHlsZT1cIm1pbi13aWR0aDogNTBweDtcIj48bGkgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmU7XCI+PGltZyBzcmM9J2Fzc2V0cy9wYXlwYWwucG5nJyAgY2xhc3M9XCJpbWctZmx1aWRcIiBhbHQ9XCJSZXNwb25zaXZlIGltYWdlXCI+PC9saT48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxocj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiBpZD1cInJhZGlvNFwiIG5hbWU9XCJvcHRyYWRpb1wiIHZhbHVlPVwiY29udGFudGlcIiBjaGVja2VkPlxuICAgICAgICAgIFBBR0EgSU4gQ09OVEFOVEkgQUxMQSBDT05TRUdOQVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICBcbiAgICAgIDxocj5cbiAgICA8L2Rpdj5cbiAgICBcbiAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIGNvbC1tZC01IGNvbC1sZy01XCI+XG5cbiAgICA8ZGl2IGlkPVwicGFnZS1tYXNrXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPjwvZGl2PlxuXG4gICAgICA8IS0tIE1vZGFsIC0tPlxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsIGZhZGUgYm9yZGVyIGJvcmRlci1pbmZvXCIgaWQ9XCJleGFtcGxlTW9kYWxcIiB0YWJpbmRleD1cIi0xXCIgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZU1vZGFsTGFiZWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZyBib3JkZXIgYm9yZGVyLWluZm8gYm9yZGVyLTQgcm91bmRlZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWF1dG8gXCIgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJsb2FkaW5nU3Bpbm5lclwiIGNsYXNzPVwic3Bpbm5lci1ib3JkZXIgdGV4dC1wcmltYXJ5XCIgcm9sZT1cInN0YXR1c1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmlzdWFsbHktaGlkZGVuXCI+TG9hZGluZy4uLjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+PGg1IGNsYXNzPVwibW9kYWwtdGl0bGVcIiBpZD1cImV4YW1wbGVNb2RhbExhYmVsXCI+V2UgYXJlIHZhbGlkYXRpbmcgeW91ciB0cmFuc2FjdGlvbiwgcGxlYXNlIHdhaXQ8L2g1PjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJjbG9zZU1vZGFsXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuLWNsb3NlXCIgZGF0YS1icy1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj48L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cIm1vZGFsQm9keVwiIGNsYXNzPVwibW9kYWwtYm9keVwiPlxuICAgICAgICAgICAgICA8ZGl2IGlkPVwic3VjY2Vzc1wiIGNsYXNzPVwidGV4dC1zdWNjZXNzXCIgc3R5bGU9XCJmb250LXdlaWdodDogODAwOyBkaXNwbGF5OiBub25lO1wiPiBUcmFuc2FjdGlvbiBzdWNjZXNmdWxsITwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGlkPVwiZmFpbGVkXCIgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiIHN0eWxlPVwiZm9udC13ZWlnaHQ6IDgwMDsgZGlzcGxheTogbm9uZTtcIj4gVHJhbnNhY3Rpb24gZmFpbGVkITwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cImNsb3NlTW9kYWxGb290ZXJcIiBjbGFzcz1cInRleHQtc2Vjb25kYXJ5XCIgc3R5bGU9XCJmb250LXNpemU6c21hbGxlcjsgZGlzcGxheTogbm9uZTtcIj4gTm93IHlvdSBjYW4gY2xvc2UgdGhpcyBtb2RhbDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8b3JkZXJzLW9yZGVyLXN1bW1hcnkgW2lzQ2hlY2tPdXRdPVwidHJ1ZVwiPjwvb3JkZXJzLW9yZGVyLXN1bW1hcnk+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2hlY2tvdXQtYnV0dG9uXCI+XG4gICAgICAgIDxwLWJ1dHRvbiAgW2xvYWRpbmddPVwibG9hZGluZ1wiICBsYWJlbD1cIlByb2NlZGlcIiAob25DbGljayk9XCJwbGFjZU9yZGVyKClcIj48L3AtYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gXG5cbiAgICAgIDxkaXYgY2xhc3M9XCJlcnJvciBtdC0yXCIgc3R5bGU9XCJmb250LXNpemU6IDI5cHg7IGNvbG9yOnJlZDsgZm9udC13ZWlnaHQ6IDgwMDtcIiAqbmdJZj1cImVycm9yTWVzc2FnZVwiID5QbGVhc2UgZmlsbCBhbGwgdGhlIG1hbmRhdG9yeSBmaWVsZHM6PC9kaXY+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaSBzdHlsZT1cImZvbnQtc2l6ZTogMjBweDsgY29sb3I6cmVkOyBmb250LXdlaWdodDogNTAwO1wiICAqbmdGb3I9XCJsZXQgZXJyb3Igb2YgZXJyb3JtZXNzYWdlXCI+XG4gICAgICAgICAgICB7e2Vycm9yfX1cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG5cblxuXG4gICAgPC9kaXY+XG5cbiAgPC9kaXY+XG4gIDwvZGl2PlxuICA8cC1tZXNzYWdlcyBbdmFsdWVdPVwibXNnc1wiPjwvcC1tZXNzYWdlcz5cbjwvZGl2PlxuIl19