import { User } from './user';
import { ProductVariant } from './productVariant';
export declare class Order {
    id?: string;
    orderItems?: ProductVariant[];
    shippingAddress1?: string;
    shippingAddress2?: string;
    city?: string;
    zip?: string;
    country?: string;
    phone?: string;
    status?: number;
    totalPrice?: string;
    user?: User;
    dateOrdered?: string;
}
//# sourceMappingURL=order.d.ts.map