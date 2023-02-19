import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { Flop } from '../../../shared/models/flop.model';

@Injectable({
  providedIn: 'root'
})
export class FlopVotingService {
  public selectedFlop$ = new Subject<number>();
  public flops$ = new ReplaySubject<Flop[]>();

  public placeVote(flopId: number | undefined): void {
    if (flopId === undefined) {
      return;
    }

    this.selectedFlop$.next(flopId);
  }

  public removeVote(): void {
    this.selectedFlop$.next(-1);
  }
}
