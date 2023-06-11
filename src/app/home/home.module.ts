import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MoviesComponent } from './components/movies/movies.component';
import { SharedModule } from '../shared/shared.module';
import { CardMovieComponent } from './components/card-movie/card-movie.component';

@NgModule({
  declarations: [MoviesComponent, CardMovieComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
