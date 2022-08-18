import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class W_ProductsService {
    constructor(http) {
        this.http = http;
        this.apiUrlW_Products = 'http://localhost:3000/api/v1/' + 'women-products';
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
W_ProductsService.ɵfac = function W_ProductsService_Factory(t) { return new (t || W_ProductsService)(i0.ɵɵinject(i1.HttpClient)); };
W_ProductsService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: W_ProductsService, factory: W_ProductsService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(W_ProductsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidy1wcm9kdWN0cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wcm9kdWN0cy9zcmMvbGliL3NlcnZpY2VzL3ctcHJvZHVjdHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztBQVE5RCxNQUFNLE9BQU8saUJBQWlCO0lBRzVCLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFGcEMscUJBQWdCLEdBQUcsK0JBQStCLEdBQUcsZ0JBQWdCLENBQUM7SUFFL0IsQ0FBQztJQUV4QyxZQUFZLENBQUMsZ0JBQTJCO1FBQ3RDLElBQUksTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7UUFDOUIsSUFBSSxnQkFBZ0IsRUFBRTtZQUNwQixNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDakUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNyQjtRQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3ZELE1BQU0sRUFBRSxNQUFNO1NBQ2YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGdCQUFnQixDQUFDLFFBQWdCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2xCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixhQUFhLFFBQVEsRUFBRSxDQUNoRCxDQUFDO0lBQ0osQ0FBQztJQUVELFdBQVcsQ0FBQyxTQUFpQjtRQUMzQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixJQUFJLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVELGNBQWMsQ0FDWixXQUFxQixFQUNyQixTQUFpQjtRQUVqQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNsQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxTQUFTLEVBQUUsRUFDdkMsV0FBVyxDQUNaLENBQUM7SUFDSixDQUFDO0lBQ0QsYUFBYSxDQUFDLFdBQXFCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQVksSUFBSSxDQUFDLGdCQUFnQixFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRCxjQUFjLENBQUMsU0FBaUI7UUFDOUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBTSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7O2tGQXpDVSxpQkFBaUI7dUVBQWpCLGlCQUFpQixXQUFqQixpQkFBaUIsbUJBRmhCLE1BQU07dUZBRVAsaUJBQWlCO2NBSDdCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgV19Qcm9kdWN0IH0gZnJvbSAnLi4vbW9kZWxzL3ctcHJvZHVjdCc7XHJcblxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFdfUHJvZHVjdHNTZXJ2aWNlIHtcclxuICBhcGlVcmxXX1Byb2R1Y3RzID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEvJyArICd3b21lbi1wcm9kdWN0cyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cclxuXHJcbiAgZ2V0V1Byb2R1Y3RzKGNhdGVnb3JpZXNGaWx0ZXI/OiBzdHJpbmdbXSk6IE9ic2VydmFibGU8V19Qcm9kdWN0W10+IHtcclxuICAgIGxldCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpO1xyXG4gICAgaWYgKGNhdGVnb3JpZXNGaWx0ZXIpIHtcclxuICAgICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZCgnY2F0ZWdvcmllcycsIGNhdGVnb3JpZXNGaWx0ZXIuam9pbignLCcpKTtcclxuICAgICAgY29uc29sZS5sb2cocGFyYW1zKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFdfUHJvZHVjdFtdPih0aGlzLmFwaVVybFdfUHJvZHVjdHMsIHtcclxuICAgICAgcGFyYW1zOiBwYXJhbXMsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldFByb2R1Y3RCeU5hbWUocHJvZE5hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8V19Qcm9kdWN0W10+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFdfUHJvZHVjdFtdPihcclxuICAgICAgYCR7dGhpcy5hcGlVcmxXX1Byb2R1Y3RzfS9wcm9kbmFtZS8ke3Byb2ROYW1lfWBcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXRXUHJvZHVjdChwcm9kdWN0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8V19Qcm9kdWN0PiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxXX1Byb2R1Y3Q+KGAke3RoaXMuYXBpVXJsV19Qcm9kdWN0c30vJHtwcm9kdWN0SWR9YCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVXUHJvZHVjdChcclxuICAgIHByb2R1Y3REYXRhOiBGb3JtRGF0YSxcclxuICAgIHByb2R1Y3RpZDogc3RyaW5nXHJcbiAgKTogT2JzZXJ2YWJsZTxXX1Byb2R1Y3Q+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucHV0PFdfUHJvZHVjdD4oXHJcbiAgICAgIGAke3RoaXMuYXBpVXJsV19Qcm9kdWN0c30vJHtwcm9kdWN0aWR9YCxcclxuICAgICAgcHJvZHVjdERhdGFcclxuICAgICk7XHJcbiAgfVxyXG4gIGNyZWF0ZVByb2R1Y3QocHJvZHVjdERhdGE6IEZvcm1EYXRhKTogT2JzZXJ2YWJsZTxXX1Byb2R1Y3Q+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxXX1Byb2R1Y3Q+KHRoaXMuYXBpVXJsV19Qcm9kdWN0cywgcHJvZHVjdERhdGEpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlV1Byb2R1Y3QocHJvZHVjdElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGU8YW55PihgJHt0aGlzLmFwaVVybFdfUHJvZHVjdHN9LyR7cHJvZHVjdElkfWApO1xyXG4gIH1cclxufSJdfQ==