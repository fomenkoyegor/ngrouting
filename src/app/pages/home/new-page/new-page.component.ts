import {Component, OnInit} from '@angular/core';
import {NewsApiService} from '../services/news-api.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {NewItem} from '../interfaces/new-item';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.scss']
})
export class NewPageComponent implements OnInit {

  public news$: Observable<NewItem[]>;

  constructor(
    private newsApi: NewsApiService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params.id);
      this.news$ = this.newsApi.getNewsById(params.id);
    });
  }

}
