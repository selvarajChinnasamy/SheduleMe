import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarComponent } from './calendar/calendar.component';

export const router: Routes = [
    { path: '', component: CalendarComponent },
];

export const calanderRouts: ModuleWithProviders = RouterModule.forChild(router);
