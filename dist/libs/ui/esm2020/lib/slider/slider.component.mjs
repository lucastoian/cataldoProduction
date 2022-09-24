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
        args: [{ selector: 'ui-slider', template: "<p-carousel [value]=\"brands\" styleClass=\"custom-carousel\" [numVisible]=\"4\" [numScroll]=\"4\" [circular]=\"true\"\n  [responsiveOptions]=\"responsiveOptions\">\n        <ng-template pTemplate=\"header\">\n            <div class=\"c-title\">\n                <h2>I nostri brand</h2>\n            </div>\n        </ng-template>\n        <ng-template let-brand pTemplate=\"item\">\n            <div class=\"brands\">\n                <div class=\"brands-content\" >\n                    <img [src]=\"brand.image\" alt=\"\" (click)=\"navigateToBrand(brand.id, brand.name)\">                   \n                </div>\n            </div>\n        </ng-template>\n</p-carousel>\n\n" }]
    }], function () { return [{ type: i1.BrandsService }, { type: i2.Router }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdWkvc3JjL2xpYi9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdWkvc3JjL2xpYi9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7OztJQ0EvQyw4QkFBcUIsU0FBQTtJQUNiLDhCQUFjO0lBQUEsaUJBQUssRUFBQTs7OztJQUkzQiw4QkFBb0IsYUFBQSxhQUFBO0lBRW9CLDZOQUFTLGtEQUFxQyxJQUFDO0lBQS9FLGlCQUFnRixFQUFBLEVBQUE7OztJQUEzRSxlQUFtQjtJQUFuQixzREFBbUI7O0FETjVDLDhEQUE4RDtBQVE5RCxNQUFNLE9BQU8sZUFBZTtJQU0xQixZQUFvQixhQUE0QixFQUM1QixNQUFjO1FBRGQsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQU5wQyxXQUFNLEdBQVksRUFBRSxDQUFBO1FBQ3BCLFFBQUcsR0FBVSxFQUFFLENBQUM7UUFPTyxJQUFJLENBQUMsaUJBQWlCLEdBQUc7WUFDdkI7Z0JBQ0UsVUFBVSxFQUFFLFFBQVE7Z0JBQ3BCLFVBQVUsRUFBRSxDQUFDO2dCQUNiLFNBQVMsRUFBRSxDQUFDO2FBQ2I7WUFDRDtnQkFDRSxVQUFVLEVBQUUsT0FBTztnQkFDbkIsVUFBVSxFQUFFLENBQUM7Z0JBQ2IsU0FBUyxFQUFFLENBQUM7YUFDYjtZQUNEO2dCQUNFLFVBQVUsRUFBRSxPQUFPO2dCQUNuQixVQUFVLEVBQUUsQ0FBQztnQkFDYixTQUFTLEVBQUUsQ0FBQzthQUNiO1NBQ0YsQ0FBQztJQUNYLENBQUM7SUFFYixRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUMsRUFBRTtZQUNqRCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFBLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FDdEQsQ0FBQztRQUVILENBQUMsQ0FBQyxDQUFBO0lBRUgsQ0FBQztJQUlGLGVBQWUsQ0FBQyxPQUFPLEVBQUUsU0FBaUI7UUFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyx3QkFBd0IsU0FBUyxJQUFJLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDOzs4RUExQ1UsZUFBZTtrRUFBZixlQUFlO1FDWjVCLHFDQUMwQztRQUNsQyxnRkFJYztRQUNkLGdGQU1jO1FBQ3RCLGlCQUFhOztRQWRELGtDQUFnQixpQkFBQSxnQkFBQSxrQkFBQSw0Q0FBQTs7dUZEWWYsZUFBZTtjQUwzQixTQUFTOzJCQUNFLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEJyYW5kIH0gZnJvbSAnLi4vbW9kdWxlcy9icmFuZCc7XG5pbXBvcnQgeyBCcmFuZHNTZXJ2aWNlIH0gZnJvbSAnLi4vbW9kdWxlcy9icmFuZHMuc2VydmljZXMnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBucndsL254L2VuZm9yY2UtbW9kdWxlLWJvdW5kYXJpZXNcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd1aS1zbGlkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vc2xpZGVyLmNvbXBvbmVudC5odG1sJyxcblxufSlcbmV4cG9ydCBjbGFzcyBTbGlkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuYnJhbmRzOiBCcmFuZFtdID0gW10gIFxuaWRTOiBhbnlbXSA9IFtdO1xuYnJhbmRJZDogc3RyaW5nO1xucmVzcG9uc2l2ZU9wdGlvbnM7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBicmFuZHNTZXJ2aWNlOiBCcmFuZHNTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNwb25zaXZlT3B0aW9ucyA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAnMTAyNHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bVZpc2libGU6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBudW1TY3JvbGw6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAnNzY4cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtVmlzaWJsZTogMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bVNjcm9sbDogMixcbiAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6ICc1NjBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBudW1WaXNpYmxlOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgIF07IFxuICAgICAgICAgICAgICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5icmFuZHNTZXJ2aWNlLmdldEJyYW5kcygpLnN1YnNjcmliZSgoYnJhbmRzKT0+e1xuICAgICAgdGhpcy5icmFuZHMgPSBicmFuZHM7XG4gICAgdGhpcy5icmFuZHMuZm9yRWFjaChlbGVtZW50ID0+dGhpcy5pZFMucHVzaChlbGVtZW50LmlkKVxuICAgICk7XG4gICAgICAgXG4gICB9KVxuXG4gIH1cblxuXG5cbiBuYXZpZ2F0ZVRvQnJhbmQoYnJhbmRJZCwgYnJhbmROYW1lOiBzdHJpbmcpe1xuICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbYC9wcm9kdWN0cy9icmFuZC9uYW1lLyR7YnJhbmROYW1lfS8ke2JyYW5kSWR9YF0pOyAgICAgIFxuICB9XG5cbn1cbiIsIjxwLWNhcm91c2VsIFt2YWx1ZV09XCJicmFuZHNcIiBzdHlsZUNsYXNzPVwiY3VzdG9tLWNhcm91c2VsXCIgW251bVZpc2libGVdPVwiNFwiIFtudW1TY3JvbGxdPVwiNFwiIFtjaXJjdWxhcl09XCJ0cnVlXCJcbiAgW3Jlc3BvbnNpdmVPcHRpb25zXT1cInJlc3BvbnNpdmVPcHRpb25zXCI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBwVGVtcGxhdGU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgPGgyPkkgbm9zdHJpIGJyYW5kPC9oMj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWJyYW5kIHBUZW1wbGF0ZT1cIml0ZW1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJicmFuZHNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnJhbmRzLWNvbnRlbnRcIiA+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgW3NyY109XCJicmFuZC5pbWFnZVwiIGFsdD1cIlwiIChjbGljayk9XCJuYXZpZ2F0ZVRvQnJhbmQoYnJhbmQuaWQsIGJyYW5kLm5hbWUpXCI+ICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG48L3AtY2Fyb3VzZWw+XG5cbiJdfQ==