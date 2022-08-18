import { Component, Injectable } from '@angular/core';
import { Cart } from '@eshop-frontend/users';
import * as i0 from "@angular/core";
import * as i1 from "@eshop-frontend/users";
import * as i2 from "primeng/badge";
import * as i3 from "@angular/router";
export class CartIconComponent {
    constructor(cart) {
        this.cart = cart;
        this.cartCount = 0;
    }
    ngOnInit() {
        this.cart.getItems().subscribe(x => {
            this.cartCount = x;
            console.log("icon counter = " + this.cartCount);
        });
    }
}
CartIconComponent.ɵfac = function CartIconComponent_Factory(t) { return new (t || CartIconComponent)(i0.ɵɵdirectiveInject(i1.Cart)); };
CartIconComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CartIconComponent, selectors: [["orders-cart-icon"]], decls: 1, vars: 1, consts: [["pBadge", "", "severity", "danger", "routerLink", "/cart", 1, "pi", "pi-shopping-cart", "mr-4", "p-text-secondary", 3, "value"]], template: function CartIconComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "i", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("value", ctx.cartCount);
    } }, directives: [i2.BadgeDirective, i3.RouterLink], encapsulation: 2 });
CartIconComponent.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CartIconComponent, factory: CartIconComponent.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CartIconComponent, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }, {
        type: Component,
        args: [{ selector: 'orders-cart-icon', styles: [], template: "<i class=\"pi pi-shopping-cart mr-4 p-text-secondary\"\r\n pBadge style=\"\"\r\n [value]=\"cartCount\"\r\n severity=\"danger\"\r\n routerLink=\"/cart\">\r\n</i>\r\n" }]
    }], function () { return [{ type: i1.Cart }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pY29uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvb3JkZXJzL3NyYy9saWIvY29tcG9uZW50cy9jYXJ0LWljb24vY2FydC1pY29uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvb3JkZXJzL3NyYy9saWIvY29tcG9uZW50cy9jYXJ0LWljb24vY2FydC1pY29uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7QUFZN0MsTUFBTSxPQUFPLGlCQUFpQjtJQUk1QixZQUFvQixJQUFXO1FBQVgsU0FBSSxHQUFKLElBQUksQ0FBTztRQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztJQUVwQixDQUFDO0lBRUYsUUFBUTtRQUVOLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2xELENBQUMsQ0FBRSxDQUFDO0lBR04sQ0FBQzs7a0ZBakJVLGlCQUFpQjtvRUFBakIsaUJBQWlCO1FDZDlCLHVCQUtJOztRQUhILHFDQUFtQjs7dUVEWVAsaUJBQWlCLFdBQWpCLGlCQUFpQixtQkFSakIsTUFBTTt1RkFRTixpQkFBaUI7Y0FUN0IsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBQyxNQUFNO2FBQ2xCOztjQUNBLFNBQVM7MkJBQ0Usa0JBQWtCLFVBRXBCLEVBQ1AiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3RhYmxlLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2FydCB9IGZyb20gJ0Blc2hvcC1mcm9udGVuZC91c2Vycyc7XHJcblxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46J3Jvb3QnXHJcbn0pXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnb3JkZXJzLWNhcnQtaWNvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcnQtaWNvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVzOiBbXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FydEljb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjYXJ0Q291bnQ6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjYXJ0IDogQ2FydCkge1xyXG4gICAgdGhpcy5jYXJ0Q291bnQgPSAwO1xyXG4gICBcclxuICAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgICB0aGlzLmNhcnQuZ2V0SXRlbXMoKS5zdWJzY3JpYmUoeCA9PntcclxuICAgICAgdGhpcy5jYXJ0Q291bnQgPSB4O1xyXG4gICAgICBjb25zb2xlLmxvZyhcImljb24gY291bnRlciA9IFwiICsgdGhpcy5jYXJ0Q291bnQpO1xyXG4gICAgfSApO1xyXG5cclxuICBcclxuICB9XHJcblxyXG59XHJcbiIsIjxpIGNsYXNzPVwicGkgcGktc2hvcHBpbmctY2FydCBtci00IHAtdGV4dC1zZWNvbmRhcnlcIlxyXG4gcEJhZGdlIHN0eWxlPVwiXCJcclxuIFt2YWx1ZV09XCJjYXJ0Q291bnRcIlxyXG4gc2V2ZXJpdHk9XCJkYW5nZXJcIlxyXG4gcm91dGVyTGluaz1cIi9jYXJ0XCI+XHJcbjwvaT5cclxuIl19