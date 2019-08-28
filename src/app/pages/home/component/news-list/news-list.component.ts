import {Component, OnInit} from '@angular/core';
import {NewsApiService} from '../../services/news-api.service';
import {Observable} from 'rxjs';
import {NewList} from '../../interfaces/new-list';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  public newsList$: Observable<NewList[]>;

  constructor(private newsApi: NewsApiService) {
  }

  ngOnInit() {
    this.onGetNewsList();
  }

  onGetNewsList(): void {
    this.newsList$ = this.newsApi.getListsNews();
  }

}
