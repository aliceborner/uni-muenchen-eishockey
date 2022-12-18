import { Component, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {}

@NgModule({
  exports: [ContactComponent],
  declarations: [ContactComponent],
  providers: [],
  imports: [MatButtonModule],
})
export class ContactModule {}
