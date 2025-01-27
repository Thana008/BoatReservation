import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReservationComponent } from './reservation/reservation.component';
import { PaymentComponent } from './payment/payment.component';
import { AboutUsComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
     { path: '',component: HomeComponent},
     {path: 'login',component: LoginComponent},
     {path: 'register',component: RegisterComponent},
     {path: 'reservation',component: ReservationComponent},
     {path: 'payment',component: PaymentComponent},
     {path: 'login',component: LoginComponent},
     {path: 'aboutus',component: AboutUsComponent},
     {path: 'contactus',component: ContactusComponent},
     { path: 'home', component: HomeComponent},
     { path:  '**', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
