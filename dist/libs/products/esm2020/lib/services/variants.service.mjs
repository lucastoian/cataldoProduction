import { Inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class VariantsService {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
        this.apiUrlVariants = this.environment.apiURL + 'variants';
    }
    getVariants() {
        return this.http.get(this.apiUrlVariants);
    }
    getVariant(variantId) {
        return this.http.get(`${this.apiUrlVariants}/product/${variantId}/form/edit`);
    }
    getProdVariants(productId) {
        return this.http.get(`${this.apiUrlVariants}/product/${productId}`);
    }
    createVariant(variantData) {
        return this.http.post(this.apiUrlVariants, variantData);
    }
    updateVariant(variantData, variantId) {
        return this.http.put(`${this.apiUrlVariants}/product/${variantId}/form/edit`, variantData);
    }
    deleteVariant(variantId) {
        return this.http.delete(`${this.apiUrlVariants}/${variantId}`);
    }
}
VariantsService.ɵfac = function VariantsService_Factory(t) { return new (t || VariantsService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject('environment')); };
VariantsService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: VariantsService, factory: VariantsService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(VariantsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                type: Inject,
                args: ['environment']
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFyaWFudHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9zZXJ2aWNlcy92YXJpYW50cy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBVWpELE1BQU0sT0FBTyxlQUFlO0lBSTFCLFlBQW9CLElBQWdCLEVBQXlCLFdBQVc7UUFBcEQsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNsQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQztJQUM3RCxDQUFDO0lBRUMsV0FBVztRQUNQLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVksSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCxVQUFVLENBQUMsU0FBaUI7UUFDeEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBVSxHQUFHLElBQUksQ0FBQyxjQUFjLFlBQVksU0FBUyxZQUFZLENBQUMsQ0FBQztJQUMzRixDQUFDO0lBRUQsZUFBZSxDQUFDLFNBQVM7UUFDckIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBWSxHQUFHLElBQUksQ0FBQyxjQUFjLFlBQVksU0FBUyxFQUFFLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBRUQsYUFBYSxDQUFDLFdBQXFCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQVUsSUFBSSxDQUFDLGNBQWMsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUgsYUFBYSxDQUFDLFdBQXFCLEVBQUUsU0FBaUI7UUFDbEQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBVSxHQUFHLElBQUksQ0FBQyxjQUFjLFlBQVksU0FBUyxZQUFZLEVBQUMsV0FBVyxDQUFDLENBQUM7SUFDdkcsQ0FBQztJQUVELGFBQWEsQ0FBQyxTQUFpQjtRQUMzQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsSUFBSSxTQUFTLEVBQUUsQ0FBQyxDQUFBO0lBQ3ZFLENBQUM7OzhFQS9CUSxlQUFlLDBDQUlvQixhQUFhO3FFQUpoRCxlQUFlLFdBQWYsZUFBZSxtQkFIWixNQUFNO3VGQUdULGVBQWU7Y0FKM0IsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCOztzQkFNd0MsTUFBTTt1QkFBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBWYXJpYW50IH0gZnJvbSBcIi4uL21vZGVscy92YXJpYW50XCI7XHJcblxyXG5cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBWYXJpYW50c1NlcnZpY2V7XHJcbiAgcHJpdmF0ZSBlbnZpcm9ubWVudDtcclxuICBwcml2YXRlIGFwaVVybFZhcmlhbnRzO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIEBJbmplY3QoJ2Vudmlyb25tZW50JykgZW52aXJvbm1lbnQpIHtcclxuICAgIHRoaXMuZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcclxuICAgIHRoaXMuYXBpVXJsVmFyaWFudHMgPSB0aGlzLmVudmlyb25tZW50LmFwaVVSTCArICd2YXJpYW50cyc7XHJcbiAgfVxyXG5cclxuICAgIGdldFZhcmlhbnRzKCk6IE9ic2VydmFibGU8VmFyaWFudFtdPntcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxWYXJpYW50W10+KHRoaXMuYXBpVXJsVmFyaWFudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFZhcmlhbnQodmFyaWFudElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFZhcmlhbnQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxWYXJpYW50PihgJHt0aGlzLmFwaVVybFZhcmlhbnRzfS9wcm9kdWN0LyR7dmFyaWFudElkfS9mb3JtL2VkaXRgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQcm9kVmFyaWFudHMocHJvZHVjdElkKTogT2JzZXJ2YWJsZTxWYXJpYW50W10+e1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFZhcmlhbnRbXT4oYCR7dGhpcy5hcGlVcmxWYXJpYW50c30vcHJvZHVjdC8ke3Byb2R1Y3RJZH1gKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVWYXJpYW50KHZhcmlhbnREYXRhOiBGb3JtRGF0YSk6IE9ic2VydmFibGU8VmFyaWFudD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxWYXJpYW50Pih0aGlzLmFwaVVybFZhcmlhbnRzLCB2YXJpYW50RGF0YSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICB1cGRhdGVWYXJpYW50KHZhcmlhbnREYXRhOiBGb3JtRGF0YSwgdmFyaWFudElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFZhcmlhbnQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxWYXJpYW50PihgJHt0aGlzLmFwaVVybFZhcmlhbnRzfS9wcm9kdWN0LyR7dmFyaWFudElkfS9mb3JtL2VkaXRgLHZhcmlhbnREYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVWYXJpYW50KHZhcmlhbnRJZDogc3RyaW5nKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZTxhbnk+KGAke3RoaXMuYXBpVXJsVmFyaWFudHN9LyR7dmFyaWFudElkfWApXHJcbiAgICB9XHJcbn1cclxuIl19