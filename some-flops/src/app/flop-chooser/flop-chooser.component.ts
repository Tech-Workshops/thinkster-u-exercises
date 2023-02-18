import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { FlopService } from '../core/services/flop/flop.service';
import { Flop } from '../shared/models/flop.model';

@Component({
  selector: 'app-flop-chooser',
  templateUrl: './flop-chooser.component.html',
  styleUrls: ['./flop-chooser.component.scss']
})
export class FlopChooserComponent implements OnInit, OnDestroy{
  private flops: Flop[] = [];
  private flopService: FlopService | undefined;
  private subscriptions: Subscription = new Subscription();

  public flopOptions: Flop[] = [];
  public lowestRatedFlops: Flop[] = [];
  public isCorrectAnswer: boolean | undefined;

  constructor(flopService: FlopService) {
    this.flopService = flopService
  }

  public ngOnInit(): void {
    this.subscriptions.add(this.flopService?.flops$.subscribe((data: Flop[]) => {
      this.flops = data;
      this.addRandomFlop();
      this.addRandomFlop();
    }));
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public reset(): void {
    this.flopOptions = [];
    this.lowestRatedFlops = [];
    this.addRandomFlop();
    this.addRandomFlop();
  }

  public addRandomFlop(): void {
    let index;
    do {
       index = Math.floor(Math.random() * this.flops?.length);
    } while(this.flopOptions.includes(this.flops[index]))

    this.flopOptions.push(this.flops[index]);
  }

  public flopChosen(flop: Flop): void {
    if (this.flopOptions === undefined) {
      return;
    }

    const lowestStars = Math.min(...this.flopOptions.map(function(flop: Flop) { return flop.stars}));

    // This will potentially contain and return multiple items that have the same star rating.
    // Not accounting for this possible edge case for this homework.
    this.lowestRatedFlops = this.flopOptions.filter(flop => flop.stars === lowestStars)

    this.isCorrectAnswer = this.lowestRatedFlops.includes(flop);
  }
}
