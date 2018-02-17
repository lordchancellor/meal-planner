import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: [],
  exports: [
    HomeComponent
  ]
})
export class HomeModule {}
