import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalsCardComponent } from './hospitals-card.component';

describe('HospitalsCardComponent', () => {
  let component: HospitalsCardComponent;
  let fixture: ComponentFixture<HospitalsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
