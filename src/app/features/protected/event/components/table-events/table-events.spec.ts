import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TableEvents} from './table-events';
import {ComponentRef, inputBinding, signal} from '@angular/core';

describe('TableEvents', () => {
  let component: TableEvents;
  let componentRef: ComponentRef<TableEvents>;
  let fixture: ComponentFixture<TableEvents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableEvents]
    })
      .compileComponents();
    const items = signal([]);
    fixture = TestBed.createComponent(TableEvents,
      {
        bindings: [
          inputBinding('items', items)
        ]
      });
    component = fixture.componentInstance;
    componentRef = fixture.componentRef
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display items sorted by title', () => {
    // component.items = [{title: 'My tile', episode_id: 1}];
    vi.spyOn(component, 'items').mockReturnValue([{title: 'My tile', episode_id: 1}, {
      title: 'Another tile',
      episode_id: 1
    }])
    fixture.detectChanges()
    console.log(component.sortedItems.length)
    expect(component).toBeTruthy();
  });
});
