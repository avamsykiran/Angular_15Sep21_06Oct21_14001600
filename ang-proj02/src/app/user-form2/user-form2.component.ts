import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-form2',
  templateUrl: './user-form2.component.html',
  styleUrls: ['./user-form2.component.css']
})
export class UserForm2Component {
  
  userForm : FormGroup;

  isNew:boolean;
  
  constructor(private userService:UserService,private router:Router,private activatedRoute:ActivatedRoute) {

    this.isNew=true;

    this.userForm = new FormGroup({
      id: new FormControl(0),
      fullName:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(55)]),
      email:new FormControl('',[Validators.required,Validators.email])
    });

    let id = this.activatedRoute.snapshot.params.id;
    if(id){
      this.isNew=false;
      let u = this.userService.getById(parseInt(id));
      if(u){
        this.userForm.setValue(u);
      }
    }
  }

  fc(key:string):AbstractControl{
    return this.userForm.controls[key];
  }

  get id():AbstractControl{
    return this.fc('id');
  }

  get fullName():AbstractControl{
    return this.fc('fullName');
  }

  get email():AbstractControl{
    return this.fc('email');
  }

  formSubmitted(){
    if(this.isNew){
      this.userService.add(this.userForm.value);
    }else{
      this.userService.update(this.userForm.value);
    }
    
    this.router.navigateByUrl("/list");
  }

}
