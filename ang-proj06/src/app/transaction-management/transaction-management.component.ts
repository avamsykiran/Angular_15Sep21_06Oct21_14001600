import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-transaction-management',
  templateUrl: './transaction-management.component.html',
  styleUrls: ['./transaction-management.component.css']
})
export class TransactionManagementComponent implements OnInit {

  links:string[][];

  constructor(private userService:UsersService,private router:Router) {
    this.links=[
      ['list','Transaction List'],
      ['add','New Transaction']
    ];
  }

  ngOnInit(): void {
  }

  logout(){
    this.userService.logout();
    this.router.navigateByUrl("/signin");
  }
}
