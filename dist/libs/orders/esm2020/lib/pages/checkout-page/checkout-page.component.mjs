/** */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '@eshop-frontend/users';
import { MessageService } from 'primeng/api';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
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
import * as i9 from "../my-profile-checkout/my-profile-checkout.component";
import * as i10 from "../../components/order-summary/order-summary.component";
export class CheckoutPageComponent {
    constructor(router, usersService, formBuilder, cartService, ordersService, messageService, checkout, cart) {
        this.router = router;
        this.usersService = usersService;
        this.formBuilder = formBuilder;
        this.cartService = cartService;
        this.ordersService = ordersService;
        this.messageService = messageService;
        this.checkout = checkout;
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
    placeOrder() {
        console.log("total price = " + this.cart.getTotalPrice());
        this.makePayment(this.cart.getTotalPrice());
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
                document.getElementById("exampleModalLabel").innerText = "Your order number is: 231241284";
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
                        console.log("I am creating this new order: " + JSON.stringify(order));
                        console.log("data: " + data);
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
CheckoutPageComponent.ɵfac = function CheckoutPageComponent_Factory(t) { return new (t || CheckoutPageComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.UsersService), i0.ɵɵdirectiveInject(i3.FormBuilder), i0.ɵɵdirectiveInject(i4.CartService), i0.ɵɵdirectiveInject(i5.OrdersService), i0.ɵɵdirectiveInject(i6.MessageService), i0.ɵɵdirectiveInject(i7.CheckoutService), i0.ɵɵdirectiveInject(i2.Cart)); };
CheckoutPageComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CheckoutPageComponent, selectors: [["orders-checkout-page"]], decls: 33, vars: 0, consts: [[1, "checkout-page", "pb-5"], ["label", "Back to cart", "icon", "pi pi-arrow-left", 3, "onClick"], [1, "grid", "checkout-form"], [1, "col-8"], [1, "col-4"], ["id", "page-mask", 2, "display", "none"], ["id", "exampleModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade", "border", "border-info"], [1, "modal-dialog", "border", "border-info", "border-4", "rounded"], [1, "modal-content"], [1, "modal-header"], [1, "row"], [1, "col-auto"], [1, "d-flex", "justify-content-center"], ["id", "loadingSpinner", "role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "col"], ["id", "exampleModalLabel", 1, "modal-title"], ["id", "closeModal", "type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], ["id", "modalBody", 1, "modal-body"], ["id", "success", 1, "text-success", 2, "font-weight", "800", "display", "none"], ["id", "failed", 1, "text-danger", 2, "font-weight", "800", "display", "none"], [1, "modal-footer"], ["id", "closeModalFooter", 1, "text-secondary", 2, "font-size", "smaller", "display", "none"], [1, "checkout-button"], ["label", "Place-Order", 3, "onClick"]], template: function CheckoutPageComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div")(2, "p-button", 1);
        i0.ɵɵlistener("onClick", function CheckoutPageComponent_Template_p_button_onClick_2_listener() { return ctx.backToCart(); });
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(3, "div", 2)(4, "div", 3);
        i0.ɵɵelement(5, "eshop-frontend-checkout-my-profile");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div", 4);
        i0.ɵɵelement(7, "div", 5);
        i0.ɵɵelementStart(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "div", 11)(14, "div", 12)(15, "div", 13)(16, "span", 14);
        i0.ɵɵtext(17, "Loading...");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(18, "div", 15)(19, "h5", 16);
        i0.ɵɵtext(20, "We are validating your transaction, please wait");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelement(21, "button", 17);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "div", 18)(23, "div", 19);
        i0.ɵɵtext(24, " Transaction succesfull!");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "div", 20);
        i0.ɵɵtext(26, " Transaction failed!");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(27, "div", 21)(28, "div", 22);
        i0.ɵɵtext(29, " You can now close this modal");
        i0.ɵɵelementEnd()()()()();
        i0.ɵɵelement(30, "orders-order-summary");
        i0.ɵɵelementStart(31, "div", 23)(32, "p-button", 24);
        i0.ɵɵlistener("onClick", function CheckoutPageComponent_Template_p_button_onClick_32_listener() { return ctx.placeOrder(); });
        i0.ɵɵelementEnd()()()();
    } }, directives: [i8.Button, i9.MyProfileCheckOutComponent, i10.OrderSummaryComponent], styles: ["#page-mask[_ngcontent-%COMP%]{background:rgba(0,0,0,.5);position:fixed;top:0;right:0;bottom:0;left:0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CheckoutPageComponent, [{
        type: Component,
        args: [{ selector: 'orders-checkout-page', styles: [`#page-mask {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }`], template: "<div class=\"checkout-page pb-5\">\r\n    <div>\r\n        <p-button label=\"Back to cart\" icon=\"pi pi-arrow-left\" (onClick)=\"backToCart()\"></p-button>\r\n    </div>\r\n</div>\r\n<div class=\"grid checkout-form\">\r\n    <div class=\"col-8\">\r\n      <eshop-frontend-checkout-my-profile></eshop-frontend-checkout-my-profile>\r\n    </div>\r\n    <div class=\"col-4\">\r\n\r\n    <div id=\"page-mask\" style=\"display: none;\"></div>\r\n\r\n      <!-- Modal -->\r\n      <div class=\"modal fade border border-info\" id=\"exampleModal\" tabindex=\"-1\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog border border-info border-4 rounded\">\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <div class=\"row\">\r\n                <div class=\"col-auto \" >\r\n                  <div class=\"d-flex justify-content-center\">\r\n                    <div id=\"loadingSpinner\" class=\"spinner-border text-primary\" role=\"status\">\r\n                      <span class=\"visually-hidden\">Loading...</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col\"><h5 class=\"modal-title\" id=\"exampleModalLabel\">We are validating your transaction, please wait</h5></div>\r\n              </div>\r\n\r\n\r\n              <button id=\"closeModal\" type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\r\n            </div>\r\n            <div id=\"modalBody\" class=\"modal-body\">\r\n              <div id=\"success\" class=\"text-success\" style=\"font-weight: 800; display: none;\"> Transaction succesfull!</div>\r\n              <div id=\"failed\" class=\"text-danger\" style=\"font-weight: 800; display: none;\"> Transaction failed!</div>\r\n\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <div id=\"closeModalFooter\" class=\"text-secondary\" style=\"font-size:smaller; display: none;\"> You can now close this modal</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <orders-order-summary></orders-order-summary>\r\n      <div class=\"checkout-button\">\r\n        <p-button label=\"Place-Order\" (onClick)=\"placeOrder()\"></p-button>\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n" }]
    }], function () { return [{ type: i1.Router }, { type: i2.UsersService }, { type: i3.FormBuilder }, { type: i4.CartService }, { type: i5.OrdersService }, { type: i6.MessageService }, { type: i7.CheckoutService }, { type: i2.Cart }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL29yZGVycy9zcmMvbGliL3BhZ2VzL2NoZWNrb3V0LXBhZ2UvY2hlY2tvdXQtcGFnZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL29yZGVycy9zcmMvbGliL3BhZ2VzL2NoZWNrb3V0LXBhZ2UvY2hlY2tvdXQtcGFnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFhLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUcsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFdEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM3QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRTFELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbEUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzdDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7Ozs7O0FBZXpDLE1BQU0sT0FBTyxxQkFBcUI7SUFFaEMsWUFBb0IsTUFBYyxFQUN4QixZQUEwQixFQUMxQixXQUF3QixFQUN4QixXQUF3QixFQUN4QixhQUE0QixFQUM1QixjQUE4QixFQUM5QixRQUF5QixFQUN6QixJQUFVO1FBUEEsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUN4QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFDekIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQU1SLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGVBQVUsR0FBZ0IsRUFBRSxDQUFDO1FBRTdCLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZCxpQkFBWSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQzNDLG1CQUFjLEdBQVEsSUFBSSxDQUFDO1FBQzNCLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsWUFBTyxHQUFXLEtBQUssQ0FBQztRQVh2QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDO0lBQ3ZCLENBQUM7SUFnQmIsUUFBUTtRQUNOLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsSUFBSSxHQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFFekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFB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Ozs7SUFPUCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXNlcjIzIH0gZnJvbSAnLi8uLi8uLi9tb2RlbHMvdXNlcjIzJztcclxuLyoqICovXHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7ICBVc2Vyc1NlcnZpY2UgfSBmcm9tICdAZXNob3AtZnJvbnRlbmQvdXNlcnMnO1xyXG5cclxuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICdwcmltZW5nL2FwaSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBPcmRlcnNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb3JkZXJzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDYXJ0U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NhcnQuc2VydmljZSc7XHJcbmltcG9ydCB7IE9yZGVySXRlbSB9IGZyb20gJy4uLy4uL21vZGVscy9vcmRlci1pdGVtJztcclxuaW1wb3J0IHsgT3JkZXIgfSBmcm9tICcuLi8uLi9tb2RlbHMvb3JkZXInO1xyXG5pbXBvcnQgeyBDaGVja291dFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jaGVja291dC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ2FydCB9IGZyb20gJ0Blc2hvcC1mcm9udGVuZC91c2Vycyc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9tb2RlbHMvdXNlcic7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdvcmRlcnMtY2hlY2tvdXQtcGFnZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NoZWNrb3V0LXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlczogW2AjcGFnZS1tYXNrIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICB9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENoZWNrb3V0UGFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIHVzZXJzU2VydmljZTogVXNlcnNTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXHJcbiAgICBwcml2YXRlIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSxcclxuICAgIHByaXZhdGUgb3JkZXJzU2VydmljZTogT3JkZXJzU2VydmljZSxcclxuICAgIHByaXZhdGUgbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjaGVja291dDogQ2hlY2tvdXRTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjYXJ0OiBDYXJ0LFxyXG4gICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51c2VyID0gbmV3IFVzZXI7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBjaGVja291dEZvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG4gICAgICAgICAgICAgIGlzU3VibWl0dGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgb3JkZXJJdGVtczogT3JkZXJJdGVtW10gPSBbXTtcclxuICAgICAgICAgICAgICB1c2VySWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICBjb3VudHJpZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgdW5zdWJzY3JpYmUkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xyXG4gICAgICAgICAgICAgICBwYXltZW50SGFuZGxlcjogYW55ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgc3VjY2VzczogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICBmYWlsdXJlOmJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgdXNlcjogVXNlcjtcclxuICAgICAgICAgICAgICAgZGF0YTtcclxuXHJcblxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2luaXRVc2VyRm9ybSgpO1xyXG4gICAgdGhpcy5fYXV0b0ZpbGxVc2VyRGF0YSgpO1xyXG4gICAgdGhpcy5fZ2V0Q291bnRyaWVzKCk7XHJcbiAgICB0aGlzLl9nZXRDYXJ0SXRlbXMoKTtcclxuICAgIHRoaXMuaW52b2tlU3RyaXBlKCk7XHJcbiAgICB0aGlzLmRhdGEgPSAgdGhpcy5wYXJzZUp3dChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYXV0aFRva2VuXCIpKTtcclxuICAgIHRoaXMudXNlci5jb3VudHJ5PSAgICAgIHRoaXMuZGF0YS5jb3VudHJ5O1xyXG4gICAgdGhpcy51c2VyLmFkZHJlc3MxPSAgICAgdGhpcy5kYXRhWydhZGRyZXNzMSddO1xyXG4gICAgdGhpcy51c2VyLmFkZHJlc3MyPSAgICAgdGhpcy5kYXRhLmFkZHJlc3MyO1xyXG4gICAgdGhpcy51c2VyLmRhdGU9ICAgICAgICAgdGhpcy5kYXRhLmRhdGVPZkJpcnRoO1xyXG4gICAgdGhpcy51c2VyLmVtYWlsPSAgICAgICAgdGhpcy5kYXRhLmVtYWlsO1xyXG4gICAgdGhpcy51c2VyLnBob25lPSAgICAgICAgdGhpcy5kYXRhLnBob25lO1xyXG4gICAgdGhpcy51c2VyLnBvc3RhbENvZGU9ICAgdGhpcy5kYXRhLnBvc3RhbENvZGU7XHJcbiAgICB0aGlzLnVzZXIuc2V4PSAgICAgICAgICB0aGlzLmRhdGEuZ2VuZGVyO1xyXG4gICAgdGhpcy51c2VyLmZOYW1lID0gICAgICAgdGhpcy5kYXRhLmZOYW1lO1xyXG4gICAgdGhpcy51c2VyLmxOYW1lID0gICAgICAgdGhpcy5kYXRhLmxOYW1lO1xyXG4gICAgdGhpcy51c2VyLnJlZ2lvbiA9ICAgICAgdGhpcy5kYXRhLnJlZ2lvbjtcclxuICAgIHRoaXMudXNlci5jaXR5ID0gICAgICAgIHRoaXMuZGF0YS5jaXR5O1xyXG4gICAgdGhpcy51c2VyLnN0YXRlID0gICAgICAgdGhpcy5kYXRhLnN0YXRlO1xyXG4gICAgdGhpcy51c2VyLnByZWZpeCA9ICAgICAgdGhpcy5kYXRhLnByZWZpeDtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcInRoaXMgdXNlciA9IFwiICsgSlNPTi5zdHJpbmdpZnkodGhpcy51c2VyKSk7XHJcblxyXG5cclxuICB9XHJcbiAgcGFyc2VKd3QgKHRva2VuKSB7XHJcbiAgICB2YXIgYmFzZTY0VXJsID0gdG9rZW4uc3BsaXQoJy4nKVsxXTtcclxuICAgIHZhciBiYXNlNjQgPSBiYXNlNjRVcmwucmVwbGFjZSgvLS9nLCAnKycpLnJlcGxhY2UoL18vZywgJy8nKTtcclxuICAgIHZhciBqc29uUGF5bG9hZCA9IGRlY29kZVVSSUNvbXBvbmVudCh3aW5kb3cuYXRvYihiYXNlNjQpLnNwbGl0KCcnKS5tYXAoZnVuY3Rpb24oYykge1xyXG4gICAgICAgIHJldHVybiAnJScgKyAoJzAwJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikpLnNsaWNlKC0yKTtcclxuICAgIH0pLmpvaW4oJycpKTtcclxuXHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShqc29uUGF5bG9hZCk7XHJcbn07XHJcblxyXG4gIHByaXZhdGUgX2luaXRVc2VyRm9ybSgpIHtcclxuICAgIHRoaXMuY2hlY2tvdXRGb3JtR3JvdXAgPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgbmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgZW1haWw6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMuZW1haWxdXSxcclxuICAgICAgcGhvbmU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgIGNpdHk6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgIGNvdW50cnk6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgIHppcDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgYXBhcnRtZW50OiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICBzdHJlZXQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgX2F1dG9GaWxsVXNlckRhdGEoKSB7XHJcbiAgICB0aGlzLnVzZXJzU2VydmljZVxyXG4gICAgICAub2JzZXJ2ZUN1cnJlbnRVc2VyKClcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSlcclxuICAgICAgLnN1YnNjcmliZSgodXNlcikgPT4ge1xyXG4gICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICB0aGlzLnVzZXJJZCA9IHVzZXIuaWQ7XHJcbiAgICAgICAgICB0aGlzLmNoZWNrb3V0Rm9ybS5uYW1lLnNldFZhbHVlKHVzZXIubmFtZSk7XHJcbiAgICAgICAgICB0aGlzLmNoZWNrb3V0Rm9ybS5lbWFpbC5zZXRWYWx1ZSh1c2VyLmVtYWlsKTtcclxuICAgICAgICAgIHRoaXMuY2hlY2tvdXRGb3JtLnBob25lLnNldFZhbHVlKHVzZXIucGhvbmUpO1xyXG4gICAgICAgICAgdGhpcy5jaGVja291dEZvcm0uY2l0eS5zZXRWYWx1ZSh1c2VyLmNpdHkpO1xyXG4gICAgICAgICAgdGhpcy5jaGVja291dEZvcm0uc3RyZWV0LnNldFZhbHVlKHVzZXIuc3RyZWV0KTtcclxuICAgICAgICAgIHRoaXMuY2hlY2tvdXRGb3JtLmNvdW50cnkuc2V0VmFsdWUodXNlci5jb3VudHJ5KTtcclxuICAgICAgICAgIHRoaXMuY2hlY2tvdXRGb3JtLnppcC5zZXRWYWx1ZSh1c2VyLnppcCk7XHJcbiAgICAgICAgICB0aGlzLmNoZWNrb3V0Rm9ybS5hcGFydG1lbnQuc2V0VmFsdWUodXNlci5hcGFydG1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9nZXRDYXJ0SXRlbXMoKXtcclxuXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9nZXRDb3VudHJpZXMoKXtcclxuICAgIHRoaXMuY291bnRyaWVzID0gdGhpcy51c2Vyc1NlcnZpY2UuZ2V0Q291bnRyaWVzKCk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmNvdW50cmllcyk7XHJcbiAgfVxyXG5cclxuXHJcbiAgYmFja1RvQ2FydCgpe1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvY2FydCddKTtcclxuICB9XHJcblxyXG4gIHBsYWNlT3JkZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInRvdGFsIHByaWNlID0gXCIgKyB0aGlzLmNhcnQuZ2V0VG90YWxQcmljZSgpKTtcclxuICAgIHRoaXMubWFrZVBheW1lbnQodGhpcy5jYXJ0LmdldFRvdGFsUHJpY2UoKSk7XHJcblxyXG5cclxuXHJcbiAgfVxyXG5cclxuICBnZXQgY2hlY2tvdXRGb3JtKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRGb3JtR3JvdXAuY29udHJvbHM7XHJcbiAgfVxyXG5cclxuICBtYWtlUGF5bWVudChhbW91bnQ6IG51bWJlcikge1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlLW1hc2snKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cclxuXHJcbiAgICBjb25zdCBwYXltZW50SGFuZGxlciA9ICg8YW55PndpbmRvdykuU3RyaXBlQ2hlY2tvdXQuY29uZmlndXJlKHtcclxuICAgICAga2V5OiAncGtfdGVzdF81MUxZVUNHREV5aVgzZTNQbDg5anFtVmcxZ1ROMlFoaWZ5d3RJbGc2QXoxbmlHVVYzQU5ScEFOWEo4aGRFSWp3RE5hOEdUQnZucnhxM3pnZFI4Z0V6eGdSVDAwdUhsZnRRbkYnLFxyXG4gICAgICBsb2NhbGU6ICdhdXRvJyxcclxuICAgICAgdG9rZW46IGZ1bmN0aW9uIChzdHJpcGVUb2tlbjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coc3RyaXBlVG9rZW4pO1xyXG4gICAgICAgIHBheW1lbnRzdHJpcGUoc3RyaXBlVG9rZW4pO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcGF5bWVudHN0cmlwZSA9IChzdHJpcGVUb2tlbjogYW55KSA9PiB7XHJcbiAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbFwiKSBhcyBIVE1MRWxlbWVudCB8IG51bGxcclxuICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XHJcbiAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2VNb2RhbFwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xyXG4gICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2UtbWFzaycpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuY2hlY2tvdXQubWFrZVBheW1lbnQoc3RyaXBlVG9rZW4sIGFtb3VudCkuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlTW9kYWxGb290ZXJcIikuc3R5bGUuZGlzcGxheT1cImJsb2NrXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2FkaW5nU3Bpbm5lclwiKS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhhbXBsZU1vZGFsTGFiZWxcIikuaW5uZXJUZXh0PVwiWW91ciBvcmRlciBudW1iZXIgaXM6IDIzMTI0MTI4NFwiXHJcblxyXG4gICAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgICAgIGxldCBvcmRlcjogT3JkZXIgPSBuZXcgT3JkZXI7XHJcbiAgICAgICAgb3JkZXIuY2l0eSA9IHRoaXMudXNlci5jaXR5O1xyXG4gICAgICAgIG9yZGVyLmNvdW50cnkgPSB0aGlzLnVzZXIuY291bnRyeTtcclxuICAgICAgICBvcmRlci5kYXRlT3JkZXJlZCA9IFN0cmluZyhub3cpO1xyXG4gICAgICAgIG9yZGVyLmlkID0gJzEyMzEyMzEyMyc7XHJcbiAgICAgICAgb3JkZXIucGhvbmUgPSB0aGlzLnVzZXIucGhvbmU7XHJcbiAgICAgICAgb3JkZXIuc2hpcHBpbmdBZGRyZXNzMSA9IHRoaXMudXNlci5hZGRyZXNzMTtcclxuICAgICAgICBvcmRlci50b3RhbFByaWNlID0gU3RyaW5nKHRoaXMuY2FydC5nZXRUb3RhbFByaWNlKCkpO1xyXG4gICAgICAgIG9yZGVyLnppcCA9IHRoaXMudXNlci5wb3N0YWxDb2RlO1xyXG5cclxuICAgICAgICBvcmRlci51c2VyID0gdGhpcy5kYXRhLnVzZXJJZDtcclxuICAgICAgICBvcmRlci5pZCA9IG51bGw7XHJcbiAgICAgICAgbGV0IHZhcmlhbnRzID0gIHRoaXMuY2FydC5nZXRBbGxWYXJpYW50cygpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidmFyaWFudHMgPSBcIiArIEpTT04uc3RyaW5naWZ5KHZhcmlhbnRzKSk7XHJcbiAgICAgICAgb3JkZXIub3JkZXJJdGVtcyA9IHRoaXMuY2FydC5nZXRBbGxWYXJpYW50cygpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICBpZiAoZGF0YS5kYXRhID09PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgICAgdGhpcy5zdWNjZXNzID0gdHJ1ZTtcclxuICAgICAgICAgIHRoaXMuZmFpbHVyZSA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5vcmRlcnNTZXJ2aWNlLmNyZWF0ZU5ld09yZGVyKG9yZGVyLCB0aGlzLnVzZXIuZW1haWwpLnN1YnNjcmliZSgoZGF0YSkgPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSSBhbSBjcmVhdGluZyB0aGlzIG5ldyBvcmRlcjogXCIgKyBKU09OLnN0cmluZ2lmeShvcmRlcikpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGE6IFwiICsgZGF0YSk7XHJcbiAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWNjZXNzXCIpLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmZhaWx1cmUgPSB0cnVlO1xyXG4gICAgICAgICAgdGhpcy5zdWNjZXNzID0gZmFsc2U7XHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZhaWxlZFwiKS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIjtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBwYXltZW50SGFuZGxlci5vcGVuKHtcclxuICAgICAgbmFtZTogJ0NhdGFsZG8gU3RvcmUnLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ1BsZWFzZSBmaWxsIHlvdXIgYmlsbGluZyBpbmZvcm1hdGlvbnMnLFxyXG4gICAgICBhbW91bnQ6IGFtb3VudCAqIDEwMCxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW52b2tlU3RyaXBlKCkge1xyXG4gICAgaWYgKCF3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0cmlwZS1zY3JpcHQnKSkge1xyXG4gICAgICBjb25zdCBzY3JpcHQgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgIHNjcmlwdC5pZCA9ICdzdHJpcGUtc2NyaXB0JztcclxuICAgICAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcclxuICAgICAgc2NyaXB0LnNyYyA9ICdodHRwczovL2NoZWNrb3V0LnN0cmlwZS5jb20vY2hlY2tvdXQuanMnO1xyXG4gICAgICBzY3JpcHQub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucGF5bWVudEhhbmRsZXIgPSAoPGFueT53aW5kb3cpLlN0cmlwZUNoZWNrb3V0LmNvbmZpZ3VyZSh7XHJcbiAgICAgICAgICBrZXk6ICdwa190ZXN0XzUxTFlVQ0dERXlpWDNlM1BsODlqcW1WZzFnVE4yUWhpZnl3dElsZzZBejFuaUdVVjNBTlJwQU5YSjhoZEVJandETmE4R1RCdm5yeHEzemdkUjhnRXp4Z1JUMDB1SGxmdFFuRicsXHJcbiAgICAgICAgICBsb2NhbGU6ICdhdXRvJyxcclxuICAgICAgICAgIHRva2VuOiBmdW5jdGlvbiAoc3RyaXBlVG9rZW46IGFueSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdHJpcGVUb2tlbik7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJjaGVja291dC1wYWdlIHBiLTVcIj5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPHAtYnV0dG9uIGxhYmVsPVwiQmFjayB0byBjYXJ0XCIgaWNvbj1cInBpIHBpLWFycm93LWxlZnRcIiAob25DbGljayk9XCJiYWNrVG9DYXJ0KClcIj48L3AtYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwiZ3JpZCBjaGVja291dC1mb3JtXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLThcIj5cclxuICAgICAgPGVzaG9wLWZyb250ZW5kLWNoZWNrb3V0LW15LXByb2ZpbGU+PC9lc2hvcC1mcm9udGVuZC1jaGVja291dC1teS1wcm9maWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLTRcIj5cclxuXHJcbiAgICA8ZGl2IGlkPVwicGFnZS1tYXNrXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPjwvZGl2PlxyXG5cclxuICAgICAgPCEtLSBNb2RhbCAtLT5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsIGZhZGUgYm9yZGVyIGJvcmRlci1pbmZvXCIgaWQ9XCJleGFtcGxlTW9kYWxcIiB0YWJpbmRleD1cIi0xXCIgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZU1vZGFsTGFiZWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nIGJvcmRlciBib3JkZXItaW5mbyBib3JkZXItNCByb3VuZGVkXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1hdXRvIFwiID5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImxvYWRpbmdTcGlubmVyXCIgY2xhc3M9XCJzcGlubmVyLWJvcmRlciB0ZXh0LXByaW1hcnlcIiByb2xlPVwic3RhdHVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZpc3VhbGx5LWhpZGRlblwiPkxvYWRpbmcuLi48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+PGg1IGNsYXNzPVwibW9kYWwtdGl0bGVcIiBpZD1cImV4YW1wbGVNb2RhbExhYmVsXCI+V2UgYXJlIHZhbGlkYXRpbmcgeW91ciB0cmFuc2FjdGlvbiwgcGxlYXNlIHdhaXQ8L2g1PjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNsb3NlTW9kYWxcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4tY2xvc2VcIiBkYXRhLWJzLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cIm1vZGFsQm9keVwiIGNsYXNzPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJzdWNjZXNzXCIgY2xhc3M9XCJ0ZXh0LXN1Y2Nlc3NcIiBzdHlsZT1cImZvbnQtd2VpZ2h0OiA4MDA7IGRpc3BsYXk6IG5vbmU7XCI+IFRyYW5zYWN0aW9uIHN1Y2Nlc2Z1bGwhPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBpZD1cImZhaWxlZFwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIiBzdHlsZT1cImZvbnQtd2VpZ2h0OiA4MDA7IGRpc3BsYXk6IG5vbmU7XCI+IFRyYW5zYWN0aW9uIGZhaWxlZCE8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBpZD1cImNsb3NlTW9kYWxGb290ZXJcIiBjbGFzcz1cInRleHQtc2Vjb25kYXJ5XCIgc3R5bGU9XCJmb250LXNpemU6c21hbGxlcjsgZGlzcGxheTogbm9uZTtcIj4gWW91IGNhbiBub3cgY2xvc2UgdGhpcyBtb2RhbDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPG9yZGVycy1vcmRlci1zdW1tYXJ5Pjwvb3JkZXJzLW9yZGVyLXN1bW1hcnk+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjaGVja291dC1idXR0b25cIj5cclxuICAgICAgICA8cC1idXR0b24gbGFiZWw9XCJQbGFjZS1PcmRlclwiIChvbkNsaWNrKT1cInBsYWNlT3JkZXIoKVwiPjwvcC1idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ==