import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceEngineerComponent } from './service-engineer.component';
// import { AddEngineerComponent } from './addEngineer/add-engineer.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
    RouterModule.forChild([
      // {path:'', component:ServiceEngineerComponent},
      {path:'',component:ServiceEngineerComponent,},
      // children: [
          
    //   {path:"addEngineer",component: AddEngineerComponent},
      // ]
    // },
    ])   
  ],
  declarations: [
    ServiceEngineerComponent,
    // AddEngineerComponent,
    
  ]
})
export class ServiceEngineerModule { }
