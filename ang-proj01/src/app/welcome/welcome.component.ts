import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  welcomeMessage:string;
  imgs:string[];
  logo:string;

  width:number;

  center:boolean;
  border:boolean;
  roundCorners:boolean;

  constructor() {
    this.welcomeMessage="Hello all! Welcoem to my first angular project";
    this.imgs=['assets/images/w1.jpg','assets/images/w2.jpg'];
    this.logo=this.imgs[0];

    this.width=200;
    this.center=true;
    this.border=false;
    this.roundCorners=true;
  }

  toggleLogo(){
    if(this.logo===this.imgs[0])
      this.logo=this.imgs[1];
    else
      this.logo=this.imgs[0];
  }
}
