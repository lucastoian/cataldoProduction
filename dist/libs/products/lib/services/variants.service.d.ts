import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Variant } from "../models/variant";
import * as i0 from "@angular/core";
export declare class VariantsService {
    private http;
    apiUrlVariants: string;
    constructor(http: HttpClient);
    getVariants(): Observable<Variant[]>;
    getVariant(variantId: string): Observable<Variant>;
    getProdVariants(productId: any): Observable<Variant[]>;
    createVariant(variantData: FormData): Observable<Variant>;
    updateVariant(variantData: FormData, variantId: string): Observable<Variant>;
    deleteVariant(variantId: string): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<VariantsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<VariantsService>;
}
//# sourceMappingURL=variants.service.d.ts.map