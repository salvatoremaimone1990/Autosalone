import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { Auto } from '../auto';
import { loadStripe } from '@stripe/stripe-js';

declare var stripe: any;

//https://betterprogramming.pub/payments-simplified-stripe-angular-express-4a88bf69f82e

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

@Injectable({
  providedIn: 'root',
})

export class HomeComponent{

  stripePromise: Promise<any>;

  
  

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ){    this.stripePromise = loadStripe('pk_test_51NQph3CXoPKOkelYTp3wY0tRVXpCr7BIxCJRMXDSo7AgLjFqrIg3mGkx4nr2yV5N79piV5RsPcCHgo1ayR1GGYpW00LHfPtpDM');
}       
   

 // nuovaAuto:Auto={key:'', nome:'', modello:'', colore:'', prezzo:0,km:0} 
  key: string = 'Lista auto';
  tokenPresente: boolean = false;

  
  async acquistoStripe() {
    const stripe = await this.stripePromise;

    stripe.redirectToCheckout({
      lineItems: [
        { price: 'YOUR_PRICE_ID', quantity: 1 }
      ],
      mode: 'payment',
      successUrl: 'URL_SUCCESS_REDIRECT',
      cancelUrl: 'URL_CANCEL_REDIRECT'
    })
    .then(function(result: any) {
      if (result.error) {
        // Gestisci eventuali errori
      }
    });
  }
  ngOnInit() { 
      this.lista = JSON.parse(this.getLista()!);
    } 
    lista:Auto[]=[];  
    
    getLista() {
      return localStorage.getItem(this.key);
    }
    acquistAuto() {
      
    }
    logout(): void {
      this.authService.logout();
      this.router.navigateByUrl("/login");
    }
}

    
    

    

  
    

  
  