import { MyProfileCheckOutComponent } from './pages/my-profile-checkout/my-profile-checkout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from './services/cart.service';
import { CartIconComponent } from './components/cart-icon/cart-icon.component';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { DropdownModule } from 'primeng/dropdown';
import { ThankYouComponent } from './pages/thank-you/thank-you.component';
import { AuthGuard } from '@eshop-frontend/users';
import * as i0 from "@angular/core";
import * as i1 from "./services/cart.service";
import * as i2 from "@angular/router";
const ordersRoutes = [
    { path: 'cart', component: CartPageComponent },
    { path: 'checkout', canActivate: [AuthGuard], component: CheckoutPageComponent },
    { path: 'success', component: ThankYouComponent }
];
export class OrdersModule {
    constructor(cartService) {
        cartService.initCartLocalStorage();
    }
}
OrdersModule.ɵfac = function OrdersModule_Factory(t) { return new (t || OrdersModule)(i0.ɵɵinject(i1.CartService)); };
OrdersModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: OrdersModule });
OrdersModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [], imports: [[
            CommonModule,
            BadgeModule,
            RouterModule.forChild(ordersRoutes),
            ButtonModule,
            InputNumberModule,
            FormsModule,
            ReactiveFormsModule,
            InputTextModule,
            InputMaskModule,
            DropdownModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OrdersModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    BadgeModule,
                    RouterModule.forChild(ordersRoutes),
                    ButtonModule,
                    InputNumberModule,
                    FormsModule,
                    ReactiveFormsModule,
                    InputTextModule,
                    InputMaskModule,
                    DropdownModule,
                ],
                declarations: [
                    CartIconComponent,
                    OrderSummaryComponent,
                    CartPageComponent,
                    CheckoutPageComponent,
                    ThankYouComponent,
                    MyProfileCheckOutComponent
                ],
                providers: [],
                exports: [
                    CartIconComponent,
                    OrderSummaryComponent
                ],
            }]
    }], function () { return [{ type: i1.CartService }]; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(OrdersModule, { declarations: [CartIconComponent,
        OrderSummaryComponent,
        CartPageComponent,
        CheckoutPageComponent,
        ThankYouComponent,
        MyProfileCheckOutComponent], imports: [CommonModule,
        BadgeModule, i2.RouterModule, ButtonModule,
        InputNumberModule,
        FormsModule,
        ReactiveFormsModule,
        InputTextModule,
        InputMaskModule,
        DropdownModule], exports: [CartIconComponent,
        OrderSummaryComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpYnMvb3JkZXJzL3NyYy9saWIvb3JkZXJzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUl2RyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN0RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQTtBQUN6RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFFbEQsTUFBTSxZQUFZLEdBQVc7SUFDM0IsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBQztJQUM1QyxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsU0FBUyxFQUFFLHFCQUFxQixFQUFDO0lBQzlFLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUM7Q0FDL0MsQ0FBQztBQWdDSCxNQUFNLE9BQU8sWUFBWTtJQUV2QixZQUFZLFdBQXdCO1FBQ2xDLFdBQVcsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQ3JDLENBQUM7O3dFQUpVLFlBQVk7OERBQVosWUFBWTttRUFQYixFQUNULFlBdkJRO1lBQ04sWUFBWTtZQUNaLFdBQVc7WUFDWCxZQUFZLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQztZQUNuQyxZQUFZO1lBQ1osaUJBQWlCO1lBQ2pCLFdBQVc7WUFDWCxtQkFBbUI7WUFDbkIsZUFBZTtZQUNmLGVBQWU7WUFDZixjQUFjO1NBQ2I7dUZBa0JPLFlBQVk7Y0E5QnhCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ04sWUFBWTtvQkFDWixXQUFXO29CQUNYLFlBQVksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDO29CQUNuQyxZQUFZO29CQUNaLGlCQUFpQjtvQkFDakIsV0FBVztvQkFDWCxtQkFBbUI7b0JBQ25CLGVBQWU7b0JBQ2YsZUFBZTtvQkFDZixjQUFjO2lCQUNiO2dCQUNKLFlBQVksRUFBRTtvQkFDWixpQkFBaUI7b0JBQ2pCLHFCQUFxQjtvQkFDckIsaUJBQWlCO29CQUNqQixxQkFBcUI7b0JBQ3JCLGlCQUFpQjtvQkFDakIsMEJBQTBCO2lCQUczQjtnQkFDRCxTQUFTLEVBQUMsRUFDVDtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsaUJBQWlCO29CQUNsQixxQkFBcUI7aUJBQ3JCO2FBQ0Y7O3dGQUNZLFlBQVksbUJBaEJyQixpQkFBaUI7UUFDakIscUJBQXFCO1FBQ3JCLGlCQUFpQjtRQUNqQixxQkFBcUI7UUFDckIsaUJBQWlCO1FBQ2pCLDBCQUEwQixhQWpCekIsWUFBWTtRQUNaLFdBQVcsbUJBRVgsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZixlQUFlO1FBQ2YsY0FBYyxhQWVmLGlCQUFpQjtRQUNsQixxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPcmRlcnNTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9vcmRlcnMuc2VydmljZSc7XHJcbmltcG9ydCB7IE15UHJvZmlsZUNoZWNrT3V0Q29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9teS1wcm9maWxlLWNoZWNrb3V0L215LXByb2ZpbGUtY2hlY2tvdXQuY29tcG9uZW50JztcclxuXHJcblxyXG5cclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBDYXJ0U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY2FydC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ2FydEljb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2FydC1pY29uL2NhcnQtaWNvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCYWRnZU1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvYmFkZ2UnO1xyXG5pbXBvcnQgeyBCdXR0b25Nb2R1bGUgfSBmcm9tICdwcmltZW5nL2J1dHRvbic7XHJcbmltcG9ydCB7IElucHV0TnVtYmVyTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9pbnB1dG51bWJlcic7XHJcbmltcG9ydCB7IE9yZGVyU3VtbWFyeUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9vcmRlci1zdW1tYXJ5L29yZGVyLXN1bW1hcnkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IENhcnRQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9jYXJ0LXBhZ2UvY2FydC1wYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENoZWNrb3V0UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvY2hlY2tvdXQtcGFnZS9jaGVja291dC1wYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IElucHV0VGV4dE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvaW5wdXR0ZXh0JztcclxuaW1wb3J0IHtJbnB1dE1hc2tNb2R1bGV9IGZyb20gJ3ByaW1lbmcvaW5wdXRtYXNrJztcclxuaW1wb3J0IHtEcm9wZG93bk1vZHVsZX0gZnJvbSAncHJpbWVuZy9kcm9wZG93bic7XHJcbmltcG9ydCB7IFRoYW5rWW91Q29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy90aGFuay15b3UvdGhhbmsteW91LmNvbXBvbmVudCdcclxuaW1wb3J0IHsgQXV0aEd1YXJkIH0gZnJvbSAnQGVzaG9wLWZyb250ZW5kL3VzZXJzJztcclxuXHJcbmNvbnN0IG9yZGVyc1JvdXRlczogUm91dGVzID0gW1xyXG4gIHtwYXRoOiAnY2FydCcsIGNvbXBvbmVudDogQ2FydFBhZ2VDb21wb25lbnR9LFxyXG4gIHtwYXRoOiAnY2hlY2tvdXQnLCBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZF0sIGNvbXBvbmVudDogQ2hlY2tvdXRQYWdlQ29tcG9uZW50fSxcclxuICB7cGF0aDogJ3N1Y2Nlc3MnLCBjb21wb25lbnQ6IFRoYW5rWW91Q29tcG9uZW50fVxyXG4gXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgIENvbW1vbk1vZHVsZSxcclxuICAgICBCYWRnZU1vZHVsZSxcclxuICAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQob3JkZXJzUm91dGVzKSxcclxuICAgICBCdXR0b25Nb2R1bGUsXHJcbiAgICAgSW5wdXROdW1iZXJNb2R1bGUsXHJcbiAgICAgRm9ybXNNb2R1bGUsXHJcbiAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICAgICBJbnB1dFRleHRNb2R1bGUsXHJcbiAgICAgSW5wdXRNYXNrTW9kdWxlLFxyXG4gICAgIERyb3Bkb3duTW9kdWxlLFxyXG4gICAgIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBDYXJ0SWNvbkNvbXBvbmVudCxcclxuICAgIE9yZGVyU3VtbWFyeUNvbXBvbmVudCxcclxuICAgIENhcnRQYWdlQ29tcG9uZW50LFxyXG4gICAgQ2hlY2tvdXRQYWdlQ29tcG9uZW50LFxyXG4gICAgVGhhbmtZb3VDb21wb25lbnQsXHJcbiAgICBNeVByb2ZpbGVDaGVja091dENvbXBvbmVudFxyXG4gICAgXHJcblxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOltcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIENhcnRJY29uQ29tcG9uZW50LFxyXG4gICBPcmRlclN1bW1hcnlDb21wb25lbnRcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgT3JkZXJzTW9kdWxlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlKSB7XHJcbiAgICBjYXJ0U2VydmljZS5pbml0Q2FydExvY2FsU3RvcmFnZSgpO1xyXG4gIH1cclxuXHJcblxyXG5cclxufVxyXG4iXX0=