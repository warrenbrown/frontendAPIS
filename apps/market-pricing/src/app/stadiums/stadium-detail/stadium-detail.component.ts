import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Stadium } from '@workshop/core-data';

@Component({
  selector: 'app-stadium-detail',
  templateUrl: './stadium-detail.component.html',
  styleUrls: ['./stadium-detail.component.css']
})
export class StadiumDetailComponent implements OnInit {
  currentStadium: Stadium;
  originalName;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input()  set stadium(value) {
    if(value) this.originalName = value.name
    this.currentStadium = Object.assign({}, value)
  };
  constructor() { }

  ngOnInit() {
  }

}
