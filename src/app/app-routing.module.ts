import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginRegisComponent } from './login-regis/login-regis.component';

const routes: Routes = [
     { path: '',component: HomeComponent},
     { path: 'home', component: HomeComponent},
     { path: 'login-regis', component: LoginRegisComponent},
     { path:  '**', redirectTo: ''}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
