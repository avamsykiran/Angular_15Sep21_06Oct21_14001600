import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';
import { RegistrationComponent } from './shared/registration/registration.component';

const routes: Routes = [
  {
    path: 'users', loadChildren:
      () => import('./user-management/user-management.module').then(m => m.UserManagementModule)
  },
  {
    path: 'txns', loadChildren:
      () => import('./transaction-management/transaction-management.module').then(m => m.TransactionManagementModule)
  },
  {
    path: 'signup', component:RegistrationComponent
  },
  {
    path: 'signin', component:LoginComponent
  },
  {
    path:'',pathMatch:'full',redirectTo:'signin'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
