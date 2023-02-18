import { TestBed } from '@angular/core/testing';

import { FlopService } from './flop.service';

describe('FlopService', () => {
  let service: FlopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
