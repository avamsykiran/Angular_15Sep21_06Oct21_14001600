import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router'
import { FormsModule,ReactiveFormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserForm2Component } from './user-form2/user-form2.component';

const routes : Routes = [
  {path:'list',component:UsersListComponent},
  {path:'add',component:UserFormComponent},
  {path:'edit/:id',component:UserFormComponent},
  {path:'add2',component:UserForm2Component},
  {path:'edit2/:id',component:UserForm2Component},
  {path:'',pathMatch:'full',redirectTo:'list'},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UserFormComponent,
    NotFoundComponent,
    UserForm2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
