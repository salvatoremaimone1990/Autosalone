import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { Auto } from '../auto';
import { loadStripe } from '@stripe/stripe-js';

declare var stripe: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
@Injectable({
  providedIn: 'root',
})
export class HomeComponent implements OnInit {
  stripePromise: Promise<any>;
  key: string = 'Lista auto';
  lista: Auto[] = [];

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {
    this.stripePromise = loadStripe(
      'pk_test_51NQph3CXoPKOkelYTp3wY0tRVXpCr7BIxCJRMXDSo7AgLjFqrIg3mGkx4nr2yV5N79piV5RsPcCHgo1ayR1GGYpW00LHfPtpDM'
    ); // Sostituisci con la tua chiave pubblica di Stripe
  }

  ngOnInit() {
    this.lista = JSON.parse(this.getLista()!);
  }

  async acquistoStripe(auto: Auto) {
    const stripe = await this.stripePromise;

    stripe.redirectToCheckout({
      lineItems: [
        { price: auto.prezzo.toString(), quantity: 1 } // Converti il prezzo in una stringa
      ],
      mode: 'payment',
      successUrl: window.location.origin + '/acquista',
      cancelUrl: window.location.origin + '/annulla'
    })
    .then(function(result: any) {
      if (result.error) {
        // Gestisci eventuali errori
      }
    });
  }
  

  getLista() {
    return localStorage.getItem(this.key);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl("/login");
  }
}
