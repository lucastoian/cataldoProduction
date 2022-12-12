import { OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import * as i0 from "@angular/core";
export declare class CartIconComponent implements OnInit {
    private cartService;
    private cart;
    cartCount: number;
    constructor(cartService: CartService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CartIconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CartIconComponent, "orders-cart-icon", never, {}, {}, never, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CartIconComponent>;
}
//# sourceMappingURL=cart-icon.component.d.ts.map