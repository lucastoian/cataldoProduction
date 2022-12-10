import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { User } from '@eshop-frontend/users';
import { Observable } from 'rxjs';
import { Order } from '../models/order';
import { OrdersService } from '../services/orders.service';
import * as i0 from "@angular/core";
export declare class PaypalComponent implements OnInit {
    private orderService;
    http: HttpClient;
    user: User;
    data: any;
    order: Order;
    constructor(orderService: OrdersService);
    ngOnInit(): void;
    createNewOrder(order: Order, email: string, prefix: string): Observable<any>;
    parseJwt(token: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<PaypalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PaypalComponent, "ng-component", never, {}, {}, never, never>;
}
//# sourceMappingURL=paypal.component.d.ts.map