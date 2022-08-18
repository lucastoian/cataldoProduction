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
        args: [{ selector: 'eshop-frontend-products-categories-banner', styles: [], template: "<div class=\"cb\">\r\n    <span>Collezione primavera/estate 2022</span>\r\n</div>\r\n<div class=\"categories-banner\">\r\n    <div class=\"grid\">\r\n        <div class=\"col-6 men\" routerLink=\"/products\">\r\n\r\n        </div>\r\n        <div class=\"col-6 women \" routerLink=\"/women-products\">\r\n\r\n\r\n\r\n        </div>\r\n    </div>\r\n</div>" }]
    }], function () { return [{ type: i1.CategoriesService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcmllcy1iYW5uZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wcm9kdWN0cy9zcmMvbGliL2NvbXBvbmVudHMvY2F0ZWdvcmllcy1iYW5uZXIvY2F0ZWdvcmllcy1iYW5uZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wcm9kdWN0cy9zcmMvbGliL2NvbXBvbmVudHMvY2F0ZWdvcmllcy1iYW5uZXIvY2F0ZWdvcmllcy1iYW5uZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFMUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7Ozs7QUFRdEUsTUFBTSxPQUFPLHlCQUF5QjtJQUlwQyxZQUFvQixpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUh4RCxlQUFVLEdBQWUsRUFBRSxDQUFDO1FBQzVCLGFBQVEsR0FBaUIsSUFBSSxPQUFPLENBQUM7SUFFdUIsQ0FBQztJQUU3RCxRQUFRO1FBQ04sSUFBSSxDQUFDLGlCQUFpQjthQUNyQixhQUFhLEVBQUU7YUFDZixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM5QixTQUFTLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFFdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUE7UUFDOUIsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7a0dBbEJVLHlCQUF5Qjs0RUFBekIseUJBQXlCO1FDWHRDLDhCQUFnQixXQUFBO1FBQ04sZ0RBQWdDO1FBQUEsaUJBQU8sRUFBQTtRQUVqRCw4QkFBK0IsYUFBQTtRQUV2Qix5QkFFTSxhQUFBO1FBTVYsaUJBQU0sRUFBQTs7dUZERkcseUJBQXlCO2NBTnJDLFNBQVM7MkJBQ0UsMkNBQTJDLFVBRTdDLEVBQ1AiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBDYXRlZ29yeSB9IGZyb20gJy4uLy4uL21vZGVscy9jYXRlZ29yeSc7XHJcbmltcG9ydCB7IENhdGVnb3JpZXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2F0ZWdvcmllcy5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZXNob3AtZnJvbnRlbmQtcHJvZHVjdHMtY2F0ZWdvcmllcy1iYW5uZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXRlZ29yaWVzLWJhbm5lci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVzOiBbXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2F0ZWdvcmllc0Jhbm5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBjYXRlZ29yaWVzOiBDYXRlZ29yeVtdID0gW107XHJcbiAgZW5kU3VicyQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNhdGVnb3JpZXNTZXJ2aWNlOiBDYXRlZ29yaWVzU2VydmljZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jYXRlZ29yaWVzU2VydmljZVxyXG4gICAgLmdldENhdGVnb3JpZXMoKVxyXG4gICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZW5kU3VicyQpKVxyXG4gICAgLnN1YnNjcmliZShjYXRlZ29yaWVzID0+e1xyXG4gICAgIFxyXG4gICAgICB0aGlzLmNhdGVnb3JpZXMgPSBjYXRlZ29yaWVzXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKXtcclxuICAgIHRoaXMuZW5kU3VicyQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJjYlwiPlxyXG4gICAgPHNwYW4+Q29sbGV6aW9uZSBwcmltYXZlcmEvZXN0YXRlIDIwMjI8L3NwYW4+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwiY2F0ZWdvcmllcy1iYW5uZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJncmlkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02IG1lblwiIHJvdXRlckxpbms9XCIvcHJvZHVjdHNcIj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02IHdvbWVuIFwiIHJvdXRlckxpbms9XCIvd29tZW4tcHJvZHVjdHNcIj5cclxuXHJcblxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj4iXX0=