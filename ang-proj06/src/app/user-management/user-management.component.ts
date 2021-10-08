import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../service/users.service';
import { User } from '../shared/models/user';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  users?:User[];
  errMsg?:string;

  constructor(private userService:UsersService,private router:Router) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe(
      data => this.users=data,
      err => {console.log(err); this.errMsg="Unable to retrive users list";}
    );
  }

  logout(){
    this.userService.logout();
    this.router.navigateByUrl("/signin");
  }
}
