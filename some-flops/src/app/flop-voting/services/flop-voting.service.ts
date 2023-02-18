import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { Flop } from '../../shared/models/flop.model';
import flopData from '../../../assets/mock-data/flop-data.json';

@Injectable({
  providedIn: 'root'
})
export class FlopVotingService {
  public selectedFlop$ = new BehaviorSubject<string>('');
  public flops$ = new ReplaySubject<Flop[]>();

  constructor() {
    this.loadFlops();
  }

  public placeVote(flopId: string | undefined): void {
    if (flopId === undefined) {
      return;
    }

    this.selectedFlop$.next(flopId);
  }

  public removeVote(): void {
    this.selectedFlop$.next('');
  }

  private loadFlops(){
    this.flops$.next(flopData);
  }
}
