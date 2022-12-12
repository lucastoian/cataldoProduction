import { Cart } from '@eshop-frontend/users';
import { OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import * as i0 from "@angular/core";
export declare class OrderSummaryComponent implements OnInit, OnDestroy {
    private cartService;
    private router;
    totalPrice: number;
    cart: Cart;
    isCheckOut: boolean;
    constructor(//private cartService: CartService,
    cartService: CartService, router: Router);
    ngOnInit(): void;
    ngOnDestroy(): void;
    _getOrderSummary(): void;
    navigateToCheckout(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<OrderSummaryComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OrderSummaryComponent, "orders-order-summary", never, { "isCheckOut": "isCheckOut"; }, {}, never, never>;
}
//# sourceMappingURL=order-summary.component.d.ts.map