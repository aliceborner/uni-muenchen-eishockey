import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TrainingModule } from './sections/training/training.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EisHockeyApp } from './eishockey-app';
import { AppRoutingModule } from './routing.module';

import { MatMenuModule } from '@angular/material/menu';
import { AboutModule } from './sections/about/about.component';
import { ContactModule } from './sections/contact/contact.component';
import { LandingModule } from './sections/landing/landing.component';
import { CookiePopupModule } from './shared/cookie-popup/cookie-popup.component';
import { FooterModule } from './shared/footer/footer.component';
import { NavBarModule } from './shared/navbar/navbar.component';

@NgModule({
  declarations: [EisHockeyApp],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    NavBarModule,
    LandingModule,
    AboutModule,
    TrainingModule,
    ContactModule,
    FooterModule,
    CookiePopupModule,
  ],
  providers: [],
  bootstrap: [EisHockeyApp],
})
export class AppModule {}
