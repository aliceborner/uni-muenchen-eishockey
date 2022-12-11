import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { NavigationFocusModule } from 'src/app/services/navigation-focus/navigation-focus';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { LandingModule } from 'src/app/sections/landing/landing.component';
import { ABOUT_ITEMS } from 'src/app/shared/about-items/about-items.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  get items() {
    return ABOUT_ITEMS;
  }

  get itemsKeys() {
    return Object.keys(ABOUT_ITEMS);
  }
}

@NgModule({
  exports: [AboutComponent],
  declarations: [AboutComponent],
  providers: [],
  imports: [
    MatButtonModule,
    NavigationFocusModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    CommonModule,
    LandingModule,
  ],
})
export class AboutModule {}
