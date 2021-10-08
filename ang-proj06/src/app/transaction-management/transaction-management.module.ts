import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TransactionManagementRoutingModule } from './transaction-management-routing.module';
import { TransactionManagementComponent } from './transaction-management.component';
import { TransactionsListComponent } from './transactions-list/transactions-list.component';
import { TransactionsFormComponent } from './transactions-form/transactions-form.component';
import { WidgetModule } from '../widget/widget.module';

@NgModule({
  declarations: [TransactionManagementComponent, TransactionsListComponent, TransactionsFormComponent],
  imports: [
    CommonModule,
    TransactionManagementRoutingModule,
    WidgetModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TransactionManagementModule { }
