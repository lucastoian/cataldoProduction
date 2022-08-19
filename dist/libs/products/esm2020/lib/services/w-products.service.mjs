import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class W_ProductsService {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
        this.apiUrlW_Products = this.environment.apiURL + 'women-products';
    }
    getWProducts(categoriesFilter) {
        let params = new HttpParams();
        if (categoriesFilter) {
            params = params.append('categories', categoriesFilter.join(','));
            console.log(params);
        }
        return this.http.get(this.apiUrlW_Products, {
            params: params,
        });
    }
    getProductByName(prodName) {
        return this.http.get(`${this.apiUrlW_Products}/prodname/${prodName}`);
    }
    getWProduct(productId) {
        return this.http.get(`${this.apiUrlW_Products}/${productId}`);
    }
    updateWProduct(productData, productid) {
        return this.http.put(`${this.apiUrlW_Products}/${productid}`, productData);
    }
    createProduct(productData) {
        return this.http.post(this.apiUrlW_Products, productData);
    }
    deleteWProduct(productId) {
        return this.http.delete(`${this.apiUrlW_Products}/${productId}`);
    }
}
W_ProductsService.ɵfac = function W_ProductsService_Factory(t) { return new (t || W_ProductsService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject('environment')); };
W_ProductsService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: W_ProductsService, factory: W_ProductsService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(W_ProductsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                type: Inject,
                args: ['environment']
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidy1wcm9kdWN0cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wcm9kdWN0cy9zcmMvbGliL3NlcnZpY2VzL3ctcHJvZHVjdHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFROUQsTUFBTSxPQUFPLGlCQUFpQjtJQUk1QixZQUFvQixJQUFnQixFQUF5QixXQUFXO1FBQXBELFNBQUksR0FBSixJQUFJLENBQVk7UUFDbEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLGdCQUFnQixDQUFDO0lBQ3JFLENBQUM7SUFFRCxZQUFZLENBQUMsZ0JBQTJCO1FBQ3RDLElBQUksTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7UUFDOUIsSUFBSSxnQkFBZ0IsRUFBRTtZQUNwQixNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDakUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNyQjtRQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3ZELE1BQU0sRUFBRSxNQUFNO1NBQ2YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGdCQUFnQixDQUFDLFFBQWdCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2xCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixhQUFhLFFBQVEsRUFBRSxDQUNoRCxDQUFDO0lBQ0osQ0FBQztJQUVELFdBQVcsQ0FBQyxTQUFpQjtRQUMzQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixJQUFJLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVELGNBQWMsQ0FDWixXQUFxQixFQUNyQixTQUFpQjtRQUVqQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNsQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxTQUFTLEVBQUUsRUFDdkMsV0FBVyxDQUNaLENBQUM7SUFDSixDQUFDO0lBQ0QsYUFBYSxDQUFDLFdBQXFCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQVksSUFBSSxDQUFDLGdCQUFnQixFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRCxjQUFjLENBQUMsU0FBaUI7UUFDOUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBTSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7O2tGQTdDVSxpQkFBaUIsMENBSWtCLGFBQWE7dUVBSmhELGlCQUFpQixXQUFqQixpQkFBaUIsbUJBRmhCLE1BQU07dUZBRVAsaUJBQWlCO2NBSDdCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7c0JBS3dDLE1BQU07dUJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBXX1Byb2R1Y3QgfSBmcm9tICcuLi9tb2RlbHMvdy1wcm9kdWN0JztcclxuXHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgV19Qcm9kdWN0c1NlcnZpY2Uge1xyXG4gIHByaXZhdGUgZW52aXJvbm1lbnQ7XHJcbiAgcHJpdmF0ZSBhcGlVcmxXX1Byb2R1Y3RzO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIEBJbmplY3QoJ2Vudmlyb25tZW50JykgZW52aXJvbm1lbnQpIHtcclxuICAgIHRoaXMuZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcclxuICAgIHRoaXMuYXBpVXJsV19Qcm9kdWN0cyA9IHRoaXMuZW52aXJvbm1lbnQuYXBpVVJMICsgJ3dvbWVuLXByb2R1Y3RzJztcclxuICB9XHJcblxyXG4gIGdldFdQcm9kdWN0cyhjYXRlZ29yaWVzRmlsdGVyPzogc3RyaW5nW10pOiBPYnNlcnZhYmxlPFdfUHJvZHVjdFtdPiB7XHJcbiAgICBsZXQgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKTtcclxuICAgIGlmIChjYXRlZ29yaWVzRmlsdGVyKSB7XHJcbiAgICAgIHBhcmFtcyA9IHBhcmFtcy5hcHBlbmQoJ2NhdGVnb3JpZXMnLCBjYXRlZ29yaWVzRmlsdGVyLmpvaW4oJywnKSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHBhcmFtcyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxXX1Byb2R1Y3RbXT4odGhpcy5hcGlVcmxXX1Byb2R1Y3RzLCB7XHJcbiAgICAgIHBhcmFtczogcGFyYW1zLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRQcm9kdWN0QnlOYW1lKHByb2ROYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFdfUHJvZHVjdFtdPiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxXX1Byb2R1Y3RbXT4oXHJcbiAgICAgIGAke3RoaXMuYXBpVXJsV19Qcm9kdWN0c30vcHJvZG5hbWUvJHtwcm9kTmFtZX1gXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0V1Byb2R1Y3QocHJvZHVjdElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFdfUHJvZHVjdD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8V19Qcm9kdWN0PihgJHt0aGlzLmFwaVVybFdfUHJvZHVjdHN9LyR7cHJvZHVjdElkfWApO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlV1Byb2R1Y3QoXHJcbiAgICBwcm9kdWN0RGF0YTogRm9ybURhdGEsXHJcbiAgICBwcm9kdWN0aWQ6IHN0cmluZ1xyXG4gICk6IE9ic2VydmFibGU8V19Qcm9kdWN0PiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxXX1Byb2R1Y3Q+KFxyXG4gICAgICBgJHt0aGlzLmFwaVVybFdfUHJvZHVjdHN9LyR7cHJvZHVjdGlkfWAsXHJcbiAgICAgIHByb2R1Y3REYXRhXHJcbiAgICApO1xyXG4gIH1cclxuICBjcmVhdGVQcm9kdWN0KHByb2R1Y3REYXRhOiBGb3JtRGF0YSk6IE9ic2VydmFibGU8V19Qcm9kdWN0PiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8V19Qcm9kdWN0Pih0aGlzLmFwaVVybFdfUHJvZHVjdHMsIHByb2R1Y3REYXRhKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZVdQcm9kdWN0KHByb2R1Y3RJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlPGFueT4oYCR7dGhpcy5hcGlVcmxXX1Byb2R1Y3RzfS8ke3Byb2R1Y3RJZH1gKTtcclxuICB9XHJcbn1cclxuIl19