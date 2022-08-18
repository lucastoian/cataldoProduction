import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class BrandsService {
    constructor(http) {
        this.http = http;
        this.apiUrlBrands = 'http://localhost:3000/api/v1/' + 'brands';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJhbmRzLnNlcnZpY2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy91aS9zcmMvbGliL21vZHVsZXMvYnJhbmRzLnNlcnZpY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDOzs7QUFVaEQsTUFBTSxPQUFPLGFBQWE7SUFHeEIsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUZyQyxpQkFBWSxHQUFHLCtCQUErQixHQUFHLFFBQVEsQ0FBQztJQUVsQixDQUFDO0lBRXhDLFNBQVM7UUFDUCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFVLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBQ0QsUUFBUSxDQUFDLE9BQWU7UUFDdEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUSxHQUFHLElBQUksQ0FBQyxZQUFZLElBQUksT0FBTyxFQUFFLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBQ0QsY0FBYyxDQUFDLFNBQWlCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxRQUFRLFNBQVMsRUFBRSxDQUFDLENBQUE7SUFDdEUsQ0FBQztJQUdELFdBQVcsQ0FBQyxTQUFtQjtRQUM3QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFRLElBQUksQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUNELFdBQVcsQ0FBQyxTQUFtQixFQUFFLE9BQWU7UUFDOUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUSxHQUFHLElBQUksQ0FBQyxZQUFZLElBQUksT0FBTyxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxJQUFJLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7MEVBekJVLGFBQWE7bUVBQWIsYUFBYSxXQUFiLGFBQWEsbUJBRlosTUFBTTt1RkFFUCxhQUFhO2NBSHpCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcblxyXG5pbXBvcnQgeyBCcmFuZCB9IGZyb20gJy4vYnJhbmQnO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCcmFuZHNTZXJ2aWNlIHtcclxuIGFwaVVybEJyYW5kcyA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3YxLycgKyAnYnJhbmRzJztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxyXG5cclxuICBnZXRCcmFuZHMoKTogT2JzZXJ2YWJsZTxCcmFuZFtdPiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxCcmFuZFtdPih0aGlzLmFwaVVybEJyYW5kcyk7XHJcbiAgfVxyXG4gIGdldEJyYW5kKGJyYW5kSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8QnJhbmQ+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEJyYW5kPihgJHt0aGlzLmFwaVVybEJyYW5kc30vJHticmFuZElkfWApO1xyXG4gIH1cclxuICBnZXRCcmFuZEJ5TmFtZShicmFuZE5hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8QnJhbmQ+e1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8QnJhbmQ+KGAke3RoaXMuYXBpVXJsQnJhbmRzfS9nZXQvJHticmFuZE5hbWV9YClcclxuICB9XHJcbiAgXHJcblxyXG4gIGNyZWF0ZUJyYW5kKGJyYW5kRGF0YTogRm9ybURhdGEpOiBPYnNlcnZhYmxlPEJyYW5kPiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8QnJhbmQ+KHRoaXMuYXBpVXJsQnJhbmRzLCBicmFuZERhdGEpO1xyXG4gIH1cclxuICB1cGRhdGVCcmFuZChicmFuZERhdGE6IEZvcm1EYXRhLCBicmFuZElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEJyYW5kPiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxCcmFuZD4oYCR7dGhpcy5hcGlVcmxCcmFuZHN9LyR7YnJhbmRJZH1gLCBicmFuZERhdGEpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlQnJhbmQoYnJhbmRJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlPGFueT4oYCR7dGhpcy5hcGlVcmxCcmFuZHN9LyR7YnJhbmRJZH1gKTtcclxuICB9XHJcbn1cclxuIl19