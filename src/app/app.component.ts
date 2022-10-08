import { Component, Inject, Injectable, Injector, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectCoffees } from './state/coffees.selectors';
import { coffeeService } from './coffee-list/coffees.service';
import { Observable } from 'rxjs';
import { Coffee } from './coffee-list/coffees.model';
import { __values } from 'tslib';
import { state } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'IBM_angular_project';

  constructor(
    private coffeesService: coffeeService,
    private store: Store,
  ) {}

  coffeeList = undefined;
  coffeeSubscription = this.store.subscribe(
    (state) => {
      this.coffeeList=state;
    }
  )

  ngOnInit() {
    this.store.dispatch({ type: '[Coffee List/API] Retrieve Coffees Success' });
  }
}


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/