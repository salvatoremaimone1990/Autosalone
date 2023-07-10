import { Component } from '@angular/core';
import { Auto } from '../auto';
import { StripeScriptTag } from 'stripe-angular';
import { AuthenticationService } from '../authentication.service';

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

  constructor(private stripeScriptTag: StripeScriptTag, private authService: AuthenticationService) {
    if (!this.stripeScriptTag.StripeInstance) {
      this.stripeScriptTag.setPublishableKey('');
    }
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
