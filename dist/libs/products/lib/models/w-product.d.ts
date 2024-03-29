import { Category } from "./category";
import { Variant } from "./variant";
export declare class W_Product {
    id: string;
    name?: string;
    description?: string;
    category?: Category;
    sex?: string;
    image?: string;
    images?: string[];
    brand?: string;
    price?: number;
    isFeatured?: boolean;
    rating?: number;
    color?: string;
    discount?: number;
    factoryCode: string;
    variants?: Variant[];
}
//# sourceMappingURL=w-product.d.ts.map