import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TableEvents} from './table-events';
import {inputBinding, signal} from '@angular/core';

describe('TableEvents', () => {
  let component: TableEvents;
  let fixture: ComponentFixture<TableEvents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableEvents]
    })
      .compileComponents();
    const items = signal([{title: 'My tile', episode_id: 1}]);
    fixture = TestBed.createComponent(TableEvents,
      {
        bindings: [
          inputBinding('items', items)
        ]
      });
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
