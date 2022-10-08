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
        args: [{ selector: 'ui-slider', template: "\n\n<p-carousel [value]=\"brands\" styleClass=\"custom-carousel\" [numVisible]=\"4\" [numScroll]=\"4\" [circular]=\"true\"\n  [responsiveOptions]=\"responsiveOptions\" [autoplayInterval]=\"3500\">\n        <ng-template pTemplate=\"header\">\n            <div class=\"c-title\">\n                <h2></h2>\n            </div>\n        </ng-template>\n        <ng-template  let-brand pTemplate=\"item\">\n            <div>\n                <div style=\"display: flex; justify-content:center\">\n                    <img class=\"img-fluid\" [src]=\"brand.image\" [alt]=\"brand.name\" (click)=\"navigateToBrand(brand.id, brand.name)\">                   \n                </div>\n            </div>\n        </ng-template>\n</p-carousel>\n\n" }]
    }], function () { return [{ type: i1.BrandsService }, { type: i2.Router }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdWkvc3JjL2xpYi9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdWkvc3JjL2xpYi9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7OztJQ0UvQyw4QkFBcUI7SUFDakIscUJBQVM7SUFDYixpQkFBTTs7OztJQUdOLDJCQUFLLGFBQUEsYUFBQTtJQUVpRSw2TkFBUyxrREFBcUMsSUFBQztJQUE3RyxpQkFBOEcsRUFBQSxFQUFBOzs7SUFBdkYsZUFBbUI7SUFBbkIsc0RBQW1CLHNCQUFBOztBRFI5RCw4REFBOEQ7QUFROUQsTUFBTSxPQUFPLGVBQWU7SUFNMUIsWUFBb0IsYUFBNEIsRUFDNUIsTUFBYztRQURkLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFOcEMsV0FBTSxHQUFZLEVBQUUsQ0FBQTtRQUNwQixRQUFHLEdBQVUsRUFBRSxDQUFDO1FBT08sSUFBSSxDQUFDLGlCQUFpQixHQUFHO1lBQ3ZCO2dCQUNFLFVBQVUsRUFBRSxRQUFRO2dCQUNwQixVQUFVLEVBQUUsQ0FBQztnQkFDYixTQUFTLEVBQUUsQ0FBQzthQUNiO1lBQ0Q7Z0JBQ0UsVUFBVSxFQUFFLE9BQU87Z0JBQ25CLFVBQVUsRUFBRSxDQUFDO2dCQUNiLFNBQVMsRUFBRSxDQUFDO2FBQ2I7WUFDRDtnQkFDRSxVQUFVLEVBQUUsT0FBTztnQkFDbkIsVUFBVSxFQUFFLENBQUM7Z0JBQ2IsU0FBUyxFQUFFLENBQUM7YUFDYjtTQUNGLENBQUM7SUFDWCxDQUFDO0lBRWIsUUFBUTtRQUNOLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxFQUFDLEVBQUU7WUFDakQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQ3RELENBQUM7UUFFSCxDQUFDLENBQUMsQ0FBQTtJQUVILENBQUM7SUFJRixlQUFlLENBQUMsT0FBTyxFQUFFLFNBQWlCO1FBQ3pDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsd0JBQXdCLFNBQVMsSUFBSSxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdkUsQ0FBQzs7OEVBMUNVLGVBQWU7a0VBQWYsZUFBZTtRQ1Y1QixxQ0FDb0U7UUFDNUQsZ0ZBSWM7UUFDZCxnRkFNYztRQUN0QixpQkFBYTs7UUFkRCxrQ0FBZ0IsaUJBQUEsZ0JBQUEsa0JBQUEsNENBQUEsMEJBQUE7O3VGRFVmLGVBQWU7Y0FMM0IsU0FBUzsyQkFDRSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBCcmFuZCB9IGZyb20gJy4uL21vZHVsZXMvYnJhbmQnO1xuaW1wb3J0IHsgQnJhbmRzU2VydmljZSB9IGZyb20gJy4uL21vZHVsZXMvYnJhbmRzLnNlcnZpY2VzJztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAbnJ3bC9ueC9lbmZvcmNlLW1vZHVsZS1ib3VuZGFyaWVzXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndWktc2xpZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NsaWRlci5jb21wb25lbnQuaHRtbCcsXG5cbn0pXG5leHBvcnQgY2xhc3MgU2xpZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbmJyYW5kczogQnJhbmRbXSA9IFtdICBcbmlkUzogYW55W10gPSBbXTtcbmJyYW5kSWQ6IHN0cmluZztcbnJlc3BvbnNpdmVPcHRpb25zO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYnJhbmRzU2VydmljZTogQnJhbmRzU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzcG9uc2l2ZU9wdGlvbnMgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogJzEwMjRweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBudW1WaXNpYmxlOiAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtU2Nyb2xsOiAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogJzc2OHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bVZpc2libGU6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBudW1TY3JvbGw6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAnNTYwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtVmlzaWJsZTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bVNjcm9sbDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICBdOyBcbiAgICAgICAgICAgICAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYnJhbmRzU2VydmljZS5nZXRCcmFuZHMoKS5zdWJzY3JpYmUoKGJyYW5kcyk9PntcbiAgICAgIHRoaXMuYnJhbmRzID0gYnJhbmRzO1xuICAgIHRoaXMuYnJhbmRzLmZvckVhY2goZWxlbWVudCA9PnRoaXMuaWRTLnB1c2goZWxlbWVudC5pZClcbiAgICApO1xuICAgICAgIFxuICAgfSlcblxuICB9XG5cblxuXG4gbmF2aWdhdGVUb0JyYW5kKGJyYW5kSWQsIGJyYW5kTmFtZTogc3RyaW5nKXtcbiAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW2AvcHJvZHVjdHMvYnJhbmQvbmFtZS8ke2JyYW5kTmFtZX0vJHticmFuZElkfWBdKTsgICAgICBcbiAgfVxuXG59XG4iLCJcblxuPHAtY2Fyb3VzZWwgW3ZhbHVlXT1cImJyYW5kc1wiIHN0eWxlQ2xhc3M9XCJjdXN0b20tY2Fyb3VzZWxcIiBbbnVtVmlzaWJsZV09XCI0XCIgW251bVNjcm9sbF09XCI0XCIgW2NpcmN1bGFyXT1cInRydWVcIlxuICBbcmVzcG9uc2l2ZU9wdGlvbnNdPVwicmVzcG9uc2l2ZU9wdGlvbnNcIiBbYXV0b3BsYXlJbnRlcnZhbF09XCIzNTAwXCI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBwVGVtcGxhdGU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgPGgyPjwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPG5nLXRlbXBsYXRlICBsZXQtYnJhbmQgcFRlbXBsYXRlPVwiaXRlbVwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OmNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1nLWZsdWlkXCIgW3NyY109XCJicmFuZC5pbWFnZVwiIFthbHRdPVwiYnJhbmQubmFtZVwiIChjbGljayk9XCJuYXZpZ2F0ZVRvQnJhbmQoYnJhbmQuaWQsIGJyYW5kLm5hbWUpXCI+ICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG48L3AtY2Fyb3VzZWw+XG5cbiJdfQ==