import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { SliderComponent } from './slider/slider.component';
import { ButtonModule } from 'primeng/button';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CarouselModule } from 'primeng/carousel';
import { CarouselComponent } from './components/carousel/carousel.component';
import * as i0 from "@angular/core";
export class UiModule {
}
UiModule.ɵfac = function UiModule_Factory(t) { return new (t || UiModule)(); };
UiModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: UiModule });
UiModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[CommonModule, ButtonModule, CarouselModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UiModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, ButtonModule, CarouselModule],
                declarations: [
                    BannerComponent,
                    SliderComponent,
                    GalleryComponent,
                    CarouselComponent
                ],
                exports: [
                    BannerComponent,
                    SliderComponent,
                    GalleryComponent,
                    CarouselComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(UiModule, { declarations: [BannerComponent,
        SliderComponent,
        GalleryComponent,
        CarouselComponent], imports: [CommonModule, ButtonModule, CarouselModule], exports: [BannerComponent,
        SliderComponent,
        GalleryComponent,
        CarouselComponent] }); })();
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGlicy91aS9zcmMvbGliL3VpLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMxRSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7O0FBa0I3RSxNQUFNLE9BQU8sUUFBUTs7Z0VBQVIsUUFBUTswREFBUixRQUFROzhEQWRSLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxjQUFjLENBQUM7dUZBYzVDLFFBQVE7Y0FmcEIsUUFBUTtlQUFDO2dCQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsY0FBYyxDQUFDO2dCQUNyRCxZQUFZLEVBQUU7b0JBQ1osZUFBZTtvQkFDZixlQUFlO29CQUNmLGdCQUFnQjtvQkFDaEIsaUJBQWlCO2lCQUNsQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsZUFBZTtvQkFDZixlQUFlO29CQUNmLGdCQUFnQjtvQkFDaEIsaUJBQWlCO2lCQUNsQjthQUNKOzt3RkFDWSxRQUFRLG1CQVpmLGVBQWU7UUFDZixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLGlCQUFpQixhQUxULFlBQVksRUFBRSxZQUFZLEVBQUUsY0FBYyxhQVFsRCxlQUFlO1FBQ2YsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixpQkFBaUI7QUFHQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQmFubmVyQ29tcG9uZW50IH0gZnJvbSAnLi9iYW5uZXIvYmFubmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTbGlkZXJDb21wb25lbnQgfSBmcm9tICcuL3NsaWRlci9zbGlkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEJ1dHRvbk1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvYnV0dG9uJztcbmltcG9ydCB7IEdhbGxlcnlDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudCc7XG5pbXBvcnQge0Nhcm91c2VsTW9kdWxlfSBmcm9tICdwcmltZW5nL2Nhcm91c2VsJztcbmltcG9ydCB7IENhcm91c2VsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudCc7XG5cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBCdXR0b25Nb2R1bGUsIENhcm91c2VsTW9kdWxlXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgIEJhbm5lckNvbXBvbmVudCxcbiAgICAgIFNsaWRlckNvbXBvbmVudCxcbiAgICAgIEdhbGxlcnlDb21wb25lbnQsXG4gICAgICBDYXJvdXNlbENvbXBvbmVudFxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgQmFubmVyQ29tcG9uZW50LFxuICAgICAgU2xpZGVyQ29tcG9uZW50LFxuICAgICAgR2FsbGVyeUNvbXBvbmVudCxcbiAgICAgIENhcm91c2VsQ29tcG9uZW50XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBVaU1vZHVsZSB7fTsiXX0=