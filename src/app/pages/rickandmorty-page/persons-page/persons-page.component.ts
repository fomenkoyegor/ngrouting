import {Component, OnInit} from '@angular/core';
import {RickandmortyService} from '../services/rickandmorty.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Rickandmorty} from '../interfaces/rickandmorty';

@Component({
  selector: 'app-persons-page',
  templateUrl: './persons-page.component.html',
  styleUrls: ['./persons-page.component.scss']
})
export class PersonsPageComponent implements OnInit {
  public page: number;
  public charactresr$: Observable<Rickandmorty[]>;

  constructor(
    private rickandmortyService: RickandmortyService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.page = params.page;
      this.onGetCharacters(this.page);
    });
  }


  private onGetCharacters(page): void {
    if (page > this.rickandmortyService.pages || page < 0) {
      this.router.navigateByUrl('/');
      return;
    }
    this.charactresr$ = this.rickandmortyService.onGetCharacters(page);
  }

}
