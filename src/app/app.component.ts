import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCoffees } from './state/coffees.selectors';
import { coffeeService } from './coffee-list/coffees.service';
import { Observable } from 'rxjs';
import { Coffee } from './coffee-list/coffees.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'IBM_angular_project';

  coffees$ = this.store.select(selectCoffees);
  exp: Observable<Coffee>;
  constructor(
    private coffeesService: coffeeService,
    private store: Store,
  ) {
  }

  ngOnInit() {
    this.store.dispatch({ type: '[Coffee List/API] Retrieve Coffees Success' });
  }
}


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/