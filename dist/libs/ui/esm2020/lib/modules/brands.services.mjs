import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class BrandsService {
    constructor(http) {
        this.http = http;
        this.apiUrlBrands = 'https://cataldoproduction.herokuapp.com/api/v1/' + 'brands';
    }
    getBrands() {
        return this.http.get(this.apiUrlBrands);
    }
    getBrand(brandId) {
        return this.http.get(`${this.apiUrlBrands}/${brandId}`);
    }
    getBrandByName(brandName) {
        return this.http.get(`${this.apiUrlBrands}/get/${brandName}`);
    }
    createBrand(brandData) {
        return this.http.post(this.apiUrlBrands, brandData);
    }
    updateBrand(brandData, brandId) {
        return this.http.put(`${this.apiUrlBrands}/${brandId}`, brandData);
    }
    deleteBrand(brandId) {
        return this.http.delete(`${this.apiUrlBrands}/${brandId}`);
    }
}
BrandsService.ɵfac = function BrandsService_Factory(t) { return new (t || BrandsService)(i0.ɵɵinject(i1.HttpClient)); };
BrandsService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: BrandsService, factory: BrandsService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BrandsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJhbmRzLnNlcnZpY2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy91aS9zcmMvbGliL21vZHVsZXMvYnJhbmRzLnNlcnZpY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDOzs7QUFVaEQsTUFBTSxPQUFPLGFBQWE7SUFHeEIsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUZyQyxpQkFBWSxHQUFHLGlEQUFpRCxHQUFHLFFBQVEsQ0FBQztJQUVwQyxDQUFDO0lBRXhDLFNBQVM7UUFDUCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFVLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBQ0QsUUFBUSxDQUFDLE9BQWU7UUFDdEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUSxHQUFHLElBQUksQ0FBQyxZQUFZLElBQUksT0FBTyxFQUFFLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBQ0QsY0FBYyxDQUFDLFNBQWlCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxRQUFRLFNBQVMsRUFBRSxDQUFDLENBQUE7SUFDdEUsQ0FBQztJQUVELFdBQVcsQ0FBQyxTQUFtQjtRQUM3QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFRLElBQUksQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUNELFdBQVcsQ0FBQyxTQUFtQixFQUFFLE9BQWU7UUFDOUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUSxHQUFHLElBQUksQ0FBQyxZQUFZLElBQUksT0FBTyxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxJQUFJLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7MEVBeEJVLGFBQWE7bUVBQWIsYUFBYSxXQUFiLGFBQWEsbUJBRlosTUFBTTt1RkFFUCxhQUFhO2NBSHpCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5cbmltcG9ydCB7IEJyYW5kIH0gZnJvbSAnLi9icmFuZCc7XG5cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEJyYW5kc1NlcnZpY2Uge1xuIGFwaVVybEJyYW5kcyA9ICdodHRwczovL2NhdGFsZG9wcm9kdWN0aW9uLmhlcm9rdWFwcC5jb20vYXBpL3YxLycgKyAnYnJhbmRzJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XG5cbiAgZ2V0QnJhbmRzKCk6IE9ic2VydmFibGU8QnJhbmRbXT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEJyYW5kW10+KHRoaXMuYXBpVXJsQnJhbmRzKTtcbiAgfVxuICBnZXRCcmFuZChicmFuZElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEJyYW5kPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8QnJhbmQ+KGAke3RoaXMuYXBpVXJsQnJhbmRzfS8ke2JyYW5kSWR9YCk7XG4gIH1cbiAgZ2V0QnJhbmRCeU5hbWUoYnJhbmROYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEJyYW5kPntcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxCcmFuZD4oYCR7dGhpcy5hcGlVcmxCcmFuZHN9L2dldC8ke2JyYW5kTmFtZX1gKVxuICB9XG5cbiAgY3JlYXRlQnJhbmQoYnJhbmREYXRhOiBGb3JtRGF0YSk6IE9ic2VydmFibGU8QnJhbmQ+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8QnJhbmQ+KHRoaXMuYXBpVXJsQnJhbmRzLCBicmFuZERhdGEpO1xuICB9XG4gIHVwZGF0ZUJyYW5kKGJyYW5kRGF0YTogRm9ybURhdGEsIGJyYW5kSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8QnJhbmQ+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxCcmFuZD4oYCR7dGhpcy5hcGlVcmxCcmFuZHN9LyR7YnJhbmRJZH1gLCBicmFuZERhdGEpO1xuICB9XG5cbiAgZGVsZXRlQnJhbmQoYnJhbmRJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZTxhbnk+KGAke3RoaXMuYXBpVXJsQnJhbmRzfS8ke2JyYW5kSWR9YCk7XG4gIH1cbn1cbiJdfQ==