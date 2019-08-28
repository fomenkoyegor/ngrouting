import {Component, Input, OnInit} from '@angular/core';
import {SwapiService} from '../../services/swapi.service';
import {People} from '../../interfaces/swapi';
import {Observable} from 'rxjs';

export const getId = (str): number => {
  const idRegExp = /\/([0-9]*)\/$/;
  return str.match(idRegExp)[1];
};


@Component({
  selector: 'app-resident',
  templateUrl: './resident.component.html',
  styleUrls: ['./resident.component.scss']
})
export class ResidentComponent implements OnInit {
  @Input() resident: string;
  public id: number;
  public people$: Observable<People>;

  constructor(
    private swapiService: SwapiService
  ) {
  }

  ngOnInit() {
    this.id = getId(this.resident);
    this.people$ = this.swapiService.onGetPeopleById(this.id);
  }

}
