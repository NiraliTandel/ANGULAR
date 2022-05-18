import { TestBed } from '@angular/core/testing';

import { DoctorEditProfilePresenterService } from './doctor-edit-profile-presenter.service';

describe('DoctorEditProfilePresenterService', () => {
  let service: DoctorEditProfilePresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorEditProfilePresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
