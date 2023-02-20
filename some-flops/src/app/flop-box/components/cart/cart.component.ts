import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FlopBoxService } from '../../../core/services/flop-box/flop-box.service';
import { FlopBoxCart } from '../../../shared/models/flop-box-cart.model';

@Component({
  selector: 'app-flop-box-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  private flopBoxService: FlopBoxService;

  public cart$: Observable<FlopBoxCart>

  constructor(flopBoxService: FlopBoxService) {
    this.flopBoxService = flopBoxService;
    this.cart$ = this.flopBoxService.cart$
  }
}
