import { Routes } from '@angular/router';


import { AdminLayoutComponent } from './admin-layout.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';
// import { InstallationModule } from '../../Modules/installation/installation.module';

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

            
        ]
    }
];
