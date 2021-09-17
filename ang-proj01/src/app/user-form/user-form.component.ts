import { Component } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent  {

  user:User;
  possibelStatus:string[];
  possibleRoles:string[];

  constructor() {
    this.user={id:0,fullName:'',role:'',email:'',status:''};
    this.possibelStatus=['active','inactive','diabled','removed'];
    this.possibleRoles=['ADMIN','USER','SUPER_USER'];
  }


}
