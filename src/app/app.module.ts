import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AddTravellerComponent } from './components/add-traveller/add-traveller.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlightsComponent } from './components/flights/flights.component';


@NgModule({
  declarations: [
    AppComponent,
    AddTravellerComponent,
    FlightsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
