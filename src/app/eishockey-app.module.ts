import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routing.module';
import { EisHockeyApp } from './eishockey-app';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatMenuModule } from '@angular/material/menu';
import { NavBarModule } from './shared/navbar/navbar';
import { HeaderModule } from './sections/header/header';
import { AboutModule } from './sections/about/about';

@NgModule({
  declarations: [EisHockeyApp],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    NavBarModule,
    HeaderModule,
    AboutModule,
  ],
  providers: [],
  bootstrap: [EisHockeyApp],
})
export class AppModule {}
