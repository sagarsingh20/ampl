import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignComponent } from './sign.component';
import { SignRoutingModule } from './sign-routing.module';

import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SignComponent],
  imports: [
    CommonModule,
    SignRoutingModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SignModule { }
