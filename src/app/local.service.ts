import { Injectable, OnInit } from '@angular/core';
import { Auto } from './auto';
import { Contatto } from './contatto';

@Injectable({
  providedIn: 'root'
})
export class LocalStorage implements OnInit {
  lista: Auto[] = [];
  parsedJson: any;
  stringifyLista: any;
  stringifyMessaggi: any;
  private connected = false;
  
  getConnected(): boolean {
    return this.connected;
  }

  setConnected(value: boolean): void {
    this.connected = value;
  }

  ngOnInit() {
    this.stringifyLista = JSON.stringify(this.lista);
    this.parsedJson = JSON.parse(this.stringifyLista);
    this.stringifyMessaggi = JSON.stringify(this.messaggi);
  }

  getLista() {
    return localStorage.getItem(this.key);
  }

  key: string = 'lista automobili';
  nuovaAuto: Auto = { key: '', nome: '', modello: '', colore: '', prezzo: 0, km: 0, imageUrl: '' };
  nuova: Auto = { key: '', nome: '', modello: '', colore: '', prezzo: 0, km: 0, imageUrl: '' };

  public saveData(key: string, nuova = { nome: '', modello: '', colore: '', prezzo: '', km: '', imageUrl: '' }) {
    localStorage.setItem(key, JSON.stringify(nuova));
    this.lista.push(this.nuovaAuto);
  }

  public getData(key: string) {
    let data = localStorage.getItem(key) || '';
    return data;
  }

  //REMOVE
  public removeData(key: string) {
    localStorage.removeItem(key);
    const url = "${this.automobileUrl}/{$id}";
  }

  //CLEAR
  public clearData() {
    localStorage.clear();
  }

  notifica: string = 'messaggi';

  public getMessaggi() {
    return localStorage.getItem(this.notifica);
  }

  messaggi: Contatto[] = [];

  public getNotifica(notifica: string) {
    let data = localStorage.getItem(this.notifica) || '';
    return data;
  }

  nuovo: Contatto = { notifica: '', nome: '', cognome: '', mail: '', messaggio: '' };

  public sendNotifica() {
    localStorage.setItem(this.notifica, JSON.stringify(this.messaggi));
    this.messaggi.push(this.nuovo);
  }

  public removeMessaggio(notifica: string) {
    localStorage.removeItem(notifica);
    const url = "${this.messaggioUrl}/{$id}";
  }
}
