import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StadiumsRoutingModule } from './stadiums-routing.module';
import { StadiumsComponent } from './stadiums.component';
import { MaterialModule } from '@workshop/material';

@NgModule({
  declarations: [StadiumsComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    StadiumsComponent
  ]
})
export class StadiumsModule { }
