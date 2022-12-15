import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {}

@NgModule({
  imports: [],
  exports: [FooterComponent],
  declarations: [FooterComponent],
  providers: [],
})
export class FooterModule {}
