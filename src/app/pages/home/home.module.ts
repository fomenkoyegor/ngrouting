import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { NewsPageComponent } from './news-page/news-page.component';
import { NewPageComponent } from './new-page/new-page.component';
import { NewsListComponent } from './component/news-list/news-list.component';
import { NewsItemComponent } from './component/news-item/news-item.component';
import { NewComponent } from './component/new/new.component';
import { LoaderComponent } from './component/loader/loader.component';


@NgModule({
  declarations: [HomeComponent, NewsPageComponent, NewPageComponent, NewsListComponent, NewsItemComponent, NewComponent, LoaderComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,

  ]
})
export class HomeModule { }
