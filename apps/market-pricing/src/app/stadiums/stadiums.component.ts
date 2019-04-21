import { Component, OnInit } from '@angular/core';
import { StadiumsService, Stadium } from '@workshop/core-data';

@Component({
  selector: 'app-stadiums',
  templateUrl: './stadiums.component.html',
  styleUrls: ['./stadiums.component.css']
})
export class StadiumsComponent implements OnInit {
  stadiums: Stadium[];
  selectedStadium: Stadium;
  constructor(private stadiumService: StadiumsService) { }

  selectStadium(stadium) {
    this.selectedStadium = stadium;
    console.log('SELECTED STADIUM', stadium)
  }

  getStadiums() {
    this.stadiums = this.stadiumService.all();
  }

  cancel() {
    this.selectStadium(null);
  }

  ngOnInit() {
    this.getStadiums();
  }

}
