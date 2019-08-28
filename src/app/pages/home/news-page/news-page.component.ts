import {Component, OnInit} from '@angular/core';
import {NewsApiService} from '../services/news-api.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {
  public news$: Observable<any>;

  constructor(private newsApi: NewsApiService) {
  }

  ngOnInit() {
    this.onGetTopNews();
  }

  private onGetTopNews(): void {
    this.news$ = this.newsApi.getTopNews();
  }

}
