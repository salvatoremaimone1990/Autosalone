import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Auto } from './auto';
import { AUTOMOBILI } from 'src/lista';
import { NotificaService } from './notifica.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({ providedIn: 'root' })


export class AutoService {
  private automobiliUrl = 'api/automobili';
  
  httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private notificaService: NotificaService,
    private http: HttpClient,
    ) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); 
      this.log(`${operation} failed: ${error.alert}`);

      return of(result as T);
    };
  }

  private log(notifica: string) {
    this.notificaService.add(` ${notifica}`);
  }
  ngOnInit():void{this.getAuto('Dacia','Duster','A scelta', 12500)}

  getAuto(nome: string, modello:string, colore:string, prezzo:number): 
    Observable<Auto> {
      const auto = AUTOMOBILI.find((auto) => {
        this.getAuto(auto.nome, auto.modello, auto.colore, auto.prezzo);
    })!;
    this.notificaService.add(`Auto aggiunta con  
    nome   =${nome},
    modello=${modello},
    colore =${colore},
    prezzo =${prezzo}`);
    const url = `${this.automobiliUrl}/${nome}`;
    return this.http.get<Auto>(url).pipe(
      tap(_ => this.log(`fetched auto id=${nome}`)),
      catchError(this.handleError<Auto>(`getAuto nome=${nome}${modello}`)));
  }
  
  getAutomobili(): Observable<Auto[]> {
  return this.http.get<Auto[]>(this.automobiliUrl)
    .pipe(
      tap(_ => this.log('fetched automobili')),
      catchError(this.handleError<Auto[]>('getAutomobilis', []))
    );}
      
  updateAuto(auto: Auto): Observable<any> {
    return this.http.put(this.automobiliUrl, auto, this.httpOptions).pipe(
      tap(_ => this.log(`updated auto id=${auto.nome}`)),
      catchError(this.handleError<any>('updateauto'))
    );
  }
  
  deleteAuto(nome: string): Observable<Auto> {
    const url = `${this.automobiliUrl}/${nome}`;

    return this.http.delete<Auto>(url, this.httpOptions).pipe(
      tap(_ => this.log(`Cancellata${nome}`)),
      catchError(this.handleError<Auto>('deleteauto'))
    );
  }

  addAuto(auto: Auto): Observable<Auto> {
    return this.http.post<Auto>(this.automobiliUrl, auto, this.httpOptions).pipe(
      tap((newAuto: Auto) => this.log(`added auto w/ id=${newAuto.nome}`)),
      catchError(this.handleError<Auto>('addAuto'))
    );
  }
}