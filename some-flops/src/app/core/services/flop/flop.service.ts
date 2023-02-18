import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Flop } from '../../../shared/models/flop.model';
import flopData from '../../../../assets/mock-data/flop-data.json';

@Injectable({
  providedIn: 'root'
})
export class FlopService {
  public flops$ = new ReplaySubject<Flop[]>();

  constructor() {
    this.loadFlops();
  }

  private loadFlops(){
    this.flops$.next(flopData);
  }
}
