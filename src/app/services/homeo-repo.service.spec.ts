import { TestBed, inject } from '@angular/core/testing';

import { HomeoRepoService } from './homeo-repo.service';

describe('HomeoRepoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeoRepoService]
    });
  });

  it('should be created', inject([HomeoRepoService], (service: HomeoRepoService) => {
    expect(service).toBeTruthy();
  }));
});
