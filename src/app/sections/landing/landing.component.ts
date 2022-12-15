import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { NavigationFocusModule } from 'src/app/services/navigation-focus/navigation-focus.component';
import { SocialMediaModule } from './../../shared/social-media/social-media.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {}

@NgModule({
  exports: [LandingComponent],
  declarations: [LandingComponent],
  providers: [],
  imports: [
    MatButtonModule,
    NavigationFocusModule,
    MatIconModule,
    MatDividerModule,
    CommonModule,
    SocialMediaModule,
  ],
})
export class LandingModule {}
