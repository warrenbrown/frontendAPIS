import { LoginComponent } from "@workshop/ui-login";
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule' },
  { path: 'stadiums', loadChildren: './stadiums/stadiums.module#StadiumsModule' },
  { path: 'cards', loadChildren: './mlb-cards/mlb-cards.module#MlbCardsModule'},
  { path: 'players', loadChildren: './players/players.module#PlayersModule'},
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
