import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from '@eshop-frontend/users';
import { Order } from '../models/order';
import * as i0 from "@angular/core";
export declare class CheckoutService {
    private http;
    private apiURLOrders;
    private apiURLProducts;
    private apiUrlW_Products;
    private environment;
    constructor(http: HttpClient, environment: any);
    makePayment(stripeToken: any, amount: number): Observable<any>;
    sendSms(orderId: any, clientNumber: any, clientPrefix: any): Observable<any>;
    payPal(cart: Cart, order2: Order): Observable<any>;
    parseJwt(token: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<CheckoutService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CheckoutService>;
}
//# sourceMappingURL=checkout.service.d.ts.map