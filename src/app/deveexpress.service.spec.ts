import { TestBed } from '@angular/core/testing';

import { DeveexpressService } from './deveexpress.service';

describe('DeveexpressService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeveexpressService = TestBed.get(DeveexpressService);
    expect(service).toBeTruthy();
  });
});
