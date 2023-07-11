import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  connected: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.connected = !!localStorage.getItem('Connesso');
  }

  logout(): void {
    localStorage.removeItem('Connesso');
    this.connected = false;
  }

  show(): boolean {
    return !localStorage.getItem('Connesso');
  }
}
