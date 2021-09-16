import { Component } from '@angular/core';

@Component({
  selector: 'app-arth',
  templateUrl: './arth.component.html',
  styleUrls: ['./arth.component.css']
})
export class ArthComponent  {

  n1:number;
  n2:number;

  constructor() {
    this.n1=10;
    this.n2=3;
  }


}
