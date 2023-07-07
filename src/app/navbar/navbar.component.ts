import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private router: Router) {}

  hasToken(): boolean {
    return !!localStorage.getItem('Utente Connesso');
  }

  logout(): void {
    localStorage.removeItem('Utente Connesso');
    this.router.navigate(['home']);
  }
}
