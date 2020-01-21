import { ResponseErrorInterceptor } from './interceptor/resonpse-error-interceptor';
import { RouteGuardService } from './service/route-guard.service';
import { JwtInterceptor } from './interceptor/jwt-interceptor';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*ZA FORME*/
import { ReactiveFormsModule} from '@angular/forms';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';

import { LoginFormComponent } from './login-form/login-form.component';
import { ProfileDisplayComponent } from './profile-display/profile-display.component';
import { ChangePasswordFormComponent } from './change-password-form/change-password-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [LoginFormComponent, ProfileDisplayComponent, ChangePasswordFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgBootstrapFormValidationModule.forRoot(),
    NgBootstrapFormValidationModule,
    NgbModule
  ],
  exports: [
    LoginFormComponent,
    ProfileDisplayComponent
  ],
  providers: [
    JwtInterceptor, RouteGuardService, ResponseErrorInterceptor
  ]
})
export class AuthModule { }
