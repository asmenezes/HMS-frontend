import { TestBed } from '@angular/core/testing';

import { DatepadderService } from './datepadder.service';

describe('DatepadderService', () => {
  let service: DatepadderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatepadderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
