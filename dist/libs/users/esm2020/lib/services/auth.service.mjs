import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LocalstorageService } from './localstorage.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@angular/router";
import * as i3 from "./localstorage.service";
export class AuthService {
    constructor(http, router, token) {
        this.http = http;
        this.router = router;
        this.token = token;
        this.apiURLUsers = 'http://localhost:3000/api/v1/' + 'users';
    }
    login(email, password) {
        return this.http.post(`${this.apiURLUsers}/login`, { email, password });
    }
    logout() {
        this.token.removeToken();
        this.router.navigate(['/login']);
        console.log('logout');
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.Router), i0.ɵɵinject(i3.LocalstorageService)); };
AuthService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }, { type: i2.Router }, { type: i3.LocalstorageService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy91c2Vycy9zcmMvbGliL3NlcnZpY2VzL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUdsRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7O0FBSzdELE1BQU0sT0FBTyxXQUFXO0lBSXRCLFlBQ1UsSUFBZ0IsRUFDaEIsTUFBYyxFQUNkLEtBQTBCO1FBRjFCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFVBQUssR0FBTCxLQUFLLENBQXFCO1FBTnBDLGdCQUFXLEdBQUcsK0JBQStCLEdBQUcsT0FBTyxDQUFDO0lBT3BELENBQUM7SUFFTCxLQUFLLENBQUMsS0FBYSxFQUFFLFFBQWdCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBR0QsTUFBTTtRQUNKLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFeEIsQ0FBQzs7c0VBcEJVLFdBQVc7aUVBQVgsV0FBVyxXQUFYLFdBQVcsbUJBRlYsTUFBTTt1RkFFUCxXQUFXO2NBSHZCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9tb2RlbHMvdXNlcic7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuLy9pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4uLy4uLy4uL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudC5wcm9kJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBMb2NhbHN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9sb2NhbHN0b3JhZ2Uuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XHJcbiAgYXBpVVJMVXNlcnMgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MS8nICsgJ3VzZXJzJztcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgdG9rZW46IExvY2Fsc3RvcmFnZVNlcnZpY2VcclxuICApIHsgfVxyXG5cclxuICBsb2dpbihlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxVc2VyPiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8VXNlcj4oYCR7dGhpcy5hcGlVUkxVc2Vyc30vbG9naW5gLCB7IGVtYWlsLCBwYXNzd29yZCB9KTtcclxuICB9XHJcblxyXG5cclxuICBsb2dvdXQoKSB7XHJcbiAgICB0aGlzLnRva2VuLnJlbW92ZVRva2VuKCk7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddKTtcclxuICAgIGNvbnNvbGUubG9nKCdsb2dvdXQnKTtcclxuICAgIFxyXG4gIH1cclxuXHJcbn1cclxuIl19