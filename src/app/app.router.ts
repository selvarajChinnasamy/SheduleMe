import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthHandlerComponent } from './auth-handler/auth-handler.component';
import { AuthGuard } from './authGuard';

export const router: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'authHandler', component: AuthHandlerComponent },
    { path: 'calendar', loadChildren: './calendar/calendar.module#CalendarModule', canActivate: [AuthGuard] },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
