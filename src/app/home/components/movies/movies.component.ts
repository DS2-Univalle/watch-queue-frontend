import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { MoviedbService } from 'src/app/core/services/moviedb/moviedb.service';
=======
>>>>>>> main

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
<<<<<<< HEAD
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  public movies!: any;
  constructor(private _movieDbService: MoviedbService) {}

  ngOnInit(): void {
    this.fetchMovies();
  }

  fetchMovies() {
    this._movieDbService.getMovies().subscribe((res: any) => {
      this.movies = res.results;
    });
  }
=======
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

>>>>>>> main
}
