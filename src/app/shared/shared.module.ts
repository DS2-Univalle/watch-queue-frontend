import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingComponent } from './components/routing/routing.component';
import { NavComponent } from './components/nav/nav.component';



@NgModule({
  declarations: [
    RoutingComponent,
    NavComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
