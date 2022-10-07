import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { coffeesReducer } from './state/coffees.reducer';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';

import { EffectsModule } from '@ngrx/effects';
import { CoffeeEffects } from './coffee-list/coffees.effects';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
@NgModule({
  
  imports: [
    
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    BrowserModule,
    StoreModule.forRoot({ coffees: coffeesReducer }),
    HttpClientModule,
    EffectsModule.forRoot([CoffeeEffects]),
    EffectsModule.forFeature([CoffeeEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  declarations: [AppComponent, CoffeeListComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/