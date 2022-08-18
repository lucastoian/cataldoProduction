import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class CategoriesService {
    constructor(http) {
        this.http = http;
        this.apiUrlCategories = 'https://cataldoproduction.herokuapp.com/api/v1/' + 'categories';
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
CategoriesService.ɵfac = function CategoriesService_Factory(t) { return new (t || CategoriesService)(i0.ɵɵinject(i1.HttpClient)); };
CategoriesService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CategoriesService, factory: CategoriesService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CategoriesService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcmllcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wcm9kdWN0cy9zcmMvbGliL3NlcnZpY2VzL2NhdGVnb3JpZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBVWhELE1BQU0sT0FBTyxpQkFBaUI7SUFHNUIsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUZyQyxxQkFBZ0IsR0FBRyxpREFBaUQsR0FBRyxZQUFZLENBQUM7SUFFNUMsQ0FBQztJQUV4QyxhQUFhO1FBQ1gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBYSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBQ0QsV0FBVyxDQUFDLFVBQWtCO1FBQzVCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLElBQUksVUFBVSxFQUFFLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRUQsY0FBYyxDQUFDLFFBQWtCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQVcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFDRCxjQUFjLENBQUMsUUFBa0I7UUFDL0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBVyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxRQUFRLENBQUMsRUFBRSxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdEYsQ0FBQztJQUVELGNBQWMsQ0FBQyxVQUFrQjtRQUMvQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFNLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixJQUFJLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFDekUsQ0FBQzs7a0ZBckJVLGlCQUFpQjt1RUFBakIsaUJBQWlCLFdBQWpCLGlCQUFpQixtQkFGaEIsTUFBTTt1RkFFUCxpQkFBaUI7Y0FIN0IsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBDYXRlZ29yeSB9IGZyb20gJy4uL21vZGVscy9jYXRlZ29yeSc7XHJcblxyXG5cclxuXHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2F0ZWdvcmllc1NlcnZpY2Uge1xyXG4gYXBpVXJsQ2F0ZWdvcmllcyA9ICdodHRwczovL2NhdGFsZG9wcm9kdWN0aW9uLmhlcm9rdWFwcC5jb20vYXBpL3YxLycgKyAnY2F0ZWdvcmllcyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cclxuXHJcbiAgZ2V0Q2F0ZWdvcmllcygpOiBPYnNlcnZhYmxlPENhdGVnb3J5W10+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PENhdGVnb3J5W10+KHRoaXMuYXBpVXJsQ2F0ZWdvcmllcyk7XHJcbiAgfVxyXG4gIGdldENhdGVnb3J5KGNhdGVnb3J5SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Q2F0ZWdvcnk+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PENhdGVnb3J5PihgJHt0aGlzLmFwaVVybENhdGVnb3JpZXN9LyR7Y2F0ZWdvcnlJZH1gKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUNhdGVnb3J5KGNhdGVnb3J5OiBDYXRlZ29yeSk6IE9ic2VydmFibGU8Q2F0ZWdvcnk+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxDYXRlZ29yeT4odGhpcy5hcGlVcmxDYXRlZ29yaWVzLCBjYXRlZ29yeSk7XHJcbiAgfVxyXG4gIHVwZGF0ZUNhdGVnb3J5KGNhdGVnb3J5OiBDYXRlZ29yeSk6IE9ic2VydmFibGU8Q2F0ZWdvcnk+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucHV0PENhdGVnb3J5PihgJHt0aGlzLmFwaVVybENhdGVnb3JpZXN9LyR7Y2F0ZWdvcnkuaWR9YCwgY2F0ZWdvcnkpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlQ2F0ZWdvcnkoY2F0ZWdvcnlJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlPGFueT4oYCR7dGhpcy5hcGlVcmxDYXRlZ29yaWVzfS8ke2NhdGVnb3J5SWR9YCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==