import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '@workshop/material';
import { Stadium } from '@workshop/core-data';

import { StadiumDetailComponent } from './stadium-detail.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('StadiumDetailComponent', () => {
  let component: StadiumDetailComponent;
  let fixture: ComponentFixture<StadiumDetailComponent>;
  const emptyStadium: Stadium = {
    id: null,
      name: "",
      rarity: "",
      team: ""
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StadiumDetailComponent ],
      imports: [
        MaterialModule,
        FormsModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StadiumDetailComponent);
    component = fixture.componentInstance;
    component.currentStadium = emptyStadium;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
