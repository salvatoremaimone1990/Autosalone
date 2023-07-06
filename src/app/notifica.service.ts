import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificaService {
  alert: string[] = [];

  add(alert: string) {
    this.alert.push(alert);
  }

  clear() {
    this.alert = [];
  }
}