import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AllEmployeesComponent } from './components/all-employees/all-employees.component';
import { PlansComponent } from './components/plans/plans.component';
import { MainLayoutComponent } from './general-contents/main-layout/main-layout.component';
import { ManagementComponent } from './components/management/management.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    pathMatch: 'prefix',
    component: MainLayoutComponent,
    children: [
      /* {
        path: '',
        pathMatch: 'full',
        redirectTo: 'all-employees',
      }, */
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'all-employees',
        component: AllEmployeesComponent,
      },
      {
        path: 'plans',
        component: PlansComponent,
      },
      {
        path: 'management',
        component: ManagementComponent,
      },
    ],
  },
];
