import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateComponent } from './components/create/create.component';
import { IndexComponent } from './components/index/index.component';
import { EditComponent } from './components/edit/edit.component';

import { AdemployeeService } from './ademployee.service';
import { LoginComponent } from './login/login.component';
import { SearchByManagerComponent } from './search-by-manager/search-by-manager.component';
import { ResultByManagerComponent } from './result-by-manager/result-by-manager.component';
import { SearchByNameComponent } from './search-by-name/search-by-name.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'manager',
    component: SearchByManagerComponent
  },
  {
    path: 'Resultmanager/:manager_id',
    component: ResultByManagerComponent
  },
  {
    path: 'name',
    component: SearchByNameComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    IndexComponent,
    EditComponent,
    LoginComponent,
    SearchByManagerComponent,
    ResultByManagerComponent,
    SearchByNameComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    SlimLoadingBarModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ AdemployeeService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
