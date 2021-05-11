import { TestBed } from '@angular/core/testing';

import { IndiaTimelineService } from './india-timeline.service';

describe('IndiaTimelineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IndiaTimelineService = TestBed.get(IndiaTimelineService);
    expect(service).toBeTruthy();
  });
});
