import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { UsersFacade } from '../state/users.facade';
import * as i0 from "@angular/core";
export declare class UsersService {
    private http;
    private usersFacade;
    private environment;
    private apiUrlUsers;
    constructor(http: HttpClient, usersFacade: UsersFacade, environment: any);
    getUsers(): Observable<User[]>;
    getUser(userId: string): Observable<User>;
    createUser(user: User): Observable<User>;
    updateUser(user: User): Observable<any>;
    deleteUser(userId: string): Observable<any>;
    getUsersCount(): Observable<number>;
    getCountries(): {
        id: string;
        name: string;
    }[];
    getCountry(countryKey: string): string;
    initAppSession(): void;
    observeCurrentUser(): Observable<User>;
    isCurrentUserAuth(): Observable<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UsersService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UsersService>;
}
//# sourceMappingURL=users.service.d.ts.map