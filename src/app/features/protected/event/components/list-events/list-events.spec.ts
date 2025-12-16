import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ListEvents} from './list-events';
import {of} from 'rxjs';
import {GetAllEvents} from '../../services/get-all-events';

describe('ListEvents', () => {
  let component: ListEvents;
  let fixture: ComponentFixture<ListEvents>;

  beforeEach(async () => {
    const mockService = {
      getAll: vi.fn().mockReturnValue(of([{title: 'Alice', episode_id: 25}]))
    };
    await TestBed.configureTestingModule({
      imports: [ListEvents],
      providers: [
        {provide: GetAllEvents, useValue: mockService}
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListEvents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
