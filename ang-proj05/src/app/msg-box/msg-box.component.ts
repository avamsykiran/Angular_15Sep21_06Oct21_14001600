import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-msg-box',
  templateUrl: './msg-box.component.html',
  styleUrls: ['./msg-box.component.css']
})
export class MsgBoxComponent implements OnInit {

  @Input()
  type:string;

  @Output()
  onOk:EventEmitter<void>;

  constructor() {
    this.type="info";
    this.onOk=new EventEmitter<void>();
  }

  ngOnInit(): void {
  }

  okClicked(){
    this.onOk.emit();
  }
}
