import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstallationComponent } from './installation.component';
import { RouterModule } from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FixedLengthPipe } from '../../providers/length.pipe';
import { PipeModule } from '../../providers/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    InfiniteScrollModule ,
    FormsModule,
    ReactiveFormsModule,
    PipeModule,
    RouterModule.forChild([
      {path:'',component:InstallationComponent},
      
    ]) 
  ],
  declarations: [
    InstallationComponent,
    

  ]
})
export class InstallationModule { }
