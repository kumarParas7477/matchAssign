import { TestBed } from '@angular/core/testing';

import { GetmatchdataService } from './getmatchdata.service';

describe('GetmatchdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetmatchdataService = TestBed.get(GetmatchdataService);
    expect(service).toBeTruthy();
  });
});
