import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { of, Observable } from 'rxjs';
import { Coffee } from './coffees.model';

@Injectable({ providedIn: 'root' })
export class coffeeService {
  constructor(private http: HttpClient) {}

  getCoffees(): Observable<Coffee[]> {
    return this.http
      .get<Coffee[]>(
        'https://random-data-api.com/api/coffee/random_coffee?size=50'
      )
  }
}


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/