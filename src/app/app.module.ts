import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DabLoginComponent } from './dab-login/dab-login.component';
import { DabSignupComponent } from './dab-signup/dab-signup.component';
import { DabBookingComponent } from './dab-booking/dab-booking.component';
import { AppointmentListComponent } from './dab-appoint/appointment-list/appointment-list.component';
import { AppointmentCreateComponent } from './dab-appoint/appointment-create/appointment-create.component';
import { AppointmentUpdateComponent } from './dab-appoint/appointment-update/appointment-update.component';


@NgModule({
  declarations: [
    AppComponent,
    DabLoginComponent,
    DabSignupComponent,
    DabBookingComponent,
    AppointmentListComponent,
    AppointmentCreateComponent,
    AppointmentUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
