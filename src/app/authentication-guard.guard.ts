import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
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

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isLoggedIn = !!localStorage.getItem('Connesso');
    if (isLoggedIn) {
      return true; // L'utente è connesso, quindi può accedere alla rotta
    } else {
      this.router.navigate(['/login']); // L'utente non è connesso, reindirizza alla pagina di login
      return false;
    }
  }
  
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authenticate();
  }
  
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean {
    return this.authenticate();
  }

  private authenticate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean {
    if (!this.authService.isLoggedIn()) {
      this.router.navigateByUrl("/login");
      return false;
    } else {
      return true;
    }
  }
}
