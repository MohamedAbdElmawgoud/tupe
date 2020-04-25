import { TestBed } from '@angular/core/testing';

import { ValdaiteService } from './valdaite.service';

describe('ValdaiteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValdaiteService = TestBed.get(ValdaiteService);
    expect(service).toBeTruthy();
  });
});
