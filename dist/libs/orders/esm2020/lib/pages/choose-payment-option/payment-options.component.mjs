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
    }
    ngOnInit() {
        this.cart = this.cartService.getCart();
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
        let userSession = this.parseJwt(sessionStorage.getItem("authToken"));
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
                order.email = this.data.email;
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
PaymentOptions.ɵfac = function PaymentOptions_Factory(t) { return new (t || PaymentOptions)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.UsersService), i0.ɵɵdirectiveInject(i3.FormBuilder), i0.ɵɵdirectiveInject(i4.CartService), i0.ɵɵdirectiveInject(i5.OrdersService), i0.ɵɵdirectiveInject(i6.MessageService), i0.ɵɵdirectiveInject(i7.CheckoutService), i0.ɵɵdirectiveInject(i2.KlarnaComponent), i0.ɵɵdirectiveInject(i6.ConfirmationService), i0.ɵɵdirectiveInject(i6.PrimeNGConfig)); };
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
    }], function () { return [{ type: i1.Router }, { type: i2.UsersService }, { type: i3.FormBuilder }, { type: i4.CartService }, { type: i5.OrdersService }, { type: i6.MessageService }, { type: i7.CheckoutService }, { type: i2.KlarnaComponent }, { type: i6.ConfirmationService }, { type: i6.PrimeNGConfig }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1vcHRpb25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvb3JkZXJzL3NyYy9saWIvcGFnZXMvY2hvb3NlLXBheW1lbnQtb3B0aW9uL3BheW1lbnQtb3B0aW9ucy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL29yZGVycy9zcmMvbGliL3BhZ2VzL2Nob29zZS1wYXltZW50LW9wdGlvbi9wYXltZW50LW9wdGlvbnMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsTUFBTTtBQUNOLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBYSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFHLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQTtBQUV2RCxPQUFPLEVBQVcsY0FBYyxFQUFFLGFBQWEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNyRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFMUQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUVsRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFekMsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sYUFBYSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7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aUNBQTZCLHFCQUFBO1FBQ0QsbUdBQVcsZ0JBQVksSUFBQztRQUFDLGlCQUFXLEVBQUE7UUFJaEUsb0VBQStJO1FBQy9JLDRCQUFJO1FBQ0Ysa0VBRUs7UUFDUCxpQkFBSyxFQUFBLEVBQUEsRUFBQTtRQVFULG1DQUF3QztRQUMxQyxpQkFBTTs7UUFwQnNCLGlCQUFtQjtRQUFuQixpQ0FBbUI7UUFNc0MsZUFBa0I7UUFBbEIsdUNBQWtCO1FBRWxCLGVBQWU7UUFBZiwwQ0FBZTtRQVd0RixlQUFjO1FBQWQsZ0NBQWM7O3VGRHJHZixjQUFjO2NBZDFCLFNBQVM7MkJBQ0UsaUJBQWlCLFVBRW5CLENBQUM7Ozs7Ozs7SUFPUCxDQUFDLGFBQ1EsQ0FBQyxlQUFlLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVc2VyMjMgfSBmcm9tICcuLy4uLy4uL21vZGVscy91c2VyMjMnO1xuLyoqICovXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyAgVXNlcnNTZXJ2aWNlIH0gZnJvbSAnQGVzaG9wLWZyb250ZW5kL3VzZXJzJztcbmltcG9ydCB7IEtsYXJuYUNvbXBvbmVudCB9IGZyb20gJ0Blc2hvcC1mcm9udGVuZC91c2VycydcblxuaW1wb3J0IHsgTWVzc2FnZSwgTWVzc2FnZVNlcnZpY2UsIFByaW1lTkdDb25maWcgfSBmcm9tICdwcmltZW5nL2FwaSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPcmRlcnNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb3JkZXJzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FydFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jYXJ0LnNlcnZpY2UnO1xuaW1wb3J0IHsgT3JkZXJJdGVtIH0gZnJvbSAnLi4vLi4vbW9kZWxzL29yZGVyLWl0ZW0nO1xuaW1wb3J0IHsgT3JkZXIgfSBmcm9tICcuLi8uLi9tb2RlbHMvb3JkZXInO1xuaW1wb3J0IHsgQ2hlY2tvdXRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2hlY2tvdXQuc2VydmljZSc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnQGVzaG9wLWZyb250ZW5kL3VzZXJzJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9tb2RlbHMvdXNlcic7XG5pbXBvcnQge0NvbmZpcm1EaWFsb2dNb2R1bGV9IGZyb20gJ3ByaW1lbmcvY29uZmlybWRpYWxvZyc7XG5pbXBvcnQge0NvbmZpcm1hdGlvblNlcnZpY2V9IGZyb20gJ3ByaW1lbmcvYXBpJztcblxuaW1wb3J0IHtNZXNzYWdlc01vZHVsZX0gZnJvbSAncHJpbWVuZy9tZXNzYWdlcyc7XG5cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYXltZW50LW9wdGlvbnMnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGF5bWVudC1vcHRpb25zLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbYCNwYWdlLW1hc2sge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICB9YF0sXG4gIHByb3ZpZGVyczogW0tsYXJuYUNvbXBvbmVudF1cblxufSlcbmV4cG9ydCBjbGFzcyBQYXltZW50T3B0aW9ucyBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgZXJyb3JNZXNzYWdlOiBib29sZWFuO1xuICBlcnJvcm1lc3NhZ2U6IFN0cmluZ1tdO1xuICBtc2dzOiBNZXNzYWdlW10gPSBbXTtcbiAgcHJpdmF0ZSBjYXJ0OiBDYXJ0O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSB1c2Vyc1NlcnZpY2U6IFVzZXJzU2VydmljZSxcbiAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcbiAgICBwcml2YXRlIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSxcbiAgICBwcml2YXRlIG9yZGVyc1NlcnZpY2U6IE9yZGVyc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjaGVja291dDogQ2hlY2tvdXRTZXJ2aWNlLFxuICAgIHByaXZhdGUga2MgOiBLbGFybmFDb21wb25lbnQsXG5cbiAgICBcbiAgICBwcml2YXRlIGNvbmZpcm1hdGlvblNlcnZpY2U6IENvbmZpcm1hdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBwcmltZW5nQ29uZmlnOiBQcmltZU5HQ29uZmlnXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHRoaXMudXNlciA9IG5ldyBVc2VyO1xuICAgICAgICAgICAgICAgIHRoaXMucHJpbWVuZ0NvbmZpZy5yaXBwbGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FydCA9IHRoaXMuY2FydFNlcnZpY2UuZ2V0Q2FydCgpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgY2hlY2tvdXRGb3JtR3JvdXA6IEZvcm1Hcm91cDtcbiAgICAgICAgICAgICAgaXNTdWJtaXR0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgb3JkZXJJdGVtczogT3JkZXJJdGVtW10gPSBbXTtcbiAgICAgICAgICAgICAgdXNlcklkOiBzdHJpbmc7XG4gICAgICAgICAgICAgIGNvdW50cmllcyA9IFtdO1xuICAgICAgICAgICAgICAgdW5zdWJzY3JpYmUkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuICAgICAgICAgICAgICAgcGF5bWVudEhhbmRsZXI6IGFueSA9IG51bGw7XG4gICAgICAgICAgICAgICBzdWNjZXNzOiBib29sZWFuID0gZmFsc2U7XG4gICAgICAgICAgICAgICBmYWlsdXJlOmJvb2xlYW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgIHVzZXI6IFVzZXI7XG4gICAgICAgICAgICAgICBkYXRhO1xuXG5cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgIHRoaXMuY2FydCA9IHRoaXMuY2FydFNlcnZpY2UuZ2V0Q2FydCgpO1xuXG4gICAgdGhpcy5faW5pdFVzZXJGb3JtKCk7XG4gICAgdGhpcy5fYXV0b0ZpbGxVc2VyRGF0YSgpO1xuICAgIHRoaXMuX2dldENvdW50cmllcygpO1xuICAgIHRoaXMuX2dldENhcnRJdGVtcygpO1xuICAgIHRoaXMuaW52b2tlU3RyaXBlKCk7XG4gICAgdGhpcy5kYXRhID0gIHRoaXMucGFyc2VKd3Qoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImF1dGhUb2tlblwiKSk7XG4gICAgdGhpcy51c2VyLmNvdW50cnk9ICAgICAgdGhpcy5kYXRhLmNvdW50cnk7XG4gICAgdGhpcy51c2VyLmFkZHJlc3MxPSAgICAgdGhpcy5kYXRhWydhZGRyZXNzMSddO1xuICAgIHRoaXMudXNlci5hZGRyZXNzMj0gICAgIHRoaXMuZGF0YS5hZGRyZXNzMjtcbiAgICB0aGlzLnVzZXIuZGF0ZT0gICAgICAgICB0aGlzLmRhdGEuZGF0ZU9mQmlydGg7XG4gICAgdGhpcy51c2VyLmVtYWlsPSAgICAgICAgdGhpcy5kYXRhLmVtYWlsO1xuICAgIHRoaXMudXNlci5waG9uZT0gICAgICAgIHRoaXMuZGF0YS5waG9uZTtcbiAgICB0aGlzLnVzZXIucG9zdGFsQ29kZT0gICB0aGlzLmRhdGEucG9zdGFsQ29kZTtcbiAgICB0aGlzLnVzZXIuc2V4PSAgICAgICAgICB0aGlzLmRhdGEuZ2VuZGVyO1xuICAgIHRoaXMudXNlci5mTmFtZSA9ICAgICAgIHRoaXMuZGF0YS5mTmFtZTtcbiAgICB0aGlzLnVzZXIubE5hbWUgPSAgICAgICB0aGlzLmRhdGEubE5hbWU7XG4gICAgdGhpcy51c2VyLnJlZ2lvbiA9ICAgICAgdGhpcy5kYXRhLnJlZ2lvbjtcbiAgICB0aGlzLnVzZXIuY2l0eSA9ICAgICAgICB0aGlzLmRhdGEuY2l0eTtcbiAgICB0aGlzLnVzZXIuc3RhdGUgPSAgICAgICB0aGlzLmRhdGEuc3RhdGU7XG4gICAgdGhpcy51c2VyLnByZWZpeCA9ICAgICAgdGhpcy5kYXRhLnByZWZpeDtcbiAgICB0aGlzLmtjID0gbmV3IEtsYXJuYUNvbXBvbmVudCgpO1xuICAgIHRoaXMua2MucHJpbnRIZWxsbygpO1xuXG4gICAgY29uc29sZS5sb2coXCJ0aGlzIHVzZXIgPSBcIiArIEpTT04uc3RyaW5naWZ5KHRoaXMudXNlcikpO1xuICBcblxuXG4gIH1cbiAgcGFyc2VKd3QgKHRva2VuKSB7XG4gICAgdmFyIGJhc2U2NFVybCA9IHRva2VuLnNwbGl0KCcuJylbMV07XG4gICAgdmFyIGJhc2U2NCA9IGJhc2U2NFVybC5yZXBsYWNlKC8tL2csICcrJykucmVwbGFjZSgvXy9nLCAnLycpO1xuICAgIHZhciBqc29uUGF5bG9hZCA9IGRlY29kZVVSSUNvbXBvbmVudCh3aW5kb3cuYXRvYihiYXNlNjQpLnNwbGl0KCcnKS5tYXAoZnVuY3Rpb24oYykge1xuICAgICAgICByZXR1cm4gJyUnICsgKCcwMCcgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpKS5zbGljZSgtMik7XG4gICAgfSkuam9pbignJykpO1xuXG4gICAgcmV0dXJuIEpTT04ucGFyc2UoanNvblBheWxvYWQpO1xufTtcblxuICBwcml2YXRlIF9pbml0VXNlckZvcm0oKSB7XG4gICAgdGhpcy5jaGVja291dEZvcm1Hcm91cCA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgbmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIGVtYWlsOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLmVtYWlsXV0sXG4gICAgICBwaG9uZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIGNpdHk6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBjb3VudHJ5OiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgemlwOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgYXBhcnRtZW50OiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgc3RyZWV0OiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgfSk7XG4gIH1cblxuXG4gIHByaXZhdGUgX2F1dG9GaWxsVXNlckRhdGEoKSB7XG4gICAgLypcbiAgICB0aGlzLnVzZXJzU2VydmljZVxuICAgICAgLm9ic2VydmVDdXJyZW50VXNlcigpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKVxuICAgICAgLnN1YnNjcmliZSgodXNlcikgPT4ge1xuICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgIHRoaXMudXNlcklkID0gdXNlci5pZDtcbiAgICAgICAgICB0aGlzLmNoZWNrb3V0Rm9ybS5uYW1lLnNldFZhbHVlKHVzZXIubmFtZSk7XG4gICAgICAgICAgdGhpcy5jaGVja291dEZvcm0uZW1haWwuc2V0VmFsdWUodXNlci5lbWFpbCk7XG4gICAgICAgICAgdGhpcy5jaGVja291dEZvcm0ucGhvbmUuc2V0VmFsdWUodXNlci5waG9uZSk7XG4gICAgICAgICAgdGhpcy5jaGVja291dEZvcm0uY2l0eS5zZXRWYWx1ZSh1c2VyLmNpdHkpO1xuICAgICAgICAgIHRoaXMuY2hlY2tvdXRGb3JtLnN0cmVldC5zZXRWYWx1ZSh1c2VyLnN0cmVldCk7XG4gICAgICAgICAgdGhpcy5jaGVja291dEZvcm0uY291bnRyeS5zZXRWYWx1ZSh1c2VyLmNvdW50cnkpO1xuICAgICAgICAgIHRoaXMuY2hlY2tvdXRGb3JtLnppcC5zZXRWYWx1ZSh1c2VyLnppcCk7XG4gICAgICAgICAgdGhpcy5jaGVja291dEZvcm0uYXBhcnRtZW50LnNldFZhbHVlKHVzZXIuYXBhcnRtZW50KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAqL1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0Q2FydEl0ZW1zKCl7XG5cbiAgfVxuXG4gIHByaXZhdGUgX2dldENvdW50cmllcygpe1xuICAgIHRoaXMuY291bnRyaWVzID0gdGhpcy51c2Vyc1NlcnZpY2UuZ2V0Q291bnRyaWVzKCk7XG4gICAgY29uc29sZS5sb2codGhpcy5jb3VudHJpZXMpO1xuICB9XG5cblxuICBiYWNrVG9DYXJ0KCl7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvY2FydCddKTtcbiAgfVxuXG4gIGFzeW5jIHBsYWNlT3JkZXIoKSB7XG4gICAgY29uc29sZS5sb2coXCJ0b3RhbCBwcmljZSA9IFwiICsgdGhpcy5jYXJ0LmdldFRvdGFsUHJpY2UoKSk7XG5cbiAgICBjb25zb2xlLmxvZyhcIm9wemlvbmUgPSBcIiArIHRoaXMuY2hlY2tTZWxlY3RlZE9wdGlvbnMoKSk7XG5cbiAgICBzd2l0Y2godGhpcy5jaGVja1NlbGVjdGVkT3B0aW9ucygpKXtcbiAgICAgIGNhc2UgXCJjcmVkaXRcIiA6XG4gICAgICAgIHRoaXMubWFrZVBheW1lbnQodGhpcy5jYXJ0LmdldFRvdGFsUHJpY2UoKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInJhdGVcIiA6XG4gICAgICAgLy8gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJvcmRlclwiKTtcbiAgICAgICAgbGV0IHVzZXJTZXNzaW9uID0gIHRoaXMucGFyc2VKd3Qoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImF1dGhUb2tlblwiKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSE8gVFJPVkFUTyBRVUVTVE8gVVNFUiBEQUxMJ0FVVEggVE9LRU46XCIgKyBKU09OLnN0cmluZ2lmeSh1c2VyU2Vzc2lvbikpXG5cbiAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcblxuICAgICAgICBsZXQgb3JkZXI6IE9yZGVyID0gbmV3IE9yZGVyO1xuICAgICAgICBvcmRlci5jaXR5ID0gdGhpcy51c2VyLmNpdHk7XG4gICAgICAgIG9yZGVyLmNvdW50cnkgPSB0aGlzLnVzZXIuY291bnRyeTtcbiAgICAgICAgb3JkZXIuZGF0ZU9yZGVyZWQgPSBTdHJpbmcobm93KTtcbiAgICAgICAgb3JkZXIuaWQgPSAnMTIzMTIzMTIzJztcbiAgICAgICAgb3JkZXIucGhvbmUgPSB0aGlzLnVzZXIucGhvbmU7XG4gICAgICAgIG9yZGVyLnNoaXBwaW5nQWRkcmVzczEgPSB0aGlzLnVzZXIuYWRkcmVzczE7XG4gICAgICAgIG9yZGVyLnRvdGFsUHJpY2UgPSBTdHJpbmcodGhpcy5jYXJ0LmdldFRvdGFsUHJpY2UoKSk7XG4gICAgICAgIG9yZGVyLnppcCA9IHRoaXMudXNlci5wb3N0YWxDb2RlO1xuICAgICAgICBvcmRlci51c2VyID0gdXNlclNlc3Npb24udXNlcklkO1xuICAgICAgICBvcmRlci5pZCA9IG51bGw7XG4gICAgICAgIG9yZGVyLmVtYWlsID0gdGhpcy51c2VyLmVtYWlsO1xuICAgICAgICBvcmRlci5wYXltZW50T3B0aW9uID0gXCJrbGFybmFcIjtcbiAgICAgICAgb3JkZXIuY29uZmlybWVkID0gdHJ1ZTtcbiAgICAgICAgXG4gICAgICAgIGxldCB2YXJpYW50cyA9ICB0aGlzLmNhcnQuZ2V0QWxsVmFyaWFudHMoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJ2YXJpYW50cyA9IFwiICsgSlNPTi5zdHJpbmdpZnkodmFyaWFudHMpKTtcbiAgICAgICAgb3JkZXIub3JkZXJJdGVtcyA9IHRoaXMuY2FydC5nZXRBbGxWYXJpYW50cygpO1xuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwib3JkZXJcIiwgSlNPTi5zdHJpbmdpZnkob3JkZXIpKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcInByaW1hIGRpIHBhZ2FyZSBjb24ga2xhcm5hIHN0byB1c2FuZG8gcXVlc3RvIG9yZGluZTogXCIgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm9yZGVyXCIpICsgXCIgIFwiICsgSlNPTi5zdHJpbmdpZnkobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJvcmRlclwiKSkpO1xuXG4gICAgICAgIGF3YWl0IHRoaXMua2MucGF5KHRoaXMuY2FydC5nZXRUb3RhbFByaWNlKCkpO1xuICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwiY29udGFudGlcIiA6XG4gICAgICAgICAgY29uc29sZS5sb2coXCJjb250YW50aVwiKTtcbiAgICAgICAgICBsZXQgdW5jb25maXJtZWRPcmRlcnMgPSB0aGlzLm9yZGVyc1NlcnZpY2UuZ2V0VW5jb25maXJtZWRPcmRlcih0aGlzLnVzZXIucHJlZml4LCB0aGlzLnVzZXIucGhvbmUpLnN1YnNjcmliZShkYXRhID0+e1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJVTkNPTkZJUk1FVCBPUkRFUlMgPSBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgICAgIGlmKGRhdGEuY291bnQgPT0gJzAnKXtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpcm0oKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHRoaXMuY2FudENvbmZpcm0oZGF0YS5jb3VudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIFxuICAgICAgICBjYXNlIFwicGF5cGFsXCI6XG4gICAgICAgICAgY29uc29sZS5sb2coXCJwYXlwYWxcIilcbiAgICAgICAgICBjb25zdCBub3cyID0gbmV3IERhdGUoKTtcbiAgICAgICAgICBsZXQgdXNlclNlc3Npb24yID0gIHRoaXMucGFyc2VKd3Qoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImF1dGhUb2tlblwiKSk7XG4gICAgICAgICAgbGV0IG9yZGVyMiA9IG5ldyBPcmRlcigpO1xuICAgICAgICAgIG9yZGVyMi5jaXR5ID0gdGhpcy51c2VyLmNpdHk7XG4gICAgICAgICAgb3JkZXIyLmNvdW50cnkgPSB0aGlzLnVzZXIuY291bnRyeTtcbiAgICAgICAgICBvcmRlcjIuZGF0ZU9yZGVyZWQgPSBTdHJpbmcobm93Mik7XG4gICAgICAgICAgb3JkZXIyLmlkID0gJzEyMzEyMzEyMyc7XG4gICAgICAgICAgb3JkZXIyLnBob25lID0gdGhpcy51c2VyLnBob25lO1xuICAgICAgICAgIG9yZGVyMi5zaGlwcGluZ0FkZHJlc3MxID0gdGhpcy51c2VyLmFkZHJlc3MxO1xuICAgICAgICAgIG9yZGVyMi50b3RhbFByaWNlID0gU3RyaW5nKHRoaXMuY2FydC5nZXRUb3RhbFByaWNlKCkpO1xuICAgICAgICAgIG9yZGVyMi56aXAgPSB0aGlzLnVzZXIucG9zdGFsQ29kZTtcbiAgICAgICAgICBvcmRlcjIudXNlciA9IHVzZXJTZXNzaW9uMi51c2VySWQ7XG4gICAgICAgICAgb3JkZXIyLmlkID0gbnVsbDtcbiAgICAgICAgICBvcmRlcjIuZW1haWwgPSB0aGlzLnVzZXIuZW1haWw7XG4gICAgICAgICAgb3JkZXIyLnBheW1lbnRPcHRpb24gPSBcIlBheXBhbFwiO1xuICAgICAgICAgIG9yZGVyMi5jb25maXJtZWQgPSB0cnVlO1xuICAgICAgICAgIFxuICAgICAgICAgIGxldCB2YXJpYW50czIgPSAgdGhpcy5jYXJ0LmdldEFsbFZhcmlhbnRzKCk7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJ2YXJpYW50cyA9IFwiICsgSlNPTi5zdHJpbmdpZnkodmFyaWFudHMyKSk7XG4gICAgICAgICAgb3JkZXIyLm9yZGVySXRlbXMgPSB0aGlzLmNhcnQuZ2V0QWxsVmFyaWFudHMoKTtcbiAgXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJvcmRlclwiLCBKU09OLnN0cmluZ2lmeShvcmRlcjIpKTtcblxuXG4gICAgICAgICAvLyB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9wYXlwYWwnXSk7XG4gICAgICAgICB0aGlzLmNoZWNrb3V0LnBheVBhbCh0aGlzLmNhcnQsIG9yZGVyMikuc3Vic2NyaWJlKChkYXRhKT0+e1xuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGF0YS5yZWRpcmVjdFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpZih0aGlzLmNoZWNrU2VsZWN0ZWRPcHRpb25zKCkpe1xuICAgICAgLy90aGlzLm1ha2VQYXltZW50KHRoaXMuY2FydC5nZXRUb3RhbFByaWNlKCkpO1xuICAgLy8gICBhd2FpdCB0aGlzLmtjLnBheSh0aGlzLmNhcnQuZ2V0VG90YWxQcmljZSgpKTtcbiAgICBcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gZmFsc2U7XG4gICAgfWVsc2V7XG4gICAgICBjb25zb2xlLmxvZyhcImVycm9yIGluIHRoZSBzaGlwcGluZyBhZGRyZXNzXCIpO1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSB0cnVlO1xuICAgIH1cblxuICB9XG5cbiAgY2FudENvbmZpcm0obiA6IHN0cmluZykgOiB2b2lke1xuICAgIHRoaXMuY29uZmlybWF0aW9uU2VydmljZS5jb25maXJtKHtcblxuICAgICAgbWVzc2FnZTogJ0NpIHNvbm8gYXR0dWFsbWVudGUgJyArIG4gKyAnIG9yZGluaSBub24gY29uZmVybWF0aS48YnI+Tm9uIHB1b2kgcmVnaXN0cmFyZSBudW92aSBvcmRpbmkgZmluY2jDqCBoYWkgYWx0cmkgb3JkaW5pIHJlZ2lzdHJhdGkgZSBub24gY29uZmVybWF0aSB0cmFtaXRlIHNtcy48YnI+PC9iPlB1b2kgY29uZmVybWFyZS9hbm51bGxhcmUgZ2xpIG9yZGluaSBhbmRhbmRvIHN1IDxhIGhyZWY9XFwnaHR0cHM6Ly9jYXRhbGRvcHJvZHVjdGlvbi5oZXJva3VhcHAuY29tLyMvbXlPcmRlcnNcXCc+SSBtaWVpIG9yZGluaTwvYT4nICxcbiAgICAgIGFjY2VwdDogKCkgPT4ge1xuICAgICAgICB0aGlzLm1zZ3MgPSBbe3NldmVyaXR5OidpbmZvJywgc3VtbWFyeTonUmVqZWN0ZWQnLCBkZXRhaWw6J0ltcG9zc2liaWxlIHJlZ2lzdHJhcmUgbFxcJ29yZGluZSd9XTtcbiAgICAgIH0sXG4gICAgICByZWplY3Q6ICgpID0+IHtcbiAgICAgICAgICB0aGlzLm1zZ3MgPSBbe3NldmVyaXR5OidpbmZvJywgc3VtbWFyeTonUmVqZWN0ZWQnLCBkZXRhaWw6J0ltcG9zc2liaWxlIHJlZ2lzdHJhcmUgbFxcJ29yZGluZSd9XTtcbiAgICAgIH1cbiAgICAgICAgXG4gIH0pO1xufVxuXG4gIGNvbmZpcm0oKSA6IHZvaWR7XG5cblxuXG4gICAgdGhpcy5jb25maXJtYXRpb25TZXJ2aWNlLmNvbmZpcm0oe1xuICAgICAgbWVzc2FnZTogJ0NsaWNjYW5kbyBzdSBjb25mZXJtYSB0aSBpbXBlZ25pIGEgcGFnYXJlIGxcXCdvcmRpbmUuIDxicj4gPGI+UmljZXZlcmFpIHVuIHNtcyBhbGxcXCdudW1lcm8gJyArIHRoaXMudXNlci5waG9uZSArICc8YnI+UGVyIGNvbmZlcm1hcmUgbFxcJ29yZGluZSBkb3ZyYWkgcmlzcG9uZGVyZSBhbGxcXCdzbXMgaW52aWFuZG8gXFwnU0lcXCcgPC9iPicsXG4gICAgICBhY2NlcHQ6ICgpID0+IHtcbiAgICAgICAgICB0aGlzLm1zZ3MgPSBbe3NldmVyaXR5OidpbmZvJywgc3VtbWFyeTonQ29uZmlybWVkJywgZGV0YWlsOidSaWNvcmRhdGkgY2hlIHBlciBjb25mZXJtYXJlIGxcXCdvcmRpbmUgZG92cmFpIHJpc3BvbmRlcmUgaW52aWFuZG8gXFwnU0lcXCcgYWxsXFwnc21zIHJpY2V2dXRvISd9XTtcblxuXG4gICAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcblxuICAgICAgICAgIGxldCBvcmRlcjogT3JkZXIgPSBuZXcgT3JkZXI7XG4gICAgICAgICAgb3JkZXIuY2l0eSA9IHRoaXMudXNlci5jaXR5O1xuICAgICAgICAgIG9yZGVyLmNvdW50cnkgPSB0aGlzLnVzZXIuY291bnRyeTtcbiAgICAgICAgICBvcmRlci5kYXRlT3JkZXJlZCA9IFN0cmluZyhub3cpO1xuICAgICAgICAgIG9yZGVyLmlkID0gJzEyMzEyMzEyMyc7XG4gICAgICAgICAgb3JkZXIucGhvbmUgPSB0aGlzLnVzZXIucGhvbmU7XG4gICAgICAgICAgb3JkZXIucHJlZml4ID0gdGhpcy51c2VyLnByZWZpeDtcbiAgICAgICAgICBvcmRlci5zaGlwcGluZ0FkZHJlc3MxID0gdGhpcy51c2VyLmFkZHJlc3MxO1xuICAgICAgICAgIG9yZGVyLnRvdGFsUHJpY2UgPSBTdHJpbmcodGhpcy5jYXJ0LmdldFRvdGFsUHJpY2UoKSk7XG4gICAgICAgICAgb3JkZXIuemlwID0gdGhpcy51c2VyLnBvc3RhbENvZGU7XG4gICAgICAgICAgb3JkZXIuZW1haWwgPSB0aGlzLmRhdGEuZW1haWw7XG4gICAgICAgICAgb3JkZXIudXNlciA9IHRoaXMuZGF0YS51c2VySWQ7XG4gICAgICAgICAgb3JkZXIuaWQgPSBudWxsO1xuICAgICAgICAgIG9yZGVyLmNvbmZpcm1lZCA9IGZhbHNlO1xuICAgICAgICAgIG9yZGVyLnBheW1lbnRPcHRpb24gPSBcIkNvbnRhbnRpXCI7XG4gICAgICAgICAgbGV0IHZhcmlhbnRzID0gIHRoaXMuY2FydC5nZXRBbGxWYXJpYW50cygpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwidmFyaWFudHMgPSBcIiArIEpTT04uc3RyaW5naWZ5KHZhcmlhbnRzKSk7XG4gICAgICAgICAgb3JkZXIub3JkZXJJdGVtcyA9IHRoaXMuY2FydC5nZXRBbGxWYXJpYW50cygpO1xuICBcbiAgXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJvcmRlclwiLCBKU09OLnN0cmluZ2lmeShvcmRlcikpO1xuXG4gICAgICAgICAgdGhpcy5vcmRlcnNTZXJ2aWNlLmNyZWF0ZU5ld09yZGVyKG9yZGVyLCB0aGlzLnVzZXIuZW1haWwsIHRoaXMudXNlci5wcmVmaXgpLnN1YnNjcmliZSgoZGF0YSkgPT57XG5cblxuICAgICBcblxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkkgYW0gY3JlYXRpbmcgdGhpcyBuZXcgb3JkZXI6IFwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhOiBcIiArIGRhdGEpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleGFtcGxlTW9kYWxMYWJlbFwiKS5pbm5lclRleHQ9XCJZb3VyIG9yZGVyIG51bWJlciBpczogXCIgKyBkYXRhLl9pZDtcblxuICAgICAgICAgIC8vICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKClcblxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiY2FydEJ5THVjYVwiKTtcbiAgICAgICAgICB0aGlzLmNhcnRTZXJ2aWNlLmdldENhcnQoKTtcbiAgICAgICAgICB0aGlzLmNhcnQuZW1wdHlDYXJ0KCk7XG5cbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL29yZGVycy8nICsgZGF0YS5faWRdKTtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuYWRkKHtcbiAgICAgICAgICAgICAgc2V2ZXJpdHk6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgc3VtbWFyeTogJ1N1Y2NlcycsXG4gICAgICAgICAgICAgIGRldGFpbDogYFN1Y2Nlc2Z1bCB0cmFuc2FjdGlvbiFgXG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICB0aGlzLmNoZWNrb3V0LnNlbmRTbXMoZGF0YS5faWQsIGRhdGEucGhvbmUsIHRoaXMudXNlci5wcmVmaXgpLnN1YnNjcmliZSgoZGF0YSkgPT57XG5cbiAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5hZGQoe1xuICAgICAgICAgICAgICAgIHNldmVyaXR5OiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgc3VtbWFyeTogJ1N1Y2NlcycsXG4gICAgICAgICAgICAgICAgZGV0YWlsOiBgU01TIGludmlhdG8hYFxuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSlcblxuICAgICAgfSxcbiAgICAgIHJlamVjdDogKCkgPT4ge1xuICAgICAgICAgIHRoaXMubXNncyA9IFt7c2V2ZXJpdHk6J2luZm8nLCBzdW1tYXJ5OidSZWplY3RlZCcsIGRldGFpbDonTFxcJ29yZGluZSBub24gw6ggc3RhdG8gY29uZmVybWF0byEnfV07XG4gICAgICB9XG4gIH0pO1xuICB9XG5cbiAgY2hlY2tTZWxlY3RlZE9wdGlvbnMoKSA6IHN0cmluZ3tcblxuXG4gICAgcmV0dXJuICg8SFRNTElucHV0RWxlbWVudD4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cIm9wdHJhZGlvXCJdOmNoZWNrZWQnKSkudmFsdWU7XG5cbiAgfVxuIFxuICBnZXQgY2hlY2tvdXRGb3JtKCkge1xuICAgIHJldHVybiB0aGlzLmNoZWNrb3V0Rm9ybUdyb3VwLmNvbnRyb2xzO1xuICB9XG5cbiAgbWFrZVBheW1lbnQoYW1vdW50OiBudW1iZXIpIHtcblxuXG4gICAgbGV0IHVzZXJTZXNzaW9uID0gIHRoaXMucGFyc2VKd3Qoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImF1dGhUb2tlblwiKSk7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZS1tYXNrJykuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuXG4gICAgY29uc3QgcGF5bWVudEhhbmRsZXIgPSAoPGFueT53aW5kb3cpLlN0cmlwZUNoZWNrb3V0LmNvbmZpZ3VyZSh7XG4gICAgICBrZXk6ICdwa190ZXN0XzUxTFlVQ0dERXlpWDNlM1BsODlqcW1WZzFnVE4yUWhpZnl3dElsZzZBejFuaUdVVjNBTlJwQU5YSjhoZEVJandETmE4R1RCdm5yeHEzemdkUjhnRXp4Z1JUMDB1SGxmdFFuRicsXG4gICAgICBsb2NhbGU6ICdhdXRvJyxcbiAgICAgIHRva2VuOiBmdW5jdGlvbiAoc3RyaXBlVG9rZW46IGFueSkge1xuICAgICAgICBjb25zb2xlLmxvZyhzdHJpcGVUb2tlbik7XG4gICAgICAgIHBheW1lbnRzdHJpcGUoc3RyaXBlVG9rZW4pO1xuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHBheW1lbnRzdHJpcGUgPSAoc3RyaXBlVG9rZW46IGFueSkgPT4ge1xuICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpIGFzIEhUTUxFbGVtZW50IHwgbnVsbFxuICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG4gICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2VNb2RhbFwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2UtbWFzaycpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfSk7XG5cbiAgICAgIHRoaXMuY2hlY2tvdXQubWFrZVBheW1lbnQoc3RyaXBlVG9rZW4sIGFtb3VudCkuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2VNb2RhbEZvb3RlclwiKS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2FkaW5nU3Bpbm5lclwiKS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xuXG5cbiAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcblxuICAgICAgICBsZXQgb3JkZXI6IE9yZGVyID0gbmV3IE9yZGVyO1xuICAgICAgICBvcmRlci5jaXR5ID0gdGhpcy51c2VyLmNpdHk7XG4gICAgICAgIG9yZGVyLmNvdW50cnkgPSB0aGlzLnVzZXIuY291bnRyeTtcbiAgICAgICAgb3JkZXIuZGF0ZU9yZGVyZWQgPSBTdHJpbmcobm93KTtcbiAgICAgICAgb3JkZXIuaWQgPSAnMTIzMTIzMTIzJztcbiAgICAgICAgb3JkZXIucGhvbmUgPSB0aGlzLnVzZXIucGhvbmU7XG4gICAgICAgIG9yZGVyLnNoaXBwaW5nQWRkcmVzczEgPSB0aGlzLnVzZXIuYWRkcmVzczE7XG4gICAgICAgIG9yZGVyLnRvdGFsUHJpY2UgPSBTdHJpbmcodGhpcy5jYXJ0LmdldFRvdGFsUHJpY2UoKSk7XG4gICAgICAgIG9yZGVyLnppcCA9IHRoaXMudXNlci5wb3N0YWxDb2RlO1xuICAgICAgICBvcmRlci5lbWFpbCA9IHRoaXMuZGF0YS5lbWFpbDtcbiAgICAgICAgb3JkZXIudXNlciA9IHRoaXMuZGF0YS51c2VySWQ7XG4gICAgICAgIG9yZGVyLmlkID0gbnVsbDtcbiAgICAgICAgb3JkZXIuY29uZmlybWVkID0gdHJ1ZTtcbiAgICAgICAgb3JkZXIucGF5bWVudE9wdGlvbiA9IFwiQ2FydGEgZGkgY3JlZGl0b1wiO1xuICAgICAgICBsZXQgdmFyaWFudHMgPSAgdGhpcy5jYXJ0LmdldEFsbFZhcmlhbnRzKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidmFyaWFudHMgPSBcIiArIEpTT04uc3RyaW5naWZ5KHZhcmlhbnRzKSk7XG4gICAgICAgIG9yZGVyLm9yZGVySXRlbXMgPSB0aGlzLmNhcnQuZ2V0QWxsVmFyaWFudHMoKTtcblxuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwib3JkZXJcIiwgSlNPTi5zdHJpbmdpZnkob3JkZXIpKTtcblxuICAgICAgICBcblxuXG5cblxuXG4gICAgICAgIGlmIChkYXRhLmRhdGEgPT09IFwic3VjY2Vzc1wiKSB7XG4gICAgICAgICAgdGhpcy5zdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmZhaWx1cmUgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLm9yZGVyc1NlcnZpY2UuY3JlYXRlTmV3T3JkZXIob3JkZXIsIHRoaXMudXNlci5lbWFpbCwgdGhpcy51c2VyLnByZWZpeCkuc3Vic2NyaWJlKChkYXRhKSA9PntcblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJJIGFtIGNyZWF0aW5nIHRoaXMgbmV3IG9yZGVyOiBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YTogXCIgKyBkYXRhKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhhbXBsZU1vZGFsTGFiZWxcIikuaW5uZXJUZXh0PVwiWW91ciBvcmRlciBudW1iZXIgaXM6IFwiICsgZGF0YS5faWQ7XG5cbiAgICAgICAgICAvLyAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgpXG5cbiAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImNhcnRCeUx1Y2FcIik7XG4gICAgICAgICAgdGhpcy5jYXJ0U2VydmljZS5nZXRDYXJ0KCk7XG4gICAgICAgICAgdGhpcy5jYXJ0LmVtcHR5Q2FydCgpO1xuXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9vcmRlcnMvJyArIGRhdGEuX2lkXSk7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmFkZCh7XG4gICAgICAgICAgICAgIHNldmVyaXR5OiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgIHN1bW1hcnk6ICdTdWNjZXMnLFxuICAgICAgICAgICAgICBkZXRhaWw6IGBTdWNjZXNmdWwgdHJhbnNhY3Rpb24hYFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSlcblxuXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWNjZXNzXCIpLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiO1xuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5mYWlsdXJlID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnN1Y2Nlc3MgPSBmYWxzZTtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZhaWxlZFwiKS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHBheW1lbnRIYW5kbGVyLm9wZW4oe1xuICAgICAgbmFtZTogJ0NhdGFsZG8gU3RvcmUnLFxuICAgICAgZGVzY3JpcHRpb246ICdQbGVhc2UgZmlsbCB5b3VyIGJpbGxpbmcgaW5mb3JtYXRpb25zJyxcbiAgICAgIGFtb3VudDogYW1vdW50ICogMTAwLFxuICAgIH0pO1xuXG4gIH1cblxuICBpbnZva2VTdHJpcGUoKSB7XG4gICAgaWYgKCF3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0cmlwZS1zY3JpcHQnKSkge1xuICAgICAgY29uc3Qgc2NyaXB0ID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgc2NyaXB0LmlkID0gJ3N0cmlwZS1zY3JpcHQnO1xuICAgICAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICAgIHNjcmlwdC5zcmMgPSAnaHR0cHM6Ly9jaGVja291dC5zdHJpcGUuY29tL2NoZWNrb3V0LmpzJztcbiAgICAgIHNjcmlwdC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucGF5bWVudEhhbmRsZXIgPSAoPGFueT53aW5kb3cpLlN0cmlwZUNoZWNrb3V0LmNvbmZpZ3VyZSh7XG4gICAgICAgICAga2V5OiAncGtfdGVzdF81MUxZVUNHREV5aVgzZTNQbDg5anFtVmcxZ1ROMlFoaWZ5d3RJbGc2QXoxbmlHVVYzQU5ScEFOWEo4aGRFSWp3RE5hOEdUQnZucnhxM3pnZFI4Z0V6eGdSVDAwdUhsZnRRbkYnLFxuICAgICAgICAgIGxvY2FsZTogJ2F1dG8nLFxuICAgICAgICAgIHRva2VuOiBmdW5jdGlvbiAoc3RyaXBlVG9rZW46IGFueSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coc3RyaXBlVG9rZW4pO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICB9XG4gIH1cblxufVxuIiwiPHNjcmlwdCBzcmM9XCJodHRwczovL2pzLnN0cmlwZS5jb20vdjMvXCIgZGVmZXI+PC9zY3JpcHQ+XG48ZGl2IGNsYXNzPVwicC0yXCI+XG4gIDxwLWNvbmZpcm1EaWFsb2cgI2NkICBoZWFkZXI9XCJDb25maXJtYXRpb25cIiBpY29uPVwicGkgcGktZXhjbGFtYXRpb24tdHJpYW5nbGVcIj5cbiAgICA8bmctdGVtcGxhdGUgcFRlbXBsYXRlPVwiaGVhZGVyXCI+XG4gICAgICA8aDM+Q29uZmVybWEgb3JkaW5lPC9oMz5cbiAgPC9uZy10ZW1wbGF0ZT5cblxuICA8bmctdGVtcGxhdGUgcFRlbXBsYXRlPVwiZm9vdGVyXCI+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgcEJ1dHRvbiBpY29uPVwicGkgcGktdGltZXNcIiBsYWJlbD1cIkFubnVsbGFcIiAoY2xpY2spPVwiY2QucmVqZWN0KClcIj48L2J1dHRvbj5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBwQnV0dG9uIGljb249XCJwaSBwaS1jaGVja1wiIGxhYmVsPVwiQ29uZmVybWFcIiAoY2xpY2spPVwiY2QuYWNjZXB0KClcIj48L2J1dHRvbj5cbjwvbmctdGVtcGxhdGU+XG4gIDwvcC1jb25maXJtRGlhbG9nPlxuXG48ZGl2IGNsYXNzPVwiY2hlY2tvdXQtcGFnZSBwYi01XCI+XG4gICAgPGRpdj5cbiAgICAgICAgPHAtYnV0dG9uIGxhYmVsPVwiVG9ybmEgYWwgY2FycmVsbG9cIiBpY29uPVwicGkgcGktYXJyb3ctbGVmdFwiIChvbkNsaWNrKT1cImJhY2tUb0NhcnQoKVwiPjwvcC1idXR0b24+XG4gICAgPC9kaXY+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJncmlkIHAtMlwiIHN0eWxlPVwid2lkdGg6IDEwMCU7IGp1c3RpZnktY29udGVudDogY2VudGVyO1wiPlxuXG4gIDxkaXYgY2xhc3M9XCJyb3dcIiBzdHlsZT1cImp1c3RpZnktY29udGVudDogY2VudGVyOyB3aWR0aDogaW5oZXJpdDsgXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbC0xMiBjb2wtbWQtNyBjb2wtbGctNyBwLTJcIiBzdHlsZT1cIlxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXN1cmZhY2UtMjAwKTtcIj5cbiAgICBcbiAgICAgIDxoMyBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlcjsgbWFyZ2luLWJvdHRvbTogMzBweDtcIj5TZWxlemlvbmEgdW4gbWV0b2RvIGRpIHBhZ2FtZW50bzwvaDM+XG4gICAgICA8aHI+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtOFwiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiBpZD1cInJhZGlvMVwiIG5hbWU9XCJvcHRyYWRpb1wiIHZhbHVlPVwiY3JlZGl0XCIgY2hlY2tlZD5cbiAgICAgICAgICBDQVJURSBESSBDUkVESVRPXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTRcIj5cbiAgICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+ICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiICBzdHlsZT1cIm1pbi13aWR0aDogNTBweDtcIj48bGkgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmU7XCI+PGltZyBzcmM9XCJhc3NldHMvbWFzdGVyY2FyZC5wbmdcIiAgY2xhc3M9XCJpbWctZmx1aWRcIiBhbHQ9XCJSZXNwb25zaXZlIGltYWdlXCI+PC9saT48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiICBzdHlsZT1cIm1pbi13aWR0aDogNTBweDtcIj48bGkgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmU7XCI+PGltZyBzcmM9J2Fzc2V0cy92aXNhLnBuZycgIGNsYXNzPVwiaW1nLWZsdWlkXCIgYWx0PVwiUmVzcG9uc2l2ZSBpbWFnZVwiPjwvbGk+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIiAgc3R5bGU9XCJtaW4td2lkdGg6IDUwcHg7XCI+PGxpIHN0eWxlPVwiZGlzcGxheTogaW5saW5lO1wiPjxpbWcgc3JjPSdhc3NldHMvYW1lcmljYW5FeHByZXNzLnBuZycgIGNsYXNzPVwiaW1nLWZsdWlkXCIgYWx0PVwiUmVzcG9uc2l2ZSBpbWFnZVwiPjwvbGk+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIiAgc3R5bGU9XCJtaW4td2lkdGg6IDUwcHg7XCI+PGxpIHN0eWxlPVwiZGlzcGxheTogaW5saW5lO1wiPjxpbWcgc3JjPSdhc3NldHMvbWFlc3Ryby5wbmcnICBjbGFzcz1cImltZy1mbHVpZFwiIGFsdD1cIlJlc3BvbnNpdmUgaW1hZ2VcIj48L2xpPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCIgIHN0eWxlPVwibWluLXdpZHRoOiA1MHB4O1wiPjxsaSBzdHlsZT1cImRpc3BsYXk6IGlubGluZTtcIj48aW1nIHNyYz0nYXNzZXRzL3Bvc3RlcGF5LnBuZycgIGNsYXNzPVwiaW1nLWZsdWlkXCIgYWx0PVwiUmVzcG9uc2l2ZSBpbWFnZVwiPjwvbGk+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPGhyPlxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLThcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgaWQ9XCJyYWRpbzJcIiBuYW1lPVwib3B0cmFkaW9cIiB2YWx1ZT1cInJhdGVcIiBjaGVja2VkPlxuICAgICAgICAgIFBBR0FNRU5UTyBBIFJBVEVcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNFwiPlxuICAgICAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj4gICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCIgIHN0eWxlPVwibWluLXdpZHRoOiA1MHB4O1wiPjxsaSBzdHlsZT1cImRpc3BsYXk6IGlubGluZTtcIj48aW1nIHNyYz0nYXNzZXRzL2tsYXJuYS5wbmcnICBjbGFzcz1cImltZy1mbHVpZFwiIGFsdD1cIlJlc3BvbnNpdmUgaW1hZ2VcIj48L2xpPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCIgIHN0eWxlPVwibWluLXdpZHRoOiA1MHB4O1wiPjxsaSBzdHlsZT1cImRpc3BsYXk6IGlubGluZTtcIj48aW1nIHNyYz1cImFzc2V0cy9tYXN0ZXJjYXJkLnBuZ1wiICBjbGFzcz1cImltZy1mbHVpZFwiIGFsdD1cIlJlc3BvbnNpdmUgaW1hZ2VcIj48L2xpPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCIgIHN0eWxlPVwibWluLXdpZHRoOiA1MHB4O1wiPjxsaSBzdHlsZT1cImRpc3BsYXk6IGlubGluZTtcIj48aW1nIHNyYz0nYXNzZXRzL3Zpc2EucG5nJyAgY2xhc3M9XCJpbWctZmx1aWRcIiBhbHQ9XCJSZXNwb25zaXZlIGltYWdlXCI+PC9saT48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiICBzdHlsZT1cIm1pbi13aWR0aDogNTBweDtcIj48bGkgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmU7XCI+PGltZyBzcmM9J2Fzc2V0cy9hbWVyaWNhbkV4cHJlc3MucG5nJyAgY2xhc3M9XCJpbWctZmx1aWRcIiBhbHQ9XCJSZXNwb25zaXZlIGltYWdlXCI+PC9saT48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiICBzdHlsZT1cIm1pbi13aWR0aDogNTBweDtcIj48bGkgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmU7XCI+PGltZyBzcmM9J2Fzc2V0cy9tYWVzdHJvLnBuZycgIGNsYXNzPVwiaW1nLWZsdWlkXCIgYWx0PVwiUmVzcG9uc2l2ZSBpbWFnZVwiPjwvbGk+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIiAgc3R5bGU9XCJtaW4td2lkdGg6IDUwcHg7XCI+PGxpIHN0eWxlPVwiZGlzcGxheTogaW5saW5lO1wiPjxpbWcgc3JjPSdhc3NldHMvcG9zdGVwYXkucG5nJyAgY2xhc3M9XCJpbWctZmx1aWRcIiBhbHQ9XCJSZXNwb25zaXZlIGltYWdlXCI+PC9saT48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxocj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC04XCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIGlkPVwicmFkaW8zXCIgbmFtZT1cIm9wdHJhZGlvXCIgdmFsdWU9XCJwYXlwYWxcIiBjaGVja2VkPlxuICAgICAgICAgIFBBWVBBTFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00XCI+XG4gICAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPiAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIiAgc3R5bGU9XCJtaW4td2lkdGg6IDUwcHg7XCI+PGxpIHN0eWxlPVwiZGlzcGxheTogaW5saW5lO1wiPjxpbWcgc3JjPSdhc3NldHMvcGF5cGFsLnBuZycgIGNsYXNzPVwiaW1nLWZsdWlkXCIgYWx0PVwiUmVzcG9uc2l2ZSBpbWFnZVwiPjwvbGk+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8aHI+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgaWQ9XCJyYWRpbzRcIiBuYW1lPVwib3B0cmFkaW9cIiB2YWx1ZT1cImNvbnRhbnRpXCIgY2hlY2tlZD5cbiAgICAgICAgICBQQUdBIElOIENPTlRBTlRJIEFMTEEgQ09OU0VHTkFcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgXG4gICAgICA8aHI+XG4gICAgPC9kaXY+XG4gICAgXG4gICAgPGRpdiBjbGFzcz1cImNvbC0xMiBjb2wtbWQtNSBjb2wtbGctNVwiPlxuXG4gICAgPGRpdiBpZD1cInBhZ2UtbWFza1wiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj48L2Rpdj5cblxuICAgICAgPCEtLSBNb2RhbCAtLT5cbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbCBmYWRlIGJvcmRlciBib3JkZXItaW5mb1wiIGlkPVwiZXhhbXBsZU1vZGFsXCIgdGFiaW5kZXg9XCItMVwiIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGVNb2RhbExhYmVsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2cgYm9yZGVyIGJvcmRlci1pbmZvIGJvcmRlci00IHJvdW5kZWRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1hdXRvIFwiID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibG9hZGluZ1NwaW5uZXJcIiBjbGFzcz1cInNwaW5uZXItYm9yZGVyIHRleHQtcHJpbWFyeVwiIHJvbGU9XCJzdGF0dXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZpc3VhbGx5LWhpZGRlblwiPkxvYWRpbmcuLi48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPjxoNSBjbGFzcz1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJleGFtcGxlTW9kYWxMYWJlbFwiPldlIGFyZSB2YWxpZGF0aW5nIHlvdXIgdHJhbnNhY3Rpb24sIHBsZWFzZSB3YWl0PC9oNT48L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiY2xvc2VNb2RhbFwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0bi1jbG9zZVwiIGRhdGEtYnMtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJtb2RhbEJvZHlcIiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cInN1Y2Nlc3NcIiBjbGFzcz1cInRleHQtc3VjY2Vzc1wiIHN0eWxlPVwiZm9udC13ZWlnaHQ6IDgwMDsgZGlzcGxheTogbm9uZTtcIj4gVHJhbnNhY3Rpb24gc3VjY2VzZnVsbCE8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cImZhaWxlZFwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIiBzdHlsZT1cImZvbnQtd2VpZ2h0OiA4MDA7IGRpc3BsYXk6IG5vbmU7XCI+IFRyYW5zYWN0aW9uIGZhaWxlZCE8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJjbG9zZU1vZGFsRm9vdGVyXCIgY2xhc3M9XCJ0ZXh0LXNlY29uZGFyeVwiIHN0eWxlPVwiZm9udC1zaXplOnNtYWxsZXI7IGRpc3BsYXk6IG5vbmU7XCI+IE5vdyB5b3UgY2FuIGNsb3NlIHRoaXMgbW9kYWw8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPG9yZGVycy1vcmRlci1zdW1tYXJ5IFtpc0NoZWNrT3V0XT1cInRydWVcIj48L29yZGVycy1vcmRlci1zdW1tYXJ5PlxuICAgICAgPGRpdiBjbGFzcz1cImNoZWNrb3V0LWJ1dHRvblwiPlxuICAgICAgICA8cC1idXR0b24gbGFiZWw9XCJQcm9jZWRpXCIgKG9uQ2xpY2spPVwicGxhY2VPcmRlcigpXCI+PC9wLWJ1dHRvbj5cbiAgICAgIDwvZGl2PlxuIFxuXG4gICAgICA8ZGl2IGNsYXNzPVwiZXJyb3IgbXQtMlwiIHN0eWxlPVwiZm9udC1zaXplOiAyOXB4OyBjb2xvcjpyZWQ7IGZvbnQtd2VpZ2h0OiA4MDA7XCIgKm5nSWY9XCJlcnJvck1lc3NhZ2VcIiA+UGxlYXNlIGZpbGwgYWxsIHRoZSBtYW5kYXRvcnkgZmllbGRzOjwvZGl2PlxuICAgICAgPHVsPlxuICAgICAgICA8bGkgc3R5bGU9XCJmb250LXNpemU6IDIwcHg7IGNvbG9yOnJlZDsgZm9udC13ZWlnaHQ6IDUwMDtcIiAgKm5nRm9yPVwibGV0IGVycm9yIG9mIGVycm9ybWVzc2FnZVwiPlxuICAgICAgICAgICAge3tlcnJvcn19XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuXG5cblxuICAgIDwvZGl2PlxuXG4gIDwvZGl2PlxuICA8L2Rpdj5cbiAgPHAtbWVzc2FnZXMgW3ZhbHVlXT1cIm1zZ3NcIj48L3AtbWVzc2FnZXM+XG48L2Rpdj5cbiJdfQ==