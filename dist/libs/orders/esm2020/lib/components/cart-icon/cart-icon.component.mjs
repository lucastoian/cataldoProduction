import { Component, Injectable } from '@angular/core';
import { CartService } from '../../services/cart.service';
import * as i0 from "@angular/core";
import * as i1 from "../../services/cart.service";
import * as i2 from "primeng/badge";
import * as i3 from "@angular/router";
export class CartIconComponent {
    constructor(cartService) {
        this.cartService = cartService;
        this.cart = cartService.getCart();
        this.cartCount = 0;
    }
    ngOnInit() {
        this.cart.getItems().subscribe(x => {
            this.cartCount = x;
            console.log("icon counter = " + this.cartCount);
        });
    }
}
CartIconComponent.ɵfac = function CartIconComponent_Factory(t) { return new (t || CartIconComponent)(i0.ɵɵdirectiveInject(i1.CartService)); };
CartIconComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CartIconComponent, selectors: [["orders-cart-icon"]], decls: 3, vars: 1, consts: [[2, "position", "relative"], ["pBadge", "", "severity", "danger", 1, "pi", "p-text-secondary", 2, "font-size", "5vw", "position", "absolute", "right", "0", "top", "10%", 3, "value"], ["src", "assets/Carrello mobile.svg", "routerLink", "/cart", 1, "img-fluid", "p-0", 2, "min-width", "35px"]], template: function CartIconComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "i", 1)(2, "img", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("value", ctx.cartCount);
    } }, directives: [i2.BadgeDirective, i3.RouterLink], styles: ["@media screen and (min-width: 633px){.pi[_ngcontent-%COMP%]{font-size:40px!important;padding-right:15px}}"] });
CartIconComponent.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CartIconComponent, factory: CartIconComponent.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CartIconComponent, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }, {
        type: Component,
        args: [{ selector: 'orders-cart-icon', template: "<div style=\"position: relative;\">  \n    <i class=\"pi  p-text-secondary\" pBadge style=\"font-size: 5vw; position: absolute; right:0; top:10%\" [value]=\"cartCount\" severity=\"danger\">\n    </i>\n    <img src='assets/Carrello mobile.svg'  class=\"img-fluid p-0\" style=\"min-width: 35px;\"  routerLink=\"/cart\" >\n</div>  ", styles: ["@media screen and (min-width: 633px){.pi{font-size:40px!important;padding-right:15px}}\n"] }]
    }], function () { return [{ type: i1.CartService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pY29uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvb3JkZXJzL3NyYy9saWIvY29tcG9uZW50cy9jYXJ0LWljb24vY2FydC1pY29uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvb3JkZXJzL3NyYy9saWIvY29tcG9uZW50cy9jYXJ0LWljb24vY2FydC1pY29uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7QUFXMUQsTUFBTSxPQUFPLGlCQUFpQjtJQUk1QixZQUFvQixXQUF5QjtRQUF6QixnQkFBVyxHQUFYLFdBQVcsQ0FBYztRQUMzQyxJQUFJLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztJQUVwQixDQUFDO0lBRUYsUUFBUTtRQUVOLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2xELENBQUMsQ0FBRSxDQUFDO0lBR04sQ0FBQzs7a0ZBbEJVLGlCQUFpQjtvRUFBakIsaUJBQWlCO1FDZDlCLDhCQUFpQztRQUM3Qix1QkFDSSxhQUFBO1FBRVIsaUJBQU07O1FBSGtHLGVBQW1CO1FBQW5CLHFDQUFtQjs7dUVEYTlHLGlCQUFpQixXQUFqQixpQkFBaUIsbUJBUGpCLE1BQU07dUZBT04saUJBQWlCO2NBUjdCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUMsTUFBTTthQUNsQjs7Y0FDQSxTQUFTOzJCQUNFLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3RhYmxlLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhcnQgfSBmcm9tICdAZXNob3AtZnJvbnRlbmQvdXNlcnMnO1xuaW1wb3J0IHsgQ2FydFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jYXJ0LnNlcnZpY2UnO1xuXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjoncm9vdCdcbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdvcmRlcnMtY2FydC1pY29uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcnQtaWNvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NhcnQtaWNvbi5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2FydEljb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIGNhcnQgOiBDYXJ0XG4gIGNhcnRDb3VudDogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2FydFNlcnZpY2UgOiBDYXJ0U2VydmljZSkge1xuICAgIHRoaXMuY2FydCA9IGNhcnRTZXJ2aWNlLmdldENhcnQoKTtcbiAgICB0aGlzLmNhcnRDb3VudCA9IDA7XG4gICBcbiAgIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgIHRoaXMuY2FydC5nZXRJdGVtcygpLnN1YnNjcmliZSh4ID0+e1xuICAgICAgdGhpcy5jYXJ0Q291bnQgPSB4O1xuICAgICAgY29uc29sZS5sb2coXCJpY29uIGNvdW50ZXIgPSBcIiArIHRoaXMuY2FydENvdW50KTtcbiAgICB9ICk7XG5cbiAgXG4gIH1cblxufVxuIiwiPGRpdiBzdHlsZT1cInBvc2l0aW9uOiByZWxhdGl2ZTtcIj4gIFxuICAgIDxpIGNsYXNzPVwicGkgIHAtdGV4dC1zZWNvbmRhcnlcIiBwQmFkZ2Ugc3R5bGU9XCJmb250LXNpemU6IDV2dzsgcG9zaXRpb246IGFic29sdXRlOyByaWdodDowOyB0b3A6MTAlXCIgW3ZhbHVlXT1cImNhcnRDb3VudFwiIHNldmVyaXR5PVwiZGFuZ2VyXCI+XG4gICAgPC9pPlxuICAgIDxpbWcgc3JjPSdhc3NldHMvQ2FycmVsbG8gbW9iaWxlLnN2ZycgIGNsYXNzPVwiaW1nLWZsdWlkIHAtMFwiIHN0eWxlPVwibWluLXdpZHRoOiAzNXB4O1wiICByb3V0ZXJMaW5rPVwiL2NhcnRcIiA+XG48L2Rpdj4gICJdfQ==