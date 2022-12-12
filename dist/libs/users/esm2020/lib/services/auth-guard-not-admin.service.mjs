import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from './localstorage.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./localstorage.service";
export class AuthGuardNotAdmin {
    constructor(router, localStorageToken) {
        this.router = router;
        this.localStorageToken = localStorageToken;
    }
    canActivate(route, state) {
        const token = localStorage.getItem("authToken");
        console.log("AUTH GUARD");
        if (token) {
            const tokenDecodeJson = this.parseJwt(token);
            console.log("DECODED AUTH TOKEN = " + tokenDecodeJson);
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
    _tokenExpired(expiration) {
        return Math.floor(new Date().getTime() / 1000) >= expiration;
    }
    parseJwt(token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return JSON.parse(jsonPayload);
    }
    ;
}
AuthGuardNotAdmin.ɵfac = function AuthGuardNotAdmin_Factory(t) { return new (t || AuthGuardNotAdmin)(i0.ɵɵinject(i1.Router), i0.ɵɵinject(i2.LocalstorageService)); };
AuthGuardNotAdmin.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthGuardNotAdmin, factory: AuthGuardNotAdmin.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthGuardNotAdmin, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.Router }, { type: i2.LocalstorageService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1ndWFyZC1ub3QtYWRtaW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdXNlcnMvc3JjL2xpYi9zZXJ2aWNlcy9hdXRoLWd1YXJkLW5vdC1hZG1pbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBUSxFQUEwRCxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNsRyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQUs3RCxNQUFNLE9BQU8saUJBQWlCO0lBRTVCLFlBQW9CLE1BQWMsRUFBVSxpQkFBc0M7UUFBOUQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBcUI7SUFBSSxDQUFDO0lBRXZGLFdBQVcsQ0FBQyxLQUE2QixFQUFFLEtBQTBCO1FBQ25FLE1BQU0sS0FBSyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7UUFHaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMxQixJQUFJLEtBQUssRUFBQztZQUNSLE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsR0FBRyxlQUFlLENBQUMsQ0FBQztZQUN2RCxPQUFPLElBQUksQ0FBQztTQUNiO1FBSUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBO1FBQ2hDLE9BQU8sS0FBSyxDQUFDO0lBR2YsQ0FBQztJQUVPLGFBQWEsQ0FBQyxVQUFVO1FBQzlCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLFVBQVUsQ0FBQztJQUMvRCxDQUFDO0lBSUQsUUFBUSxDQUFFLEtBQVk7UUFDcEIsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQyxJQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzdELElBQUksV0FBVyxHQUFHLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFTLENBQUM7WUFDN0UsT0FBTyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUViLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQUEsQ0FBQzs7a0ZBckNXLGlCQUFpQjt1RUFBakIsaUJBQWlCLFdBQWpCLGlCQUFpQixtQkFGaEIsTUFBTTt1RkFFUCxpQkFBaUI7Y0FIN0IsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICB7Q2FuQWN0aXZhdGUsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsUm91dGVyU3RhdGVTbmFwc2hvdCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IExvY2Fsc3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuL2xvY2Fsc3RvcmFnZS5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQXV0aEd1YXJkTm90QWRtaW4gaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBsb2NhbFN0b3JhZ2VUb2tlbjogTG9jYWxzdG9yYWdlU2VydmljZSkgeyB9XG5cbiAgY2FuQWN0aXZhdGUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KXtcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXV0aFRva2VuXCIpO1xuXG5cbiAgICBjb25zb2xlLmxvZyhcIkFVVEggR1VBUkRcIik7XG4gICAgaWYgKHRva2VuKXtcbiAgICAgIGNvbnN0IHRva2VuRGVjb2RlSnNvbiA9IHRoaXMucGFyc2VKd3QodG9rZW4pO1xuICAgICAgY29uc29sZS5sb2coXCJERUNPREVEIEFVVEggVE9LRU4gPSBcIiArIHRva2VuRGVjb2RlSnNvbik7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cblxuXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4nXSlcbiAgICByZXR1cm4gZmFsc2U7XG5cblxuICB9XG5cbiAgcHJpdmF0ZSBfdG9rZW5FeHBpcmVkKGV4cGlyYXRpb24pOiBib29sZWFue1xuICAgIHJldHVybiBNYXRoLmZsb29yKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCkgPj0gZXhwaXJhdGlvbjtcbiAgfVxuXG5cblxuICBwYXJzZUp3dCAodG9rZW46c3RyaW5nKSB7XG4gICAgdmFyIGJhc2U2NFVybCA9IHRva2VuLnNwbGl0KCcuJylbMV07XG4gICAgdmFyIGJhc2U2NCA9IGJhc2U2NFVybC5yZXBsYWNlKC8tL2csICcrJykucmVwbGFjZSgvXy9nLCAnLycpO1xuICAgIHZhciBqc29uUGF5bG9hZCA9IGRlY29kZVVSSUNvbXBvbmVudCh3aW5kb3cuYXRvYihiYXNlNjQpLnNwbGl0KCcnKS5tYXAoZnVuY3Rpb24oYykge1xuICAgICAgICByZXR1cm4gJyUnICsgKCcwMCcgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpKS5zbGljZSgtMik7XG4gICAgfSkuam9pbignJykpO1xuXG4gICAgcmV0dXJuIEpTT04ucGFyc2UoanNvblBheWxvYWQpO1xufTtcblxufVxuIl19