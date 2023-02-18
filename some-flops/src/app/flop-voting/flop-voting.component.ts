import { Component } from '@angular/core';
import { FlopVotingService } from './services/flop-voting.service';

@Component({
  selector: 'app-flop-voting',
  templateUrl: './flop-voting.component.html',
  styleUrls: ['./flop-voting.component.scss']
})
export class FlopVotingComponent {

  public flops$;

  constructor(flopVotingService: FlopVotingService) {
    this.flops$ = flopVotingService.flops$;
  }
}
