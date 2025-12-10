import { TestBed } from '@angular/core/testing';

import { GetAllEvents } from './get-all-events';

describe('GetAllEvents', () => {
  let service: GetAllEvents;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllEvents);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
