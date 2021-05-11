import { TestBed } from '@angular/core/testing';

import { WorldTotalDataService } from './world-total-data.service';

describe('WorldTotalDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorldTotalDataService = TestBed.get(WorldTotalDataService);
    expect(service).toBeTruthy();
  });
});
