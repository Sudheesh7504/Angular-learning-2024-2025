import { TestBed } from '@angular/core/testing';

import { HttpModuleServiceService } from './http-module-service.service';

describe('HttpModuleServiceService', () => {
  let service: HttpModuleServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpModuleServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
