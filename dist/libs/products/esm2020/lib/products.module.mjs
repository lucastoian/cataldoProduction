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
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { RatingModule } from 'primeng/rating';
import { InputNumberModule } from 'primeng/inputnumber';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { UiModule } from '@eshop-frontend/ui';
import { ProductsBrandsComponent } from './pages/products-brands/products-brands.component';
import { CarouselProductsBrandsComponent } from './pages/carousel-products-brands/carousel-products-brands.component';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
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
ProductsModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ], imports: [[CommonModule,
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
                providers: [
                    { provide: LocationStrategy, useClass: HashLocationStrategy }
                ],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGlicy9wcm9kdWN0cy9zcmMvbGliL3Byb2R1Y3RzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNqRyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUN2Ryw4REFBOEQ7QUFDOUQsd0RBQXdEO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUV4RixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUN2RyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDdEYsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBRWhELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBRW5GLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCw4REFBOEQ7QUFDOUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzlDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHFFQUFxRSxDQUFDO0FBQ3RILE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBRXpFLDBHQUEwRztBQUMxRyxnSEFBZ0g7QUFJaEgsTUFBTSxNQUFNLEdBQVc7SUFDckI7UUFDRSxJQUFJLEVBQUUsVUFBVTtRQUNoQixTQUFTLEVBQUUscUJBQXFCO0tBQ2pDO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsZ0JBQWdCO1FBQ3RCLFNBQVMsRUFBRSxxQkFBcUI7S0FDakM7SUFDRDtRQUNFLElBQUksRUFBRSwrQkFBK0I7UUFDckMsU0FBUyxFQUFFLHFCQUFxQjtLQUNqQztJQUNEO1FBQ0UsSUFBSSxFQUFFLHFDQUFxQztRQUMzQyxTQUFTLEVBQUUscUJBQXFCO0tBQ2pDO0lBQ0Q7UUFDRSxJQUFJLEVBQUUscUJBQXFCO1FBQzNCLFNBQVMsRUFBRSxvQkFBb0I7S0FDaEM7SUFDRDtRQUNFLElBQUksRUFBRSwyQkFBMkI7UUFDakMsU0FBUyxFQUFFLG9CQUFvQjtLQUNoQztJQUNEO1FBQ0UsSUFBSSxFQUFFLHlCQUF5QjtRQUMvQixTQUFTLEVBQUUsdUJBQXVCO0tBQ25DO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsK0JBQStCO1FBQ3JDLFNBQVMsRUFBRSx1QkFBdUI7S0FDbkM7SUFDRDtRQUNFLElBQUksRUFBRSx5Q0FBeUM7UUFDL0MsU0FBUyxFQUFFLCtCQUErQjtLQUMzQztDQUNGLENBQUM7QUFvQ0YsTUFBTSxPQUFPLGNBQWM7OzRFQUFkLGNBQWM7Z0VBQWQsY0FBYztxRUFYZDtRQUNULEVBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxvQkFBb0IsRUFBQztLQUM1RCxZQXhCUSxDQUFDLFlBQVk7WUFDYixnQkFBZ0I7WUFDZixZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUM3QixZQUFZO1lBQ1osY0FBYztZQUNkLFdBQVc7WUFDWCxZQUFZO1lBQ1osaUJBQWlCO1lBQ2pCLFFBQVE7U0FDVDt1RkF3QkUsY0FBYztjQWxDMUIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVk7b0JBQ2IsZ0JBQWdCO29CQUNmLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO29CQUM3QixZQUFZO29CQUNaLGNBQWM7b0JBQ2QsV0FBVztvQkFDWCxZQUFZO29CQUNaLGlCQUFpQjtvQkFDakIsUUFBUTtpQkFDVDtnQkFDVCxZQUFZLEVBQUU7b0JBQ1osdUJBQXVCO29CQUN2Qix5QkFBeUI7b0JBQ3pCLG9CQUFvQjtvQkFDcEIseUJBQXlCO29CQUN6QixxQkFBcUI7b0JBQ3JCLG9CQUFvQjtvQkFFcEIsdUJBQXVCO29CQUN2QiwrQkFBK0I7aUJBRWhDO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxFQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsb0JBQW9CLEVBQUM7aUJBQzVEO2dCQUNELE9BQU8sRUFBRTtvQkFDUCx1QkFBdUI7b0JBQ3ZCLHlCQUF5QjtvQkFDekIsb0JBQW9CO29CQUNwQix5QkFBeUI7b0JBQ3pCLHFCQUFxQjtpQkFDdEI7YUFDRjs7d0ZBQ1ksY0FBYyxtQkF0QnZCLHVCQUF1QjtRQUN2Qix5QkFBeUI7UUFDekIsb0JBQW9CO1FBQ3BCLHlCQUF5QjtRQUN6QixxQkFBcUI7UUFDckIsb0JBQW9CO1FBRXBCLHVCQUF1QjtRQUN2QiwrQkFBK0IsYUFuQnZCLFlBQVksbUJBR1osWUFBWTtRQUNaLGNBQWM7UUFDZCxXQUFXO1FBQ1gsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixRQUFRLGFBa0JoQix1QkFBdUI7UUFDdkIseUJBQXlCO1FBQ3pCLG9CQUFvQjtRQUNwQix5QkFBeUI7UUFDekIscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBQcm9kdWN0c1NlYXJjaENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wcm9kdWN0cy1zZWFyY2gvcHJvZHVjdHMtc2VhcmNoLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYXRlZ29yaWVzQmFubmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NhdGVnb3JpZXMtYmFubmVyL2NhdGVnb3JpZXMtYmFubmVyLmNvbXBvbmVudCc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQG5yd2wvbngvZW5mb3JjZS1tb2R1bGUtYm91bmRhcmllc1xuLy9pbXBvcnQgeyBPcmRlcnNNb2R1bGUgfSBmcm9tICdAZXNob3AtZnJvbnRlbmQvb3JkZXJzJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUHJvZHVjdEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcHJvZHVjdC1pdGVtL3Byb2R1Y3QtaXRlbS5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBGZWF0dXJlZFByb2R1Y3RzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZlYXR1cmVkLXByb2R1Y3RzL2ZlYXR1cmVkLXByb2R1Y3RzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCdXR0b25Nb2R1bGUgfSBmcm9tICdwcmltZW5nL2J1dHRvbic7XG5pbXBvcnQgeyBQcm9kdWN0c0xpc3RDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL3Byb2R1Y3RzLWxpc3QvcHJvZHVjdHMtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHtDaGVja2JveE1vZHVsZX0gZnJvbSAncHJpbWVuZy9jaGVja2JveCc7XG5cbmltcG9ydCB7IFByb2R1Y3RQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9wcm9kdWN0LXBhZ2UvcHJvZHVjdC1wYWdlLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7UmF0aW5nTW9kdWxlfSBmcm9tICdwcmltZW5nL3JhdGluZyc7XG5pbXBvcnQge0lucHV0TnVtYmVyTW9kdWxlfSBmcm9tICdwcmltZW5nL2lucHV0bnVtYmVyJztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAbnJ3bC9ueC9lbmZvcmNlLW1vZHVsZS1ib3VuZGFyaWVzXG5pbXBvcnQgeyBVaU1vZHVsZSB9IGZyb20gJ0Blc2hvcC1mcm9udGVuZC91aSc7XG5pbXBvcnQgeyBQcm9kdWN0c0JyYW5kc0NvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvcHJvZHVjdHMtYnJhbmRzL3Byb2R1Y3RzLWJyYW5kcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2Fyb3VzZWxQcm9kdWN0c0JyYW5kc0NvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvY2Fyb3VzZWwtcHJvZHVjdHMtYnJhbmRzL2Nhcm91c2VsLXByb2R1Y3RzLWJyYW5kcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBIYXNoTG9jYXRpb25TdHJhdGVneSwgTG9jYXRpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbi8vIGltcG9ydCB7IFdvbWVuUHJvZHVjdHNMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy93b21lbi1wcm9kdWN0cy1saXN0L3dvbWVuLXByb2R1Y3RzLWxpc3QuY29tcG9uZW50Jztcbi8vIGltcG9ydCB7IFdvbWVuUHJvZHVjdHNCcmFuZHNDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL3dvbWVuLXByb2R1Y3RzLWJyYW5kcy93b21lbi1wcm9kdWN0cy1icmFuZHMuY29tcG9uZW50JztcblxuXG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJ3Byb2R1Y3RzJyxcbiAgICBjb21wb25lbnQ6IFByb2R1Y3RzTGlzdENvbXBvbmVudCxcbiAgfSxcbiAge1xuICAgIHBhdGg6ICd3b21lbi1wcm9kdWN0cycsXG4gICAgY29tcG9uZW50OiBQcm9kdWN0c0xpc3RDb21wb25lbnQsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAncHJvZHVjdHMvY2F0ZWdvcnkvOmNhdGVnb3J5aWQnLFxuICAgIGNvbXBvbmVudDogUHJvZHVjdHNMaXN0Q29tcG9uZW50LFxuICB9LFxuICB7XG4gICAgcGF0aDogJ3dvbWVuLXByb2R1Y3RzL2NhdGVnb3J5LzpjYXRlZ29yeWlkJyxcbiAgICBjb21wb25lbnQ6IFByb2R1Y3RzTGlzdENvbXBvbmVudCxcbiAgfSxcbiAge1xuICAgIHBhdGg6ICdwcm9kdWN0cy86cHJvZHVjdElkJyxcbiAgICBjb21wb25lbnQ6IFByb2R1Y3RQYWdlQ29tcG9uZW50LFxuICB9LFxuICB7XG4gICAgcGF0aDogJ3dvbWVuLXByb2R1Y3RzLzpwcm9kdWN0SWQnLFxuICAgIGNvbXBvbmVudDogUHJvZHVjdFBhZ2VDb21wb25lbnQsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAncHJvZHVjdHMvYnJhbmQvOmJyYW5kSWQnLFxuICAgIGNvbXBvbmVudDogUHJvZHVjdHNCcmFuZHNDb21wb25lbnQsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnd29tZW4tcHJvZHVjdHMvYnJhbmQvOmJyYW5kSWQnLFxuICAgIGNvbXBvbmVudDogUHJvZHVjdHNCcmFuZHNDb21wb25lbnQsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAncHJvZHVjdHMvYnJhbmQvbmFtZS86YnJhbmROYW1lLzpicmFuZElkJyxcbiAgICBjb21wb25lbnQ6IENhcm91c2VsUHJvZHVjdHNCcmFuZHNDb21wb25lbnQsXG4gIH0sXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLFxuICAgICAgICAgICAvLyBPcmRlcnNNb2R1bGUsXG4gICAgICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKSxcbiAgICAgICAgICAgIEJ1dHRvbk1vZHVsZSxcbiAgICAgICAgICAgIENoZWNrYm94TW9kdWxlLFxuICAgICAgICAgICAgRm9ybXNNb2R1bGUsXG4gICAgICAgICAgICBSYXRpbmdNb2R1bGUsXG4gICAgICAgICAgICBJbnB1dE51bWJlck1vZHVsZSxcbiAgICAgICAgICAgIFVpTW9kdWxlLFxuICAgICAgICAgIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFByb2R1Y3RzU2VhcmNoQ29tcG9uZW50LFxuICAgIENhdGVnb3JpZXNCYW5uZXJDb21wb25lbnQsXG4gICAgUHJvZHVjdEl0ZW1Db21wb25lbnQsXG4gICAgRmVhdHVyZWRQcm9kdWN0c0NvbXBvbmVudCxcbiAgICBQcm9kdWN0c0xpc3RDb21wb25lbnQsXG4gICAgUHJvZHVjdFBhZ2VDb21wb25lbnQsXG5cbiAgICBQcm9kdWN0c0JyYW5kc0NvbXBvbmVudCxcbiAgICBDYXJvdXNlbFByb2R1Y3RzQnJhbmRzQ29tcG9uZW50LFxuXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtwcm92aWRlOiBMb2NhdGlvblN0cmF0ZWd5LCB1c2VDbGFzczogSGFzaExvY2F0aW9uU3RyYXRlZ3l9XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBQcm9kdWN0c1NlYXJjaENvbXBvbmVudCxcbiAgICBDYXRlZ29yaWVzQmFubmVyQ29tcG9uZW50LFxuICAgIFByb2R1Y3RJdGVtQ29tcG9uZW50LFxuICAgIEZlYXR1cmVkUHJvZHVjdHNDb21wb25lbnQsXG4gICAgUHJvZHVjdHNMaXN0Q29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdHNNb2R1bGUge31cbiJdfQ==