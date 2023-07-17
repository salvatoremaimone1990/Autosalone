import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-annulla',
  templateUrl: './annulla.component.html',
  styleUrls: ['./annulla.component.scss']
})
export class AnnullaComponent {

  constructor(private location: Location) { }

  goBack(): void {
    this.location.back();
  }

}
