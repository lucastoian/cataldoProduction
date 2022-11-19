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
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 5);
    i0.ɵɵlistener("click", function GalleryComponent_img_4_Template_img_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const imageUrl_r1 = restoredCtx.$implicit; const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.changeSelectedImage(imageUrl_r1.blob); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const imageUrl_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    i0.ɵɵproperty("id", i_r2)("src", imageUrl_r1.blob, i0.ɵɵsanitizeUrl);
} }
export class GalleryComponent {
    constructor(productsService, route) {
        this.productsService = productsService;
        this.route = route;
        this.imageArray = [];
    }
    async ngOnInit() {
        this.productsService.getProduct(this.currentId);
        this.selectedImageUrl = this.product.image;
        this.images.push(this.image);
        for (let i = 0; i < this.images.length; i++) {
            let blob = await this.ajaxGetImageData(this.images[i]);
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = () => {
                const base64data = reader.result;
                this.imageArray.push({ id: i, blob: base64data });
            };
        }
        console.log("imageArray = " + JSON.stringify(this.imageArray));
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
    zoomImage(i) {
        if (window.innerWidth > 1245) {
            const image = document.getElementById(i);
            const newNode = image.cloneNode(true);
            newNode['id'] = 'zoom';
            newNode['style'] = 'height:40%; top:20%; position:fixed;  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px; z-index:1000; padding:0; margin:0';
            ;
            document.getElementById('mainImg').appendChild(newNode);
        }
    }
    removeZoomImage(url) {
        if (window.innerWidth > 1245) {
            document.getElementById('zoom').remove();
        }
    }
    loadSomeThing(url, id) {
        this.imageArray.push({ id: id, blob: this.ajaxGetImageData(url) });
    }
    async ajaxGetImageData(url) {
        const response = await fetch(url, { cache: "no-store" });
        const imageBlob = await response.blob();
        return imageBlob;
        //Code to get base64 image string
    }
    get hasImages() {
        return this.images?.length > 0;
    }
}
GalleryComponent.ɵfac = function GalleryComponent_Factory(t) { return new (t || GalleryComponent)(i0.ɵɵdirectiveInject(i1.ProductsService), i0.ɵɵdirectiveInject(i2.ActivatedRoute)); };
GalleryComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GalleryComponent, selectors: [["ui-gallery"]], inputs: { product: "product", image: "image", images: "images" }, decls: 5, vars: 2, consts: [[1, "gallery"], ["id", "mainImg", 1, "main-image", "pb-2"], ["alt", "", 3, "src"], [1, "images", "d-flex", "flex-row", 2, "padding-left", "50px", "height", "35vh", "overflow-x", "auto", "scrollbar-color", "#d5ac68 #f1db9d", "scrollbar-width", "thin"], ["onmouseover", "this.style.backgroundColor='black'", "onmouseout", "this.style.backgroundColor=''", "class", "img-fluid p-1", "alt", "Responsive image", 3, "id", "src", "click", 4, "ngFor", "ngForOf"], ["onmouseover", "this.style.backgroundColor='black'", "onmouseout", "this.style.backgroundColor=''", "alt", "Responsive image", 1, "img-fluid", "p-1", 3, "id", "src", "click"]], template: function GalleryComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
        i0.ɵɵelement(2, "img", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵtemplate(4, GalleryComponent_img_4_Template, 1, 2, "img", 4);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("src", ctx.selectedImageUrl, i0.ɵɵsanitizeUrl);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.imageArray);
    } }, directives: [i3.NgForOf], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GalleryComponent, [{
        type: Component,
        args: [{ selector: 'ui-gallery', styles: [`

  @media only screen and (max-width: 1500px) {
    .images {

    }
  }



  `
                ], template: "<div class=\"gallery\">\r\n    <div  id=\"mainImg\" class=\"main-image pb-2\">\r\n        <img  [src]=\"selectedImageUrl\" alt=\"\">\r\n\r\n    </div>\r\n    <div class=\"images d-flex flex-row\" style=\" padding-left: 50px; height: 35vh; overflow-x: auto; scrollbar-color: #d5ac68 #f1db9d;\r\n    scrollbar-width: thin;\">\r\n\r\n\r\n\r\n        <img  *ngFor=\"let imageUrl of imageArray; let i = index;\" [id]=\"i\"  onmouseover=\"this.style.backgroundColor='black'\" onmouseout=\"this.style.backgroundColor=''\"\r\n        (click)=\"changeSelectedImage(imageUrl.blob)\" [src]= \"imageUrl.blob\"   class=\"img-fluid p-1\" alt=\"Responsive image\">\r\n\r\n    </div>\r\n</div>\r\n" }]
    }], function () { return [{ type: i1.ProductsService }, { type: i2.ActivatedRoute }]; }, { product: [{
            type: Input
        }], image: [{
            type: Input
        }], images: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL3VpL3NyYy9saWIvY29tcG9uZW50cy9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy91aS9zcmMvbGliL2NvbXBvbmVudHMvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCw4REFBOEQ7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7OztJQ016RCw4QkFDbUg7SUFBbkgseU5BQVMsNENBQWtDLElBQUM7SUFENUMsaUJBQ21IOzs7O0lBRHpELHlCQUFRLDJDQUFBOztBRFkxRSxNQUFNLE9BQU8sZ0JBQWdCO0lBUzNCLFlBQW9CLGVBQWdDLEVBQVUsS0FBcUI7UUFBL0Qsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFQbkYsZUFBVSxHQUFHLEVBQUUsQ0FBQztJQU95RSxDQUFDO0lBRTFGLEtBQUssQ0FBQyxRQUFRO1FBRVosSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUMzQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0IsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVB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LEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7O2dGQXRGVSxnQkFBZ0I7bUVBQWhCLGdCQUFnQjtRQ3RCN0IsOEJBQXFCLGFBQUE7UUFFYix5QkFBc0M7UUFFMUMsaUJBQU07UUFDTiw4QkFDd0I7UUFJcEIsaUVBQ21IO1FBRXZILGlCQUFNLEVBQUE7O1FBWEksZUFBd0I7UUFBeEIsNERBQXdCO1FBUUgsZUFBZTtRQUFmLHdDQUFlOzt1RkRZckMsZ0JBQWdCO2NBaEI1QixTQUFTOzJCQUNFLFlBQVksVUFFZCxDQUFDOzs7Ozs7Ozs7O0dBVVI7aUJBQ0E7K0ZBTVEsT0FBTztrQkFBZixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBRUcsTUFBTTtrQkFBZCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBucndsL254L2VuZm9yY2UtbW9kdWxlLWJvdW5kYXJpZXNcclxuaW1wb3J0IHsgUHJvZHVjdDEyM30gZnJvbSAnLi4vLi4vbW9kdWxlcy9wcm9kdWN0MTIzJztcclxuaW1wb3J0IHsgUHJvZHVjdHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbW9kdWxlcy9wcm9kdWN0cy5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndWktZ2FsbGVyeScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2dhbGxlcnkuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlczogW2BcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNTAwcHgpIHtcclxuICAgIC5pbWFnZXMge1xyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuXHJcbiAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEdhbGxlcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGN1cnJlbnRJZDogc3RyaW5nO1xyXG4gIGltYWdlQXJyYXkgPSBbXTtcclxuICBzZWxlY3RlZEltYWdlVXJsOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcHJvZHVjdDogUHJvZHVjdDEyMztcclxuICBASW5wdXQoKSBpbWFnZTogc3RyaW5nO1xyXG4gXHJcbiAgQElucHV0KCkgaW1hZ2VzOiBzdHJpbmdbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwcm9kdWN0c1NlcnZpY2U6IFByb2R1Y3RzU2VydmljZSwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsICkgeyB9XHJcblxyXG4gIGFzeW5jIG5nT25Jbml0KCk6IFByb21pc2U8dm9pZD4ge1xyXG5cclxuICAgIHRoaXMucHJvZHVjdHNTZXJ2aWNlLmdldFByb2R1Y3QodGhpcy5jdXJyZW50SWQpO1xyXG4gICAgdGhpcy5zZWxlY3RlZEltYWdlVXJsID0gdGhpcy5wcm9kdWN0LmltYWdlO1xyXG4gICAgdGhpcy5pbWFnZXMucHVzaCh0aGlzLmltYWdlKTtcclxuICAgIGZvcihsZXQgaSA9IDA7IGk8dGhpcy5pbWFnZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICBsZXQgYmxvYiA9IGF3YWl0IHRoaXMuYWpheEdldEltYWdlRGF0YSh0aGlzLmltYWdlc1tpXSk7XHJcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xyXG4gICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJhc2U2NGRhdGEgPSByZWFkZXIucmVzdWx0O1xyXG4gICAgICAgIHRoaXMuaW1hZ2VBcnJheS5wdXNoKHtpZDogaSwgYmxvYjogIGJhc2U2NGRhdGF9KTtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhcImltYWdlQXJyYXkgPSBcIiArIEpTT04uc3RyaW5naWZ5KHRoaXMuaW1hZ2VBcnJheSkpO1xyXG5cclxuXHJcbiAgICB0aGlzLl9yZXRyaWV2ZUlkKCk7XHJcblxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfcmV0cmlldmVJZCgpe1xyXG4gICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpPT57XHJcbiAgICAgIGlmKHBhcmFtcy5pZCl7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SWQgPSBwYXJhbXMuaWQ7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jdXJyZW50SWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwieFwiKTtcclxuXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuXHJcbiAgY2hhbmdlU2VsZWN0ZWRJbWFnZShpbWFnZVVybDogc3RyaW5nKXtcclxuICAgIHRoaXMuc2VsZWN0ZWRJbWFnZVVybCA9IGltYWdlVXJsO1xyXG4gIH1cclxuXHJcbiAgem9vbUltYWdlKGk6c3RyaW5nKXtcclxuICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoID4gMTI0NSl7XHJcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGkpO1xyXG4gICAgY29uc3QgbmV3Tm9kZSA9IGltYWdlLmNsb25lTm9kZSh0cnVlKTtcclxuICAgIG5ld05vZGVbJ2lkJ10gPSAnem9vbSc7XHJcbiAgICBuZXdOb2RlWydzdHlsZSddID0gJ2hlaWdodDo0MCU7IHRvcDoyMCU7IHBvc2l0aW9uOmZpeGVkOyAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE3KSAwcHggLTIzcHggMjVweCAwcHggaW5zZXQsIHJnYmEoMCwgMCwgMCwgMC4xNSkgMHB4IC0zNnB4IDMwcHggMHB4IGluc2V0LCByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IC03OXB4IDQwcHggMHB4IGluc2V0LCByZ2JhKDAsIDAsIDAsIDAuMDYpIDBweCAycHggMXB4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCA0cHggMnB4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCA4cHggNHB4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCAxNnB4IDhweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggMzJweCAxNnB4OyB6LWluZGV4OjEwMDA7IHBhZGRpbmc6MDsgbWFyZ2luOjAnOztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluSW1nJykuYXBwZW5kQ2hpbGQobmV3Tm9kZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW1vdmVab29tSW1hZ2UodXJsKXtcclxuICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoID4gMTI0NSl7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd6b29tJykucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcblxyXG5sb2FkU29tZVRoaW5nKHVybCwgaWQpIHtcclxuICB0aGlzLmltYWdlQXJyYXkucHVzaCh7aWQ6IGlkLCBibG9iOiAgdGhpcy5hamF4R2V0SW1hZ2VEYXRhKHVybCl9KVxyXG59XHJcblxyXG4gYXN5bmMgYWpheEdldEltYWdlRGF0YSh1cmwpIHtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge2NhY2hlOiBcIm5vLXN0b3JlXCJ9KTtcclxuICAgIGNvbnN0IGltYWdlQmxvYiA9IGF3YWl0IHJlc3BvbnNlLmJsb2IoKTtcclxuICAgIHJldHVybiBpbWFnZUJsb2I7XHJcblxyXG5cclxuICAvL0NvZGUgdG8gZ2V0IGJhc2U2NCBpbWFnZSBzdHJpbmdcclxuXHJcbn1cclxuXHJcblxyXG4gIGdldCBoYXNJbWFnZXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pbWFnZXM/Lmxlbmd0aCA+IDA7XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiZ2FsbGVyeVwiPlxyXG4gICAgPGRpdiAgaWQ9XCJtYWluSW1nXCIgY2xhc3M9XCJtYWluLWltYWdlIHBiLTJcIj5cclxuICAgICAgICA8aW1nICBbc3JjXT1cInNlbGVjdGVkSW1hZ2VVcmxcIiBhbHQ9XCJcIj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJpbWFnZXMgZC1mbGV4IGZsZXgtcm93XCIgc3R5bGU9XCIgcGFkZGluZy1sZWZ0OiA1MHB4OyBoZWlnaHQ6IDM1dmg7IG92ZXJmbG93LXg6IGF1dG87IHNjcm9sbGJhci1jb2xvcjogI2Q1YWM2OCAjZjFkYjlkO1xyXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1wiPlxyXG5cclxuXHJcblxyXG4gICAgICAgIDxpbWcgICpuZ0Zvcj1cImxldCBpbWFnZVVybCBvZiBpbWFnZUFycmF5OyBsZXQgaSA9IGluZGV4O1wiIFtpZF09XCJpXCIgIG9ubW91c2VvdmVyPVwidGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9J2JsYWNrJ1wiIG9ubW91c2VvdXQ9XCJ0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvcj0nJ1wiXHJcbiAgICAgICAgKGNsaWNrKT1cImNoYW5nZVNlbGVjdGVkSW1hZ2UoaW1hZ2VVcmwuYmxvYilcIiBbc3JjXT0gXCJpbWFnZVVybC5ibG9iXCIgICBjbGFzcz1cImltZy1mbHVpZCBwLTFcIiBhbHQ9XCJSZXNwb25zaXZlIGltYWdlXCI+XHJcblxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=