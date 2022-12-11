import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, NgModule, OnDestroy } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { NavigationFocusService } from '../../services/navigation-focus/navigation-focus.service';
import { SECTIONS } from '../menu-items/menu-items.component';

const SECTIONS_KEYS = Object.keys(SECTIONS);

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavBarComponent implements OnDestroy {
  private subscriptions = new Subscription();
  isNextVersion = location.hostname.startsWith('next.material.angular.io');
  skipLinkHref: string | null | undefined;
  skipLinkHidden = true;

  constructor(private navigationFocusService: NavigationFocusService) {
    setTimeout(
      () => (this.skipLinkHref = this.navigationFocusService.getSkipLinkHref()),
      100
    );
  }

  get sections() {
    return SECTIONS;
  }

  get sectionKeys() {
    return SECTIONS_KEYS;
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule,
    RouterModule,
  ],
  exports: [NavBarComponent],
  declarations: [NavBarComponent],
})
export class NavBarModule {}
