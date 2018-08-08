import { Routes } from '@angular/router';

// import { TableListComponent } from '../../table-list/table-list.component';
// import { MapsComponent } from '../../maps/maps.component';
import { AdminLayoutComponent } from './admin-layout.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';
// import { BrandManagerComponent } from '../../Modules/brandManager/brand-manager.component';

export const AdminLayoutRoutes: Routes = [
    {

        path: '', component: AdminLayoutComponent,
        children: [
              { path: 'dashboard', component: DashboardComponent },

            {
                path: 'incidents', loadChildren: '../../Modules/incidents/incidents.module#IncidentsModule',

            },

            // {
            //     path: 'engineer', loadChildren: '../../Modules/serviceEngineer/service-engineer.module#ServiceEngineerModule',
            // },

            
        ]
    }
];
