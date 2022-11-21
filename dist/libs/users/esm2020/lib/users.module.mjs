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
                    RegisterComponentComponent,
                    KlarnaComponent
                ],
                //declarations: [LoginComponent],
                providers: [UsersFacade],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGlicy91c2Vycy9zcmMvbGliL3VzZXJzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMxQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlDLE9BQU8sS0FBSyxTQUFTLE1BQU0sdUJBQXVCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUMvRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7QUFFNUQsd0VBQXdFO0FBb0J4RSxNQUFNLE9BQU8sV0FBVzs7c0VBQVgsV0FBVzs2REFBWCxXQUFXO2tFQUZYLENBQUMsV0FBVyxDQUFDLFlBaEJmO1lBQ1AsWUFBWTtZQUNkLGtDQUFrQztZQUNoQyxlQUFlO1lBQ2YsWUFBWTtZQUNaLFdBQVc7WUFDWCxtQkFBbUI7WUFDbkIsV0FBVyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQztZQUN0RSxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDekM7dUZBU1UsV0FBVztjQW5CdkIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNkLGtDQUFrQztvQkFDaEMsZUFBZTtvQkFDZixZQUFZO29CQUNaLFdBQVc7b0JBQ1gsbUJBQW1CO29CQUNuQixXQUFXLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDO29CQUN0RSxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7aUJBQ3pDO2dCQUNELFlBQVksRUFBRTtvQkFDWixjQUFjO29CQUNkLDBCQUEwQjtvQkFDMUIsZUFBZTtpQkFDaEI7Z0JBQ0QsaUNBQWlDO2dCQUNqQyxTQUFTLEVBQUUsQ0FBQyxXQUFXLENBQUM7YUFDekI7O3dGQUNZLFdBQVcsbUJBUHBCLGNBQWM7UUFDZCwwQkFBMEI7UUFDMUIsZUFBZSxhQVpmLFlBQVk7UUFDZCxrQ0FBa0M7UUFDaEMsZUFBZTtRQUNmLFlBQVk7UUFDWixXQUFXO1FBQ1gsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IElucHV0VGV4dE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvaW5wdXR0ZXh0JztcclxuaW1wb3J0IHsgQnV0dG9uTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9idXR0b24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcclxuaW1wb3J0ICogYXMgZnJvbVVzZXJzIGZyb20gJy4vc3RhdGUvdXNlcnMucmVkdWNlcic7XHJcbmltcG9ydCB7IFVzZXJzRWZmZWN0cyB9IGZyb20gJy4vc3RhdGUvdXNlcnMuZWZmZWN0cyc7XHJcbmltcG9ydCB7IFVzZXJzRmFjYWRlIH0gZnJvbSAnLi9zdGF0ZS91c2Vycy5mYWNhZGUnO1xyXG5cclxuaW1wb3J0IHsgUmVnaXN0ZXJDb21wb25lbnRDb21wb25lbnQgfSBmcm9tICcuL3JlZ2lzdGVyLWNvbXBvbmVudC9yZWdpc3Rlci1jb21wb25lbnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgS2xhcm5hQ29tcG9uZW50IH0gZnJvbSAnLi9rbGFybmEva2xhcm5hLmNvbXBvbmVudCc7XHJcblxyXG4vL2NvbnN0IHJvdXRlczogUm91dGVzID0gW3sgcGF0aDogJ2xvZ2luJywgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCB9XTtcclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgLy8gIFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpLFxyXG4gICAgSW5wdXRUZXh0TW9kdWxlLFxyXG4gICAgQnV0dG9uTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgU3RvcmVNb2R1bGUuZm9yRmVhdHVyZShmcm9tVXNlcnMuVVNFUlNfRkVBVFVSRV9LRVksIGZyb21Vc2Vycy5yZWR1Y2VyKSxcclxuICAgIEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShbVXNlcnNFZmZlY3RzXSksXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIExvZ2luQ29tcG9uZW50LFxyXG4gICAgUmVnaXN0ZXJDb21wb25lbnRDb21wb25lbnQsXHJcbiAgICBLbGFybmFDb21wb25lbnRcclxuICBdLFxyXG4gIC8vZGVjbGFyYXRpb25zOiBbTG9naW5Db21wb25lbnRdLFxyXG4gIHByb3ZpZGVyczogW1VzZXJzRmFjYWRlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFVzZXJzTW9kdWxlIHt9XHJcbiJdfQ==