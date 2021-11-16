import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  FormService,
  FormValidationService,
  WellmarkAlertModule,
  WellmarkBannerModule,
  WellmarkCardModule,
  WellmarkFieldModule,
  WellmarkNavbarModule,
} from '@wellmark/wm-lib-ux';
import { ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

const wellmarkModules = [
  WellmarkNavbarModule,
  WellmarkBannerModule,
  WellmarkCardModule,
  WellmarkFieldModule,
  WellmarkAlertModule,
];
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ...wellmarkModules,
  ],
  providers: [CookieService, FormValidationService, FormService],
  bootstrap: [AppComponent],
})
export class AppModule {}
