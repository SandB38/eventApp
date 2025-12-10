import {Component, input, output} from '@angular/core';
import {MyEvent} from '../../models/Event';

@Component({
  selector: 'app-table-events',
  imports: [],
  templateUrl: './table-events.html',
  styleUrl: './table-events.css',
})
export class TableEvents {
  items = input.required<MyEvent[]>();
  toEdit = output<MyEvent>();

  clickToEdit(item: MyEvent): void {
    this.toEdit.emit(item);
  }
}
