import { User } from './user';
import { ProductVariant } from '@eshop-frontend/users';
export declare class Order {
    id?: string;
    orderItems?: ProductVariant[];
    shippingAddress1?: string;
    shippingAddress2?: string;
    city?: string;
    zip?: string;
    country?: string;
    phone?: string;
    prefix?: string;
    status?: number;
    totalPrice?: string;
    user?: User;
    dateOrdered?: string;
    email: string;
    paymentOption: string;
    confirmed: boolean;
}
//# sourceMappingURL=order.d.ts.map