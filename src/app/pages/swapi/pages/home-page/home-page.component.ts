import {Component, OnDestroy, OnInit} from '@angular/core';
import {SwapiService} from '../../services/swapi.service';
import {BehaviorSubject} from 'rxjs';
import {People, Planets, Starship} from '../../interfaces/swapi';

export const random = (min, max) => Math.round(Math.random() * (max - min)) + min;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
  public people$ = new BehaviorSubject<People>(null);
  public planets$ = new BehaviorSubject<Planets>(null);
  public starship$ = new BehaviorSubject<Starship>(null);
  private timerPeople = null;
  private timerPlanets = null;
  private timerStarships = null;

  constructor(
    public swapiService: SwapiService
  ) {
  }

  ngOnInit() {
    this.getRandomPeopleById(random(1, this.swapiService.counts.people));
    this.timerPeople = window.setInterval(() => {
      this.getRandomPeopleById(random(1, this.swapiService.counts.people));
    }, 5000);

    this.getRandomPlanetById(random(1, this.swapiService.counts.people));
    this.timerPlanets = window.setInterval(() => {
      this.getRandomPlanetById(random(1, this.swapiService.counts.people));
    }, 4000);


    this.getRandomStarshipById(random(1, this.swapiService.counts.people));
    this.timerStarships = window.setInterval(() => {
      this.getRandomStarshipById(random(1, this.swapiService.counts.people));
    }, 6000);
  }


  getRandomPeopleById(id = random(1, this.swapiService.counts.people)) {
    this.swapiService.onGetPeopleById(id)
      .subscribe(people => this.people$.next(people));
  }

  getRandomPlanetById(id = random(1, this.swapiService.counts.planets)) {
    this.swapiService.onGetPlanetById(id)
      .subscribe(planets => this.planets$.next(planets));
  }

  getRandomStarshipById(id = random(1, this.swapiService.counts.starships)) {
    this.swapiService.onGetStarshipById(id)
      .subscribe(starship => this.starship$.next(starship));
  }

  ngOnDestroy(): void {
    if (this.timerPeople) {
      clearInterval(this.timerPeople);
    }

    if (this.timerPlanets) {
      clearInterval(this.timerPlanets);
    }

    if (this.timerStarships) {
      clearInterval(this.timerStarships);
    }
  }

}
