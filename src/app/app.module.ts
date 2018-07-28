import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 import {FormsModule} from '@angular/forms';
 import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ComponentTest1Component } from './Components/component-test1/component-test1.component';
import { WorkWithHttpComponent } from './Components/work-with-http/work-with-http.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './Components/home/home.component';
import { NoHomeComponent } from './Components/no-home/no-home.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentTest1Component,
    WorkWithHttpComponent,
    HomeComponent,
    NoHomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
