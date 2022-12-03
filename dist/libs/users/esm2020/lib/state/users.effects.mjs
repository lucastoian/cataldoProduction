import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, of } from 'rxjs';
import { LocalstorageService } from '../services/localstorage.service';
import { UsersService } from '../services/users.service';
import * as UsersActions from './users.actions';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/effects";
import * as i2 from "../services/localstorage.service";
import * as i3 from "../services/users.service";
export class UsersEffects {
    constructor(actions$, localstorageService, usersService) {
        this.actions$ = actions$;
        this.localstorageService = localstorageService;
        this.usersService = usersService;
        this.buildUserSession$ = createEffect(() => this.actions$.pipe(ofType(UsersActions.buildUserSession), concatMap(() => {
            if (this.localstorageService.isValidToken()) {
                const userId = this.localstorageService.getUserIdFromToken();
                if (userId) {
                    return this.usersService.getUser(userId).pipe(map((user) => {
                        return UsersActions.buildUserSessionSuccess({ user: user });
                    }), catchError(() => of(UsersActions.buildUserSessionFailed())));
                }
                else {
                    return of(UsersActions.buildUserSessionFailed());
                }
            }
            else {
                return of(UsersActions.buildUserSessionFailed());
            }
        })));
    }
}
UsersEffects.ɵfac = function UsersEffects_Factory(t) { return new (t || UsersEffects)(i0.ɵɵinject(i1.Actions), i0.ɵɵinject(i2.LocalstorageService), i0.ɵɵinject(i3.UsersService)); };
UsersEffects.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: UsersEffects, factory: UsersEffects.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UsersEffects, [{
        type: Injectable
    }], function () { return [{ type: i1.Actions }, { type: i2.LocalstorageService }, { type: i3.UsersService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdXNlcnMvc3JjL2xpYi9zdGF0ZS91c2Vycy5lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXpELE9BQU8sS0FBSyxZQUFZLE1BQU0saUJBQWlCLENBQUM7Ozs7O0FBR2hELE1BQU0sT0FBTyxZQUFZO0lBd0J2QixZQUNVLFFBQWlCLEVBQ2pCLG1CQUF3QyxFQUN4QyxZQUEwQjtRQUYxQixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsaUJBQVksR0FBWixZQUFZLENBQWM7UUExQnBDLHNCQUFpQixHQUFHLFlBQVksQ0FBQyxHQUFHLEVBQUUsQ0FDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ2hCLE1BQU0sQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsRUFDckMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNiLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLFlBQVksRUFBRSxFQUFFO2dCQUMzQyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztnQkFDN0QsSUFBSSxNQUFNLEVBQUU7b0JBQ1YsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQzNDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO3dCQUNYLE9BQU8sWUFBWSxDQUFDLHVCQUF1QixDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7b0JBQzlELENBQUMsQ0FBQyxFQUNGLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLHNCQUFzQixFQUFFLENBQUMsQ0FBQyxDQUM1RCxDQUFDO2lCQUNIO3FCQUFNO29CQUNMLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLENBQUM7aUJBQ2xEO2FBQ0Y7aUJBQU07Z0JBQ0wsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLHNCQUFzQixFQUFFLENBQUMsQ0FBQzthQUNsRDtRQUNILENBQUMsQ0FBQyxDQUNILENBQ0YsQ0FBQztJQU1DLENBQUM7O3dFQTVCTyxZQUFZO2tFQUFaLFlBQVksV0FBWixZQUFZO3VGQUFaLFlBQVk7Y0FEeEIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNyZWF0ZUVmZmVjdCwgQWN0aW9ucywgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBjb25jYXRNYXAsIG1hcCwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IExvY2Fsc3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9sb2NhbHN0b3JhZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBVc2Vyc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy91c2Vycy5zZXJ2aWNlJztcblxuaW1wb3J0ICogYXMgVXNlcnNBY3Rpb25zIGZyb20gJy4vdXNlcnMuYWN0aW9ucyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2Vyc0VmZmVjdHMge1xuICBidWlsZFVzZXJTZXNzaW9uJCA9IGNyZWF0ZUVmZmVjdCgoKSA9PlxuICAgIHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICAgIG9mVHlwZShVc2Vyc0FjdGlvbnMuYnVpbGRVc2VyU2Vzc2lvbiksXG4gICAgICBjb25jYXRNYXAoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5sb2NhbHN0b3JhZ2VTZXJ2aWNlLmlzVmFsaWRUb2tlbigpKSB7XG4gICAgICAgICAgY29uc3QgdXNlcklkID0gdGhpcy5sb2NhbHN0b3JhZ2VTZXJ2aWNlLmdldFVzZXJJZEZyb21Ub2tlbigpO1xuICAgICAgICAgIGlmICh1c2VySWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVzZXJzU2VydmljZS5nZXRVc2VyKHVzZXJJZCkucGlwZShcbiAgICAgICAgICAgICAgbWFwKCh1c2VyKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFVzZXJzQWN0aW9ucy5idWlsZFVzZXJTZXNzaW9uU3VjY2Vzcyh7IHVzZXI6IHVzZXIgfSk7XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBjYXRjaEVycm9yKCgpID0+IG9mKFVzZXJzQWN0aW9ucy5idWlsZFVzZXJTZXNzaW9uRmFpbGVkKCkpKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG9mKFVzZXJzQWN0aW9ucy5idWlsZFVzZXJTZXNzaW9uRmFpbGVkKCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gb2YoVXNlcnNBY3Rpb25zLmJ1aWxkVXNlclNlc3Npb25GYWlsZWQoKSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBsb2NhbHN0b3JhZ2VTZXJ2aWNlOiBMb2NhbHN0b3JhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgdXNlcnNTZXJ2aWNlOiBVc2Vyc1NlcnZpY2VcbiAgKSB7fVxufVxuIl19