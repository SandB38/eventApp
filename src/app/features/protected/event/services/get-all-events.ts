import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EventsResponse, MyEvent} from '../models/Event';
import {map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetAllEvents {
  private readonly httpClient: HttpClient = inject(HttpClient);

  getAll(): Observable<MyEvent[]> {
    return this.httpClient
      .get<EventsResponse>('https://swapi.dev/api/films')
      .pipe(map((response: EventsResponse) => {
        if (response === null || response.results === null) {
          return []
        } else {
          return response.results;
        }
      }))
  }
}
