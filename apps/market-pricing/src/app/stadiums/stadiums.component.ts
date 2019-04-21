import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stadiums',
  templateUrl: './stadiums.component.html',
  styleUrls: ['./stadiums.component.css']
})
export class StadiumsComponent implements OnInit {
  selectedStadium;
  stadiums = [
    {
      "name": "Highland Park",
      "rarity": "Bronze",
      "team": "Free Agents",
    },
    {
      "name": "Hubert H. Humphrey Metrodome",
      "rarity": "Diamond",
      "team": "Free Agents",
    },
    {
      "name": "Industry Center Stadium",
      "rarity": "Bronze",
      "team": "Free Agents",
    }
  ]
  constructor() { }

  selectStadium(stadium) {
    this.selectedStadium = stadium;
    console.log('SELECTED STADIUM', stadium)
  }

  cancel() {
    this.selectStadium(null);
  }

  ngOnInit() {
  }

}
