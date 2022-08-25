import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LocalstorageService } from './localstorage.service';
import * as i0 from "@angular/core";
export declare class AuthService {
    private http;
    private router;
    private token;
    private environment;
    private apiURLUsers;
    constructor(http: HttpClient, environment: any, router: Router, token: LocalstorageService);
    login(email: string, password: string): Observable<User>;
    logout(): void;
    register(user: User): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthService>;
}
//# sourceMappingURL=auth.service.d.ts.map