import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlopChooserRoutingModule } from './flop-chooser-routing.module';
import { FlopChooserComponent } from './flop-chooser.component';
import { FlopChoiceComponent } from './components/flop-choice/flop-choice.component';


@NgModule({
  declarations: [
    FlopChooserComponent,
    FlopChoiceComponent
  ],
  imports: [
    CommonModule,
    FlopChooserRoutingModule
  ]
})
export class FlopChooserModule { }
