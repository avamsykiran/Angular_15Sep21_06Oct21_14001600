import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string;
  password:string;
  errMsg?:string;

  constructor(private userService:UsersService,private router:Router) {
    this.email='';
    this.password='';
  }

  ngOnInit(): void {
  }

  login(){
    this.userService.login(this.email,this.password).subscribe(
      user =>{
        if(user.role==='ADMIN'){
          this.router.navigateByUrl("/users");
        }else{
          this.router.navigateByUrl("/txns");
        }
      },
      err => {console.log(err); this.errMsg=err.message;}
    );
  }
}
