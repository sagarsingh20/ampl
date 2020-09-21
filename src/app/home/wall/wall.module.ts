import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WallComponent } from './wall.component';
import { WallRoutingModule } from './wall-routing.module';



@NgModule({
  declarations: [WallComponent],
  imports: [
    CommonModule,
    WallRoutingModule
  ]
})
export class WallModule { }
