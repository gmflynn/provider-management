import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatToolbarModule,
  MatTabsModule,
  MatSelectModule,
  MatInputModule,
  MatTableModule,
  MatIconModule,
  MatRadioModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatRadioModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatRadioModule
  ]
})
export class MaterialModule {}