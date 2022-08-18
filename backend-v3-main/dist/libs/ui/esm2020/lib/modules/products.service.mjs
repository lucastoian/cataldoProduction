import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class ProductsService {
    constructor(http) {
        this.http = http;
        this.apiUrlProducts = 'http://localhost:3000/api/v1/' + 'products';
    }
    // BASIC
    // Get all products in the database - optional category query params
    getProducts(categoriesFilter) {
        let params = new HttpParams();
        if (categoriesFilter) {
            params = params.append('categories', categoriesFilter.join(','));
            console.log(params);
        }
        return this.http.get(this.apiUrlProducts, { params: params });
    }
    // SEX FILTER
    // Get products for men - optional categories query params
    getMProducts(categoriesFilter) {
        let params = new HttpParams();
        if (categoriesFilter) {
            params = params.append('categories', categoriesFilter.join(','));
            console.log(params);
        }
        return this.http.get(`${this.apiUrlProducts}/get/men-prods`, {
            params: params,
        });
    }
    // Get products for women - optional categories query params
    getWProducts(categoriesFilter) {
        let params = new HttpParams();
        if (categoriesFilter) {
            params = params.append('categories', categoriesFilter.join(','));
        }
        return this.http.get(`${this.apiUrlProducts}/get/women-prods`, {
            params: params,
        });
    }
    getAllProductsByBrand(brandFilter) {
        let params = new HttpParams();
        if (brandFilter) {
            params = params.append('brand', brandFilter);
        }
        return this.http.get(`${this.apiUrlProducts}/get/brand/all`, {
            params: params,
        });
    }
    getAllMProductsByBrand(brandFilter) {
        let params = new HttpParams();
        if (brandFilter) {
            params = params.append('brand', brandFilter);
        }
        return this.http.get(`${this.apiUrlProducts}/get/brand/men`, {
            params: params,
        });
    }
    getAllWProductsByBrand(brandFilter) {
        let params = new HttpParams();
        if (brandFilter) {
            params = params.append('brand', brandFilter);
        }
        return this.http.get(`${this.apiUrlProducts}/get/brand/women`, {
            params: params,
        });
    }
    // Get products for men - optional categories & brand query params
    getMproductsFilteredByCategoryAndBrand(categoriesFilter, brandFilter) {
        let params = new HttpParams();
        if (categoriesFilter) {
            params = params.append('categories', categoriesFilter.join(','));
        }
        if (brandFilter) {
            params = params.append('brand', brandFilter);
        }
        return this.http.get(`${this.apiUrlProducts}/get/brand-and-category/men`, {
            params: params,
        });
    }
    // Get products for women - optional categories & brand query params
    getWproductsFilteredByCategoryAndBrand(categoriesFilter, brandFilter) {
        let params = new HttpParams();
        if (categoriesFilter) {
            params = params.append('categories', categoriesFilter.join(','));
        }
        if (brandFilter) {
            params = params.append('brand', brandFilter);
        }
        return this.http.get(`${this.apiUrlProducts}/get/brand-and-category/women`, { params: params });
    }
    // Get all products filtered by brand only.
    getProductsByBrand(brandId) {
        return this.http.get(`${this.apiUrlProducts}/brand/${brandId}`);
    }
    getWProductsByBrand(brandId) {
        return this.http.get(`${this.apiUrlProducts}/brand/women-products/${brandId}`);
    }
    getProduct(productId) {
        let response = this.http.get(`${this.apiUrlProducts}/${productId}`);
        return response;
    }
    getProduct2(productId) {
        let response = this.http.get(`${this.apiUrlProducts}/${productId}`);
        return response;
    }
    getProductByName(prodName) {
        return this.http.get(`${this.apiUrlProducts}/prodname/${prodName}`);
    }
    createProduct(productData) {
        return this.http.post(this.apiUrlProducts, productData);
    }
    updateProduct(productData, productid) {
        return this.http.put(`${this.apiUrlProducts}/${productid}`, productData);
    }
    updateProductWithVariant(productData, productid) {
        return this.http.put(`${this.apiUrlProducts}/${productid}/add/variant`, productData);
    }
    deleteProduct(productId) {
        return this.http.delete(`${this.apiUrlProducts}/${productId}`);
    }
    getProductsCount() {
        return this.http
            .get(`${this.apiUrlProducts}/get/count`)
            .pipe(map((objectValue) => objectValue.productCount));
    }
    getFeaturedProducts() {
        return this.http.get(`${this.apiUrlProducts}/get/featured/`);
    }
    addGallery(productId, galleryFormData) {
        console.log("sending post request, adding to gallery!");
        return this.http.post(`${this.apiUrlProducts}/gallery-images/${productId}`, galleryFormData);
    }
}
ProductsService.ɵfac = function ProductsService_Factory(t) { return new (t || ProductsService)(i0.ɵɵinject(i1.HttpClient)); };
ProductsService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ProductsService, factory: ProductsService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdWkvc3JjL2xpYi9tb2R1bGVzL3Byb2R1Y3RzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRTlELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBT3JDLE1BQU0sT0FBTyxlQUFlO0lBRzFCLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFGcEMsbUJBQWMsR0FBRywrQkFBK0IsR0FBRyxVQUFVLENBQUM7SUFFdkIsQ0FBQztJQUV4QyxRQUFRO0lBRVIsb0VBQW9FO0lBRXBFLFdBQVcsQ0FBQyxnQkFBMkI7UUFDckMsSUFBSSxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztRQUM5QixJQUFJLGdCQUFnQixFQUFFO1lBQ3BCLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNqRSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3JCO1FBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBZSxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVELGFBQWE7SUFFYiwwREFBMEQ7SUFFMUQsWUFBWSxDQUFDLGdCQUEyQjtRQUN0QyxJQUFJLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBQzlCLElBQUksZ0JBQWdCLEVBQUU7WUFDcEIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDckI7UUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFlLEdBQUcsSUFBSSxDQUFDLGNBQWMsZ0JBQWdCLEVBQUU7WUFDekUsTUFBTSxFQUFFLE1BQU07U0FDZixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsNERBQTREO0lBRTVELFlBQVksQ0FBQyxnQkFBMkI7UUFDdEMsSUFBSSxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztRQUM5QixJQUFJLGdCQUFnQixFQUFFO1lBQ3BCLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNsRTtRQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWUsR0FBRyxJQUFJLENBQUMsY0FBYyxrQkFBa0IsRUFBRTtZQUMzRSxNQUFNLEVBQUUsTUFBTTtTQUNmLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxxQkFBcUIsQ0FBQyxXQUFvQjtRQUN4QyxJQUFJLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBQzlCLElBQUksV0FBVyxFQUFFO1lBQ2YsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQzlDO1FBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBZSxHQUFHLElBQUksQ0FBQyxjQUFjLGdCQUFnQixFQUFFO1lBQ3pFLE1BQU0sRUFBRSxNQUFNO1NBQ2YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHNCQUFzQixDQUFDLFdBQW9CO1FBQ3pDLElBQUksTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7UUFDOUIsSUFBSSxXQUFXLEVBQUU7WUFDZixNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7U0FDOUM7UUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFlLEdBQUcsSUFBSSxDQUFDLGNBQWMsZ0JBQWdCLEVBQUU7WUFDekUsTUFBTSxFQUFFLE1BQU07U0FDZixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0Qsc0JBQXNCLENBQUMsV0FBb0I7UUFDekMsSUFBSSxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztRQUM5QixJQUFJLFdBQVcsRUFBRTtZQUNmLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztTQUM5QztRQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWUsR0FBRyxJQUFJLENBQUMsY0FBYyxrQkFBa0IsRUFBRTtZQUMzRSxNQUFNLEVBQUUsTUFBTTtTQUNmLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxrRUFBa0U7SUFFbEUsc0NBQXNDLENBQ3BDLGdCQUEyQixFQUMzQixXQUFvQjtRQUVwQixJQUFJLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBQzlCLElBQUksZ0JBQWdCLEVBQUU7WUFDcEIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ2xFO1FBRUQsSUFBSSxXQUFXLEVBQUU7WUFDZixNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7U0FDOUM7UUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNsQixHQUFHLElBQUksQ0FBQyxjQUFjLDZCQUE2QixFQUNuRDtZQUNFLE1BQU0sRUFBRSxNQUFNO1NBQ2YsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVELG9FQUFvRTtJQUVwRSxzQ0FBc0MsQ0FDcEMsZ0JBQTJCLEVBQzNCLFdBQW9CO1FBRXBCLElBQUksTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7UUFDOUIsSUFBSSxnQkFBZ0IsRUFBRTtZQUNwQixNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDbEU7UUFFRCxJQUFJLFdBQVcsRUFBRTtZQUNmLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztTQUM5QztRQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2xCLEdBQUcsSUFBSSxDQUFDLGNBQWMsK0JBQStCLEVBQ3JELEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUNuQixDQUFDO0lBQ0osQ0FBQztJQUVELDJDQUEyQztJQUUzQyxrQkFBa0IsQ0FBQyxPQUFlO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWUsR0FBRyxJQUFJLENBQUMsY0FBYyxVQUFVLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDaEYsQ0FBQztJQUVELG1CQUFtQixDQUFDLE9BQWU7UUFDakMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDbEIsR0FBRyxJQUFJLENBQUMsY0FBYyx5QkFBeUIsT0FBTyxFQUFFLENBQ3pELENBQUM7SUFDSixDQUFDO0lBRUQsVUFBVSxDQUFDLFNBQWlCO1FBQzFCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFhLEdBQUcsSUFBSSxDQUFDLGNBQWMsSUFBSSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQ2hGLE9BQU8sUUFBUSxDQUFBO0lBQ2pCLENBQUM7SUFFRCxXQUFXLENBQUMsU0FBaUI7UUFDM0IsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxJQUFJLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDekUsT0FBTyxRQUFRLENBQUE7SUFDakIsQ0FBQztJQUdELGdCQUFnQixDQUFDLFFBQWdCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2xCLEdBQUcsSUFBSSxDQUFDLGNBQWMsYUFBYSxRQUFRLEVBQUUsQ0FDOUMsQ0FBQztJQUNKLENBQUM7SUFFRCxhQUFhLENBQUMsV0FBcUI7UUFDakMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBYSxJQUFJLENBQUMsY0FBYyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFRCxhQUFhLENBQUMsV0FBcUIsRUFBRSxTQUFpQjtRQUNwRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNsQixHQUFHLElBQUksQ0FBQyxjQUFjLElBQUksU0FBUyxFQUFFLEVBQ3JDLFdBQVcsQ0FDWixDQUFDO0lBQ0osQ0FBQztJQUVELHdCQUF3QixDQUN0QixXQUFxQixFQUNyQixTQUFpQjtRQUVqQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNsQixHQUFHLElBQUksQ0FBQyxjQUFjLElBQUksU0FBUyxjQUFjLEVBQ2pELFdBQVcsQ0FDWixDQUFDO0lBQ0osQ0FBQztJQUVELGFBQWEsQ0FBQyxTQUFpQjtRQUM3QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsSUFBSSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFRCxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUFTLEdBQUcsSUFBSSxDQUFDLGNBQWMsWUFBWSxDQUFDO2FBQy9DLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFnQixFQUFFLEVBQUUsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsbUJBQW1CO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWUsR0FBRyxJQUFJLENBQUMsY0FBYyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFHRCxVQUFVLENBQUMsU0FBaUIsRUFBRSxlQUF5QjtRQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7UUFFeEQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLG1CQUFtQixTQUFTLEVBQUUsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUUvRixDQUFDOzs4RUExTFUsZUFBZTtxRUFBZixlQUFlLFdBQWYsZUFBZSxtQkFGZCxNQUFNO3VGQUVQLGVBQWU7Y0FIM0IsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IFByb2R1Y3QxMjMgfSBmcm9tICcuL3Byb2R1Y3QxMjMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2R1Y3RzU2VydmljZSB7XHJcbiAgYXBpVXJsUHJvZHVjdHMgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MS8nICsgJ3Byb2R1Y3RzJztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxyXG5cclxuICAvLyBCQVNJQ1xyXG5cclxuICAvLyBHZXQgYWxsIHByb2R1Y3RzIGluIHRoZSBkYXRhYmFzZSAtIG9wdGlvbmFsIGNhdGVnb3J5IHF1ZXJ5IHBhcmFtc1xyXG5cclxuICBnZXRQcm9kdWN0cyhjYXRlZ29yaWVzRmlsdGVyPzogc3RyaW5nW10pOiBPYnNlcnZhYmxlPFByb2R1Y3QxMjNbXT4ge1xyXG4gICAgbGV0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCk7XHJcbiAgICBpZiAoY2F0ZWdvcmllc0ZpbHRlcikge1xyXG4gICAgICBwYXJhbXMgPSBwYXJhbXMuYXBwZW5kKCdjYXRlZ29yaWVzJywgY2F0ZWdvcmllc0ZpbHRlci5qb2luKCcsJykpO1xyXG4gICAgICBjb25zb2xlLmxvZyhwYXJhbXMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8UHJvZHVjdDEyM1tdPih0aGlzLmFwaVVybFByb2R1Y3RzLCB7IHBhcmFtczogcGFyYW1zIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gU0VYIEZJTFRFUlxyXG5cclxuICAvLyBHZXQgcHJvZHVjdHMgZm9yIG1lbiAtIG9wdGlvbmFsIGNhdGVnb3JpZXMgcXVlcnkgcGFyYW1zXHJcblxyXG4gIGdldE1Qcm9kdWN0cyhjYXRlZ29yaWVzRmlsdGVyPzogc3RyaW5nW10pOiBPYnNlcnZhYmxlPFByb2R1Y3QxMjNbXT4ge1xyXG4gICAgbGV0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCk7XHJcbiAgICBpZiAoY2F0ZWdvcmllc0ZpbHRlcikge1xyXG4gICAgICBwYXJhbXMgPSBwYXJhbXMuYXBwZW5kKCdjYXRlZ29yaWVzJywgY2F0ZWdvcmllc0ZpbHRlci5qb2luKCcsJykpO1xyXG4gICAgICBjb25zb2xlLmxvZyhwYXJhbXMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8UHJvZHVjdDEyM1tdPihgJHt0aGlzLmFwaVVybFByb2R1Y3RzfS9nZXQvbWVuLXByb2RzYCwge1xyXG4gICAgICBwYXJhbXM6IHBhcmFtcyxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gR2V0IHByb2R1Y3RzIGZvciB3b21lbiAtIG9wdGlvbmFsIGNhdGVnb3JpZXMgcXVlcnkgcGFyYW1zXHJcblxyXG4gIGdldFdQcm9kdWN0cyhjYXRlZ29yaWVzRmlsdGVyPzogc3RyaW5nW10pIHtcclxuICAgIGxldCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpO1xyXG4gICAgaWYgKGNhdGVnb3JpZXNGaWx0ZXIpIHtcclxuICAgICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZCgnY2F0ZWdvcmllcycsIGNhdGVnb3JpZXNGaWx0ZXIuam9pbignLCcpKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFByb2R1Y3QxMjNbXT4oYCR7dGhpcy5hcGlVcmxQcm9kdWN0c30vZ2V0L3dvbWVuLXByb2RzYCwge1xyXG4gICAgICBwYXJhbXM6IHBhcmFtcyxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0QWxsUHJvZHVjdHNCeUJyYW5kKGJyYW5kRmlsdGVyPzogc3RyaW5nKSB7XHJcbiAgICBsZXQgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKTtcclxuICAgIGlmIChicmFuZEZpbHRlcikge1xyXG4gICAgICBwYXJhbXMgPSBwYXJhbXMuYXBwZW5kKCdicmFuZCcsIGJyYW5kRmlsdGVyKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFByb2R1Y3QxMjNbXT4oYCR7dGhpcy5hcGlVcmxQcm9kdWN0c30vZ2V0L2JyYW5kL2FsbGAsIHtcclxuICAgICAgcGFyYW1zOiBwYXJhbXMsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldEFsbE1Qcm9kdWN0c0J5QnJhbmQoYnJhbmRGaWx0ZXI/OiBzdHJpbmcpIHtcclxuICAgIGxldCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpO1xyXG4gICAgaWYgKGJyYW5kRmlsdGVyKSB7XHJcbiAgICAgIHBhcmFtcyA9IHBhcmFtcy5hcHBlbmQoJ2JyYW5kJywgYnJhbmRGaWx0ZXIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8UHJvZHVjdDEyM1tdPihgJHt0aGlzLmFwaVVybFByb2R1Y3RzfS9nZXQvYnJhbmQvbWVuYCwge1xyXG4gICAgICBwYXJhbXM6IHBhcmFtcyxcclxuICAgIH0pO1xyXG4gIH1cclxuICBnZXRBbGxXUHJvZHVjdHNCeUJyYW5kKGJyYW5kRmlsdGVyPzogc3RyaW5nKSB7XHJcbiAgICBsZXQgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKTtcclxuICAgIGlmIChicmFuZEZpbHRlcikge1xyXG4gICAgICBwYXJhbXMgPSBwYXJhbXMuYXBwZW5kKCdicmFuZCcsIGJyYW5kRmlsdGVyKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFByb2R1Y3QxMjNbXT4oYCR7dGhpcy5hcGlVcmxQcm9kdWN0c30vZ2V0L2JyYW5kL3dvbWVuYCwge1xyXG4gICAgICBwYXJhbXM6IHBhcmFtcyxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gR2V0IHByb2R1Y3RzIGZvciBtZW4gLSBvcHRpb25hbCBjYXRlZ29yaWVzICYgYnJhbmQgcXVlcnkgcGFyYW1zXHJcblxyXG4gIGdldE1wcm9kdWN0c0ZpbHRlcmVkQnlDYXRlZ29yeUFuZEJyYW5kKFxyXG4gICAgY2F0ZWdvcmllc0ZpbHRlcj86IHN0cmluZ1tdLFxyXG4gICAgYnJhbmRGaWx0ZXI/OiBzdHJpbmdcclxuICApIHtcclxuICAgIGxldCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpO1xyXG4gICAgaWYgKGNhdGVnb3JpZXNGaWx0ZXIpIHtcclxuICAgICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZCgnY2F0ZWdvcmllcycsIGNhdGVnb3JpZXNGaWx0ZXIuam9pbignLCcpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYnJhbmRGaWx0ZXIpIHtcclxuICAgICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZCgnYnJhbmQnLCBicmFuZEZpbHRlcik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxQcm9kdWN0MTIzW10+KFxyXG4gICAgICBgJHt0aGlzLmFwaVVybFByb2R1Y3RzfS9nZXQvYnJhbmQtYW5kLWNhdGVnb3J5L21lbmAsXHJcbiAgICAgIHtcclxuICAgICAgICBwYXJhbXM6IHBhcmFtcyxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vIEdldCBwcm9kdWN0cyBmb3Igd29tZW4gLSBvcHRpb25hbCBjYXRlZ29yaWVzICYgYnJhbmQgcXVlcnkgcGFyYW1zXHJcblxyXG4gIGdldFdwcm9kdWN0c0ZpbHRlcmVkQnlDYXRlZ29yeUFuZEJyYW5kKFxyXG4gICAgY2F0ZWdvcmllc0ZpbHRlcj86IHN0cmluZ1tdLFxyXG4gICAgYnJhbmRGaWx0ZXI/OiBzdHJpbmdcclxuICApIHtcclxuICAgIGxldCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpO1xyXG4gICAgaWYgKGNhdGVnb3JpZXNGaWx0ZXIpIHtcclxuICAgICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZCgnY2F0ZWdvcmllcycsIGNhdGVnb3JpZXNGaWx0ZXIuam9pbignLCcpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYnJhbmRGaWx0ZXIpIHtcclxuICAgICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZCgnYnJhbmQnLCBicmFuZEZpbHRlcik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxQcm9kdWN0MTIzW10+KFxyXG4gICAgICBgJHt0aGlzLmFwaVVybFByb2R1Y3RzfS9nZXQvYnJhbmQtYW5kLWNhdGVnb3J5L3dvbWVuYCxcclxuICAgICAgeyBwYXJhbXM6IHBhcmFtcyB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy8gR2V0IGFsbCBwcm9kdWN0cyBmaWx0ZXJlZCBieSBicmFuZCBvbmx5LlxyXG5cclxuICBnZXRQcm9kdWN0c0J5QnJhbmQoYnJhbmRJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxQcm9kdWN0MTIzW10+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFByb2R1Y3QxMjNbXT4oYCR7dGhpcy5hcGlVcmxQcm9kdWN0c30vYnJhbmQvJHticmFuZElkfWApO1xyXG4gIH1cclxuXHJcbiAgZ2V0V1Byb2R1Y3RzQnlCcmFuZChicmFuZElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFByb2R1Y3QxMjNbXT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8UHJvZHVjdDEyM1tdPihcclxuICAgICAgYCR7dGhpcy5hcGlVcmxQcm9kdWN0c30vYnJhbmQvd29tZW4tcHJvZHVjdHMvJHticmFuZElkfWBcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXRQcm9kdWN0KHByb2R1Y3RJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxQcm9kdWN0MTIzPiB7XHJcbiAgICBsZXQgcmVzcG9uc2UgPSB0aGlzLmh0dHAuZ2V0PFByb2R1Y3QxMjM+KGAke3RoaXMuYXBpVXJsUHJvZHVjdHN9LyR7cHJvZHVjdElkfWApO1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgfVxyXG5cclxuICBnZXRQcm9kdWN0Mihwcm9kdWN0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBsZXQgcmVzcG9uc2UgPSB0aGlzLmh0dHAuZ2V0PGFueT4oYCR7dGhpcy5hcGlVcmxQcm9kdWN0c30vJHtwcm9kdWN0SWR9YCk7XHJcbiAgICByZXR1cm4gcmVzcG9uc2VcclxuICB9XHJcblxyXG5cclxuICBnZXRQcm9kdWN0QnlOYW1lKHByb2ROYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFByb2R1Y3QxMjNbXT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8UHJvZHVjdDEyM1tdPihcclxuICAgICAgYCR7dGhpcy5hcGlVcmxQcm9kdWN0c30vcHJvZG5hbWUvJHtwcm9kTmFtZX1gXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlUHJvZHVjdChwcm9kdWN0RGF0YTogRm9ybURhdGEpOiBPYnNlcnZhYmxlPFByb2R1Y3QxMjM+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxQcm9kdWN0MTIzPih0aGlzLmFwaVVybFByb2R1Y3RzLCBwcm9kdWN0RGF0YSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVQcm9kdWN0KHByb2R1Y3REYXRhOiBGb3JtRGF0YSwgcHJvZHVjdGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFByb2R1Y3QxMjM+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucHV0PFByb2R1Y3QxMjM+KFxyXG4gICAgICBgJHt0aGlzLmFwaVVybFByb2R1Y3RzfS8ke3Byb2R1Y3RpZH1gLFxyXG4gICAgICBwcm9kdWN0RGF0YVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVByb2R1Y3RXaXRoVmFyaWFudChcclxuICAgIHByb2R1Y3REYXRhOiBGb3JtRGF0YSxcclxuICAgIHByb2R1Y3RpZDogc3RyaW5nXHJcbiAgKTogT2JzZXJ2YWJsZTxQcm9kdWN0MTIzPiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxQcm9kdWN0MTIzPihcclxuICAgICAgYCR7dGhpcy5hcGlVcmxQcm9kdWN0c30vJHtwcm9kdWN0aWR9L2FkZC92YXJpYW50YCxcclxuICAgICAgcHJvZHVjdERhdGFcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVQcm9kdWN0KHByb2R1Y3RJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlPGFueT4oYCR7dGhpcy5hcGlVcmxQcm9kdWN0c30vJHtwcm9kdWN0SWR9YCk7XHJcbiAgfVxyXG5cclxuICBnZXRQcm9kdWN0c0NvdW50KCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgIC5nZXQ8bnVtYmVyPihgJHt0aGlzLmFwaVVybFByb2R1Y3RzfS9nZXQvY291bnRgKVxyXG4gICAgICAucGlwZShtYXAoKG9iamVjdFZhbHVlOiBhbnkpID0+IG9iamVjdFZhbHVlLnByb2R1Y3RDb3VudCkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RmVhdHVyZWRQcm9kdWN0cygpOiBPYnNlcnZhYmxlPFByb2R1Y3QxMjNbXT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8UHJvZHVjdDEyM1tdPihgJHt0aGlzLmFwaVVybFByb2R1Y3RzfS9nZXQvZmVhdHVyZWQvYCk7XHJcbiAgfVxyXG5cclxuIFxyXG4gIGFkZEdhbGxlcnkocHJvZHVjdElkOiBzdHJpbmcsIGdhbGxlcnlGb3JtRGF0YTogRm9ybURhdGEpIDogT2JzZXJ2YWJsZTxhbnk+e1xyXG4gICAgY29uc29sZS5sb2coXCJzZW5kaW5nIHBvc3QgcmVxdWVzdCwgYWRkaW5nIHRvIGdhbGxlcnkhXCIpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLmFwaVVybFByb2R1Y3RzfS9nYWxsZXJ5LWltYWdlcy8ke3Byb2R1Y3RJZH1gLCBnYWxsZXJ5Rm9ybURhdGEpO1xyXG5cclxuICB9XHJcbn1cclxuIl19