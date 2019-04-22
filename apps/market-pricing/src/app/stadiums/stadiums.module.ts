import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StadiumsRoutingModule } from './stadiums-routing.module';
import { StadiumsComponent } from './stadiums.component';
import { MaterialModule } from '@workshop/material';
import { FormsModule } from '@angular/forms';
import { StadiumsListComponent } from './stadiums-list/stadiums-list.component';
import { StadiumDetailComponent } from './stadium-detail/stadium-detail.component';

@NgModule({
  declarations: [StadiumsComponent, StadiumsListComponent, StadiumDetailComponent],
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
