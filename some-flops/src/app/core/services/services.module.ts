import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlopBoxService } from './flop-box/flop-box.service';
import { FlopBusterService } from './flop-buster/flop-buster.service';
import { FlopVotingService } from './flop-voting/flop-voting.service';
import { FlopService } from './flop/flop.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    FlopService,
    FlopVotingService,
    FlopBusterService,
    FlopBoxService
  ]
})
export class ServicesModule { }
