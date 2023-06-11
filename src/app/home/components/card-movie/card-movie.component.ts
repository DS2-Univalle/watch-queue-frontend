import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.scss'],
})
export class CardMovieComponent {
  @Input() name!: string;
  @Input() poster_path!: string;
  @Input() first_air_date!: string;
  @Input() vote_average!: number;
}
