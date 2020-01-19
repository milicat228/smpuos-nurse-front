import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RouteGuardService } from './auth/service/route-guard.service';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuardService } from './auth/service/login-guard.service';

const routes: Routes = [
  { path: '', component: LoginPageComponent, canActivate: [LoginGuardService]},
  { path: 'home', component: HomePageComponent,  canActivate: [RouteGuardService] },
  { path: 'profile', component: ProfilePageComponent,  canActivate: [RouteGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
