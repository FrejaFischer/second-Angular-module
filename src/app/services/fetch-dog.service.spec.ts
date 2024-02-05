import { TestBed } from '@angular/core/testing';

import { FetchDogService } from './fetch-dog.service';

describe('FetchDogService', () => {
  let service: FetchDogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchDogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
