import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
//import { environment } from '@env/environment';
export class OrdersService {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
        this.apiURLOrders = this.environment.apiURL + 'orders';
        this.apiURLProducts = +this.environment.apiURL + 'products';
        this.apiUrlW_Products = +this.environment.apiURL + 'women-products';
    }
    getOrders() {
        return this.http.get(this.apiURLOrders);
    }
    getOrdersDoneByUser() {
        return this.http.get(this.apiURLOrders);
    }
    getOrder(orderId) {
        return this.http.get(`${this.apiURLOrders}/${orderId}`);
    }
    createOrder(order) {
        return this.http.post(this.apiURLOrders, order);
    }
    createNewOrder(order, email) {
        return this.http.post(`${this.apiURLOrders}/createNewOrder`, { order, email });
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
OrdersService.ɵfac = function OrdersService_Factory(t) { return new (t || OrdersService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject('environment')); };
OrdersService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: OrdersService, factory: OrdersService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OrdersService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                type: Inject,
                args: ['environment']
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL29yZGVycy9zcmMvbGliL3NlcnZpY2VzL29yZGVycy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUlyQyxpREFBaUQ7QUFLakQsTUFBTSxPQUFPLGFBQWE7SUFTeEIsWUFBb0IsSUFBZ0IsRUFBeUIsV0FBVztRQUFwRCxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2xDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxZQUFZLEdBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO1FBQ3hELElBQUksQ0FBQyxjQUFjLEdBQUksQ0FBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRSxVQUFVLENBQUM7UUFDN0QsSUFBSSxDQUFDLGdCQUFnQixHQUFJLENBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUUsZ0JBQWdCLENBQUM7SUFDdkUsQ0FBQztJQUVBLFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFVLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBQ0QsbUJBQW1CO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFHRCxRQUFRLENBQUMsT0FBZTtRQUN0QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksSUFBSSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRCxXQUFXLENBQUMsS0FBWTtRQUN0QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFRLElBQUksQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELGNBQWMsQ0FBQyxLQUFZLEVBQUUsS0FBYTtRQUN4QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksaUJBQWlCLEVBQUUsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztJQUN0RixDQUFDO0lBRUQsV0FBVyxDQUFDLFdBQStCLEVBQUUsT0FBZTtRQUMxRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksSUFBSSxPQUFPLEVBQUUsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQWU7UUFDekIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBTSxHQUFHLElBQUksQ0FBQyxZQUFZLElBQUksT0FBTyxFQUFFLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxZQUFZLENBQUM7YUFDN0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQWdCLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxhQUFhO1FBQ1gsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLGlCQUFpQixDQUFDO2FBQ2xELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFnQixFQUFFLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsVUFBVSxDQUFDLFNBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxJQUFJLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELFdBQVcsQ0FBQyxTQUFpQjtRQUMzQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFNLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixJQUFJLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDckUsQ0FBQzs7MEVBOURVLGFBQWEsMENBU3NCLGFBQWE7bUVBVGhELGFBQWEsV0FBYixhQUFhLG1CQUZaLE1BQU07dUZBRVAsYUFBYTtjQUh6QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7O3NCQVV3QyxNQUFNO3VCQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgT3JkZXIgfSBmcm9tICcuLi9tb2RlbHMvb3JkZXInO1xyXG5cclxuXHJcbi8vaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICdAZW52L2Vudmlyb25tZW50JztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE9yZGVyc1NlcnZpY2Uge1xyXG4gIHByaXZhdGUgYXBpVVJMT3JkZXJzIDtcclxuICBwcml2YXRlIGFwaVVSTFByb2R1Y3RzO1xyXG4gIHByaXZhdGUgYXBpVXJsV19Qcm9kdWN0cyA7XHJcbiAgcHJpdmF0ZSBlbnZpcm9ubWVudDtcclxuXHJcblxyXG5cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBASW5qZWN0KCdlbnZpcm9ubWVudCcpIGVudmlyb25tZW50KSB7XHJcbiAgICB0aGlzLmVudmlyb25tZW50ID0gZW52aXJvbm1lbnQ7XHJcbiAgICB0aGlzLmFwaVVSTE9yZGVycyA9ICB0aGlzLmVudmlyb25tZW50LmFwaVVSTCArICdvcmRlcnMnO1xyXG4gICAgdGhpcy5hcGlVUkxQcm9kdWN0cyA9ICArIHRoaXMuZW52aXJvbm1lbnQuYXBpVVJMICsncHJvZHVjdHMnO1xyXG4gICAgdGhpcy5hcGlVcmxXX1Byb2R1Y3RzID0gICsgdGhpcy5lbnZpcm9ubWVudC5hcGlVUkwrICd3b21lbi1wcm9kdWN0cyc7XHJcbiAgfVxyXG5cclxuICAgZ2V0T3JkZXJzKCk6IE9ic2VydmFibGU8T3JkZXJbXT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8T3JkZXJbXT4odGhpcy5hcGlVUkxPcmRlcnMpO1xyXG4gIH1cclxuICBnZXRPcmRlcnNEb25lQnlVc2VyKCk6IE9ic2VydmFibGU8T3JkZXJbXT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8T3JkZXJbXT4odGhpcy5hcGlVUkxPcmRlcnMpO1xyXG4gIH1cclxuXHJcblxyXG4gIGdldE9yZGVyKG9yZGVySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8T3JkZXI+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PE9yZGVyPihgJHt0aGlzLmFwaVVSTE9yZGVyc30vJHtvcmRlcklkfWApO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlT3JkZXIob3JkZXI6IE9yZGVyKTogT2JzZXJ2YWJsZTxPcmRlcj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PE9yZGVyPih0aGlzLmFwaVVSTE9yZGVycywgb3JkZXIpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlTmV3T3JkZXIob3JkZXI6IE9yZGVyLCBlbWFpbDogc3RyaW5nKTogT2JzZXJ2YWJsZTxPcmRlcj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PE9yZGVyPihgJHt0aGlzLmFwaVVSTE9yZGVyc30vY3JlYXRlTmV3T3JkZXJgLCB7b3JkZXIsIGVtYWlsfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVPcmRlcihvcmRlclN0YXR1czogeyBzdGF0dXM6IHN0cmluZyB9LCBvcmRlcklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE9yZGVyPiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxPcmRlcj4oYCR7dGhpcy5hcGlVUkxPcmRlcnN9LyR7b3JkZXJJZH1gLCBvcmRlclN0YXR1cyk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVPcmRlcihvcmRlcklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGU8YW55PihgJHt0aGlzLmFwaVVSTE9yZGVyc30vJHtvcmRlcklkfWApO1xyXG4gIH1cclxuXHJcbiAgZ2V0T3JkZXJzQ291bnQoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgLmdldDxudW1iZXI+KGAke3RoaXMuYXBpVVJMT3JkZXJzfS9nZXQvY291bnRgKVxyXG4gICAgICAucGlwZShtYXAoKG9iamVjdFZhbHVlOiBhbnkpID0+IG9iamVjdFZhbHVlLm9yZGVyQ291bnQpKTtcclxuICB9XHJcblxyXG4gIGdldFRvdGFsU2FsZXMoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgLmdldDxudW1iZXI+KGAke3RoaXMuYXBpVVJMT3JkZXJzfS9nZXQvdG90YWxzYWxlc2ApXHJcbiAgICAgIC5waXBlKG1hcCgob2JqZWN0VmFsdWU6IGFueSkgPT4gb2JqZWN0VmFsdWUudG90YWxzYWxlcykpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJvZHVjdChwcm9kdWN0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnk+KGAke3RoaXMuYXBpVVJMUHJvZHVjdHN9LyR7cHJvZHVjdElkfWApO1xyXG4gIH1cclxuXHJcbiAgZ2V0V1Byb2R1Y3QocHJvZHVjdElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT57XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnk+KGAke3RoaXMuYXBpVXJsV19Qcm9kdWN0c30vJHtwcm9kdWN0SWR9YCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=