/** */
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UsersService } from '@eshop-frontend/users';
import { MessageService } from 'primeng/api';
import { Subject } from 'rxjs';
import { OrdersService } from '../../services/orders.service';
import { CartService } from '../../services/cart.service';
import { OrderItem } from '../../models/order-item';
import * as i0 from "@angular/core";
export declare class CheckoutPageComponent implements OnInit {
    private router;
    private usersService;
    private formBuilder;
    private cartService;
    private ordersService;
    private messageService;
    constructor(router: Router, usersService: UsersService, formBuilder: FormBuilder, cartService: CartService, ordersService: OrdersService, messageService: MessageService);
    checkoutFormGroup: FormGroup;
    isSubmitted: boolean;
    orderItems: OrderItem[];
    userId: string;
    countries: any[];
    unsubscribe$: Subject<any>;
    ngOnInit(): void;
    private _initUserForm;
    private _autoFillUserData;
    private _getCartItems;
    private _getCountries;
    backToCart(): void;
    placeOrder(): void;
    get checkoutForm(): {
        [key: string]: import("@angular/forms").AbstractControl;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<CheckoutPageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CheckoutPageComponent, "orders-checkout-page", never, {}, {}, never, never>;
}
//# sourceMappingURL=checkout-page.component.d.ts.map