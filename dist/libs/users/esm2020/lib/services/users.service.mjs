import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as countriesLib from 'i18n-iso-countries';
import { UsersFacade } from '../state/users.facade';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../state/users.facade";
export class UsersService {
    constructor(http, usersFacade, environment) {
        this.http = http;
        this.usersFacade = usersFacade;
        this.environment = environment;
        this.apiUrlUsers = this.environment.apiURL + 'users';
        countriesLib.registerLocale(require('i18n-iso-countries/langs/en.json'));
    }
    getUsers() {
        return this.http.get(this.apiUrlUsers);
    }
    getUser(userId) {
        return this.http.get(`${this.apiUrlUsers}/${userId}`);
    }
    createUser(user) {
        return this.http.post(this.apiUrlUsers, user);
    }
    updateUser(user) {
        return this.http.put(`${this.apiUrlUsers}/${user.id}`, user);
    }
    deleteUser(userId) {
        return this.http.delete(`${this.apiUrlUsers}/${userId}`);
    }
    getUsersCount() {
        return this.http
            .get(`${this.apiUrlUsers}/get/count`)
            .pipe(map((objectValue) => objectValue.userCount));
    }
    getCountries() {
        return Object.entries(countriesLib.getNames('en', { select: 'official' })).map((entry) => {
            return {
                id: entry[0],
                name: entry[1]
            };
        });
    }
    getCountry(countryKey) {
        return countriesLib.getName(countryKey, 'en');
    }
    initAppSession() {
        this.usersFacade.buildUserSession();
    }
    observeCurrentUser() {
        return this.usersFacade.currentUser$;
    }
    isCurrentUserAuth() {
        return this.usersFacade.isAuthenticated$;
    }
}
UsersService.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.UsersFacade), i0.ɵɵinject('environment')); };
UsersService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: UsersService, factory: UsersService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UsersService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.HttpClient }, { type: i2.UsersFacade }, { type: undefined, decorators: [{
                type: Inject,
                args: ['environment']
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdXNlcnMvc3JjL2xpYi9zZXJ2aWNlcy91c2Vycy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHckMsT0FBTyxLQUFLLFlBQVksTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFRcEQsTUFBTSxPQUFPLFlBQVk7SUFJdkIsWUFBb0IsSUFBZ0IsRUFBVSxXQUF3QixFQUEwQixXQUFXO1FBQXZGLFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNwRSxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsV0FBVyxHQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFJLE9BQU8sQ0FBQztRQUN2RCxZQUFZLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLENBQUM7SUFFM0UsQ0FBQztJQUVELFFBQVE7UUFDTixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFTLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBQ0QsT0FBTyxDQUFDLE1BQWM7UUFDcEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLElBQUksTUFBTSxFQUFFLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsVUFBVSxDQUFDLElBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBTyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFDRCxVQUFVLENBQUMsSUFBVTtRQUNuQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVELFVBQVUsQ0FBQyxNQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxJQUFJLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELGFBQWE7UUFDWCxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsWUFBWSxDQUFDO2FBQzVDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFnQixFQUFFLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBR0QsWUFBWTtRQUNWLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDdkYsT0FBTztnQkFDTCxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDWixJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUNmLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUdMLENBQUM7SUFFRCxVQUFVLENBQUMsVUFBa0I7UUFDM0IsT0FBTyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsY0FBYztRQUNaLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUM7SUFDdkMsQ0FBQztJQUVELGlCQUFpQjtRQUNmLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQztJQUMzQyxDQUFDOzt3RUE3RFUsWUFBWSx1RUFJMEQsYUFBYTtrRUFKbkYsWUFBWSxXQUFaLFlBQVksbUJBRlgsTUFBTTt1RkFFUCxZQUFZO2NBSHhCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7c0JBSzJFLE1BQU07dUJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL21vZGVscy91c2VyJztcclxuXHJcbmltcG9ydCAqIGFzIGNvdW50cmllc0xpYiBmcm9tICdpMThuLWlzby1jb3VudHJpZXMnO1xyXG5pbXBvcnQgeyBVc2Vyc0ZhY2FkZSB9IGZyb20gJy4uL3N0YXRlL3VzZXJzLmZhY2FkZSc7XHJcbi8vaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuLi8uLi8uLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQucHJvZCc7XHJcbmRlY2xhcmUgY29uc3QgcmVxdWlyZTogYW55O1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVc2Vyc1NlcnZpY2Uge1xyXG4gIHByaXZhdGUgZW52aXJvbm1lbnQ7XHJcbiAgcHJpdmF0ZSBhcGlVcmxVc2VycztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIHVzZXJzRmFjYWRlOiBVc2Vyc0ZhY2FkZSAsIEBJbmplY3QoJ2Vudmlyb25tZW50JykgZW52aXJvbm1lbnQpIHtcclxuICAgIHRoaXMuZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcclxuICAgIHRoaXMuYXBpVXJsVXNlcnMgPSAgdGhpcy5lbnZpcm9ubWVudC5hcGlVUkwgICsgJ3VzZXJzJztcclxuICAgIGNvdW50cmllc0xpYi5yZWdpc3RlckxvY2FsZShyZXF1aXJlKCdpMThuLWlzby1jb3VudHJpZXMvbGFuZ3MvZW4uanNvbicpKTtcclxuXHJcbiAgfVxyXG5cclxuICBnZXRVc2VycygpOiBPYnNlcnZhYmxlPFVzZXJbXT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8VXNlcltdPih0aGlzLmFwaVVybFVzZXJzKTtcclxuICB9XHJcbiAgZ2V0VXNlcih1c2VySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8VXNlcj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8VXNlcj4oYCR7dGhpcy5hcGlVcmxVc2Vyc30vJHt1c2VySWR9YCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVVc2VyKHVzZXI6IFVzZXIpOiBPYnNlcnZhYmxlPFVzZXI+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxVc2VyPih0aGlzLmFwaVVybFVzZXJzLCB1c2VyKTtcclxuICB9XHJcbiAgdXBkYXRlVXNlcih1c2VyOiBVc2VyKTogT2JzZXJ2YWJsZTxVc2VyPiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxVc2VyPihgJHt0aGlzLmFwaVVybFVzZXJzfS8ke3VzZXIuaWR9YCwgdXNlcik7XHJcbiAgfVxyXG5cclxuICBkZWxldGVVc2VyKHVzZXJJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlPGFueT4oYCR7dGhpcy5hcGlVcmxVc2Vyc30vJHt1c2VySWR9YCk7XHJcbiAgfVxyXG5cclxuICBnZXRVc2Vyc0NvdW50KCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgIC5nZXQ8bnVtYmVyPihgJHt0aGlzLmFwaVVybFVzZXJzfS9nZXQvY291bnRgKVxyXG4gICAgICAucGlwZShtYXAoKG9iamVjdFZhbHVlOiBhbnkpID0+IG9iamVjdFZhbHVlLnVzZXJDb3VudCkpO1xyXG4gIH1cclxuXHJcblxyXG4gIGdldENvdW50cmllcygpOiB7IGlkOiBzdHJpbmc7IG5hbWU6IHN0cmluZyB9W10ge1xyXG4gICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKGNvdW50cmllc0xpYi5nZXROYW1lcygnZW4nLCB7IHNlbGVjdDogJ29mZmljaWFsJyB9KSkubWFwKChlbnRyeSkgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGlkOiBlbnRyeVswXSxcclxuICAgICAgICBuYW1lOiBlbnRyeVsxXVxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcblxyXG5cclxuICB9XHJcblxyXG4gIGdldENvdW50cnkoY291bnRyeUtleTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBjb3VudHJpZXNMaWIuZ2V0TmFtZShjb3VudHJ5S2V5LCAnZW4nKTtcclxuICB9XHJcblxyXG4gIGluaXRBcHBTZXNzaW9uKCl7XHJcbiAgICB0aGlzLnVzZXJzRmFjYWRlLmJ1aWxkVXNlclNlc3Npb24oKTtcclxuICB9XHJcblxyXG4gIG9ic2VydmVDdXJyZW50VXNlcigpIHtcclxuICAgIHJldHVybiB0aGlzLnVzZXJzRmFjYWRlLmN1cnJlbnRVc2VyJDtcclxuICB9XHJcblxyXG4gIGlzQ3VycmVudFVzZXJBdXRoKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudXNlcnNGYWNhZGUuaXNBdXRoZW50aWNhdGVkJDtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==