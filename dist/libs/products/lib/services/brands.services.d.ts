import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import * as i0 from "@angular/core";
export declare class BrandsService {
    private http;
    apiUrlBrands: string;
    constructor(http: HttpClient);
    getBrands(): Observable<Brand[]>;
    getBrand(brandId: string): Observable<Brand>;
    getBrandByName(brandName: string): Observable<Brand>;
    createBrand(brandData: FormData): Observable<Brand>;
    updateBrand(brandData: FormData, brandId: string): Observable<Brand>;
    deleteBrand(brandId: string): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<BrandsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<BrandsService>;
}
//# sourceMappingURL=brands.services.d.ts.map