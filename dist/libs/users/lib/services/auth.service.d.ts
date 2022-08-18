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
    apiURLUsers: string;
    constructor(http: HttpClient, router: Router, token: LocalstorageService);
    login(email: string, password: string): Observable<User>;
    logout(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthService>;
}
//# sourceMappingURL=auth.service.d.ts.map