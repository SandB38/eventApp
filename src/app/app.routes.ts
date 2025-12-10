import {Routes} from '@angular/router';
import {ListEvents} from './features/protected/event/components/list-events/list-events';
import {Home} from './pages/home/home';
import {Event} from './features/protected/event/components/event/event';

export const routes: Routes = [{
  path: '',
  component: Home
},
  {
    path: 'home',
    component: Home
  }, {
    path: 'events',
    children: [{
      path: '',
      component: ListEvents
    }, {
      path: ':id',
      component: Event
    }
    ]
  }];
