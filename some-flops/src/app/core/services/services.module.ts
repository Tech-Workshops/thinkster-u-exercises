import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlopChooserService } from './flop-chooser/flop-chooser.service';
import { FlopVotingService } from './flop-voting/flop-voting.service';
import { FlopService } from './flop/flop.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    FlopService,
    FlopChooserService,
    FlopVotingService
  ]
})
export class ServicesModule { }
