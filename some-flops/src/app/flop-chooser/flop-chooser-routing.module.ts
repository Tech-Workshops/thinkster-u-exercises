import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlopChooserComponent } from './flop-chooser.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: FlopChooserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlopChooserRoutingModule { }
