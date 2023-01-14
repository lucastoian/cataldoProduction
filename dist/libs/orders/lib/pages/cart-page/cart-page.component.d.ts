import { ProductVariant } from '@eshop-frontend/users';
import { OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Title } from "@angular/platform-browser";
import * as i0 from "@angular/core";
export declare class CartPageComponent implements OnInit, OnDestroy {
    private router;
    private cartService;
    private titleService;
    productVariants: ProductVariant[];
    items: number;
    productNames: string[];
    private cart;
    constructor(router: Router, cartService: CartService, titleService: Title);
    ngOnInit(): void;
    ngOnDestroy(): void;
    backToShop(): void;
    trackByMethod(index: number, p: ProductVariant): string;
    getProductVariantByIdAndDeleteVariant(p: ProductVariant): any;
    updateCartItemQuantity(cartItem: ProductVariant): void;
    removeProductFromCart(p: ProductVariant): void;
    getElementByXpath(path: string): Node;
    static ɵfac: i0.ɵɵFactoryDeclaration<CartPageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CartPageComponent, "orders-cart-page", never, {}, {}, never, never>;
}
//# sourceMappingURL=cart-page.component.d.ts.map