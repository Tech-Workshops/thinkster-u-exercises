import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { FlopBoxRoutingModule } from './flop-box-routing.module';
import { FlopBoxComponent } from './flop-box.component';
import { RentalsComponent } from './components/rentals/rentals.component';
import { CartComponent } from './components/cart/cart.component';


@NgModule({
  declarations: [
    FlopBoxComponent,
    RentalsComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    FlopBoxRoutingModule,
    MatCardModule
  ]
})
export class FlopBoxModule { }
