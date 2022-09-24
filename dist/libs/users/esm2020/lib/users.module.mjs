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
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "@ngrx/effects";
//const routes: Routes = [{ path: 'login', component: LoginComponent }];
export class UsersModule {
}
UsersModule.ɵfac = function UsersModule_Factory(t) { return new (t || UsersModule)(); };
UsersModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: UsersModule });
UsersModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [UsersFacade], imports: [[
            CommonModule,
            //  RouterModule.forChild(routes),
            InputTextModule,
            ButtonModule,
            FormsModule,
            ReactiveFormsModule,
            StoreModule.forFeature(fromUsers.USERS_FEATURE_KEY, fromUsers.reducer),
            EffectsModule.forFeature([UsersEffects]),
        ]] });
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
                    RegisterComponentComponent
                ],
                //declarations: [LoginComponent],
                providers: [UsersFacade],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(UsersModule, { declarations: [LoginComponent,
        RegisterComponentComponent], imports: [CommonModule,
        //  RouterModule.forChild(routes),
        InputTextModule,
        ButtonModule,
        FormsModule,
        ReactiveFormsModule, i1.StoreFeatureModule, i2.EffectsFeatureModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGlicy91c2Vycy9zcmMvbGliL3VzZXJzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMxQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlDLE9BQU8sS0FBSyxTQUFTLE1BQU0sdUJBQXVCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQzs7OztBQUUvRix3RUFBd0U7QUFtQnhFLE1BQU0sT0FBTyxXQUFXOztzRUFBWCxXQUFXOzZEQUFYLFdBQVc7a0VBRlgsQ0FBQyxXQUFXLENBQUMsWUFmZjtZQUNQLFlBQVk7WUFDZCxrQ0FBa0M7WUFDaEMsZUFBZTtZQUNmLFlBQVk7WUFDWixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLFdBQVcsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLGlCQUFpQixFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUM7WUFDdEUsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3pDO3VGQVFVLFdBQVc7Y0FsQnZCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDZCxrQ0FBa0M7b0JBQ2hDLGVBQWU7b0JBQ2YsWUFBWTtvQkFDWixXQUFXO29CQUNYLG1CQUFtQjtvQkFDbkIsV0FBVyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQztvQkFDdEUsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO2lCQUN6QztnQkFDRCxZQUFZLEVBQUU7b0JBQ1osY0FBYztvQkFDZCwwQkFBMEI7aUJBQzNCO2dCQUNELGlDQUFpQztnQkFDakMsU0FBUyxFQUFFLENBQUMsV0FBVyxDQUFDO2FBQ3pCOzt3RkFDWSxXQUFXLG1CQU5wQixjQUFjO1FBQ2QsMEJBQTBCLGFBWDFCLFlBQVk7UUFDZCxrQ0FBa0M7UUFDaEMsZUFBZTtRQUNmLFlBQVk7UUFDWixXQUFXO1FBQ1gsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW5wdXRUZXh0TW9kdWxlIH0gZnJvbSAncHJpbWVuZy9pbnB1dHRleHQnO1xuaW1wb3J0IHsgQnV0dG9uTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9idXR0b24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCAqIGFzIGZyb21Vc2VycyBmcm9tICcuL3N0YXRlL3VzZXJzLnJlZHVjZXInO1xuaW1wb3J0IHsgVXNlcnNFZmZlY3RzIH0gZnJvbSAnLi9zdGF0ZS91c2Vycy5lZmZlY3RzJztcbmltcG9ydCB7IFVzZXJzRmFjYWRlIH0gZnJvbSAnLi9zdGF0ZS91c2Vycy5mYWNhZGUnO1xuXG5pbXBvcnQgeyBSZWdpc3RlckNvbXBvbmVudENvbXBvbmVudCB9IGZyb20gJy4vcmVnaXN0ZXItY29tcG9uZW50L3JlZ2lzdGVyLWNvbXBvbmVudC5jb21wb25lbnQnO1xuXG4vL2NvbnN0IHJvdXRlczogUm91dGVzID0gW3sgcGF0aDogJ2xvZ2luJywgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCB9XTtcbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gIC8vICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKSxcbiAgICBJbnB1dFRleHRNb2R1bGUsXG4gICAgQnV0dG9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgU3RvcmVNb2R1bGUuZm9yRmVhdHVyZShmcm9tVXNlcnMuVVNFUlNfRkVBVFVSRV9LRVksIGZyb21Vc2Vycy5yZWR1Y2VyKSxcbiAgICBFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoW1VzZXJzRWZmZWN0c10pLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBMb2dpbkNvbXBvbmVudCxcbiAgICBSZWdpc3RlckNvbXBvbmVudENvbXBvbmVudFxuICBdLFxuICAvL2RlY2xhcmF0aW9uczogW0xvZ2luQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbVXNlcnNGYWNhZGVdLFxufSlcbmV4cG9ydCBjbGFzcyBVc2Vyc01vZHVsZSB7fVxuIl19