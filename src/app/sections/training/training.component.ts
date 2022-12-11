import { LandingModule } from '../landing/landing.component';
import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { NavigationFocusModule } from 'src/app/services/navigation-focus/navigation-focus';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss'],
})
export class TrainingComponent {}

@NgModule({
  imports: [
    MatButtonModule,
    NavigationFocusModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    CommonModule,
    LandingModule,
  ],
  exports: [TrainingComponent],
  declarations: [TrainingComponent],
  providers: [],
})
export class TrainingModule {}
