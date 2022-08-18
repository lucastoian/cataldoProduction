import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as countriesLib from 'i18n-iso-countries';
import { UsersFacade } from '../state/users.facade';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../state/users.facade";
export class UsersService {
    constructor(http, usersFacade) {
        this.http = http;
        this.usersFacade = usersFacade;
        this.apiUrlUsers = 'https://cataldoproduction.herokuapp.com/api/v1/' + 'users';
        // eslint-disable-next-line @typescript-eslint/no-var-requires
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
UsersService.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.UsersFacade)); };
UsersService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: UsersService, factory: UsersService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UsersService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.HttpClient }, { type: i2.UsersFacade }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdXNlcnMvc3JjL2xpYi9zZXJ2aWNlcy91c2Vycy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWxELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdyQyxPQUFPLEtBQUssWUFBWSxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7OztBQVFwRCxNQUFNLE9BQU8sWUFBWTtJQUd2QixZQUFvQixJQUFnQixFQUFVLFdBQXdCO1FBQWxELFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUZ2RSxnQkFBVyxHQUFHLGlEQUFpRCxHQUFHLE9BQU8sQ0FBQztRQUd2RSw4REFBOEQ7UUFDOUQsWUFBWSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxDQUFDO0lBRTNFLENBQUM7SUFFRCxRQUFRO1FBQ04sT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUNELE9BQU8sQ0FBQyxNQUFjO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxJQUFJLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELFVBQVUsQ0FBQyxJQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQU8sSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBQ0QsVUFBVSxDQUFDLElBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRCxVQUFVLENBQUMsTUFBYztRQUN2QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxhQUFhO1FBQ1gsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLFlBQVksQ0FBQzthQUM1QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBZ0IsRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUdELFlBQVk7UUFDVixPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ3ZGLE9BQU87Z0JBQ0wsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ1osSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDZixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFHTCxDQUFDO0lBRUQsVUFBVSxDQUFDLFVBQWtCO1FBQzNCLE9BQU8sWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELGNBQWM7UUFDWixJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxpQkFBaUI7UUFDZixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUM7SUFDM0MsQ0FBQzs7d0VBM0RVLFlBQVk7a0VBQVosWUFBWSxXQUFaLFlBQVksbUJBRlgsTUFBTTt1RkFFUCxZQUFZO2NBSHhCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9tb2RlbHMvdXNlcic7XHJcblxyXG5pbXBvcnQgKiBhcyBjb3VudHJpZXNMaWIgZnJvbSAnaTE4bi1pc28tY291bnRyaWVzJztcclxuaW1wb3J0IHsgVXNlcnNGYWNhZGUgfSBmcm9tICcuLi9zdGF0ZS91c2Vycy5mYWNhZGUnO1xyXG4vL2ltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnLi4vLi4vLi4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50LnByb2QnO1xyXG5kZWNsYXJlIGNvbnN0IHJlcXVpcmU6IGFueTtcclxuXHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXNlcnNTZXJ2aWNlIHtcclxuIGFwaVVybFVzZXJzID0gJ2h0dHBzOi8vY2F0YWxkb3Byb2R1Y3Rpb24uaGVyb2t1YXBwLmNvbS9hcGkvdjEvJyArICd1c2Vycyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSB1c2Vyc0ZhY2FkZTogVXNlcnNGYWNhZGUpIHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdmFyLXJlcXVpcmVzXHJcbiAgICBjb3VudHJpZXNMaWIucmVnaXN0ZXJMb2NhbGUocmVxdWlyZSgnaTE4bi1pc28tY291bnRyaWVzL2xhbmdzL2VuLmpzb24nKSk7XHJcblxyXG4gIH1cclxuXHJcbiAgZ2V0VXNlcnMoKTogT2JzZXJ2YWJsZTxVc2VyW10+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFVzZXJbXT4odGhpcy5hcGlVcmxVc2Vycyk7XHJcbiAgfVxyXG4gIGdldFVzZXIodXNlcklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFVzZXI+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFVzZXI+KGAke3RoaXMuYXBpVXJsVXNlcnN9LyR7dXNlcklkfWApO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlVXNlcih1c2VyOiBVc2VyKTogT2JzZXJ2YWJsZTxVc2VyPiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8VXNlcj4odGhpcy5hcGlVcmxVc2VycywgdXNlcik7XHJcbiAgfVxyXG4gIHVwZGF0ZVVzZXIodXNlcjogVXNlcik6IE9ic2VydmFibGU8VXNlcj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQ8VXNlcj4oYCR7dGhpcy5hcGlVcmxVc2Vyc30vJHt1c2VyLmlkfWAsIHVzZXIpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlVXNlcih1c2VySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZTxhbnk+KGAke3RoaXMuYXBpVXJsVXNlcnN9LyR7dXNlcklkfWApO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXNlcnNDb3VudCgpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAuZ2V0PG51bWJlcj4oYCR7dGhpcy5hcGlVcmxVc2Vyc30vZ2V0L2NvdW50YClcclxuICAgICAgLnBpcGUobWFwKChvYmplY3RWYWx1ZTogYW55KSA9PiBvYmplY3RWYWx1ZS51c2VyQ291bnQpKTtcclxuICB9XHJcblxyXG5cclxuICBnZXRDb3VudHJpZXMoKTogeyBpZDogc3RyaW5nOyBuYW1lOiBzdHJpbmcgfVtdIHtcclxuICAgIHJldHVybiBPYmplY3QuZW50cmllcyhjb3VudHJpZXNMaWIuZ2V0TmFtZXMoJ2VuJywgeyBzZWxlY3Q6ICdvZmZpY2lhbCcgfSkpLm1hcCgoZW50cnkpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBpZDogZW50cnlbMF0sXHJcbiAgICAgICAgbmFtZTogZW50cnlbMV1cclxuICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIFxyXG4gIH1cclxuXHJcbiAgZ2V0Q291bnRyeShjb3VudHJ5S2V5OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGNvdW50cmllc0xpYi5nZXROYW1lKGNvdW50cnlLZXksICdlbicpO1xyXG4gIH1cclxuXHJcbiAgaW5pdEFwcFNlc3Npb24oKXtcclxuICAgIHRoaXMudXNlcnNGYWNhZGUuYnVpbGRVc2VyU2Vzc2lvbigpO1xyXG4gIH1cclxuXHJcbiAgb2JzZXJ2ZUN1cnJlbnRVc2VyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudXNlcnNGYWNhZGUuY3VycmVudFVzZXIkO1xyXG4gIH1cclxuXHJcbiAgaXNDdXJyZW50VXNlckF1dGgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy51c2Vyc0ZhY2FkZS5pc0F1dGhlbnRpY2F0ZWQkO1xyXG4gIH1cclxuXHJcbn1cclxuIl19