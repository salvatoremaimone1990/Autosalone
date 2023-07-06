import { Component } from '@angular/core';
import { Auto } from 'src/app/auto';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nuova',
  templateUrl: './nuova.component.html',
  styleUrls: ['./nuova.component.scss']
})
export class NuovaComponent {
  constructor(private location: Location) { }
 
  ngOnInit() { 
    this.lista = JSON.parse(this.getLista()!);
  }

  lista:Auto[]=[];  
  key: string = 'Lista auto'; 
  
  getLista() {
    return localStorage.getItem(this.key);
  }

  nuovaAuto:Auto={key:'', nome:'', modello:'', colore:'', prezzo:0,km:0,imageUrl:''} 
  
  saveData() {
    const autoDaAggiungere: Auto = this.nuovaAuto;
    if (this.lista==null){
      this.lista=[]}
    this.lista.push({...autoDaAggiungere});
    localStorage.setItem(this.key, JSON.stringify(this.lista));
    this.location.back();
  } 

 

  submitted = false;
  onSubmit() { 
    this.submitted = true; 
  }
}
