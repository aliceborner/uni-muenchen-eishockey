import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { LandingModule } from 'src/app/sections/landing/landing.component';
import { NavigationFocusModule } from 'src/app/services/navigation-focus/navigation-focus.component';
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
    NavigationFocusModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatButtonModule,
    CommonModule,
    LandingModule,
  ],
})
export class AboutModule {}
