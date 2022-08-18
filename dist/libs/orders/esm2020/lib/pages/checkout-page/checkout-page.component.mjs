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
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@eshop-frontend/users";
import * as i3 from "@angular/forms";
import * as i4 from "../../services/cart.service";
import * as i5 from "../../services/orders.service";
import * as i6 from "primeng/api";
import * as i7 from "primeng/button";
import * as i8 from "../my-profile-checkout/my-profile-checkout.component";
import * as i9 from "../../components/order-summary/order-summary.component";
export class CheckoutPageComponent {
    constructor(router, usersService, formBuilder, cartService, ordersService, messageService) {
        this.router = router;
        this.usersService = usersService;
        this.formBuilder = formBuilder;
        this.cartService = cartService;
        this.ordersService = ordersService;
        this.messageService = messageService;
        this.isSubmitted = false;
        this.orderItems = [];
        this.countries = [];
        this.unsubscribe$ = new Subject();
    }
    ngOnInit() {
        this._initUserForm();
        this._autoFillUserData();
        this._getCountries();
        this._getCartItems();
    }
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
        /**
        const cart: Cart = this.cartService.getCart();
        this.orderItems = cart.items.map((item) =>{
          return {
            product: item.productId,
            quantity: item.quantity
          };
        });
        console.log(this.orderItems);
        */
    }
    _getCountries() {
        this.countries = this.usersService.getCountries();
        console.log(this.countries);
    }
    backToCart() {
        this.router.navigate(['/cart']);
    }
    placeOrder() {
        this.isSubmitted = true;
        if (this.checkoutFormGroup.invalid) {
            return;
        }
        const order = {
            orderItems: this.orderItems,
            shippingAddress1: this.checkoutForm.street.value,
            shippingAddress2: this.checkoutForm.apartment.value,
            city: this.checkoutForm.city.value,
            zip: this.checkoutForm.zip.value,
            country: this.checkoutForm.country.value,
            phone: this.checkoutForm.phone.value,
            status: 0,
            user: this.userId,
            dateOrdered: `${Date.now()}`,
        };
        this.ordersService.createOrder(order).subscribe(() => {
            this.cartService.emptyCart();
            this.router.navigate(['/success']);
        }, () => {
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: `Order could not be created`
            });
        });
    }
    get checkoutForm() {
        return this.checkoutFormGroup.controls;
    }
}
CheckoutPageComponent.ɵfac = function CheckoutPageComponent_Factory(t) { return new (t || CheckoutPageComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.UsersService), i0.ɵɵdirectiveInject(i3.FormBuilder), i0.ɵɵdirectiveInject(i4.CartService), i0.ɵɵdirectiveInject(i5.OrdersService), i0.ɵɵdirectiveInject(i6.MessageService)); };
CheckoutPageComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CheckoutPageComponent, selectors: [["orders-checkout-page"]], decls: 10, vars: 0, consts: [[1, "checkout-page", "pb-5"], ["label", "Back to cart", "icon", "pi pi-arrow-left", 3, "onClick"], [1, "grid", "checkout-form"], [1, "col-8"], [1, "col-4"], [1, "checkout-button"], ["label", "Place-Order", 3, "onClick"]], template: function CheckoutPageComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div")(2, "p-button", 1);
        i0.ɵɵlistener("onClick", function CheckoutPageComponent_Template_p_button_onClick_2_listener() { return ctx.backToCart(); });
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(3, "div", 2)(4, "div", 3);
        i0.ɵɵelement(5, "eshop-frontend-checkout-my-profile");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div", 4);
        i0.ɵɵelement(7, "orders-order-summary");
        i0.ɵɵelementStart(8, "div", 5)(9, "p-button", 6);
        i0.ɵɵlistener("onClick", function CheckoutPageComponent_Template_p_button_onClick_9_listener() { return ctx.placeOrder(); });
        i0.ɵɵelementEnd()()()();
    } }, directives: [i7.Button, i8.MyProfileCheckOutComponent, i9.OrderSummaryComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CheckoutPageComponent, [{
        type: Component,
        args: [{ selector: 'orders-checkout-page', styles: [], template: "<div class=\"checkout-page pb-5\">\r\n    <div>\r\n        <p-button label=\"Back to cart\" icon=\"pi pi-arrow-left\" (onClick)=\"backToCart()\"></p-button>\r\n    </div>\r\n</div>\r\n<div class=\"grid checkout-form\">\r\n    <div class=\"col-8\">\r\n      <eshop-frontend-checkout-my-profile></eshop-frontend-checkout-my-profile>\r\n    </div>\r\n    <div class=\"col-4\">\r\n      <orders-order-summary></orders-order-summary>\r\n      <div class=\"checkout-button\">\r\n        <p-button label=\"Place-Order\" (onClick)=\"placeOrder()\"></p-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n" }]
    }], function () { return [{ type: i1.Router }, { type: i2.UsersService }, { type: i3.FormBuilder }, { type: i4.CartService }, { type: i5.OrdersService }, { type: i6.MessageService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL29yZGVycy9zcmMvbGliL3BhZ2VzL2NoZWNrb3V0LXBhZ2UvY2hlY2tvdXQtcGFnZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL29yZGVycy9zcmMvbGliL3BhZ2VzL2NoZWNrb3V0LXBhZ2UvY2hlY2tvdXQtcGFnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFhLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFckQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM3QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7Ozs7Ozs7OztBQVcxRCxNQUFNLE9BQU8scUJBQXFCO0lBRWhDLFlBQW9CLE1BQWMsRUFDZCxZQUEwQixFQUMxQixXQUF3QixFQUN4QixXQUF3QixFQUN4QixhQUE0QixFQUM1QixjQUE4QjtRQUw5QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFD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QUNMLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDO2dCQUN0QixRQUFRLEVBQUUsT0FBTztnQkFDakIsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLE1BQU0sRUFBRSw0QkFBNEI7YUFDckMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDO0lBQ3pDLENBQUM7OzBGQXJIVSxxQkFBcUI7d0VBQXJCLHFCQUFxQjtRQ3JCbEMsOEJBQWdDLFVBQUEsa0JBQUE7UUFFK0Isd0dBQVcsZ0JBQVksSUFBQztRQUFDLGlCQUFXLEVBQUEsRUFBQTtRQUduRyw4QkFBZ0MsYUFBQTtRQUUxQixxREFBeUU7UUFDM0UsaUJBQU07UUFDTiw4QkFBbUI7UUFDakIsdUNBQTZDO1FBQzdDLDhCQUE2QixrQkFBQTtRQUNHLHdHQUFXLGdCQUFZLElBQUM7UUFBQyxpQkFBVyxFQUFBLEVBQUEsRUFBQTs7dUZEUzdELHFCQUFxQjtjQU5qQyxTQUFTOzJCQUNFLHNCQUFzQixVQUV4QixFQUNQIiwic291cmNlc0NvbnRlbnQiOlsiLyoqICovXHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFVzZXJzU2VydmljZSB9IGZyb20gJ0Blc2hvcC1mcm9udGVuZC91c2Vycyc7XHJcblxyXG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJ3ByaW1lbmcvYXBpJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE9yZGVyc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vcmRlcnMuc2VydmljZSc7XHJcbmltcG9ydCB7IENhcnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2FydC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgT3JkZXJJdGVtIH0gZnJvbSAnLi4vLi4vbW9kZWxzL29yZGVyLWl0ZW0nO1xyXG5pbXBvcnQgeyBPcmRlciB9IGZyb20gJy4uLy4uL21vZGVscy9vcmRlcic7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdvcmRlcnMtY2hlY2tvdXQtcGFnZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NoZWNrb3V0LXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlczogW1xyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENoZWNrb3V0UGFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSB1c2Vyc1NlcnZpY2U6IFVzZXJzU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcclxuICAgICAgICAgICAgICBwcml2YXRlIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIG9yZGVyc1NlcnZpY2U6IE9yZGVyc1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2VcclxuICAgICAgICAgICAgICApIHt9XHJcblxyXG4gICAgY2hlY2tvdXRGb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuICAgIGlzU3VibWl0dGVkID0gZmFsc2U7XHJcbiAgICBvcmRlckl0ZW1zOiBPcmRlckl0ZW1bXSA9IFtdO1xyXG4gICAgdXNlcklkOiBzdHJpbmc7XHJcbiAgICBjb3VudHJpZXMgPSBbXTtcclxuICAgICB1bnN1YnNjcmliZSQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gICAgICAgICAgICAgIFxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2luaXRVc2VyRm9ybSgpO1xyXG4gICAgdGhpcy5fYXV0b0ZpbGxVc2VyRGF0YSgpO1xyXG4gICAgdGhpcy5fZ2V0Q291bnRyaWVzKCk7XHJcbiAgICB0aGlzLl9nZXRDYXJ0SXRlbXMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2luaXRVc2VyRm9ybSgpIHtcclxuICAgIHRoaXMuY2hlY2tvdXRGb3JtR3JvdXAgPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgbmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgZW1haWw6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMuZW1haWxdXSxcclxuICAgICAgcGhvbmU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgIGNpdHk6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgIGNvdW50cnk6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgIHppcDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgYXBhcnRtZW50OiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICBzdHJlZXQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgX2F1dG9GaWxsVXNlckRhdGEoKSB7XHJcbiAgICB0aGlzLnVzZXJzU2VydmljZVxyXG4gICAgICAub2JzZXJ2ZUN1cnJlbnRVc2VyKClcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSlcclxuICAgICAgLnN1YnNjcmliZSgodXNlcikgPT4ge1xyXG4gICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICB0aGlzLnVzZXJJZCA9IHVzZXIuaWQ7XHJcbiAgICAgICAgICB0aGlzLmNoZWNrb3V0Rm9ybS5uYW1lLnNldFZhbHVlKHVzZXIubmFtZSk7XHJcbiAgICAgICAgICB0aGlzLmNoZWNrb3V0Rm9ybS5lbWFpbC5zZXRWYWx1ZSh1c2VyLmVtYWlsKTtcclxuICAgICAgICAgIHRoaXMuY2hlY2tvdXRGb3JtLnBob25lLnNldFZhbHVlKHVzZXIucGhvbmUpO1xyXG4gICAgICAgICAgdGhpcy5jaGVja291dEZvcm0uY2l0eS5zZXRWYWx1ZSh1c2VyLmNpdHkpO1xyXG4gICAgICAgICAgdGhpcy5jaGVja291dEZvcm0uc3RyZWV0LnNldFZhbHVlKHVzZXIuc3RyZWV0KTtcclxuICAgICAgICAgIHRoaXMuY2hlY2tvdXRGb3JtLmNvdW50cnkuc2V0VmFsdWUodXNlci5jb3VudHJ5KTtcclxuICAgICAgICAgIHRoaXMuY2hlY2tvdXRGb3JtLnppcC5zZXRWYWx1ZSh1c2VyLnppcCk7XHJcbiAgICAgICAgICB0aGlzLmNoZWNrb3V0Rm9ybS5hcGFydG1lbnQuc2V0VmFsdWUodXNlci5hcGFydG1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9nZXRDYXJ0SXRlbXMoKXtcclxuICAgIC8qKiBcclxuICAgIGNvbnN0IGNhcnQ6IENhcnQgPSB0aGlzLmNhcnRTZXJ2aWNlLmdldENhcnQoKTtcclxuICAgIHRoaXMub3JkZXJJdGVtcyA9IGNhcnQuaXRlbXMubWFwKChpdGVtKSA9PntcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9kdWN0OiBpdGVtLnByb2R1Y3RJZCxcclxuICAgICAgICBxdWFudGl0eTogaXRlbS5xdWFudGl0eVxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLm9yZGVySXRlbXMpO1xyXG4gICAgKi9cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2dldENvdW50cmllcygpeyAgICBcclxuICAgIHRoaXMuY291bnRyaWVzID0gdGhpcy51c2Vyc1NlcnZpY2UuZ2V0Q291bnRyaWVzKCk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmNvdW50cmllcyk7XHJcbiAgfVxyXG5cclxuXHJcbiAgYmFja1RvQ2FydCgpe1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvY2FydCddKTtcclxuICB9XHJcblxyXG4gIHBsYWNlT3JkZXIoKSB7XHJcbiAgICB0aGlzLmlzU3VibWl0dGVkID0gdHJ1ZTtcclxuICAgIGlmICh0aGlzLmNoZWNrb3V0Rm9ybUdyb3VwLmludmFsaWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9yZGVyOiBPcmRlciA9e1xyXG4gICAgICBvcmRlckl0ZW1zOiB0aGlzLm9yZGVySXRlbXMsXHJcbiAgICAgIHNoaXBwaW5nQWRkcmVzczE6IHRoaXMuY2hlY2tvdXRGb3JtLnN0cmVldC52YWx1ZSxcclxuICAgICAgc2hpcHBpbmdBZGRyZXNzMjogdGhpcy5jaGVja291dEZvcm0uYXBhcnRtZW50LnZhbHVlLFxyXG4gICAgICBjaXR5OiB0aGlzLmNoZWNrb3V0Rm9ybS5jaXR5LnZhbHVlLFxyXG4gICAgICB6aXA6IHRoaXMuY2hlY2tvdXRGb3JtLnppcC52YWx1ZSxcclxuICAgICAgY291bnRyeTogdGhpcy5jaGVja291dEZvcm0uY291bnRyeS52YWx1ZSxcclxuICAgICAgcGhvbmU6IHRoaXMuY2hlY2tvdXRGb3JtLnBob25lLnZhbHVlLFxyXG4gICAgICBzdGF0dXM6IDAsXHJcbiAgICAgIHVzZXI6IHRoaXMudXNlcklkLFxyXG4gICAgICBkYXRlT3JkZXJlZDogYCR7RGF0ZS5ub3coKX1gLFxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMub3JkZXJzU2VydmljZS5jcmVhdGVPcmRlcihvcmRlcikuc3Vic2NyaWJlKCgpPT57XHJcblxyXG4gICAgICB0aGlzLmNhcnRTZXJ2aWNlLmVtcHR5Q2FydCgpO1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9zdWNjZXNzJ10pO1xyXG4gICAgICBcclxuICAgIH0sICgpPT57XHJcbiAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuYWRkKHtcclxuICAgICAgICBzZXZlcml0eTogJ2Vycm9yJyxcclxuICAgICAgICBzdW1tYXJ5OiAnRXJyb3InLFxyXG4gICAgICAgIGRldGFpbDogYE9yZGVyIGNvdWxkIG5vdCBiZSBjcmVhdGVkYFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNoZWNrb3V0Rm9ybSgpIHtcclxuICAgIHJldHVybiB0aGlzLmNoZWNrb3V0Rm9ybUdyb3VwLmNvbnRyb2xzO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImNoZWNrb3V0LXBhZ2UgcGItNVwiPlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8cC1idXR0b24gbGFiZWw9XCJCYWNrIHRvIGNhcnRcIiBpY29uPVwicGkgcGktYXJyb3ctbGVmdFwiIChvbkNsaWNrKT1cImJhY2tUb0NhcnQoKVwiPjwvcC1idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJncmlkIGNoZWNrb3V0LWZvcm1cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2wtOFwiPlxyXG4gICAgICA8ZXNob3AtZnJvbnRlbmQtY2hlY2tvdXQtbXktcHJvZmlsZT48L2VzaG9wLWZyb250ZW5kLWNoZWNrb3V0LW15LXByb2ZpbGU+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2wtNFwiPlxyXG4gICAgICA8b3JkZXJzLW9yZGVyLXN1bW1hcnk+PC9vcmRlcnMtb3JkZXItc3VtbWFyeT5cclxuICAgICAgPGRpdiBjbGFzcz1cImNoZWNrb3V0LWJ1dHRvblwiPlxyXG4gICAgICAgIDxwLWJ1dHRvbiBsYWJlbD1cIlBsYWNlLU9yZGVyXCIgKG9uQ2xpY2spPVwicGxhY2VPcmRlcigpXCI+PC9wLWJ1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ==