import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/service/users.service';
import { User } from '../models/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  regForm:FormGroup;
  errMsg?:string;

  constructor(private userService:UsersService,private router:Router) {
    this.regForm= new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required]),
      fullName:new FormControl('',[Validators.required])
    });
  }

  ngOnInit(): void {
  }

  addUser(){
    let user : User = {...this.regForm.value,id:0,role:'USER'};
    this.userService.add(user).subscribe(
      user => this.router.navigateByUrl("/signin"),
      err => {console.log(err);this.errMsg="Could not save user";}
    );
  }
}
