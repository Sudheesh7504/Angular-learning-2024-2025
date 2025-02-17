import { TestBed } from '@angular/core/testing';

import { BehaviorSubjectServiceService } from './behavior-subject-service.service';

describe('BehaviorSubjectServiceService', () => {
  let service: BehaviorSubjectServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BehaviorSubjectServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
