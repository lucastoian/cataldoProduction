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
import { CarouselModule } from 'primeng/carousel';
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
            RouterModule.forRoot(routes, {
                scrollPositionRestoration: 'top', // Add options right here
            }),
            ButtonModule,
            CheckboxModule,
            FormsModule,
            RatingModule,
            InputNumberModule,
            UiModule,
            CarouselModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductsModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule,
                    // OrdersModule,
                    RouterModule.forRoot(routes, {
                        scrollPositionRestoration: 'top', // Add options right here
                    }),
                    ButtonModule,
                    CheckboxModule,
                    FormsModule,
                    RatingModule,
                    InputNumberModule,
                    UiModule,
                    CarouselModule
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
        UiModule,
        CarouselModule], exports: [ProductsSearchComponent,
        CategoriesBannerComponent,
        ProductItemComponent,
        FeaturedProductsComponent,
        ProductsListComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGlicy9wcm9kdWN0cy9zcmMvbGliL3Byb2R1Y3RzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNqRyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUN2Ryw4REFBOEQ7QUFDOUQsd0RBQXdEO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUV4RixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUN2RyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDdEYsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBRWhELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ25GLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsOERBQThEO0FBQzlELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUM1RixPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxxRUFBcUUsQ0FBQztBQUN0SCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQUV6RSwwR0FBMEc7QUFDMUcsZ0hBQWdIO0FBSWhILE1BQU0sTUFBTSxHQUFXO0lBQ3JCO1FBQ0UsSUFBSSxFQUFFLFVBQVU7UUFDaEIsU0FBUyxFQUFFLHFCQUFxQjtLQUNqQztJQUNEO1FBQ0UsSUFBSSxFQUFFLGdCQUFnQjtRQUN0QixTQUFTLEVBQUUscUJBQXFCO0tBQ2pDO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsK0JBQStCO1FBQ3JDLFNBQVMsRUFBRSxxQkFBcUI7S0FDakM7SUFDRDtRQUNFLElBQUksRUFBRSxxQ0FBcUM7UUFDM0MsU0FBUyxFQUFFLHFCQUFxQjtLQUNqQztJQUNEO1FBQ0UsSUFBSSxFQUFFLHFCQUFxQjtRQUMzQixTQUFTLEVBQUUsb0JBQW9CO0tBQ2hDO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsMkJBQTJCO1FBQ2pDLFNBQVMsRUFBRSxvQkFBb0I7S0FDaEM7SUFDRDtRQUNFLElBQUksRUFBRSx5QkFBeUI7UUFDL0IsU0FBUyxFQUFFLHVCQUF1QjtLQUNuQztJQUNEO1FBQ0UsSUFBSSxFQUFFLCtCQUErQjtRQUNyQyxTQUFTLEVBQUUsdUJBQXVCO0tBQ25DO0lBQ0Q7UUFDRSxJQUFJLEVBQUUseUNBQXlDO1FBQy9DLFNBQVMsRUFBRSwrQkFBK0I7S0FDM0M7Q0FDRixDQUFDO0FBdUNGLE1BQU0sT0FBTyxjQUFjOzs0RUFBZCxjQUFjO2dFQUFkLGNBQWM7cUVBWGQ7UUFDVCxFQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsb0JBQW9CLEVBQUM7S0FDNUQsWUEzQlEsQ0FBQyxZQUFZO1lBQ2IsZ0JBQWdCO1lBQ2hCLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO2dCQUM1Qix5QkFBeUIsRUFBRSxLQUFLLEVBQUUseUJBQXlCO2FBQzVELENBQUM7WUFDQSxZQUFZO1lBQ1osY0FBYztZQUNkLFdBQVc7WUFDWCxZQUFZO1lBQ1osaUJBQWlCO1lBQ2pCLFFBQVE7WUFDUixjQUFjO1NBQ2Y7dUZBd0JFLGNBQWM7Y0FyQzFCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZO29CQUNiLGdCQUFnQjtvQkFDaEIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7d0JBQzVCLHlCQUF5QixFQUFFLEtBQUssRUFBRSx5QkFBeUI7cUJBQzVELENBQUM7b0JBQ0EsWUFBWTtvQkFDWixjQUFjO29CQUNkLFdBQVc7b0JBQ1gsWUFBWTtvQkFDWixpQkFBaUI7b0JBQ2pCLFFBQVE7b0JBQ1IsY0FBYztpQkFDZjtnQkFDVCxZQUFZLEVBQUU7b0JBQ1osdUJBQXVCO29CQUN2Qix5QkFBeUI7b0JBQ3pCLG9CQUFvQjtvQkFDcEIseUJBQXlCO29CQUN6QixxQkFBcUI7b0JBQ3JCLG9CQUFvQjtvQkFFcEIsdUJBQXVCO29CQUN2QiwrQkFBK0I7aUJBRWhDO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxFQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsb0JBQW9CLEVBQUM7aUJBQzVEO2dCQUNELE9BQU8sRUFBRTtvQkFDUCx1QkFBdUI7b0JBQ3ZCLHlCQUF5QjtvQkFDekIsb0JBQW9CO29CQUNwQix5QkFBeUI7b0JBQ3pCLHFCQUFxQjtpQkFDdEI7YUFDRjs7d0ZBQ1ksY0FBYyxtQkF0QnZCLHVCQUF1QjtRQUN2Qix5QkFBeUI7UUFDekIsb0JBQW9CO1FBQ3BCLHlCQUF5QjtRQUN6QixxQkFBcUI7UUFDckIsb0JBQW9CO1FBRXBCLHVCQUF1QjtRQUN2QiwrQkFBK0IsYUF0QnZCLFlBQVksbUJBS1osWUFBWTtRQUNaLGNBQWM7UUFDZCxXQUFXO1FBQ1gsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixRQUFRO1FBQ1IsY0FBYyxhQWtCdEIsdUJBQXVCO1FBQ3ZCLHlCQUF5QjtRQUN6QixvQkFBb0I7UUFDcEIseUJBQXlCO1FBQ3pCLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUHJvZHVjdHNTZWFyY2hDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcHJvZHVjdHMtc2VhcmNoL3Byb2R1Y3RzLXNlYXJjaC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2F0ZWdvcmllc0Jhbm5lckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jYXRlZ29yaWVzLWJhbm5lci9jYXRlZ29yaWVzLWJhbm5lci5jb21wb25lbnQnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBucndsL254L2VuZm9yY2UtbW9kdWxlLWJvdW5kYXJpZXNcbi8vaW1wb3J0IHsgT3JkZXJzTW9kdWxlIH0gZnJvbSAnQGVzaG9wLWZyb250ZW5kL29yZGVycyc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFByb2R1Y3RJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3Byb2R1Y3QtaXRlbS9wcm9kdWN0LWl0ZW0uY29tcG9uZW50JztcblxuaW1wb3J0IHsgRmVhdHVyZWRQcm9kdWN0c0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9mZWF0dXJlZC1wcm9kdWN0cy9mZWF0dXJlZC1wcm9kdWN0cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnV0dG9uTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9idXR0b24nO1xuaW1wb3J0IHsgUHJvZHVjdHNMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9wcm9kdWN0cy1saXN0L3Byb2R1Y3RzLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7Q2hlY2tib3hNb2R1bGV9IGZyb20gJ3ByaW1lbmcvY2hlY2tib3gnO1xuXG5pbXBvcnQgeyBQcm9kdWN0UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvcHJvZHVjdC1wYWdlL3Byb2R1Y3QtcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHtDYXJvdXNlbE1vZHVsZX0gZnJvbSAncHJpbWVuZy9jYXJvdXNlbCc7XG5pbXBvcnQge1JhdGluZ01vZHVsZX0gZnJvbSAncHJpbWVuZy9yYXRpbmcnO1xuaW1wb3J0IHtJbnB1dE51bWJlck1vZHVsZX0gZnJvbSAncHJpbWVuZy9pbnB1dG51bWJlcic7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQG5yd2wvbngvZW5mb3JjZS1tb2R1bGUtYm91bmRhcmllc1xuaW1wb3J0IHsgVWlNb2R1bGUgfSBmcm9tICdAZXNob3AtZnJvbnRlbmQvdWknO1xuaW1wb3J0IHsgUHJvZHVjdHNCcmFuZHNDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL3Byb2R1Y3RzLWJyYW5kcy9wcm9kdWN0cy1icmFuZHMuY29tcG9uZW50JztcbmltcG9ydCB7IENhcm91c2VsUHJvZHVjdHNCcmFuZHNDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2Nhcm91c2VsLXByb2R1Y3RzLWJyYW5kcy9jYXJvdXNlbC1wcm9kdWN0cy1icmFuZHMuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSGFzaExvY2F0aW9uU3RyYXRlZ3ksIExvY2F0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG4vLyBpbXBvcnQgeyBXb21lblByb2R1Y3RzTGlzdENvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvd29tZW4tcHJvZHVjdHMtbGlzdC93b21lbi1wcm9kdWN0cy1saXN0LmNvbXBvbmVudCc7XG4vLyBpbXBvcnQgeyBXb21lblByb2R1Y3RzQnJhbmRzQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy93b21lbi1wcm9kdWN0cy1icmFuZHMvd29tZW4tcHJvZHVjdHMtYnJhbmRzLmNvbXBvbmVudCc7XG5cblxuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICdwcm9kdWN0cycsXG4gICAgY29tcG9uZW50OiBQcm9kdWN0c0xpc3RDb21wb25lbnQsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnd29tZW4tcHJvZHVjdHMnLFxuICAgIGNvbXBvbmVudDogUHJvZHVjdHNMaXN0Q29tcG9uZW50LFxuICB9LFxuICB7XG4gICAgcGF0aDogJ3Byb2R1Y3RzL2NhdGVnb3J5LzpjYXRlZ29yeWlkJyxcbiAgICBjb21wb25lbnQ6IFByb2R1Y3RzTGlzdENvbXBvbmVudCxcbiAgfSxcbiAge1xuICAgIHBhdGg6ICd3b21lbi1wcm9kdWN0cy9jYXRlZ29yeS86Y2F0ZWdvcnlpZCcsXG4gICAgY29tcG9uZW50OiBQcm9kdWN0c0xpc3RDb21wb25lbnQsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAncHJvZHVjdHMvOnByb2R1Y3RJZCcsXG4gICAgY29tcG9uZW50OiBQcm9kdWN0UGFnZUNvbXBvbmVudCxcbiAgfSxcbiAge1xuICAgIHBhdGg6ICd3b21lbi1wcm9kdWN0cy86cHJvZHVjdElkJyxcbiAgICBjb21wb25lbnQ6IFByb2R1Y3RQYWdlQ29tcG9uZW50LFxuICB9LFxuICB7XG4gICAgcGF0aDogJ3Byb2R1Y3RzL2JyYW5kLzpicmFuZElkJyxcbiAgICBjb21wb25lbnQ6IFByb2R1Y3RzQnJhbmRzQ29tcG9uZW50LFxuICB9LFxuICB7XG4gICAgcGF0aDogJ3dvbWVuLXByb2R1Y3RzL2JyYW5kLzpicmFuZElkJyxcbiAgICBjb21wb25lbnQ6IFByb2R1Y3RzQnJhbmRzQ29tcG9uZW50LFxuICB9LFxuICB7XG4gICAgcGF0aDogJ3Byb2R1Y3RzL2JyYW5kL25hbWUvOmJyYW5kTmFtZS86YnJhbmRJZCcsXG4gICAgY29tcG9uZW50OiBDYXJvdXNlbFByb2R1Y3RzQnJhbmRzQ29tcG9uZW50LFxuICB9LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSxcbiAgICAgICAgICAgLy8gT3JkZXJzTW9kdWxlLFxuICAgICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMsIHtcbiAgICAgICAgICAgIHNjcm9sbFBvc2l0aW9uUmVzdG9yYXRpb246ICd0b3AnLCAvLyBBZGQgb3B0aW9ucyByaWdodCBoZXJlXG4gICAgICAgICAgfSksXG4gICAgICAgICAgICBCdXR0b25Nb2R1bGUsXG4gICAgICAgICAgICBDaGVja2JveE1vZHVsZSxcbiAgICAgICAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgICAgICAgUmF0aW5nTW9kdWxlLFxuICAgICAgICAgICAgSW5wdXROdW1iZXJNb2R1bGUsXG4gICAgICAgICAgICBVaU1vZHVsZSxcbiAgICAgICAgICAgIENhcm91c2VsTW9kdWxlXG4gICAgICAgICAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgUHJvZHVjdHNTZWFyY2hDb21wb25lbnQsXG4gICAgQ2F0ZWdvcmllc0Jhbm5lckNvbXBvbmVudCxcbiAgICBQcm9kdWN0SXRlbUNvbXBvbmVudCxcbiAgICBGZWF0dXJlZFByb2R1Y3RzQ29tcG9uZW50LFxuICAgIFByb2R1Y3RzTGlzdENvbXBvbmVudCxcbiAgICBQcm9kdWN0UGFnZUNvbXBvbmVudCxcblxuICAgIFByb2R1Y3RzQnJhbmRzQ29tcG9uZW50LFxuICAgIENhcm91c2VsUHJvZHVjdHNCcmFuZHNDb21wb25lbnQsXG5cbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge3Byb3ZpZGU6IExvY2F0aW9uU3RyYXRlZ3ksIHVzZUNsYXNzOiBIYXNoTG9jYXRpb25TdHJhdGVneX1cbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFByb2R1Y3RzU2VhcmNoQ29tcG9uZW50LFxuICAgIENhdGVnb3JpZXNCYW5uZXJDb21wb25lbnQsXG4gICAgUHJvZHVjdEl0ZW1Db21wb25lbnQsXG4gICAgRmVhdHVyZWRQcm9kdWN0c0NvbXBvbmVudCxcbiAgICBQcm9kdWN0c0xpc3RDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0c01vZHVsZSB7fVxuIl19