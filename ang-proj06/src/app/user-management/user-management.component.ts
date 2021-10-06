import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  constructor(private userService:UsersService,private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.userService.logout();
    this.router.navigateByUrl("/signin");
  }
}
