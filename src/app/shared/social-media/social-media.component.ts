import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss'],
})
export class SocialMediaComponent {}

@NgModule({
  imports: [CommonModule, HttpClientModule, RouterModule],
  exports: [SocialMediaComponent],
  declarations: [SocialMediaComponent],
})
export class SocialMediaModule {}
