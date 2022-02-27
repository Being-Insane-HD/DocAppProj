import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DabAdditionComponent } from './dab-addition/dab-addition.component';
import { DabBookingComponent } from './dab-booking/dab-booking.component';
import { DabLoginComponent } from './dab-login/dab-login.component';
import { DabSignupComponent } from './dab-signup/dab-signup.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dab-login' },
  { path: 'dab-login', component: DabLoginComponent },
  { path: 'dab-signup', component: DabSignupComponent },
  { path: 'dab-booking', component: DabBookingComponent },
  { path: 'dab-addition', component: DabAdditionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
