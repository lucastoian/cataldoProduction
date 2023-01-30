import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromUsers from './state/users.reducer';
import { UsersEffects } from './state/users.effects';
import { UsersFacade } from './state/users.facade';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { KlarnaComponent } from './klarna/klarna.component';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "@ngrx/effects";
//const routes: Routes = [{ path: 'login', component: LoginComponent }];
export class UsersModule {
}
UsersModule.ɵfac = function UsersModule_Factory(t) { return new (t || UsersModule)(); };
UsersModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: UsersModule });
UsersModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [UsersFacade,
    ], imports: [CommonModule,
        //  RouterModule.forChild(routes),
        InputTextModule,
        ButtonModule,
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forFeature(fromUsers.USERS_FEATURE_KEY, fromUsers.reducer),
        EffectsModule.forFeature([UsersEffects])] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UsersModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    //  RouterModule.forChild(routes),
                    InputTextModule,
                    ButtonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    StoreModule.forFeature(fromUsers.USERS_FEATURE_KEY, fromUsers.reducer),
                    EffectsModule.forFeature([UsersEffects]),
                ],
                declarations: [
                    LoginComponent,
                    RegisterComponentComponent,
                    KlarnaComponent
                ],
                //declarations: [LoginComponent],
                providers: [UsersFacade,
                ],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(UsersModule, { declarations: [LoginComponent,
        RegisterComponentComponent,
        KlarnaComponent], imports: [CommonModule,
        //  RouterModule.forChild(routes),
        InputTextModule,
        ButtonModule,
        FormsModule,
        ReactiveFormsModule, i1.StoreFeatureModule, i2.EffectsFeatureModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGlicy91c2Vycy9zcmMvbGliL3VzZXJzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMxQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlDLE9BQU8sS0FBSyxTQUFTLE1BQU0sdUJBQXVCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUMvRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7QUFFNUQsd0VBQXdFO0FBc0J4RSxNQUFNLE9BQU8sV0FBVzs7c0VBQVgsV0FBVzs2REFBWCxXQUFXO2tFQUhYLENBQUMsV0FBVztLQUNyQixZQWpCQSxZQUFZO1FBQ2Qsa0NBQWtDO1FBQ2hDLGVBQWU7UUFDZixZQUFZO1FBQ1osV0FBVztRQUNYLG1CQUFtQjtRQUNuQixXQUFXLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDO1FBQ3RFLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQzt1RkFZL0IsV0FBVztjQXJCdkIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNkLGtDQUFrQztvQkFDaEMsZUFBZTtvQkFDZixZQUFZO29CQUNaLFdBQVc7b0JBQ1gsbUJBQW1CO29CQUNuQixXQUFXLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDO29CQUN0RSxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7aUJBRXpDO2dCQUNELFlBQVksRUFBRTtvQkFDWixjQUFjO29CQUNkLDBCQUEwQjtvQkFDMUIsZUFBZTtpQkFDaEI7Z0JBQ0QsaUNBQWlDO2dCQUNqQyxTQUFTLEVBQUUsQ0FBQyxXQUFXO2lCQUNyQjthQUNIOzt3RkFDWSxXQUFXLG1CQVJwQixjQUFjO1FBQ2QsMEJBQTBCO1FBQzFCLGVBQWUsYUFiZixZQUFZO1FBQ2Qsa0NBQWtDO1FBQ2hDLGVBQWU7UUFDZixZQUFZO1FBQ1osV0FBVztRQUNYLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7IElucHV0VGV4dE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvaW5wdXR0ZXh0JztcbmltcG9ydCB7IEJ1dHRvbk1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvYnV0dG9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgKiBhcyBmcm9tVXNlcnMgZnJvbSAnLi9zdGF0ZS91c2Vycy5yZWR1Y2VyJztcbmltcG9ydCB7IFVzZXJzRWZmZWN0cyB9IGZyb20gJy4vc3RhdGUvdXNlcnMuZWZmZWN0cyc7XG5pbXBvcnQgeyBVc2Vyc0ZhY2FkZSB9IGZyb20gJy4vc3RhdGUvdXNlcnMuZmFjYWRlJztcblxuaW1wb3J0IHsgUmVnaXN0ZXJDb21wb25lbnRDb21wb25lbnQgfSBmcm9tICcuL3JlZ2lzdGVyLWNvbXBvbmVudC9yZWdpc3Rlci1jb21wb25lbnQuY29tcG9uZW50JztcbmltcG9ydCB7IEtsYXJuYUNvbXBvbmVudCB9IGZyb20gJy4va2xhcm5hL2tsYXJuYS5jb21wb25lbnQnO1xuXG4vL2NvbnN0IHJvdXRlczogUm91dGVzID0gW3sgcGF0aDogJ2xvZ2luJywgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCB9XTtcbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gIC8vICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKSxcbiAgICBJbnB1dFRleHRNb2R1bGUsXG4gICAgQnV0dG9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgU3RvcmVNb2R1bGUuZm9yRmVhdHVyZShmcm9tVXNlcnMuVVNFUlNfRkVBVFVSRV9LRVksIGZyb21Vc2Vycy5yZWR1Y2VyKSxcbiAgICBFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoW1VzZXJzRWZmZWN0c10pLFxuXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIExvZ2luQ29tcG9uZW50LFxuICAgIFJlZ2lzdGVyQ29tcG9uZW50Q29tcG9uZW50LFxuICAgIEtsYXJuYUNvbXBvbmVudFxuICBdLFxuICAvL2RlY2xhcmF0aW9uczogW0xvZ2luQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbVXNlcnNGYWNhZGUsXG4gICBdLFxufSlcbmV4cG9ydCBjbGFzcyBVc2Vyc01vZHVsZSB7fVxuIl19