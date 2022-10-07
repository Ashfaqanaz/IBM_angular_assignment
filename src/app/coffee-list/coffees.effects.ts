import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType} from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { coffeeService } from "./coffees.service";
import { LoadCoffeesSuccess } from "../state/coffees.actions";

@Injectable()
export class CoffeeEffects {

    constructor(
        private actions$: Actions,
        private coffeesService: coffeeService
    ) {}

    // @Effect()
    loadCoffees$ = createEffect(() => {
        return this.actions$.pipe(
            ofType('[Coffee List/API] Retrieve Coffees Success'),
            mergeMap((action) => this.coffeesService.getCoffees().pipe(
                map((coffees) => { return LoadCoffeesSuccess({ coffees }); })
            ))
        )
            }
    );
}