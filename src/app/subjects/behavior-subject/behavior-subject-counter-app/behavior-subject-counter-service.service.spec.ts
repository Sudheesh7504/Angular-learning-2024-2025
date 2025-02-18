import { TestBed } from '@angular/core/testing';

import { BehaviorSubjectCounterServiceService } from './behavior-subject-counter-service.service';

describe('BehaviorSubjectCounterServiceService', () => {
  let service: BehaviorSubjectCounterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BehaviorSubjectCounterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
