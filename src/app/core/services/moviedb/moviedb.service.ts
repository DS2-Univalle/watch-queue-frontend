import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MoviedbService {
  private _urlApi = environment.url_api;
  private _bearerToken = environment.bearer_token;
  private _headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${this._bearerToken}`,
  });

  constructor(private _http: HttpClient) {}

  getMovies() {
    return this._http.get(this._urlApi + 'movie/popular', {
      headers: this._headers,
    });
  }
}
