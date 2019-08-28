import {Component, OnInit} from '@angular/core';
import {SwapiService} from '../../services/swapi.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {People} from '../../interfaces/swapi';

@Component({
  selector: 'app-people-page',
  templateUrl: './people-page.component.html',
  styleUrls: ['./people-page.component.scss']
})
export class PeoplePageComponent implements OnInit {
  constructor(public swapiService: SwapiService) {
  }

  ngOnInit() {
    if (this.swapiService.pages.people < 1) {
      this.onGetPeople();
    }
  }

  public onGetPeople() {
    this.swapiService.getPeople();
  }

}
