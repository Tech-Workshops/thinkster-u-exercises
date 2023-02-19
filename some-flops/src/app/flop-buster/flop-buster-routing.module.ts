import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlopBusterComponent } from './flop-buster.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: FlopBusterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlopBusterRoutingModule { }
