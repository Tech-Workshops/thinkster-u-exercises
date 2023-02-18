import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    pathMatch: 'full',
    redirectTo: "flop-voting"
  },
  {
    path: "flop-voting",
    loadChildren: () => import('./flop-voting/flop-voting.module').then(m => m.FlopVotingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
