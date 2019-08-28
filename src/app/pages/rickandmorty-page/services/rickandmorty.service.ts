import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Rickandmorty} from '../interfaces/rickandmorty';
import {map, tap} from 'rxjs/operators';


export const {log} = console;


@Injectable({
  providedIn: 'root'
})
export class RickandmortyService {
  public pages = 25;
  public startPage = 0;
  public count = 493;
  readonly characterUrl = 'https://rickandmortyapi.com/api/character/';
  public charackters$: BehaviorSubject<Rickandmorty[]>
    = new BehaviorSubject<Rickandmorty[]>([]);

  constructor(
    private http: HttpClient,
  ) {
    this.getCharacters();
  }

  public getCharacters(): void {
    if (this.startPage >= this.pages) {
      this.startPage = 0;
    } else {
      this.startPage++;
    }
    log(this.startPage);
    this.onGetCharacters(this.startPage)
      .pipe(tap(
        (charackters: Rickandmorty[]) => this.charackters$.next(this.charackters$.value.concat(charackters)))
      )
      .subscribe();
  }

  public onGetCharacters(page: number): Observable<Rickandmorty[]> {
    return this.http.get<any>(`${this.characterUrl}?page=` + page)
      .pipe(map(res => res.results));
  }


  public onGetCharacterById(id): Observable<Rickandmorty> {
    return this.http.get<Rickandmorty>(this.characterUrl + id);
  }


}
