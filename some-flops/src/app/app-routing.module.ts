import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    pathMatch: 'full',
    redirectTo: "flop-box"
  },
  {
    path: 'flop-voting',
    loadChildren: () => import('./flop-voting/flop-voting.module').then(m => m.FlopVotingModule)
  },
  {
    path: 'flop-chooser',
    loadChildren: () => import('./flop-chooser/flop-chooser.module').then(m =>m.FlopChooserModule)
  },
  {
    path: 'flop-buster',
    loadChildren: () => import('./flop-buster/flop-buster.module').then(m =>m.FlopBusterModule)
  },
  {
    path: 'flop-box',
    loadChildren: () => import('./flop-box/flop-box.module').then(m =>m.FlopBoxModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
