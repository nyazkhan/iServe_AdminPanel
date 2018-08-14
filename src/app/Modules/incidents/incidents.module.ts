import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncidentsComponent } from './incidents.component';
import { RouterModule } from '../../../../node_modules/@angular/router';
import { FormsModule, ReactiveFormsModule } from '../../../../node_modules/@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FixedLengthPipe } from '../../providers/length.pipe';

@NgModule({
  imports: [
    CommonModule,
    InfiniteScrollModule ,
    FormsModule,
    ReactiveFormsModule,
    
    
    
    RouterModule.forChild([
      // {path:'', component:ServiceEngineerComponent},
      {path:'',component:IncidentsComponent},
      // children: [
          
      // {path:"installation",component: InstallationComponent},
      // ]
    // },
    ]) 
  ],
  declarations: [
    IncidentsComponent,
    FixedLengthPipe,
  ]
})
export class IncidentsModule { }
