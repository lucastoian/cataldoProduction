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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpYnMvb3JkZXJzL3NyYy9saWIvb3JkZXJzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUl2RyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN0RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQTtBQUN6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WyJpbXBvcnQgeyBPcmRlcnNTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9vcmRlcnMuc2VydmljZSc7XHJcbmltcG9ydCB7IE15UHJvZmlsZUNoZWNrT3V0Q29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9teS1wcm9maWxlLWNoZWNrb3V0L215LXByb2ZpbGUtY2hlY2tvdXQuY29tcG9uZW50JztcclxuXHJcblxyXG5cclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBDYXJ0U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY2FydC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ2FydEljb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2FydC1pY29uL2NhcnQtaWNvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCYWRnZU1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvYmFkZ2UnO1xyXG5pbXBvcnQgeyBCdXR0b25Nb2R1bGUgfSBmcm9tICdwcmltZW5nL2J1dHRvbic7XHJcbmltcG9ydCB7IElucHV0TnVtYmVyTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9pbnB1dG51bWJlcic7XHJcbmltcG9ydCB7IE9yZGVyU3VtbWFyeUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9vcmRlci1zdW1tYXJ5L29yZGVyLXN1bW1hcnkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IENhcnRQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9jYXJ0LXBhZ2UvY2FydC1wYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENoZWNrb3V0UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvY2hlY2tvdXQtcGFnZS9jaGVja291dC1wYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IElucHV0VGV4dE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvaW5wdXR0ZXh0JztcclxuaW1wb3J0IHtJbnB1dE1hc2tNb2R1bGV9IGZyb20gJ3ByaW1lbmcvaW5wdXRtYXNrJztcclxuaW1wb3J0IHtEcm9wZG93bk1vZHVsZX0gZnJvbSAncHJpbWVuZy9kcm9wZG93bic7XHJcbmltcG9ydCB7IFRoYW5rWW91Q29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy90aGFuay15b3UvdGhhbmsteW91LmNvbXBvbmVudCdcclxuaW1wb3J0IHsgQXV0aEd1YXJkLCBBdXRoR3VhcmROb3RBZG1pbiB9IGZyb20gJ0Blc2hvcC1mcm9udGVuZC91c2Vycyc7XHJcbmltcG9ydCB7IEhhc2hMb2NhdGlvblN0cmF0ZWd5LCBMb2NhdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgUGF5bWVudE9wdGlvbnMgfSBmcm9tICcuL3BhZ2VzL2Nob29zZS1wYXltZW50LW9wdGlvbi9wYXltZW50LW9wdGlvbnMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgb2tLbGFybmFQYXltZW50IH0gZnJvbSAnLi9wYWdlcy9va0tsYXJuYVBheW1lbnQvb2tLbGFybmFQYXltZW50JztcclxuaW1wb3J0IHtDb25maXJtRGlhbG9nTW9kdWxlfSBmcm9tICdwcmltZW5nL2NvbmZpcm1kaWFsb2cnO1xyXG5cclxuaW1wb3J0IHtNZXNzYWdlc01vZHVsZX0gZnJvbSAncHJpbWVuZy9tZXNzYWdlcyc7XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBvcmRlcnNSb3V0ZXM6IFJvdXRlcyA9IFtcclxuICB7cGF0aDogJ2NhcnQnLCBjb21wb25lbnQ6IENhcnRQYWdlQ29tcG9uZW50fSxcclxuICB7cGF0aDogJ2NoZWNrb3V0JywgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmROb3RBZG1pbl0sIGNvbXBvbmVudDogQ2hlY2tvdXRQYWdlQ29tcG9uZW50fSxcclxuICB7cGF0aDogJ3BheW1lbnQvb3B0aW9ucycsIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkTm90QWRtaW5dLCBjb21wb25lbnQ6IFBheW1lbnRPcHRpb25zfSxcclxuICB7cGF0aDogJ3N1Y2Nlc3MnLCBjb21wb25lbnQ6IFRoYW5rWW91Q29tcG9uZW50fSxcclxuICB7cGF0aDogJ2tsYXJuYXBheW1lbnQnLCBjb21wb25lbnQ6IG9rS2xhcm5hUGF5bWVudH1cclxuIF07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgICBDb21tb25Nb2R1bGUsXHJcbiAgICAgQmFkZ2VNb2R1bGUsXHJcbiAgICAgUm91dGVyTW9kdWxlLmZvclJvb3Qob3JkZXJzUm91dGVzLCB7XHJcbiAgICAgIHNjcm9sbFBvc2l0aW9uUmVzdG9yYXRpb246ICd0b3AnLCAvLyBBZGQgb3B0aW9ucyByaWdodCBoZXJlXHJcbiAgICB9KSxcclxuICAgICBCdXR0b25Nb2R1bGUsXHJcbiAgICAgSW5wdXROdW1iZXJNb2R1bGUsXHJcbiAgICAgRm9ybXNNb2R1bGUsXHJcbiAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICAgICBJbnB1dFRleHRNb2R1bGUsXHJcbiAgICAgSW5wdXRNYXNrTW9kdWxlLFxyXG4gICAgIENvbmZpcm1EaWFsb2dNb2R1bGUsXHJcbiAgICAgRHJvcGRvd25Nb2R1bGUsXHJcbiAgICAgTWVzc2FnZXNNb2R1bGVcclxuXHJcbiAgICBcclxuICAgICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgQ2FydEljb25Db21wb25lbnQsXHJcbiAgICBPcmRlclN1bW1hcnlDb21wb25lbnQsXHJcbiAgICBDYXJ0UGFnZUNvbXBvbmVudCxcclxuICAgIENoZWNrb3V0UGFnZUNvbXBvbmVudCxcclxuICAgIFRoYW5rWW91Q29tcG9uZW50LFxyXG4gICAgTXlQcm9maWxlQ2hlY2tPdXRDb21wb25lbnQsXHJcbiAgICBQYXltZW50T3B0aW9uc1xyXG4gIFxyXG5cclxuXHJcblxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOltcclxuICAgIHtwcm92aWRlOiBMb2NhdGlvblN0cmF0ZWd5LCB1c2VDbGFzczogSGFzaExvY2F0aW9uU3RyYXRlZ3l9LFxyXG4gIFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgQ2FydEljb25Db21wb25lbnQsXHJcbiAgIE9yZGVyU3VtbWFyeUNvbXBvbmVudFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPcmRlcnNNb2R1bGUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UpIHtcclxuICAgIGNhcnRTZXJ2aWNlLmluaXRDYXJ0TG9jYWxTdG9yYWdlKCk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG59XHJcbiJdfQ==