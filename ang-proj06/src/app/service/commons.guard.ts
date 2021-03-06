import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class CommonsGuard implements CanActivate {

  constructor(private userService:UsersService,private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      let isAllowed : boolean=true;

      if(this.userService.isLoggedIn()){
        isAllowed=false;
        if(this.userService.currentUser()?.role==='ADMIN')
          return this.router.parseUrl('/users')
        else
          return this.router.parseUrl('/txns')
      }

      return isAllowed;
  }
  
}
