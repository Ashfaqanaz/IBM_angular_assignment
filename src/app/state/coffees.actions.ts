import { createAction, props } from '@ngrx/store';
import { Coffee } from '../coffee-list/coffees.model';

export const retrievedCoffeeList = createAction(
  '[Coffee List/API] Retrieve Coffees Success',
  props<{ coffees: Coffee[] }>()
);

export const LoadCoffeesSuccess = createAction(
  '[Coffees] Load Coffees Success',
  props<{ coffees: Coffee[] }>()
);


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/