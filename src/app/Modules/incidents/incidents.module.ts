import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncidentsComponent } from './incidents.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { PipeModule } from '../../providers/pipe.module';
import { EditEngineerComponent } from './edit-engineer/edit-engineer.component';

@NgModule({
  imports: [
    CommonModule,
    InfiniteScrollModule ,
    FormsModule,
  PipeModule,
    ReactiveFormsModule,
    
    
    
    RouterModule.forChild([
      // {path:'', component:ServiceEngineerComponent},
      {path:'',component:IncidentsComponent},
      // children: [
          
      {path:"edit",component: EditEngineerComponent},
      // ]
    // },
    ]) 
  ],
  declarations: [
    IncidentsComponent,
    EditEngineerComponent
  ]
})
export class IncidentsModule { }
