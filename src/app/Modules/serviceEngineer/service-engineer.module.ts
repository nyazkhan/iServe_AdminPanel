import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceEngineerComponent } from './service-engineer.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipeModule } from '../../providers/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PipeModule,
    RouterModule.forChild([
      {path:'',component:ServiceEngineerComponent,},
    
    ])   
  ],
  declarations: [
    ServiceEngineerComponent,
    
  ]
})
export class ServiceEngineerModule { }
