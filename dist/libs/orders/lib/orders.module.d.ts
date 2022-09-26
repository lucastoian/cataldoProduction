import { CartService } from './services/cart.service';
import * as i0 from "@angular/core";
import * as i1 from "./components/cart-icon/cart-icon.component";
import * as i2 from "./components/order-summary/order-summary.component";
import * as i3 from "./pages/cart-page/cart-page.component";
import * as i4 from "./pages/checkout-page/checkout-page.component";
import * as i5 from "./pages/thank-you/thank-you.component";
import * as i6 from "./pages/my-profile-checkout/my-profile-checkout.component";
import * as i7 from "./pages/choose-payment-option/payment-options.component";
import * as i8 from "@angular/common";
import * as i9 from "primeng/badge";
import * as i10 from "@angular/router";
import * as i11 from "primeng/button";
import * as i12 from "primeng/inputnumber";
import * as i13 from "@angular/forms";
import * as i14 from "primeng/inputtext";
import * as i15 from "primeng/inputmask";
import * as i16 from "primeng/dropdown";
export declare class OrdersModule {
    constructor(cartService: CartService);
    static ɵfac: i0.ɵɵFactoryDeclaration<OrdersModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<OrdersModule, [typeof i1.CartIconComponent, typeof i2.OrderSummaryComponent, typeof i3.CartPageComponent, typeof i4.CheckoutPageComponent, typeof i5.ThankYouComponent, typeof i6.MyProfileCheckOutComponent, typeof i7.PaymentOptions], [typeof i8.CommonModule, typeof i9.BadgeModule, typeof i10.RouterModule, typeof i11.ButtonModule, typeof i12.InputNumberModule, typeof i13.FormsModule, typeof i13.ReactiveFormsModule, typeof i14.InputTextModule, typeof i15.InputMaskModule, typeof i16.DropdownModule], [typeof i1.CartIconComponent, typeof i2.OrderSummaryComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<OrdersModule>;
}
//# sourceMappingURL=orders.module.d.ts.map