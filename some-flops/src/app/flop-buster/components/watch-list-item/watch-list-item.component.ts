import { Component, EventEmitter, HostBinding, Input, Output, ViewEncapsulation } from '@angular/core';
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

  @Output() moveItem: EventEmitter<number> = new EventEmitter<number>();

  public faChevronUp = faChevronUp;
  public faChevronDown = faChevronDown;

  public moveUp(): void {
    this.moveItem.emit(-1);
  }

  public moveDown(): void {
    this.moveItem.emit(1);
  }
}
