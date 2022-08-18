import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import * as i0 from "@angular/core";
export declare class CategoriesService {
    private http;
    apiUrlCategories: string;
    constructor(http: HttpClient);
    getCategories(): Observable<Category[]>;
    getCategory(categoryId: string): Observable<Category>;
    createCategory(category: Category): Observable<Category>;
    updateCategory(category: Category): Observable<Category>;
    deleteCategory(categoryId: string): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CategoriesService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CategoriesService>;
}
//# sourceMappingURL=categories.service.d.ts.map