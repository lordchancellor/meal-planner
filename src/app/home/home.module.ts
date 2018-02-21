import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from '../material/material.module';

import { HomeComponent } from './home.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ],
  declarations: [
    HomeComponent,
    SettingsComponent
  ],
  providers: [],
  exports: [
    HomeComponent,
    SettingsComponent
  ]
})
export class HomeModule {}
