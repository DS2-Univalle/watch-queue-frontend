import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
