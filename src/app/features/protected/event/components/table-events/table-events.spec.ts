import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableEvents } from './table-events';

describe('TableEvents', () => {
  let component: TableEvents;
  let fixture: ComponentFixture<TableEvents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableEvents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableEvents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
