import { TestBed } from '@angular/core/testing';

import { WorldDetailsService } from './world-details.service';

describe('WorldDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorldDetailsService = TestBed.get(WorldDetailsService);
    expect(service).toBeTruthy();
  });
});
