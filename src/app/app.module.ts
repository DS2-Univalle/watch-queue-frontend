import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, LayoutComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
