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
        return this.http.post(`https://cataldoproduction.herokuapp.com/api/v1/login`, { email, password });
    }
    logout() {
        this.token.removeToken();
        this.router.navigate(['/login']);
        console.log('logout');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy91c2Vycy9zcmMvbGliL3NlcnZpY2VzL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFHbEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7OztBQU83RCxNQUFNLE9BQU8sV0FBVztJQUl0QixZQUFvQixJQUFnQixFQUF5QixXQUFXLEVBQ2hFLE1BQWMsRUFDZCxLQUEwQjtRQUZkLFNBQUksR0FBSixJQUFJLENBQVk7UUFDNUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFVBQUssR0FBTCxLQUFLLENBQXFCO1FBQ2hDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO0lBRXZELENBQUM7SUFFRCxLQUFLLENBQUMsS0FBYSxFQUFFLFFBQWdCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQU8sc0RBQXNELEVBQUUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUMzRyxDQUFDO0lBR0QsTUFBTTtRQUNKLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFeEIsQ0FBQzs7c0VBdEJVLFdBQVcsMENBSXdCLGFBQWE7aUVBSmhELFdBQVcsV0FBWCxXQUFXLG1CQUpWLE1BQU07dUZBSVAsV0FBVztjQUx2QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7O3NCQU93QyxNQUFNO3VCQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vbW9kZWxzL3VzZXInO1xyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuLy9pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4uLy4uLy4uL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudC5wcm9kJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBMb2NhbHN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9sb2NhbHN0b3JhZ2Uuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcclxuICBwcml2YXRlIGVudmlyb25tZW50O1xyXG4gIHByaXZhdGUgYXBpVVJMVXNlcnM7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgQEluamVjdCgnZW52aXJvbm1lbnQnKSBlbnZpcm9ubWVudCxcclxuICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gIHByaXZhdGUgdG9rZW46IExvY2Fsc3RvcmFnZVNlcnZpY2UpIHtcclxuICAgIHRoaXMuZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcclxuICAgIHRoaXMuYXBpVVJMVXNlcnMgPSB0aGlzLmVudmlyb25tZW50LmFwaVVSTCArICd1c2Vycyc7XHJcblxyXG4gIH1cclxuXHJcbiAgbG9naW4oZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IE9ic2VydmFibGU8VXNlcj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFVzZXI+KGBodHRwczovL2NhdGFsZG9wcm9kdWN0aW9uLmhlcm9rdWFwcC5jb20vYXBpL3YxL2xvZ2luYCwgeyBlbWFpbCwgcGFzc3dvcmQgfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgbG9nb3V0KCkge1xyXG4gICAgdGhpcy50b2tlbi5yZW1vdmVUb2tlbigpO1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4nXSk7XHJcbiAgICBjb25zb2xlLmxvZygnbG9nb3V0Jyk7XHJcblxyXG4gIH1cclxuXHJcbn1cclxuIl19