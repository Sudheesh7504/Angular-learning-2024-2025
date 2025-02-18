import { TestBed } from '@angular/core/testing';

import { ResultGenerateService } from './result-generate.service';

describe('ResultGenerateService', () => {
  let service: ResultGenerateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultGenerateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
