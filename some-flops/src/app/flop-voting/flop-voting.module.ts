import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlopVotingRoutingModule } from './flop-voting-routing.module';
import { FlopVotingComponent } from './flop-voting.component';
import { FlopComponent } from './components/flop/flop.component';
import { FlopVotingService } from './services/flop-voting.service';

@NgModule({
  declarations: [
    FlopVotingComponent,
    FlopComponent
  ],
  imports: [
    CommonModule,
    FlopVotingRoutingModule
  ],
  providers: [
    FlopVotingService
  ]
})
export class FlopVotingModule { }
