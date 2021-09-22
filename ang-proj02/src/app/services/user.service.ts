import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users:User[];

  constructor() { 
    this.users=[
      {id:1,fullName:'Vamsy',email:'vamsy.kiran@iiht.com'},
      {id:2,fullName:'Suseela',email:'suseela@gmail.com'}
    ];
  }

  getAll():User[]{
    return this.users;
  }

  getById(id:number):User|undefined{
    return this.users.find(u=>u.id===id);
  }

  add(user?:User):User|undefined{
    if(user){
      if(this.users.length===0) user.id=1;
      else user.id = this.users.length+1;

      this.users.push(user);
    }
    return user;
  }

  update(user?:User):User|undefined{
    if(user){
      let index = this.users.findIndex(u=>u.id===user.id);
      this.users[index]=user;
    }
    return user;    
  }

  deleteById(id:number):void{
    let index = this.users.findIndex(u=>u.id===id);
    this.users.splice(index,1);
  }
}
