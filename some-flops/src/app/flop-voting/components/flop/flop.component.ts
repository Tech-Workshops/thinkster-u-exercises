import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Flop } from '../../../shared/models/flop.model';
import { FlopVotingService } from '../../services/flop-voting.service';

@Component({
  selector: 'app-flop',
  templateUrl: './flop.component.html',
  styleUrls: ['./flop.component.scss']
})
export class FlopComponent implements OnInit, OnDestroy{
  @Input() flopData: Flop | null = null;

  public isSelected: boolean = false;
  public isVotingOpen: boolean = true;

  private flopVotingService: FlopVotingService;
  private selectedFlop: string | null = null;
  private subscriptions = new Subscription();

  constructor(flopVotingService: FlopVotingService) {
    this.flopVotingService = flopVotingService;
  }

  public ngOnInit(): void {
    this.subscriptions.add(this.flopVotingService.selectedFlop$.subscribe((data: string) =>{
      this.isSelected = data === this.flopData?.id;
      this.isVotingOpen = data === '';
    }));
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public changeVote(): void {
    if (this.isSelected){
      this.flopVotingService.removeVote();
    } else {
      this.flopVotingService.placeVote(this.flopData?.id);
    }

  }

}
