import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlopVotingComponent } from './flop-voting.component';

const routes: Routes = [
  {
    path: '',
    component: FlopVotingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlopVotingRoutingModule { }
