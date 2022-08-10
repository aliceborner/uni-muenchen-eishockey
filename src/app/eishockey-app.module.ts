import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routing.module';
import { EisHockeyApp } from './eishockey-app';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatMenuModule } from '@angular/material/menu';
import { NavBarModule } from './shared/navbar/navbar.component';
import { HeaderModule } from './shared/header/header.component';
import { AboutModule } from './sections/about/about';
import { FooterModule } from './shared/footer/footer.component';
import { CookiePopupModule } from './shared/cookie-popup/cookie-popup.component';

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
    FooterModule,
    CookiePopupModule,
  ],
  providers: [],
  bootstrap: [EisHockeyApp],
})
export class AppModule {}
