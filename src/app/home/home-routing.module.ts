import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
<<<<<<< HEAD
=======
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { NavComponent } from '../shared/components/nav/nav.component';
>>>>>>> main

const routes: Routes = [
  {
    path: '',
<<<<<<< HEAD
    component: MoviesComponent,
  },
=======
    component: NavComponent,
    children: [
      {
        path: '',
        redirectTo: '/home/movies',
        pathMatch: 'full',
      },
      { path: 'movies', component: MoviesComponent },
      { path: 'movie/:id', component: MovieDetailComponent }
    ]
  }
>>>>>>> main
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
<<<<<<< HEAD
  exports: [RouterModule],
})
export class HomeRoutingModule {}
=======
  exports: [RouterModule]
})
export class HomeRoutingModule { }
>>>>>>> main
