import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, 
  UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(
    private authService: AuthenticationService,
    private router: Router     
  ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | 
  UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('canActivate');
    if (localStorage.getItem("token") !== null) {
      console.log('Authenticated');
      return true;
    } else {
      console.log('Not authenticated');
      return this.router.createUrlTree(['automobili']);
    }
  }
  
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authenticate();
  }
  
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.authenticate();
  }

  private authenticate(): boolean {
    if (!this.authService.loggedUser()) {
      this.router.navigateByUrl("/login");
      return false;
    } else {
      return true;
    }
  }
}
