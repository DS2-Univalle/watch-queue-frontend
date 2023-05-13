import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviedbService {

  private url_api = environment.url_api;
  private bearer_token = environment.bearer_token;
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.bearer_token}`
  })

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get(this.url_api+'tv/popular', { headers: this.headers });
  }
}
