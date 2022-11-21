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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcmllcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wcm9kdWN0cy9zcmMvbGliL3NlcnZpY2VzL2NhdGVnb3JpZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7OztBQVVoRCxNQUFNLE9BQU8saUJBQWlCO0lBSTdCLFlBQW9CLElBQWdCLEVBQXlCLFdBQVc7UUFBcEQsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNuQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDO0lBQ2pFLENBQUM7SUFFQyxhQUFhO1FBQ1gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBYSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBQ0QsV0FBVyxDQUFDLFVBQWtCO1FBQzVCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLElBQUksVUFBVSxFQUFFLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRUQsY0FBYyxDQUFDLFFBQWtCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQVcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFDRCxjQUFjLENBQUMsUUFBa0I7UUFDL0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBVyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxRQUFRLENBQUMsRUFBRSxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdEYsQ0FBQztJQUVELGNBQWMsQ0FBQyxVQUFrQjtRQUMvQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFNLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixJQUFJLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFDekUsQ0FBQzs7a0ZBekJVLGlCQUFpQiwwQ0FJaUIsYUFBYTt1RUFKL0MsaUJBQWlCLFdBQWpCLGlCQUFpQixtQkFGaEIsTUFBTTt1RkFFUCxpQkFBaUI7Y0FIN0IsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COztzQkFLdUMsTUFBTTt1QkFBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2F0ZWdvcnkgfSBmcm9tICcuLi9tb2RlbHMvY2F0ZWdvcnknO1xuXG5cblxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2F0ZWdvcmllc1NlcnZpY2Uge1xuICBwcml2YXRlIGVudmlyb25tZW50O1xuICBwcml2YXRlIGFwaVVybENhdGVnb3JpZXM7XG5cbiBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIEBJbmplY3QoJ2Vudmlyb25tZW50JykgZW52aXJvbm1lbnQpIHtcbiAgdGhpcy5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xuICB0aGlzLmFwaVVybENhdGVnb3JpZXMgPSB0aGlzLmVudmlyb25tZW50LmFwaVVSTCArICdjYXRlZ29yaWVzJztcbn1cblxuICBnZXRDYXRlZ29yaWVzKCk6IE9ic2VydmFibGU8Q2F0ZWdvcnlbXT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PENhdGVnb3J5W10+KHRoaXMuYXBpVXJsQ2F0ZWdvcmllcyk7XG4gIH1cbiAgZ2V0Q2F0ZWdvcnkoY2F0ZWdvcnlJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxDYXRlZ29yeT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PENhdGVnb3J5PihgJHt0aGlzLmFwaVVybENhdGVnb3JpZXN9LyR7Y2F0ZWdvcnlJZH1gKTtcbiAgfVxuXG4gIGNyZWF0ZUNhdGVnb3J5KGNhdGVnb3J5OiBDYXRlZ29yeSk6IE9ic2VydmFibGU8Q2F0ZWdvcnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8Q2F0ZWdvcnk+KHRoaXMuYXBpVXJsQ2F0ZWdvcmllcywgY2F0ZWdvcnkpO1xuICB9XG4gIHVwZGF0ZUNhdGVnb3J5KGNhdGVnb3J5OiBDYXRlZ29yeSk6IE9ic2VydmFibGU8Q2F0ZWdvcnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxDYXRlZ29yeT4oYCR7dGhpcy5hcGlVcmxDYXRlZ29yaWVzfS8ke2NhdGVnb3J5LmlkfWAsIGNhdGVnb3J5KTtcbiAgfVxuXG4gIGRlbGV0ZUNhdGVnb3J5KGNhdGVnb3J5SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGU8YW55PihgJHt0aGlzLmFwaVVybENhdGVnb3JpZXN9LyR7Y2F0ZWdvcnlJZH1gKTtcbiAgfVxufVxuIl19