import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BrandsService } from '../modules/brands.services';
import * as i0 from "@angular/core";
import * as i1 from "../modules/brands.services";
import * as i2 from "@angular/router";
import * as i3 from "primeng/carousel";
import * as i4 from "primeng/api";
function SliderComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3)(1, "h2");
    i0.ɵɵtext(2, "I nostri brand");
    i0.ɵɵelementEnd()();
} }
function SliderComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4)(1, "div", 5)(2, "img", 6);
    i0.ɵɵlistener("click", function SliderComponent_ng_template_2_Template_img_click_2_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const brand_r2 = restoredCtx.$implicit; const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.navigateToBrand(brand_r2.id, brand_r2.name); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const brand_r2 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", brand_r2.image, i0.ɵɵsanitizeUrl);
} }
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
export class SliderComponent {
    constructor(brandsService, router) {
        this.brandsService = brandsService;
        this.router = router;
        this.brands = [];
        this.idS = [];
        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3,
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 2,
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1,
            },
        ];
    }
    ngOnInit() {
        this.brandsService.getBrands().subscribe((brands) => {
            this.brands = brands;
            this.brands.forEach(element => this.idS.push(element.id));
        });
    }
    navigateToBrand(brandId, brandName) {
        this.router.navigate([`/products/brand/name/${brandName}/${brandId}`]);
    }
}
SliderComponent.ɵfac = function SliderComponent_Factory(t) { return new (t || SliderComponent)(i0.ɵɵdirectiveInject(i1.BrandsService), i0.ɵɵdirectiveInject(i2.Router)); };
SliderComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SliderComponent, selectors: [["ui-slider"]], decls: 3, vars: 5, consts: [["styleClass", "custom-carousel", 3, "value", "numVisible", "numScroll", "circular", "responsiveOptions"], ["pTemplate", "header"], ["pTemplate", "item"], [1, "c-title"], [1, "brands"], [1, "brands-content"], ["alt", "", 3, "src", "click"]], template: function SliderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p-carousel", 0);
        i0.ɵɵtemplate(1, SliderComponent_ng_template_1_Template, 3, 0, "ng-template", 1);
        i0.ɵɵtemplate(2, SliderComponent_ng_template_2_Template, 3, 1, "ng-template", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("value", ctx.brands)("numVisible", 4)("numScroll", 4)("circular", true)("responsiveOptions", ctx.responsiveOptions);
    } }, directives: [i3.Carousel, i4.PrimeTemplate], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SliderComponent, [{
        type: Component,
        args: [{ selector: 'ui-slider', template: "<p-carousel [value]=\"brands\" styleClass=\"custom-carousel\" [numVisible]=\"4\" [numScroll]=\"4\" [circular]=\"true\"\r\n  [responsiveOptions]=\"responsiveOptions\">\r\n        <ng-template pTemplate=\"header\">\r\n            <div class=\"c-title\">\r\n                <h2>I nostri brand</h2>\r\n            </div>\r\n        </ng-template>\r\n        <ng-template let-brand pTemplate=\"item\">\r\n            <div class=\"brands\">\r\n                <div class=\"brands-content\" >\r\n                    <img [src]=\"brand.image\" alt=\"\" (click)=\"navigateToBrand(brand.id, brand.name)\">                   \r\n                </div>\r\n            </div>\r\n        </ng-template>\r\n</p-carousel>\r\n\r\n" }]
    }], function () { return [{ type: i1.BrandsService }, { type: i2.Router }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdWkvc3JjL2xpYi9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdWkvc3JjL2xpYi9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7OztJQ0EvQyw4QkFBcUIsU0FBQTtJQUNiLDhCQUFjO0lBQUEsaUJBQUssRUFBQTs7OztJQUkzQiw4QkFBb0IsYUFBQSxhQUFBO0lBRW9CLDZOQUFTLGtEQUFxQyxJQUFDO0lBQS9FLGlCQUFnRixFQUFBLEVBQUE7OztJQUEzRSxlQUFtQjtJQUFuQixzREFBbUI7O0FETjVDLDhEQUE4RDtBQVE5RCxNQUFNLE9BQU8sZUFBZTtJQU0xQixZQUFvQixhQUE0QixFQUM1QixNQUFjO1FBRGQsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQU5wQyxXQUFNLEdBQVksRUFBRSxDQUFBO1FBQ3BCLFFBQUcsR0FBVSxFQUFFLENBQUM7UUFPTyxJQUFJLENBQUMsaUJBQWlCLEdBQUc7WUFDdkI7Z0JBQ0UsVUFBVSxFQUFFLFFBQVE7Z0JBQ3BCLFVBQVUsRUFBRSxDQUFDO2dCQUNiLFNBQVMsRUFBRSxDQUFDO2FBQ2I7WUFDRDtnQkFDRSxVQUFVLEVBQUUsT0FBTztnQkFDbkIsVUFBVSxFQUFFLENBQUM7Z0JBQ2IsU0FBUyxFQUFFLENBQUM7YUFDYjtZQUNEO2dCQUNFLFVBQVUsRUFBRSxPQUFPO2dCQUNuQixVQUFVLEVBQUUsQ0FBQztnQkFDYixTQUFTLEVBQUUsQ0FBQzthQUNiO1NBQ0YsQ0FBQztJQUNYLENBQUM7SUFFYixRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUMsRUFBRTtZQUNqRCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFBLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FDdEQsQ0FBQztRQUVILENBQUMsQ0FBQyxDQUFBO0lBRUgsQ0FBQztJQUlGLGVBQWUsQ0FBQyxPQUFPLEVBQUUsU0FBaUI7UUFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyx3QkFBd0IsU0FBUyxJQUFJLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDOzs4RUExQ1UsZUFBZTtrRUFBZixlQUFlO1FDWjVCLHFDQUMwQztRQUNsQyxnRkFJYztRQUNkLGdGQU1jO1FBQ3RCLGlCQUFhOztRQWRELGtDQUFnQixpQkFBQSxnQkFBQSxrQkFBQSw0Q0FBQTs7dUZEWWYsZUFBZTtjQUwzQixTQUFTOzJCQUNFLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBCcmFuZCB9IGZyb20gJy4uL21vZHVsZXMvYnJhbmQnO1xyXG5pbXBvcnQgeyBCcmFuZHNTZXJ2aWNlIH0gZnJvbSAnLi4vbW9kdWxlcy9icmFuZHMuc2VydmljZXMnO1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQG5yd2wvbngvZW5mb3JjZS1tb2R1bGUtYm91bmRhcmllc1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndWktc2xpZGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2xpZGVyLmNvbXBvbmVudC5odG1sJyxcclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTbGlkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5icmFuZHM6IEJyYW5kW10gPSBbXSAgXHJcbmlkUzogYW55W10gPSBbXTtcclxuYnJhbmRJZDogc3RyaW5nO1xyXG5yZXNwb25zaXZlT3B0aW9ucztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBicmFuZHNTZXJ2aWNlOiBCcmFuZHNTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNwb25zaXZlT3B0aW9ucyA9IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogJzEwMjRweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bVZpc2libGU6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bVNjcm9sbDogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6ICc3NjhweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bVZpc2libGU6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bVNjcm9sbDogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6ICc1NjBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bVZpc2libGU6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bVNjcm9sbDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgXTsgXHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuYnJhbmRzU2VydmljZS5nZXRCcmFuZHMoKS5zdWJzY3JpYmUoKGJyYW5kcyk9PntcclxuICAgICAgdGhpcy5icmFuZHMgPSBicmFuZHM7XHJcbiAgICB0aGlzLmJyYW5kcy5mb3JFYWNoKGVsZW1lbnQgPT50aGlzLmlkUy5wdXNoKGVsZW1lbnQuaWQpXHJcbiAgICApO1xyXG4gICAgICAgXHJcbiAgIH0pXHJcblxyXG4gIH1cclxuXHJcblxyXG5cclxuIG5hdmlnYXRlVG9CcmFuZChicmFuZElkLCBicmFuZE5hbWU6IHN0cmluZyl7XHJcbiAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW2AvcHJvZHVjdHMvYnJhbmQvbmFtZS8ke2JyYW5kTmFtZX0vJHticmFuZElkfWBdKTsgICAgICBcclxuICB9XHJcblxyXG59XHJcbiIsIjxwLWNhcm91c2VsIFt2YWx1ZV09XCJicmFuZHNcIiBzdHlsZUNsYXNzPVwiY3VzdG9tLWNhcm91c2VsXCIgW251bVZpc2libGVdPVwiNFwiIFtudW1TY3JvbGxdPVwiNFwiIFtjaXJjdWxhcl09XCJ0cnVlXCJcclxuICBbcmVzcG9uc2l2ZU9wdGlvbnNdPVwicmVzcG9uc2l2ZU9wdGlvbnNcIj5cclxuICAgICAgICA8bmctdGVtcGxhdGUgcFRlbXBsYXRlPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+SSBub3N0cmkgYnJhbmQ8L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtYnJhbmQgcFRlbXBsYXRlPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnJhbmRzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnJhbmRzLWNvbnRlbnRcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBbc3JjXT1cImJyYW5kLmltYWdlXCIgYWx0PVwiXCIgKGNsaWNrKT1cIm5hdmlnYXRlVG9CcmFuZChicmFuZC5pZCwgYnJhbmQubmFtZSlcIj4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuPC9wLWNhcm91c2VsPlxyXG5cclxuIl19