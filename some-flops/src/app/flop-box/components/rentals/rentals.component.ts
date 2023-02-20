import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, tap } from 'rxjs';
import { FlopBoxService } from '../../../core/services/flop-box/flop-box.service';
import { FlopBoxCart } from '../../../shared/models/flop-box-cart.model';
import { Flop } from '../../../shared/models/flop.model';

@Component({
  selector: 'app-flop-box-rentals',
  templateUrl: './rentals.component.html',
  styleUrls: ['./rentals.component.scss']
})
export class RentalsComponent implements OnInit, OnDestroy {
  private flopBoxService: FlopBoxService;
  private flopBoxCart: FlopBoxCart | undefined;
  private subscriptions: Subscription = new Subscription();

  public rentals$: Observable<Flop[]>;

  constructor(flopBoxService: FlopBoxService) {
    this.flopBoxService = flopBoxService;
    this.rentals$ = this.flopBoxService.rentals;
  }

  public ngOnInit(): void {
    this.subscriptions.add(this.flopBoxService.cart$.subscribe((data: FlopBoxCart) => {
      this.flopBoxCart = data;
    }));
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public addToCart(flop: Flop): void {
    this.flopBoxService.addToCart(flop);
  }

  public removeFromCart(flop: Flop): void {
    this.flopBoxService.removeFromCart(flop);
  }

  public isInCart(flop: Flop): boolean {
    return this.flopBoxCart?.items?.includes(flop) || false;
  }
}
