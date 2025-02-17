import { TestBed } from '@angular/core/testing';

import { BehaviorSubjectPasswordCheckerService } from './behavior-subject-password-checker.service';

describe('BehaviorSubjectPasswordCheckerService', () => {
  let service: BehaviorSubjectPasswordCheckerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BehaviorSubjectPasswordCheckerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
