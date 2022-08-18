import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class W_VariantsService {
    constructor(http) {
        this.http = http;
        this.apiUrlW_Variants = 'http://localhost:3000/api/v1/' + 'w-variants';
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
W_VariantsService.ɵfac = function W_VariantsService_Factory(t) { return new (t || W_VariantsService)(i0.ɵɵinject(i1.HttpClient)); };
W_VariantsService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: W_VariantsService, factory: W_VariantsService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(W_VariantsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidy12YXJpYW50cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wcm9kdWN0cy9zcmMvbGliL3NlcnZpY2VzL3ctdmFyaWFudHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBU2pELE1BQU0sT0FBTyxpQkFBaUI7SUFHNUIsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUZwQyxxQkFBZ0IsR0FBRywrQkFBK0IsR0FBRyxZQUFZLENBQUM7SUFFM0IsQ0FBQztJQUV4QyxhQUFhO1FBQ1gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBYyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsWUFBWSxDQUFDLFNBQWlCO1FBQzVCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2xCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixrQkFBa0IsU0FBUyxZQUFZLENBQ2hFLENBQUM7SUFDSixDQUFDO0lBRUQsaUJBQWlCLENBQUMsU0FBUztRQUN6QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNsQixHQUFHLElBQUksQ0FBQyxnQkFBZ0Isa0JBQWtCLFNBQVMsRUFBRSxDQUN0RCxDQUFDO0lBQ0osQ0FBQztJQUVELGVBQWUsQ0FBQyxXQUFxQjtRQUNuQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFZLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQsZUFBZSxDQUFDLFdBQXFCLEVBQUUsU0FBaUI7UUFDdEQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDbEIsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLGtCQUFrQixTQUFTLFlBQVksRUFDL0QsV0FBVyxDQUNaLENBQUM7SUFDSixDQUFDO0lBRUQsZUFBZSxDQUFDLFNBQWlCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQU0sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLElBQUksU0FBUyxFQUFFLENBQUMsQ0FBQztJQUN4RSxDQUFDOztrRkFsQ1UsaUJBQWlCO3VFQUFqQixpQkFBaUIsV0FBakIsaUJBQWlCLG1CQUZoQixNQUFNO3VGQUVQLGlCQUFpQjtjQUg3QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnR9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgV19WYXJpYW50IH0gZnJvbSBcIi4uL21vZGVscy93LXZhcmlhbnRcIjtcclxuXHJcblxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFdfVmFyaWFudHNTZXJ2aWNlIHtcclxuICBhcGlVcmxXX1ZhcmlhbnRzID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEvJyArICd3LXZhcmlhbnRzJztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxyXG5cclxuICBnZXRXX1ZhcmlhbnRzKCk6IE9ic2VydmFibGU8V19WYXJpYW50W10+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFdfVmFyaWFudFtdPih0aGlzLmFwaVVybFdfVmFyaWFudHMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0V19WYXJpYW50KHZhcmlhbnRJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxXX1ZhcmlhbnQ+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFdfVmFyaWFudD4oXHJcbiAgICAgIGAke3RoaXMuYXBpVXJsV19WYXJpYW50c30vd29tZW4tcHJvZHVjdC8ke3ZhcmlhbnRJZH0vZm9ybS9lZGl0YFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdldFByb2RXX1ZhcmlhbnRzKHByb2R1Y3RJZCk6IE9ic2VydmFibGU8V19WYXJpYW50W10+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFdfVmFyaWFudFtdPihcclxuICAgICAgYCR7dGhpcy5hcGlVcmxXX1ZhcmlhbnRzfS93b21lbi1wcm9kdWN0LyR7cHJvZHVjdElkfWBcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVXX1ZhcmlhbnQodmFyaWFudERhdGE6IEZvcm1EYXRhKTogT2JzZXJ2YWJsZTxXX1ZhcmlhbnQ+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxXX1ZhcmlhbnQ+KHRoaXMuYXBpVXJsV19WYXJpYW50cywgdmFyaWFudERhdGEpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlV19WYXJpYW50KHZhcmlhbnREYXRhOiBGb3JtRGF0YSwgdmFyaWFudElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFdfVmFyaWFudD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQ8V19WYXJpYW50PihcclxuICAgICAgYCR7dGhpcy5hcGlVcmxXX1ZhcmlhbnRzfS93b21lbi1wcm9kdWN0LyR7dmFyaWFudElkfS9mb3JtL2VkaXRgLFxyXG4gICAgICB2YXJpYW50RGF0YVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZVdfVmFyaWFudCh2YXJpYW50SWQ6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGU8YW55PihgJHt0aGlzLmFwaVVybFdfVmFyaWFudHN9LyR7dmFyaWFudElkfWApO1xyXG4gIH1cclxufVxyXG4iXX0=