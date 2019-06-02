import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileVisitsComponent } from './profile-visits.component';

describe('ProfileVisitsComponent', () => {
  let component: ProfileVisitsComponent;
  let fixture: ComponentFixture<ProfileVisitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileVisitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileVisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
