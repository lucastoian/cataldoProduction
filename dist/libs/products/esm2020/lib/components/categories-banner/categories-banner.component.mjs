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
CategoriesBannerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CategoriesBannerComponent, selectors: [["eshop-frontend-products-categories-banner"]], decls: 10, vars: 0, consts: [[1, "cb"], [1, "categories-banner"], [1, "grid", 2, "justify-content", "center"], [1, "row", "w-100"], ["routerLink", "/products", 1, "col-6", "p-0", 2, "display", "flex", "justify-content", "center"], ["src", "https://cataldoproduction.herokuapp.com/public/moda-uomo2.jpg", "alt", "Moda Uomo", 1, "img-fluid"], ["routerLink", "/women-products", 1, "col-6", "p-0", 2, "display", "flex", "justify-content", "center"], ["src", "https://cataldoproduction.herokuapp.com/public/moda-donna2.jpg", "alt", "Moda Donna", 1, "img-fluid"]], template: function CategoriesBannerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "span");
        i0.ɵɵtext(2, "Collezione primavera/estate 2022");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(3, "div", 1)(4, "div", 2)(5, "div", 3)(6, "div", 4);
        i0.ɵɵelement(7, "img", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "div", 6);
        i0.ɵɵelement(9, "img", 7);
        i0.ɵɵelementEnd()()()();
    } }, directives: [i2.RouterLink], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CategoriesBannerComponent, [{
        type: Component,
        args: [{ selector: 'eshop-frontend-products-categories-banner', styles: [], template: "<div class=\"cb\">\n    <span>Collezione primavera/estate 2022</span>\n</div>\n<div class=\"categories-banner\">\n    <div class=\"grid\" style=\"justify-content: center;\">\n        <div class=\"row w-100\">\n\n            <div class=\"col-6 p-0\" routerLink=\"/products\" style=\"display: flex; justify-content:center\">\n                <img class=\"img-fluid\" src=\"https://cataldoproduction.herokuapp.com/public/moda-uomo2.jpg\"alt=\"Moda Uomo\">\n            </div>\n            <div class=\"col-6 p-0\" routerLink=\"/women-products\" style=\"display: flex; justify-content:center\">\n                <img class=\"img-fluid\" src=\"https://cataldoproduction.herokuapp.com/public/moda-donna2.jpg\" alt=\"Moda Donna\">\n            </div>\n        </div>\n     \n    </div>\n</div>" }]
    }], function () { return [{ type: i1.CategoriesService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcmllcy1iYW5uZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wcm9kdWN0cy9zcmMvbGliL2NvbXBvbmVudHMvY2F0ZWdvcmllcy1iYW5uZXIvY2F0ZWdvcmllcy1iYW5uZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wcm9kdWN0cy9zcmMvbGliL2NvbXBvbmVudHMvY2F0ZWdvcmllcy1iYW5uZXIvY2F0ZWdvcmllcy1iYW5uZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFMUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7Ozs7QUFRdEUsTUFBTSxPQUFPLHlCQUF5QjtJQUlwQyxZQUFvQixpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUh4RCxlQUFVLEdBQWUsRUFBRSxDQUFDO1FBQzVCLGFBQVEsR0FBaUIsSUFBSSxPQUFPLENBQUM7SUFFdUIsQ0FBQztJQUU3RCxRQUFRO1FBQ04sSUFBSSxDQUFDLGlCQUFpQjthQUNyQixhQUFhLEVBQUU7YUFDZixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM5QixTQUFTLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFFdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUE7UUFDOUIsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7a0dBbEJVLHlCQUF5Qjs0RUFBekIseUJBQXlCO1FDWHRDLDhCQUFnQixXQUFBO1FBQ04sZ0RBQWdDO1FBQUEsaUJBQU8sRUFBQTtRQUVqRCw4QkFBK0IsYUFBQSxhQUFBLGFBQUE7UUFLZix5QkFBMEc7UUFDOUcsaUJBQU07UUFDTiw4QkFBa0c7UUFDOUYseUJBQTZHO1FBQ2pILGlCQUFNLEVBQUEsRUFBQSxFQUFBOzt1RkRETCx5QkFBeUI7Y0FOckMsU0FBUzsyQkFDRSwyQ0FBMkMsVUFFN0MsRUFDUCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2F0ZWdvcnkgfSBmcm9tICcuLi8uLi9tb2RlbHMvY2F0ZWdvcnknO1xuaW1wb3J0IHsgQ2F0ZWdvcmllc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jYXRlZ29yaWVzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlc2hvcC1mcm9udGVuZC1wcm9kdWN0cy1jYXRlZ29yaWVzLWJhbm5lcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXRlZ29yaWVzLWJhbm5lci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogW1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIENhdGVnb3JpZXNCYW5uZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGNhdGVnb3JpZXM6IENhdGVnb3J5W10gPSBbXTtcbiAgZW5kU3VicyQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2F0ZWdvcmllc1NlcnZpY2U6IENhdGVnb3JpZXNTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNhdGVnb3JpZXNTZXJ2aWNlXG4gICAgLmdldENhdGVnb3JpZXMoKVxuICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmVuZFN1YnMkKSlcbiAgICAuc3Vic2NyaWJlKGNhdGVnb3JpZXMgPT57XG4gICAgIFxuICAgICAgdGhpcy5jYXRlZ29yaWVzID0gY2F0ZWdvcmllc1xuICAgIH0pXG4gIH1cblxuICBuZ09uRGVzdHJveSgpe1xuICAgIHRoaXMuZW5kU3VicyQuY29tcGxldGUoKTtcbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwiY2JcIj5cbiAgICA8c3Bhbj5Db2xsZXppb25lIHByaW1hdmVyYS9lc3RhdGUgMjAyMjwvc3Bhbj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cImNhdGVnb3JpZXMtYmFubmVyXCI+XG4gICAgPGRpdiBjbGFzcz1cImdyaWRcIiBzdHlsZT1cImp1c3RpZnktY29udGVudDogY2VudGVyO1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHctMTAwXCI+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNiBwLTBcIiByb3V0ZXJMaW5rPVwiL3Byb2R1Y3RzXCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImltZy1mbHVpZFwiIHNyYz1cImh0dHBzOi8vY2F0YWxkb3Byb2R1Y3Rpb24uaGVyb2t1YXBwLmNvbS9wdWJsaWMvbW9kYS11b21vMi5qcGdcImFsdD1cIk1vZGEgVW9tb1wiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTYgcC0wXCIgcm91dGVyTGluaz1cIi93b21lbi1wcm9kdWN0c1wiIHN0eWxlPVwiZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OmNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctZmx1aWRcIiBzcmM9XCJodHRwczovL2NhdGFsZG9wcm9kdWN0aW9uLmhlcm9rdWFwcC5jb20vcHVibGljL21vZGEtZG9ubmEyLmpwZ1wiIGFsdD1cIk1vZGEgRG9ubmFcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgXG4gICAgPC9kaXY+XG48L2Rpdj4iXX0=