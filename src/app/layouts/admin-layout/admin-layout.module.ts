import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';


import { AdminLayoutComponent } from './admin-layout.component';
import { ComponentsModule } from '../../components/components.module';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { FixedLengthPipe } from '../../providers/length.pipe';
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
    FixedLengthPipe,
  ]
})

export class AdminLayoutModule {}
