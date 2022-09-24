import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as UsersActions from './users.actions';
import * as UsersSelectors from './users.selectors';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
export class UsersFacade {
    constructor(store) {
        this.store = store;
        this.currentUser$ = this.store.pipe(select(UsersSelectors.getUser));
        this.isAuthenticated$ = this.store.pipe(select(UsersSelectors.getUserIsAuth));
    }
    buildUserSession() {
        this.store.dispatch(UsersActions.buildUserSession());
    }
}
UsersFacade.ɵfac = function UsersFacade_Factory(t) { return new (t || UsersFacade)(i0.ɵɵinject(i1.Store)); };
UsersFacade.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: UsersFacade, factory: UsersFacade.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UsersFacade, [{
        type: Injectable
    }], function () { return [{ type: i1.Store }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuZmFjYWRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy91c2Vycy9zcmMvbGliL3N0YXRlL3VzZXJzLmZhY2FkZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTVDLE9BQU8sS0FBSyxZQUFZLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxLQUFLLGNBQWMsTUFBTSxtQkFBbUIsQ0FBQzs7O0FBR3BELE1BQU0sT0FBTyxXQUFXO0lBSXRCLFlBQW9CLEtBQVk7UUFBWixVQUFLLEdBQUwsS0FBSyxDQUFPO1FBSGhDLGlCQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQy9ELHFCQUFnQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUV0QyxDQUFDO0lBRXBDLGdCQUFnQjtRQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7c0VBUlUsV0FBVztpRUFBWCxXQUFXLFdBQVgsV0FBVzt1RkFBWCxXQUFXO2NBRHZCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCAqIGFzIFVzZXJzQWN0aW9ucyBmcm9tICcuL3VzZXJzLmFjdGlvbnMnO1xuaW1wb3J0ICogYXMgVXNlcnNTZWxlY3RvcnMgZnJvbSAnLi91c2Vycy5zZWxlY3RvcnMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlcnNGYWNhZGUge1xuICBjdXJyZW50VXNlciQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldFVzZXIpKTtcbiAgaXNBdXRoZW50aWNhdGVkJCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0VXNlcklzQXV0aCkpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlKSB7fVxuXG4gIGJ1aWxkVXNlclNlc3Npb24oKSB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChVc2Vyc0FjdGlvbnMuYnVpbGRVc2VyU2Vzc2lvbigpKTtcbiAgfVxufVxuXG4iXX0=