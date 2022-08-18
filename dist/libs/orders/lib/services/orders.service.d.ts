import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/order';
import * as i0 from "@angular/core";
export declare class OrdersService {
    private http;
    apiURLOrders: string;
    apiURLProducts: string;
    apiUrlW_Products: string;
    constructor(http: HttpClient);
    getOrders(): Observable<Order[]>;
    getOrder(orderId: string): Observable<Order>;
    createOrder(order: Order): Observable<Order>;
    updateOrder(orderStatus: {
        status: string;
    }, orderId: string): Observable<Order>;
    deleteOrder(orderId: string): Observable<any>;
    getOrdersCount(): Observable<number>;
    getTotalSales(): Observable<number>;
    getProduct(productId: string): Observable<any>;
    getWProduct(productId: string): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<OrdersService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OrdersService>;
}
//# sourceMappingURL=orders.service.d.ts.map