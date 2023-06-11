import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { InfoUserComponent } from './components/info-user/info-user.component';
import { BackgroundComponent } from './components/background/background.component';

@NgModule({
  declarations: [NavComponent, InfoUserComponent, BackgroundComponent],
  imports: [CommonModule, RouterModule],
  exports: [RouterModule, BackgroundComponent, NavComponent, InfoUserComponent],
})
export class SharedModule {}
