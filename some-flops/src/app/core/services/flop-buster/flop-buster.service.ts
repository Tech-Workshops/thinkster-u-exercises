import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { WatchListItem } from '../../../shared/models/watch-list-item.model';

import watchListData from '../../../../assets/mock-data/watch-list-data.json';

@Injectable({
  providedIn: 'root'
})
export class FlopBusterService {
  public watchListItems$ = new ReplaySubject<WatchListItem[]>();

  constructor() {
    this.loadFlops();
  }

  private loadFlops(){
    this.watchListItems$.next(watchListData);
  }
}
