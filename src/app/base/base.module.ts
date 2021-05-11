import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base.component';
import { OffCanvasHeaderComponent } from './off-canvas-header/off-canvas-header.component';



@NgModule({
  declarations: [BaseComponent, OffCanvasHeaderComponent],
  imports: [
    CommonModule
  ]
})
export class BaseModule { }
