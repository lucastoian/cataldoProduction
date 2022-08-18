import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
//import { environment } from '@env/environment';
export class OrdersService {
    constructor(http) {
        this.http = http;
        this.apiURLOrders = 'http://localhost:3000/api/v1/' + 'orders';
        this.apiURLProducts = 'http://localhost:3000/api/v1/' + 'products';
        this.apiUrlW_Products = 'http://localhost:3000/api/v1/' + 'women-products';
    }
    getOrders() {
        return this.http.get(this.apiURLOrders);
    }
    getOrder(orderId) {
        return this.http.get(`${this.apiURLOrders}/${orderId}`);
    }
    createOrder(order) {
        return this.http.post(this.apiURLOrders, order);
    }
    updateOrder(orderStatus, orderId) {
        return this.http.put(`${this.apiURLOrders}/${orderId}`, orderStatus);
    }
    deleteOrder(orderId) {
        return this.http.delete(`${this.apiURLOrders}/${orderId}`);
    }
    getOrdersCount() {
        return this.http
            .get(`${this.apiURLOrders}/get/count`)
            .pipe(map((objectValue) => objectValue.orderCount));
    }
    getTotalSales() {
        return this.http
            .get(`${this.apiURLOrders}/get/totalsales`)
            .pipe(map((objectValue) => objectValue.totalsales));
    }
    getProduct(productId) {
        return this.http.get(`${this.apiURLProducts}/${productId}`);
    }
    getWProduct(productId) {
        return this.http.get(`${this.apiUrlW_Products}/${productId}`);
    }
}
OrdersService.ɵfac = function OrdersService_Factory(t) { return new (t || OrdersService)(i0.ɵɵinject(i1.HttpClient)); };
OrdersService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: OrdersService, factory: OrdersService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OrdersService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL29yZGVycy9zcmMvbGliL3NlcnZpY2VzL29yZGVycy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWxELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBR3JDLGlEQUFpRDtBQUtqRCxNQUFNLE9BQU8sYUFBYTtJQU14QixZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBTHBDLGlCQUFZLEdBQUcsK0JBQStCLEdBQUcsUUFBUSxDQUFDO1FBQzFELG1CQUFjLEdBQUcsK0JBQStCLEdBQUcsVUFBVSxDQUFDO1FBQzlELHFCQUFnQixHQUFHLCtCQUErQixHQUFHLGdCQUFnQixDQUFDO0lBRy9CLENBQUM7SUFFeEMsU0FBUztRQUNQLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxRQUFRLENBQUMsT0FBZTtRQUN0QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksSUFBSSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRCxXQUFXLENBQUMsS0FBWTtRQUN0QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFRLElBQUksQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELFdBQVcsQ0FBQyxXQUErQixFQUFFLE9BQWU7UUFDMUQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUSxHQUFHLElBQUksQ0FBQyxZQUFZLElBQUksT0FBTyxFQUFFLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxJQUFJLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksWUFBWSxDQUFDO2FBQzdDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFnQixFQUFFLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsYUFBYTtRQUNYLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxpQkFBaUIsQ0FBQzthQUNsRCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBZ0IsRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELFVBQVUsQ0FBQyxTQUFpQjtRQUMxQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsSUFBSSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRCxXQUFXLENBQUMsU0FBaUI7UUFDM0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBTSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7OzBFQTlDVSxhQUFhO21FQUFiLGFBQWEsV0FBYixhQUFhLG1CQUZaLE1BQU07dUZBRVAsYUFBYTtjQUh6QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBPcmRlciB9IGZyb20gJy4uL21vZGVscy9vcmRlcic7XHJcblxyXG4vL2ltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnQGVudi9lbnZpcm9ubWVudCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPcmRlcnNTZXJ2aWNlIHtcclxuICBhcGlVUkxPcmRlcnMgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MS8nICsgJ29yZGVycyc7XHJcbiAgYXBpVVJMUHJvZHVjdHMgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MS8nICsgJ3Byb2R1Y3RzJztcclxuICBhcGlVcmxXX1Byb2R1Y3RzID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEvJyArICd3b21lbi1wcm9kdWN0cyc7XHJcblxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XHJcblxyXG4gIGdldE9yZGVycygpOiBPYnNlcnZhYmxlPE9yZGVyW10+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PE9yZGVyW10+KHRoaXMuYXBpVVJMT3JkZXJzKTtcclxuICB9XHJcblxyXG4gIGdldE9yZGVyKG9yZGVySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8T3JkZXI+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PE9yZGVyPihgJHt0aGlzLmFwaVVSTE9yZGVyc30vJHtvcmRlcklkfWApO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlT3JkZXIob3JkZXI6IE9yZGVyKTogT2JzZXJ2YWJsZTxPcmRlcj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PE9yZGVyPih0aGlzLmFwaVVSTE9yZGVycywgb3JkZXIpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlT3JkZXIob3JkZXJTdGF0dXM6IHsgc3RhdHVzOiBzdHJpbmcgfSwgb3JkZXJJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxPcmRlcj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQ8T3JkZXI+KGAke3RoaXMuYXBpVVJMT3JkZXJzfS8ke29yZGVySWR9YCwgb3JkZXJTdGF0dXMpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlT3JkZXIob3JkZXJJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlPGFueT4oYCR7dGhpcy5hcGlVUkxPcmRlcnN9LyR7b3JkZXJJZH1gKTtcclxuICB9XHJcblxyXG4gIGdldE9yZGVyc0NvdW50KCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgIC5nZXQ8bnVtYmVyPihgJHt0aGlzLmFwaVVSTE9yZGVyc30vZ2V0L2NvdW50YClcclxuICAgICAgLnBpcGUobWFwKChvYmplY3RWYWx1ZTogYW55KSA9PiBvYmplY3RWYWx1ZS5vcmRlckNvdW50KSk7XHJcbiAgfVxyXG5cclxuICBnZXRUb3RhbFNhbGVzKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgIC5nZXQ8bnVtYmVyPihgJHt0aGlzLmFwaVVSTE9yZGVyc30vZ2V0L3RvdGFsc2FsZXNgKVxyXG4gICAgICAucGlwZShtYXAoKG9iamVjdFZhbHVlOiBhbnkpID0+IG9iamVjdFZhbHVlLnRvdGFsc2FsZXMpKTtcclxuICB9XHJcblxyXG4gIGdldFByb2R1Y3QocHJvZHVjdElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55PihgJHt0aGlzLmFwaVVSTFByb2R1Y3RzfS8ke3Byb2R1Y3RJZH1gKTtcclxuICB9XHJcblxyXG4gIGdldFdQcm9kdWN0KHByb2R1Y3RJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+e1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55PihgJHt0aGlzLmFwaVVybFdfUHJvZHVjdHN9LyR7cHJvZHVjdElkfWApO1xyXG4gIH1cclxuXHJcbn1cclxuIl19