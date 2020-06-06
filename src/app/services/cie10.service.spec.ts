import { TestBed } from '@angular/core/testing';

import { Cie10Service } from './cie10.service';

describe('Cie10Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Cie10Service = TestBed.get(Cie10Service);
    expect(service).toBeTruthy();
  });
});
