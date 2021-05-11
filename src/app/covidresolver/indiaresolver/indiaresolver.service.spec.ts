import { TestBed } from '@angular/core/testing';

import { IndiaresolverService } from './indiaresolver.service';

describe('IndiaresolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IndiaresolverService = TestBed.get(IndiaresolverService);
    expect(service).toBeTruthy();
  });
});
