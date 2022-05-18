import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorEditProfileContainerComponent } from './doctor-edit-profile-container.component';

describe('DoctorEditProfileContainerComponent', () => {
  let component: DoctorEditProfileContainerComponent;
  let fixture: ComponentFixture<DoctorEditProfileContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorEditProfileContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorEditProfileContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
