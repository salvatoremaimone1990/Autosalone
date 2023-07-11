import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auto } from 'src/app/auto';
import { AuthenticationService } from 'src/app/authentication.service';
import { Stripe } from '@stripe/stripe-js';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
 // stripePromise: Promise<Stripe | null>;
  key: string = 'Lista auto';
  tokenPresente: boolean = false;
  lista: Auto[] = [];

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {
   // this.stripePromise = loadStripe('pk_test_51NQph3CXoPKOkelYTp3wY0tRVXpCr7BIxCJRMXDSo7AgLjFqrIg3mGkx4nr2yV5N79piV5RsPcCHgo1ayR1GGYpW00LHfPtpDM');
  }

  ngOnInit() {
    this.lista = JSON.parse(this.getLista() || '[]');
  }

  getLista() {
    return localStorage.getItem(this.key);
  }

  //acquistoStripe() {
    //this.stripePromise.then(stripe => {
     // stripe.redirectToCheckout({
    //    lineItems: [
      //    { price: 'YOUR_PRICE_ID', quantity: 1 }
     //   ],
        //mode: 'payment',
    //    successUrl: 'URL_SUCCESS_REDIRECT',
     //   cancelUrl: 'URL_CANCEL_REDIRECT'
      //})
     // .then(result => {
      //  if (result.error) {
          // Gestisci eventuali errori
       // }
     // });
    //});
  //}

  acquistAuto() {
    // Logica per l'acquisto dell'auto
  }

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
