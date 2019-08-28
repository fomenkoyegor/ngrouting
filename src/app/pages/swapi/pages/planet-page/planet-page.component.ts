import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SwapiService} from '../../services/swapi.service';
import {Observable} from 'rxjs';
import {Planets} from '../../interfaces/swapi';

@Component({
  selector: 'app-planet-page',
  templateUrl: './planet-page.component.html',
  styleUrls: ['./planet-page.component.scss']
})
export class PlanetPageComponent implements OnInit {
  public planet$: Observable<Planets>;

  constructor(private route: ActivatedRoute,
              private swapiService: SwapiService
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.onGetPlanet(params.id);
    });
  }

  onGetPlanet(id): void {
    this.planet$ = this.swapiService.onGetPlanetById(id);
  }

}
