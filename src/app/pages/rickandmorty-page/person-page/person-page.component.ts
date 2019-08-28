import {Component, OnInit} from '@angular/core';
import {RickandmortyService} from '../services/rickandmorty.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Rickandmorty} from '../interfaces/rickandmorty';
import {Observable} from 'rxjs';

export function isNumber(n) {
  return /^-?[\d.]+(?:e-?\d+)?$/.test(n);
}


@Component({
  selector: 'app-person-page',
  templateUrl: './person-page.component.html',
  styleUrls: ['./person-page.component.scss']
})
export class PersonPageComponent implements OnInit {
  public item$: Observable<Rickandmorty>;

  constructor(private rickandmortyService: RickandmortyService,
              private route: ActivatedRoute,
              private router: Router
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => this.onGetCharacterById(params.id));
  }

  private onGetCharacterById(id): void {
    if (id > this.rickandmortyService.count || id < 0 || isNumber(+id) === false) {
      this.router.navigateByUrl('/');
      return;
    }
    this.item$ = this.rickandmortyService.onGetCharacterById(id);
  }
}
