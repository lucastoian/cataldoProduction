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
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { PaymentOptions } from './pages/choose-payment-option/payment-options.component';
import * as i0 from "@angular/core";
import * as i1 from "./services/cart.service";
import * as i2 from "@angular/router";
const ordersRoutes = [
    { path: 'cart', component: CartPageComponent },
    { path: 'checkout', canActivate: [AuthGuardNotAdmin], component: CheckoutPageComponent },
    { path: 'payment/options', canActivate: [AuthGuardNotAdmin], component: PaymentOptions },
    { path: 'success', component: ThankYouComponent }
];
export class OrdersModule {
    constructor(cartService) {
        cartService.initCartLocalStorage();
    }
}
OrdersModule.ɵfac = function OrdersModule_Factory(t) { return new (t || OrdersModule)(i0.ɵɵinject(i1.CartService)); };
OrdersModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: OrdersModule });
OrdersModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
    ], imports: [[
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
                    MyProfileCheckOutComponent,
                    PaymentOptions
                ],
                providers: [
                    { provide: LocationStrategy, useClass: HashLocationStrategy },
                ],
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
        MyProfileCheckOutComponent,
        PaymentOptions], imports: [CommonModule,
        BadgeModule, i2.RouterModule, ButtonModule,
        InputNumberModule,
        FormsModule,
        ReactiveFormsModule,
        InputTextModule,
        InputMaskModule,
        DropdownModule], exports: [CartIconComponent,
        OrderSummaryComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpYnMvb3JkZXJzL3NyYy9saWIvb3JkZXJzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUl2RyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN0RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQTtBQUN6RSxPQUFPLEVBQWEsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seURBQXlELENBQUM7Ozs7QUFJekYsTUFBTSxZQUFZLEdBQVc7SUFDM0IsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBQztJQUM1QyxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLENBQUMsaUJBQWlCLENBQUMsRUFBRSxTQUFTLEVBQUUscUJBQXFCLEVBQUM7SUFDdEYsRUFBQyxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLENBQUMsaUJBQWlCLENBQUMsRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFDO0lBQ3RGLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUM7Q0FDL0MsQ0FBQztBQXVDSCxNQUFNLE9BQU8sWUFBWTtJQUV2QixZQUFZLFdBQXdCO1FBQ2xDLFdBQVcsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQ3JDLENBQUM7O3dFQUpVLFlBQVk7OERBQVosWUFBWTttRUFUYjtRQUNSLEVBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxvQkFBb0IsRUFBQztLQUU1RCxZQTlCUTtZQUNOLFlBQVk7WUFDWixXQUFXO1lBQ1gsWUFBWSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUM7WUFDbkMsWUFBWTtZQUNaLGlCQUFpQjtZQUNqQixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLGVBQWU7WUFDZixlQUFlO1lBQ2YsY0FBYztTQUdiO3VGQXVCTyxZQUFZO2NBckN4QixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNOLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxZQUFZLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQztvQkFDbkMsWUFBWTtvQkFDWixpQkFBaUI7b0JBQ2pCLFdBQVc7b0JBQ1gsbUJBQW1CO29CQUNuQixlQUFlO29CQUNmLGVBQWU7b0JBQ2YsY0FBYztpQkFHYjtnQkFDSixZQUFZLEVBQUU7b0JBQ1osaUJBQWlCO29CQUNqQixxQkFBcUI7b0JBQ3JCLGlCQUFpQjtvQkFDakIscUJBQXFCO29CQUNyQixpQkFBaUI7b0JBQ2pCLDBCQUEwQjtvQkFDMUIsY0FBYztpQkFLZjtnQkFDRCxTQUFTLEVBQUM7b0JBQ1IsRUFBQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLG9CQUFvQixFQUFDO2lCQUU1RDtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsaUJBQWlCO29CQUNsQixxQkFBcUI7aUJBQ3JCO2FBQ0Y7O3dGQUNZLFlBQVksbUJBckJyQixpQkFBaUI7UUFDakIscUJBQXFCO1FBQ3JCLGlCQUFpQjtRQUNqQixxQkFBcUI7UUFDckIsaUJBQWlCO1FBQ2pCLDBCQUEwQjtRQUMxQixjQUFjLGFBcEJiLFlBQVk7UUFDWixXQUFXLG1CQUVYLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsV0FBVztRQUNYLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsZUFBZTtRQUNmLGNBQWMsYUFzQmYsaUJBQWlCO1FBQ2xCLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9yZGVyc1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL29yZGVycy5zZXJ2aWNlJztcbmltcG9ydCB7IE15UHJvZmlsZUNoZWNrT3V0Q29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9teS1wcm9maWxlLWNoZWNrb3V0L215LXByb2ZpbGUtY2hlY2tvdXQuY29tcG9uZW50JztcblxuXG5cbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ2FydFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2NhcnQuc2VydmljZSc7XG5pbXBvcnQgeyBDYXJ0SWNvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jYXJ0LWljb24vY2FydC1pY29uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCYWRnZU1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvYmFkZ2UnO1xuaW1wb3J0IHsgQnV0dG9uTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9idXR0b24nO1xuaW1wb3J0IHsgSW5wdXROdW1iZXJNb2R1bGUgfSBmcm9tICdwcmltZW5nL2lucHV0bnVtYmVyJztcbmltcG9ydCB7IE9yZGVyU3VtbWFyeUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9vcmRlci1zdW1tYXJ5L29yZGVyLXN1bW1hcnkuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ2FydFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2NhcnQtcGFnZS9jYXJ0LXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IENoZWNrb3V0UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvY2hlY2tvdXQtcGFnZS9jaGVja291dC1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbnB1dFRleHRNb2R1bGUgfSBmcm9tICdwcmltZW5nL2lucHV0dGV4dCc7XG5pbXBvcnQge0lucHV0TWFza01vZHVsZX0gZnJvbSAncHJpbWVuZy9pbnB1dG1hc2snO1xuaW1wb3J0IHtEcm9wZG93bk1vZHVsZX0gZnJvbSAncHJpbWVuZy9kcm9wZG93bic7XG5pbXBvcnQgeyBUaGFua1lvdUNvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvdGhhbmsteW91L3RoYW5rLXlvdS5jb21wb25lbnQnXG5pbXBvcnQgeyBBdXRoR3VhcmQsIEF1dGhHdWFyZE5vdEFkbWluIH0gZnJvbSAnQGVzaG9wLWZyb250ZW5kL3VzZXJzJztcbmltcG9ydCB7IEhhc2hMb2NhdGlvblN0cmF0ZWd5LCBMb2NhdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFBheW1lbnRPcHRpb25zIH0gZnJvbSAnLi9wYWdlcy9jaG9vc2UtcGF5bWVudC1vcHRpb24vcGF5bWVudC1vcHRpb25zLmNvbXBvbmVudCc7XG5cblxuXG5jb25zdCBvcmRlcnNSb3V0ZXM6IFJvdXRlcyA9IFtcbiAge3BhdGg6ICdjYXJ0JywgY29tcG9uZW50OiBDYXJ0UGFnZUNvbXBvbmVudH0sXG4gIHtwYXRoOiAnY2hlY2tvdXQnLCBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZE5vdEFkbWluXSwgY29tcG9uZW50OiBDaGVja291dFBhZ2VDb21wb25lbnR9LFxuICB7cGF0aDogJ3BheW1lbnQvb3B0aW9ucycsIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkTm90QWRtaW5dLCBjb21wb25lbnQ6IFBheW1lbnRPcHRpb25zfSxcbiAge3BhdGg6ICdzdWNjZXNzJywgY29tcG9uZW50OiBUaGFua1lvdUNvbXBvbmVudH1cbiBdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgIENvbW1vbk1vZHVsZSxcbiAgICAgQmFkZ2VNb2R1bGUsXG4gICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChvcmRlcnNSb3V0ZXMpLFxuICAgICBCdXR0b25Nb2R1bGUsXG4gICAgIElucHV0TnVtYmVyTW9kdWxlLFxuICAgICBGb3Jtc01vZHVsZSxcbiAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICAgSW5wdXRUZXh0TW9kdWxlLFxuICAgICBJbnB1dE1hc2tNb2R1bGUsXG4gICAgIERyb3Bkb3duTW9kdWxlLFxuXG4gICAgXG4gICAgIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIENhcnRJY29uQ29tcG9uZW50LFxuICAgIE9yZGVyU3VtbWFyeUNvbXBvbmVudCxcbiAgICBDYXJ0UGFnZUNvbXBvbmVudCxcbiAgICBDaGVja291dFBhZ2VDb21wb25lbnQsXG4gICAgVGhhbmtZb3VDb21wb25lbnQsXG4gICAgTXlQcm9maWxlQ2hlY2tPdXRDb21wb25lbnQsXG4gICAgUGF5bWVudE9wdGlvbnNcbiAgXG5cblxuXG4gIF0sXG4gIHByb3ZpZGVyczpbXG4gICAge3Byb3ZpZGU6IExvY2F0aW9uU3RyYXRlZ3ksIHVzZUNsYXNzOiBIYXNoTG9jYXRpb25TdHJhdGVneX0sXG4gIFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQ2FydEljb25Db21wb25lbnQsXG4gICBPcmRlclN1bW1hcnlDb21wb25lbnRcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJzTW9kdWxlIHtcblxuICBjb25zdHJ1Y3RvcihjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UpIHtcbiAgICBjYXJ0U2VydmljZS5pbml0Q2FydExvY2FsU3RvcmFnZSgpO1xuICB9XG5cblxuXG59XG4iXX0=