import { createReducer, on } from '@ngrx/store';

import { retrievedCoffeeList } from './coffees.actions';
import { LoadCoffeesSuccess } from './coffees.actions';
import { AppState } from './app.state';

export const initialState: AppState = {
  coffeest: undefined
};

export const coffeesReducer = createReducer(
  initialState,
  on(retrievedCoffeeList, (state) => ({...state})),
  on(LoadCoffeesSuccess, (state, result) => ({coffeest: result.coffees}))
);


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/