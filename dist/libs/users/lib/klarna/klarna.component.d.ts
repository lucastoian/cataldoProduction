import { OnInit } from '@angular/core';
import { CheckoutService } from '../services/checkout.service';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
export declare class KlarnaComponent implements OnInit {
    static stripe: any;
    checkoutService: CheckoutService;
    static http: HttpClient;
    ngAfterViewInit(): void;
    initStripeElements(): Promise<void>;
    constructor();
    ngOnInit(): void;
    printHello(): void;
    static pollForSourceStatus(stripe: any, SOURCE_ID: string, CLIENT_SECRET: string, MAX_POLL_COUNT: number, pollCount: number, amount: number): void;
    pay(amount: number): Promise<void>;
    static klarnaPayment(sourceId: any, amount: number): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<KlarnaComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<KlarnaComponent, "eshop-frontend-klarna", never, {}, {}, never, never>;
}
//# sourceMappingURL=klarna.component.d.ts.map