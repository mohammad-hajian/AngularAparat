import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { ComponentTest1Component } from './component-test1/component-test1.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentTest1Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
