import { TestBed } from '@angular/core/testing';

import { GetREgisteredUsersService } from './get-registered-users.service';

describe('GetREgisteredUsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetREgisteredUsersService = TestBed.get(GetREgisteredUsersService);
    expect(service).toBeTruthy();
  });
});
