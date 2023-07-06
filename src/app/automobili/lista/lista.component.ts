import { Component } from '@angular/core';
import { Auto } from 'src/app/auto';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {
  lista:Auto[]=[];
  strLista:any;
  parsLista:any; //intestazione al parse JSON data     
  //nuova:Auto={key:'', nome:'', modello:'', colore:'', prezzo:0}  
  key: string = 'Lista auto'; //inizzializzazione della chiave
  selezionAuto?: Auto; 


  
  ngOnInit() { 
    console.log("Auto di partenza:", this.lista);
    this.strLista = JSON.stringify(this.lista);  //Conversione in JSON. Trasformo il Json in dato      STRLISTA

    console.log("STRINGIFY delle auto" , this.strLista); //Stampo il dato nella console
    this.parsLista = JSON.parse(this.strLista); //Parse da JSON. Trasformo la stringa in Json          PARSLISTA   
    console.log("PARSE delle auto" , this.parsLista);//stampo il json
  }   

  public removeData(key:string) {
    localStorage.removeItem(key);
  }
   
  getLista() {
    return localStorage.getItem(this.strLista);
  }    

}
