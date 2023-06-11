import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BackgroundComponent } from './components/background/background.component';

@NgModule({
  declarations: [NavbarComponent, BackgroundComponent],
  imports: [CommonModule, RouterModule],
  exports: [RouterModule, NavbarComponent, BackgroundComponent],
})
export class SharedModule {}
=======
import { NavComponent } from './components/nav/nav.component';
import { RouterModule } from '@angular/router';
import { InfoUserComponent } from './components/info-user/info-user.component';
import { BackgroundComponent } from './components/background/background.component';



@NgModule({
  declarations: [
    NavComponent,
    InfoUserComponent,
    BackgroundComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    RouterModule
  ]
})
export class SharedModule { }
>>>>>>> main
