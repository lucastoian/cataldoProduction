import { UsersPartialState, UsersState } from './users.reducer';
export declare const getUsersState: import("@ngrx/store").MemoizedSelector<UsersPartialState, UsersState, import("@ngrx/store").DefaultProjectorFn<UsersState>>;
export declare const getUser: import("@ngrx/store").MemoizedSelector<UsersPartialState, import("@eshop-frontend/users").User, import("@ngrx/store").DefaultProjectorFn<import("@eshop-frontend/users").User>>;
export declare const getUserIsAuth: import("@ngrx/store").MemoizedSelector<UsersPartialState, boolean, import("@ngrx/store").DefaultProjectorFn<boolean>>;
//# sourceMappingURL=users.selectors.d.ts.map