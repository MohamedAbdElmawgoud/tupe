import { TestBed } from '@angular/core/testing';

import { CampingsService } from './campings.service';

describe('CampingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CampingsService = TestBed.get(CampingsService);
    expect(service).toBeTruthy();
  });
});
