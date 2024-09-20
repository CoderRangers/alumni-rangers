import { TestBed } from '@angular/core/testing';

import { FeedbackFormModalsService } from './feedback-form-modals.service';

describe('FeedbackFormModalsService', () => {
  let service: FeedbackFormModalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedbackFormModalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
