import { Cart } from '@eshop-frontend/users';
import { OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export declare class OrderSummaryComponent implements OnInit, OnDestroy {
    cart: Cart;
    private router;
    totalPrice: number;
    isCheckOut: boolean;
    constructor(//private cartService: CartService,
    cart: Cart, router: Router);
    ngOnInit(): void;
    ngOnDestroy(): void;
    _getOrderSummary(): void;
    navigateToCheckout(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<OrderSummaryComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OrderSummaryComponent, "orders-order-summary", never, { "isCheckOut": "isCheckOut"; }, {}, never, never>;
}
//# sourceMappingURL=order-summary.component.d.ts.map