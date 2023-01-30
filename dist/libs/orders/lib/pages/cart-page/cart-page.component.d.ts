import { ProductVariant } from '@eshop-frontend/users';
import { OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from "@angular/platform-browser";
import { CartService } from '../../services/cart.service';
import * as i0 from "@angular/core";
export declare class CartPageComponent implements OnInit, OnDestroy {
    private router;
    private cartService;
    private titleService;
    private meta;
    productVariants: ProductVariant[];
    items: number;
    productNames: string[];
    private cart;
    constructor(router: Router, cartService: CartService, titleService: Title, meta: Meta);
    ngOnInit(): void;
    ngOnDestroy(): void;
    backToShop(): void;
    trackByMethod(index: number, p: ProductVariant): string;
    getProductVariantByIdAndDeleteVariant(p: ProductVariant): any;
    updateCartItemQuantity(cartItem: ProductVariant): void;
    removeProductFromCart(p: ProductVariant): void;
    getElementByXpath(path: string): Node;
    static ɵfac: i0.ɵɵFactoryDeclaration<CartPageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CartPageComponent, "orders-cart-page", never, {}, {}, never, never, false, never>;
}
//# sourceMappingURL=cart-page.component.d.ts.map