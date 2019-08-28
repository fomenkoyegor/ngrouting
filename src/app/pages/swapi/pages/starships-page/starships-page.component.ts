import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Starship} from '../../interfaces/swapi';
import {SwapiService} from '../../services/swapi.service';

@Component({
  selector: 'app-starships-page',
  templateUrl: './starships-page.component.html',
  styleUrls: ['./starships-page.component.scss']
})
export class StarshipsPageComponent implements OnInit {


  constructor(public swapiService: SwapiService) {
  }

  ngOnInit() {
    if (this.swapiService.pages.starships < 1) {
      this.swapiService.getStarships();
    }
  }

  onGetStarships() {
    this.swapiService.getStarships();
  }
}
