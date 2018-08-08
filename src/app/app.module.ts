import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CustomHttpService } from './providers/custom-http.service';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './components/login/login.service';




const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '', loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule',
  },
  
  ];

@NgModule({
  declarations: [
    AppComponent,
   
  
   
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [LoginService, CustomHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
