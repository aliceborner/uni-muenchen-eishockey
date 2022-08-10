import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NavigationFocusModule } from 'src/app/services/navigation-focus/navigation-focus';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { HeaderModule } from 'src/app/shared/header/header.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrls: ['./about.scss'],
})
export class About {}

@NgModule({
  imports: [
    MatButtonModule,
    NavigationFocusModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    CommonModule,
    HeaderModule,
  ],
  exports: [About],
  declarations: [About],
  providers: [],
})
export class AboutModule {}
