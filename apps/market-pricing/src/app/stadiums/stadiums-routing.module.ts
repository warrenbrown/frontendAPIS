import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StadiumsComponent } from './stadiums.component';

const routes: Routes = [
  { path: '', component: StadiumsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StadiumsRoutingModule { }
