import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonsGuard } from './service/commons.guard';
import { TxnsGuard } from './service/txns.guard';
import { UsersGuard } from './service/users.guard';
import { LoginComponent } from './shared/login/login.component';
import { RegistrationComponent } from './shared/registration/registration.component';

const routes: Routes = [
  {
    path: 'users', loadChildren:
      () => import('./user-management/user-management.module').then(m => m.UserManagementModule),
      canActivate:[UsersGuard],canActivateChild:[UsersGuard],canLoad:[UsersGuard]
  },
  {
    path: 'txns', loadChildren:
      () => import('./transaction-management/transaction-management.module').then(m => m.TransactionManagementModule),
      canActivate:[TxnsGuard],canActivateChild:[TxnsGuard],canLoad:[TxnsGuard]
  },
  {
    path: 'signup', component:RegistrationComponent,canActivate:[CommonsGuard]
  },
  {
    path: 'signin', component:LoginComponent,canActivate:[CommonsGuard]
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
