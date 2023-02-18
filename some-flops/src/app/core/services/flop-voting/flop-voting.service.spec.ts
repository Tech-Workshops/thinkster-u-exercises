import { TestBed } from '@angular/core/testing';

import { FlopVotingService } from './flop-voting.service';

describe('FlopVotingService', () => {
  let service: FlopVotingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlopVotingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
