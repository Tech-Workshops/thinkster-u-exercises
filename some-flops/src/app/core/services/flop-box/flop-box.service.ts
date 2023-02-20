import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { FlopBoxCart } from '../../../shared/models/flop-box-cart.model';
import { Flop } from '../../../shared/models/flop.model';

@Injectable({
  providedIn: 'root'
})
export class FlopBoxService {
  private httpClient: HttpClient;
  private flopBoxCart: FlopBoxCart;

  // Hacky way to create a cart without going full ecommerce on this.
  public cart$: ReplaySubject<FlopBoxCart> = new ReplaySubject<FlopBoxCart>()

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;

    this.flopBoxCart = {
      session: (new Date).getTime().toString(),
      items: []
    };
  }

  public get rentals(): Observable<Flop[]> {
    return this.httpClient?.get<Flop[]>(`${environment.flopBaseUri}/${environment.flopRentalsUri}`);
  }

  public addToCart(flop: Flop): void {
    if (this.flopBoxCart.items.includes(flop)) {
      return;
    }

    this.flopBoxCart.items.push(flop);
    this.updateCart();
    this.cart$.next(this.flopBoxCart);
  }

  public removeFromCart(flop: Flop): void {
    const index = this.flopBoxCart.items.indexOf(flop);

    if (index === -1) {
      return;
    }

    this.flopBoxCart.items.splice(index, 1);
    this.updateCart();
    this.cart$.next(this.flopBoxCart);
  }

  private updateCart(): void {
    if (this.flopBoxCart.items.length === 1) {
      this.httpClient.post<FlopBoxCart>(`${environment.flopBaseUri}/${environment.flopCartsUri}`, JSON.stringify(this.flopBoxCart)).subscribe();
    } else {
      this.httpClient.put<FlopBoxCart>(`${environment.flopBaseUri}/${environment.flopCartsUri}`, JSON.stringify(this.flopBoxCart)).subscribe();
    }
  }
}
