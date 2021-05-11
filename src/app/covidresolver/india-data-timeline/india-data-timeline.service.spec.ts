import { TestBed } from '@angular/core/testing';

import { IndiaDataTimelineService } from './india-data-timeline.service';

describe('IndiaDataTimelineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IndiaDataTimelineService = TestBed.get(IndiaDataTimelineService);
    expect(service).toBeTruthy();
  });
});
