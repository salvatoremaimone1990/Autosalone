import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  connected = false;

  constructor() {}

  ngOnInit(): void {
    this.connected = !!localStorage.getItem('Connesso');
    window.addEventListener('storage', this.onStorageChange);
  }

  ngOnDestroy(): void {
    window.removeEventListener('storage', this.onStorageChange);
  }

  onStorageChange = (event: StorageEvent) => {
    if (event.key === 'Connesso') {
      this.connected = event.newValue !== null;
    }
  };

  logout(): void {
    localStorage.removeItem('Connesso');
    this.connected = false;
  }

  show(): boolean {
    return !this.connected;
  }
}
