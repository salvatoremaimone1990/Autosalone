import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { User } from './user_interface';
import { LocalStorage } from '../local.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  registrationForm: FormGroup;
  loginForm: FormGroup;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private formBuilder: FormBuilder,
    private localStorage: LocalStorage
  ) {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.minLength(5)]
    });
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  get firstNameControl(): FormControl {
    return this.registrationForm.get('firstName') as FormControl;
  }

  get lastNameControl(): FormControl {
    return this.registrationForm.get('lastName') as FormControl;
  }

  get usernameControl(): FormControl {
    return this.registrationForm.get('username') as FormControl;
  }

  get passwordControl(): FormControl {
    return this.registrationForm.get('password') as FormControl;
  }

  utenti: string = 'utenti';
  personale: User[] = [];
  nuovoUtente: User = { utenti: '', firstName: '', lastName: '', username: '', password: '' };

  addUser(): void {
    this.nuovoUtente.firstName = this.registrationForm.get('firstName')!.value;
    this.nuovoUtente.lastName = this.registrationForm.get('lastName')!.value;
    this.nuovoUtente.username = this.registrationForm.get('username')!.value;
    this.nuovoUtente.password = this.registrationForm.get('password')!.value;

    const utenteDaAggiungere: User = { ...this.nuovoUtente };

    const personale: User[] = JSON.parse(localStorage.getItem(this.utenti) || '[]');
    for (const utente of personale) {
      if (utente.username === this.nuovoUtente.username) {
        console.log('Utente già registrato');
        return;
      }
    }

    personale.push(utenteDaAggiungere);
    localStorage.setItem(this.utenti, JSON.stringify(personale));
    this.router.navigate(['login']);
  }

  login(): void {
    const username = this.loginForm.get('username')!.value;
    const password = this.loginForm.get('password')!.value;

    const personale: User[] = JSON.parse(localStorage.getItem(this.utenti) || '[]');
    const utenteRegistrato = personale.find((utente) => utente.username === username);

    if (utenteRegistrato) {
      if (utenteRegistrato.password === password) {
        const success = this.authenticationService.login(username!, password);
        if (success) {
          localStorage.setItem('Connesso', utenteRegistrato.firstName + ' ' + utenteRegistrato.lastName);
          this.localStorage.setConnected(true);
          this.router.navigate(['automobili']);
        } else {
          console.log('Credenziali errate');
        }
      } else {
        console.log('Password errata');
      }
    } else {
      console.log('Utente non registrato');
    }
  }

  logout(): void {
    localStorage.removeItem('Connesso');
    this.localStorage.setConnected(false);
    this.router.navigate(['home']);
  }

  getPersonale(): string | null {
    return localStorage.getItem(this.utenti);
  }

  ngOnInit(): void {
    const utenteConnesso = localStorage.getItem('Connesso');

    if (utenteConnesso) {
      this.localStorage.setConnected(true);
      this.router.navigate(['automobili']);
    } else {
      this.localStorage.setConnected(false);
    }
  }
}
