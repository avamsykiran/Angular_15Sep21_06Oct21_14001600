import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-msg-box',
  templateUrl: './msg-box.component.html',
  styleUrls: ['./msg-box.component.css']
})
export class MsgBoxComponent implements OnInit {

  @Input()
  type:string;

  @Output()
  okClicked:EventEmitter<void>;

  constructor() {
    this.type="info";
    this.okClicked=new EventEmitter<void>();
  }

  ngOnInit(): void {
  }

  okBtnClicked(){
    this.okClicked.emit();
  }

}
