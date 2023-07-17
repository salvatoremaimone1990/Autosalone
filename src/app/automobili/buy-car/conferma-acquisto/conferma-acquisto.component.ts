import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-conferma-acquisto',
  templateUrl: './conferma-acquisto.component.html',
  styleUrls: ['./conferma-acquisto.component.scss']
})
export class ConfermaAcquistoComponent implements OnInit {
  orderId: string = ''; // Proprietà per memorizzare l'ID dell'ordine

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Ottenere l'ID dell'ordine dalla URL
    this.route.queryParams.subscribe(params => {
      this.orderId = params['orderId'];
    });
  }
}
