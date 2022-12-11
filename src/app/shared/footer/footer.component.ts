import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  imports: [],
  exports: [FooterComponent],
  declarations: [FooterComponent],
  providers: [],
})
export class FooterModule {}
