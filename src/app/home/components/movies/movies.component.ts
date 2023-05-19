import { Component, OnInit } from '@angular/core';
import { MoviedbService } from 'src/app/core/services/moviedb/moviedb.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  constructor(private _movieDbService: MoviedbService) {}

  ngOnInit(): void {
    this.fetchMovies();
  }

  fetchMovies() {
    this._movieDbService.getMovies().subscribe();
  }
}
