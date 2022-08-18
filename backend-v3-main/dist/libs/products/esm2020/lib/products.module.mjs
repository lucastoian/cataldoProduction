import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsSearchComponent } from './components/products-search/products-search.component';
import { CategoriesBannerComponent } from './components/categories-banner/categories-banner.component';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
//import { OrdersModule } from '@eshop-frontend/orders';
import { RouterModule } from '@angular/router';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { ButtonModule } from 'primeng/button';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { RatingModule } from 'primeng/rating';
import { InputNumberModule } from 'primeng/inputnumber';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { UiModule } from '@eshop-frontend/ui';
import { ProductsBrandsComponent } from './pages/products-brands/products-brands.component';
import { CarouselProductsBrandsComponent } from './pages/carousel-products-brands/carousel-products-brands.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
// import { WomenProductsListComponent } from './pages/women-products-list/women-products-list.component';
// import { WomenProductsBrandsComponent } from './pages/women-products-brands/women-products-brands.component';
const routes = [
    {
        path: 'products',
        component: ProductsListComponent,
    },
    {
        path: 'women-products',
        component: ProductsListComponent,
    },
    {
        path: 'products/category/:categoryid',
        component: ProductsListComponent,
    },
    {
        path: 'women-products/category/:categoryid',
        component: ProductsListComponent,
    },
    {
        path: 'products/:productId',
        component: ProductPageComponent,
    },
    {
        path: 'women-products/:productId',
        component: ProductPageComponent,
    },
    {
        path: 'products/brand/:brandId',
        component: ProductsBrandsComponent,
    },
    {
        path: 'women-products/brand/:brandId',
        component: ProductsBrandsComponent,
    },
    {
        path: 'products/brand/name/:brandName/:brandId',
        component: CarouselProductsBrandsComponent,
    },
];
export class ProductsModule {
}
ProductsModule.ɵfac = function ProductsModule_Factory(t) { return new (t || ProductsModule)(); };
ProductsModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ProductsModule });
ProductsModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [], imports: [[CommonModule,
            // OrdersModule,
            RouterModule.forChild(routes),
            ButtonModule,
            CheckboxModule,
            FormsModule,
            RatingModule,
            InputNumberModule,
            UiModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductsModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule,
                    // OrdersModule,
                    RouterModule.forChild(routes),
                    ButtonModule,
                    CheckboxModule,
                    FormsModule,
                    RatingModule,
                    InputNumberModule,
                    UiModule,
                ],
                declarations: [
                    ProductsSearchComponent,
                    CategoriesBannerComponent,
                    ProductItemComponent,
                    FeaturedProductsComponent,
                    ProductsListComponent,
                    ProductPageComponent,
                    ProductsBrandsComponent,
                    CarouselProductsBrandsComponent,
                ],
                providers: [],
                exports: [
                    ProductsSearchComponent,
                    CategoriesBannerComponent,
                    ProductItemComponent,
                    FeaturedProductsComponent,
                    ProductsListComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ProductsModule, { declarations: [ProductsSearchComponent,
        CategoriesBannerComponent,
        ProductItemComponent,
        FeaturedProductsComponent,
        ProductsListComponent,
        ProductPageComponent,
        ProductsBrandsComponent,
        CarouselProductsBrandsComponent], imports: [CommonModule, i1.RouterModule, ButtonModule,
        CheckboxModule,
        FormsModule,
        RatingModule,
        InputNumberModule,
        UiModule], exports: [ProductsSearchComponent,
        CategoriesBannerComponent,
        ProductItemComponent,
        FeaturedProductsComponent,
        ProductsListComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGlicy9wcm9kdWN0cy9zcmMvbGliL3Byb2R1Y3RzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNqRyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUN2Ryw4REFBOEQ7QUFDOUQsd0RBQXdEO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUV4RixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUN2RyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDdEYsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUVuRixPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsOERBQThEO0FBQzlELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUM1RixPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxxRUFBcUUsQ0FBQzs7O0FBRXRILDBHQUEwRztBQUMxRyxnSEFBZ0g7QUFJaEgsTUFBTSxNQUFNLEdBQVc7SUFDckI7UUFDRSxJQUFJLEVBQUUsVUFBVTtRQUNoQixTQUFTLEVBQUUscUJBQXFCO0tBQ2pDO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsZ0JBQWdCO1FBQ3RCLFNBQVMsRUFBRSxxQkFBcUI7S0FDakM7SUFDRDtRQUNFLElBQUksRUFBRSwrQkFBK0I7UUFDckMsU0FBUyxFQUFFLHFCQUFxQjtLQUNqQztJQUNEO1FBQ0UsSUFBSSxFQUFFLHFDQUFxQztRQUMzQyxTQUFTLEVBQUUscUJBQXFCO0tBQ2pDO0lBQ0Q7UUFDRSxJQUFJLEVBQUUscUJBQXFCO1FBQzNCLFNBQVMsRUFBRSxvQkFBb0I7S0FDaEM7SUFDRDtRQUNFLElBQUksRUFBRSwyQkFBMkI7UUFDakMsU0FBUyxFQUFFLG9CQUFvQjtLQUNoQztJQUNEO1FBQ0UsSUFBSSxFQUFFLHlCQUF5QjtRQUMvQixTQUFTLEVBQUUsdUJBQXVCO0tBQ25DO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsK0JBQStCO1FBQ3JDLFNBQVMsRUFBRSx1QkFBdUI7S0FDbkM7SUFDRDtRQUNFLElBQUksRUFBRSx5Q0FBeUM7UUFDL0MsU0FBUyxFQUFFLCtCQUErQjtLQUMzQztDQUNGLENBQUM7QUFvQ0YsTUFBTSxPQUFPLGNBQWM7OzRFQUFkLGNBQWM7Z0VBQWQsY0FBYztxRUFYZCxFQUVWLFlBeEJRLENBQUMsWUFBWTtZQUNiLGdCQUFnQjtZQUNmLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQzdCLFlBQVk7WUFDWixjQUFjO1lBQ2QsV0FBVztZQUNYLFlBQVk7WUFDWixpQkFBaUI7WUFDakIsUUFBUTtTQUNUO3VGQXdCRSxjQUFjO2NBbEMxQixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWTtvQkFDYixnQkFBZ0I7b0JBQ2YsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7b0JBQzdCLFlBQVk7b0JBQ1osY0FBYztvQkFDZCxXQUFXO29CQUNYLFlBQVk7b0JBQ1osaUJBQWlCO29CQUNqQixRQUFRO2lCQUNUO2dCQUNULFlBQVksRUFBRTtvQkFDWix1QkFBdUI7b0JBQ3ZCLHlCQUF5QjtvQkFDekIsb0JBQW9CO29CQUNwQix5QkFBeUI7b0JBQ3pCLHFCQUFxQjtvQkFDckIsb0JBQW9CO29CQUVwQix1QkFBdUI7b0JBQ3ZCLCtCQUErQjtpQkFFaEM7Z0JBQ0QsU0FBUyxFQUFFLEVBRVY7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLHVCQUF1QjtvQkFDdkIseUJBQXlCO29CQUN6QixvQkFBb0I7b0JBQ3BCLHlCQUF5QjtvQkFDekIscUJBQXFCO2lCQUN0QjthQUNGOzt3RkFDWSxjQUFjLG1CQXRCdkIsdUJBQXVCO1FBQ3ZCLHlCQUF5QjtRQUN6QixvQkFBb0I7UUFDcEIseUJBQXlCO1FBQ3pCLHFCQUFxQjtRQUNyQixvQkFBb0I7UUFFcEIsdUJBQXVCO1FBQ3ZCLCtCQUErQixhQW5CdkIsWUFBWSxtQkFHWixZQUFZO1FBQ1osY0FBYztRQUNkLFdBQVc7UUFDWCxZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLFFBQVEsYUFrQmhCLHVCQUF1QjtRQUN2Qix5QkFBeUI7UUFDekIsb0JBQW9CO1FBQ3BCLHlCQUF5QjtRQUN6QixxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBQcm9kdWN0c1NlYXJjaENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wcm9kdWN0cy1zZWFyY2gvcHJvZHVjdHMtc2VhcmNoLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENhdGVnb3JpZXNCYW5uZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2F0ZWdvcmllcy1iYW5uZXIvY2F0ZWdvcmllcy1iYW5uZXIuY29tcG9uZW50JztcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBucndsL254L2VuZm9yY2UtbW9kdWxlLWJvdW5kYXJpZXNcclxuLy9pbXBvcnQgeyBPcmRlcnNNb2R1bGUgfSBmcm9tICdAZXNob3AtZnJvbnRlbmQvb3JkZXJzJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUHJvZHVjdEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcHJvZHVjdC1pdGVtL3Byb2R1Y3QtaXRlbS5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHsgRmVhdHVyZWRQcm9kdWN0c0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9mZWF0dXJlZC1wcm9kdWN0cy9mZWF0dXJlZC1wcm9kdWN0cy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCdXR0b25Nb2R1bGUgfSBmcm9tICdwcmltZW5nL2J1dHRvbic7XHJcbmltcG9ydCB7IFByb2R1Y3RzTGlzdENvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvcHJvZHVjdHMtbGlzdC9wcm9kdWN0cy1saXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Q2hlY2tib3hNb2R1bGV9IGZyb20gJ3ByaW1lbmcvY2hlY2tib3gnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgUHJvZHVjdFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL3Byb2R1Y3QtcGFnZS9wcm9kdWN0LXBhZ2UuY29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7UmF0aW5nTW9kdWxlfSBmcm9tICdwcmltZW5nL3JhdGluZyc7XHJcbmltcG9ydCB7SW5wdXROdW1iZXJNb2R1bGV9IGZyb20gJ3ByaW1lbmcvaW5wdXRudW1iZXInO1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQG5yd2wvbngvZW5mb3JjZS1tb2R1bGUtYm91bmRhcmllc1xyXG5pbXBvcnQgeyBVaU1vZHVsZSB9IGZyb20gJ0Blc2hvcC1mcm9udGVuZC91aSc7XHJcbmltcG9ydCB7IFByb2R1Y3RzQnJhbmRzQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9wcm9kdWN0cy1icmFuZHMvcHJvZHVjdHMtYnJhbmRzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENhcm91c2VsUHJvZHVjdHNCcmFuZHNDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2Nhcm91c2VsLXByb2R1Y3RzLWJyYW5kcy9jYXJvdXNlbC1wcm9kdWN0cy1icmFuZHMuY29tcG9uZW50JztcclxuXHJcbi8vIGltcG9ydCB7IFdvbWVuUHJvZHVjdHNMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy93b21lbi1wcm9kdWN0cy1saXN0L3dvbWVuLXByb2R1Y3RzLWxpc3QuY29tcG9uZW50JztcclxuLy8gaW1wb3J0IHsgV29tZW5Qcm9kdWN0c0JyYW5kc0NvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvd29tZW4tcHJvZHVjdHMtYnJhbmRzL3dvbWVuLXByb2R1Y3RzLWJyYW5kcy5jb21wb25lbnQnO1xyXG5cclxuXHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICB7XHJcbiAgICBwYXRoOiAncHJvZHVjdHMnLFxyXG4gICAgY29tcG9uZW50OiBQcm9kdWN0c0xpc3RDb21wb25lbnQsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnd29tZW4tcHJvZHVjdHMnLFxyXG4gICAgY29tcG9uZW50OiBQcm9kdWN0c0xpc3RDb21wb25lbnQsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAncHJvZHVjdHMvY2F0ZWdvcnkvOmNhdGVnb3J5aWQnLFxyXG4gICAgY29tcG9uZW50OiBQcm9kdWN0c0xpc3RDb21wb25lbnQsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnd29tZW4tcHJvZHVjdHMvY2F0ZWdvcnkvOmNhdGVnb3J5aWQnLFxyXG4gICAgY29tcG9uZW50OiBQcm9kdWN0c0xpc3RDb21wb25lbnQsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAncHJvZHVjdHMvOnByb2R1Y3RJZCcsXHJcbiAgICBjb21wb25lbnQ6IFByb2R1Y3RQYWdlQ29tcG9uZW50LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJ3dvbWVuLXByb2R1Y3RzLzpwcm9kdWN0SWQnLFxyXG4gICAgY29tcG9uZW50OiBQcm9kdWN0UGFnZUNvbXBvbmVudCxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICdwcm9kdWN0cy9icmFuZC86YnJhbmRJZCcsXHJcbiAgICBjb21wb25lbnQ6IFByb2R1Y3RzQnJhbmRzQ29tcG9uZW50LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJ3dvbWVuLXByb2R1Y3RzL2JyYW5kLzpicmFuZElkJyxcclxuICAgIGNvbXBvbmVudDogUHJvZHVjdHNCcmFuZHNDb21wb25lbnQsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAncHJvZHVjdHMvYnJhbmQvbmFtZS86YnJhbmROYW1lLzpicmFuZElkJyxcclxuICAgIGNvbXBvbmVudDogQ2Fyb3VzZWxQcm9kdWN0c0JyYW5kc0NvbXBvbmVudCxcclxuICB9LFxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLFxyXG4gICAgICAgICAgIC8vIE9yZGVyc01vZHVsZSxcclxuICAgICAgICAgICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyksXHJcbiAgICAgICAgICAgIEJ1dHRvbk1vZHVsZSxcclxuICAgICAgICAgICAgQ2hlY2tib3hNb2R1bGUsXHJcbiAgICAgICAgICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgICAgICAgICBSYXRpbmdNb2R1bGUsXHJcbiAgICAgICAgICAgIElucHV0TnVtYmVyTW9kdWxlLFxyXG4gICAgICAgICAgICBVaU1vZHVsZSxcclxuICAgICAgICAgIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBQcm9kdWN0c1NlYXJjaENvbXBvbmVudCxcclxuICAgIENhdGVnb3JpZXNCYW5uZXJDb21wb25lbnQsXHJcbiAgICBQcm9kdWN0SXRlbUNvbXBvbmVudCxcclxuICAgIEZlYXR1cmVkUHJvZHVjdHNDb21wb25lbnQsXHJcbiAgICBQcm9kdWN0c0xpc3RDb21wb25lbnQsXHJcbiAgICBQcm9kdWN0UGFnZUNvbXBvbmVudCxcclxuXHJcbiAgICBQcm9kdWN0c0JyYW5kc0NvbXBvbmVudCxcclxuICAgIENhcm91c2VsUHJvZHVjdHNCcmFuZHNDb21wb25lbnQsXHJcblxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIFByb2R1Y3RzU2VhcmNoQ29tcG9uZW50LFxyXG4gICAgQ2F0ZWdvcmllc0Jhbm5lckNvbXBvbmVudCxcclxuICAgIFByb2R1Y3RJdGVtQ29tcG9uZW50LFxyXG4gICAgRmVhdHVyZWRQcm9kdWN0c0NvbXBvbmVudCxcclxuICAgIFByb2R1Y3RzTGlzdENvbXBvbmVudFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2R1Y3RzTW9kdWxlIHt9XHJcbiJdfQ==