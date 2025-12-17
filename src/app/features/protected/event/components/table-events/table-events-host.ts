import {Component} from '@angular/core';
import {MyEvent} from '../../models/Event';
import {TableEvents} from './table-events';

@Component({
  standalone: true,
  imports: [TableEvents],
  template: `
    <app-table-events [items]="items"/>`
})
export class TableEventsHost {
  items: MyEvent[] = [];
}
