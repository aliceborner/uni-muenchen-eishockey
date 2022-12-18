import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss'],
})
export class SponsorsComponent {}

@NgModule({
  exports: [SponsorsComponent],
  declarations: [SponsorsComponent],
  providers: [],
  imports: [],
})
export class SponsorsModule {}
