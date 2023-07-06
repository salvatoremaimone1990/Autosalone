import { TestBed } from '@angular/core/testing';

import { QuthenticationService } from './quthentication.service';

describe('QuthenticationService', () => {
  let service: QuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
