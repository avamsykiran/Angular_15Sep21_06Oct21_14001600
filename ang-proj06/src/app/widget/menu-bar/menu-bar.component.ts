import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  @Input()
  brand:string;

  @Input()
  links:string[][];

  @Input()
  displayLogout:boolean;

  @Output()
  logoutClicked:EventEmitter<void>;

  constructor() {
    this.brand="";
    this.links=[];
    this.displayLogout=true;
    this.logoutClicked=new EventEmitter<void>();
  }

  ngOnInit(): void {
  }

  logout(){
    this.logoutClicked.emit();
  }
}
