import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StadiumsRoutingModule } from './stadiums-routing.module';
import { StadiumsComponent } from './stadiums.component';
import { MaterialModule } from '@workshop/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [StadiumsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    StadiumsRoutingModule,
    FormsModule
  ],
  exports: [
    StadiumsComponent
  ]
})
export class StadiumsModule { }
