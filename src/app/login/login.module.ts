import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { CardLoginComponent } from './components/card-login/card-login.component';
import { CardSignupComponent } from './components/card-signup/card-signup.component';
import { BackgroundComponent } from './components/background/background.component';
import { NavbarComponent } from './components/navbar/navbar.component';

<<<<<<< HEAD
=======

>>>>>>> main
@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    CardLoginComponent,
    CardSignupComponent,
    BackgroundComponent,
<<<<<<< HEAD
    NavbarComponent,
  ],
  imports: [CommonModule, LoginRoutingModule],
})
export class LoginModule {}
=======
    NavbarComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
>>>>>>> main
