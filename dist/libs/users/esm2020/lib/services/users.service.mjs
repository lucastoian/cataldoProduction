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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdXNlcnMvc3JjL2xpYi9zZXJ2aWNlcy91c2Vycy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHckMsT0FBTyxLQUFLLFlBQVksTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFRcEQsTUFBTSxPQUFPLFlBQVk7SUFJdkIsWUFBb0IsSUFBZ0IsRUFBVSxXQUF3QixFQUEwQixXQUFXO1FBQXZGLFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNwRSxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsV0FBVyxHQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFJLE9BQU8sQ0FBQztRQUN2RCxZQUFZLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLENBQUM7SUFFM0UsQ0FBQztJQUVELFFBQVE7UUFDTixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFTLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBQ0QsT0FBTyxDQUFDLE1BQWM7UUFDcEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLElBQUksTUFBTSxFQUFFLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsVUFBVSxDQUFDLElBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBTyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFDRCxVQUFVLENBQUMsSUFBVTtRQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNyRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVELFVBQVUsQ0FBQyxNQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxJQUFJLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELGFBQWE7UUFDWCxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsWUFBWSxDQUFDO2FBQzVDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFnQixFQUFFLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBR0QsWUFBWTtRQUNWLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDdkYsT0FBTztnQkFDTCxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDWixJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUNmLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUdMLENBQUM7SUFFRCxVQUFVLENBQUMsVUFBa0I7UUFDM0IsT0FBTyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsY0FBYztRQUNaLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUM7SUFDdkMsQ0FBQztJQUVELGlCQUFpQjtRQUNmLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQztJQUMzQyxDQUFDOzt3RUE5RFUsWUFBWSx1RUFJMEQsYUFBYTtrRUFKbkYsWUFBWSxXQUFaLFlBQVksbUJBRlgsTUFBTTt1RkFFUCxZQUFZO2NBSHhCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7c0JBSzJFLE1BQU07dUJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9tb2RlbHMvdXNlcic7XG5cbmltcG9ydCAqIGFzIGNvdW50cmllc0xpYiBmcm9tICdpMThuLWlzby1jb3VudHJpZXMnO1xuaW1wb3J0IHsgVXNlcnNGYWNhZGUgfSBmcm9tICcuLi9zdGF0ZS91c2Vycy5mYWNhZGUnO1xuLy9pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4uLy4uLy4uL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudC5wcm9kJztcbmRlY2xhcmUgY29uc3QgcmVxdWlyZTogYW55O1xuXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBVc2Vyc1NlcnZpY2Uge1xuICBwcml2YXRlIGVudmlyb25tZW50O1xuICBwcml2YXRlIGFwaVVybFVzZXJzO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSB1c2Vyc0ZhY2FkZTogVXNlcnNGYWNhZGUgLCBASW5qZWN0KCdlbnZpcm9ubWVudCcpIGVudmlyb25tZW50KSB7XG4gICAgdGhpcy5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xuICAgIHRoaXMuYXBpVXJsVXNlcnMgPSAgdGhpcy5lbnZpcm9ubWVudC5hcGlVUkwgICsgJ3VzZXJzJztcbiAgICBjb3VudHJpZXNMaWIucmVnaXN0ZXJMb2NhbGUocmVxdWlyZSgnaTE4bi1pc28tY291bnRyaWVzL2xhbmdzL2VuLmpzb24nKSk7XG5cbiAgfVxuXG4gIGdldFVzZXJzKCk6IE9ic2VydmFibGU8VXNlcltdPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8VXNlcltdPih0aGlzLmFwaVVybFVzZXJzKTtcbiAgfVxuICBnZXRVc2VyKHVzZXJJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxVc2VyPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8VXNlcj4oYCR7dGhpcy5hcGlVcmxVc2Vyc30vJHt1c2VySWR9YCk7XG4gIH1cblxuICBjcmVhdGVVc2VyKHVzZXI6IFVzZXIpOiBPYnNlcnZhYmxlPFVzZXI+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8VXNlcj4odGhpcy5hcGlVcmxVc2VycywgdXNlcik7XG4gIH1cbiAgdXBkYXRlVXNlcih1c2VyOiBVc2VyKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zb2xlLmxvZyhcInVwZGF0aW5nIHRoZSB1c2VyIHdpdGggaWQ6IFwiICsgdXNlci5pZCk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQ8VXNlcj4oYCR7dGhpcy5hcGlVcmxVc2Vyc30vJHt1c2VyLmlkfWAsIHVzZXIpO1xuICB9XG5cbiAgZGVsZXRlVXNlcih1c2VySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGU8YW55PihgJHt0aGlzLmFwaVVybFVzZXJzfS8ke3VzZXJJZH1gKTtcbiAgfVxuXG4gIGdldFVzZXJzQ291bnQoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PG51bWJlcj4oYCR7dGhpcy5hcGlVcmxVc2Vyc30vZ2V0L2NvdW50YClcbiAgICAgIC5waXBlKG1hcCgob2JqZWN0VmFsdWU6IGFueSkgPT4gb2JqZWN0VmFsdWUudXNlckNvdW50KSk7XG4gIH1cblxuXG4gIGdldENvdW50cmllcygpOiB7IGlkOiBzdHJpbmc7IG5hbWU6IHN0cmluZyB9W10ge1xuICAgIHJldHVybiBPYmplY3QuZW50cmllcyhjb3VudHJpZXNMaWIuZ2V0TmFtZXMoJ2VuJywgeyBzZWxlY3Q6ICdvZmZpY2lhbCcgfSkpLm1hcCgoZW50cnkpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkOiBlbnRyeVswXSxcbiAgICAgICAgbmFtZTogZW50cnlbMV1cbiAgICAgIH07XG4gICAgfSk7XG5cblxuICB9XG5cbiAgZ2V0Q291bnRyeShjb3VudHJ5S2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBjb3VudHJpZXNMaWIuZ2V0TmFtZShjb3VudHJ5S2V5LCAnZW4nKTtcbiAgfVxuXG4gIGluaXRBcHBTZXNzaW9uKCl7XG4gICAgdGhpcy51c2Vyc0ZhY2FkZS5idWlsZFVzZXJTZXNzaW9uKCk7XG4gIH1cblxuICBvYnNlcnZlQ3VycmVudFVzZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMudXNlcnNGYWNhZGUuY3VycmVudFVzZXIkO1xuICB9XG5cbiAgaXNDdXJyZW50VXNlckF1dGgoKSB7XG4gICAgcmV0dXJuIHRoaXMudXNlcnNGYWNhZGUuaXNBdXRoZW50aWNhdGVkJDtcbiAgfVxuXG59XG4iXX0=