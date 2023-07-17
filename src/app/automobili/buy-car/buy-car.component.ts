import { Component, AfterViewInit } from '@angular/core';
import { loadStripe, Stripe } from '@stripe/stripe-js';

@Component({
  selector: 'app-buy-car',
  templateUrl: './buy-car.component.html',
  styleUrls: ['./buy-car.component.scss']
})
export class BuyCarComponent implements AfterViewInit {
  stripe: Stripe | null = null;
  cardElement: any;

  constructor() {}

  async ngAfterViewInit() {
    this.stripe = await loadStripe('pk_test_51NQph3CXoPKOkelYTp3wY0tRVXpCr7BIxCJRMXDSo7AgLjFqrIg3mGkx4nr2yV5N79piV5RsPcCHgo1ayR1GGYpW00LHfPtpDM'); // Sostituisci con la tua chiave pubblica di Stripe
    if (this.stripe) {
      const elements = this.stripe.elements();
      this.cardElement = elements.create('card');

      // Montaggio dell'elemento della carta di credito
      this.cardElement.mount('#card-element');
    }
  }

  effettuaAcquisto() {
    if (this.stripe) {
      this.stripe.createToken(this.cardElement).then((result: any) => {
        if (result.error) {
          // Gestisci gli errori della validazione della carta
          console.error(result.error);
        } else {
          // Invia il token al tuo server
          const token = result.token.id;
          // Esegui la logica dell'acquisto o invia il token al server per l'elaborazione
          this.effettuaAcquistoServer(token);
        }
      });
    }
  }

  effettuaAcquistoServer(token: string) {
    // Esegui le operazioni necessarie per l'acquisto, ad esempio invia il token al tuo server
    console.log('Acquisto effettuato con successo!');
    console.log('Token: ' + token);

    // Reindirizza alla dashboard di Stripe per completare il pagamento di test
    window.location.href = 'https://dashboard.stripe.com/test/payments/' + token;
  }
}
