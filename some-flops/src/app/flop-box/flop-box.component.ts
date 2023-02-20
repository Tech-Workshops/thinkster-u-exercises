import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FlopBoxService } from '../core/services/flop-box/flop-box.service';
import { Flop } from '../shared/models/flop.model';

@Component({
  selector: 'app-flop-box',
  templateUrl: './flop-box.component.html',
  styleUrls: ['./flop-box.component.scss']
})
export class FlopBoxComponent {
}
