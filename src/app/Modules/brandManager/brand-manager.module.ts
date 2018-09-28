import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandManagerComponent } from './brand-manager.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    RouterModule.forChild([

      { path: '', component: BrandManagerComponent },


    ])
  ],
  declarations: [
    BrandManagerComponent,
  ]
})
export class BrandManagerModule { }
