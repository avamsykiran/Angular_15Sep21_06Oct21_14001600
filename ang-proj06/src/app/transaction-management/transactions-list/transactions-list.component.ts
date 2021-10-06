import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.css']
})
export class TransactionsListComponent implements OnInit {

  currentUser:User|null;
  constructor(private userService:UsersService) {
    this.currentUser=this.userService.currentUser();
  }

  ngOnInit(): void {
  }

}
