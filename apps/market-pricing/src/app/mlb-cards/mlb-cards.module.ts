import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MlbCardsRoutingModule } from './mlb-cards-routing.module';
import { MlbCardsComponent } from './mlb-cards.component';

@NgModule({
  declarations: [MlbCardsComponent],
  imports: [
    CommonModule,
    MlbCardsRoutingModule
  ],
  exports: [
    MlbCardsComponent
  ]
})
export class MlbCardsModule { }
