import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {People} from '../../interfaces/swapi';
import {SwapiService} from '../../services/swapi.service';

@Component({
  selector: 'app-person-page',
  templateUrl: './person-page.component.html',
  styleUrls: ['./person-page.component.scss']
})
export class PersonPageComponent implements OnInit {
  public people$: Observable<People>;

  constructor(
    private route: ActivatedRoute,
    private swapiService: SwapiService
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.onGetPeopleById(params.id);
    });
  }


  onGetPeopleById(id) {
    this.people$ = this.swapiService.onGetPeopleById(id);
  }

}
