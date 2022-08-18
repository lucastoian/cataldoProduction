import { ProductVariant } from '@eshop-frontend/users';
import { OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '@eshop-frontend/users';
import * as i0 from "@angular/core";
export declare class CartPageComponent implements OnInit, OnDestroy {
    private router;
    private cart;
    productVariants: ProductVariant[];
    items: number;
    productNames: string[];
    constructor(router: Router, cart: Cart);
    ngOnInit(): void;
    ngOnDestroy(): void;
    backToShop(): void;
    trackByMethod(index: number, p: ProductVariant): string;
    getProductVariantByIdAndDeleteVariant(p: ProductVariant): any;
    updateCartItemQuantity(cartItem: ProductVariant): void;
    getElementByXpath(path: string): Node;
    static ɵfac: i0.ɵɵFactoryDeclaration<CartPageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CartPageComponent, "orders-cart-page", never, {}, {}, never, never>;
}
//# sourceMappingURL=cart-page.component.d.ts.map