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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidy1wcm9kdWN0cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wcm9kdWN0cy9zcmMvbGliL3NlcnZpY2VzL3ctcHJvZHVjdHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFROUQsTUFBTSxPQUFPLGlCQUFpQjtJQUk1QixZQUFvQixJQUFnQixFQUF5QixXQUFXO1FBQXBELFNBQUksR0FBSixJQUFJLENBQVk7UUFDbEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLGdCQUFnQixDQUFDO0lBQ3JFLENBQUM7SUFFRCxZQUFZLENBQUMsZ0JBQTJCO1FBQ3RDLElBQUksTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7UUFDOUIsSUFBSSxnQkFBZ0IsRUFBRTtZQUNwQixNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDakUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNyQjtRQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3ZELE1BQU0sRUFBRSxNQUFNO1NBQ2YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGdCQUFnQixDQUFDLFFBQWdCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2xCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixhQUFhLFFBQVEsRUFBRSxDQUNoRCxDQUFDO0lBQ0osQ0FBQztJQUVELFdBQVcsQ0FBQyxTQUFpQjtRQUMzQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixJQUFJLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVELGNBQWMsQ0FDWixXQUFxQixFQUNyQixTQUFpQjtRQUVqQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNsQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxTQUFTLEVBQUUsRUFDdkMsV0FBVyxDQUNaLENBQUM7SUFDSixDQUFDO0lBQ0QsYUFBYSxDQUFDLFdBQXFCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQVksSUFBSSxDQUFDLGdCQUFnQixFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRCxjQUFjLENBQUMsU0FBaUI7UUFDOUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBTSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7O2tGQTdDVSxpQkFBaUIsMENBSWtCLGFBQWE7dUVBSmhELGlCQUFpQixXQUFqQixpQkFBaUIsbUJBRmhCLE1BQU07dUZBRVAsaUJBQWlCO2NBSDdCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7c0JBS3dDLE1BQU07dUJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgV19Qcm9kdWN0IH0gZnJvbSAnLi4vbW9kZWxzL3ctcHJvZHVjdCc7XG5cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFdfUHJvZHVjdHNTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBlbnZpcm9ubWVudDtcbiAgcHJpdmF0ZSBhcGlVcmxXX1Byb2R1Y3RzO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgQEluamVjdCgnZW52aXJvbm1lbnQnKSBlbnZpcm9ubWVudCkge1xuICAgIHRoaXMuZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcbiAgICB0aGlzLmFwaVVybFdfUHJvZHVjdHMgPSB0aGlzLmVudmlyb25tZW50LmFwaVVSTCArICd3b21lbi1wcm9kdWN0cyc7XG4gIH1cblxuICBnZXRXUHJvZHVjdHMoY2F0ZWdvcmllc0ZpbHRlcj86IHN0cmluZ1tdKTogT2JzZXJ2YWJsZTxXX1Byb2R1Y3RbXT4ge1xuICAgIGxldCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpO1xuICAgIGlmIChjYXRlZ29yaWVzRmlsdGVyKSB7XG4gICAgICBwYXJhbXMgPSBwYXJhbXMuYXBwZW5kKCdjYXRlZ29yaWVzJywgY2F0ZWdvcmllc0ZpbHRlci5qb2luKCcsJykpO1xuICAgICAgY29uc29sZS5sb2cocGFyYW1zKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8V19Qcm9kdWN0W10+KHRoaXMuYXBpVXJsV19Qcm9kdWN0cywge1xuICAgICAgcGFyYW1zOiBwYXJhbXMsXG4gICAgfSk7XG4gIH1cblxuICBnZXRQcm9kdWN0QnlOYW1lKHByb2ROYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFdfUHJvZHVjdFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8V19Qcm9kdWN0W10+KFxuICAgICAgYCR7dGhpcy5hcGlVcmxXX1Byb2R1Y3RzfS9wcm9kbmFtZS8ke3Byb2ROYW1lfWBcbiAgICApO1xuICB9XG5cbiAgZ2V0V1Byb2R1Y3QocHJvZHVjdElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFdfUHJvZHVjdD4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFdfUHJvZHVjdD4oYCR7dGhpcy5hcGlVcmxXX1Byb2R1Y3RzfS8ke3Byb2R1Y3RJZH1gKTtcbiAgfVxuXG4gIHVwZGF0ZVdQcm9kdWN0KFxuICAgIHByb2R1Y3REYXRhOiBGb3JtRGF0YSxcbiAgICBwcm9kdWN0aWQ6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPFdfUHJvZHVjdD4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucHV0PFdfUHJvZHVjdD4oXG4gICAgICBgJHt0aGlzLmFwaVVybFdfUHJvZHVjdHN9LyR7cHJvZHVjdGlkfWAsXG4gICAgICBwcm9kdWN0RGF0YVxuICAgICk7XG4gIH1cbiAgY3JlYXRlUHJvZHVjdChwcm9kdWN0RGF0YTogRm9ybURhdGEpOiBPYnNlcnZhYmxlPFdfUHJvZHVjdD4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxXX1Byb2R1Y3Q+KHRoaXMuYXBpVXJsV19Qcm9kdWN0cywgcHJvZHVjdERhdGEpO1xuICB9XG5cbiAgZGVsZXRlV1Byb2R1Y3QocHJvZHVjdElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlPGFueT4oYCR7dGhpcy5hcGlVcmxXX1Byb2R1Y3RzfS8ke3Byb2R1Y3RJZH1gKTtcbiAgfVxufVxuIl19