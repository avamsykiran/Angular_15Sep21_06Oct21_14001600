import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersApiUrl:string;
  constructor(private http : HttpClient) {
    this.usersApiUrl=environment.usersApiUrl;
  }

  getAll():Observable<User[]>{
    return this.http.get<User[]>(this.usersApiUrl);
  }

  getById(uid:number):Observable<User>{
    return this.http.get<User>(`${this.usersApiUrl}/${uid}`);
  }

  deleteById(uid:number):Observable<void>{
    return this.http.delete<void>(`${this.usersApiUrl}/${uid}`);
  }

  add(user:User):Observable<User>{
    return this.http.post<User>(this.usersApiUrl,user);
  }

  modify(user:User):Observable<User>{
    return this.http.put<User>(`${this.usersApiUrl}/${user.id}`,user);
  }
}
