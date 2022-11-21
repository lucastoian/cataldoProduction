import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/common";
function CarouselComponent_img_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 2);
    i0.ɵɵlistener("click", function CarouselComponent_img_1_Template_img_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const i_r2 = restoredCtx.index; const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.selectColor(i_r2); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const imageUrl_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    i0.ɵɵproperty("id", i_r2)("src", imageUrl_r1.blob, i0.ɵɵsanitizeUrl);
} }
export class CarouselComponent {
    constructor(router) {
        this.router = router;
        this.imageArray = [];
    }
    loadSomeThing(url, id) {
        this.imageArray.push({ id: id, blob: this.ajaxGetImageData(url) });
    }
    selectColor(prodIndex) {
        // //console.log(prodId);
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['products/' + this.images[prodIndex].id]);
        });
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
    async ngOnInit() {
        console.log("CAROUSEL PRODUCTS = " + this.imageArray);
    }
    async ngOnChanges(changes) {
        console.log("carousel component images =  " + JSON.stringify(this.images));
        for (let i = 0; i < this.images.length; i++) {
            let blob = await this.ajaxGetImageData(this.images[i].image);
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = () => {
                const base64data = reader.result;
                this.imageArray.push({ id: i, blob: base64data });
            };
        }
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(i0.ɵɵdirectiveInject(i1.Router)); };
CarouselComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CarouselComponent, selectors: [["eshop-frontend-carousel"]], inputs: { images: "images" }, features: [i0.ɵɵNgOnChangesFeature], decls: 2, vars: 1, consts: [[1, "images", "d-flex", "flex-row", 2, "height", "auto", "overflow-x", "auto", "scrollbar-color", "#d5ac68 #f1db9d", "scrollbar-width", "thin"], ["onmouseover", "this.style.backgroundColor='black'", "onmouseout", "this.style.backgroundColor=''", "class", "img-fluid  p-1", "alt", "Responsive image", "style", "height: 100px;", 3, "id", "src", "click", 4, "ngFor", "ngForOf"], ["onmouseover", "this.style.backgroundColor='black'", "onmouseout", "this.style.backgroundColor=''", "alt", "Responsive image", 1, "img-fluid", "p-1", 2, "height", "100px", 3, "id", "src", "click"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, CarouselComponent_img_1_Template, 1, 2, "img", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.imageArray);
    } }, directives: [i2.NgForOf], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CarouselComponent, [{
        type: Component,
        args: [{ selector: 'eshop-frontend-carousel', template: "<div class=\"images d-flex flex-row\" style=\" height: auto; overflow-x: auto; scrollbar-color: #d5ac68 #f1db9d;\nscrollbar-width: thin;\">\n\n    <img  *ngFor=\"let imageUrl of imageArray; let i = index;\" [id]=\"i\"  onmouseover=\"this.style.backgroundColor='black'\" onmouseout=\"this.style.backgroundColor=''\"\n     [src]= \"imageUrl.blob\"  (click)=\"selectColor(i)\"  class=\"img-fluid  p-1\" alt=\"Responsive image\" style=\"height: 100px;\">\n\n</div>\n", styles: [""] }]
    }], function () { return [{ type: i1.Router }]; }, { images: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy91aS9zcmMvbGliL2NvbXBvbmVudHMvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy91aS9zcmMvbGliL2NvbXBvbmVudHMvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXlCLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7O0lDRXJDLDhCQUN3SDtJQUEvRiwrTUFBUyx3QkFBYyxJQUFDO0lBRGpELGlCQUN3SDs7OztJQUQ5RCx5QkFBUSwyQ0FBQTs7QURNdEUsTUFBTSxPQUFPLGlCQUFpQjtJQUs1QixZQUNVLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBSHhCLGVBQVUsR0FBRyxFQUFFLENBQUE7SUFNZixDQUFDO0lBQ0QsYUFBYSxDQUFDLEdBQUcsRUFBRSxFQUFFO1FBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsQ0FBQTtJQUNuRSxDQUFDO0lBR0QsV0FBVyxDQUFDLFNBQVM7UUFDbkIseUJBQXlCO1FBRXhCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNyRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbEUsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsS0FBSyxDQUFDLGdCQUFnQixDQUFDLEdBQUc7UUFFdkIsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxFQUFFLEVBQUMsS0FBSyxFQUFFLFVBQVUsRUFBQyxDQUFDLENBQUM7UUFDdkQsTUFBTSxTQUFTLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDeEMsT0FBTyxTQUFTLENBQUM7UUFHbkIsaUNBQWlDO0lBRW5DLENBQUM7SUFHQyxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUgsS0FBSyxDQUFDLFFBQVE7UUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUN6RCxDQUFDO0lBRUQsS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFzQjtRQUV0QyxPQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7UUFDMUUsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFDO1lBQ3ZDLElBQUksSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0QsTUFBTSxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztZQUNoQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNCLE1BQU0sQ0FBQyxTQUFTLEdBQUcsR0FBRyxFQUFFO2dCQUN0QixNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO2dCQUNqQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFHLFVBQVUsRUFBQyxDQUFDLENBQUM7WUFDbkQsQ0FBQyxDQUFBO1NBQ0Y7SUFFSCxDQUFDOztrRkF4RFUsaUJBQWlCO29FQUFqQixpQkFBaUI7UUNUOUIsOEJBQ3dCO1FBRXBCLGtFQUN3SDtRQUU1SCxpQkFBTTs7UUFIeUIsZUFBZTtRQUFmLHdDQUFlOzt1RkRNakMsaUJBQWlCO2NBTDdCLFNBQVM7MkJBQ0UseUJBQXlCO3lEQUsxQixNQUFNO2tCQUFkLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBQcm9kdWN0MTIzIH0gZnJvbSAnLi4vLi4vbW9kdWxlcy9wcm9kdWN0MTIzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXNob3AtZnJvbnRlbmQtY2Fyb3VzZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2Fyb3VzZWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYXJvdXNlbC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENhcm91c2VsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgaW1hZ2VzOiBQcm9kdWN0MTIzW107XG5cbiAgaW1hZ2VBcnJheSA9IFtdXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxuICApIHtcblxuICB9XG4gIGxvYWRTb21lVGhpbmcodXJsLCBpZCkge1xuICAgIHRoaXMuaW1hZ2VBcnJheS5wdXNoKHtpZDogaWQsIGJsb2I6ICB0aGlzLmFqYXhHZXRJbWFnZURhdGEodXJsKX0pXG4gIH1cblxuICBcbiAgc2VsZWN0Q29sb3IocHJvZEluZGV4KSB7XG4gICAgLy8gLy9jb25zb2xlLmxvZyhwcm9kSWQpO1xuICBcbiAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycsIHsgc2tpcExvY2F0aW9uQ2hhbmdlOiB0cnVlIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsncHJvZHVjdHMvJyArIHRoaXMuaW1hZ2VzW3Byb2RJbmRleF0uaWRdKTtcbiAgICAgfSk7XG4gICB9XG4gIFxuICAgYXN5bmMgYWpheEdldEltYWdlRGF0YSh1cmwpIHtcbiAgXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge2NhY2hlOiBcIm5vLXN0b3JlXCJ9KTtcbiAgICAgIGNvbnN0IGltYWdlQmxvYiA9IGF3YWl0IHJlc3BvbnNlLmJsb2IoKTtcbiAgICAgIHJldHVybiBpbWFnZUJsb2I7XG4gIFxuICBcbiAgICAvL0NvZGUgdG8gZ2V0IGJhc2U2NCBpbWFnZSBzdHJpbmdcbiAgXG4gIH1cbiAgXG4gIFxuICAgIGdldCBoYXNJbWFnZXMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbWFnZXM/Lmxlbmd0aCA+IDA7XG4gICAgfVxuICBcbiAgYXN5bmMgbmdPbkluaXQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICBjb25zb2xlLmxvZyhcIkNBUk9VU0VMIFBST0RVQ1RTID0gXCIgKyB0aGlzLmltYWdlQXJyYXkpXG4gIH1cblxuICBhc3luYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgXG4gICAgY29uc29sZS5sb2coXCJjYXJvdXNlbCBjb21wb25lbnQgaW1hZ2VzID0gIFwiICsgSlNPTi5zdHJpbmdpZnkodGhpcy5pbWFnZXMpKVxuICAgIGZvcihsZXQgaSA9IDA7IGk8dGhpcy5pbWFnZXMubGVuZ3RoOyBpKyspe1xuICAgICAgbGV0IGJsb2IgPSBhd2FpdCB0aGlzLmFqYXhHZXRJbWFnZURhdGEodGhpcy5pbWFnZXNbaV0uaW1hZ2UpO1xuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xuICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYmFzZTY0ZGF0YSA9IHJlYWRlci5yZXN1bHQ7XG4gICAgICAgIHRoaXMuaW1hZ2VBcnJheS5wdXNoKHtpZDogaSwgYmxvYjogIGJhc2U2NGRhdGF9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIFxufVxuIiwiPGRpdiBjbGFzcz1cImltYWdlcyBkLWZsZXggZmxleC1yb3dcIiBzdHlsZT1cIiBoZWlnaHQ6IGF1dG87IG92ZXJmbG93LXg6IGF1dG87IHNjcm9sbGJhci1jb2xvcjogI2Q1YWM2OCAjZjFkYjlkO1xuc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1wiPlxuXG4gICAgPGltZyAgKm5nRm9yPVwibGV0IGltYWdlVXJsIG9mIGltYWdlQXJyYXk7IGxldCBpID0gaW5kZXg7XCIgW2lkXT1cImlcIiAgb25tb3VzZW92ZXI9XCJ0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvcj0nYmxhY2snXCIgb25tb3VzZW91dD1cInRoaXMuc3R5bGUuYmFja2dyb3VuZENvbG9yPScnXCJcbiAgICAgW3NyY109IFwiaW1hZ2VVcmwuYmxvYlwiICAoY2xpY2spPVwic2VsZWN0Q29sb3IoaSlcIiAgY2xhc3M9XCJpbWctZmx1aWQgIHAtMVwiIGFsdD1cIlJlc3BvbnNpdmUgaW1hZ2VcIiBzdHlsZT1cImhlaWdodDogMTAwcHg7XCI+XG5cbjwvZGl2PlxuIl19