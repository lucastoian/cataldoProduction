import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product123 } from '../models/product123';
import * as i0 from "@angular/core";
export declare class ProductsService {
    private http;
    private environment;
    private apiUrlProducts;
    constructor(http: HttpClient, environment: any);
    getProducts(categoriesFilter?: string[]): Observable<Product123[]>;
    getMProducts(categoriesFilter?: string[]): Observable<Product123[]>;
    getWProducts(categoriesFilter?: string[]): Observable<Product123[]>;
    getAllProductsByBrand(brandFilter?: string): Observable<Product123[]>;
    getAllMProductsByBrand(brandFilter?: string): Observable<Product123[]>;
    getAllWProductsByBrand(brandFilter?: string): Observable<Product123[]>;
    getMproductsFilteredByCategoryAndBrand(categoriesFilter?: string[], brandFilter?: string): Observable<Product123[]>;
    getWproductsFilteredByCategoryAndBrand(categoriesFilter?: string[], brandFilter?: string): Observable<Product123[]>;
    getProductsByBrand(brandId: string): Observable<Product123[]>;
    getWProductsByBrand(brandId: string): Observable<Product123[]>;
    getProduct(productId: string): Observable<Product123>;
    getProduct2(productId: string): Observable<any>;
    getProductByName(prodName: string): Observable<Product123[]>;
    createProduct(productData: FormData): Observable<Product123>;
    updateProduct(productData: FormData, productid: string): Observable<Product123>;
    updateProductWithVariant(productData: FormData, productid: string): Observable<Product123>;
    deleteProduct(productId: string): Observable<any>;
    getProductsCount(): Observable<number>;
    getFeaturedProducts(): Observable<Product123[]>;
    getFeaturedProductsByBrand(brand: string): Observable<Product123[]>;
    addGallery(productId: string, galleryFormData: FormData): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProductsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ProductsService>;
}
//# sourceMappingURL=products.service.d.ts.map