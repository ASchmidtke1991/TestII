import { TestBed } from '@angular/core/testing';

import { LpicService } from './lpic.service';

describe('LpicService', () => {
  let service: LpicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LpicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
