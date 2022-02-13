import { TestBed } from '@angular/core/testing';

import { MacroService } from './macro.service';

describe('MacroService', () => {
  let service: MacroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MacroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
