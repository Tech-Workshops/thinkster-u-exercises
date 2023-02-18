import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Flop } from '../../../shared/models/flop.model';

@Component({
  selector: 'app-flop-choice',
  templateUrl: './flop-choice.component.html',
  styleUrls: ['./flop-choice.component.scss']
})
export class FlopChoiceComponent {
  @Input() flop: Flop | undefined;
  @Output() chosen: EventEmitter<boolean> = new EventEmitter<boolean>();

  public choose() {
    this.chosen.emit();
  }
}
