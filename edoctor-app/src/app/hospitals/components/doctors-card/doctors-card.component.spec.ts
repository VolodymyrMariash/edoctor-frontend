import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsCardComponent } from './doctors-card.component';

describe('DoctorsCardComponent', () => {
  let component: DoctorsCardComponent;
  let fixture: ComponentFixture<DoctorsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
