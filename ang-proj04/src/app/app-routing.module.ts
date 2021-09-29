import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionFormComponent } from './transaction-form/transaction-form.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';

const routes: Routes = [
  {path:'list',component:TransactionListComponent},
  {path:'add',component:TransactionFormComponent},
  {path:'edit/:id',component:TransactionFormComponent},
  {path:'',pathMatch:'full',redirectTo:'list'},
  {path:'**',redirectTo:'list'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
