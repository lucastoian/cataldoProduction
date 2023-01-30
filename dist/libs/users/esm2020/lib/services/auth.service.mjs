import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LocalstorageService } from './localstorage.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@angular/router";
import * as i3 from "./localstorage.service";
export class AuthService {
    constructor(http, environment, router, token) {
        this.http = http;
        this.router = router;
        this.token = token;
        this.environment = environment;
        this.apiURLUsers = this.environment.apiURL + 'users';
    }
    login(email, password) {
        return this.http.post(`${this.apiURLUsers}/login`, { email, password });
    }
    google(credential) {
        return this.http.post(`${this.apiURLUsers}/google`, { credential });
    }
    logout() {
        this.token.removeToken();
        this.router.navigate(['/login']);
        console.log('logout');
    }
    register(user) {
        const headers = { 'content-type': 'application/json' };
        const body = JSON.stringify({ email: user.email, passwordHash: user.password });
        return this.http.post(this.environment.apiURL + "users/register", body, { 'headers': headers });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject('environment'), i0.ɵɵinject(i2.Router), i0.ɵɵinject(i3.LocalstorageService)); };
AuthService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                type: Inject,
                args: ['environment']
            }] }, { type: i2.Router }, { type: i3.LocalstorageService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy91c2Vycy9zcmMvbGliL3NlcnZpY2VzL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFHbEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7OztBQU83RCxNQUFNLE9BQU8sV0FBVztJQUl0QixZQUFvQixJQUFnQixFQUF5QixXQUFXLEVBQ2hFLE1BQWMsRUFDZCxLQUEwQjtRQUZkLFNBQUksR0FBSixJQUFJLENBQVk7UUFDNUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFVBQUssR0FBTCxLQUFLLENBQXFCO1FBQ2hDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO0lBRXZELENBQUM7SUFFRCxLQUFLLENBQUMsS0FBYSxFQUFFLFFBQWdCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBRUQsTUFBTSxDQUFDLFVBQWtCO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxTQUFTLEVBQUUsRUFBRSxVQUFVLEVBQUMsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFHRCxNQUFNO1FBQ0osSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUV4QixDQUFDO0lBQ0QsUUFBUSxDQUFDLElBQVM7UUFDaEIsTUFBTSxPQUFPLEdBQUcsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUMsQ0FBQTtRQUNyRCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUMsQ0FBQyxDQUFDO1FBQzdFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsZ0JBQWdCLEVBQUUsSUFBSSxFQUFDLEVBQUMsU0FBUyxFQUFDLE9BQU8sRUFBQyxDQUFDLENBQUM7SUFFOUYsQ0FBQzs7c0VBaENVLFdBQVcsMENBSXdCLGFBQWE7aUVBSmhELFdBQVcsV0FBWCxXQUFXLG1CQUpWLE1BQU07dUZBSVAsV0FBVztjQUx2QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7O3NCQU93QyxNQUFNO3VCQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vbW9kZWxzL3VzZXInO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuLy9pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4uLy4uLy4uL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudC5wcm9kJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBMb2NhbHN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9sb2NhbHN0b3JhZ2Uuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuXG5cbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG4gIHByaXZhdGUgZW52aXJvbm1lbnQ7XG4gIHByaXZhdGUgYXBpVVJMVXNlcnM7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBASW5qZWN0KCdlbnZpcm9ubWVudCcpIGVudmlyb25tZW50LFxuICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICBwcml2YXRlIHRva2VuOiBMb2NhbHN0b3JhZ2VTZXJ2aWNlKSB7XG4gICAgdGhpcy5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xuICAgIHRoaXMuYXBpVVJMVXNlcnMgPSB0aGlzLmVudmlyb25tZW50LmFwaVVSTCArICd1c2Vycyc7XG5cbiAgfVxuXG4gIGxvZ2luKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFVzZXI+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8VXNlcj4oYCR7dGhpcy5hcGlVUkxVc2Vyc30vbG9naW5gLCB7IGVtYWlsLCBwYXNzd29yZCB9KTtcbiAgfVxuXG4gIGdvb2dsZShjcmVkZW50aWFsOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFVzZXI+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8VXNlcj4oYCR7dGhpcy5hcGlVUkxVc2Vyc30vZ29vZ2xlYCwgeyBjcmVkZW50aWFsfSk7XG4gIH1cblxuXG4gIGxvZ291dCgpIHtcbiAgICB0aGlzLnRva2VuLnJlbW92ZVRva2VuKCk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4nXSk7XG4gICAgY29uc29sZS5sb2coJ2xvZ291dCcpO1xuXG4gIH1cbiAgcmVnaXN0ZXIodXNlcjpVc2VyKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBoZWFkZXJzID0geyAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfVxuICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh7ZW1haWw6IHVzZXIuZW1haWwscGFzc3dvcmRIYXNoOiB1c2VyLnBhc3N3b3JkfSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuZW52aXJvbm1lbnQuYXBpVVJMICsgXCJ1c2Vycy9yZWdpc3RlclwiLCBib2R5LHsnaGVhZGVycyc6aGVhZGVyc30pO1xuXG4gIH1cblxufVxuIl19