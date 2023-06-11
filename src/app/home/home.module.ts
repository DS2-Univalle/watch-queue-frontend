import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MoviesComponent } from './components/movies/movies.component';
<<<<<<< HEAD
import { SharedModule } from '../shared/shared.module';
import { CardMovieComponent } from './components/card-movie/card-movie.component';

@NgModule({
  declarations: [MoviesComponent, CardMovieComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
=======
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MoviesComponent,
    MovieDetailComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
>>>>>>> main
