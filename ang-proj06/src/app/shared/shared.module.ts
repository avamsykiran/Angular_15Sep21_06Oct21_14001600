import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WidgetModule } from '../widget/widget.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginComponent, RegistrationComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    WidgetModule,
    RouterModule
  ],
  exports:[
    LoginComponent,RegistrationComponent
  ]
})
export class SharedModule { }
