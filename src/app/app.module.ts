import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFontAwesomeModule } from 'angular-font-awesome';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { HajjComponent } from './hajj/hajj.component';
import { UmrahComponent } from './umrah/umrah.component';
import { FuneralComponent } from './funeral/funeral.component';
import { NavComponent } from './nav/nav.component';
import { SliderComponent } from './slider/slider.component';
import { SliderTestComponent } from './slider-test/slider-test.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    HajjComponent,
    UmrahComponent,
    FuneralComponent,
    NavComponent,
    SliderComponent,
    SliderTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDGLt_g9gD4VA4-GTCEs29dHOEMcxBTGug'
    }),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
