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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFyaWFudHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9zZXJ2aWNlcy92YXJpYW50cy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBVWpELE1BQU0sT0FBTyxlQUFlO0lBSTFCLFlBQW9CLElBQWdCLEVBQXlCLFdBQVc7UUFBcEQsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNsQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQztJQUM3RCxDQUFDO0lBRUMsV0FBVztRQUNQLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVksSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCxVQUFVLENBQUMsU0FBaUI7UUFDeEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBVSxHQUFHLElBQUksQ0FBQyxjQUFjLFlBQVksU0FBUyxZQUFZLENBQUMsQ0FBQztJQUMzRixDQUFDO0lBRUQsZUFBZSxDQUFDLFNBQVM7UUFDckIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBWSxHQUFHLElBQUksQ0FBQyxjQUFjLFlBQVksU0FBUyxFQUFFLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBRUQsYUFBYSxDQUFDLFdBQXFCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQVUsSUFBSSxDQUFDLGNBQWMsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUgsYUFBYSxDQUFDLFdBQXFCLEVBQUUsU0FBaUI7UUFDbEQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBVSxHQUFHLElBQUksQ0FBQyxjQUFjLFlBQVksU0FBUyxZQUFZLEVBQUMsV0FBVyxDQUFDLENBQUM7SUFDdkcsQ0FBQztJQUVELGFBQWEsQ0FBQyxTQUFpQjtRQUMzQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsSUFBSSxTQUFTLEVBQUUsQ0FBQyxDQUFBO0lBQ3ZFLENBQUM7OzhFQS9CUSxlQUFlLDBDQUlvQixhQUFhO3FFQUpoRCxlQUFlLFdBQWYsZUFBZSxtQkFIWixNQUFNO3VGQUdULGVBQWU7Y0FKM0IsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCOztzQkFNd0MsTUFBTTt1QkFBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHBDbGllbnR9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBWYXJpYW50IH0gZnJvbSBcIi4uL21vZGVscy92YXJpYW50XCI7XG5cblxuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcblxuZXhwb3J0IGNsYXNzIFZhcmlhbnRzU2VydmljZXtcbiAgcHJpdmF0ZSBlbnZpcm9ubWVudDtcbiAgcHJpdmF0ZSBhcGlVcmxWYXJpYW50cztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIEBJbmplY3QoJ2Vudmlyb25tZW50JykgZW52aXJvbm1lbnQpIHtcbiAgICB0aGlzLmVudmlyb25tZW50ID0gZW52aXJvbm1lbnQ7XG4gICAgdGhpcy5hcGlVcmxWYXJpYW50cyA9IHRoaXMuZW52aXJvbm1lbnQuYXBpVVJMICsgJ3ZhcmlhbnRzJztcbiAgfVxuXG4gICAgZ2V0VmFyaWFudHMoKTogT2JzZXJ2YWJsZTxWYXJpYW50W10+e1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxWYXJpYW50W10+KHRoaXMuYXBpVXJsVmFyaWFudHMpO1xuICAgIH1cblxuICAgIGdldFZhcmlhbnQodmFyaWFudElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFZhcmlhbnQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8VmFyaWFudD4oYCR7dGhpcy5hcGlVcmxWYXJpYW50c30vcHJvZHVjdC8ke3ZhcmlhbnRJZH0vZm9ybS9lZGl0YCk7XG4gICAgfVxuXG4gICAgZ2V0UHJvZFZhcmlhbnRzKHByb2R1Y3RJZCk6IE9ic2VydmFibGU8VmFyaWFudFtdPntcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8VmFyaWFudFtdPihgJHt0aGlzLmFwaVVybFZhcmlhbnRzfS9wcm9kdWN0LyR7cHJvZHVjdElkfWApO1xuICAgIH1cblxuICAgIGNyZWF0ZVZhcmlhbnQodmFyaWFudERhdGE6IEZvcm1EYXRhKTogT2JzZXJ2YWJsZTxWYXJpYW50PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxWYXJpYW50Pih0aGlzLmFwaVVybFZhcmlhbnRzLCB2YXJpYW50RGF0YSk7XG4gICAgICB9XG5cbiAgICB1cGRhdGVWYXJpYW50KHZhcmlhbnREYXRhOiBGb3JtRGF0YSwgdmFyaWFudElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFZhcmlhbnQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQ8VmFyaWFudD4oYCR7dGhpcy5hcGlVcmxWYXJpYW50c30vcHJvZHVjdC8ke3ZhcmlhbnRJZH0vZm9ybS9lZGl0YCx2YXJpYW50RGF0YSk7XG4gICAgfVxuXG4gICAgZGVsZXRlVmFyaWFudCh2YXJpYW50SWQ6IHN0cmluZyl7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlPGFueT4oYCR7dGhpcy5hcGlVcmxWYXJpYW50c30vJHt2YXJpYW50SWR9YClcbiAgICB9XG59XG4iXX0=