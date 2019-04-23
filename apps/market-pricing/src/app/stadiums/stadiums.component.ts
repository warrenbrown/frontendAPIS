import { Component, OnInit } from '@angular/core';
import { StadiumsService, Stadium } from '@workshop/core-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-stadiums',
  templateUrl: './stadiums.component.html',
  styleUrls: ['./stadiums.component.css']
})
export class StadiumsComponent implements OnInit {
  stadiums$;
  selectedStadium: Stadium;


  constructor(private stadiumService: StadiumsService) { }

  selectStadium(stadium) {
    this.selectedStadium = stadium;
  }

  resetStadium() {
    const emptyStadium: Stadium = {
      id: null,
      name: "",
      rarity: "",
      team: ""
    }
    this.selectStadium(emptyStadium)
  }

  getStadiums() {
    this.stadiums$ = this.stadiumService.all();
  }

  saveStadium(stadium) {
    if(!stadium.id) {
      this.createStadium(stadium)
    } else {
      this.updateStadium(stadium);
    }
  }


  createStadium(stadium) {
    this.stadiumService.create(stadium)
      .subscribe(result => {
      this.getStadiums();
      this.resetStadium();
    });
  }

  updateStadium(stadium) {
    this.stadiumService.update(stadium)
      .subscribe(result => {
        this.getStadiums();
        this.resetStadium();
      });
  }

  deleteStadium(stadium) {
    console.log('DELETE STADIUM', stadium);
    // this.stadiumService.delete(stadium.id)
    //   .subscribe(result => this.getStadiums());
  }

  cancel() {
    this.resetStadium();
  }

  ngOnInit() {
    this.getStadiums();
    this.resetStadium()
  }

}
