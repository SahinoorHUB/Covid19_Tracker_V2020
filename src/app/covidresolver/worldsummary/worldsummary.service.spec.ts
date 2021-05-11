import { TestBed } from '@angular/core/testing';

import { WorldsummaryService } from './worldsummary.service';

describe('WorldsummaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorldsummaryService = TestBed.get(WorldsummaryService);
    expect(service).toBeTruthy();
  });
});
