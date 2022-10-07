import { createSelector } from '@ngrx/store';
import { Coffee } from '../coffee-list/coffees.model';
import { AppState } from "./app.state";

export const selectCoffees = createSelector(
    (state: AppState) => state.coffee_state,
    (coffees: Array<Coffee>) => coffees
  );

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/