import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlbCardsComponent } from './mlb-cards.component';

describe('MlbCardsComponent', () => {
  let component: MlbCardsComponent;
  let fixture: ComponentFixture<MlbCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlbCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlbCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
