import { Injectable,EventEmitter, Output } from '@angular/core';
import { OnInit } from '@angular/core';  
//import { FormControl,FormGroup } from '@angular/forms';
import { Auto } from './auto';
import { Contatto } from './contatto';

@Injectable({
  providedIn: 'root'
})


export class LocalStorage implements OnInit{

  constructor() { }
  
  lista:Auto[]=[]
  parsedJson:any; 
  
  ngOnInit() { 
    this.stringifyLista = JSON.stringify(this.lista);  
    this.parsedJson = JSON.parse(this.stringifyLista); 
    this. stringifyMessaggi = JSON.stringify(this.messaggi); 
  };
  stringifyLista:any;
  getLista() { 
    return localStorage.getItem(this.stringifyLista);
  }    

  key: string = 'lista automobili'; 
  nuovaAuto:Auto={key:'', nome:'', modello:'', colore:'', prezzo:0,km:0,imageUrl:''} 
  nuova:Auto={key:'', nome:'', modello:'', colore:'', prezzo:0,km:0,imageUrl:''} 

  public saveData(key:string, nuova={nome:'', modello:'', colore:'', prezzo:'',km:'', imageUrl:''}) {
    localStorage.setItem(key, JSON.stringify(nuova))
    this.lista.push(this.nuovaAuto)   
  }

  public getData(key: string) {
    let data = localStorage.getItem(key)|| "";
    return (data);
  }
  
  //REMOVE
  public removeData(key:string) {
    localStorage.removeItem(key);
    const url="${this.automobileUrl}/{$id}"
  }
  
  //CLEAR
  public clearData() {
    localStorage.clear();
  };

  

  notifica: string = 'messaggi'; 
  stringifyMessaggi:any; 

  public getMessaggi(){
    return localStorage.getItem(this.notifica);
  }

  messaggi:Contatto[]=[] 

  public getNotifica(notifica: string) {     
    let data = localStorage.getItem(this.notifica)|| "";
    return (data);
  }

  nuovo:Contatto={notifica:'', nome: '',cognome:'',mail:'',messaggio: ''};
 
  public sendNotifica() {
    localStorage.setItem(this.notifica, JSON.stringify(this.messaggi)) 
    this.messaggi.push(this.nuovo)   
  }
  
  public removeMessaggio(notifica:string) {
    localStorage.removeItem(notifica);
    const url="${this.messaggioUrl}/{$id}"
  }
    
}