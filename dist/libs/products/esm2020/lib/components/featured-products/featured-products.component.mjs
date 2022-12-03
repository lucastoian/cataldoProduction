import { Component, Input } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ProductsService } from '../../services/products.service';
import * as i0 from "@angular/core";
import * as i1 from "../../services/products.service";
import * as i2 from "primeng/carousel";
import * as i3 from "primeng/api";
import * as i4 from "../product-item/product-item.component";
function FeaturedProductsComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "eshop-frontend-product-item", 2);
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    i0.ɵɵproperty("product", product_r1);
} }
const _c0 = function () { return { "height": "600px" }; };
export class FeaturedProductsComponent {
    constructor(prodService) {
        this.prodService = prodService;
        this.brandMap = new Map();
        this.featuredProducts = [];
        this.endSubs$ = new Subject();
        this.brandMap.set("6213c7889309de960180da4a", "Blauer");
        this.brandMap.set("6213c89e9309de960180da4d", "Old River");
        this.brandMap.set("62167bd1cba8a1e0d9c1af88", "Colmar");
        this.brandMap.set("62189efe1d62386cc22525b6", "EA7");
        this.brandMap.set("62189f1e1d62386cc22525b9", "Fred Perry");
        this.brandMap.set("62189f371d62386cc22525bc", "Kway");
        this.brandMap.set("62189f481d62386cc22525bf", "Lacoste");
        this.brandMap.set("62189f7d1d62386cc22525c2", "Murphy&nye");
        this.brandMap.set("62189f981d62386cc22525c5", "Peninsula");
        this.brandMap.set("62189fad1d62386cc22525c8", "Saucony");
        this.brandMap.set("62189fbb1d62386cc22525cb", "Sundek");
        this.brandMap.set("632e05f3b8c567de5ea83669", "Barbour");
        this.brandMap.set("636b57e2506ba65e593baa81", "Ciesse");
        this.brandMap.set("636b57f3506ba65e593baa84", "Husky");
        this.brandMap.set("husky fall", "636b57f3506ba65e593baa84");
        this.brandMap.set("636b5806506ba65e593baa87", "Canadiens");
        this.responsiveOptions = [
            {
                breakpoint: '1874px',
                numVisible: 5,
                numScroll: 3,
            },
            {
                breakpoint: '1374px',
                numVisible: 5,
                numScroll: 2,
            },
            {
                breakpoint: '916px',
                numVisible: 4,
                numScroll: 2,
            },
            {
                breakpoint: '768px',
                numVisible: 3,
                numScroll: 1,
            },
            {
                breakpoint: '568px',
                numVisible: 2,
                numScroll: 1,
            },
            {
                breakpoint: '460px',
                numVisible: 1,
                numScroll: 1,
            },
        ];
    }
    ngOnInit() {
        this._getFeaturedProducts();
        console.log("fetured products for this brand: " + this.brandName);
        let brand = "";
        try {
            brand = this.brandMap.get(this.brandName).toLowerCase();
        }
        catch (e) {
            brand = this.brandName.toLowerCase();
        }
        this.prodService.getFeaturedProductsByBrand(brand).pipe(takeUntil(this.endSubs$)).subscribe(products => {
            this.featuredProducts = products.slice(0, 10);
        });
    }
    ngOnDestroy() {
        this.endSubs$.complete();
    }
    _getFeaturedProducts() {
    }
}
FeaturedProductsComponent.ɵfac = function FeaturedProductsComponent_Factory(t) { return new (t || FeaturedProductsComponent)(i0.ɵɵdirectiveInject(i1.ProductsService)); };
FeaturedProductsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FeaturedProductsComponent, selectors: [["eshop-frontend-featured-products"]], inputs: { brandName: "brandName" }, decls: 2, vars: 7, consts: [[3, "value", "numVisible", "numScroll", "circular", "responsiveOptions"], ["pTemplate", "item", 3, "style"], [3, "product"]], template: function FeaturedProductsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p-carousel", 0);
        i0.ɵɵtemplate(1, FeaturedProductsComponent_ng_template_1_Template, 1, 1, "ng-template", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("value", ctx.featuredProducts)("numVisible", 7)("numScroll", 1)("circular", true)("responsiveOptions", ctx.responsiveOptions);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("style", i0.ɵɵpureFunction0(6, _c0));
    } }, directives: [i2.Carousel, i3.PrimeTemplate, i4.ProductItemComponent], styles: [".p-carousel-items-container[_ngcontent-%COMP%], .p-carousel-items-content[_ngcontent-%COMP%]{transform:translateZ(0%)!important}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FeaturedProductsComponent, [{
        type: Component,
        args: [{ selector: 'eshop-frontend-featured-products', template: "\n<p-carousel [value]=\"featuredProducts\" [numVisible]=\"7\" [numScroll]=\"1\" [circular]=\"true\"\n[responsiveOptions]=\"responsiveOptions\">\n  <ng-template let-product pTemplate=\"item\"  [style]=\"{'height':'600px'}\">\n    <eshop-frontend-product-item  [product]= 'product'></eshop-frontend-product-item>\n  </ng-template>\n</p-carousel> ", styles: [".p-carousel-items-container,.p-carousel-items-content{transform:translateZ(0%)!important}\n"] }]
    }], function () { return [{ type: i1.ProductsService }]; }, { brandName: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZWQtcHJvZHVjdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wcm9kdWN0cy9zcmMvbGliL2NvbXBvbmVudHMvZmVhdHVyZWQtcHJvZHVjdHMvZmVhdHVyZWQtcHJvZHVjdHMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wcm9kdWN0cy9zcmMvbGliL2NvbXBvbmVudHMvZmVhdHVyZWQtcHJvZHVjdHMvZmVhdHVyZWQtcHJvZHVjdHMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7Ozs7OztJQ0M5RCxpREFBaUY7OztJQUFuRCxvQ0FBb0I7OztBRE10RCxNQUFNLE9BQU8seUJBQXlCO0lBV3BDLFlBQW9CLFdBQTRCO1FBQTVCLGdCQUFXLEdBQVgsV0FBVyxDQUFpQjtRQU43QyxhQUFRLEdBQUcsSUFBSSxHQUFHLEVBQWlCLENBQUM7UUFFdkMscUJBQWdCLEdBQWlCLEVBQUUsQ0FBQztRQUNwQyxhQUFRLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFNckMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUUsMEJBQTBCLEVBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUUsMEJBQTBC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QUFBO0lBRUosQ0FBQztJQUVELFdBQVc7UUFDUCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFTyxvQkFBb0I7SUFHNUIsQ0FBQzs7a0dBM0ZVLHlCQUF5Qjs0RUFBekIseUJBQXlCO1FDVHRDLHFDQUN3QztRQUN0QywwRkFFYztRQUNoQixpQkFBYTs7UUFMRCw0Q0FBMEIsaUJBQUEsZ0JBQUEsa0JBQUEsNENBQUE7UUFFTyxlQUE0QjtRQUE1QixrREFBNEI7O3VGRE81RCx5QkFBeUI7Y0FMckMsU0FBUzsyQkFDRSxrQ0FBa0M7a0VBUTVDLFNBQVM7a0JBRFIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0LCB0YWtlVW50aWwgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFByb2R1Y3QxMjMgfSBmcm9tICcuLi8uLi9tb2RlbHMvcHJvZHVjdDEyMyc7XG5pbXBvcnQgeyBQcm9kdWN0c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wcm9kdWN0cy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXNob3AtZnJvbnRlbmQtZmVhdHVyZWQtcHJvZHVjdHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vZmVhdHVyZWQtcHJvZHVjdHMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9mZWF0dXJlZC1wcm9kdWN0cy5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRmVhdHVyZWRQcm9kdWN0c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuXG4gIEBJbnB1dCgpXG4gIGJyYW5kTmFtZTogc3RyaW5nO1xuICAgICBicmFuZE1hcCA9IG5ldyBNYXA8c3RyaW5nLHN0cmluZz4oKTsgXG5cbiAgZmVhdHVyZWRQcm9kdWN0czogUHJvZHVjdDEyM1tdID0gW107XG4gIGVuZFN1YnMkIDogU3ViamVjdDxhbnk+PSBuZXcgU3ViamVjdCgpO1xuICByZXNwb25zaXZlT3B0aW9ucztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByb2RTZXJ2aWNlOiBQcm9kdWN0c1NlcnZpY2UgKSB7IFxuXG5cbiAgICB0aGlzLmJyYW5kTWFwLnNldChcIjYyMTNjNzg4OTMwOWRlOTYwMTgwZGE0YVwiLFwiQmxhdWVyXCIpO1xuICAgIHRoaXMuYnJhbmRNYXAuc2V0KFwiNjIxM2M4OWU5MzA5ZGU5NjAxODBkYTRkXCIsIFwiT2xkIFJpdmVyXCIpO1xuICAgIHRoaXMuYnJhbmRNYXAuc2V0KCBcIjYyMTY3YmQxY2JhOGExZTBkOWMxYWY4OFwiLFwiQ29sbWFyXCIpO1xuICAgIHRoaXMuYnJhbmRNYXAuc2V0KCBcIjYyMTg5ZWZlMWQ2MjM4NmNjMjI1MjViNlwiLFwiRUE3XCIpO1xuICAgIHRoaXMuYnJhbmRNYXAuc2V0KFwiNjIxODlmMWUxZDYyMzg2Y2MyMjUyNWI5XCIsXCJGcmVkIFBlcnJ5XCIpO1xuICAgIHRoaXMuYnJhbmRNYXAuc2V0KCBcIjYyMTg5ZjM3MWQ2MjM4NmNjMjI1MjViY1wiLFwiS3dheVwiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldChcIjYyMTg5ZjQ4MWQ2MjM4NmNjMjI1MjViZlwiLFwiTGFjb3N0ZVwiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldChcIjYyMTg5ZjdkMWQ2MjM4NmNjMjI1MjVjMlwiLFwiTXVycGh5Jm55ZVwiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldCggXCI2MjE4OWY5ODFkNjIzODZjYzIyNTI1YzVcIixcIlBlbmluc3VsYVwiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldChcIjYyMTg5ZmFkMWQ2MjM4NmNjMjI1MjVjOFwiLFwiU2F1Y29ueVwiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldCggXCI2MjE4OWZiYjFkNjIzODZjYzIyNTI1Y2JcIixcIlN1bmRla1wiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldCggXCI2MzJlMDVmM2I4YzU2N2RlNWVhODM2NjlcIixcIkJhcmJvdXJcIik7XG4gICAgdGhpcy5icmFuZE1hcC5zZXQoIFwiNjM2YjU3ZTI1MDZiYTY1ZTU5M2JhYTgxXCIsXCJDaWVzc2VcIik7XG4gICAgdGhpcy5icmFuZE1hcC5zZXQoXCI2MzZiNTdmMzUwNmJhNjVlNTkzYmFhODRcIixcIkh1c2t5XCIpO1xuICAgIHRoaXMuYnJhbmRNYXAuc2V0KFwiaHVza3kgZmFsbFwiLCBcIjYzNmI1N2YzNTA2YmE2NWU1OTNiYWE4NFwiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldCggXCI2MzZiNTgwNjUwNmJhNjVlNTkzYmFhODdcIixcIkNhbmFkaWVuc1wiKTtcblxuXG4gICAgdGhpcy5yZXNwb25zaXZlT3B0aW9ucyA9IFtcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogJzE4NzRweCcsXG4gICAgICAgIG51bVZpc2libGU6IDUsXG4gICAgICAgIG51bVNjcm9sbDogMyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6ICcxMzc0cHgnLFxuICAgICAgICBudW1WaXNpYmxlOiA1LFxuICAgICAgICBudW1TY3JvbGw6IDIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiAnOTE2cHgnLFxuICAgICAgICBudW1WaXNpYmxlOiA0LFxuICAgICAgICBudW1TY3JvbGw6IDIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiAnNzY4cHgnLFxuICAgICAgICBudW1WaXNpYmxlOiAzLFxuICAgICAgICBudW1TY3JvbGw6IDEsXG4gICAgICB9LFxuXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6ICc1NjhweCcsXG4gICAgICAgIG51bVZpc2libGU6IDIsXG4gICAgICAgIG51bVNjcm9sbDogMSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6ICc0NjBweCcsXG4gICAgICAgIG51bVZpc2libGU6IDEsXG4gICAgICAgIG51bVNjcm9sbDogMSxcbiAgICAgIH0sXG4gICAgXTsgXG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9nZXRGZWF0dXJlZFByb2R1Y3RzKCk7XG4gICAgY29uc29sZS5sb2coXCJmZXR1cmVkIHByb2R1Y3RzIGZvciB0aGlzIGJyYW5kOiBcIiArIHRoaXMuYnJhbmROYW1lKVxuICAgIGxldCBicmFuZCA9IFwiXCJcbiAgICB0cnl7XG4gICAgICBicmFuZCA9dGhpcy5icmFuZE1hcC5nZXQodGhpcy5icmFuZE5hbWUpLnRvTG93ZXJDYXNlKClcbiAgICBcbiAgICB9Y2F0Y2goZSl7XG4gICAgICBicmFuZCA9dGhpcy5icmFuZE5hbWUudG9Mb3dlckNhc2UoKVxuICAgIH1cblxuICAgIHRoaXMucHJvZFNlcnZpY2UuZ2V0RmVhdHVyZWRQcm9kdWN0c0J5QnJhbmQoYnJhbmQpLnBpcGUodGFrZVVudGlsKHRoaXMuZW5kU3VicyQpKS5zdWJzY3JpYmUocHJvZHVjdHMgPT57XG4gICAgICB0aGlzLmZlYXR1cmVkUHJvZHVjdHMgPSBwcm9kdWN0cy5zbGljZSgwLDEwKTtcbiAgICB9KVxuXG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuZW5kU3VicyQuY29tcGxldGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldEZlYXR1cmVkUHJvZHVjdHMoKXtcblxuXG4gIH1cblxufVxuIiwiXG48cC1jYXJvdXNlbCBbdmFsdWVdPVwiZmVhdHVyZWRQcm9kdWN0c1wiIFtudW1WaXNpYmxlXT1cIjdcIiBbbnVtU2Nyb2xsXT1cIjFcIiBbY2lyY3VsYXJdPVwidHJ1ZVwiXG5bcmVzcG9uc2l2ZU9wdGlvbnNdPVwicmVzcG9uc2l2ZU9wdGlvbnNcIj5cbiAgPG5nLXRlbXBsYXRlIGxldC1wcm9kdWN0IHBUZW1wbGF0ZT1cIml0ZW1cIiAgW3N0eWxlXT1cInsnaGVpZ2h0JzonNjAwcHgnfVwiPlxuICAgIDxlc2hvcC1mcm9udGVuZC1wcm9kdWN0LWl0ZW0gIFtwcm9kdWN0XT0gJ3Byb2R1Y3QnPjwvZXNob3AtZnJvbnRlbmQtcHJvZHVjdC1pdGVtPlxuICA8L25nLXRlbXBsYXRlPlxuPC9wLWNhcm91c2VsPiAiXX0=