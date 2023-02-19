import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { FlopBusterRoutingModule } from './flop-buster-routing.module';
import { FlopBusterComponent } from './flop-buster.component';
import { WatchListItemComponent } from './components/watch-list-item/watch-list-item.component';


@NgModule({
  declarations: [
    FlopBusterComponent,
    WatchListItemComponent
  ],
  imports: [
    CommonModule,
    FlopBusterRoutingModule,
    FontAwesomeModule,
    MatCardModule
  ]
})
export class FlopBusterModule { }
