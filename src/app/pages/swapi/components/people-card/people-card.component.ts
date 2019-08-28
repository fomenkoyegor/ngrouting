import {Component, Input, OnInit} from '@angular/core';
import {People, Planets} from '../../interfaces/swapi';
import {SwapiService} from '../../services/swapi.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-people-card',
  templateUrl: './people-card.component.html',
  styleUrls: ['./people-card.component.scss']
})
export class PeopleCardComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('item') people: People;
  public planet$: Observable<Planets>;

  constructor(public swapiService: SwapiService) {
  }

  ngOnInit() {

  }

  public getId(url): number {
    const idRegExp = /\/([0-9]*)\/$/;
    return url.match(idRegExp)[1];
  }

}
