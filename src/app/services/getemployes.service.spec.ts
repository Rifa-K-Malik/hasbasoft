import { TestBed } from '@angular/core/testing';

import { GetemployesService } from './getemployes.service';

describe('GetemployesService', () => {
  let service: GetemployesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetemployesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
