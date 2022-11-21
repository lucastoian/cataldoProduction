import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BrandsService } from '../modules/brands.services';
import * as i0 from "@angular/core";
import * as i1 from "../modules/brands.services";
import * as i2 from "@angular/router";
import * as i3 from "primeng/carousel";
import * as i4 from "primeng/api";
function SliderComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelement(1, "h2");
    i0.ɵɵelementEnd();
} }
function SliderComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "div", 4)(2, "img", 5);
    i0.ɵɵlistener("click", function SliderComponent_ng_template_2_Template_img_click_2_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const brand_r2 = restoredCtx.$implicit; const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.navigateToBrand(brand_r2.id, brand_r2.name); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const brand_r2 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", brand_r2.image, i0.ɵɵsanitizeUrl)("alt", brand_r2.name);
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
SliderComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SliderComponent, selectors: [["ui-slider"]], decls: 3, vars: 6, consts: [["styleClass", "custom-carousel", 3, "value", "numVisible", "numScroll", "circular", "responsiveOptions", "autoplayInterval"], ["pTemplate", "header"], ["pTemplate", "item"], [1, "c-title"], [2, "display", "flex", "justify-content", "center"], [1, "img-fluid", 3, "src", "alt", "click"]], template: function SliderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p-carousel", 0);
        i0.ɵɵtemplate(1, SliderComponent_ng_template_1_Template, 2, 0, "ng-template", 1);
        i0.ɵɵtemplate(2, SliderComponent_ng_template_2_Template, 3, 2, "ng-template", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("value", ctx.brands)("numVisible", 4)("numScroll", 4)("circular", true)("responsiveOptions", ctx.responsiveOptions)("autoplayInterval", 3500);
    } }, directives: [i3.Carousel, i4.PrimeTemplate], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SliderComponent, [{
        type: Component,
        args: [{ selector: 'ui-slider', template: "\r\n\r\n<p-carousel [value]=\"brands\" styleClass=\"custom-carousel\" [numVisible]=\"4\" [numScroll]=\"4\" [circular]=\"true\"\r\n  [responsiveOptions]=\"responsiveOptions\" [autoplayInterval]=\"3500\">\r\n        <ng-template pTemplate=\"header\">\r\n            <div class=\"c-title\">\r\n                <h2></h2>\r\n            </div>\r\n        </ng-template>\r\n        <ng-template  let-brand pTemplate=\"item\">\r\n            <div>\r\n                <div style=\"display: flex; justify-content:center\">\r\n                    <img class=\"img-fluid\" [src]=\"brand.image\" [alt]=\"brand.name\" (click)=\"navigateToBrand(brand.id, brand.name)\">                   \r\n                </div>\r\n            </div>\r\n        </ng-template>\r\n</p-carousel>\r\n\r\n" }]
    }], function () { return [{ type: i1.BrandsService }, { type: i2.Router }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdWkvc3JjL2xpYi9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdWkvc3JjL2xpYi9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7OztJQ0UvQyw4QkFBcUI7SUFDakIscUJBQVM7SUFDYixpQkFBTTs7OztJQUdOLDJCQUFLLGFBQUEsYUFBQTtJQUVpRSw2TkFBUyxrREFBcUMsSUFBQztJQUE3RyxpQkFBOEcsRUFBQSxFQUFBOzs7SUFBdkYsZUFBbUI7SUFBbkIsc0RBQW1CLHNCQUFBOztBRFI5RCw4REFBOEQ7QUFROUQsTUFBTSxPQUFPLGVBQWU7SUFNMUIsWUFBb0IsYUFBNEIsRUFDNUIsTUFBYztRQURkLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFOcEMsV0FBTSxHQUFZLEVBQUUsQ0FBQTtRQUNwQixRQUFHLEdBQVUsRUFBRSxDQUFDO1FBT08sSUFBSSxDQUFDLGlCQUFpQixHQUFHO1lBQ3ZCO2dCQUNFLFVBQVUsRUFBRSxRQUFRO2dCQUNwQixVQUFVLEVBQUUsQ0FBQztnQkFDYixTQUFTLEVBQUUsQ0FBQzthQUNiO1lBQ0Q7Z0JBQ0UsVUFBVSxFQUFFLE9BQU87Z0JBQ25CLFVBQVUsRUFBRSxDQUFDO2dCQUNiLFNBQVMsRUFBRSxDQUFDO2FBQ2I7U0FFRixDQUFDO0lBQ1gsQ0FBQztJQUViLFFBQVE7UUFDTixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBQyxFQUFFO1lBQ2pELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUN0RCxDQUFDO1FBRUgsQ0FBQyxDQUFDLENBQUE7SUFFSCxDQUFDO0lBSUYsZUFBZSxDQUFDLE9BQU8sRUFBRSxTQUFpQjtRQUN6QyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLHdCQUF3QixTQUFTLElBQUksT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7OzhFQXRDVSxlQUFlO2tFQUFmLGVBQWU7UUNWNUIscUNBQ29FO1FBQzVELGdGQUljO1FBQ2QsZ0ZBTWM7UUFDdEIsaUJBQWE7O1FBZEQsa0NBQWdCLGlCQUFBLGdCQUFBLGtCQUFBLDRDQUFBLDBCQUFBOzt1RkRVZixlQUFlO2NBTDNCLFNBQVM7MkJBQ0UsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEJyYW5kIH0gZnJvbSAnLi4vbW9kdWxlcy9icmFuZCc7XHJcbmltcG9ydCB7IEJyYW5kc1NlcnZpY2UgfSBmcm9tICcuLi9tb2R1bGVzL2JyYW5kcy5zZXJ2aWNlcyc7XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAbnJ3bC9ueC9lbmZvcmNlLW1vZHVsZS1ib3VuZGFyaWVzXHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd1aS1zbGlkZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zbGlkZXIuY29tcG9uZW50Lmh0bWwnLFxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIFNsaWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbmJyYW5kczogQnJhbmRbXSA9IFtdICBcclxuaWRTOiBhbnlbXSA9IFtdO1xyXG5icmFuZElkOiBzdHJpbmc7XHJcbnJlc3BvbnNpdmVPcHRpb25zO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJyYW5kc1NlcnZpY2U6IEJyYW5kc1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3BvbnNpdmVPcHRpb25zID0gW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAnMTAyNHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtVmlzaWJsZTogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtU2Nyb2xsOiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogJzc2OHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtVmlzaWJsZTogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtU2Nyb2xsOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICBdOyBcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5icmFuZHNTZXJ2aWNlLmdldEJyYW5kcygpLnN1YnNjcmliZSgoYnJhbmRzKT0+e1xyXG4gICAgICB0aGlzLmJyYW5kcyA9IGJyYW5kcztcclxuICAgIHRoaXMuYnJhbmRzLmZvckVhY2goZWxlbWVudCA9PnRoaXMuaWRTLnB1c2goZWxlbWVudC5pZClcclxuICAgICk7XHJcbiAgICAgICBcclxuICAgfSlcclxuXHJcbiAgfVxyXG5cclxuXHJcblxyXG4gbmF2aWdhdGVUb0JyYW5kKGJyYW5kSWQsIGJyYW5kTmFtZTogc3RyaW5nKXtcclxuICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbYC9wcm9kdWN0cy9icmFuZC9uYW1lLyR7YnJhbmROYW1lfS8ke2JyYW5kSWR9YF0pOyAgICAgIFxyXG4gIH1cclxuXHJcbn1cclxuIiwiXHJcblxyXG48cC1jYXJvdXNlbCBbdmFsdWVdPVwiYnJhbmRzXCIgc3R5bGVDbGFzcz1cImN1c3RvbS1jYXJvdXNlbFwiIFtudW1WaXNpYmxlXT1cIjRcIiBbbnVtU2Nyb2xsXT1cIjRcIiBbY2lyY3VsYXJdPVwidHJ1ZVwiXHJcbiAgW3Jlc3BvbnNpdmVPcHRpb25zXT1cInJlc3BvbnNpdmVPcHRpb25zXCIgW2F1dG9wbGF5SW50ZXJ2YWxdPVwiMzUwMFwiPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSBwVGVtcGxhdGU9XCJoZWFkZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImMtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIDxoMj48L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSAgbGV0LWJyYW5kIHBUZW1wbGF0ZT1cIml0ZW1cIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImltZy1mbHVpZFwiIFtzcmNdPVwiYnJhbmQuaW1hZ2VcIiBbYWx0XT1cImJyYW5kLm5hbWVcIiAoY2xpY2spPVwibmF2aWdhdGVUb0JyYW5kKGJyYW5kLmlkLCBicmFuZC5uYW1lKVwiPiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG48L3AtY2Fyb3VzZWw+XHJcblxyXG4iXX0=