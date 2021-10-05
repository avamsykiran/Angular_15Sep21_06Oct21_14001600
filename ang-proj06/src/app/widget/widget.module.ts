import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MsgBoxComponent } from './msg-box/msg-box.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [MsgBoxComponent, MenuBarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [MsgBoxComponent, MenuBarComponent]
})
export class WidgetModule { }
