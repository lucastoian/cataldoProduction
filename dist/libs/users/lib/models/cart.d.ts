import { Observable } from 'rxjs';
import { ProductLuca } from './ProductLuca';
import { ProductVariant } from './productVariant';
import * as i0 from "@angular/core";
export declare class Cart {
    private products;
    private items;
    constructor();
    addProductLuca(ProductLuca: ProductLuca): void;
    emptyCart(): void;
    getproducts(): ProductLuca[];
    getproductsSize(): number;
    getProduct(index: number): ProductLuca;
    getJson(): string;
    getProductById(id: string): ProductLuca;
    getVariantById(id: string): ProductVariant;
    getProductByVariantId(id: string): ProductLuca;
    updateLocalStorage(): void;
    static generateCartFromLocalStorage(): Cart;
    containsProduct(product: ProductLuca): boolean;
    getProductIndex(product: ProductLuca): number;
    getAllVariants(): ProductVariant[];
    getItems(): Observable<number>;
    getTotalNumberOfItems(): number;
    getTotalPrice(): number;
    deleteProductVariant(product: ProductVariant): void;
    getTotalNumberOfVariantsOfASingleProductByIdOfAVariant(id: string): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<Cart, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<Cart>;
}
//# sourceMappingURL=cart.d.ts.map