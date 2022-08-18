import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Product123 } from '../../modules/product123';
import { ProductsService } from '../../modules/products.service';
import * as i0 from "@angular/core";
import * as i1 from "../../modules/products.service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/common";
const _c0 = function (a0) { return { "background-image": a0 }; };
function GalleryComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 5);
    i0.ɵɵlistener("click", function GalleryComponent_li_5_Template_li_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r3); const imageUrl_r1 = restoredCtx.$implicit; const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.changeSelectedImage(imageUrl_r1); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const imageUrl_r1 = ctx.$implicit;
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(1, _c0, "url(" + imageUrl_r1 + ")"));
} }
export class GalleryComponent {
    constructor(productsService, route) {
        this.productsService = productsService;
        this.route = route;
    }
    ngOnInit() {
        this.productsService.getProduct(this.currentId);
        this.selectedImageUrl = this.product.image;
        this.images.push(this.image);
        this._retrieveId();
    }
    _retrieveId() {
        this.route.params.subscribe((params) => {
            if (params.id) {
                this.currentId = params.id;
                console.log(this.currentId);
                console.log("x");
            }
        });
    }
    changeSelectedImage(imageUrl) {
        this.selectedImageUrl = imageUrl;
    }
    get hasImages() {
        return this.images?.length > 0;
    }
}
GalleryComponent.ɵfac = function GalleryComponent_Factory(t) { return new (t || GalleryComponent)(i0.ɵɵdirectiveInject(i1.ProductsService), i0.ɵɵdirectiveInject(i2.ActivatedRoute)); };
GalleryComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GalleryComponent, selectors: [["ui-gallery"]], inputs: { product: "product", image: "image", images: "images" }, decls: 6, vars: 2, consts: [[1, "gallery"], [1, "main-image"], ["alt", "", 3, "src"], [1, "images"], [3, "ngStyle", "click", 4, "ngFor", "ngForOf"], [3, "ngStyle", "click"]], template: function GalleryComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
        i0.ɵɵelement(2, "img", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 3)(4, "ul");
        i0.ɵɵtemplate(5, GalleryComponent_li_5_Template, 1, 3, "li", 4);
        i0.ɵɵelementEnd()()();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("src", ctx.selectedImageUrl, i0.ɵɵsanitizeUrl);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.images);
    } }, directives: [i3.NgForOf, i3.NgStyle], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GalleryComponent, [{
        type: Component,
        args: [{ selector: 'ui-gallery', styles: [], template: "<div class=\"gallery\">\r\n    <div class=\"main-image\">\r\n        <img [src]=\"selectedImageUrl\" alt=\"\">\r\n    </div>\r\n    <div class=\"images\">\r\n        <ul>\r\n          <li\r\n            *ngFor=\"let imageUrl of images\"\r\n            (click)=\"changeSelectedImage(imageUrl)\"\r\n            [ngStyle]=\"{ 'background-image': 'url(' + imageUrl + ')' }\"\r\n          ></li>\r\n        </ul>\r\n      </div>\r\n</div>\r\n" }]
    }], function () { return [{ type: i1.ProductsService }, { type: i2.ActivatedRoute }]; }, { product: [{
            type: Input
        }], image: [{
            type: Input
        }], images: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL3VpL3NyYy9saWIvY29tcG9uZW50cy9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy91aS9zcmMvbGliL2NvbXBvbmVudHMvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCw4REFBOEQ7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7Ozs7SUNFdkQsNkJBSUM7SUFGQyx1TkFBUyx1Q0FBNkIsSUFBQztJQUV4QyxpQkFBSzs7O0lBREosZ0ZBQTJEOztBREd2RSxNQUFNLE9BQU8sZ0JBQWdCO0lBTzNCLFlBQW9CLGVBQWdDLEVBQVUsS0FBcUI7UUFBL0Qsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7SUFBSSxDQUFDO0lBRXhGLFFBQVE7UUFDTixJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFFckIsQ0FBQztJQUVPLFdBQVc7UUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxFQUFDLEVBQUU7WUFDcEMsSUFBRyxNQUFNLENBQUMsRUFBRSxFQUFDO2dCQUNYLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQztnQkFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7YUFFbEI7UUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFHRCxtQkFBbUIsQ0FBQyxRQUFnQjtRQUNsQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDO0lBQ25DLENBQUM7SUFFRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNqQyxDQUFDOztnRkFuQ1UsZ0JBQWdCO21FQUFoQixnQkFBZ0I7UUNaN0IsOEJBQXFCLGFBQUE7UUFFYix5QkFBcUM7UUFDekMsaUJBQU07UUFDTiw4QkFBb0IsU0FBQTtRQUVkLCtEQUlNO1FBQ1IsaUJBQUssRUFBQSxFQUFBOztRQVRBLGVBQXdCO1FBQXhCLDREQUF3QjtRQUtKLGVBQVM7UUFBVCxvQ0FBUzs7dUZESzdCLGdCQUFnQjtjQU41QixTQUFTOzJCQUNFLFlBQVksVUFFZCxFQUNQOytGQUtRLE9BQU87a0JBQWYsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAbnJ3bC9ueC9lbmZvcmNlLW1vZHVsZS1ib3VuZGFyaWVzXHJcbmltcG9ydCB7IFByb2R1Y3QxMjN9IGZyb20gJy4uLy4uL21vZHVsZXMvcHJvZHVjdDEyMyc7XHJcbmltcG9ydCB7IFByb2R1Y3RzU2VydmljZSB9IGZyb20gJy4uLy4uL21vZHVsZXMvcHJvZHVjdHMuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3VpLWdhbGxlcnknLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9nYWxsZXJ5LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZXM6IFtcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHYWxsZXJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBjdXJyZW50SWQ6IHN0cmluZztcclxuICBzZWxlY3RlZEltYWdlVXJsOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcHJvZHVjdDogUHJvZHVjdDEyMztcclxuICBASW5wdXQoKSBpbWFnZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGltYWdlczogc3RyaW5nW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJvZHVjdHNTZXJ2aWNlOiBQcm9kdWN0c1NlcnZpY2UsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnByb2R1Y3RzU2VydmljZS5nZXRQcm9kdWN0KHRoaXMuY3VycmVudElkKTsgIFxyXG4gICAgdGhpcy5zZWxlY3RlZEltYWdlVXJsID0gdGhpcy5wcm9kdWN0LmltYWdlO1xyXG4gICAgdGhpcy5pbWFnZXMucHVzaCh0aGlzLmltYWdlKTsgICBcclxuICAgIHRoaXMuX3JldHJpZXZlSWQoKTtcclxuXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9yZXRyaWV2ZUlkKCl7XHJcbiAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcyk9PntcclxuICAgICAgaWYocGFyYW1zLmlkKXtcclxuICAgICAgICB0aGlzLmN1cnJlbnRJZCA9IHBhcmFtcy5pZDtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRJZCk7ICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ4XCIpO1xyXG4gICAgICAgICAgXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuXHJcbiAgY2hhbmdlU2VsZWN0ZWRJbWFnZShpbWFnZVVybDogc3RyaW5nKXtcclxuICAgIHRoaXMuc2VsZWN0ZWRJbWFnZVVybCA9IGltYWdlVXJsO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGhhc0ltYWdlcygpIHtcclxuICAgIHJldHVybiB0aGlzLmltYWdlcz8ubGVuZ3RoID4gMDtcclxuICB9XHJcblxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJnYWxsZXJ5XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibWFpbi1pbWFnZVwiPlxyXG4gICAgICAgIDxpbWcgW3NyY109XCJzZWxlY3RlZEltYWdlVXJsXCIgYWx0PVwiXCI+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJpbWFnZXNcIj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgKm5nRm9yPVwibGV0IGltYWdlVXJsIG9mIGltYWdlc1wiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJjaGFuZ2VTZWxlY3RlZEltYWdlKGltYWdlVXJsKVwiXHJcbiAgICAgICAgICAgIFtuZ1N0eWxlXT1cInsgJ2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKCcgKyBpbWFnZVVybCArICcpJyB9XCJcclxuICAgICAgICAgID48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19