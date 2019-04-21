import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsService } from './projects/projects.service';
import { StadiumsService } from './stadiums/stadiums.service';

@NgModule({
  imports: [CommonModule],
  providers: [ ProjectsService, StadiumsService ]
})
export class CoreDataModule {}
