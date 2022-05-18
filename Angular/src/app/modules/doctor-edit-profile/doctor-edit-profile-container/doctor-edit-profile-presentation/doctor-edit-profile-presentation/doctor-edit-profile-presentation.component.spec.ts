import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorEditProfilePresentationComponent } from './doctor-edit-profile-presentation.component';

describe('DoctorEditProfilePresentationComponent', () => {
  let component: DoctorEditProfilePresentationComponent;
  let fixture: ComponentFixture<DoctorEditProfilePresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorEditProfilePresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorEditProfilePresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
