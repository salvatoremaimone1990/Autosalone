import { Component, EventEmitter,Output } from '@angular/core';
import { Contatto } from '../contatto';
import { Injectable } from '@angular/core';
//import { ContattoService } from '../Contatto.vecchio.service';

//https://fireship.io/lessons/sharing-data-between-angular-components-four-methods/
//https://jsonworld.com/blog/different-ways-to-get-form-data-in-angular-component
//https://www.youtube.com/watch?v=Wr5urqswiko


@Component({
  selector: 'app-contatto',
  templateUrl: './contatto.component.html',
  styleUrls: ['./contatto.component.scss']
})
@Injectable({
  providedIn: 'root',
})

export class ContattoComponent {

  constructor () { }     
  nuovoMessaggio:Contatto={notifica:'', nome:'', cognome:'', mail:'', messaggio:''}
  notifica: string = 'messaggi';
    
  ngOnInit() { 
    this.messaggi = JSON.parse(this.getMessaggi()!);
    
   // if (this.messaggi==undefined){ this.messaggi=[]}
  }
  messaggi:Contatto[]=[];  
  
  getMessaggi() { 
    return localStorage.getItem(this.notifica);
  }
  sendMessage() {
    //if (this.messaggi==null){  this.messaggi=[]}    //forse non serve
    const smsInUscita: Contatto = this.nuovoMessaggio;
    this.messaggi.push({...smsInUscita});
    localStorage.setItem(this.notifica, JSON.stringify(this.messaggi));
  }    
  submitted = false;
  onSubmit() { 
    this.submitted = true; 
  }

  public removeData(indexMessaggio: number) {
    this.messaggi.splice(indexMessaggio, 1);
    localStorage.setItem(this.notifica, JSON.stringify(this.messaggi));
  }}