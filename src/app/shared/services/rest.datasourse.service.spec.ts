import { TestBed } from '@angular/core/testing';

import { RestDataSourceService } from './rest.datasourse.service';

describe('RestDataSourceService', () => {
  let service: RestDataSourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestDataSourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
