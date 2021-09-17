import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css']
})
export class PipesDemoComponent  {

  str:String;
  num:number;
  today:Date;

  constructor() {
    this.str="hello World";
    this.num=1024.567;
    this.today=new Date();
  }

 
}
