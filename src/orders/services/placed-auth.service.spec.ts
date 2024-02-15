import { TestBed } from '@angular/core/testing';

import { PlacedAuthService } from './placed-auth.service';

describe('PlacedAuthService', () => {
  let service: PlacedAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlacedAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
