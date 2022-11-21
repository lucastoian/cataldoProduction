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
        console.log("updating the user with id: " + user.id);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdXNlcnMvc3JjL2xpYi9zZXJ2aWNlcy91c2Vycy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHckMsT0FBTyxLQUFLLFlBQVksTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFRcEQsTUFBTSxPQUFPLFlBQVk7SUFJdkIsWUFBb0IsSUFBZ0IsRUFBVSxXQUF3QixFQUEwQixXQUFXO1FBQXZGLFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNwRSxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsV0FBVyxHQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFJLE9BQU8sQ0FBQztRQUN2RCxZQUFZLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLENBQUM7SUFFM0UsQ0FBQztJQUVELFFBQVE7UUFDTixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFTLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBQ0QsT0FBTyxDQUFDLE1BQWM7UUFDcEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLElBQUksTUFBTSxFQUFFLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsVUFBVSxDQUFDLElBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBTyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFDRCxVQUFVLENBQUMsSUFBVTtRQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNyRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVELFVBQVUsQ0FBQyxNQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxJQUFJLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELGFBQWE7UUFDWCxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsWUFBWSxDQUFDO2FBQzVDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFnQixFQUFFLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBR0QsWUFBWTtRQUNWLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDdkYsT0FBTztnQkFDTCxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDWixJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUNmLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUdMLENBQUM7SUFFRCxVQUFVLENBQUMsVUFBa0I7UUFDM0IsT0FBTyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsY0FBYztRQUNaLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUM7SUFDdkMsQ0FBQztJQUVELGlCQUFpQjtRQUNmLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQztJQUMzQyxDQUFDOzt3RUE5RFUsWUFBWSx1RUFJMEQsYUFBYTtrRUFKbkYsWUFBWSxXQUFaLFlBQVksbUJBRlgsTUFBTTt1RkFFUCxZQUFZO2NBSHhCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7c0JBSzJFLE1BQU07dUJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL21vZGVscy91c2VyJztcclxuXHJcbmltcG9ydCAqIGFzIGNvdW50cmllc0xpYiBmcm9tICdpMThuLWlzby1jb3VudHJpZXMnO1xyXG5pbXBvcnQgeyBVc2Vyc0ZhY2FkZSB9IGZyb20gJy4uL3N0YXRlL3VzZXJzLmZhY2FkZSc7XHJcbi8vaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuLi8uLi8uLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQucHJvZCc7XHJcbmRlY2xhcmUgY29uc3QgcmVxdWlyZTogYW55O1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVc2Vyc1NlcnZpY2Uge1xyXG4gIHByaXZhdGUgZW52aXJvbm1lbnQ7XHJcbiAgcHJpdmF0ZSBhcGlVcmxVc2VycztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIHVzZXJzRmFjYWRlOiBVc2Vyc0ZhY2FkZSAsIEBJbmplY3QoJ2Vudmlyb25tZW50JykgZW52aXJvbm1lbnQpIHtcclxuICAgIHRoaXMuZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcclxuICAgIHRoaXMuYXBpVXJsVXNlcnMgPSAgdGhpcy5lbnZpcm9ubWVudC5hcGlVUkwgICsgJ3VzZXJzJztcclxuICAgIGNvdW50cmllc0xpYi5yZWdpc3RlckxvY2FsZShyZXF1aXJlKCdpMThuLWlzby1jb3VudHJpZXMvbGFuZ3MvZW4uanNvbicpKTtcclxuXHJcbiAgfVxyXG5cclxuICBnZXRVc2VycygpOiBPYnNlcnZhYmxlPFVzZXJbXT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8VXNlcltdPih0aGlzLmFwaVVybFVzZXJzKTtcclxuICB9XHJcbiAgZ2V0VXNlcih1c2VySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8VXNlcj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8VXNlcj4oYCR7dGhpcy5hcGlVcmxVc2Vyc30vJHt1c2VySWR9YCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVVc2VyKHVzZXI6IFVzZXIpOiBPYnNlcnZhYmxlPFVzZXI+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxVc2VyPih0aGlzLmFwaVVybFVzZXJzLCB1c2VyKTtcclxuICB9XHJcbiAgdXBkYXRlVXNlcih1c2VyOiBVc2VyKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGNvbnNvbGUubG9nKFwidXBkYXRpbmcgdGhlIHVzZXIgd2l0aCBpZDogXCIgKyB1c2VyLmlkKTtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucHV0PFVzZXI+KGAke3RoaXMuYXBpVXJsVXNlcnN9LyR7dXNlci5pZH1gLCB1c2VyKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZVVzZXIodXNlcklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGU8YW55PihgJHt0aGlzLmFwaVVybFVzZXJzfS8ke3VzZXJJZH1gKTtcclxuICB9XHJcblxyXG4gIGdldFVzZXJzQ291bnQoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgLmdldDxudW1iZXI+KGAke3RoaXMuYXBpVXJsVXNlcnN9L2dldC9jb3VudGApXHJcbiAgICAgIC5waXBlKG1hcCgob2JqZWN0VmFsdWU6IGFueSkgPT4gb2JqZWN0VmFsdWUudXNlckNvdW50KSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgZ2V0Q291bnRyaWVzKCk6IHsgaWQ6IHN0cmluZzsgbmFtZTogc3RyaW5nIH1bXSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXMoY291bnRyaWVzTGliLmdldE5hbWVzKCdlbicsIHsgc2VsZWN0OiAnb2ZmaWNpYWwnIH0pKS5tYXAoKGVudHJ5KSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgaWQ6IGVudHJ5WzBdLFxyXG4gICAgICAgIG5hbWU6IGVudHJ5WzFdXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcblxyXG4gIH1cclxuXHJcbiAgZ2V0Q291bnRyeShjb3VudHJ5S2V5OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGNvdW50cmllc0xpYi5nZXROYW1lKGNvdW50cnlLZXksICdlbicpO1xyXG4gIH1cclxuXHJcbiAgaW5pdEFwcFNlc3Npb24oKXtcclxuICAgIHRoaXMudXNlcnNGYWNhZGUuYnVpbGRVc2VyU2Vzc2lvbigpO1xyXG4gIH1cclxuXHJcbiAgb2JzZXJ2ZUN1cnJlbnRVc2VyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudXNlcnNGYWNhZGUuY3VycmVudFVzZXIkO1xyXG4gIH1cclxuXHJcbiAgaXNDdXJyZW50VXNlckF1dGgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy51c2Vyc0ZhY2FkZS5pc0F1dGhlbnRpY2F0ZWQkO1xyXG4gIH1cclxuXHJcbn1cclxuIl19