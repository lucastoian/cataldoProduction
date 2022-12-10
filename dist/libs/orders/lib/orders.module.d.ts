import { CartService } from './services/cart.service';
import * as i0 from "@angular/core";
import * as i1 from "./components/cart-icon/cart-icon.component";
import * as i2 from "./components/order-summary/order-summary.component";
import * as i3 from "./pages/cart-page/cart-page.component";
import * as i4 from "./pages/checkout-page/checkout-page.component";
import * as i5 from "./pages/thank-you/thank-you.component";
import * as i6 from "./pages/my-profile-checkout/my-profile-checkout.component";
import * as i7 from "./pages/choose-payment-option/payment-options.component";
import * as i8 from "./paypal/paypal.component";
import * as i9 from "@angular/common";
import * as i10 from "primeng/badge";
import * as i11 from "ngx-paypal";
import * as i12 from "@angular/router";
import * as i13 from "primeng/button";
import * as i14 from "primeng/inputnumber";
import * as i15 from "@angular/forms";
import * as i16 from "primeng/inputtext";
import * as i17 from "primeng/inputmask";
import * as i18 from "primeng/confirmdialog";
import * as i19 from "primeng/dropdown";
import * as i20 from "primeng/messages";
export declare class OrdersModule {
    constructor(cartService: CartService);
    static ɵfac: i0.ɵɵFactoryDeclaration<OrdersModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<OrdersModule, [typeof i1.CartIconComponent, typeof i2.OrderSummaryComponent, typeof i3.CartPageComponent, typeof i4.CheckoutPageComponent, typeof i5.ThankYouComponent, typeof i6.MyProfileCheckOutComponent, typeof i7.PaymentOptions, typeof i8.PaypalComponent], [typeof i9.CommonModule, typeof i10.BadgeModule, typeof i11.NgxPayPalModule, typeof i12.RouterModule, typeof i13.ButtonModule, typeof i14.InputNumberModule, typeof i15.FormsModule, typeof i15.ReactiveFormsModule, typeof i16.InputTextModule, typeof i17.InputMaskModule, typeof i18.ConfirmDialogModule, typeof i19.DropdownModule, typeof i20.MessagesModule], [typeof i1.CartIconComponent, typeof i2.OrderSummaryComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<OrdersModule>;
}
//# sourceMappingURL=orders.module.d.ts.map