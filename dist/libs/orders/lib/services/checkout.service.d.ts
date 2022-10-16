import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class CheckoutService {
    private http;
    private environment;
    constructor(http: HttpClient, environment: any);
    makePayment(stripeToken: any, amount: number): Observable<any>;
    klarnaPayment(sourceId: any, amount: number): Observable<any>;
    sendSms(orderId: any, clientNumer: any, clientPrefix: any): Observable<any>;
    parseJwt(token: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<CheckoutService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CheckoutService>;
}
//# sourceMappingURL=checkout.service.d.ts.map