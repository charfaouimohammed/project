import { TestBed } from '@angular/core/testing';

import { CongeeService } from './congee.service';

describe('CongeeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CongeeService = TestBed.get(CongeeService);
    expect(service).toBeTruthy();
  });
});
