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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJhbmRzLnNlcnZpY2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wcm9kdWN0cy9zcmMvbGliL3NlcnZpY2VzL2JyYW5kcy5zZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBVWhELE1BQU0sT0FBTyxhQUFhO0lBR3hCLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFGckMsaUJBQVksR0FBRywrQkFBK0IsR0FBRyxRQUFRLENBQUM7SUFFbEIsQ0FBQztJQUV4QyxTQUFTO1FBQ1AsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBVSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUNELFFBQVEsQ0FBQyxPQUFlO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxJQUFJLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUNELGNBQWMsQ0FBQyxTQUFpQjtRQUM5QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksUUFBUSxTQUFTLEVBQUUsQ0FBQyxDQUFBO0lBQ3RFLENBQUM7SUFHRCxXQUFXLENBQUMsU0FBbUI7UUFDN0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBUSxJQUFJLENBQUMsWUFBWSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFDRCxXQUFXLENBQUMsU0FBbUIsRUFBRSxPQUFlO1FBQzlDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxJQUFJLE9BQU8sRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBZTtRQUN6QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksSUFBSSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7OzBFQXpCVSxhQUFhO21FQUFiLGFBQWEsV0FBYixhQUFhLG1CQUZaLE1BQU07dUZBRVAsYUFBYTtjQUh6QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5cclxuaW1wb3J0IHsgQnJhbmQgfSBmcm9tICcuLi9tb2RlbHMvYnJhbmQnO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCcmFuZHNTZXJ2aWNlIHtcclxuIGFwaVVybEJyYW5kcyA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3YxLycgKyAnYnJhbmRzJztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxyXG5cclxuICBnZXRCcmFuZHMoKTogT2JzZXJ2YWJsZTxCcmFuZFtdPiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxCcmFuZFtdPih0aGlzLmFwaVVybEJyYW5kcyk7XHJcbiAgfVxyXG4gIGdldEJyYW5kKGJyYW5kSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8QnJhbmQ+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEJyYW5kPihgJHt0aGlzLmFwaVVybEJyYW5kc30vJHticmFuZElkfWApO1xyXG4gIH1cclxuICBnZXRCcmFuZEJ5TmFtZShicmFuZE5hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8QnJhbmQ+e1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8QnJhbmQ+KGAke3RoaXMuYXBpVXJsQnJhbmRzfS9nZXQvJHticmFuZE5hbWV9YClcclxuICB9XHJcbiAgXHJcblxyXG4gIGNyZWF0ZUJyYW5kKGJyYW5kRGF0YTogRm9ybURhdGEpOiBPYnNlcnZhYmxlPEJyYW5kPiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8QnJhbmQ+KHRoaXMuYXBpVXJsQnJhbmRzLCBicmFuZERhdGEpO1xyXG4gIH1cclxuICB1cGRhdGVCcmFuZChicmFuZERhdGE6IEZvcm1EYXRhLCBicmFuZElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEJyYW5kPiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxCcmFuZD4oYCR7dGhpcy5hcGlVcmxCcmFuZHN9LyR7YnJhbmRJZH1gLCBicmFuZERhdGEpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlQnJhbmQoYnJhbmRJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlPGFueT4oYCR7dGhpcy5hcGlVcmxCcmFuZHN9LyR7YnJhbmRJZH1gKTtcclxuICB9XHJcbn1cclxuIl19