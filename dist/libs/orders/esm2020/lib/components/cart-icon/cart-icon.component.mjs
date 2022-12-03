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
CartIconComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CartIconComponent, selectors: [["orders-cart-icon"]], decls: 1, vars: 1, consts: [["pBadge", "", "severity", "danger", "routerLink", "/cart", 1, "pi", "pi-shopping-cart", "p-text-secondary", 2, "font-size", "5vw", 3, "value"]], template: function CartIconComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "i", 0);
    } if (rf & 2) {
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
        args: [{ selector: 'orders-cart-icon', template: "<i class=\"pi pi-shopping-cart p-text-secondary\"\n pBadge style=\"font-size: 5vw;\"\n [value]=\"cartCount\"\n severity=\"danger\"\n routerLink=\"/cart\">\n</i>\n", styles: ["@media screen and (min-width: 633px){.pi{font-size:40px!important;padding-right:15px}}\n"] }]
    }], function () { return [{ type: i1.Cart }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pY29uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvb3JkZXJzL3NyYy9saWIvY29tcG9uZW50cy9jYXJ0LWljb24vY2FydC1pY29uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvb3JkZXJzL3NyYy9saWIvY29tcG9uZW50cy9jYXJ0LWljb24vY2FydC1pY29uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7QUFXN0MsTUFBTSxPQUFPLGlCQUFpQjtJQUk1QixZQUFvQixJQUFXO1FBQVgsU0FBSSxHQUFKLElBQUksQ0FBTztRQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztJQUVwQixDQUFDO0lBRUYsUUFBUTtRQUVOLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2xELENBQUMsQ0FBRSxDQUFDO0lBR04sQ0FBQzs7a0ZBakJVLGlCQUFpQjtvRUFBakIsaUJBQWlCO1FDYjlCLHVCQUtJOztRQUhILHFDQUFtQjs7dUVEV1AsaUJBQWlCLFdBQWpCLGlCQUFpQixtQkFQakIsTUFBTTt1RkFPTixpQkFBaUI7Y0FSN0IsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBQyxNQUFNO2FBQ2xCOztjQUNBLFNBQVM7MkJBQ0Usa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBDb21wb25lbnQsIEluamVjdGFibGUsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJ0Blc2hvcC1mcm9udGVuZC91c2Vycyc7XG5cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOidyb290J1xufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ29yZGVycy1jYXJ0LWljb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FydC1pY29uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2FydC1pY29uLnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDYXJ0SWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY2FydENvdW50OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjYXJ0IDogQ2FydCkge1xuICAgIHRoaXMuY2FydENvdW50ID0gMDtcbiAgIFxuICAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgdGhpcy5jYXJ0LmdldEl0ZW1zKCkuc3Vic2NyaWJlKHggPT57XG4gICAgICB0aGlzLmNhcnRDb3VudCA9IHg7XG4gICAgICBjb25zb2xlLmxvZyhcImljb24gY291bnRlciA9IFwiICsgdGhpcy5jYXJ0Q291bnQpO1xuICAgIH0gKTtcblxuICBcbiAgfVxuXG59XG4iLCI8aSBjbGFzcz1cInBpIHBpLXNob3BwaW5nLWNhcnQgcC10ZXh0LXNlY29uZGFyeVwiXG4gcEJhZGdlIHN0eWxlPVwiZm9udC1zaXplOiA1dnc7XCJcbiBbdmFsdWVdPVwiY2FydENvdW50XCJcbiBzZXZlcml0eT1cImRhbmdlclwiXG4gcm91dGVyTGluaz1cIi9jYXJ0XCI+XG48L2k+XG4iXX0=