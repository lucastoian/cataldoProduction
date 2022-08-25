import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Product123 } from '../../modules/product123';
import { ProductsService } from '../../modules/products.service';
import * as i0 from "@angular/core";
import * as i1 from "../../modules/products.service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/common";
function GalleryComponent_img_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 5);
    i0.ɵɵlistener("click", function GalleryComponent_img_4_Template_img_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r3); const imageUrl_r1 = restoredCtx.$implicit; const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.changeSelectedImage(imageUrl_r1); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const imageUrl_r1 = ctx.$implicit;
    i0.ɵɵproperty("src", imageUrl_r1, i0.ɵɵsanitizeUrl);
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
GalleryComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GalleryComponent, selectors: [["ui-gallery"]], inputs: { product: "product", image: "image", images: "images" }, decls: 5, vars: 2, consts: [[1, "gallery"], [1, "main-image", "pb-2"], ["alt", "", 3, "src"], [1, "images", "d-flex", "flex-row", 2, "height", "20vw", "overflow", "auto"], ["onmouseover", "this.style.backgroundColor='black'", "onmouseout", "this.style.backgroundColor=''", "class", "img-fluid p-1", "alt", "Responsive image", 3, "src", "click", 4, "ngFor", "ngForOf"], ["onmouseover", "this.style.backgroundColor='black'", "onmouseout", "this.style.backgroundColor=''", "alt", "Responsive image", 1, "img-fluid", "p-1", 3, "src", "click"]], template: function GalleryComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
        i0.ɵɵelement(2, "img", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵtemplate(4, GalleryComponent_img_4_Template, 1, 1, "img", 4);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("src", ctx.selectedImageUrl, i0.ɵɵsanitizeUrl);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.images);
    } }, directives: [i3.NgForOf], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GalleryComponent, [{
        type: Component,
        args: [{ selector: 'ui-gallery', styles: [`

  @media only screen and (max-width: 1500px) {
    .images {

    }
  }



  `
                ], template: "<div class=\"gallery\">\r\n    <div class=\"main-image pb-2\">\r\n        <img [src]=\"selectedImageUrl\" alt=\"\">\r\n    </div>\r\n    <div class=\"images d-flex flex-row\" style=\"height: 20vw; overflow: auto;\">\r\n\r\n\r\n\r\n        <img  *ngFor=\"let imageUrl of images\" onmouseover=\"this.style.backgroundColor='black'\" onmouseout=\"this.style.backgroundColor=''\"\r\n        (click)=\"changeSelectedImage(imageUrl)\" [src]= \"imageUrl\"   class=\"img-fluid p-1\" alt=\"Responsive image\">\r\n\r\n    </div>\r\n</div>\r\n" }]
    }], function () { return [{ type: i1.ProductsService }, { type: i2.ActivatedRoute }]; }, { product: [{
            type: Input
        }], image: [{
            type: Input
        }], images: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL3VpL3NyYy9saWIvY29tcG9uZW50cy9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy91aS9zcmMvbGliL2NvbXBvbmVudHMvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCw4REFBOEQ7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7OztJQ0l6RCw4QkFDeUc7SUFBekcseU5BQVMsdUNBQTZCLElBQUM7SUFEdkMsaUJBQ3lHOzs7SUFBakUsbURBQWlCOztBRGFqRSxNQUFNLE9BQU8sZ0JBQWdCO0lBTzNCLFlBQW9CLGVBQWdDLEVBQVUsS0FBcUI7UUFBL0Qsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7SUFBSSxDQUFDO0lBRXhGLFFBQVE7UUFDTixJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFFckIsQ0FBQztJQUVPLFdBQVc7UUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxFQUFDLEVBQUU7WUFDcEMsSUFBRyxNQUFNLENBQUMsRUFBRSxFQUFDO2dCQUNYLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQztnQkFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7YUFFbEI7UUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFHRCxtQkFBbUIsQ0FBQyxRQUFnQjtRQUNsQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDO0lBQ25DLENBQUM7SUFFRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNqQyxDQUFDOztnRkFuQ1UsZ0JBQWdCO21FQUFoQixnQkFBZ0I7UUN0QjdCLDhCQUFxQixhQUFBO1FBRWIseUJBQXFDO1FBQ3pDLGlCQUFNO1FBQ04sOEJBQTBFO1FBSXRFLGlFQUN5RztRQUU3RyxpQkFBTSxFQUFBOztRQVRHLGVBQXdCO1FBQXhCLDREQUF3QjtRQU1GLGVBQVM7UUFBVCxvQ0FBUzs7dUZEYy9CLGdCQUFnQjtjQWhCNUIsU0FBUzsyQkFDRSxZQUFZLFVBRWQsQ0FBQzs7Ozs7Ozs7OztHQVVSO2lCQUNBOytGQUtRLE9BQU87a0JBQWYsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAbnJ3bC9ueC9lbmZvcmNlLW1vZHVsZS1ib3VuZGFyaWVzXHJcbmltcG9ydCB7IFByb2R1Y3QxMjN9IGZyb20gJy4uLy4uL21vZHVsZXMvcHJvZHVjdDEyMyc7XHJcbmltcG9ydCB7IFByb2R1Y3RzU2VydmljZSB9IGZyb20gJy4uLy4uL21vZHVsZXMvcHJvZHVjdHMuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3VpLWdhbGxlcnknLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9nYWxsZXJ5LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZXM6IFtgXHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTUwMHB4KSB7XHJcbiAgICAuaW1hZ2VzIHtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHYWxsZXJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBjdXJyZW50SWQ6IHN0cmluZztcclxuICBzZWxlY3RlZEltYWdlVXJsOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcHJvZHVjdDogUHJvZHVjdDEyMztcclxuICBASW5wdXQoKSBpbWFnZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGltYWdlczogc3RyaW5nW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJvZHVjdHNTZXJ2aWNlOiBQcm9kdWN0c1NlcnZpY2UsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnByb2R1Y3RzU2VydmljZS5nZXRQcm9kdWN0KHRoaXMuY3VycmVudElkKTtcclxuICAgIHRoaXMuc2VsZWN0ZWRJbWFnZVVybCA9IHRoaXMucHJvZHVjdC5pbWFnZTtcclxuICAgIHRoaXMuaW1hZ2VzLnB1c2godGhpcy5pbWFnZSk7XHJcbiAgICB0aGlzLl9yZXRyaWV2ZUlkKCk7XHJcblxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfcmV0cmlldmVJZCgpe1xyXG4gICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpPT57XHJcbiAgICAgIGlmKHBhcmFtcy5pZCl7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SWQgPSBwYXJhbXMuaWQ7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jdXJyZW50SWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwieFwiKTtcclxuXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuXHJcbiAgY2hhbmdlU2VsZWN0ZWRJbWFnZShpbWFnZVVybDogc3RyaW5nKXtcclxuICAgIHRoaXMuc2VsZWN0ZWRJbWFnZVVybCA9IGltYWdlVXJsO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGhhc0ltYWdlcygpIHtcclxuICAgIHJldHVybiB0aGlzLmltYWdlcz8ubGVuZ3RoID4gMDtcclxuICB9XHJcblxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJnYWxsZXJ5XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibWFpbi1pbWFnZSBwYi0yXCI+XHJcbiAgICAgICAgPGltZyBbc3JjXT1cInNlbGVjdGVkSW1hZ2VVcmxcIiBhbHQ9XCJcIj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImltYWdlcyBkLWZsZXggZmxleC1yb3dcIiBzdHlsZT1cImhlaWdodDogMjB2dzsgb3ZlcmZsb3c6IGF1dG87XCI+XHJcblxyXG5cclxuXHJcbiAgICAgICAgPGltZyAgKm5nRm9yPVwibGV0IGltYWdlVXJsIG9mIGltYWdlc1wiIG9ubW91c2VvdmVyPVwidGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9J2JsYWNrJ1wiIG9ubW91c2VvdXQ9XCJ0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvcj0nJ1wiXHJcbiAgICAgICAgKGNsaWNrKT1cImNoYW5nZVNlbGVjdGVkSW1hZ2UoaW1hZ2VVcmwpXCIgW3NyY109IFwiaW1hZ2VVcmxcIiAgIGNsYXNzPVwiaW1nLWZsdWlkIHAtMVwiIGFsdD1cIlJlc3BvbnNpdmUgaW1hZ2VcIj5cclxuXHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==