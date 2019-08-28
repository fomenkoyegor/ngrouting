import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SwapiService} from '../../services/swapi.service';
import {Observable} from 'rxjs';
import {Starship} from '../../interfaces/swapi';

@Component({
  selector: 'app-starship-page',
  templateUrl: './starship-page.component.html',
  styleUrls: ['./starship-page.component.scss']
})
export class StarshipPageComponent implements OnInit {
  public starship$: Observable<Starship>;

  constructor(
    private route: ActivatedRoute,
    public swapiService: SwapiService
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.onGetStarhipById(params.id);
    });
  }

  onGetStarhipById(id = 1) {
    this.starship$ = this.swapiService.onGetStarshipById(id);
  }

}
