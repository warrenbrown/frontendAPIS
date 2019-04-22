import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Stadium } from '@workshop/core-data';

@Component({
  selector: 'app-stadiums-list',
  templateUrl: './stadiums-list.component.html',
  styleUrls: ['./stadiums-list.component.css']
})
export class StadiumsListComponent implements OnInit {
  @Input() stadiums: Stadium[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
