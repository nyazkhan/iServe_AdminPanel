import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstallationComponent } from './installation.component';
import { RouterModule } from '../../../../node_modules/@angular/router';
import { InfiniteScrollModule } from '../../../../node_modules/ngx-infinite-scroll';
import { ReactiveFormsModule, FormsModule } from '../../../../node_modules/@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    InfiniteScrollModule ,
    FormsModule,
    ReactiveFormsModule,
    
    RouterModule.forChild([
      {path:'',component:InstallationComponent},
      
    ]) 
  ],
  declarations: [
    InstallationComponent,

  ]
})
export class InstallationModule { }
