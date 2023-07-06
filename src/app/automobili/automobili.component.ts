import { Component } from '@angular/core';
import { Auto } from '../auto';
import { Injectable } from '@angular/core';
import { StripeScriptTag } from 'stripe-angular';
//https://fireship.io/lessons/sharing-data-between-angular-components-four-methods/
//https://jsonworld.com/blog/different-ways-to-get-form-data-in-angular-component
//https://www.youtube.com/watch?v=Wr5urqswiko


@Component({
  selector: 'app-automobili',
  templateUrl: './automobili.component.html',
  styleUrls: ['./automobili.component.scss']
})
@Injectable({
  providedIn: 'root',
})

export class AutomobiliComponent {

  constructor(private stripeScriptTag: StripeScriptTag) {
    if (!this.stripeScriptTag.StripeInstance) {
      this.stripeScriptTag.setPublishableKey('');
    }
  }   
       
  nuovaAuto:Auto={key:'', nome:'', modello:'', colore:'', prezzo:0,km:0,imageUrl:''} //intestazione al metodo JSon stringify
  key: string = 'Lista auto';
    
  lista:Auto[]=[];  
  
  ngOnInit() { 
    this.lista = JSON.parse(this.getLista()!);
  }
  
  getLista() {
    return localStorage.getItem(this.key);
  }
  saveData() {
    const autoDaAggiungere: Auto = this.nuovaAuto;
    this.lista.push({...autoDaAggiungere});//Push dell'auto nella lista
    localStorage.setItem(this.key, JSON.stringify(this.lista));
  }    
  submitted = false;
  onSubmit() { 
    this.submitted = true; 
  }

  public removeData(indexAuto: number) {
    this.lista.splice(indexAuto, 1);//Splice dell'auto nella lista
    localStorage.setItem(this.key, JSON.stringify(this.lista));
  }
 
}