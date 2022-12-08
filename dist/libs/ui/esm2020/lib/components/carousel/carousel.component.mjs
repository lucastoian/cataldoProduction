import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/common";
function CarouselComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵlistener("click", function CarouselComponent_div_1_Template_div_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const i_r2 = restoredCtx.index; const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.selectColor(i_r2); });
    i0.ɵɵelement(1, "img", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const imageUrl_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    i0.ɵɵproperty("id", i_r2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", imageUrl_r1.blob, i0.ɵɵsanitizeUrl);
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
CarouselComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CarouselComponent, selectors: [["eshop-frontend-carousel"]], inputs: { images: "images" }, features: [i0.ɵɵNgOnChangesFeature], decls: 2, vars: 1, consts: [[1, "images", "d-flex", "flex-row", 2, "height", "auto", "overflow-x", "auto", "scrollbar-color", "#d5ac68 #f1db9d", "scrollbar-width", "thin", "padding-left", "0 !important", "width", "fit-content"], ["style", "width: 83px; height:83px; display: flex; justify-content: center;   border-radius: 50%; overflow: hidden;  outline: 7px solid rgb(217, 217, 217); outline-style: double; padding: 10px; margin: 10px;   box-shadow: 0 0 0 5px rgba(242, 242, 242, 0.092);", 3, "id", "click", 4, "ngFor", "ngForOf"], [2, "width", "83px", "height", "83px", "display", "flex", "justify-content", "center", "border-radius", "50%", "overflow", "hidden", "outline", "7px solid rgb(217, 217, 217)", "outline-style", "double", "padding", "10px", "margin", "10px", "box-shadow", "0 0 0 5px rgba(242, 242, 242, 0.092)", 3, "id", "click"], ["onmouseout", "this.style.backgroundColor=''", "alt", "Responsive image", 1, "p-1", 2, "width", "auto", "height", "127px", "transform", "translateY(-27px)", 3, "src"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, CarouselComponent_div_1_Template, 2, 2, "div", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.imageArray);
    } }, directives: [i2.NgForOf], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CarouselComponent, [{
        type: Component,
        args: [{ selector: 'eshop-frontend-carousel', template: "<div class=\"images d-flex flex-row\" style=\" height: auto; overflow-x: auto; scrollbar-color: #d5ac68 #f1db9d;\nscrollbar-width: thin; padding-left: 0 !important;width: fit-content;\">\n\n    <div style=\"width: 83px; height:83px; display: flex; justify-content: center;   border-radius: 50%; overflow: hidden;  outline: 7px solid rgb(217, 217, 217); outline-style: double; padding: 10px; margin: 10px;   box-shadow: 0 0 0 5px rgba(242, 242, 242, 0.092);\" *ngFor=\"let imageUrl of imageArray; let i = index;\" (click)=\"selectColor(i)\" [id]=\"i\">\n        <img   onmouseout=\"this.style.backgroundColor=''\"\n        [src]= \"imageUrl.blob\"    class=\"p-1\" alt=\"Responsive image\" style=\"width: auto; height:127px; transform: translateY(-27px);\">\n    </div>\n\n  \n\n</div>\n", styles: [""] }]
    }], function () { return [{ type: i1.Router }]; }, { images: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy91aS9zcmMvbGliL2NvbXBvbmVudHMvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy91aS9zcmMvbGliL2NvbXBvbmVudHMvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXlCLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7O0lDRXJDLDhCQUE2VjtJQUFsQywrTUFBUyx3QkFBYyxJQUFDO0lBQy9VLHlCQUM4SDtJQUNsSSxpQkFBTTs7OztJQUg4VSx5QkFBUTtJQUV4VixlQUFzQjtJQUF0Qix3REFBc0I7O0FESTlCLE1BQU0sT0FBTyxpQkFBaUI7SUFLNUIsWUFDVSxNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUh4QixlQUFVLEdBQUcsRUFBRSxDQUFBO0lBTWYsQ0FBQztJQUNELGFBQWEsQ0FBQyxHQUFHLEVBQUUsRUFBRTtRQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLENBQUE7SUFDbkUsQ0FBQztJQUdELFdBQVcsQ0FBQyxTQUFTO1FBQ25CLHlCQUF5QjtRQUV4QixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDckUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHO1FBRXZCLE1BQU0sUUFBUSxHQUFHLE1BQU0sS0FBSyxDQUFDLEdBQUcsRUFBRSxFQUFDLEtBQUssRUFBRSxVQUFVLEVBQUMsQ0FBQyxDQUFDO1FBQ3ZELE1BQU0sU0FBUyxHQUFHLE1BQU0sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3hDLE9BQU8sU0FBUyxDQUFDO1FBR25CLGlDQUFpQztJQUVuQyxDQUFDO0lBR0MsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVILEtBQUssQ0FBQyxRQUFRO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDekQsQ0FBQztJQUVELEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBc0I7UUFFdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO1FBQzFFLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQztZQUN2QyxJQUFJLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdELE1BQU0sTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7WUFDaEMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzQixNQUFNLENBQUMsU0FBUyxHQUFHLEdBQUcsRUFBRTtnQkFDdEIsTUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztnQkFDakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRyxVQUFVLEVBQUMsQ0FBQyxDQUFDO1lBQ25ELENBQUMsQ0FBQTtTQUNGO0lBRUgsQ0FBQzs7a0ZBeERVLGlCQUFpQjtvRUFBakIsaUJBQWlCO1FDVDlCLDhCQUN1RTtRQUVuRSxrRUFHTTtRQUlWLGlCQUFNOztRQVAwUixlQUFlO1FBQWYsd0NBQWU7O3VGRE1sUyxpQkFBaUI7Y0FMN0IsU0FBUzsyQkFDRSx5QkFBeUI7eURBSzFCLE1BQU07a0JBQWQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFByb2R1Y3QxMjMgfSBmcm9tICcuLi8uLi9tb2R1bGVzL3Byb2R1Y3QxMjMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlc2hvcC1mcm9udGVuZC1jYXJvdXNlbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJvdXNlbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Nhcm91c2VsLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2Fyb3VzZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBpbWFnZXM6IFByb2R1Y3QxMjNbXTtcblxuICBpbWFnZUFycmF5ID0gW11cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXG4gICkge1xuXG4gIH1cbiAgbG9hZFNvbWVUaGluZyh1cmwsIGlkKSB7XG4gICAgdGhpcy5pbWFnZUFycmF5LnB1c2goe2lkOiBpZCwgYmxvYjogIHRoaXMuYWpheEdldEltYWdlRGF0YSh1cmwpfSlcbiAgfVxuXG4gIFxuICBzZWxlY3RDb2xvcihwcm9kSW5kZXgpIHtcbiAgICAvLyAvL2NvbnNvbGUubG9nKHByb2RJZCk7XG4gIFxuICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvJywgeyBza2lwTG9jYXRpb25DaGFuZ2U6IHRydWUgfSkudGhlbigoKSA9PiB7XG4gICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydwcm9kdWN0cy8nICsgdGhpcy5pbWFnZXNbcHJvZEluZGV4XS5pZF0pO1xuICAgICB9KTtcbiAgIH1cbiAgXG4gICBhc3luYyBhamF4R2V0SW1hZ2VEYXRhKHVybCkge1xuICBcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7Y2FjaGU6IFwibm8tc3RvcmVcIn0pO1xuICAgICAgY29uc3QgaW1hZ2VCbG9iID0gYXdhaXQgcmVzcG9uc2UuYmxvYigpO1xuICAgICAgcmV0dXJuIGltYWdlQmxvYjtcbiAgXG4gIFxuICAgIC8vQ29kZSB0byBnZXQgYmFzZTY0IGltYWdlIHN0cmluZ1xuICBcbiAgfVxuICBcbiAgXG4gICAgZ2V0IGhhc0ltYWdlcygpIHtcbiAgICAgIHJldHVybiB0aGlzLmltYWdlcz8ubGVuZ3RoID4gMDtcbiAgICB9XG4gIFxuICBhc3luYyBuZ09uSW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ0FST1VTRUwgUFJPRFVDVFMgPSBcIiArIHRoaXMuaW1hZ2VBcnJheSlcbiAgfVxuXG4gIGFzeW5jIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBcbiAgICBjb25zb2xlLmxvZyhcImNhcm91c2VsIGNvbXBvbmVudCBpbWFnZXMgPSAgXCIgKyBKU09OLnN0cmluZ2lmeSh0aGlzLmltYWdlcykpXG4gICAgZm9yKGxldCBpID0gMDsgaTx0aGlzLmltYWdlcy5sZW5ndGg7IGkrKyl7XG4gICAgICBsZXQgYmxvYiA9IGF3YWl0IHRoaXMuYWpheEdldEltYWdlRGF0YSh0aGlzLmltYWdlc1tpXS5pbWFnZSk7XG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XG4gICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBiYXNlNjRkYXRhID0gcmVhZGVyLnJlc3VsdDtcbiAgICAgICAgdGhpcy5pbWFnZUFycmF5LnB1c2goe2lkOiBpLCBibG9iOiAgYmFzZTY0ZGF0YX0pO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgXG59XG4iLCI8ZGl2IGNsYXNzPVwiaW1hZ2VzIGQtZmxleCBmbGV4LXJvd1wiIHN0eWxlPVwiIGhlaWdodDogYXV0bzsgb3ZlcmZsb3cteDogYXV0bzsgc2Nyb2xsYmFyLWNvbG9yOiAjZDVhYzY4ICNmMWRiOWQ7XG5zY3JvbGxiYXItd2lkdGg6IHRoaW47IHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O3dpZHRoOiBmaXQtY29udGVudDtcIj5cblxuICAgIDxkaXYgc3R5bGU9XCJ3aWR0aDogODNweDsgaGVpZ2h0OjgzcHg7IGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogY2VudGVyOyAgIGJvcmRlci1yYWRpdXM6IDUwJTsgb3ZlcmZsb3c6IGhpZGRlbjsgIG91dGxpbmU6IDdweCBzb2xpZCByZ2IoMjE3LCAyMTcsIDIxNyk7IG91dGxpbmUtc3R5bGU6IGRvdWJsZTsgcGFkZGluZzogMTBweDsgbWFyZ2luOiAxMHB4OyAgIGJveC1zaGFkb3c6IDAgMCAwIDVweCByZ2JhKDI0MiwgMjQyLCAyNDIsIDAuMDkyKTtcIiAqbmdGb3I9XCJsZXQgaW1hZ2VVcmwgb2YgaW1hZ2VBcnJheTsgbGV0IGkgPSBpbmRleDtcIiAoY2xpY2spPVwic2VsZWN0Q29sb3IoaSlcIiBbaWRdPVwiaVwiPlxuICAgICAgICA8aW1nICAgb25tb3VzZW91dD1cInRoaXMuc3R5bGUuYmFja2dyb3VuZENvbG9yPScnXCJcbiAgICAgICAgW3NyY109IFwiaW1hZ2VVcmwuYmxvYlwiICAgIGNsYXNzPVwicC0xXCIgYWx0PVwiUmVzcG9uc2l2ZSBpbWFnZVwiIHN0eWxlPVwid2lkdGg6IGF1dG87IGhlaWdodDoxMjdweDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yN3B4KTtcIj5cbiAgICA8L2Rpdj5cblxuICBcblxuPC9kaXY+XG4iXX0=