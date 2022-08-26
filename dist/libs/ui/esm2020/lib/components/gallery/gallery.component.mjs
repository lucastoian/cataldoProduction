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
    i0.ɵɵlistener("click", function GalleryComponent_img_4_Template_img_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const imageUrl_r1 = restoredCtx.$implicit; const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.changeSelectedImage(imageUrl_r1.blob); })("mouseover", function GalleryComponent_img_4_Template_img_mouseover_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const i_r2 = restoredCtx.index; const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.zoomImage(i_r2); })("mouseout", function GalleryComponent_img_4_Template_img_mouseout_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const i_r2 = restoredCtx.index; const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.removeZoomImage(i_r2); });
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
            let image = document.getElementById(i);
            let newNode = image.cloneNode(true);
            newNode['id'] = 'zoom';
            newNode['style'] = 'height:60%; top:0%; position:fixed;  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px; z-index:1000; padding:0; margin:0';
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
        const response = await fetch(url);
        const imageBlob = await response.blob();
        return imageBlob;
        //Code to get base64 image string
    }
    get hasImages() {
        return this.images?.length > 0;
    }
}
GalleryComponent.ɵfac = function GalleryComponent_Factory(t) { return new (t || GalleryComponent)(i0.ɵɵdirectiveInject(i1.ProductsService), i0.ɵɵdirectiveInject(i2.ActivatedRoute)); };
GalleryComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GalleryComponent, selectors: [["ui-gallery"]], inputs: { product: "product", image: "image", images: "images" }, decls: 5, vars: 2, consts: [[1, "gallery"], ["id", "mainImg", 1, "main-image", "pb-2"], ["alt", "", 3, "src"], [1, "images", "d-flex", "flex-row", 2, "height", "35vh", "overflow-x", "auto"], ["onmouseover", "this.style.backgroundColor='black'", "onmouseout", "this.style.backgroundColor=''", "class", "img-fluid p-1", "alt", "Responsive image", 3, "id", "src", "click", "mouseover", "mouseout", 4, "ngFor", "ngForOf"], ["onmouseover", "this.style.backgroundColor='black'", "onmouseout", "this.style.backgroundColor=''", "alt", "Responsive image", 1, "img-fluid", "p-1", 3, "id", "src", "click", "mouseover", "mouseout"]], template: function GalleryComponent_Template(rf, ctx) { if (rf & 1) {
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
                ], template: "<div class=\"gallery\">\r\n    <div id=\"mainImg\" class=\"main-image pb-2\">\r\n        <img  [src]=\"selectedImageUrl\" alt=\"\">\r\n\r\n    </div>\r\n    <div class=\"images d-flex flex-row\" style=\"height: 35vh; overflow-x: auto;\">\r\n\r\n\r\n\r\n        <img  *ngFor=\"let imageUrl of imageArray; let i = index;\" [id]=\"i\"  onmouseover=\"this.style.backgroundColor='black'\" onmouseout=\"this.style.backgroundColor=''\"\r\n        (click)=\"changeSelectedImage(imageUrl.blob)\"     (mouseover)=\"zoomImage(i)\"\r\n        (mouseout)=\"removeZoomImage(i)\" [src]= \"imageUrl.blob\"   class=\"img-fluid p-1\" alt=\"Responsive image\">\r\n\r\n    </div>\r\n</div>\r\n" }]
    }], function () { return [{ type: i1.ProductsService }, { type: i2.ActivatedRoute }]; }, { product: [{
            type: Input
        }], image: [{
            type: Input
        }], images: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL3VpL3NyYy9saWIvY29tcG9uZW50cy9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy91aS9zcmMvbGliL2NvbXBvbmVudHMvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCw4REFBOEQ7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7OztJQ0t6RCw4QkFFc0c7SUFEdEcseU5BQVMsNENBQWtDLElBQUMseU1BQWtCLHNCQUFZLElBQTlCLHVNQUNoQyw0QkFBa0IsSUFEYztJQUQ1QyxpQkFFc0c7Ozs7SUFGNUMseUJBQVEsMkNBQUE7O0FEYTFFLE1BQU0sT0FBTyxnQkFBZ0I7SUFRM0IsWUFBb0IsZUFBZ0MsRUFBVSxLQUFxQjtRQUEvRCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQU5uRixlQUFVLEdBQUcsRUFBRSxDQUFDO0lBTXlFLENBQUM7SUFFMUYsS0FBSyxDQUFDLFFBQVE7UUFFWixJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMs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QUFFLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Z0ZBckZVLGdCQUFnQjttRUFBaEIsZ0JBQWdCO1FDdEI3Qiw4QkFBcUIsYUFBQTtRQUViLHlCQUFzQztRQUUxQyxpQkFBTTtRQUNOLDhCQUE0RTtRQUl4RSxpRUFFc0c7UUFFMUcsaUJBQU0sRUFBQTs7UUFYSSxlQUF3QjtRQUF4Qiw0REFBd0I7UUFPSCxlQUFlO1FBQWYsd0NBQWU7O3VGRGFyQyxnQkFBZ0I7Y0FoQjVCLFNBQVM7MkJBQ0UsWUFBWSxVQUVkLENBQUM7Ozs7Ozs7Ozs7R0FVUjtpQkFDQTsrRkFNUSxPQUFPO2tCQUFmLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQG5yd2wvbngvZW5mb3JjZS1tb2R1bGUtYm91bmRhcmllc1xyXG5pbXBvcnQgeyBQcm9kdWN0MTIzfSBmcm9tICcuLi8uLi9tb2R1bGVzL3Byb2R1Y3QxMjMnO1xyXG5pbXBvcnQgeyBQcm9kdWN0c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9tb2R1bGVzL3Byb2R1Y3RzLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd1aS1nYWxsZXJ5JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZ2FsbGVyeS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVzOiBbYFxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1MDBweCkge1xyXG4gICAgLmltYWdlcyB7XHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG5cclxuICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2FsbGVyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgY3VycmVudElkOiBzdHJpbmc7XHJcbiAgaW1hZ2VBcnJheSA9IFtdO1xyXG4gIHNlbGVjdGVkSW1hZ2VVcmw6IHN0cmluZztcclxuICBASW5wdXQoKSBwcm9kdWN0OiBQcm9kdWN0MTIzO1xyXG4gIEBJbnB1dCgpIGltYWdlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaW1hZ2VzOiBzdHJpbmdbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwcm9kdWN0c1NlcnZpY2U6IFByb2R1Y3RzU2VydmljZSwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsICkgeyB9XHJcblxyXG4gIGFzeW5jIG5nT25Jbml0KCk6IFByb21pc2U8dm9pZD4ge1xyXG5cclxuICAgIHRoaXMucHJvZHVjdHNTZXJ2aWNlLmdldFByb2R1Y3QodGhpcy5jdXJyZW50SWQpO1xyXG4gICAgdGhpcy5zZWxlY3RlZEltYWdlVXJsID0gdGhpcy5wcm9kdWN0LmltYWdlO1xyXG4gICAgdGhpcy5pbWFnZXMucHVzaCh0aGlzLmltYWdlKTtcclxuICAgIGZvcihsZXQgaSA9IDA7IGk8dGhpcy5pbWFnZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICBsZXQgYmxvYiA9IGF3YWl0IHRoaXMuYWpheEdldEltYWdlRGF0YSh0aGlzLmltYWdlc1tpXSk7XHJcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xyXG4gICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJhc2U2NGRhdGEgPSByZWFkZXIucmVzdWx0O1xyXG4gICAgICAgIHRoaXMuaW1hZ2VBcnJheS5wdXNoKHtpZDogaSwgYmxvYjogIGJhc2U2NGRhdGF9KTtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhcImltYWdlQXJyYXkgPSBcIiArIEpTT04uc3RyaW5naWZ5KHRoaXMuaW1hZ2VBcnJheSkpO1xyXG5cclxuXHJcbiAgICB0aGlzLl9yZXRyaWV2ZUlkKCk7XHJcblxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfcmV0cmlldmVJZCgpe1xyXG4gICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpPT57XHJcbiAgICAgIGlmKHBhcmFtcy5pZCl7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SWQgPSBwYXJhbXMuaWQ7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jdXJyZW50SWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwieFwiKTtcclxuXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuXHJcbiAgY2hhbmdlU2VsZWN0ZWRJbWFnZShpbWFnZVVybDogc3RyaW5nKXtcclxuICAgIHRoaXMuc2VsZWN0ZWRJbWFnZVVybCA9IGltYWdlVXJsO1xyXG4gIH1cclxuXHJcbiAgem9vbUltYWdlKGk6c3RyaW5nKXtcclxuICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoID4gMTI0NSl7XHJcbiAgICBsZXQgaW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpKTtcclxuICAgIGxldCBuZXdOb2RlID0gaW1hZ2UuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgbmV3Tm9kZVsnaWQnXSA9ICd6b29tJztcclxuICAgIG5ld05vZGVbJ3N0eWxlJ10gPSAnaGVpZ2h0OjYwJTsgdG9wOjAlOyBwb3NpdGlvbjpmaXhlZDsgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNykgMHB4IC0yM3B4IDI1cHggMHB4IGluc2V0LCByZ2JhKDAsIDAsIDAsIDAuMTUpIDBweCAtMzZweCAzMHB4IDBweCBpbnNldCwgcmdiYSgwLCAwLCAwLCAwLjEpIDBweCAtNzlweCA0MHB4IDBweCBpbnNldCwgcmdiYSgwLCAwLCAwLCAwLjA2KSAwcHggMnB4IDFweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggNHB4IDJweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggOHB4IDRweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggMTZweCA4cHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IDMycHggMTZweDsgei1pbmRleDoxMDAwOyBwYWRkaW5nOjA7IG1hcmdpbjowJzs7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkltZycpLmFwcGVuZENoaWxkKG5ld05vZGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlWm9vbUltYWdlKHVybCl7XHJcbiAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA+IDEyNDUpe1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnem9vbScpLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG5cclxubG9hZFNvbWVUaGluZyh1cmwsIGlkKSB7XHJcbiAgdGhpcy5pbWFnZUFycmF5LnB1c2goe2lkOiBpZCwgYmxvYjogIHRoaXMuYWpheEdldEltYWdlRGF0YSh1cmwpfSlcclxufVxyXG5cclxuIGFzeW5jIGFqYXhHZXRJbWFnZURhdGEodXJsKSB7XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgY29uc3QgaW1hZ2VCbG9iID0gYXdhaXQgcmVzcG9uc2UuYmxvYigpO1xyXG4gICAgcmV0dXJuIGltYWdlQmxvYjtcclxuXHJcblxyXG4gIC8vQ29kZSB0byBnZXQgYmFzZTY0IGltYWdlIHN0cmluZ1xyXG5cclxufVxyXG5cclxuXHJcbiAgZ2V0IGhhc0ltYWdlcygpIHtcclxuICAgIHJldHVybiB0aGlzLmltYWdlcz8ubGVuZ3RoID4gMDtcclxuICB9XHJcblxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJnYWxsZXJ5XCI+XHJcbiAgICA8ZGl2IGlkPVwibWFpbkltZ1wiIGNsYXNzPVwibWFpbi1pbWFnZSBwYi0yXCI+XHJcbiAgICAgICAgPGltZyAgW3NyY109XCJzZWxlY3RlZEltYWdlVXJsXCIgYWx0PVwiXCI+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaW1hZ2VzIGQtZmxleCBmbGV4LXJvd1wiIHN0eWxlPVwiaGVpZ2h0OiAzNXZoOyBvdmVyZmxvdy14OiBhdXRvO1wiPlxyXG5cclxuXHJcblxyXG4gICAgICAgIDxpbWcgICpuZ0Zvcj1cImxldCBpbWFnZVVybCBvZiBpbWFnZUFycmF5OyBsZXQgaSA9IGluZGV4O1wiIFtpZF09XCJpXCIgIG9ubW91c2VvdmVyPVwidGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9J2JsYWNrJ1wiIG9ubW91c2VvdXQ9XCJ0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvcj0nJ1wiXHJcbiAgICAgICAgKGNsaWNrKT1cImNoYW5nZVNlbGVjdGVkSW1hZ2UoaW1hZ2VVcmwuYmxvYilcIiAgICAgKG1vdXNlb3Zlcik9XCJ6b29tSW1hZ2UoaSlcIlxyXG4gICAgICAgIChtb3VzZW91dCk9XCJyZW1vdmVab29tSW1hZ2UoaSlcIiBbc3JjXT0gXCJpbWFnZVVybC5ibG9iXCIgICBjbGFzcz1cImltZy1mbHVpZCBwLTFcIiBhbHQ9XCJSZXNwb25zaXZlIGltYWdlXCI+XHJcblxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=