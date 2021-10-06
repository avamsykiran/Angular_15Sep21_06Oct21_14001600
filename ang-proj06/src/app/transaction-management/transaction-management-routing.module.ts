import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransactionManagementComponent } from './transaction-management.component';
import { TransactionsFormComponent } from './transactions-form/transactions-form.component';
import { TransactionsListComponent } from './transactions-list/transactions-list.component';

const routes: Routes = [
  { path: '', component: TransactionManagementComponent,children:[
    {path:'list',component:TransactionsListComponent},
    {path:'add',component:TransactionsFormComponent},
    {path:'edit/:id',component:TransactionsFormComponent},
    {path: '', pathMatch:'full',redirectTo:'list'}
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionManagementRoutingModule { }
