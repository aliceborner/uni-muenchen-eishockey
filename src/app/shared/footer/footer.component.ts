import { Component, NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { ContactModule } from '../contact/contact.component';
import { SocialMediaModule } from '../social-media/social-media.component';
import { SponsorsModule } from './../sponsors/sponsors.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {}

@NgModule({
  exports: [FooterComponent],
  declarations: [FooterComponent],
  providers: [],
  imports: [SocialMediaModule, SponsorsModule, ContactModule, MatDividerModule],
})
export class FooterModule {}
