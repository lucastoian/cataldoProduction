import { Inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class W_VariantsService {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
        this.apiUrlW_Variants = this.environment.apiURL + 'w-variants';
    }
    getW_Variants() {
        return this.http.get(this.apiUrlW_Variants);
    }
    getW_Variant(variantId) {
        return this.http.get(`${this.apiUrlW_Variants}/women-product/${variantId}/form/edit`);
    }
    getProdW_Variants(productId) {
        return this.http.get(`${this.apiUrlW_Variants}/women-product/${productId}`);
    }
    createW_Variant(variantData) {
        return this.http.post(this.apiUrlW_Variants, variantData);
    }
    updateW_Variant(variantData, variantId) {
        return this.http.put(`${this.apiUrlW_Variants}/women-product/${variantId}/form/edit`, variantData);
    }
    deleteW_Variant(variantId) {
        return this.http.delete(`${this.apiUrlW_Variants}/${variantId}`);
    }
}
W_VariantsService.ɵfac = function W_VariantsService_Factory(t) { return new (t || W_VariantsService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject('environment')); };
W_VariantsService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: W_VariantsService, factory: W_VariantsService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(W_VariantsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                type: Inject,
                args: ['environment']
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidy12YXJpYW50cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wcm9kdWN0cy9zcmMvbGliL3NlcnZpY2VzL3ctdmFyaWFudHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7OztBQVNqRCxNQUFNLE9BQU8saUJBQWlCO0lBSTVCLFlBQW9CLElBQWdCLEVBQXlCLFdBQVc7UUFBcEQsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNsQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDO0lBQ2pFLENBQUM7SUFFRCxhQUFhO1FBQ1gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBYyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsWUFBWSxDQUFDLFNBQWlCO1FBQzVCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2xCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixrQkFBa0IsU0FBUyxZQUFZLENBQ2hFLENBQUM7SUFDSixDQUFDO0lBRUQsaUJBQWlCLENBQUMsU0FBUztRQUN6QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNsQixHQUFHLElBQUksQ0FBQyxnQkFBZ0Isa0JBQWtCLFNBQVMsRUFBRSxDQUN0RCxDQUFDO0lBQ0osQ0FBQztJQUVELGVBQWUsQ0FBQyxXQUFxQjtRQUNuQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFZLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQsZUFBZSxDQUFDLFdBQXFCLEVBQUUsU0FBaUI7UUFDdEQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDbEIsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLGtCQUFrQixTQUFTLFlBQVksRUFDL0QsV0FBVyxDQUNaLENBQUM7SUFDSixDQUFDO0lBRUQsZUFBZSxDQUFDLFNBQWlCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQU0sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLElBQUksU0FBUyxFQUFFLENBQUMsQ0FBQztJQUN4RSxDQUFDOztrRkF0Q1UsaUJBQWlCLDBDQUlrQixhQUFhO3VFQUpoRCxpQkFBaUIsV0FBakIsaUJBQWlCLG1CQUZoQixNQUFNO3VGQUVQLGlCQUFpQjtjQUg3QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7O3NCQUt3QyxNQUFNO3VCQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHBDbGllbnR9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBXX1ZhcmlhbnQgfSBmcm9tIFwiLi4vbW9kZWxzL3ctdmFyaWFudFwiO1xuXG5cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFdfVmFyaWFudHNTZXJ2aWNlIHtcbiAgICBwcml2YXRlIGVudmlyb25tZW50O1xuICAgIHByaXZhdGUgYXBpVXJsV19WYXJpYW50cztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIEBJbmplY3QoJ2Vudmlyb25tZW50JykgZW52aXJvbm1lbnQpIHtcbiAgICB0aGlzLmVudmlyb25tZW50ID0gZW52aXJvbm1lbnQ7XG4gICAgdGhpcy5hcGlVcmxXX1ZhcmlhbnRzID0gdGhpcy5lbnZpcm9ubWVudC5hcGlVUkwgKyAndy12YXJpYW50cyc7XG4gIH1cblxuICBnZXRXX1ZhcmlhbnRzKCk6IE9ic2VydmFibGU8V19WYXJpYW50W10+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxXX1ZhcmlhbnRbXT4odGhpcy5hcGlVcmxXX1ZhcmlhbnRzKTtcbiAgfVxuXG4gIGdldFdfVmFyaWFudCh2YXJpYW50SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8V19WYXJpYW50PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8V19WYXJpYW50PihcbiAgICAgIGAke3RoaXMuYXBpVXJsV19WYXJpYW50c30vd29tZW4tcHJvZHVjdC8ke3ZhcmlhbnRJZH0vZm9ybS9lZGl0YFxuICAgICk7XG4gIH1cblxuICBnZXRQcm9kV19WYXJpYW50cyhwcm9kdWN0SWQpOiBPYnNlcnZhYmxlPFdfVmFyaWFudFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8V19WYXJpYW50W10+KFxuICAgICAgYCR7dGhpcy5hcGlVcmxXX1ZhcmlhbnRzfS93b21lbi1wcm9kdWN0LyR7cHJvZHVjdElkfWBcbiAgICApO1xuICB9XG5cbiAgY3JlYXRlV19WYXJpYW50KHZhcmlhbnREYXRhOiBGb3JtRGF0YSk6IE9ic2VydmFibGU8V19WYXJpYW50PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFdfVmFyaWFudD4odGhpcy5hcGlVcmxXX1ZhcmlhbnRzLCB2YXJpYW50RGF0YSk7XG4gIH1cblxuICB1cGRhdGVXX1ZhcmlhbnQodmFyaWFudERhdGE6IEZvcm1EYXRhLCB2YXJpYW50SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8V19WYXJpYW50PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQ8V19WYXJpYW50PihcbiAgICAgIGAke3RoaXMuYXBpVXJsV19WYXJpYW50c30vd29tZW4tcHJvZHVjdC8ke3ZhcmlhbnRJZH0vZm9ybS9lZGl0YCxcbiAgICAgIHZhcmlhbnREYXRhXG4gICAgKTtcbiAgfVxuXG4gIGRlbGV0ZVdfVmFyaWFudCh2YXJpYW50SWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlPGFueT4oYCR7dGhpcy5hcGlVcmxXX1ZhcmlhbnRzfS8ke3ZhcmlhbnRJZH1gKTtcbiAgfVxufVxuIl19