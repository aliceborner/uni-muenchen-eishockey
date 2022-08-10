import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-cookie-popup',
  templateUrl: './cookie-popup.component.html',
  styleUrls: ['./cookie-popup.component.scss'],
})
export class CookiePopupComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  imports: [],
  exports: [CookiePopupComponent],
  declarations: [CookiePopupComponent],
  providers: [],
})
export class CookiePopupModule {}
