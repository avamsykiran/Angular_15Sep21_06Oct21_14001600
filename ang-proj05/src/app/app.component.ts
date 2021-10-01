import { Component } from '@angular/core';
import { Link } from './models/link';
import { Message } from './models/message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  msgs:Message[];
  links:Link[];

  constructor(){
    this.links=[
      {to:"http://wwww.google.com",text:"Google"},
      {to:"http://wwww.w3schools.com",text:"UI Tutorial"},
      {to:"http://wwww.stackoverflow.com",text:"Forum"}
    ];
    this.msgs=[
      {type:"info",msg:"a test message"},
      {type:"error",msg:"an error message"},
      {type:"info",msg:"a test message"},
      {type:"error",msg:"an error message"},
      {type:"info",msg:"a test message"},
      {type:"error",msg:"an error message"},
      {type:"info",msg:"a test message"},
      {type:"error",msg:"an error message"},
      {type:"info",msg:"a test message"},
      {type:"error",msg:"an error message"}
    ];
  }

  deleteMsg(index:number){
    this.msgs.splice(index,1);
  }
}
