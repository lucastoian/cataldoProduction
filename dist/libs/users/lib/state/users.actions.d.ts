import { User } from '../models/user';
export declare const buildUserSession: import("@ngrx/store").ActionCreator<"[Users] Build User Session", () => import("@ngrx/store/src/models").TypedAction<"[Users] Build User Session">>;
export declare const buildUserSessionSuccess: import("@ngrx/store").ActionCreator<"[Users] Build User Session", (props: {
    user: User;
}) => {
    user: User;
} & import("@ngrx/store/src/models").TypedAction<"[Users] Build User Session">>;
export declare const buildUserSessionFailed: import("@ngrx/store").ActionCreator<"[Users] Build User Session", () => import("@ngrx/store/src/models").TypedAction<"[Users] Build User Session">>;
//# sourceMappingURL=users.actions.d.ts.map