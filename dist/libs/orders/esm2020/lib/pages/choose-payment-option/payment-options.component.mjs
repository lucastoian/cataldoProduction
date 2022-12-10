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
                let userSession = this.parseJwt(sessionStorage.getItem("authToken"));
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
                    }
                });
                break;
            case "paypal":
                console.log("paypal");
                const now2 = new Date();
                let userSession2 = this.parseJwt(sessionStorage.getItem("authToken"));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1vcHRpb25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvb3JkZXJzL3NyYy9saWIvcGFnZXMvY2hvb3NlLXBheW1lbnQtb3B0aW9uL3BheW1lbnQtb3B0aW9ucy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL29yZGVycy9zcmMvbGliL3BhZ2VzL2Nob29zZS1wYXltZW50LW9wdGlvbi9wYXltZW50LW9wdGlvbnMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsTUFBTTtBQUNOLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBYSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFHLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQTtBQUV2RCxPQUFPLEVBQVcsY0FBYyxFQUFFLGFBQWEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNyRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFMUQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDN0MsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXpDLE9BQU8sRUFB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R2YsY0FBYztjQWQxQixTQUFTOzJCQUNFLGlCQUFpQixVQUVuQixDQUFDOzs7Ozs7O0lBT1AsQ0FBQyxhQUNRLENBQUMsZUFBZSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXNlcjIzIH0gZnJvbSAnLi8uLi8uLi9tb2RlbHMvdXNlcjIzJztcbi8qKiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgIFVzZXJzU2VydmljZSB9IGZyb20gJ0Blc2hvcC1mcm9udGVuZC91c2Vycyc7XG5pbXBvcnQgeyBLbGFybmFDb21wb25lbnQgfSBmcm9tICdAZXNob3AtZnJvbnRlbmQvdXNlcnMnXG5cbmltcG9ydCB7IE1lc3NhZ2UsIE1lc3NhZ2VTZXJ2aWNlLCBQcmltZU5HQ29uZmlnIH0gZnJvbSAncHJpbWVuZy9hcGknO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT3JkZXJzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29yZGVycy5zZXJ2aWNlJztcbmltcG9ydCB7IENhcnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2FydC5zZXJ2aWNlJztcbmltcG9ydCB7IE9yZGVySXRlbSB9IGZyb20gJy4uLy4uL21vZGVscy9vcmRlci1pdGVtJztcbmltcG9ydCB7IE9yZGVyIH0gZnJvbSAnLi4vLi4vbW9kZWxzL29yZGVyJztcbmltcG9ydCB7IENoZWNrb3V0U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NoZWNrb3V0LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJ0Blc2hvcC1mcm9udGVuZC91c2Vycyc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3VzZXInO1xuaW1wb3J0IHtDb25maXJtRGlhbG9nTW9kdWxlfSBmcm9tICdwcmltZW5nL2NvbmZpcm1kaWFsb2cnO1xuaW1wb3J0IHtDb25maXJtYXRpb25TZXJ2aWNlfSBmcm9tICdwcmltZW5nL2FwaSc7XG5cbmltcG9ydCB7TWVzc2FnZXNNb2R1bGV9IGZyb20gJ3ByaW1lbmcvbWVzc2FnZXMnO1xuXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGF5bWVudC1vcHRpb25zJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BheW1lbnQtb3B0aW9ucy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogW2AjcGFnZS1tYXNrIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgfWBdLFxuICBwcm92aWRlcnM6IFtLbGFybmFDb21wb25lbnRdXG5cbn0pXG5leHBvcnQgY2xhc3MgUGF5bWVudE9wdGlvbnMgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGVycm9yTWVzc2FnZTogYm9vbGVhbjtcbiAgZXJyb3JtZXNzYWdlOiBTdHJpbmdbXTtcbiAgbXNnczogTWVzc2FnZVtdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHVzZXJzU2VydmljZTogVXNlcnNTZXJ2aWNlLFxuICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuICAgIHByaXZhdGUgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgb3JkZXJzU2VydmljZTogT3JkZXJzU2VydmljZSxcbiAgICBwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSxcbiAgICBwcml2YXRlIGNoZWNrb3V0OiBDaGVja291dFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBrYyA6IEtsYXJuYUNvbXBvbmVudCxcblxuICAgIHByaXZhdGUgY2FydDogQ2FydCxcbiAgICBwcml2YXRlIGNvbmZpcm1hdGlvblNlcnZpY2U6IENvbmZpcm1hdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBwcmltZW5nQ29uZmlnOiBQcmltZU5HQ29uZmlnXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHRoaXMudXNlciA9IG5ldyBVc2VyO1xuICAgICAgICAgICAgICAgIHRoaXMucHJpbWVuZ0NvbmZpZy5yaXBwbGUgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgY2hlY2tvdXRGb3JtR3JvdXA6IEZvcm1Hcm91cDtcbiAgICAgICAgICAgICAgaXNTdWJtaXR0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgb3JkZXJJdGVtczogT3JkZXJJdGVtW10gPSBbXTtcbiAgICAgICAgICAgICAgdXNlcklkOiBzdHJpbmc7XG4gICAgICAgICAgICAgIGNvdW50cmllcyA9IFtdO1xuICAgICAgICAgICAgICAgdW5zdWJzY3JpYmUkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuICAgICAgICAgICAgICAgcGF5bWVudEhhbmRsZXI6IGFueSA9IG51bGw7XG4gICAgICAgICAgICAgICBzdWNjZXNzOiBib29sZWFuID0gZmFsc2U7XG4gICAgICAgICAgICAgICBmYWlsdXJlOmJvb2xlYW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgIHVzZXI6IFVzZXI7XG4gICAgICAgICAgICAgICBkYXRhO1xuXG5cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9pbml0VXNlckZvcm0oKTtcbiAgICB0aGlzLl9hdXRvRmlsbFVzZXJEYXRhKCk7XG4gICAgdGhpcy5fZ2V0Q291bnRyaWVzKCk7XG4gICAgdGhpcy5fZ2V0Q2FydEl0ZW1zKCk7XG4gICAgdGhpcy5pbnZva2VTdHJpcGUoKTtcbiAgICB0aGlzLmRhdGEgPSAgdGhpcy5wYXJzZUp3dChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYXV0aFRva2VuXCIpKTtcbiAgICB0aGlzLnVzZXIuY291bnRyeT0gICAgICB0aGlzLmRhdGEuY291bnRyeTtcbiAgICB0aGlzLnVzZXIuYWRkcmVzczE9ICAgICB0aGlzLmRhdGFbJ2FkZHJlc3MxJ107XG4gICAgdGhpcy51c2VyLmFkZHJlc3MyPSAgICAgdGhpcy5kYXRhLmFkZHJlc3MyO1xuICAgIHRoaXMudXNlci5kYXRlPSAgICAgICAgIHRoaXMuZGF0YS5kYXRlT2ZCaXJ0aDtcbiAgICB0aGlzLnVzZXIuZW1haWw9ICAgICAgICB0aGlzLmRhdGEuZW1haWw7XG4gICAgdGhpcy51c2VyLnBob25lPSAgICAgICAgdGhpcy5kYXRhLnBob25lO1xuICAgIHRoaXMudXNlci5wb3N0YWxDb2RlPSAgIHRoaXMuZGF0YS5wb3N0YWxDb2RlO1xuICAgIHRoaXMudXNlci5zZXg9ICAgICAgICAgIHRoaXMuZGF0YS5nZW5kZXI7XG4gICAgdGhpcy51c2VyLmZOYW1lID0gICAgICAgdGhpcy5kYXRhLmZOYW1lO1xuICAgIHRoaXMudXNlci5sTmFtZSA9ICAgICAgIHRoaXMuZGF0YS5sTmFtZTtcbiAgICB0aGlzLnVzZXIucmVnaW9uID0gICAgICB0aGlzLmRhdGEucmVnaW9uO1xuICAgIHRoaXMudXNlci5jaXR5ID0gICAgICAgIHRoaXMuZGF0YS5jaXR5O1xuICAgIHRoaXMudXNlci5zdGF0ZSA9ICAgICAgIHRoaXMuZGF0YS5zdGF0ZTtcbiAgICB0aGlzLnVzZXIucHJlZml4ID0gICAgICB0aGlzLmRhdGEucHJlZml4O1xuICAgIHRoaXMua2MgPSBuZXcgS2xhcm5hQ29tcG9uZW50KCk7XG4gICAgdGhpcy5rYy5wcmludEhlbGxvKCk7XG5cbiAgICBjb25zb2xlLmxvZyhcInRoaXMgdXNlciA9IFwiICsgSlNPTi5zdHJpbmdpZnkodGhpcy51c2VyKSk7XG4gIFxuXG5cbiAgfVxuICBwYXJzZUp3dCAodG9rZW4pIHtcbiAgICB2YXIgYmFzZTY0VXJsID0gdG9rZW4uc3BsaXQoJy4nKVsxXTtcbiAgICB2YXIgYmFzZTY0ID0gYmFzZTY0VXJsLnJlcGxhY2UoLy0vZywgJysnKS5yZXBsYWNlKC9fL2csICcvJyk7XG4gICAgdmFyIGpzb25QYXlsb2FkID0gZGVjb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5hdG9iKGJhc2U2NCkuc3BsaXQoJycpLm1hcChmdW5jdGlvbihjKSB7XG4gICAgICAgIHJldHVybiAnJScgKyAoJzAwJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikpLnNsaWNlKC0yKTtcbiAgICB9KS5qb2luKCcnKSk7XG5cbiAgICByZXR1cm4gSlNPTi5wYXJzZShqc29uUGF5bG9hZCk7XG59O1xuXG4gIHByaXZhdGUgX2luaXRVc2VyRm9ybSgpIHtcbiAgICB0aGlzLmNoZWNrb3V0Rm9ybUdyb3VwID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBuYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgZW1haWw6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMuZW1haWxdXSxcbiAgICAgIHBob25lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgY2l0eTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIGNvdW50cnk6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICB6aXA6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBhcGFydG1lbnQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBzdHJlZXQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICB9KTtcbiAgfVxuXG5cbiAgcHJpdmF0ZSBfYXV0b0ZpbGxVc2VyRGF0YSgpIHtcbiAgICAvKlxuICAgIHRoaXMudXNlcnNTZXJ2aWNlXG4gICAgICAub2JzZXJ2ZUN1cnJlbnRVc2VyKClcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpXG4gICAgICAuc3Vic2NyaWJlKCh1c2VyKSA9PiB7XG4gICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgdGhpcy51c2VySWQgPSB1c2VyLmlkO1xuICAgICAgICAgIHRoaXMuY2hlY2tvdXRGb3JtLm5hbWUuc2V0VmFsdWUodXNlci5uYW1lKTtcbiAgICAgICAgICB0aGlzLmNoZWNrb3V0Rm9ybS5lbWFpbC5zZXRWYWx1ZSh1c2VyLmVtYWlsKTtcbiAgICAgICAgICB0aGlzLmNoZWNrb3V0Rm9ybS5waG9uZS5zZXRWYWx1ZSh1c2VyLnBob25lKTtcbiAgICAgICAgICB0aGlzLmNoZWNrb3V0Rm9ybS5jaXR5LnNldFZhbHVlKHVzZXIuY2l0eSk7XG4gICAgICAgICAgdGhpcy5jaGVja291dEZvcm0uc3RyZWV0LnNldFZhbHVlKHVzZXIuc3RyZWV0KTtcbiAgICAgICAgICB0aGlzLmNoZWNrb3V0Rm9ybS5jb3VudHJ5LnNldFZhbHVlKHVzZXIuY291bnRyeSk7XG4gICAgICAgICAgdGhpcy5jaGVja291dEZvcm0uemlwLnNldFZhbHVlKHVzZXIuemlwKTtcbiAgICAgICAgICB0aGlzLmNoZWNrb3V0Rm9ybS5hcGFydG1lbnQuc2V0VmFsdWUodXNlci5hcGFydG1lbnQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgICovXG4gIH1cblxuICBwcml2YXRlIF9nZXRDYXJ0SXRlbXMoKXtcblxuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0Q291bnRyaWVzKCl7XG4gICAgdGhpcy5jb3VudHJpZXMgPSB0aGlzLnVzZXJzU2VydmljZS5nZXRDb3VudHJpZXMoKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmNvdW50cmllcyk7XG4gIH1cblxuXG4gIGJhY2tUb0NhcnQoKXtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9jYXJ0J10pO1xuICB9XG5cbiAgYXN5bmMgcGxhY2VPcmRlcigpIHtcbiAgICBjb25zb2xlLmxvZyhcInRvdGFsIHByaWNlID0gXCIgKyB0aGlzLmNhcnQuZ2V0VG90YWxQcmljZSgpKTtcblxuICAgIGNvbnNvbGUubG9nKFwib3B6aW9uZSA9IFwiICsgdGhpcy5jaGVja1NlbGVjdGVkT3B0aW9ucygpKTtcblxuICAgIHN3aXRjaCh0aGlzLmNoZWNrU2VsZWN0ZWRPcHRpb25zKCkpe1xuICAgICAgY2FzZSBcImNyZWRpdFwiIDpcbiAgICAgICAgdGhpcy5tYWtlUGF5bWVudCh0aGlzLmNhcnQuZ2V0VG90YWxQcmljZSgpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwicmF0ZVwiIDpcbiAgICAgICAvLyBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcIm9yZGVyXCIpO1xuICAgICAgICBsZXQgdXNlclNlc3Npb24gPSAgdGhpcy5wYXJzZUp3dChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYXV0aFRva2VuXCIpKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJITyBUUk9WQVRPIFFVRVNUTyBVU0VSIERBTEwnQVVUSCBUT0tFTjpcIiArIEpTT04uc3RyaW5naWZ5KHVzZXJTZXNzaW9uKSlcblxuICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICAgIGxldCBvcmRlcjogT3JkZXIgPSBuZXcgT3JkZXI7XG4gICAgICAgIG9yZGVyLmNpdHkgPSB0aGlzLnVzZXIuY2l0eTtcbiAgICAgICAgb3JkZXIuY291bnRyeSA9IHRoaXMudXNlci5jb3VudHJ5O1xuICAgICAgICBvcmRlci5kYXRlT3JkZXJlZCA9IFN0cmluZyhub3cpO1xuICAgICAgICBvcmRlci5pZCA9ICcxMjMxMjMxMjMnO1xuICAgICAgICBvcmRlci5waG9uZSA9IHRoaXMudXNlci5waG9uZTtcbiAgICAgICAgb3JkZXIuc2hpcHBpbmdBZGRyZXNzMSA9IHRoaXMudXNlci5hZGRyZXNzMTtcbiAgICAgICAgb3JkZXIudG90YWxQcmljZSA9IFN0cmluZyh0aGlzLmNhcnQuZ2V0VG90YWxQcmljZSgpKTtcbiAgICAgICAgb3JkZXIuemlwID0gdGhpcy51c2VyLnBvc3RhbENvZGU7XG4gICAgICAgIG9yZGVyLnVzZXIgPSB1c2VyU2Vzc2lvbi51c2VySWQ7XG4gICAgICAgIG9yZGVyLmlkID0gbnVsbDtcbiAgICAgICAgb3JkZXIuZW1haWwgPSB0aGlzLnVzZXIuZW1haWw7XG4gICAgICAgIG9yZGVyLnBheW1lbnRPcHRpb24gPSBcImtsYXJuYVwiO1xuICAgICAgICBvcmRlci5jb25maXJtZWQgPSB0cnVlO1xuICAgICAgICBcbiAgICAgICAgbGV0IHZhcmlhbnRzID0gIHRoaXMuY2FydC5nZXRBbGxWYXJpYW50cygpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInZhcmlhbnRzID0gXCIgKyBKU09OLnN0cmluZ2lmeSh2YXJpYW50cykpO1xuICAgICAgICBvcmRlci5vcmRlckl0ZW1zID0gdGhpcy5jYXJ0LmdldEFsbFZhcmlhbnRzKCk7XG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJvcmRlclwiLCBKU09OLnN0cmluZ2lmeShvcmRlcikpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwicHJpbWEgZGkgcGFnYXJlIGNvbiBrbGFybmEgc3RvIHVzYW5kbyBxdWVzdG8gb3JkaW5lOiBcIiArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwib3JkZXJcIikgKyBcIiAgXCIgKyBKU09OLnN0cmluZ2lmeShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm9yZGVyXCIpKSk7XG5cbiAgICAgICAgYXdhaXQgdGhpcy5rYy5wYXkodGhpcy5jYXJ0LmdldFRvdGFsUHJpY2UoKSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJjb250YW50aVwiIDpcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImNvbnRhbnRpXCIpO1xuICAgICAgICAgIGxldCB1bmNvbmZpcm1lZE9yZGVycyA9IHRoaXMub3JkZXJzU2VydmljZS5nZXRVbmNvbmZpcm1lZE9yZGVyKHRoaXMudXNlci5wcmVmaXgsIHRoaXMudXNlci5waG9uZSkuc3Vic2NyaWJlKGRhdGEgPT57XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVOQ09ORklSTUVUIE9SREVSUyA9IFwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICAgICAgaWYoZGF0YS5jb3VudCA9PSAnMCcpe1xuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlybSgpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdGhpcy5jYW50Q29uZmlybShkYXRhLmNvdW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgXG4gICAgICAgIGNhc2UgXCJwYXlwYWxcIjpcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInBheXBhbFwiKVxuICAgICAgICAgIGNvbnN0IG5vdzIgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgIGxldCB1c2VyU2Vzc2lvbjIgPSAgdGhpcy5wYXJzZUp3dChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYXV0aFRva2VuXCIpKTtcbiAgICAgICAgICBsZXQgb3JkZXIyID0gbmV3IE9yZGVyKCk7XG4gICAgICAgICAgb3JkZXIyLmNpdHkgPSB0aGlzLnVzZXIuY2l0eTtcbiAgICAgICAgICBvcmRlcjIuY291bnRyeSA9IHRoaXMudXNlci5jb3VudHJ5O1xuICAgICAgICAgIG9yZGVyMi5kYXRlT3JkZXJlZCA9IFN0cmluZyhub3cyKTtcbiAgICAgICAgICBvcmRlcjIuaWQgPSAnMTIzMTIzMTIzJztcbiAgICAgICAgICBvcmRlcjIucGhvbmUgPSB0aGlzLnVzZXIucGhvbmU7XG4gICAgICAgICAgb3JkZXIyLnNoaXBwaW5nQWRkcmVzczEgPSB0aGlzLnVzZXIuYWRkcmVzczE7XG4gICAgICAgICAgb3JkZXIyLnRvdGFsUHJpY2UgPSBTdHJpbmcodGhpcy5jYXJ0LmdldFRvdGFsUHJpY2UoKSk7XG4gICAgICAgICAgb3JkZXIyLnppcCA9IHRoaXMudXNlci5wb3N0YWxDb2RlO1xuICAgICAgICAgIG9yZGVyMi51c2VyID0gdXNlclNlc3Npb24yLnVzZXJJZDtcbiAgICAgICAgICBvcmRlcjIuaWQgPSBudWxsO1xuICAgICAgICAgIG9yZGVyMi5lbWFpbCA9IHRoaXMudXNlci5lbWFpbDtcbiAgICAgICAgICBvcmRlcjIucGF5bWVudE9wdGlvbiA9IFwiUGF5cGFsXCI7XG4gICAgICAgICAgb3JkZXIyLmNvbmZpcm1lZCA9IHRydWU7XG4gICAgICAgICAgXG4gICAgICAgICAgbGV0IHZhcmlhbnRzMiA9ICB0aGlzLmNhcnQuZ2V0QWxsVmFyaWFudHMoKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInZhcmlhbnRzID0gXCIgKyBKU09OLnN0cmluZ2lmeSh2YXJpYW50czIpKTtcbiAgICAgICAgICBvcmRlcjIub3JkZXJJdGVtcyA9IHRoaXMuY2FydC5nZXRBbGxWYXJpYW50cygpO1xuICBcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm9yZGVyXCIsIEpTT04uc3RyaW5naWZ5KG9yZGVyMikpO1xuXG5cbiAgICAgICAgIC8vIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3BheXBhbCddKTtcbiAgICAgICAgIHRoaXMuY2hlY2tvdXQucGF5UGFsKHRoaXMuY2FydCwgb3JkZXIyKS5zdWJzY3JpYmUoKGRhdGEpPT57XG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkYXRhLnJlZGlyZWN0XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmKHRoaXMuY2hlY2tTZWxlY3RlZE9wdGlvbnMoKSl7XG4gICAgICAvL3RoaXMubWFrZVBheW1lbnQodGhpcy5jYXJ0LmdldFRvdGFsUHJpY2UoKSk7XG4gICAvLyAgIGF3YWl0IHRoaXMua2MucGF5KHRoaXMuY2FydC5nZXRUb3RhbFByaWNlKCkpO1xuICAgIFxuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBmYWxzZTtcbiAgICB9ZWxzZXtcbiAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgaW4gdGhlIHNoaXBwaW5nIGFkZHJlc3NcIik7XG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHRydWU7XG4gICAgfVxuXG4gIH1cblxuICBjYW50Q29uZmlybShuIDogc3RyaW5nKSA6IHZvaWR7XG4gICAgdGhpcy5jb25maXJtYXRpb25TZXJ2aWNlLmNvbmZpcm0oe1xuXG4gICAgICBtZXNzYWdlOiAnQ2kgc29ubyBhdHR1YWxtZW50ZSAnICsgbiArICcgb3JkaW5pIG5vbiBjb25mZXJtYXRpLjxicj5Ob24gcHVvaSByZWdpc3RyYXJlIG51b3ZpIG9yZGluaSBmaW5jaMOoIGhhaSBhbHRyaSBvcmRpbmkgcmVnaXN0cmF0aSBlIG5vbiBjb25mZXJtYXRpIHRyYW1pdGUgc21zLjxicj48L2I+UHVvaSBjb25mZXJtYXJlL2FubnVsbGFyZSBnbGkgb3JkaW5pIGFuZGFuZG8gc3UgPGEgaHJlZj1cXCdodHRwczovL2NhdGFsZG9wcm9kdWN0aW9uLmhlcm9rdWFwcC5jb20vIy9teU9yZGVyc1xcJz5JIG1pZWkgb3JkaW5pPC9hPicgLFxuICAgICAgYWNjZXB0OiAoKSA9PiB7XG4gICAgICAgIHRoaXMubXNncyA9IFt7c2V2ZXJpdHk6J2luZm8nLCBzdW1tYXJ5OidSZWplY3RlZCcsIGRldGFpbDonSW1wb3NzaWJpbGUgcmVnaXN0cmFyZSBsXFwnb3JkaW5lJ31dO1xuICAgICAgfSxcbiAgICAgIHJlamVjdDogKCkgPT4ge1xuICAgICAgICAgIHRoaXMubXNncyA9IFt7c2V2ZXJpdHk6J2luZm8nLCBzdW1tYXJ5OidSZWplY3RlZCcsIGRldGFpbDonSW1wb3NzaWJpbGUgcmVnaXN0cmFyZSBsXFwnb3JkaW5lJ31dO1xuICAgICAgfVxuICAgICAgICBcbiAgfSk7XG59XG5cbiAgY29uZmlybSgpIDogdm9pZHtcblxuXG5cbiAgICB0aGlzLmNvbmZpcm1hdGlvblNlcnZpY2UuY29uZmlybSh7XG4gICAgICBtZXNzYWdlOiAnQ2xpY2NhbmRvIHN1IGNvbmZlcm1hIHRpIGltcGVnbmkgYSBwYWdhcmUgbFxcJ29yZGluZS4gPGJyPiA8Yj5SaWNldmVyYWkgdW4gc21zIGFsbFxcJ251bWVybyAnICsgdGhpcy51c2VyLnBob25lICsgJzxicj5QZXIgY29uZmVybWFyZSBsXFwnb3JkaW5lIGRvdnJhaSByaXNwb25kZXJlIGFsbFxcJ3NtcyBpbnZpYW5kbyBcXCdTSVxcJyA8L2I+JyxcbiAgICAgIGFjY2VwdDogKCkgPT4ge1xuICAgICAgICAgIHRoaXMubXNncyA9IFt7c2V2ZXJpdHk6J2luZm8nLCBzdW1tYXJ5OidDb25maXJtZWQnLCBkZXRhaWw6J1JpY29yZGF0aSBjaGUgcGVyIGNvbmZlcm1hcmUgbFxcJ29yZGluZSBkb3ZyYWkgcmlzcG9uZGVyZSBpbnZpYW5kbyBcXCdTSVxcJyBhbGxcXCdzbXMgcmljZXZ1dG8hJ31dO1xuXG5cbiAgICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICAgICAgbGV0IG9yZGVyOiBPcmRlciA9IG5ldyBPcmRlcjtcbiAgICAgICAgICBvcmRlci5jaXR5ID0gdGhpcy51c2VyLmNpdHk7XG4gICAgICAgICAgb3JkZXIuY291bnRyeSA9IHRoaXMudXNlci5jb3VudHJ5O1xuICAgICAgICAgIG9yZGVyLmRhdGVPcmRlcmVkID0gU3RyaW5nKG5vdyk7XG4gICAgICAgICAgb3JkZXIuaWQgPSAnMTIzMTIzMTIzJztcbiAgICAgICAgICBvcmRlci5waG9uZSA9IHRoaXMudXNlci5waG9uZTtcbiAgICAgICAgICBvcmRlci5wcmVmaXggPSB0aGlzLnVzZXIucHJlZml4O1xuICAgICAgICAgIG9yZGVyLnNoaXBwaW5nQWRkcmVzczEgPSB0aGlzLnVzZXIuYWRkcmVzczE7XG4gICAgICAgICAgb3JkZXIudG90YWxQcmljZSA9IFN0cmluZyh0aGlzLmNhcnQuZ2V0VG90YWxQcmljZSgpKTtcbiAgICAgICAgICBvcmRlci56aXAgPSB0aGlzLnVzZXIucG9zdGFsQ29kZTtcbiAgXG4gICAgICAgICAgb3JkZXIudXNlciA9IHRoaXMuZGF0YS51c2VySWQ7XG4gICAgICAgICAgb3JkZXIuaWQgPSBudWxsO1xuICAgICAgICAgIG9yZGVyLmNvbmZpcm1lZCA9IGZhbHNlO1xuICAgICAgICAgIG9yZGVyLnBheW1lbnRPcHRpb24gPSBcIkNvbnRhbnRpXCI7XG4gICAgICAgICAgbGV0IHZhcmlhbnRzID0gIHRoaXMuY2FydC5nZXRBbGxWYXJpYW50cygpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwidmFyaWFudHMgPSBcIiArIEpTT04uc3RyaW5naWZ5KHZhcmlhbnRzKSk7XG4gICAgICAgICAgb3JkZXIub3JkZXJJdGVtcyA9IHRoaXMuY2FydC5nZXRBbGxWYXJpYW50cygpO1xuICBcbiAgXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJvcmRlclwiLCBKU09OLnN0cmluZ2lmeShvcmRlcikpO1xuXG4gICAgICAgICAgdGhpcy5vcmRlcnNTZXJ2aWNlLmNyZWF0ZU5ld09yZGVyKG9yZGVyLCB0aGlzLnVzZXIuZW1haWwsIHRoaXMudXNlci5wcmVmaXgpLnN1YnNjcmliZSgoZGF0YSkgPT57XG5cblxuICAgICBcblxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkkgYW0gY3JlYXRpbmcgdGhpcyBuZXcgb3JkZXI6IFwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhOiBcIiArIGRhdGEpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleGFtcGxlTW9kYWxMYWJlbFwiKS5pbm5lclRleHQ9XCJZb3VyIG9yZGVyIG51bWJlciBpczogXCIgKyBkYXRhLl9pZDtcblxuICAgICAgICAgIC8vICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKClcblxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiY2FydEJ5THVjYVwiKTtcbiAgICAgICAgICB0aGlzLmNhcnRTZXJ2aWNlLmdldENhcnQoKTtcbiAgICAgICAgICB0aGlzLmNhcnQuZW1wdHlDYXJ0KCk7XG5cbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL29yZGVycy8nICsgZGF0YS5faWRdKTtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuYWRkKHtcbiAgICAgICAgICAgICAgc2V2ZXJpdHk6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgc3VtbWFyeTogJ1N1Y2NlcycsXG4gICAgICAgICAgICAgIGRldGFpbDogYFN1Y2Nlc2Z1bCB0cmFuc2FjdGlvbiFgXG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICB0aGlzLmNoZWNrb3V0LnNlbmRTbXMoZGF0YS5faWQsIGRhdGEucGhvbmUsIHRoaXMudXNlci5wcmVmaXgpLnN1YnNjcmliZSgoZGF0YSkgPT57XG5cbiAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5hZGQoe1xuICAgICAgICAgICAgICAgIHNldmVyaXR5OiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgc3VtbWFyeTogJ1N1Y2NlcycsXG4gICAgICAgICAgICAgICAgZGV0YWlsOiBgU01TIGludmlhdG8hYFxuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSlcblxuICAgICAgfSxcbiAgICAgIHJlamVjdDogKCkgPT4ge1xuICAgICAgICAgIHRoaXMubXNncyA9IFt7c2V2ZXJpdHk6J2luZm8nLCBzdW1tYXJ5OidSZWplY3RlZCcsIGRldGFpbDonTFxcJ29yZGluZSBub24gw6ggc3RhdG8gY29uZmVybWF0byEnfV07XG4gICAgICB9XG4gIH0pO1xuICB9XG5cbiAgY2hlY2tTZWxlY3RlZE9wdGlvbnMoKSA6IHN0cmluZ3tcblxuXG4gICAgcmV0dXJuICg8SFRNTElucHV0RWxlbWVudD4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cIm9wdHJhZGlvXCJdOmNoZWNrZWQnKSkudmFsdWU7XG5cbiAgfVxuIFxuICBnZXQgY2hlY2tvdXRGb3JtKCkge1xuICAgIHJldHVybiB0aGlzLmNoZWNrb3V0Rm9ybUdyb3VwLmNvbnRyb2xzO1xuICB9XG5cbiAgbWFrZVBheW1lbnQoYW1vdW50OiBudW1iZXIpIHtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlLW1hc2snKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXG5cbiAgICBjb25zdCBwYXltZW50SGFuZGxlciA9ICg8YW55PndpbmRvdykuU3RyaXBlQ2hlY2tvdXQuY29uZmlndXJlKHtcbiAgICAgIGtleTogJ3BrX3Rlc3RfNTFMWVVDR0RFeWlYM2UzUGw4OWpxbVZnMWdUTjJRaGlmeXd0SWxnNkF6MW5pR1VWM0FOUnBBTlhKOGhkRUlqd0ROYThHVEJ2bnJ4cTN6Z2RSOGdFenhnUlQwMHVIbGZ0UW5GJyxcbiAgICAgIGxvY2FsZTogJ2F1dG8nLFxuICAgICAgdG9rZW46IGZ1bmN0aW9uIChzdHJpcGVUb2tlbjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHN0cmlwZVRva2VuKTtcbiAgICAgICAgcGF5bWVudHN0cmlwZShzdHJpcGVUb2tlbik7XG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgY29uc3QgcGF5bWVudHN0cmlwZSA9IChzdHJpcGVUb2tlbjogYW55KSA9PiB7XG4gICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIikgYXMgSFRNTEVsZW1lbnQgfCBudWxsXG4gICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcbiAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZU1vZGFsXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZS1tYXNrJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9KTtcblxuICAgICAgdGhpcy5jaGVja291dC5tYWtlUGF5bWVudChzdHJpcGVUb2tlbiwgYW1vdW50KS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZU1vZGFsRm9vdGVyXCIpLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvYWRpbmdTcGlubmVyXCIpLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7XG5cblxuICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICAgIGxldCBvcmRlcjogT3JkZXIgPSBuZXcgT3JkZXI7XG4gICAgICAgIG9yZGVyLmNpdHkgPSB0aGlzLnVzZXIuY2l0eTtcbiAgICAgICAgb3JkZXIuY291bnRyeSA9IHRoaXMudXNlci5jb3VudHJ5O1xuICAgICAgICBvcmRlci5kYXRlT3JkZXJlZCA9IFN0cmluZyhub3cpO1xuICAgICAgICBvcmRlci5pZCA9ICcxMjMxMjMxMjMnO1xuICAgICAgICBvcmRlci5waG9uZSA9IHRoaXMudXNlci5waG9uZTtcbiAgICAgICAgb3JkZXIuc2hpcHBpbmdBZGRyZXNzMSA9IHRoaXMudXNlci5hZGRyZXNzMTtcbiAgICAgICAgb3JkZXIudG90YWxQcmljZSA9IFN0cmluZyh0aGlzLmNhcnQuZ2V0VG90YWxQcmljZSgpKTtcbiAgICAgICAgb3JkZXIuemlwID0gdGhpcy51c2VyLnBvc3RhbENvZGU7XG5cbiAgICAgICAgb3JkZXIudXNlciA9IHRoaXMuZGF0YS51c2VySWQ7XG4gICAgICAgIG9yZGVyLmlkID0gbnVsbDtcbiAgICAgICAgb3JkZXIuY29uZmlybWVkID0gdHJ1ZTtcbiAgICAgICAgb3JkZXIucGF5bWVudE9wdGlvbiA9IFwiQ2FydGEgZGkgY3JlZGl0b1wiO1xuICAgICAgICBsZXQgdmFyaWFudHMgPSAgdGhpcy5jYXJ0LmdldEFsbFZhcmlhbnRzKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidmFyaWFudHMgPSBcIiArIEpTT04uc3RyaW5naWZ5KHZhcmlhbnRzKSk7XG4gICAgICAgIG9yZGVyLm9yZGVySXRlbXMgPSB0aGlzLmNhcnQuZ2V0QWxsVmFyaWFudHMoKTtcblxuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwib3JkZXJcIiwgSlNPTi5zdHJpbmdpZnkob3JkZXIpKTtcblxuICAgICAgICBcblxuXG5cblxuXG4gICAgICAgIGlmIChkYXRhLmRhdGEgPT09IFwic3VjY2Vzc1wiKSB7XG4gICAgICAgICAgdGhpcy5zdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmZhaWx1cmUgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLm9yZGVyc1NlcnZpY2UuY3JlYXRlTmV3T3JkZXIob3JkZXIsIHRoaXMudXNlci5lbWFpbCwgdGhpcy51c2VyLnByZWZpeCkuc3Vic2NyaWJlKChkYXRhKSA9PntcblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJJIGFtIGNyZWF0aW5nIHRoaXMgbmV3IG9yZGVyOiBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YTogXCIgKyBkYXRhKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhhbXBsZU1vZGFsTGFiZWxcIikuaW5uZXJUZXh0PVwiWW91ciBvcmRlciBudW1iZXIgaXM6IFwiICsgZGF0YS5faWQ7XG5cbiAgICAgICAgICAvLyAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgpXG5cbiAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImNhcnRCeUx1Y2FcIik7XG4gICAgICAgICAgdGhpcy5jYXJ0U2VydmljZS5nZXRDYXJ0KCk7XG4gICAgICAgICAgdGhpcy5jYXJ0LmVtcHR5Q2FydCgpO1xuXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9vcmRlcnMvJyArIGRhdGEuX2lkXSk7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmFkZCh7XG4gICAgICAgICAgICAgIHNldmVyaXR5OiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgIHN1bW1hcnk6ICdTdWNjZXMnLFxuICAgICAgICAgICAgICBkZXRhaWw6IGBTdWNjZXNmdWwgdHJhbnNhY3Rpb24hYFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSlcblxuXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWNjZXNzXCIpLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiO1xuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5mYWlsdXJlID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnN1Y2Nlc3MgPSBmYWxzZTtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZhaWxlZFwiKS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHBheW1lbnRIYW5kbGVyLm9wZW4oe1xuICAgICAgbmFtZTogJ0NhdGFsZG8gU3RvcmUnLFxuICAgICAgZGVzY3JpcHRpb246ICdQbGVhc2UgZmlsbCB5b3VyIGJpbGxpbmcgaW5mb3JtYXRpb25zJyxcbiAgICAgIGFtb3VudDogYW1vdW50ICogMTAwLFxuICAgIH0pO1xuXG4gIH1cblxuICBpbnZva2VTdHJpcGUoKSB7XG4gICAgaWYgKCF3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0cmlwZS1zY3JpcHQnKSkge1xuICAgICAgY29uc3Qgc2NyaXB0ID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgc2NyaXB0LmlkID0gJ3N0cmlwZS1zY3JpcHQnO1xuICAgICAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICAgIHNjcmlwdC5zcmMgPSAnaHR0cHM6Ly9jaGVja291dC5zdHJpcGUuY29tL2NoZWNrb3V0LmpzJztcbiAgICAgIHNjcmlwdC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucGF5bWVudEhhbmRsZXIgPSAoPGFueT53aW5kb3cpLlN0cmlwZUNoZWNrb3V0LmNvbmZpZ3VyZSh7XG4gICAgICAgICAga2V5OiAncGtfdGVzdF81MUxZVUNHREV5aVgzZTNQbDg5anFtVmcxZ1ROMlFoaWZ5d3RJbGc2QXoxbmlHVVYzQU5ScEFOWEo4aGRFSWp3RE5hOEdUQnZucnhxM3pnZFI4Z0V6eGdSVDAwdUhsZnRRbkYnLFxuICAgICAgICAgIGxvY2FsZTogJ2F1dG8nLFxuICAgICAgICAgIHRva2VuOiBmdW5jdGlvbiAoc3RyaXBlVG9rZW46IGFueSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coc3RyaXBlVG9rZW4pO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICB9XG4gIH1cblxufVxuIiwiPHNjcmlwdCBzcmM9XCJodHRwczovL2pzLnN0cmlwZS5jb20vdjMvXCIgZGVmZXI+PC9zY3JpcHQ+XG48ZGl2IGNsYXNzPVwicC0yXCI+XG4gIDxwLWNvbmZpcm1EaWFsb2cgI2NkICBoZWFkZXI9XCJDb25maXJtYXRpb25cIiBpY29uPVwicGkgcGktZXhjbGFtYXRpb24tdHJpYW5nbGVcIj5cbiAgICA8bmctdGVtcGxhdGUgcFRlbXBsYXRlPVwiaGVhZGVyXCI+XG4gICAgICA8aDM+Q29uZmVybWEgb3JkaW5lPC9oMz5cbiAgPC9uZy10ZW1wbGF0ZT5cblxuICA8bmctdGVtcGxhdGUgcFRlbXBsYXRlPVwiZm9vdGVyXCI+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgcEJ1dHRvbiBpY29uPVwicGkgcGktdGltZXNcIiBsYWJlbD1cIkFubnVsbGFcIiAoY2xpY2spPVwiY2QucmVqZWN0KClcIj48L2J1dHRvbj5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBwQnV0dG9uIGljb249XCJwaSBwaS1jaGVja1wiIGxhYmVsPVwiQ29uZmVybWFcIiAoY2xpY2spPVwiY2QuYWNjZXB0KClcIj48L2J1dHRvbj5cbjwvbmctdGVtcGxhdGU+XG4gIDwvcC1jb25maXJtRGlhbG9nPlxuXG48ZGl2IGNsYXNzPVwiY2hlY2tvdXQtcGFnZSBwYi01XCI+XG4gICAgPGRpdj5cbiAgICAgICAgPHAtYnV0dG9uIGxhYmVsPVwiVG9ybmEgYWwgY2FycmVsbG9cIiBpY29uPVwicGkgcGktYXJyb3ctbGVmdFwiIChvbkNsaWNrKT1cImJhY2tUb0NhcnQoKVwiPjwvcC1idXR0b24+XG4gICAgPC9kaXY+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJncmlkIHAtMlwiIHN0eWxlPVwid2lkdGg6IDEwMCU7IGp1c3RpZnktY29udGVudDogY2VudGVyO1wiPlxuXG4gIDxkaXYgY2xhc3M9XCJyb3dcIiBzdHlsZT1cImp1c3RpZnktY29udGVudDogY2VudGVyOyB3aWR0aDogaW5oZXJpdDsgXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbC0xMiBjb2wtbWQtNyBjb2wtbGctNyBwLTJcIiBzdHlsZT1cIlxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXN1cmZhY2UtMjAwKTtcIj5cbiAgICBcbiAgICAgIDxoMyBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlcjsgbWFyZ2luLWJvdHRvbTogMzBweDtcIj5TZWxlemlvbmEgdW4gbWV0b2RvIGRpIHBhZ2FtZW50bzwvaDM+XG4gICAgICA8aHI+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtOFwiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiBpZD1cInJhZGlvMVwiIG5hbWU9XCJvcHRyYWRpb1wiIHZhbHVlPVwiY3JlZGl0XCIgY2hlY2tlZD5cbiAgICAgICAgICBDQVJURSBESSBDUkVESVRPXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTRcIj5cbiAgICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+ICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiICBzdHlsZT1cIm1pbi13aWR0aDogNTBweDtcIj48bGkgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmU7XCI+PGltZyBzcmM9XCJhc3NldHMvbWFzdGVyY2FyZC5wbmdcIiAgY2xhc3M9XCJpbWctZmx1aWRcIiBhbHQ9XCJSZXNwb25zaXZlIGltYWdlXCI+PC9saT48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiICBzdHlsZT1cIm1pbi13aWR0aDogNTBweDtcIj48bGkgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmU7XCI+PGltZyBzcmM9J2Fzc2V0cy92aXNhLnBuZycgIGNsYXNzPVwiaW1nLWZsdWlkXCIgYWx0PVwiUmVzcG9uc2l2ZSBpbWFnZVwiPjwvbGk+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIiAgc3R5bGU9XCJtaW4td2lkdGg6IDUwcHg7XCI+PGxpIHN0eWxlPVwiZGlzcGxheTogaW5saW5lO1wiPjxpbWcgc3JjPSdhc3NldHMvYW1lcmljYW5FeHByZXNzLnBuZycgIGNsYXNzPVwiaW1nLWZsdWlkXCIgYWx0PVwiUmVzcG9uc2l2ZSBpbWFnZVwiPjwvbGk+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIiAgc3R5bGU9XCJtaW4td2lkdGg6IDUwcHg7XCI+PGxpIHN0eWxlPVwiZGlzcGxheTogaW5saW5lO1wiPjxpbWcgc3JjPSdhc3NldHMvbWFlc3Ryby5wbmcnICBjbGFzcz1cImltZy1mbHVpZFwiIGFsdD1cIlJlc3BvbnNpdmUgaW1hZ2VcIj48L2xpPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCIgIHN0eWxlPVwibWluLXdpZHRoOiA1MHB4O1wiPjxsaSBzdHlsZT1cImRpc3BsYXk6IGlubGluZTtcIj48aW1nIHNyYz0nYXNzZXRzL3Bvc3RlcGF5LnBuZycgIGNsYXNzPVwiaW1nLWZsdWlkXCIgYWx0PVwiUmVzcG9uc2l2ZSBpbWFnZVwiPjwvbGk+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPGhyPlxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLThcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgaWQ9XCJyYWRpbzJcIiBuYW1lPVwib3B0cmFkaW9cIiB2YWx1ZT1cInJhdGVcIiBjaGVja2VkPlxuICAgICAgICAgIFBBR0FNRU5UTyBBIFJBVEVcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNFwiPlxuICAgICAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj4gICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCIgIHN0eWxlPVwibWluLXdpZHRoOiA1MHB4O1wiPjxsaSBzdHlsZT1cImRpc3BsYXk6IGlubGluZTtcIj48aW1nIHNyYz0nYXNzZXRzL2tsYXJuYS5wbmcnICBjbGFzcz1cImltZy1mbHVpZFwiIGFsdD1cIlJlc3BvbnNpdmUgaW1hZ2VcIj48L2xpPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCIgIHN0eWxlPVwibWluLXdpZHRoOiA1MHB4O1wiPjxsaSBzdHlsZT1cImRpc3BsYXk6IGlubGluZTtcIj48aW1nIHNyYz1cImFzc2V0cy9tYXN0ZXJjYXJkLnBuZ1wiICBjbGFzcz1cImltZy1mbHVpZFwiIGFsdD1cIlJlc3BvbnNpdmUgaW1hZ2VcIj48L2xpPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCIgIHN0eWxlPVwibWluLXdpZHRoOiA1MHB4O1wiPjxsaSBzdHlsZT1cImRpc3BsYXk6IGlubGluZTtcIj48aW1nIHNyYz0nYXNzZXRzL3Zpc2EucG5nJyAgY2xhc3M9XCJpbWctZmx1aWRcIiBhbHQ9XCJSZXNwb25zaXZlIGltYWdlXCI+PC9saT48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiICBzdHlsZT1cIm1pbi13aWR0aDogNTBweDtcIj48bGkgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmU7XCI+PGltZyBzcmM9J2Fzc2V0cy9hbWVyaWNhbkV4cHJlc3MucG5nJyAgY2xhc3M9XCJpbWctZmx1aWRcIiBhbHQ9XCJSZXNwb25zaXZlIGltYWdlXCI+PC9saT48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiICBzdHlsZT1cIm1pbi13aWR0aDogNTBweDtcIj48bGkgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmU7XCI+PGltZyBzcmM9J2Fzc2V0cy9tYWVzdHJvLnBuZycgIGNsYXNzPVwiaW1nLWZsdWlkXCIgYWx0PVwiUmVzcG9uc2l2ZSBpbWFnZVwiPjwvbGk+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIiAgc3R5bGU9XCJtaW4td2lkdGg6IDUwcHg7XCI+PGxpIHN0eWxlPVwiZGlzcGxheTogaW5saW5lO1wiPjxpbWcgc3JjPSdhc3NldHMvcG9zdGVwYXkucG5nJyAgY2xhc3M9XCJpbWctZmx1aWRcIiBhbHQ9XCJSZXNwb25zaXZlIGltYWdlXCI+PC9saT48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxocj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC04XCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIGlkPVwicmFkaW8zXCIgbmFtZT1cIm9wdHJhZGlvXCIgdmFsdWU9XCJwYXlwYWxcIiBjaGVja2VkPlxuICAgICAgICAgIFBBWVBBTFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00XCI+XG4gICAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPiAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIiAgc3R5bGU9XCJtaW4td2lkdGg6IDUwcHg7XCI+PGxpIHN0eWxlPVwiZGlzcGxheTogaW5saW5lO1wiPjxpbWcgc3JjPSdhc3NldHMvcGF5cGFsLnBuZycgIGNsYXNzPVwiaW1nLWZsdWlkXCIgYWx0PVwiUmVzcG9uc2l2ZSBpbWFnZVwiPjwvbGk+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8aHI+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgaWQ9XCJyYWRpbzRcIiBuYW1lPVwib3B0cmFkaW9cIiB2YWx1ZT1cImNvbnRhbnRpXCIgY2hlY2tlZD5cbiAgICAgICAgICBQQUdBIElOIENPTlRBTlRJIEFMTEEgQ09OU0VHTkFcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgXG4gICAgICA8aHI+XG4gICAgPC9kaXY+XG4gICAgXG4gICAgPGRpdiBjbGFzcz1cImNvbC0xMiBjb2wtbWQtNSBjb2wtbGctNVwiPlxuXG4gICAgPGRpdiBpZD1cInBhZ2UtbWFza1wiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj48L2Rpdj5cblxuICAgICAgPCEtLSBNb2RhbCAtLT5cbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbCBmYWRlIGJvcmRlciBib3JkZXItaW5mb1wiIGlkPVwiZXhhbXBsZU1vZGFsXCIgdGFiaW5kZXg9XCItMVwiIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGVNb2RhbExhYmVsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2cgYm9yZGVyIGJvcmRlci1pbmZvIGJvcmRlci00IHJvdW5kZWRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1hdXRvIFwiID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibG9hZGluZ1NwaW5uZXJcIiBjbGFzcz1cInNwaW5uZXItYm9yZGVyIHRleHQtcHJpbWFyeVwiIHJvbGU9XCJzdGF0dXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZpc3VhbGx5LWhpZGRlblwiPkxvYWRpbmcuLi48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPjxoNSBjbGFzcz1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJleGFtcGxlTW9kYWxMYWJlbFwiPldlIGFyZSB2YWxpZGF0aW5nIHlvdXIgdHJhbnNhY3Rpb24sIHBsZWFzZSB3YWl0PC9oNT48L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiY2xvc2VNb2RhbFwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0bi1jbG9zZVwiIGRhdGEtYnMtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJtb2RhbEJvZHlcIiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cInN1Y2Nlc3NcIiBjbGFzcz1cInRleHQtc3VjY2Vzc1wiIHN0eWxlPVwiZm9udC13ZWlnaHQ6IDgwMDsgZGlzcGxheTogbm9uZTtcIj4gVHJhbnNhY3Rpb24gc3VjY2VzZnVsbCE8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cImZhaWxlZFwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIiBzdHlsZT1cImZvbnQtd2VpZ2h0OiA4MDA7IGRpc3BsYXk6IG5vbmU7XCI+IFRyYW5zYWN0aW9uIGZhaWxlZCE8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJjbG9zZU1vZGFsRm9vdGVyXCIgY2xhc3M9XCJ0ZXh0LXNlY29uZGFyeVwiIHN0eWxlPVwiZm9udC1zaXplOnNtYWxsZXI7IGRpc3BsYXk6IG5vbmU7XCI+IE5vdyB5b3UgY2FuIGNsb3NlIHRoaXMgbW9kYWw8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPG9yZGVycy1vcmRlci1zdW1tYXJ5IFtpc0NoZWNrT3V0XT1cInRydWVcIj48L29yZGVycy1vcmRlci1zdW1tYXJ5PlxuICAgICAgPGRpdiBjbGFzcz1cImNoZWNrb3V0LWJ1dHRvblwiPlxuICAgICAgICA8cC1idXR0b24gbGFiZWw9XCJQcm9jZWRpXCIgKG9uQ2xpY2spPVwicGxhY2VPcmRlcigpXCI+PC9wLWJ1dHRvbj5cbiAgICAgIDwvZGl2PlxuIFxuXG4gICAgICA8ZGl2IGNsYXNzPVwiZXJyb3IgbXQtMlwiIHN0eWxlPVwiZm9udC1zaXplOiAyOXB4OyBjb2xvcjpyZWQ7IGZvbnQtd2VpZ2h0OiA4MDA7XCIgKm5nSWY9XCJlcnJvck1lc3NhZ2VcIiA+UGxlYXNlIGZpbGwgYWxsIHRoZSBtYW5kYXRvcnkgZmllbGRzOjwvZGl2PlxuICAgICAgPHVsPlxuICAgICAgICA8bGkgc3R5bGU9XCJmb250LXNpemU6IDIwcHg7IGNvbG9yOnJlZDsgZm9udC13ZWlnaHQ6IDUwMDtcIiAgKm5nRm9yPVwibGV0IGVycm9yIG9mIGVycm9ybWVzc2FnZVwiPlxuICAgICAgICAgICAge3tlcnJvcn19XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuXG5cblxuICAgIDwvZGl2PlxuXG4gIDwvZGl2PlxuICA8L2Rpdj5cbiAgPHAtbWVzc2FnZXMgW3ZhbHVlXT1cIm1zZ3NcIj48L3AtbWVzc2FnZXM+XG48L2Rpdj5cbiJdfQ==