import { TestBed } from '@angular/core/testing';

import { ForecastRepositoryService} from './forecast.repository.service';

describe('Forecast.RepositoryService', () => {
  let service: ForecastRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForecastRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
