import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Stadium } from '@workshop/core-data';
import { StadiumsComponent } from './stadiums.component';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MaterialModule } from '@workshop/material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StadiumDetailComponent } from './stadium-detail/stadium-detail.component';
import { StadiumsListComponent } from './stadiums-list/stadiums-list.component';

describe('StadiumsComponent', () => {
  // Create my local test members
  let component: StadiumsComponent;
  let fixture: ComponentFixture<StadiumsComponent>;
  let de: DebugElement;
  const emptyStadium: Stadium = {
      id: null,
      name: "",
      rarity: "",
      team: ""
    }

  // Instantiate test bed
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [
        StadiumsComponent],
      imports: [
        MaterialModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA ]
    }).createComponent(StadiumsComponent);

    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it ('have a primary color of `red`', () => {
    expect(component.primaryColor).toBe('red')
  });

  it ('should select a stadium', () => {
    component.selectStadium(emptyStadium)
    expect(component.selectedStadium).toBe(emptyStadium)
  });

  it ('should display primary color', () => {
    const h1 = de.query(By.css('h1'));
    expect(h1.nativeElement.text).toBe('green');
  })
});
