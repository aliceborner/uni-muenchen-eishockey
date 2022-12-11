import { SocialMediaModule } from './../../shared/social-media/social-media.component';
import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { NavigationFocusModule } from 'src/app/services/navigation-focus/navigation-focus';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { SocialMediaComponent } from '../../shared/social-media/social-media.component';

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
    MatCardModule,
    CommonModule,
    SocialMediaModule,
  ],
})
export class LandingModule {}
