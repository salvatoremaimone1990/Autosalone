import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  tokenPresente: boolean = false;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {} 

  ngOnInit() {
    console.log('Token presente:', this.tokenPresente);
    this.tokenPresente = !!localStorage.getItem('Token');
  }

  hasToken(): boolean {
    return !!localStorage.getItem('Token');
  }

  logout(): void {
    localStorage.removeItem('Token');
    this.authService.logout();
    console.log('Logout eseguito.');
    this.router.navigateByUrl('/home');
  }
}
