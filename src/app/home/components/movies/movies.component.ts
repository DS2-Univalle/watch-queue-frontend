import { Component, OnInit } from '@angular/core';
import { MoviedbService } from 'src/app/core/services/moviedb/moviedb.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor(
    private movieDbService: MoviedbService
  ) { }

  ngOnInit(): void {
    this.fetchMovies();
  }

  fetchMovies() {
    this.movieDbService.getMovies()
    .subscribe((res) => {
      console.log(res);
    })
  }

}
