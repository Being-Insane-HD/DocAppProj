import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DabLoginComponent } from './dab-login/dab-login.component';
import { DabSignupComponent } from './dab-signup/dab-signup.component';
import { DabBookingComponent } from './dab-booking/dab-booking.component';
import { DabAdditionComponent } from './dab-addition/dab-addition.component';

@NgModule({
  declarations: [
    AppComponent,
    DabLoginComponent,
    DabSignupComponent,
    DabBookingComponent,
    DabAdditionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
