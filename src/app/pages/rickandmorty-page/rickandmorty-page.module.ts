import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RickandmortyPageRoutingModule } from './rickandmorty-page-routing.module';
import { IndexComponent } from './components/index/index.component';
import { ItemsComponent } from './components/items/items.component';
import { ItemComponent } from './components/item/item.component';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PersonPageComponent } from './person-page/person-page.component';
import { PersonsPageComponent } from './persons-page/persons-page.component';
import { PaginateComponent } from './components/paginate/paginate.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [IndexComponent, ItemsComponent, ItemComponent, PersonPageComponent, PersonsPageComponent, PaginateComponent, LoaderComponent],
  imports: [
    CommonModule,
    RickandmortyPageRoutingModule,
    InfiniteScrollModule,
  ]
})
export class RickandmortyPageModule { }
