import { TestBed } from '@angular/core/testing';

import { DeployService } from './deploy.service';

describe('DeployService', () => {
  let service: DeployService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeployService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
