import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private authToken: string | null = null;

  constructor(private router: Router) {}

  login(username: string, password: string): Observable<any> {  
    console.log('Utente connesso:', username);
    const token = "L'utente è connesso";
    return of(new HttpResponse({ status: 200, body: { token } }));
  }

  logout(): void {
    localStorage.removeItem("token");
  }

  getToken(): string {
    return localStorage.getItem("token") || '';
  }

  isLoggedIn(): boolean {
    return localStorage.getItem("token") != null;
  }

  loggedUser(): boolean {
    if (localStorage.getItem("token") != null) {
      this.router.navigate(['automobili']);
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }

  utenti: string = 'utenti';
  personale: { utenti: string; firstName: string; lastName: string; username: string; password: string;  }[] = [];
  nuovoUtente = { utenti: '', firstName: '', lastName: '', username: '', password: '' };

  getUtenti(): { utenti: string;  firstName: string; lastName: string;username: string; password: string }[] {
    const utenti = localStorage.getItem(this.utenti);
    return utenti ? JSON.parse(utenti) : [];
  }

  addUser(): void {
    this.personale = this.getUtenti();
    const utenteDaInserire: { utenti: string; firstName: string; lastName: string; username: string; password: string;  } = { ...this.nuovoUtente };

    this.personale.push(utenteDaInserire);
    localStorage.setItem(this.utenti, JSON.stringify(this.personale));
  }
}
