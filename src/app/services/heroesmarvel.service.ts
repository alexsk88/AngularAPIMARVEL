import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesmarvelService
{
  url = 'https://gateway.marvel.com/v1/public/'
  key = '?ts=1&apikey=9c45325cb525c73d1f3841b165a1a6a4&hash=a1f3d8bcda3995cdf3dc26b8e7797761'


  // http://gateway.marvel.com/v1/public/characters
  constructor(private _http: HttpClient)
  {

  }

  getHeroes(offset: number): Observable<any>
  {
    return this._http.get(`${this.url}characters${this.key}&offset=${offset}`);
  }

  getHeroe(id: number): Observable<any>
  {
    return this._http.get(`${this.url}characters/${id}${this.key}`);
  }

}
