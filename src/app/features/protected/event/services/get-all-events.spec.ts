import {TestBed} from '@angular/core/testing';

import {GetAllEvents} from './get-all-events';
import {HttpTestingController, provideHttpClientTesting} from '@angular/common/http/testing';
import {provideHttpClient} from '@angular/common/http';
import {expect} from 'vitest';

describe('GetAllEvents', () => {
  let service: GetAllEvents;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()],
    });
    service = TestBed.inject(GetAllEvents);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch events', () => {
    const mockEvents = [{episode_id: 1, title: 'Alice'}];

    service.getAll().subscribe(events => {
      expect(events).toEqual(mockEvents);
    });

    const req = httpMock.expectOne('https://swapi.dev/api/films');
    expect(req.request.method).toBe('GET');

    req.flush(mockEvents);
  });
});
