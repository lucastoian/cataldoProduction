import { ProductVariant } from '@eshop-frontend/users';
import { OnInit } from '@angular/core';
import { Cart } from '@eshop-frontend/users';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../models/cart';
import * as i0 from "@angular/core";
export declare const CART_KEY = "cart";
export declare class CartService implements OnInit {
    productVariants: ProductVariant[];
    cart: Cart;
    private environment;
    cart$: BehaviorSubject<Cart>;
    cart2$: BehaviorSubject<Cart>;
    constructor();
    ngOnInit(): void;
    initCartLocalStorage(): void;
    emptyCart(): void;
    getCart(): Cart;
    setNewCart(c: Cart): void;
    /**
     * Triggerato da "Add to kart"
     * @param cartItem
     * @param updateCartItem
     * @returns
     */
    setCartItem(cartItem: CartItem, updateCartItem?: boolean): Cart;
    static ɵfac: i0.ɵɵFactoryDeclaration<CartService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CartService>;
}
//# sourceMappingURL=cart.service.d.ts.map