import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';
import { WatchListItem } from '../../../shared/models/watch-list-item.model';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-watch-list-item',
  templateUrl: './watch-list-item.component.html',
  styleUrls: ['./watch-list-item.component.scss']
})
export class WatchListItemComponent {
  @Input()
  public isChevronUpHidden: boolean | undefined;

  @Input()
  public isChevronDownHidden: boolean | undefined;

  @Input()
  watchListItem: WatchListItem | undefined;

  public faChevronUp = faChevronUp;
  public faChevronDown = faChevronDown;
}
