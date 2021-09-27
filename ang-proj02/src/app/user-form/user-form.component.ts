import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent  {

  user:User;
  isNew:boolean;
  
  constructor(private userService:UserService,private router:Router,private activatedRoute:ActivatedRoute) {
    let id = this.activatedRoute.snapshot.params.id;
    if(id){
      this.isNew=false;
     /* let u = this.userService.getById(parseInt(id));
      if(u)
        this.user=u;*/
      this.user=this.userService.getById(parseInt(id))??{id:0,fullName:'',email:''};
    }else{
      this.isNew=true;
      this.user={id:0,fullName:'',email:''};
    }
  }

  formSubmitted(){
    if(this.isNew){
      this.userService.add(this.user);
    }else{
      this.userService.update(this.user);
    }
    
    this.router.navigateByUrl("/list");
  }
}
