import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BackgroundComponent } from './components/background/background.component';

@NgModule({
  declarations: [NavbarComponent, BackgroundComponent],
  imports: [CommonModule, RouterModule],
  exports: [RouterModule, NavbarComponent, BackgroundComponent],
})
export class SharedModule {}
