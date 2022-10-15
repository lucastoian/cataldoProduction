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
            RouterModule.forChild(ordersRoutes),
            ButtonModule,
            InputNumberModule,
            FormsModule,
            ReactiveFormsModule,
            InputTextModule,
            InputMaskModule,
            ConfirmDialogModule,
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
                    ConfirmDialogModule,
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
        ConfirmDialogModule,
        DropdownModule], exports: [CartIconComponent,
        OrderSummaryComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpYnMvb3JkZXJzL3NyYy9saWIvb3JkZXJzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUl2RyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN0RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQTtBQUN6RSxPQUFPLEVBQWEsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seURBQXlELENBQUM7QUFDekYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzFFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDOzs7O0FBSzFELE1BQU0sWUFBWSxHQUFXO0lBQzNCLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUM7SUFDNUMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsU0FBUyxFQUFFLHFCQUFxQixFQUFDO0lBQ3RGLEVBQUMsSUFBSSxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBQztJQUN0RixFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFDO0lBQy9DLEVBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFDO0NBQ25ELENBQUM7QUF3Q0gsTUFBTSxPQUFPLFlBQVk7SUFFdkIsWUFBWSxXQUF3QjtRQUNsQyxXQUFXLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUNyQyxDQUFDOzt3RUFKVSxZQUFZOzhEQUFaLFlBQVk7bUVBVGI7UUFDUixFQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsb0JBQW9CLEVBQUM7S0FFNUQsWUEvQlE7WUFDTixZQUFZO1lBQ1osV0FBVztZQUNYLFlBQVksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDO1lBQ25DLFlBQVk7WUFDWixpQkFBaUI7WUFDakIsV0FBVztZQUNYLG1CQUFtQjtZQUNuQixlQUFlO1lBQ2YsZUFBZTtZQUNmLG1CQUFtQjtZQUNuQixjQUFjO1NBR2I7dUZBdUJPLFlBQVk7Y0F0Q3hCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ04sWUFBWTtvQkFDWixXQUFXO29CQUNYLFlBQVksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDO29CQUNuQyxZQUFZO29CQUNaLGlCQUFpQjtvQkFDakIsV0FBVztvQkFDWCxtQkFBbUI7b0JBQ25CLGVBQWU7b0JBQ2YsZUFBZTtvQkFDZixtQkFBbUI7b0JBQ25CLGNBQWM7aUJBR2I7Z0JBQ0osWUFBWSxFQUFFO29CQUNaLGlCQUFpQjtvQkFDakIscUJBQXFCO29CQUNyQixpQkFBaUI7b0JBQ2pCLHFCQUFxQjtvQkFDckIsaUJBQWlCO29CQUNqQiwwQkFBMEI7b0JBQzFCLGNBQWM7aUJBS2Y7Z0JBQ0QsU0FBUyxFQUFDO29CQUNSLEVBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxvQkFBb0IsRUFBQztpQkFFNUQ7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGlCQUFpQjtvQkFDbEIscUJBQXFCO2lCQUNyQjthQUNGOzt3RkFDWSxZQUFZLG1CQXJCckIsaUJBQWlCO1FBQ2pCLHFCQUFxQjtRQUNyQixpQkFBaUI7UUFDakIscUJBQXFCO1FBQ3JCLGlCQUFpQjtRQUNqQiwwQkFBMEI7UUFDMUIsY0FBYyxhQXJCYixZQUFZO1FBQ1osV0FBVyxtQkFFWCxZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsY0FBYyxhQXNCZixpQkFBaUI7UUFDbEIscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3JkZXJzU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvb3JkZXJzLnNlcnZpY2UnO1xuaW1wb3J0IHsgTXlQcm9maWxlQ2hlY2tPdXRDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL215LXByb2ZpbGUtY2hlY2tvdXQvbXktcHJvZmlsZS1jaGVja291dC5jb21wb25lbnQnO1xuXG5cblxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDYXJ0U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY2FydC5zZXJ2aWNlJztcbmltcG9ydCB7IENhcnRJY29uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NhcnQtaWNvbi9jYXJ0LWljb24uY29tcG9uZW50JztcbmltcG9ydCB7IEJhZGdlTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9iYWRnZSc7XG5pbXBvcnQgeyBCdXR0b25Nb2R1bGUgfSBmcm9tICdwcmltZW5nL2J1dHRvbic7XG5pbXBvcnQgeyBJbnB1dE51bWJlck1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvaW5wdXRudW1iZXInO1xuaW1wb3J0IHsgT3JkZXJTdW1tYXJ5Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL29yZGVyLXN1bW1hcnkvb3JkZXItc3VtbWFyeS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDYXJ0UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvY2FydC1wYWdlL2NhcnQtcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hlY2tvdXRQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9jaGVja291dC1wYWdlL2NoZWNrb3V0LXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IElucHV0VGV4dE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvaW5wdXR0ZXh0JztcbmltcG9ydCB7SW5wdXRNYXNrTW9kdWxlfSBmcm9tICdwcmltZW5nL2lucHV0bWFzayc7XG5pbXBvcnQge0Ryb3Bkb3duTW9kdWxlfSBmcm9tICdwcmltZW5nL2Ryb3Bkb3duJztcbmltcG9ydCB7IFRoYW5rWW91Q29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy90aGFuay15b3UvdGhhbmsteW91LmNvbXBvbmVudCdcbmltcG9ydCB7IEF1dGhHdWFyZCwgQXV0aEd1YXJkTm90QWRtaW4gfSBmcm9tICdAZXNob3AtZnJvbnRlbmQvdXNlcnMnO1xuaW1wb3J0IHsgSGFzaExvY2F0aW9uU3RyYXRlZ3ksIExvY2F0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUGF5bWVudE9wdGlvbnMgfSBmcm9tICcuL3BhZ2VzL2Nob29zZS1wYXltZW50LW9wdGlvbi9wYXltZW50LW9wdGlvbnMuY29tcG9uZW50JztcbmltcG9ydCB7IG9rS2xhcm5hUGF5bWVudCB9IGZyb20gJy4vcGFnZXMvb2tLbGFybmFQYXltZW50L29rS2xhcm5hUGF5bWVudCc7XG5pbXBvcnQge0NvbmZpcm1EaWFsb2dNb2R1bGV9IGZyb20gJ3ByaW1lbmcvY29uZmlybWRpYWxvZyc7XG5cblxuXG5cbmNvbnN0IG9yZGVyc1JvdXRlczogUm91dGVzID0gW1xuICB7cGF0aDogJ2NhcnQnLCBjb21wb25lbnQ6IENhcnRQYWdlQ29tcG9uZW50fSxcbiAge3BhdGg6ICdjaGVja291dCcsIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkTm90QWRtaW5dLCBjb21wb25lbnQ6IENoZWNrb3V0UGFnZUNvbXBvbmVudH0sXG4gIHtwYXRoOiAncGF5bWVudC9vcHRpb25zJywgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmROb3RBZG1pbl0sIGNvbXBvbmVudDogUGF5bWVudE9wdGlvbnN9LFxuICB7cGF0aDogJ3N1Y2Nlc3MnLCBjb21wb25lbnQ6IFRoYW5rWW91Q29tcG9uZW50fSxcbiAge3BhdGg6ICdrbGFybmFwYXltZW50JywgY29tcG9uZW50OiBva0tsYXJuYVBheW1lbnR9XG4gXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgICBDb21tb25Nb2R1bGUsXG4gICAgIEJhZGdlTW9kdWxlLFxuICAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQob3JkZXJzUm91dGVzKSxcbiAgICAgQnV0dG9uTW9kdWxlLFxuICAgICBJbnB1dE51bWJlck1vZHVsZSxcbiAgICAgRm9ybXNNb2R1bGUsXG4gICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgIElucHV0VGV4dE1vZHVsZSxcbiAgICAgSW5wdXRNYXNrTW9kdWxlLFxuICAgICBDb25maXJtRGlhbG9nTW9kdWxlLFxuICAgICBEcm9wZG93bk1vZHVsZSxcblxuICAgIFxuICAgICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBDYXJ0SWNvbkNvbXBvbmVudCxcbiAgICBPcmRlclN1bW1hcnlDb21wb25lbnQsXG4gICAgQ2FydFBhZ2VDb21wb25lbnQsXG4gICAgQ2hlY2tvdXRQYWdlQ29tcG9uZW50LFxuICAgIFRoYW5rWW91Q29tcG9uZW50LFxuICAgIE15UHJvZmlsZUNoZWNrT3V0Q29tcG9uZW50LFxuICAgIFBheW1lbnRPcHRpb25zXG4gIFxuXG5cblxuICBdLFxuICBwcm92aWRlcnM6W1xuICAgIHtwcm92aWRlOiBMb2NhdGlvblN0cmF0ZWd5LCB1c2VDbGFzczogSGFzaExvY2F0aW9uU3RyYXRlZ3l9LFxuICBcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIENhcnRJY29uQ29tcG9uZW50LFxuICAgT3JkZXJTdW1tYXJ5Q29tcG9uZW50XG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE9yZGVyc01vZHVsZSB7XG5cbiAgY29uc3RydWN0b3IoY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlKSB7XG4gICAgY2FydFNlcnZpY2UuaW5pdENhcnRMb2NhbFN0b3JhZ2UoKTtcbiAgfVxuXG5cblxufVxuIl19