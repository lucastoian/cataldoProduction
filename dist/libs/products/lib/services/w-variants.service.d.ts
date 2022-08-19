import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { W_Variant } from "../models/w-variant";
import * as i0 from "@angular/core";
export declare class W_VariantsService {
    private http;
    private environment;
    private apiUrlW_Variants;
    constructor(http: HttpClient, environment: any);
    getW_Variants(): Observable<W_Variant[]>;
    getW_Variant(variantId: string): Observable<W_Variant>;
    getProdW_Variants(productId: any): Observable<W_Variant[]>;
    createW_Variant(variantData: FormData): Observable<W_Variant>;
    updateW_Variant(variantData: FormData, variantId: string): Observable<W_Variant>;
    deleteW_Variant(variantId: string): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<W_VariantsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<W_VariantsService>;
}
//# sourceMappingURL=w-variants.service.d.ts.map