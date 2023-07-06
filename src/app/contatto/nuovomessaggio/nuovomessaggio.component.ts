import { Component } from '@angular/core';
import { Contatto } from 'src/app/contatto';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuovomessaggio',
  templateUrl: './nuovomessaggio.component.html',
  styleUrls: ['./nuovomessaggio.component.scss']
})
export class NuovomessaggioComponent {
  constructor(private location: Location, private router: Router) { }
 
  ngOnInit() { 
    this.messaggi = JSON.parse(this.getMessaggi()!);
  }

  messaggi:Contatto[]=[];  
  notifica: string = 'messaggi'; 
  
  getMessaggi() {
    return localStorage.getItem(this.notifica);
  }

  nuovoMessaggio:Contatto={notifica:'', nome:'', cognome:'', mail:'', messaggio:''} 

  sendMessage() {
    const smsInUscita: Contatto = this.nuovoMessaggio;
   
    console.log("Messaggio:", this.messaggi)
    if (this.messaggi==null){
      this.messaggi=[]}

      this.messaggi.push({...smsInUscita});
    localStorage.setItem(this.notifica, JSON.stringify(this.messaggi));
    //this.location.back();
    this.router.navigate(['contatto']);
  } 

  public removeMessaggio(indexMessaggio: number) {
    this.messaggi.splice(indexMessaggio, 1);//Splice dell'auto nella messaggi
    localStorage.setItem(this.notifica, JSON.stringify(this.messaggi));
  }


  submitted = false;
  onSubmit() { 
    this.submitted = true; 
  }
}
