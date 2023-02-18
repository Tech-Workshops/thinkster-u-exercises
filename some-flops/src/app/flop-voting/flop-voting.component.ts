import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FlopVotingService } from '../core/services/flop-voting/flop-voting.service';
import { FlopService } from '../core/services/flop/flop.service';
import { Flop } from '../shared/models/flop.model';

@Component({
  selector: 'app-flop-voting',
  templateUrl: './flop-voting.component.html',
  styleUrls: ['./flop-voting.component.scss']
})
export class FlopVotingComponent implements OnInit, OnDestroy{
  private flopService: FlopService | undefined;
  private flopCollection: Flop[] = [];

  public flops: Flop[] = [];
  public subscriptions: Subscription = new Subscription();

  constructor(flopService: FlopService) {
    this.flopService = flopService;
  }

  public ngOnInit(): void {
    this.subscriptions.add(this.flopService?.flops$.subscribe((data: Flop[]) => {
      this.flopCollection = data;
      this.loadRandomFlops();
    }));
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private loadRandomFlops(): void {
    const shuffledFlops = Array.from(this.flopCollection).sort(() => 0.5 -Math.random());
    this.flops = shuffledFlops.slice(0, 4);
  }
}
