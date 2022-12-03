import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class BrandsService {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
        this.apiUrlBrands = this.environment.apiURL + 'brands';
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
BrandsService.ɵfac = function BrandsService_Factory(t) { return new (t || BrandsService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject('environment')); };
BrandsService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: BrandsService, factory: BrandsService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BrandsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                type: Inject,
                args: ['environment']
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJhbmRzLnNlcnZpY2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wcm9kdWN0cy9zcmMvbGliL3NlcnZpY2VzL2JyYW5kcy5zZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7OztBQVVoRCxNQUFNLE9BQU8sYUFBYTtJQU14QixZQUFvQixJQUFnQixFQUF5QixXQUFXO1FBQXBELFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7SUFDM0QsQ0FBQztJQUVELFNBQVM7UUFDUCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFVLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBQ0QsUUFBUSxDQUFDLE9BQWU7UUFDdEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUSxHQUFHLElBQUksQ0FBQyxZQUFZLElBQUksT0FBTyxFQUFFLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBQ0QsY0FBYyxDQUFDLFNBQWlCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxRQUFRLFNBQVMsRUFBRSxDQUFDLENBQUE7SUFDdEUsQ0FBQztJQUdELFdBQVcsQ0FBQyxTQUFtQjtRQUM3QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFRLElBQUksQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUNELFdBQVcsQ0FBQyxTQUFtQixFQUFFLE9BQWU7UUFDOUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUSxHQUFHLElBQUksQ0FBQyxZQUFZLElBQUksT0FBTyxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxJQUFJLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7MEVBL0JVLGFBQWEsMENBTXNCLGFBQWE7bUVBTmhELGFBQWEsV0FBYixhQUFhLG1CQUZaLE1BQU07dUZBRVAsYUFBYTtjQUh6QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7O3NCQU93QyxNQUFNO3VCQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cblxuaW1wb3J0IHsgQnJhbmQgfSBmcm9tICcuLi9tb2RlbHMvYnJhbmQnO1xuXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBCcmFuZHNTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBlbnZpcm9ubWVudDtcbiAgcHJpdmF0ZSBhcGlVcmxCcmFuZHM7XG5cblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgQEluamVjdCgnZW52aXJvbm1lbnQnKSBlbnZpcm9ubWVudCkge1xuICAgICAgdGhpcy5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xuICAgICAgdGhpcy5hcGlVcmxCcmFuZHMgPSB0aGlzLmVudmlyb25tZW50LmFwaVVSTCArICdicmFuZHMnO1xuICB9XG5cbiAgZ2V0QnJhbmRzKCk6IE9ic2VydmFibGU8QnJhbmRbXT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEJyYW5kW10+KHRoaXMuYXBpVXJsQnJhbmRzKTtcbiAgfVxuICBnZXRCcmFuZChicmFuZElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEJyYW5kPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8QnJhbmQ+KGAke3RoaXMuYXBpVXJsQnJhbmRzfS8ke2JyYW5kSWR9YCk7XG4gIH1cbiAgZ2V0QnJhbmRCeU5hbWUoYnJhbmROYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEJyYW5kPntcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxCcmFuZD4oYCR7dGhpcy5hcGlVcmxCcmFuZHN9L2dldC8ke2JyYW5kTmFtZX1gKVxuICB9XG5cblxuICBjcmVhdGVCcmFuZChicmFuZERhdGE6IEZvcm1EYXRhKTogT2JzZXJ2YWJsZTxCcmFuZD4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxCcmFuZD4odGhpcy5hcGlVcmxCcmFuZHMsIGJyYW5kRGF0YSk7XG4gIH1cbiAgdXBkYXRlQnJhbmQoYnJhbmREYXRhOiBGb3JtRGF0YSwgYnJhbmRJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxCcmFuZD4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucHV0PEJyYW5kPihgJHt0aGlzLmFwaVVybEJyYW5kc30vJHticmFuZElkfWAsIGJyYW5kRGF0YSk7XG4gIH1cblxuICBkZWxldGVCcmFuZChicmFuZElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlPGFueT4oYCR7dGhpcy5hcGlVcmxCcmFuZHN9LyR7YnJhbmRJZH1gKTtcbiAgfVxufVxuIl19