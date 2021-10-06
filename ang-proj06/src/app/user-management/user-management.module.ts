import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserManagementComponent } from './user-management.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { WidgetModule } from '../widget/widget.module';


@NgModule({
  declarations: [UserManagementComponent, UsersListComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    WidgetModule
  ]
})
export class UserManagementModule { }
