import {Component, OnInit} from '@angular/core';
import {Planets} from '../../interfaces/swapi';
import {SwapiService} from '../../services/swapi.service';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-planets-page',
  templateUrl: './planets-page.component.html',
  styleUrls: ['./planets-page.component.scss']
})
export class PlanetsPageComponent implements OnInit {


  constructor(
    public swapiService: SwapiService
  ) {
  }

  ngOnInit() {
    if (this.swapiService.pages.planets < 1) {
      this.swapiService.getPlanets();
    }
  }


  public onGetPlanets(): void {
    this.swapiService.getPlanets();
  }

}
