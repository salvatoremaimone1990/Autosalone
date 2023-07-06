import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { Auto } from '../auto';
//https://betterprogramming.pub/payments-simplified-stripe-angular-express-4a88bf69f82e

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

@Injectable({
  providedIn: 'root',
})

export class HomeComponent{

  
  

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ){}       
   

 // nuovaAuto:Auto={key:'', nome:'', modello:'', colore:'', prezzo:0,km:0} 
  key: string = 'Lista auto';
  tokenPresente: boolean = false;

  
    ngOnInit() { 
      this.lista = JSON.parse(this.getLista()!);
    } 
    lista:Auto[]=[];  
    
    getLista() {
      return localStorage.getItem(this.key);
    }
    acquistAuto() {
      
    }
    logout(): void {
      this.authService.logout();
      this.router.navigateByUrl("/login");
    }
}

    
    

    

  
    

  
  