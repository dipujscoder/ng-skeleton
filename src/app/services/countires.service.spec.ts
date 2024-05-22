import { TestBed } from '@angular/core/testing';

import { CountiresService } from './countires.service';

describe('CountiresService', () => {
  let service: CountiresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountiresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
