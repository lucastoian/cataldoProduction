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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL29yZGVycy9zcmMvbGliL3NlcnZpY2VzL29yZGVycy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUdyQyxpREFBaUQ7QUFLakQsTUFBTSxPQUFPLGFBQWE7SUFTeEIsWUFBb0IsSUFBZ0IsRUFBeUIsV0FBVztRQUFwRCxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2xDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxZQUFZLEdBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO1FBQ3hELElBQUksQ0FBQyxjQUFjLEdBQUksQ0FBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRSxVQUFVLENBQUM7UUFDN0QsSUFBSSxDQUFDLGdCQUFnQixHQUFJLENBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUUsZ0JBQWdCLENBQUM7SUFDdkUsQ0FBQztJQUVELFNBQVM7UUFDUCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFVLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsUUFBUSxDQUFDLE9BQWU7UUFDdEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUSxHQUFHLElBQUksQ0FBQyxZQUFZLElBQUksT0FBTyxFQUFFLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQsV0FBVyxDQUFDLEtBQVk7UUFDdEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBUSxJQUFJLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCxXQUFXLENBQUMsV0FBK0IsRUFBRSxPQUFlO1FBQzFELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxJQUFJLE9BQU8sRUFBRSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBZTtRQUN6QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksSUFBSSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRCxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLFlBQVksQ0FBQzthQUM3QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBZ0IsRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELGFBQWE7UUFDWCxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksaUJBQWlCLENBQUM7YUFDbEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQWdCLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxVQUFVLENBQUMsU0FBaUI7UUFDMUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBTSxHQUFHLElBQUksQ0FBQyxjQUFjLElBQUksU0FBUyxFQUFFLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQsV0FBVyxDQUFDLFNBQWlCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQU0sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLElBQUksU0FBUyxFQUFFLENBQUMsQ0FBQztJQUNyRSxDQUFDOzswRUF0RFUsYUFBYSwwQ0FTc0IsYUFBYTttRUFUaEQsYUFBYSxXQUFiLGFBQWEsbUJBRlosTUFBTTt1RkFFUCxhQUFhO2NBSHpCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7c0JBVXdDLE1BQU07dUJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE9yZGVyIH0gZnJvbSAnLi4vbW9kZWxzL29yZGVyJztcclxuXHJcbi8vaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICdAZW52L2Vudmlyb25tZW50JztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE9yZGVyc1NlcnZpY2Uge1xyXG4gIHByaXZhdGUgYXBpVVJMT3JkZXJzIDtcclxuICBwcml2YXRlIGFwaVVSTFByb2R1Y3RzO1xyXG4gIHByaXZhdGUgYXBpVXJsV19Qcm9kdWN0cyA7XHJcbiAgcHJpdmF0ZSBlbnZpcm9ubWVudDtcclxuXHJcblxyXG5cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBASW5qZWN0KCdlbnZpcm9ubWVudCcpIGVudmlyb25tZW50KSB7XHJcbiAgICB0aGlzLmVudmlyb25tZW50ID0gZW52aXJvbm1lbnQ7XHJcbiAgICB0aGlzLmFwaVVSTE9yZGVycyA9ICB0aGlzLmVudmlyb25tZW50LmFwaVVSTCArICdvcmRlcnMnO1xyXG4gICAgdGhpcy5hcGlVUkxQcm9kdWN0cyA9ICArIHRoaXMuZW52aXJvbm1lbnQuYXBpVVJMICsncHJvZHVjdHMnO1xyXG4gICAgdGhpcy5hcGlVcmxXX1Byb2R1Y3RzID0gICsgdGhpcy5lbnZpcm9ubWVudC5hcGlVUkwrICd3b21lbi1wcm9kdWN0cyc7XHJcbiAgfVxyXG5cclxuICBnZXRPcmRlcnMoKTogT2JzZXJ2YWJsZTxPcmRlcltdPiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxPcmRlcltdPih0aGlzLmFwaVVSTE9yZGVycyk7XHJcbiAgfVxyXG5cclxuICBnZXRPcmRlcihvcmRlcklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE9yZGVyPiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxPcmRlcj4oYCR7dGhpcy5hcGlVUkxPcmRlcnN9LyR7b3JkZXJJZH1gKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZU9yZGVyKG9yZGVyOiBPcmRlcik6IE9ic2VydmFibGU8T3JkZXI+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxPcmRlcj4odGhpcy5hcGlVUkxPcmRlcnMsIG9yZGVyKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZU9yZGVyKG9yZGVyU3RhdHVzOiB7IHN0YXR1czogc3RyaW5nIH0sIG9yZGVySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8T3JkZXI+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucHV0PE9yZGVyPihgJHt0aGlzLmFwaVVSTE9yZGVyc30vJHtvcmRlcklkfWAsIG9yZGVyU3RhdHVzKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZU9yZGVyKG9yZGVySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZTxhbnk+KGAke3RoaXMuYXBpVVJMT3JkZXJzfS8ke29yZGVySWR9YCk7XHJcbiAgfVxyXG5cclxuICBnZXRPcmRlcnNDb3VudCgpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAuZ2V0PG51bWJlcj4oYCR7dGhpcy5hcGlVUkxPcmRlcnN9L2dldC9jb3VudGApXHJcbiAgICAgIC5waXBlKG1hcCgob2JqZWN0VmFsdWU6IGFueSkgPT4gb2JqZWN0VmFsdWUub3JkZXJDb3VudCkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VG90YWxTYWxlcygpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAuZ2V0PG51bWJlcj4oYCR7dGhpcy5hcGlVUkxPcmRlcnN9L2dldC90b3RhbHNhbGVzYClcclxuICAgICAgLnBpcGUobWFwKChvYmplY3RWYWx1ZTogYW55KSA9PiBvYmplY3RWYWx1ZS50b3RhbHNhbGVzKSk7XHJcbiAgfVxyXG5cclxuICBnZXRQcm9kdWN0KHByb2R1Y3RJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4oYCR7dGhpcy5hcGlVUkxQcm9kdWN0c30vJHtwcm9kdWN0SWR9YCk7XHJcbiAgfVxyXG5cclxuICBnZXRXUHJvZHVjdChwcm9kdWN0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PntcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4oYCR7dGhpcy5hcGlVcmxXX1Byb2R1Y3RzfS8ke3Byb2R1Y3RJZH1gKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==