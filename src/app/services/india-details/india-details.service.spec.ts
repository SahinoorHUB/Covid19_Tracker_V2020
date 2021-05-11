import { TestBed } from '@angular/core/testing';

import { IndiaDetailsService } from './india-details.service';

describe('IndiaDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IndiaDetailsService = TestBed.get(IndiaDetailsService);
    expect(service).toBeTruthy();
  });
});
