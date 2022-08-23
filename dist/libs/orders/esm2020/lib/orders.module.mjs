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
import { AuthGuardNotAdmin } from '@eshop-frontend/users';
import * as i0 from "@angular/core";
import * as i1 from "./services/cart.service";
import * as i2 from "@angular/router";
const ordersRoutes = [
    { path: 'cart', component: CartPageComponent },
    { path: 'checkout', canActivate: [AuthGuardNotAdmin], component: CheckoutPageComponent },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpYnMvb3JkZXJzL3NyYy9saWIvb3JkZXJzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUl2RyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN0RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQTtBQUN6RSxPQUFPLEVBQWEsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7OztBQUVyRSxNQUFNLFlBQVksR0FBVztJQUMzQixFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFDO0lBQzVDLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLFNBQVMsRUFBRSxxQkFBcUIsRUFBQztJQUN0RixFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFDO0NBQy9DLENBQUM7QUFnQ0gsTUFBTSxPQUFPLFlBQVk7SUFFdkIsWUFBWSxXQUF3QjtRQUNsQyxXQUFXLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUNyQyxDQUFDOzt3RUFKVSxZQUFZOzhEQUFaLFlBQVk7bUVBUGIsRUFDVCxZQXZCUTtZQUNOLFlBQVk7WUFDWixXQUFXO1lBQ1gsWUFBWSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUM7WUFDbkMsWUFBWTtZQUNaLGlCQUFpQjtZQUNqQixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLGVBQWU7WUFDZixlQUFlO1lBQ2YsY0FBYztTQUNiO3VGQWtCTyxZQUFZO2NBOUJ4QixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNOLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxZQUFZLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQztvQkFDbkMsWUFBWTtvQkFDWixpQkFBaUI7b0JBQ2pCLFdBQVc7b0JBQ1gsbUJBQW1CO29CQUNuQixlQUFlO29CQUNmLGVBQWU7b0JBQ2YsY0FBYztpQkFDYjtnQkFDSixZQUFZLEVBQUU7b0JBQ1osaUJBQWlCO29CQUNqQixxQkFBcUI7b0JBQ3JCLGlCQUFpQjtvQkFDakIscUJBQXFCO29CQUNyQixpQkFBaUI7b0JBQ2pCLDBCQUEwQjtpQkFHM0I7Z0JBQ0QsU0FBUyxFQUFDLEVBQ1Q7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGlCQUFpQjtvQkFDbEIscUJBQXFCO2lCQUNyQjthQUNGOzt3RkFDWSxZQUFZLG1CQWhCckIsaUJBQWlCO1FBQ2pCLHFCQUFxQjtRQUNyQixpQkFBaUI7UUFDakIscUJBQXFCO1FBQ3JCLGlCQUFpQjtRQUNqQiwwQkFBMEIsYUFqQnpCLFlBQVk7UUFDWixXQUFXLG1CQUVYLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsV0FBVztRQUNYLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsZUFBZTtRQUNmLGNBQWMsYUFlZixpQkFBaUI7UUFDbEIscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3JkZXJzU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvb3JkZXJzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNeVByb2ZpbGVDaGVja091dENvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvbXktcHJvZmlsZS1jaGVja291dC9teS1wcm9maWxlLWNoZWNrb3V0LmNvbXBvbmVudCc7XHJcblxyXG5cclxuXHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQ2FydFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2NhcnQuc2VydmljZSc7XHJcbmltcG9ydCB7IENhcnRJY29uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NhcnQtaWNvbi9jYXJ0LWljb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQmFkZ2VNb2R1bGUgfSBmcm9tICdwcmltZW5nL2JhZGdlJztcclxuaW1wb3J0IHsgQnV0dG9uTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9idXR0b24nO1xyXG5pbXBvcnQgeyBJbnB1dE51bWJlck1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvaW5wdXRudW1iZXInO1xyXG5pbXBvcnQgeyBPcmRlclN1bW1hcnlDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvb3JkZXItc3VtbWFyeS9vcmRlci1zdW1tYXJ5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBDYXJ0UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvY2FydC1wYWdlL2NhcnQtcGFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDaGVja291dFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2NoZWNrb3V0LXBhZ2UvY2hlY2tvdXQtcGFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJbnB1dFRleHRNb2R1bGUgfSBmcm9tICdwcmltZW5nL2lucHV0dGV4dCc7XHJcbmltcG9ydCB7SW5wdXRNYXNrTW9kdWxlfSBmcm9tICdwcmltZW5nL2lucHV0bWFzayc7XHJcbmltcG9ydCB7RHJvcGRvd25Nb2R1bGV9IGZyb20gJ3ByaW1lbmcvZHJvcGRvd24nO1xyXG5pbXBvcnQgeyBUaGFua1lvdUNvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvdGhhbmsteW91L3RoYW5rLXlvdS5jb21wb25lbnQnXHJcbmltcG9ydCB7IEF1dGhHdWFyZCwgQXV0aEd1YXJkTm90QWRtaW4gfSBmcm9tICdAZXNob3AtZnJvbnRlbmQvdXNlcnMnO1xyXG5cclxuY29uc3Qgb3JkZXJzUm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAge3BhdGg6ICdjYXJ0JywgY29tcG9uZW50OiBDYXJ0UGFnZUNvbXBvbmVudH0sXHJcbiAge3BhdGg6ICdjaGVja291dCcsIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkTm90QWRtaW5dLCBjb21wb25lbnQ6IENoZWNrb3V0UGFnZUNvbXBvbmVudH0sXHJcbiAge3BhdGg6ICdzdWNjZXNzJywgY29tcG9uZW50OiBUaGFua1lvdUNvbXBvbmVudH1cclxuIF07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgICBDb21tb25Nb2R1bGUsXHJcbiAgICAgQmFkZ2VNb2R1bGUsXHJcbiAgICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKG9yZGVyc1JvdXRlcyksXHJcbiAgICAgQnV0dG9uTW9kdWxlLFxyXG4gICAgIElucHV0TnVtYmVyTW9kdWxlLFxyXG4gICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICAgSW5wdXRUZXh0TW9kdWxlLFxyXG4gICAgIElucHV0TWFza01vZHVsZSxcclxuICAgICBEcm9wZG93bk1vZHVsZSxcclxuICAgICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgQ2FydEljb25Db21wb25lbnQsXHJcbiAgICBPcmRlclN1bW1hcnlDb21wb25lbnQsXHJcbiAgICBDYXJ0UGFnZUNvbXBvbmVudCxcclxuICAgIENoZWNrb3V0UGFnZUNvbXBvbmVudCxcclxuICAgIFRoYW5rWW91Q29tcG9uZW50LFxyXG4gICAgTXlQcm9maWxlQ2hlY2tPdXRDb21wb25lbnRcclxuXHJcblxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOltcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIENhcnRJY29uQ29tcG9uZW50LFxyXG4gICBPcmRlclN1bW1hcnlDb21wb25lbnRcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgT3JkZXJzTW9kdWxlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlKSB7XHJcbiAgICBjYXJ0U2VydmljZS5pbml0Q2FydExvY2FsU3RvcmFnZSgpO1xyXG4gIH1cclxuXHJcblxyXG5cclxufVxyXG4iXX0=