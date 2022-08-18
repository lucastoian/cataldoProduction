import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { W_Product } from '../models/w-product';
import * as i0 from "@angular/core";
export declare class W_ProductsService {
    private http;
    apiUrlW_Products: string;
    constructor(http: HttpClient);
    getWProducts(categoriesFilter?: string[]): Observable<W_Product[]>;
    getProductByName(prodName: string): Observable<W_Product[]>;
    getWProduct(productId: string): Observable<W_Product>;
    updateWProduct(productData: FormData, productid: string): Observable<W_Product>;
    createProduct(productData: FormData): Observable<W_Product>;
    deleteWProduct(productId: string): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<W_ProductsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<W_ProductsService>;
}
//# sourceMappingURL=w-products.service.d.ts.map