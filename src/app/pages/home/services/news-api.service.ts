import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {NewList} from '../interfaces/new-list';
import {NewItem} from '../interfaces/new-item';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  readonly apiKey = `59c442e0259a4942aec0d11bebbcc91f`;
  readonly sourseUrl = `https://newsapi.org/v2/sources?apiKey=${this.apiKey}`;
  readonly topNewsUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${this.apiKey}`;

  constructor(private http: HttpClient) {
  }

  public getListsNews(): Observable<NewList[]> {
    return this.http.get<any>(this.sourseUrl)
      .pipe(map(res => res.sources));
  }

  public getNewsById(id: string): Observable<NewItem[]> {
    return this.http.get<any>(`https://newsapi.org/v2/top-headlines?sources=${id}&apiKey=${this.apiKey}`)
      .pipe(map(res => res.articles));
  }

  public getTopNews(): Observable<NewItem[]> {
    return this.http.get<any>(this.topNewsUrl)
      .pipe(map(res => res.articles));
  }

}
