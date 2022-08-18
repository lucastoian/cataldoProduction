import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class VariantsService {
    constructor(http) {
        this.http = http;
        this.apiUrlVariants = 'https://cataldoproduction.herokuapp.com/api/v1/' + 'variants';
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
VariantsService.ɵfac = function VariantsService_Factory(t) { return new (t || VariantsService)(i0.ɵɵinject(i1.HttpClient)); };
VariantsService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: VariantsService, factory: VariantsService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(VariantsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFyaWFudHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9zZXJ2aWNlcy92YXJpYW50cy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDOzs7QUFVakQsTUFBTSxPQUFPLGVBQWU7SUFHeEIsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUZwQyxtQkFBYyxHQUFHLGlEQUFpRCxHQUFHLFVBQVUsQ0FBQztJQUUxQyxDQUFDO0lBRXZDLFdBQVc7UUFDUCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFZLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQsVUFBVSxDQUFDLFNBQWlCO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxZQUFZLFNBQVMsWUFBWSxDQUFDLENBQUM7SUFDM0YsQ0FBQztJQUVELGVBQWUsQ0FBQyxTQUFTO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVksR0FBRyxJQUFJLENBQUMsY0FBYyxZQUFZLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDbkYsQ0FBQztJQUVELGFBQWEsQ0FBQyxXQUFxQjtRQUMvQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFVLElBQUksQ0FBQyxjQUFjLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVILGFBQWEsQ0FBQyxXQUFxQixFQUFFLFNBQWlCO1FBQ2xELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxZQUFZLFNBQVMsWUFBWSxFQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZHLENBQUM7SUFFRCxhQUFhLENBQUMsU0FBaUI7UUFDM0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBTSxHQUFHLElBQUksQ0FBQyxjQUFjLElBQUksU0FBUyxFQUFFLENBQUMsQ0FBQTtJQUN2RSxDQUFDOzs4RUEzQlEsZUFBZTtxRUFBZixlQUFlLFdBQWYsZUFBZSxtQkFIWixNQUFNO3VGQUdULGVBQWU7Y0FKM0IsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnR9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgVmFyaWFudCB9IGZyb20gXCIuLi9tb2RlbHMvdmFyaWFudFwiO1xyXG5cclxuXHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVmFyaWFudHNTZXJ2aWNle1xyXG4gICAgYXBpVXJsVmFyaWFudHMgPSAnaHR0cHM6Ly9jYXRhbGRvcHJvZHVjdGlvbi5oZXJva3VhcHAuY29tL2FwaS92MS8nICsgJ3ZhcmlhbnRzJztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpe31cclxuXHJcbiAgICBnZXRWYXJpYW50cygpOiBPYnNlcnZhYmxlPFZhcmlhbnRbXT57XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8VmFyaWFudFtdPih0aGlzLmFwaVVybFZhcmlhbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRWYXJpYW50KHZhcmlhbnRJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxWYXJpYW50PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8VmFyaWFudD4oYCR7dGhpcy5hcGlVcmxWYXJpYW50c30vcHJvZHVjdC8ke3ZhcmlhbnRJZH0vZm9ybS9lZGl0YCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UHJvZFZhcmlhbnRzKHByb2R1Y3RJZCk6IE9ic2VydmFibGU8VmFyaWFudFtdPntcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxWYXJpYW50W10+KGAke3RoaXMuYXBpVXJsVmFyaWFudHN9L3Byb2R1Y3QvJHtwcm9kdWN0SWR9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlVmFyaWFudCh2YXJpYW50RGF0YTogRm9ybURhdGEpOiBPYnNlcnZhYmxlPFZhcmlhbnQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8VmFyaWFudD4odGhpcy5hcGlVcmxWYXJpYW50cywgdmFyaWFudERhdGEpO1xyXG4gICAgICB9XHJcblxyXG4gICAgdXBkYXRlVmFyaWFudCh2YXJpYW50RGF0YTogRm9ybURhdGEsIHZhcmlhbnRJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxWYXJpYW50PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQ8VmFyaWFudD4oYCR7dGhpcy5hcGlVcmxWYXJpYW50c30vcHJvZHVjdC8ke3ZhcmlhbnRJZH0vZm9ybS9lZGl0YCx2YXJpYW50RGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlVmFyaWFudCh2YXJpYW50SWQ6IHN0cmluZyl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGU8YW55PihgJHt0aGlzLmFwaVVybFZhcmlhbnRzfS8ke3ZhcmlhbnRJZH1gKVxyXG4gICAgfVxyXG59Il19