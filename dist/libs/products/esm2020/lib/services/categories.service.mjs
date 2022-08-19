import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class CategoriesService {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
        this.apiUrlCategories = this.environment.apiURL + 'categories';
    }
    getCategories() {
        return this.http.get(this.apiUrlCategories);
    }
    getCategory(categoryId) {
        return this.http.get(`${this.apiUrlCategories}/${categoryId}`);
    }
    createCategory(category) {
        return this.http.post(this.apiUrlCategories, category);
    }
    updateCategory(category) {
        return this.http.put(`${this.apiUrlCategories}/${category.id}`, category);
    }
    deleteCategory(categoryId) {
        return this.http.delete(`${this.apiUrlCategories}/${categoryId}`);
    }
}
CategoriesService.ɵfac = function CategoriesService_Factory(t) { return new (t || CategoriesService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject('environment')); };
CategoriesService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CategoriesService, factory: CategoriesService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CategoriesService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                type: Inject,
                args: ['environment']
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcmllcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wcm9kdWN0cy9zcmMvbGliL3NlcnZpY2VzL2NhdGVnb3JpZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7OztBQVVoRCxNQUFNLE9BQU8saUJBQWlCO0lBSTdCLFlBQW9CLElBQWdCLEVBQXlCLFdBQVc7UUFBcEQsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNuQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDO0lBQ2pFLENBQUM7SUFFQyxhQUFhO1FBQ1gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBYSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBQ0QsV0FBVyxDQUFDLFVBQWtCO1FBQzVCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLElBQUksVUFBVSxFQUFFLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRUQsY0FBYyxDQUFDLFFBQWtCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQVcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFDRCxjQUFjLENBQUMsUUFBa0I7UUFDL0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBVyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxRQUFRLENBQUMsRUFBRSxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdEYsQ0FBQztJQUVELGNBQWMsQ0FBQyxVQUFrQjtRQUMvQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFNLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixJQUFJLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFDekUsQ0FBQzs7a0ZBekJVLGlCQUFpQiwwQ0FJaUIsYUFBYTt1RUFKL0MsaUJBQWlCLFdBQWpCLGlCQUFpQixtQkFGaEIsTUFBTTt1RkFFUCxpQkFBaUI7Y0FIN0IsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COztzQkFLdUMsTUFBTTt1QkFBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBDYXRlZ29yeSB9IGZyb20gJy4uL21vZGVscy9jYXRlZ29yeSc7XHJcblxyXG5cclxuXHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2F0ZWdvcmllc1NlcnZpY2Uge1xyXG4gIHByaXZhdGUgZW52aXJvbm1lbnQ7XHJcbiAgcHJpdmF0ZSBhcGlVcmxDYXRlZ29yaWVzO1xyXG5cclxuIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgQEluamVjdCgnZW52aXJvbm1lbnQnKSBlbnZpcm9ubWVudCkge1xyXG4gIHRoaXMuZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcclxuICB0aGlzLmFwaVVybENhdGVnb3JpZXMgPSB0aGlzLmVudmlyb25tZW50LmFwaVVSTCArICdjYXRlZ29yaWVzJztcclxufVxyXG5cclxuICBnZXRDYXRlZ29yaWVzKCk6IE9ic2VydmFibGU8Q2F0ZWdvcnlbXT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8Q2F0ZWdvcnlbXT4odGhpcy5hcGlVcmxDYXRlZ29yaWVzKTtcclxuICB9XHJcbiAgZ2V0Q2F0ZWdvcnkoY2F0ZWdvcnlJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxDYXRlZ29yeT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8Q2F0ZWdvcnk+KGAke3RoaXMuYXBpVXJsQ2F0ZWdvcmllc30vJHtjYXRlZ29yeUlkfWApO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlQ2F0ZWdvcnkoY2F0ZWdvcnk6IENhdGVnb3J5KTogT2JzZXJ2YWJsZTxDYXRlZ29yeT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PENhdGVnb3J5Pih0aGlzLmFwaVVybENhdGVnb3JpZXMsIGNhdGVnb3J5KTtcclxuICB9XHJcbiAgdXBkYXRlQ2F0ZWdvcnkoY2F0ZWdvcnk6IENhdGVnb3J5KTogT2JzZXJ2YWJsZTxDYXRlZ29yeT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQ8Q2F0ZWdvcnk+KGAke3RoaXMuYXBpVXJsQ2F0ZWdvcmllc30vJHtjYXRlZ29yeS5pZH1gLCBjYXRlZ29yeSk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVDYXRlZ29yeShjYXRlZ29yeUlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGU8YW55PihgJHt0aGlzLmFwaVVybENhdGVnb3JpZXN9LyR7Y2F0ZWdvcnlJZH1gKTtcclxuICB9XHJcbn1cclxuIl19