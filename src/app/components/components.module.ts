import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditUserDetailsComponent } from './edit-user-details/edit-user-details.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule

  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    EditUserDetailsComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
  ]
})
export class ComponentsModule { }
