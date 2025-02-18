import { TestBed } from '@angular/core/testing';

import { StockReplaySubjectService } from './stock-replay-subject.service';

describe('StockReplaySubjectService', () => {
  let service: StockReplaySubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockReplaySubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
