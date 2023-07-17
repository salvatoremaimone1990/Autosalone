import { Component } from '@angular/core';
import { Auto } from '../auto';
import { StripeScriptTag } from 'stripe-angular';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { loadStripe } from '@stripe/stripe-js';

@Component({
  selector: 'app-automobili',
  templateUrl: './automobili.component.html',
  styleUrls: ['./automobili.component.scss']
})
export class AutomobiliComponent {
  nuovaAuto: Auto = { key: '', nome: '', modello: '', colore: '', prezzo: 0, km: 0, imageUrl: '' };
  key: string = 'Lista auto';
  lista: Auto[] = [];
  submitted = false;
  stripePromise: Promise<any>;

  constructor(
    private stripeScriptTag: StripeScriptTag,
    private router: Router,
    private authService: AuthenticationService
  ) {
    this.stripePromise = loadStripe('pk_test_51NQph3CXoPKOkelYTp3wY0tRVXpCr7BIxCJRMXDSo7AgLjFqrIg3mGkx4nr2yV5N79piV5RsPcCHgo1ayR1GGYpW00LHfPtpDM');

    if (!this.stripeScriptTag.StripeInstance) {
      this.stripeScriptTag.setPublishableKey('');
    }
  }

  modificaAuto(auto: Auto) {
    const indexAuto = this.lista.indexOf(auto);
    this.router.navigate(['/automobili/info', indexAuto]);
  }

  async acquistoStripe(auto: Auto) { // Aggiungi 'async' qui
    const stripe = await this.stripePromise;
  
    stripe.redirectToCheckout({
      lineItems: [
        { price: auto.prezzo.toString(), quantity: 1 }
      ],
      mode: 'payment',
      successUrl: '/conferma-acquisto',
      cancelUrl: 'URL_CANCEL_REDIRECT'
    })
    .then((result: any) => {
      if (result.error) {
        // Gestisci eventuali errori
      } else {
        // Naviga al componente di conferma acquisto
        this.router.navigateByUrl('/conferma-acquisto');
      }
    });
  }
  

  ngOnInit() {
    this.lista = JSON.parse(this.getLista() || '[]');
  }

  getLista(): string | null {
    return localStorage.getItem(this.key);
  }

  saveData() {
    const autoDaAggiungere: Auto = this.nuovaAuto;
    this.lista.push({ ...autoDaAggiungere });
    localStorage.setItem(this.key, JSON.stringify(this.lista));
  }

  onSubmit() {
    this.submitted = true;
  }

  public removeData(indexAuto: number) {
    this.lista.splice(indexAuto, 1);
    localStorage.setItem(this.key, JSON.stringify(this.lista));
  }
}
