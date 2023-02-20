import { TestBed } from '@angular/core/testing';

import { FlopBoxService } from './flop-box.service';

describe('FlopBoxService', () => {
  let service: FlopBoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlopBoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
