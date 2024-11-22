import { TestBed } from '@angular/core/testing';

import { FestivosHttpService } from './festivos-http.service';

describe('FestivosHttpService', () => {
  let service: FestivosHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FestivosHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
