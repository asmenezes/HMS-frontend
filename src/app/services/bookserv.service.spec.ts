import { TestBed } from '@angular/core/testing';

import { BookservService } from './bookserv.service';

describe('BookservService', () => {
  let service: BookservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
