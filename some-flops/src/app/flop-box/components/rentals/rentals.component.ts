import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FlopBoxService } from '../../../core/services/flop-box/flop-box.service';
import { Flop } from '../../../shared/models/flop.model';

@Component({
  selector: 'app-flop-box-rentals',
  templateUrl: './rentals.component.html',
  styleUrls: ['./rentals.component.scss']
})
export class RentalsComponent {
  private flopBoxService: FlopBoxService;

  public rentals$: Observable<Flop[]>;

  constructor(flopBoxService: FlopBoxService) {
    this.flopBoxService = flopBoxService;

    this.rentals$ = this.flopBoxService.rentals;
  }

  public addToCart(flop: Flop): void {
    this.flopBoxService.addToCart(flop);
  }

  public removeFromCart(flop: Flop): void {
    this.flopBoxService.removeFromCart(flop);
  }
}
