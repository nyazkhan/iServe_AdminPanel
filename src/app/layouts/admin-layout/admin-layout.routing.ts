import { Routes } from '@angular/router';


import { AdminLayoutComponent } from './admin-layout.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';

export const AdminLayoutRoutes: Routes = [
    {

        path: '', component: AdminLayoutComponent,
        children: [
              { path: 'dashboard', component: DashboardComponent },

            {
                path: 'incidents', loadChildren: '../../Modules/incidents/incidents.module#IncidentsModule',

            },

            {
                path: 'installation', loadChildren: '../../Modules/installation/installation.module#InstallationModule',
            },
            {
                path: 'manager', loadChildren: '../../Modules/brandManager/brand-manager.module#BrandManagerModule',
            },
            {
                path: 'engineer', loadChildren: '../../Modules/serviceEngineer/service-engineer.module#ServiceEngineerModule',
            }

            
        ]
    }
];
