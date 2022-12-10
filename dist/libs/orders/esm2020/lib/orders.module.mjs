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
import { okKlarnaPayment } from './pages/okKlarnaPayment/okKlarnaPayment';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessagesModule } from 'primeng/messages';
import { PaypalComponent } from './paypal/paypal.component';
import { NgxPayPalModule } from 'ngx-paypal';
import * as i0 from "@angular/core";
import * as i1 from "./services/cart.service";
import * as i2 from "@angular/router";
const ordersRoutes = [
    { path: 'cart', component: CartPageComponent },
    { path: 'checkout', canActivate: [AuthGuardNotAdmin], component: CheckoutPageComponent },
    { path: 'payment/options', canActivate: [AuthGuardNotAdmin], component: PaymentOptions },
    { path: 'success', component: ThankYouComponent },
    { path: 'klarnapayment', component: okKlarnaPayment },
    { path: 'paypal', component: PaypalComponent }
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
            NgxPayPalModule,
            RouterModule.forRoot(ordersRoutes, {
                scrollPositionRestoration: 'top', // Add options right here
            }),
            ButtonModule,
            InputNumberModule,
            FormsModule,
            ReactiveFormsModule,
            InputTextModule,
            InputMaskModule,
            ConfirmDialogModule,
            DropdownModule,
            MessagesModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OrdersModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    BadgeModule,
                    NgxPayPalModule,
                    RouterModule.forRoot(ordersRoutes, {
                        scrollPositionRestoration: 'top', // Add options right here
                    }),
                    ButtonModule,
                    InputNumberModule,
                    FormsModule,
                    ReactiveFormsModule,
                    InputTextModule,
                    InputMaskModule,
                    ConfirmDialogModule,
                    DropdownModule,
                    MessagesModule
                ],
                declarations: [
                    CartIconComponent,
                    OrderSummaryComponent,
                    CartPageComponent,
                    CheckoutPageComponent,
                    ThankYouComponent,
                    MyProfileCheckOutComponent,
                    PaymentOptions,
                    PaypalComponent,
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
        PaymentOptions,
        PaypalComponent], imports: [CommonModule,
        BadgeModule,
        NgxPayPalModule, i2.RouterModule, ButtonModule,
        InputNumberModule,
        FormsModule,
        ReactiveFormsModule,
        InputTextModule,
        InputMaskModule,
        ConfirmDialogModule,
        DropdownModule,
        MessagesModule], exports: [CartIconComponent,
        OrderSummaryComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpYnMvb3JkZXJzL3NyYy9saWIvb3JkZXJzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUl2RyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN0RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQTtBQUN6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QWM7UUFDZCxlQUFlLGFBMUJkLFlBQVk7UUFDWixXQUFXO1FBQ1gsZUFBZSxtQkFJZixZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsY0FBYztRQUNkLGNBQWMsYUF3QmYsaUJBQWlCO1FBQ2xCLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9yZGVyc1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL29yZGVycy5zZXJ2aWNlJztcbmltcG9ydCB7IE15UHJvZmlsZUNoZWNrT3V0Q29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9teS1wcm9maWxlLWNoZWNrb3V0L215LXByb2ZpbGUtY2hlY2tvdXQuY29tcG9uZW50JztcblxuXG5cbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ2FydFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2NhcnQuc2VydmljZSc7XG5pbXBvcnQgeyBDYXJ0SWNvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jYXJ0LWljb24vY2FydC1pY29uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCYWRnZU1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvYmFkZ2UnO1xuaW1wb3J0IHsgQnV0dG9uTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9idXR0b24nO1xuaW1wb3J0IHsgSW5wdXROdW1iZXJNb2R1bGUgfSBmcm9tICdwcmltZW5nL2lucHV0bnVtYmVyJztcbmltcG9ydCB7IE9yZGVyU3VtbWFyeUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9vcmRlci1zdW1tYXJ5L29yZGVyLXN1bW1hcnkuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ2FydFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2NhcnQtcGFnZS9jYXJ0LXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IENoZWNrb3V0UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvY2hlY2tvdXQtcGFnZS9jaGVja291dC1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbnB1dFRleHRNb2R1bGUgfSBmcm9tICdwcmltZW5nL2lucHV0dGV4dCc7XG5pbXBvcnQge0lucHV0TWFza01vZHVsZX0gZnJvbSAncHJpbWVuZy9pbnB1dG1hc2snO1xuaW1wb3J0IHtEcm9wZG93bk1vZHVsZX0gZnJvbSAncHJpbWVuZy9kcm9wZG93bic7XG5pbXBvcnQgeyBUaGFua1lvdUNvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvdGhhbmsteW91L3RoYW5rLXlvdS5jb21wb25lbnQnXG5pbXBvcnQgeyBBdXRoR3VhcmQsIEF1dGhHdWFyZE5vdEFkbWluIH0gZnJvbSAnQGVzaG9wLWZyb250ZW5kL3VzZXJzJztcbmltcG9ydCB7IEhhc2hMb2NhdGlvblN0cmF0ZWd5LCBMb2NhdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFBheW1lbnRPcHRpb25zIH0gZnJvbSAnLi9wYWdlcy9jaG9vc2UtcGF5bWVudC1vcHRpb24vcGF5bWVudC1vcHRpb25zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBva0tsYXJuYVBheW1lbnQgfSBmcm9tICcuL3BhZ2VzL29rS2xhcm5hUGF5bWVudC9va0tsYXJuYVBheW1lbnQnO1xuaW1wb3J0IHtDb25maXJtRGlhbG9nTW9kdWxlfSBmcm9tICdwcmltZW5nL2NvbmZpcm1kaWFsb2cnO1xuXG5pbXBvcnQge01lc3NhZ2VzTW9kdWxlfSBmcm9tICdwcmltZW5nL21lc3NhZ2VzJztcbmltcG9ydCB7IFBheXBhbENvbXBvbmVudCB9IGZyb20gJy4vcGF5cGFsL3BheXBhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4UGF5UGFsTW9kdWxlIH0gZnJvbSAnbmd4LXBheXBhbCc7XG5cblxuXG5cblxuY29uc3Qgb3JkZXJzUm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtwYXRoOiAnY2FydCcsIGNvbXBvbmVudDogQ2FydFBhZ2VDb21wb25lbnR9LFxuICB7cGF0aDogJ2NoZWNrb3V0JywgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmROb3RBZG1pbl0sIGNvbXBvbmVudDogQ2hlY2tvdXRQYWdlQ29tcG9uZW50fSxcbiAge3BhdGg6ICdwYXltZW50L29wdGlvbnMnLCBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZE5vdEFkbWluXSwgY29tcG9uZW50OiBQYXltZW50T3B0aW9uc30sXG4gIHtwYXRoOiAnc3VjY2VzcycsIGNvbXBvbmVudDogVGhhbmtZb3VDb21wb25lbnR9LFxuICB7cGF0aDogJ2tsYXJuYXBheW1lbnQnLCBjb21wb25lbnQ6IG9rS2xhcm5hUGF5bWVudH0sXG4gIHtwYXRoOiAncGF5cGFsJywgY29tcG9uZW50OiBQYXlwYWxDb21wb25lbnR9XG4gXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgICBDb21tb25Nb2R1bGUsXG4gICAgIEJhZGdlTW9kdWxlLFxuICAgICBOZ3hQYXlQYWxNb2R1bGUsXG4gICAgIFJvdXRlck1vZHVsZS5mb3JSb290KG9yZGVyc1JvdXRlcywge1xuICAgICAgc2Nyb2xsUG9zaXRpb25SZXN0b3JhdGlvbjogJ3RvcCcsIC8vIEFkZCBvcHRpb25zIHJpZ2h0IGhlcmVcbiAgICB9KSxcbiAgICAgQnV0dG9uTW9kdWxlLFxuICAgICBJbnB1dE51bWJlck1vZHVsZSxcbiAgICAgRm9ybXNNb2R1bGUsXG4gICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgIElucHV0VGV4dE1vZHVsZSxcbiAgICAgSW5wdXRNYXNrTW9kdWxlLFxuICAgICBDb25maXJtRGlhbG9nTW9kdWxlLFxuICAgICBEcm9wZG93bk1vZHVsZSxcbiAgICAgTWVzc2FnZXNNb2R1bGVcblxuICAgIFxuICAgICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBDYXJ0SWNvbkNvbXBvbmVudCxcbiAgICBPcmRlclN1bW1hcnlDb21wb25lbnQsXG4gICAgQ2FydFBhZ2VDb21wb25lbnQsXG4gICAgQ2hlY2tvdXRQYWdlQ29tcG9uZW50LFxuICAgIFRoYW5rWW91Q29tcG9uZW50LFxuICAgIE15UHJvZmlsZUNoZWNrT3V0Q29tcG9uZW50LFxuICAgIFBheW1lbnRPcHRpb25zLFxuICAgIFBheXBhbENvbXBvbmVudCxcblxuICBcblxuXG5cbiAgXSxcbiAgcHJvdmlkZXJzOltcbiAgICB7cHJvdmlkZTogTG9jYXRpb25TdHJhdGVneSwgdXNlQ2xhc3M6IEhhc2hMb2NhdGlvblN0cmF0ZWd5fSxcbiAgXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBDYXJ0SWNvbkNvbXBvbmVudCxcbiAgIE9yZGVyU3VtbWFyeUNvbXBvbmVudFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBPcmRlcnNNb2R1bGUge1xuXG4gIGNvbnN0cnVjdG9yKGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSkge1xuICAgIGNhcnRTZXJ2aWNlLmluaXRDYXJ0TG9jYWxTdG9yYWdlKCk7XG4gIH1cblxuXG5cbn1cbiJdfQ==