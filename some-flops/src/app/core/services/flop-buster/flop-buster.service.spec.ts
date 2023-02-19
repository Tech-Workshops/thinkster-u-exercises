import { TestBed } from '@angular/core/testing';

import { FlopBusterService } from './flop-buster.service';

describe('FlopBusterService', () => {
  let service: FlopBusterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlopBusterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
