import { TestBed } from '@angular/core/testing';

import { Storaage } from './storage';

describe('Storaage', () => {
  let service: Storaage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Storaage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
