import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {People, Planets, Starship} from '../interfaces/swapi';
import {map, tap} from 'rxjs/operators';

export const getId = (entity): number => {
  const idRegExp = /\/([0-9]*)\/$/;
  return entity.url.match(idRegExp)[1];
};


@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  public planets$: BehaviorSubject<Planets[]> = new BehaviorSubject<Planets[]>([]);
  public people$: BehaviorSubject<People[]> = new BehaviorSubject<People[]>([]);
  public starships$: BehaviorSubject<Starship[]> = new BehaviorSubject<Starship[]>([]);


  readonly urls = {
    people: 'https://swapi.co/api/people/',
    planets: 'https://swapi.co/api/planets/',
    films: 'https://swapi.co/api/films/',
    species: 'https://swapi.co/api/species/',
    vehicles: 'https://swapi.co/api/vehicles/',
    starships: 'https://swapi.co/api/starships/'
  };

  readonly images = {
    people: 'https://starwars-visualguide.com/assets/img/characters/',
    planets: 'https://starwars-visualguide.com/assets/img/planets/',
    starships: 'https://starwars-visualguide.com/assets/img/starships/',
  };

  readonly counts = {
    people: 87,
    planets: 61,
    starships: 37
  };

  readonly pages = {
    people: 0,
    planets: 0,
    starships: 0
  };


  constructor(private http: HttpClient) {
  }

  onGetPeople(page = 1): Observable<People[]> {
    return this.http.get<any>(this.urls.people + '?page=' + page)
      .pipe(map(res => res.results))
      .pipe(map(res => res.map(e => {
        return ({
          ...e,
          id: getId(e),
          image: this.images.people + getId(e) + '.jpg'
        });
      })));
  }

  getPeople(): void {
    this.pages.people++;
    this.onGetPeople(this.pages.people).subscribe((people: People[]) => {
      this.people$.next(this.people$.value.concat(people));
    });
  }

  onGetPeopleById(id = 1): Observable<People> {
    const is = this.people$.value.find(s => s.id === id);
    if (is) {
      return of(is);
    } else {
      return this.http.get<any>(this.urls.people + id)
        .pipe(map(people => (
          {
            ...people,
            id: getId(people),
            image: this.images.people + getId(people) + '.jpg'
          }
        )));
    }
  }

  onGetPlanets(page = 1): Observable<Planets[]> {
    return this.http.get<any>(this.urls.planets)
      .pipe(map(res => res.results))
      .pipe(map(planets => planets.map(planet => ({
        ...planet,
        id: getId(planet),
        image: this.images.planets + getId(planet) + '.jpg'
      }))));
  }


  onGetPlanetById(id = 1): Observable<Planets> {
    const is = this.planets$.value.find(s => s.id === id);
    if (is) {
      return of(is);
    } else {
      return this.http.get<any>(this.urls.planets + id)
        .pipe(map(planet => ({
          ...planet,
          id: getId(planet),
          image: this.images.planets + getId(planet) + '.jpg'
        })));
    }
  }


  getPlanets(): void {
    this.pages.planets++;
    this.onGetPlanets(this.pages.planets).subscribe((planets: Planets[]) => {
      this.planets$.next(this.planets$.value.concat(planets));
    });
  }

  getStarships(): void {
    this.pages.starships++;
    this.onGetStarships(this.pages.starships).subscribe((starships: Starship[]) => {
      this.starships$.next(this.starships$.value.concat(starships));
    });
  }

  onGetStarships(page = 1): Observable<Starship[]> {
    return this.http.get<any>(this.urls.starships)
      .pipe(map(res => res.results))
      .pipe(map(starships => starships.map(starship => ({
        ...starship,
        id: getId(starship),
        image: this.images.starships + getId(starship) + '.jpg'
      }))));
  }


  onGetStarshipById(id = 1): Observable<Starship> {
    const is = this.starships$.value.find(s => s.id === id);
    if (is) {
      return of(is);
    } else {
      return this.http.get<any>(this.urls.starships + id)
        .pipe(map(starship => ({
          ...starship,
          id: getId(starship),
          image: this.images.starships + getId(starship) + '.jpg'
        })));
    }


  }


}
