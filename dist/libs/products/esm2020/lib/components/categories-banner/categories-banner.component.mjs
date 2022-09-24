import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { CategoriesService } from '../../services/categories.service';
import * as i0 from "@angular/core";
import * as i1 from "../../services/categories.service";
import * as i2 from "@angular/router";
export class CategoriesBannerComponent {
    constructor(categoriesService) {
        this.categoriesService = categoriesService;
        this.categories = [];
        this.endSubs$ = new Subject;
    }
    ngOnInit() {
        this.categoriesService
            .getCategories()
            .pipe(takeUntil(this.endSubs$))
            .subscribe(categories => {
            this.categories = categories;
        });
    }
    ngOnDestroy() {
        this.endSubs$.complete();
    }
}
CategoriesBannerComponent.ɵfac = function CategoriesBannerComponent_Factory(t) { return new (t || CategoriesBannerComponent)(i0.ɵɵdirectiveInject(i1.CategoriesService)); };
CategoriesBannerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CategoriesBannerComponent, selectors: [["eshop-frontend-products-categories-banner"]], decls: 7, vars: 0, consts: [[1, "cb"], [1, "categories-banner"], [1, "grid"], ["routerLink", "/products", 1, "col-6", "men"], ["routerLink", "/women-products", 1, "col-6", "women"]], template: function CategoriesBannerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "span");
        i0.ɵɵtext(2, "Collezione primavera/estate 2022");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(3, "div", 1)(4, "div", 2);
        i0.ɵɵelement(5, "div", 3)(6, "div", 4);
        i0.ɵɵelementEnd()();
    } }, directives: [i2.RouterLink], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CategoriesBannerComponent, [{
        type: Component,
        args: [{ selector: 'eshop-frontend-products-categories-banner', styles: [], template: "<div class=\"cb\">\n    <span>Collezione primavera/estate 2022</span>\n</div>\n<div class=\"categories-banner\">\n    <div class=\"grid\">\n        <div class=\"col-6 men\" routerLink=\"/products\">\n\n        </div>\n        <div class=\"col-6 women \" routerLink=\"/women-products\">\n\n\n\n        </div>\n    </div>\n</div>" }]
    }], function () { return [{ type: i1.CategoriesService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcmllcy1iYW5uZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wcm9kdWN0cy9zcmMvbGliL2NvbXBvbmVudHMvY2F0ZWdvcmllcy1iYW5uZXIvY2F0ZWdvcmllcy1iYW5uZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wcm9kdWN0cy9zcmMvbGliL2NvbXBvbmVudHMvY2F0ZWdvcmllcy1iYW5uZXIvY2F0ZWdvcmllcy1iYW5uZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFMUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7Ozs7QUFRdEUsTUFBTSxPQUFPLHlCQUF5QjtJQUlwQyxZQUFvQixpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUh4RCxlQUFVLEdBQWUsRUFBRSxDQUFDO1FBQzVCLGFBQVEsR0FBaUIsSUFBSSxPQUFPLENBQUM7SUFFdUIsQ0FBQztJQUU3RCxRQUFRO1FBQ04sSUFBSSxDQUFDLGlCQUFpQjthQUNyQixhQUFhLEVBQUU7YUFDZixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM5QixTQUFTLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFFdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUE7UUFDOUIsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7a0dBbEJVLHlCQUF5Qjs0RUFBekIseUJBQXlCO1FDWHRDLDhCQUFnQixXQUFBO1FBQ04sZ0RBQWdDO1FBQUEsaUJBQU8sRUFBQTtRQUVqRCw4QkFBK0IsYUFBQTtRQUV2Qix5QkFFTSxhQUFBO1FBTVYsaUJBQU0sRUFBQTs7dUZERkcseUJBQXlCO2NBTnJDLFNBQVM7MkJBQ0UsMkNBQTJDLFVBRTdDLEVBQ1AiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0LCB0YWtlVW50aWwgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENhdGVnb3J5IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NhdGVnb3J5JztcbmltcG9ydCB7IENhdGVnb3JpZXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2F0ZWdvcmllcy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXNob3AtZnJvbnRlbmQtcHJvZHVjdHMtY2F0ZWdvcmllcy1iYW5uZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vY2F0ZWdvcmllcy1iYW5uZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXM6IFtcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDYXRlZ29yaWVzQmFubmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBjYXRlZ29yaWVzOiBDYXRlZ29yeVtdID0gW107XG4gIGVuZFN1YnMkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNhdGVnb3JpZXNTZXJ2aWNlOiBDYXRlZ29yaWVzU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jYXRlZ29yaWVzU2VydmljZVxuICAgIC5nZXRDYXRlZ29yaWVzKClcbiAgICAucGlwZSh0YWtlVW50aWwodGhpcy5lbmRTdWJzJCkpXG4gICAgLnN1YnNjcmliZShjYXRlZ29yaWVzID0+e1xuICAgICBcbiAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IGNhdGVnb3JpZXNcbiAgICB9KVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICB0aGlzLmVuZFN1YnMkLmNvbXBsZXRlKCk7XG4gIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cImNiXCI+XG4gICAgPHNwYW4+Q29sbGV6aW9uZSBwcmltYXZlcmEvZXN0YXRlIDIwMjI8L3NwYW4+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJjYXRlZ29yaWVzLWJhbm5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJncmlkXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNiBtZW5cIiByb3V0ZXJMaW5rPVwiL3Byb2R1Y3RzXCI+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNiB3b21lbiBcIiByb3V0ZXJMaW5rPVwiL3dvbWVuLXByb2R1Y3RzXCI+XG5cblxuXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+Il19