import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class ProductsService {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
        this.apiUrlProducts = this.environment.apiURL + 'products';
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
    getFeaturedProductsByBrand(brand) {
        return this.http.get(`${this.apiUrlProducts}/get/featured/` + brand);
    }
    addGallery(productId, galleryFormData) {
        console.log("sending post request, adding to gallery!");
        return this.http.post(`${this.apiUrlProducts}/gallery-images/${productId}`, galleryFormData);
    }
}
ProductsService.ɵfac = function ProductsService_Factory(t) { return new (t || ProductsService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject('environment')); };
ProductsService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ProductsService, factory: ProductsService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                type: Inject,
                args: ['environment']
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9zZXJ2aWNlcy9wcm9kdWN0cy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFOUQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFPckMsTUFBTSxPQUFPLGVBQWU7SUFJMUIsWUFBb0IsSUFBZ0IsRUFBeUIsV0FBVztRQUFwRCxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2xDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDO0lBQzdELENBQUM7SUFFRCxRQUFRO0lBRVIsb0VBQW9FO0lBRXBFLFdBQVcsQ0FBQyxnQkFBMkI7UUFDckMsSUFBSSxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztRQUM5QixJQUFJLGdCQUFnQixFQUFFO1lBQ3BCLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNqRSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3JCO1FBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBZSxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVELGFBQWE7SUFFYiwwREFBMEQ7SUFFMUQsWUFBWSxDQUFDLGdCQUEyQjtRQUN0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Q0FBQztJQUMvRCxDQUFDO0lBRUQsbUJBQW1CO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWUsR0FBRyxJQUFJLENBQUMsY0FBYyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFHRCwwQkFBMEIsQ0FBQyxLQUFZO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWUsR0FBRyxJQUFJLENBQUMsY0FBYyxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsQ0FBQztJQUNyRixDQUFDO0lBR0QsVUFBVSxDQUFDLFNBQWlCLEVBQUUsZUFBeUI7UUFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO1FBRXhELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxtQkFBbUIsU0FBUyxFQUFFLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFFL0YsQ0FBQzs7OEVBbk1VLGVBQWUsMENBSW9CLGFBQWE7cUVBSmhELGVBQWUsV0FBZixlQUFlLG1CQUZkLE1BQU07dUZBRVAsZUFBZTtjQUgzQixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7O3NCQUt3QyxNQUFNO3VCQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFByb2R1Y3QxMjMgfSBmcm9tICcuLi9tb2RlbHMvcHJvZHVjdDEyMyc7XG5cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RzU2VydmljZSB7XG4gIHByaXZhdGUgZW52aXJvbm1lbnQ7XG4gIHByaXZhdGUgYXBpVXJsUHJvZHVjdHM7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBASW5qZWN0KCdlbnZpcm9ubWVudCcpIGVudmlyb25tZW50KSB7XG4gICAgdGhpcy5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xuICAgIHRoaXMuYXBpVXJsUHJvZHVjdHMgPSB0aGlzLmVudmlyb25tZW50LmFwaVVSTCArICdwcm9kdWN0cyc7XG4gIH1cblxuICAvLyBCQVNJQ1xuXG4gIC8vIEdldCBhbGwgcHJvZHVjdHMgaW4gdGhlIGRhdGFiYXNlIC0gb3B0aW9uYWwgY2F0ZWdvcnkgcXVlcnkgcGFyYW1zXG5cbiAgZ2V0UHJvZHVjdHMoY2F0ZWdvcmllc0ZpbHRlcj86IHN0cmluZ1tdKTogT2JzZXJ2YWJsZTxQcm9kdWN0MTIzW10+IHtcbiAgICBsZXQgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKTtcbiAgICBpZiAoY2F0ZWdvcmllc0ZpbHRlcikge1xuICAgICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZCgnY2F0ZWdvcmllcycsIGNhdGVnb3JpZXNGaWx0ZXIuam9pbignLCcpKTtcbiAgICAgIGNvbnNvbGUubG9nKHBhcmFtcyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFByb2R1Y3QxMjNbXT4odGhpcy5hcGlVcmxQcm9kdWN0cywgeyBwYXJhbXM6IHBhcmFtcyB9KTtcbiAgfVxuXG4gIC8vIFNFWCBGSUxURVJcblxuICAvLyBHZXQgcHJvZHVjdHMgZm9yIG1lbiAtIG9wdGlvbmFsIGNhdGVnb3JpZXMgcXVlcnkgcGFyYW1zXG5cbiAgZ2V0TVByb2R1Y3RzKGNhdGVnb3JpZXNGaWx0ZXI/OiBzdHJpbmdbXSk6IE9ic2VydmFibGU8UHJvZHVjdDEyM1tdPiB7XG4gICAgbGV0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCk7XG4gICAgaWYgKGNhdGVnb3JpZXNGaWx0ZXIpIHtcbiAgICAgIHBhcmFtcyA9IHBhcmFtcy5hcHBlbmQoJ2NhdGVnb3JpZXMnLCBjYXRlZ29yaWVzRmlsdGVyLmpvaW4oJywnKSk7XG4gICAgICBjb25zb2xlLmxvZyhwYXJhbXMpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxQcm9kdWN0MTIzW10+KGAke3RoaXMuYXBpVXJsUHJvZHVjdHN9L2dldC9tZW4tcHJvZHNgLCB7XG4gICAgICBwYXJhbXM6IHBhcmFtcyxcbiAgICB9KTtcbiAgfVxuXG4gIC8vIEdldCBwcm9kdWN0cyBmb3Igd29tZW4gLSBvcHRpb25hbCBjYXRlZ29yaWVzIHF1ZXJ5IHBhcmFtc1xuXG4gIGdldFdQcm9kdWN0cyhjYXRlZ29yaWVzRmlsdGVyPzogc3RyaW5nW10pIHtcbiAgICBsZXQgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKTtcbiAgICBpZiAoY2F0ZWdvcmllc0ZpbHRlcikge1xuICAgICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZCgnY2F0ZWdvcmllcycsIGNhdGVnb3JpZXNGaWx0ZXIuam9pbignLCcpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8UHJvZHVjdDEyM1tdPihgJHt0aGlzLmFwaVVybFByb2R1Y3RzfS9nZXQvd29tZW4tcHJvZHNgLCB7XG4gICAgICBwYXJhbXM6IHBhcmFtcyxcbiAgICB9KTtcbiAgfVxuXG4gIGdldEFsbFByb2R1Y3RzQnlCcmFuZChicmFuZEZpbHRlcj86IHN0cmluZykge1xuICAgIGxldCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpO1xuICAgIGlmIChicmFuZEZpbHRlcikge1xuICAgICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZCgnYnJhbmQnLCBicmFuZEZpbHRlcik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFByb2R1Y3QxMjNbXT4oYCR7dGhpcy5hcGlVcmxQcm9kdWN0c30vZ2V0L2JyYW5kL2FsbGAsIHtcbiAgICAgIHBhcmFtczogcGFyYW1zLFxuICAgIH0pO1xuICB9XG5cbiAgZ2V0QWxsTVByb2R1Y3RzQnlCcmFuZChicmFuZEZpbHRlcj86IHN0cmluZykge1xuICAgIGxldCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpO1xuICAgIGlmIChicmFuZEZpbHRlcikge1xuICAgICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZCgnYnJhbmQnLCBicmFuZEZpbHRlcik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFByb2R1Y3QxMjNbXT4oYCR7dGhpcy5hcGlVcmxQcm9kdWN0c30vZ2V0L2JyYW5kL21lbmAsIHtcbiAgICAgIHBhcmFtczogcGFyYW1zLFxuICAgIH0pO1xuICB9XG4gIGdldEFsbFdQcm9kdWN0c0J5QnJhbmQoYnJhbmRGaWx0ZXI/OiBzdHJpbmcpIHtcbiAgICBsZXQgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKTtcbiAgICBpZiAoYnJhbmRGaWx0ZXIpIHtcbiAgICAgIHBhcmFtcyA9IHBhcmFtcy5hcHBlbmQoJ2JyYW5kJywgYnJhbmRGaWx0ZXIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxQcm9kdWN0MTIzW10+KGAke3RoaXMuYXBpVXJsUHJvZHVjdHN9L2dldC9icmFuZC93b21lbmAsIHtcbiAgICAgIHBhcmFtczogcGFyYW1zLFxuICAgIH0pO1xuICB9XG5cbiAgLy8gR2V0IHByb2R1Y3RzIGZvciBtZW4gLSBvcHRpb25hbCBjYXRlZ29yaWVzICYgYnJhbmQgcXVlcnkgcGFyYW1zXG5cbiAgZ2V0TXByb2R1Y3RzRmlsdGVyZWRCeUNhdGVnb3J5QW5kQnJhbmQoXG4gICAgY2F0ZWdvcmllc0ZpbHRlcj86IHN0cmluZ1tdLFxuICAgIGJyYW5kRmlsdGVyPzogc3RyaW5nXG4gICkge1xuICAgIGxldCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpO1xuICAgIGlmIChjYXRlZ29yaWVzRmlsdGVyKSB7XG4gICAgICBwYXJhbXMgPSBwYXJhbXMuYXBwZW5kKCdjYXRlZ29yaWVzJywgY2F0ZWdvcmllc0ZpbHRlci5qb2luKCcsJykpO1xuICAgIH1cblxuICAgIGlmIChicmFuZEZpbHRlcikge1xuICAgICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZCgnYnJhbmQnLCBicmFuZEZpbHRlcik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFByb2R1Y3QxMjNbXT4oXG4gICAgICBgJHt0aGlzLmFwaVVybFByb2R1Y3RzfS9nZXQvYnJhbmQtYW5kLWNhdGVnb3J5L21lbmAsXG4gICAgICB7XG4gICAgICAgIHBhcmFtczogcGFyYW1zLFxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICAvLyBHZXQgcHJvZHVjdHMgZm9yIHdvbWVuIC0gb3B0aW9uYWwgY2F0ZWdvcmllcyAmIGJyYW5kIHF1ZXJ5IHBhcmFtc1xuXG4gIGdldFdwcm9kdWN0c0ZpbHRlcmVkQnlDYXRlZ29yeUFuZEJyYW5kKFxuICAgIGNhdGVnb3JpZXNGaWx0ZXI/OiBzdHJpbmdbXSxcbiAgICBicmFuZEZpbHRlcj86IHN0cmluZ1xuICApIHtcbiAgICBsZXQgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKTtcbiAgICBpZiAoY2F0ZWdvcmllc0ZpbHRlcikge1xuICAgICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZCgnY2F0ZWdvcmllcycsIGNhdGVnb3JpZXNGaWx0ZXIuam9pbignLCcpKTtcbiAgICB9XG5cbiAgICBpZiAoYnJhbmRGaWx0ZXIpIHtcbiAgICAgIHBhcmFtcyA9IHBhcmFtcy5hcHBlbmQoJ2JyYW5kJywgYnJhbmRGaWx0ZXIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxQcm9kdWN0MTIzW10+KFxuICAgICAgYCR7dGhpcy5hcGlVcmxQcm9kdWN0c30vZ2V0L2JyYW5kLWFuZC1jYXRlZ29yeS93b21lbmAsXG4gICAgICB7IHBhcmFtczogcGFyYW1zIH1cbiAgICApO1xuICB9XG5cbiAgLy8gR2V0IGFsbCBwcm9kdWN0cyBmaWx0ZXJlZCBieSBicmFuZCBvbmx5LlxuXG4gIGdldFByb2R1Y3RzQnlCcmFuZChicmFuZElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFByb2R1Y3QxMjNbXT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFByb2R1Y3QxMjNbXT4oYCR7dGhpcy5hcGlVcmxQcm9kdWN0c30vYnJhbmQvJHticmFuZElkfWApO1xuICB9XG5cbiAgZ2V0V1Byb2R1Y3RzQnlCcmFuZChicmFuZElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFByb2R1Y3QxMjNbXT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFByb2R1Y3QxMjNbXT4oXG4gICAgICBgJHt0aGlzLmFwaVVybFByb2R1Y3RzfS9icmFuZC93b21lbi1wcm9kdWN0cy8ke2JyYW5kSWR9YFxuICAgICk7XG4gIH1cblxuICBnZXRQcm9kdWN0KHByb2R1Y3RJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxQcm9kdWN0MTIzPiB7XG4gICAgbGV0IHJlc3BvbnNlID0gdGhpcy5odHRwLmdldDxQcm9kdWN0MTIzPihgJHt0aGlzLmFwaVVybFByb2R1Y3RzfS8ke3Byb2R1Y3RJZH1gKTtcbiAgICByZXR1cm4gcmVzcG9uc2VcbiAgfVxuXG4gIGdldFByb2R1Y3QyKHByb2R1Y3RJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBsZXQgcmVzcG9uc2UgPSB0aGlzLmh0dHAuZ2V0PGFueT4oYCR7dGhpcy5hcGlVcmxQcm9kdWN0c30vJHtwcm9kdWN0SWR9YCk7XG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gIH1cblxuXG4gIGdldFByb2R1Y3RCeU5hbWUocHJvZE5hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8UHJvZHVjdDEyM1tdPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8UHJvZHVjdDEyM1tdPihcbiAgICAgIGAke3RoaXMuYXBpVXJsUHJvZHVjdHN9L3Byb2RuYW1lLyR7cHJvZE5hbWV9YFxuICAgICk7XG4gIH1cblxuICBjcmVhdGVQcm9kdWN0KHByb2R1Y3REYXRhOiBGb3JtRGF0YSk6IE9ic2VydmFibGU8UHJvZHVjdDEyMz4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxQcm9kdWN0MTIzPih0aGlzLmFwaVVybFByb2R1Y3RzLCBwcm9kdWN0RGF0YSk7XG4gIH1cblxuICB1cGRhdGVQcm9kdWN0KHByb2R1Y3REYXRhOiBGb3JtRGF0YSwgcHJvZHVjdGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFByb2R1Y3QxMjM+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxQcm9kdWN0MTIzPihcbiAgICAgIGAke3RoaXMuYXBpVXJsUHJvZHVjdHN9LyR7cHJvZHVjdGlkfWAsXG4gICAgICBwcm9kdWN0RGF0YVxuICAgICk7XG4gIH1cblxuICB1cGRhdGVQcm9kdWN0V2l0aFZhcmlhbnQoXG4gICAgcHJvZHVjdERhdGE6IEZvcm1EYXRhLFxuICAgIHByb2R1Y3RpZDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8UHJvZHVjdDEyMz4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucHV0PFByb2R1Y3QxMjM+KFxuICAgICAgYCR7dGhpcy5hcGlVcmxQcm9kdWN0c30vJHtwcm9kdWN0aWR9L2FkZC92YXJpYW50YCxcbiAgICAgIHByb2R1Y3REYXRhXG4gICAgKTtcbiAgfVxuXG4gIGRlbGV0ZVByb2R1Y3QocHJvZHVjdElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlPGFueT4oYCR7dGhpcy5hcGlVcmxQcm9kdWN0c30vJHtwcm9kdWN0SWR9YCk7XG4gIH1cblxuICBnZXRQcm9kdWN0c0NvdW50KCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxudW1iZXI+KGAke3RoaXMuYXBpVXJsUHJvZHVjdHN9L2dldC9jb3VudGApXG4gICAgICAucGlwZShtYXAoKG9iamVjdFZhbHVlOiBhbnkpID0+IG9iamVjdFZhbHVlLnByb2R1Y3RDb3VudCkpO1xuICB9XG5cbiAgZ2V0RmVhdHVyZWRQcm9kdWN0cygpOiBPYnNlcnZhYmxlPFByb2R1Y3QxMjNbXT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFByb2R1Y3QxMjNbXT4oYCR7dGhpcy5hcGlVcmxQcm9kdWN0c30vZ2V0L2ZlYXR1cmVkL2ApO1xuICB9XG5cblxuICBnZXRGZWF0dXJlZFByb2R1Y3RzQnlCcmFuZChicmFuZDpzdHJpbmcpOiBPYnNlcnZhYmxlPFByb2R1Y3QxMjNbXT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFByb2R1Y3QxMjNbXT4oYCR7dGhpcy5hcGlVcmxQcm9kdWN0c30vZ2V0L2ZlYXR1cmVkL2AgKyBicmFuZCk7XG4gIH1cblxuXG4gIGFkZEdhbGxlcnkocHJvZHVjdElkOiBzdHJpbmcsIGdhbGxlcnlGb3JtRGF0YTogRm9ybURhdGEpIDogT2JzZXJ2YWJsZTxhbnk+e1xuICAgIGNvbnNvbGUubG9nKFwic2VuZGluZyBwb3N0IHJlcXVlc3QsIGFkZGluZyB0byBnYWxsZXJ5IVwiKTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLmFwaVVybFByb2R1Y3RzfS9nYWxsZXJ5LWltYWdlcy8ke3Byb2R1Y3RJZH1gLCBnYWxsZXJ5Rm9ybURhdGEpO1xuXG4gIH1cbn1cbiJdfQ==