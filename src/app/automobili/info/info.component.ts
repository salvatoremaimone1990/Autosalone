import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Observable,of } from 'rxjs';
import { catchError,  tap } from 'rxjs/operators';
import { LocalStorage } from 'src/app/local.service';
import { Auto } from 'src/app/auto';//import { NotificaService } from '../notifica.service';
import { AUTOMOBILI } from 'src/lista';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: [ './info.component.scss' ]
})
export class InfoComponent  {
  indexAutoEdit: number | undefined;
  auto: Auto | undefined;
  //private automobiliUrl = 'api/automobili';
  nuovaAuto:Auto={key:'', nome:'', modello:'', colore:'', prezzo:0,km:0,imageUrl:''} 
  autoDaModificare:Auto={key:'', nome:'', modello:'', colore:'', prezzo:0,km:0,imageUrl:''} //intestazione al metodo JSon stringify
  //nuova:Auto={key:'', nome:'', modello:'', colore:'', prezzo:0}  
  key: string = 'Lista auto'; //inizzializzazione della chiave  stringifiedCar:any;
  automobili = AUTOMOBILI;
  parsedJson:any
  model:Auto={key:'1', nome:'Dacia',  modello:'Duster',colore:'bianco',prezzo:15000, km:0,imageUrl:'htttps:google.it'}; //Funziona
  strLista:any



  constructor(
    //private notificaService: NotificaService,
    private location: Location,
    private activatedRoute: ActivatedRoute
   ) { }
    //private log(notifica: string) {this.notificaService.add(` ${notifica}`);}
    
  

    /*public saveData(key:string, automobileDaSalvare:Auto)  {
      localStorage.setItem(key, JSON.stringify(automobileDaSalvare));
      
    }*/

    lista:Auto[]=[];  
    parsLista:any

  ngOnInit() { 
    this.activatedRoute.params.subscribe((params: Params) => {
      this.indexAutoEdit = params['indexAuto'];
      const listaAutoStr: string = localStorage.getItem(this.key)!;
      this.lista = JSON.parse(listaAutoStr);
      this.autoDaModificare = this.lista[this.indexAutoEdit!];
    });
  }
  
  save() {
    this.lista[this.indexAutoEdit!] = this.autoDaModificare;
    localStorage.setItem(this.key, JSON.stringify(this.lista))
    this.location.back();
  }
 
}