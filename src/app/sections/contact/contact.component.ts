import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { NavigationFocusModule } from 'src/app/services/navigation-focus/navigation-focus';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  imports: [
    FormsModule,
    NavigationFocusModule,
    MatIconModule,
    MatDividerModule,
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  exports: [ContactComponent],
  declarations: [ContactComponent],
  providers: [],
})
export class ContactModule {}
