import { TestBed } from '@angular/core/testing';

import { PreviewFormService } from './preview-form.service';

describe('PreviewFormService', () => {
  let service: PreviewFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreviewFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
