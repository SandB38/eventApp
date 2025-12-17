import {TestBed} from '@angular/core/testing';

import {TableEvents} from './table-events';
import {TableEventsHost} from './table-events-host';
import {By} from '@angular/platform-browser';

describe('TableEvents', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableEvents, TableEventsHost]
    }).compileComponents();

  });

  it('should create with empty items array', async () => {
    const fixture = TestBed.createComponent(TableEventsHost);
    fixture.detectChanges()
    const component = fixture.componentInstance;
    await fixture.whenStable();
    expect(component).toBeTruthy();
  });

  it('should display items sorted by title', () => {
    const fixture = TestBed.createComponent(TableEventsHost);
    fixture.componentInstance.items = [
      {title: 'My tile', episode_id: 1},
      {title: 'Another tile', episode_id: 1}];
    fixture.detectChanges()

    const tableEventsInstance = fixture.debugElement
      .query(By.directive(TableEvents))
      .componentInstance;
    expect(tableEventsInstance.sortedItems()).toStrictEqual([
      {title: 'Another tile', episode_id: 1},
      {title: 'My tile', episode_id: 1}])
  });
});
