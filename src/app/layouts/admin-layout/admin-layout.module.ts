import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';


import { AdminLayoutComponent } from './admin-layout.component';
import { ComponentsModule } from '../../components/components.module';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { Auth1Guard } from '../../providers/auth1.guard';
import { AuthGuard } from '../../providers/auth.guard';
import { AuthDashboardGuard } from '../../providers/authDashboard.guard';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ComponentsModule,

  ],
  declarations: [
    AdminLayoutComponent,
    DashboardComponent,
  ],
  providers: [Auth1Guard, AuthGuard, AuthDashboardGuard]
})

export class AdminLayoutModule { }
