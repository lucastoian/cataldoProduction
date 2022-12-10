import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/order';
import * as i0 from "@angular/core";
export declare class OrdersService {
    private http;
    private apiURLOrders;
    private apiURLProducts;
    private apiUrlW_Products;
    private environment;
    constructor(http: HttpClient, environment: any);
    getOrders(): Observable<Order[]>;
    getOrdersDoneByUser(): Observable<Order[]>;
    payPal(s: string): Observable<any>;
    getOrder(orderId: string): Observable<Order>;
    createOrder(order: Order): Observable<Order>;
    createNewOrder(order: Order, email: string, prefix: string): Observable<any>;
    getUnconfirmedOrder(prefix: any, phone: any): Observable<any>;
    updateOrder(orderStatus: {
        status: string;
    }, orderId: string): Observable<Order>;
    deleteOrder(orderId: string): Observable<any>;
    getOrdersCount(): Observable<number>;
    getTotalSales(): Observable<number>;
    getProduct(productId: string): Observable<any>;
    getWProduct(productId: string): Observable<any>;
    parseJwt(token: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<OrdersService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OrdersService>;
}
//# sourceMappingURL=orders.service.d.ts.map