import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '@workshop/material';
import { FormsModule } from '@angular/forms';
import { StadiumsListComponent } from './stadiums-list.component';

describe('StadiumsListComponent', () => {
  let component: StadiumsListComponent;
  let fixture: ComponentFixture<StadiumsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StadiumsListComponent ],
      imports: [
        MaterialModule,
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StadiumsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
