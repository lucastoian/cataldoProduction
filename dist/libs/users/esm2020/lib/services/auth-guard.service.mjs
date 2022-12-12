import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from './localstorage.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./localstorage.service";
export class AuthGuard {
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
            if (tokenDecodeJson.isAdmin)
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
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(i0.ɵɵinject(i1.Router), i0.ɵɵinject(i2.LocalstorageService)); };
AuthGuard.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthGuard, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.Router }, { type: i2.LocalstorageService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1ndWFyZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy91c2Vycy9zcmMvbGliL3NlcnZpY2VzL2F1dGgtZ3VhcmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQVEsRUFBMEQsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbEcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFLN0QsTUFBTSxPQUFPLFNBQVM7SUFFcEIsWUFBb0IsTUFBYyxFQUFVLGlCQUFzQztRQUE5RCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFxQjtJQUFJLENBQUM7SUFFdkYsV0FBVyxDQUFDLEtBQTZCLEVBQUUsS0FBMEI7UUFDbkUsTUFBTSxLQUFLLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUdoRCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzFCLElBQUksS0FBSyxFQUFDO1lBQ1IsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixHQUFHLGVBQWUsQ0FBQyxDQUFDO1lBQ3ZELElBQUksZUFBZSxDQUFDLE9BQU87Z0JBQUUsT0FBTyxJQUFJLENBQUM7U0FDMUM7UUFJRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7UUFDaEMsT0FBTyxLQUFLLENBQUM7SUFHZixDQUFDO0lBRU8sYUFBYSxDQUFDLFVBQVU7UUFDOUIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksVUFBVSxDQUFDO0lBQy9ELENBQUM7SUFJRCxRQUFRLENBQUUsS0FBWTtRQUNwQixJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLElBQUksTUFBTSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDN0QsSUFBSSxXQUFXLEdBQUcsa0JBQWtCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVMsQ0FBQztZQUM3RSxPQUFPLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRWIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFBQSxDQUFDOztrRUFyQ1csU0FBUzsrREFBVCxTQUFTLFdBQVQsU0FBUyxtQkFGUixNQUFNO3VGQUVQLFNBQVM7Y0FIckIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICB7Q2FuQWN0aXZhdGUsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsUm91dGVyU3RhdGVTbmFwc2hvdCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IExvY2Fsc3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuL2xvY2Fsc3RvcmFnZS5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQXV0aEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgbG9jYWxTdG9yYWdlVG9rZW46IExvY2Fsc3RvcmFnZVNlcnZpY2UpIHsgfVxuXG4gIGNhbkFjdGl2YXRlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCl7XG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImF1dGhUb2tlblwiKTtcbiBcblxuICAgIGNvbnNvbGUubG9nKFwiQVVUSCBHVUFSRFwiKTtcbiAgICBpZiAodG9rZW4pe1xuICAgICAgY29uc3QgdG9rZW5EZWNvZGVKc29uID0gdGhpcy5wYXJzZUp3dCh0b2tlbik7XG4gICAgICBjb25zb2xlLmxvZyhcIkRFQ09ERUQgQVVUSCBUT0tFTiA9IFwiICsgdG9rZW5EZWNvZGVKc29uKTtcbiAgICAgIGlmICh0b2tlbkRlY29kZUpzb24uaXNBZG1pbikgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgICBcbiAgXG4gICAgXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4nXSlcbiAgICByZXR1cm4gZmFsc2U7XG5cblxuICB9XG4gICBcbiAgcHJpdmF0ZSBfdG9rZW5FeHBpcmVkKGV4cGlyYXRpb24pOiBib29sZWFue1xuICAgIHJldHVybiBNYXRoLmZsb29yKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCkgPj0gZXhwaXJhdGlvbjtcbiAgfVxuXG5cbiAgXG4gIHBhcnNlSnd0ICh0b2tlbjpzdHJpbmcpIHtcbiAgICB2YXIgYmFzZTY0VXJsID0gdG9rZW4uc3BsaXQoJy4nKVsxXTtcbiAgICB2YXIgYmFzZTY0ID0gYmFzZTY0VXJsLnJlcGxhY2UoLy0vZywgJysnKS5yZXBsYWNlKC9fL2csICcvJyk7XG4gICAgdmFyIGpzb25QYXlsb2FkID0gZGVjb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5hdG9iKGJhc2U2NCkuc3BsaXQoJycpLm1hcChmdW5jdGlvbihjKSB7XG4gICAgICAgIHJldHVybiAnJScgKyAoJzAwJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikpLnNsaWNlKC0yKTtcbiAgICB9KS5qb2luKCcnKSk7XG5cbiAgICByZXR1cm4gSlNPTi5wYXJzZShqc29uUGF5bG9hZCk7XG59O1xuXG59XG4gIl19