import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FlopBusterService } from '../core/services/flop-buster/flop-buster.service';
import { WatchListItem } from '../shared/models/watch-list-item.model';

@Component({
  selector: 'app-flop-buster',
  templateUrl: './flop-buster.component.html',
  styleUrls: ['./flop-buster.component.scss']
})
export class FlopBusterComponent implements OnInit, OnDestroy {
  private flopBusterService: FlopBusterService | undefined;
  private subscriptions: Subscription = new Subscription();
  private numItemsToDisplay = 4;

  public watchListItems: WatchListItem[] = [];

  constructor(flopBusterService: FlopBusterService) {
    this.flopBusterService = flopBusterService
  }

  public ngOnInit(): void {
    this.subscriptions.add(this.flopBusterService?.watchListItems$.subscribe((data: WatchListItem[]) => {
      this.watchListItems = data;
    }));
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public showAll(): void {
    this.numItemsToDisplay = this.watchListItems.length;
  }

  public itemsToDisplay(): number {
    return this.numItemsToDisplay;
  }

  public moveItem(moveDirection: number, currentIndex: number) {
    if (currentIndex + moveDirection < 0 ||
        currentIndex + moveDirection > this.watchListItems.length) {
      return;
    }

    const tempItem = {...this.watchListItems[currentIndex]};
    this.watchListItems[currentIndex] = {...this.watchListItems[currentIndex + moveDirection]}
    this.watchListItems[currentIndex + moveDirection] = {...tempItem};
  }
}
