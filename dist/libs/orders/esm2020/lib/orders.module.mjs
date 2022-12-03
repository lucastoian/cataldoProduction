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
import * as i0 from "@angular/core";
import * as i1 from "./services/cart.service";
import * as i2 from "@angular/router";
const ordersRoutes = [
    { path: 'cart', component: CartPageComponent },
    { path: 'checkout', canActivate: [AuthGuardNotAdmin], component: CheckoutPageComponent },
    { path: 'payment/options', canActivate: [AuthGuardNotAdmin], component: PaymentOptions },
    { path: 'success', component: ThankYouComponent },
    { path: 'klarnapayment', component: okKlarnaPayment }
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
        ConfirmDialogModule,
        DropdownModule,
        MessagesModule], exports: [CartIconComponent,
        OrderSummaryComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpYnMvb3JkZXJzL3NyYy9saWIvb3JkZXJzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUl2RyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN0RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQTtBQUN6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WyJpbXBvcnQgeyBPcmRlcnNTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9vcmRlcnMuc2VydmljZSc7XG5pbXBvcnQgeyBNeVByb2ZpbGVDaGVja091dENvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvbXktcHJvZmlsZS1jaGVja291dC9teS1wcm9maWxlLWNoZWNrb3V0LmNvbXBvbmVudCc7XG5cblxuXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENhcnRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9jYXJ0LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FydEljb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2FydC1pY29uL2NhcnQtaWNvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQmFkZ2VNb2R1bGUgfSBmcm9tICdwcmltZW5nL2JhZGdlJztcbmltcG9ydCB7IEJ1dHRvbk1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvYnV0dG9uJztcbmltcG9ydCB7IElucHV0TnVtYmVyTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9pbnB1dG51bWJlcic7XG5pbXBvcnQgeyBPcmRlclN1bW1hcnlDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvb3JkZXItc3VtbWFyeS9vcmRlci1zdW1tYXJ5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENhcnRQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9jYXJ0LXBhZ2UvY2FydC1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGVja291dFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2NoZWNrb3V0LXBhZ2UvY2hlY2tvdXQtcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW5wdXRUZXh0TW9kdWxlIH0gZnJvbSAncHJpbWVuZy9pbnB1dHRleHQnO1xuaW1wb3J0IHtJbnB1dE1hc2tNb2R1bGV9IGZyb20gJ3ByaW1lbmcvaW5wdXRtYXNrJztcbmltcG9ydCB7RHJvcGRvd25Nb2R1bGV9IGZyb20gJ3ByaW1lbmcvZHJvcGRvd24nO1xuaW1wb3J0IHsgVGhhbmtZb3VDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL3RoYW5rLXlvdS90aGFuay15b3UuY29tcG9uZW50J1xuaW1wb3J0IHsgQXV0aEd1YXJkLCBBdXRoR3VhcmROb3RBZG1pbiB9IGZyb20gJ0Blc2hvcC1mcm9udGVuZC91c2Vycyc7XG5pbXBvcnQgeyBIYXNoTG9jYXRpb25TdHJhdGVneSwgTG9jYXRpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBQYXltZW50T3B0aW9ucyB9IGZyb20gJy4vcGFnZXMvY2hvb3NlLXBheW1lbnQtb3B0aW9uL3BheW1lbnQtb3B0aW9ucy5jb21wb25lbnQnO1xuaW1wb3J0IHsgb2tLbGFybmFQYXltZW50IH0gZnJvbSAnLi9wYWdlcy9va0tsYXJuYVBheW1lbnQvb2tLbGFybmFQYXltZW50JztcbmltcG9ydCB7Q29uZmlybURpYWxvZ01vZHVsZX0gZnJvbSAncHJpbWVuZy9jb25maXJtZGlhbG9nJztcblxuaW1wb3J0IHtNZXNzYWdlc01vZHVsZX0gZnJvbSAncHJpbWVuZy9tZXNzYWdlcyc7XG5cblxuXG5cbmNvbnN0IG9yZGVyc1JvdXRlczogUm91dGVzID0gW1xuICB7cGF0aDogJ2NhcnQnLCBjb21wb25lbnQ6IENhcnRQYWdlQ29tcG9uZW50fSxcbiAge3BhdGg6ICdjaGVja291dCcsIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkTm90QWRtaW5dLCBjb21wb25lbnQ6IENoZWNrb3V0UGFnZUNvbXBvbmVudH0sXG4gIHtwYXRoOiAncGF5bWVudC9vcHRpb25zJywgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmROb3RBZG1pbl0sIGNvbXBvbmVudDogUGF5bWVudE9wdGlvbnN9LFxuICB7cGF0aDogJ3N1Y2Nlc3MnLCBjb21wb25lbnQ6IFRoYW5rWW91Q29tcG9uZW50fSxcbiAge3BhdGg6ICdrbGFybmFwYXltZW50JywgY29tcG9uZW50OiBva0tsYXJuYVBheW1lbnR9XG4gXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgICBDb21tb25Nb2R1bGUsXG4gICAgIEJhZGdlTW9kdWxlLFxuICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChvcmRlcnNSb3V0ZXMsIHtcbiAgICAgIHNjcm9sbFBvc2l0aW9uUmVzdG9yYXRpb246ICd0b3AnLCAvLyBBZGQgb3B0aW9ucyByaWdodCBoZXJlXG4gICAgfSksXG4gICAgIEJ1dHRvbk1vZHVsZSxcbiAgICAgSW5wdXROdW1iZXJNb2R1bGUsXG4gICAgIEZvcm1zTW9kdWxlLFxuICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgICBJbnB1dFRleHRNb2R1bGUsXG4gICAgIElucHV0TWFza01vZHVsZSxcbiAgICAgQ29uZmlybURpYWxvZ01vZHVsZSxcbiAgICAgRHJvcGRvd25Nb2R1bGUsXG4gICAgIE1lc3NhZ2VzTW9kdWxlXG5cbiAgICBcbiAgICAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQ2FydEljb25Db21wb25lbnQsXG4gICAgT3JkZXJTdW1tYXJ5Q29tcG9uZW50LFxuICAgIENhcnRQYWdlQ29tcG9uZW50LFxuICAgIENoZWNrb3V0UGFnZUNvbXBvbmVudCxcbiAgICBUaGFua1lvdUNvbXBvbmVudCxcbiAgICBNeVByb2ZpbGVDaGVja091dENvbXBvbmVudCxcbiAgICBQYXltZW50T3B0aW9uc1xuICBcblxuXG5cbiAgXSxcbiAgcHJvdmlkZXJzOltcbiAgICB7cHJvdmlkZTogTG9jYXRpb25TdHJhdGVneSwgdXNlQ2xhc3M6IEhhc2hMb2NhdGlvblN0cmF0ZWd5fSxcbiAgXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBDYXJ0SWNvbkNvbXBvbmVudCxcbiAgIE9yZGVyU3VtbWFyeUNvbXBvbmVudFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBPcmRlcnNNb2R1bGUge1xuXG4gIGNvbnN0cnVjdG9yKGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSkge1xuICAgIGNhcnRTZXJ2aWNlLmluaXRDYXJ0TG9jYWxTdG9yYWdlKCk7XG4gIH1cblxuXG5cbn1cbiJdfQ==