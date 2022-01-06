import { TestBed } from '@angular/core/testing';

import { CandidateProfileDetailsService } from './candidate-profile-details.service';

describe('CandidateProfileDetailsService', () => {
  let service: CandidateProfileDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidateProfileDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
