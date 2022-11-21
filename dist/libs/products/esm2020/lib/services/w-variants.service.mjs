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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidy12YXJpYW50cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wcm9kdWN0cy9zcmMvbGliL3NlcnZpY2VzL3ctdmFyaWFudHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7OztBQVNqRCxNQUFNLE9BQU8saUJBQWlCO0lBSTVCLFlBQW9CLElBQWdCLEVBQXlCLFdBQVc7UUFBcEQsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNsQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDO0lBQ2pFLENBQUM7SUFFRCxhQUFhO1FBQ1gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBYyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsWUFBWSxDQUFDLFNBQWlCO1FBQzVCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2xCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixrQkFBa0IsU0FBUyxZQUFZLENBQ2hFLENBQUM7SUFDSixDQUFDO0lBRUQsaUJBQWlCLENBQUMsU0FBUztRQUN6QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNsQixHQUFHLElBQUksQ0FBQyxnQkFBZ0Isa0JBQWtCLFNBQVMsRUFBRSxDQUN0RCxDQUFDO0lBQ0osQ0FBQztJQUVELGVBQWUsQ0FBQyxXQUFxQjtRQUNuQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFZLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQsZUFBZSxDQUFDLFdBQXFCLEVBQUUsU0FBaUI7UUFDdEQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDbEIsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLGtCQUFrQixTQUFTLFlBQVksRUFDL0QsV0FBVyxDQUNaLENBQUM7SUFDSixDQUFDO0lBRUQsZUFBZSxDQUFDLFNBQWlCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQU0sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLElBQUksU0FBUyxFQUFFLENBQUMsQ0FBQztJQUN4RSxDQUFDOztrRkF0Q1UsaUJBQWlCLDBDQUlrQixhQUFhO3VFQUpoRCxpQkFBaUIsV0FBakIsaUJBQWlCLG1CQUZoQixNQUFNO3VGQUVQLGlCQUFpQjtjQUg3QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7O3NCQUt3QyxNQUFNO3VCQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnR9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgV19WYXJpYW50IH0gZnJvbSBcIi4uL21vZGVscy93LXZhcmlhbnRcIjtcclxuXHJcblxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFdfVmFyaWFudHNTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgZW52aXJvbm1lbnQ7XHJcbiAgICBwcml2YXRlIGFwaVVybFdfVmFyaWFudHM7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgQEluamVjdCgnZW52aXJvbm1lbnQnKSBlbnZpcm9ubWVudCkge1xyXG4gICAgdGhpcy5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xyXG4gICAgdGhpcy5hcGlVcmxXX1ZhcmlhbnRzID0gdGhpcy5lbnZpcm9ubWVudC5hcGlVUkwgKyAndy12YXJpYW50cyc7XHJcbiAgfVxyXG5cclxuICBnZXRXX1ZhcmlhbnRzKCk6IE9ic2VydmFibGU8V19WYXJpYW50W10+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFdfVmFyaWFudFtdPih0aGlzLmFwaVVybFdfVmFyaWFudHMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0V19WYXJpYW50KHZhcmlhbnRJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxXX1ZhcmlhbnQ+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFdfVmFyaWFudD4oXHJcbiAgICAgIGAke3RoaXMuYXBpVXJsV19WYXJpYW50c30vd29tZW4tcHJvZHVjdC8ke3ZhcmlhbnRJZH0vZm9ybS9lZGl0YFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdldFByb2RXX1ZhcmlhbnRzKHByb2R1Y3RJZCk6IE9ic2VydmFibGU8V19WYXJpYW50W10+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFdfVmFyaWFudFtdPihcclxuICAgICAgYCR7dGhpcy5hcGlVcmxXX1ZhcmlhbnRzfS93b21lbi1wcm9kdWN0LyR7cHJvZHVjdElkfWBcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVXX1ZhcmlhbnQodmFyaWFudERhdGE6IEZvcm1EYXRhKTogT2JzZXJ2YWJsZTxXX1ZhcmlhbnQ+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxXX1ZhcmlhbnQ+KHRoaXMuYXBpVXJsV19WYXJpYW50cywgdmFyaWFudERhdGEpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlV19WYXJpYW50KHZhcmlhbnREYXRhOiBGb3JtRGF0YSwgdmFyaWFudElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFdfVmFyaWFudD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQ8V19WYXJpYW50PihcclxuICAgICAgYCR7dGhpcy5hcGlVcmxXX1ZhcmlhbnRzfS93b21lbi1wcm9kdWN0LyR7dmFyaWFudElkfS9mb3JtL2VkaXRgLFxyXG4gICAgICB2YXJpYW50RGF0YVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZVdfVmFyaWFudCh2YXJpYW50SWQ6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGU8YW55PihgJHt0aGlzLmFwaVVybFdfVmFyaWFudHN9LyR7dmFyaWFudElkfWApO1xyXG4gIH1cclxufVxyXG4iXX0=