import {Component, inject, signal} from '@angular/core';
import {GetAllEvents} from '../../services/get-all-events';
import {Observable} from 'rxjs';
import {MyEvent} from '../../models/Event';
import {AsyncPipe} from '@angular/common';
import {TableEvents} from '../table-events/table-events';

@Component({
  selector: 'app-list-events',
  imports: [AsyncPipe, TableEvents],
  templateUrl: './list-events.html',
  styleUrl: './list-events.css',
})
export class ListEvents {
  title = signal('My events')
  private readonly service: GetAllEvents = inject(GetAllEvents)
  //  /!\ aucun appel ici : on doit faire un subscribe (puis un unsubscribe)
  // avec le AsyncPipe (voir dans le template html)
  events$: Observable<MyEvent[]> = this.service.getAll();

  changeTitle() {
    this.title.set('My new title')
  }

  editMyEvent(item: MyEvent) {
    console.log(item);
  }
}
