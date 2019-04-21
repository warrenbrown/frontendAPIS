import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MlbCardsComponent } from './mlb-cards.component';

const routes: Routes = [
  {path: '', component: MlbCardsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MlbCardsRoutingModule { }
