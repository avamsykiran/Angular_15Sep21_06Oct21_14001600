import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../shared/models/user';
import { map, filter, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersApiUrl: string;
  constructor(private http: HttpClient) {
    this.usersApiUrl = environment.usersApiUrl;
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersApiUrl);
  }

  getById(uid: number): Observable<User> {
    return this.http.get<User>(`${this.usersApiUrl}/${uid}`);
  }

  deleteById(uid: number): Observable<void> {
    return this.http.delete<void>(`${this.usersApiUrl}/${uid}`);
  }

  add(user: User): Observable<User> {
    return this.http.post<User>(this.usersApiUrl, user);
  }

  modify(user: User): Observable<User> {
    return this.http.put<User>(`${this.usersApiUrl}/${user.id}`, user);
  }

  login(email: string, password: string): Observable<User> {
    return this.http.get<User[]>(`${this.usersApiUrl}?email=${email}`).pipe(
      map(users => users[0]),
      tap(u => {
        if (u) {
          if (u.password === password) {
            sessionStorage.setItem("user", JSON.stringify({ ...u, password: '' }))
          } else {
            throw new Error("Invalid Credentials");
          }
        }else{
          throw new Error("No Such User");
        }
      })
    );
  }

  logout() {
    sessionStorage.removeItem("user");
    sessionStorage.clear();
  }

  currentUser(): User | null {
    let u = sessionStorage.getItem("user");
    return u ? JSON.parse(u) : null;
  }

  isLoggedIn(): boolean {
    return this.currentUser() !== null;
  }
}
