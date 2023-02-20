import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlopBoxComponent } from './flop-box.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: FlopBoxComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlopBoxRoutingModule { }
