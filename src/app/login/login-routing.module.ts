import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
<<<<<<< HEAD
  { path: 'login', component: SigninComponent },
=======
  { path: 'login', component: SigninComponent }
>>>>>>> main
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
<<<<<<< HEAD
  exports: [RouterModule],
})
export class LoginRoutingModule {}
=======
  exports: [RouterModule]
})
export class LoginRoutingModule { }
>>>>>>> main
