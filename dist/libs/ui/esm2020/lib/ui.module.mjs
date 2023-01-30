import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { ButtonModule } from 'primeng/button';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CarouselModule } from 'primeng/carousel';
import { CarouselComponent } from './components/carousel/carousel.component';
import { GalleriaModule } from 'primeng/galleria';
import * as i0 from "@angular/core";
export class UiModule {
}
UiModule.ɵfac = function UiModule_Factory(t) { return new (t || UiModule)(); };
UiModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: UiModule });
UiModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule, ButtonModule, CarouselModule, GalleriaModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UiModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, ButtonModule, CarouselModule, GalleriaModule],
                declarations: [
                    BannerComponent,
                    GalleryComponent,
                    CarouselComponent
                ],
                exports: [
                    BannerComponent,
                    GalleryComponent,
                    CarouselComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(UiModule, { declarations: [BannerComponent,
        GalleryComponent,
        CarouselComponent], imports: [CommonModule, ButtonModule, CarouselModule, GalleriaModule], exports: [BannerComponent,
        GalleryComponent,
        CarouselComponent] }); })();
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGlicy91aS9zcmMvbGliL3VpLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzFFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM3RSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sa0JBQWtCLENBQUM7O0FBa0JoRCxNQUFNLE9BQU8sUUFBUTs7Z0VBQVIsUUFBUTswREFBUixRQUFROzhEQWRQLFlBQVksRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLGNBQWM7dUZBYzNELFFBQVE7Y0FmcEIsUUFBUTtlQUFDO2dCQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLGNBQWMsQ0FBQztnQkFDckUsWUFBWSxFQUFFO29CQUNaLGVBQWU7b0JBRWYsZ0JBQWdCO29CQUNoQixpQkFBaUI7aUJBQ2xCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxlQUFlO29CQUVmLGdCQUFnQjtvQkFDaEIsaUJBQWlCO2lCQUNsQjthQUNKOzt3RkFDWSxRQUFRLG1CQVpmLGVBQWU7UUFFZixnQkFBZ0I7UUFDaEIsaUJBQWlCLGFBTFQsWUFBWSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsY0FBYyxhQVFsRSxlQUFlO1FBRWYsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtBQUdDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBCYW5uZXJDb21wb25lbnQgfSBmcm9tICcuL2Jhbm5lci9iYW5uZXIuY29tcG9uZW50JztcblxuaW1wb3J0IHsgQnV0dG9uTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9idXR0b24nO1xuaW1wb3J0IHsgR2FsbGVyeUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50JztcbmltcG9ydCB7Q2Fyb3VzZWxNb2R1bGV9IGZyb20gJ3ByaW1lbmcvY2Fyb3VzZWwnO1xuaW1wb3J0IHsgQ2Fyb3VzZWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50JztcbmltcG9ydCB7R2FsbGVyaWFNb2R1bGV9IGZyb20gJ3ByaW1lbmcvZ2FsbGVyaWEnO1xuXG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgQnV0dG9uTW9kdWxlLCBDYXJvdXNlbE1vZHVsZSwgR2FsbGVyaWFNb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgQmFubmVyQ29tcG9uZW50LFxuXG4gICAgICBHYWxsZXJ5Q29tcG9uZW50LFxuICAgICAgQ2Fyb3VzZWxDb21wb25lbnRcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgIEJhbm5lckNvbXBvbmVudCxcbiAgXG4gICAgICBHYWxsZXJ5Q29tcG9uZW50LFxuICAgICAgQ2Fyb3VzZWxDb21wb25lbnRcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFVpTW9kdWxlIHt9OyJdfQ==