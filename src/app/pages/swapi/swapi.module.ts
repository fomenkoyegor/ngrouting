import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {InfiniteScrollModule} from 'ngx-infinite-scroll';

import {SwapiRoutingModule} from './swapi-routing.module';
import {IndexPageComponent} from './pages/index-page/index-page.component';
import {HeaderComponent} from './components/header/header.component';
import {PeoplePageComponent} from './pages/people-page/people-page.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {PlanetsPageComponent} from './pages/planets-page/planets-page.component';
import {StarshipsPageComponent} from './pages/starships-page/starships-page.component';
import {PeopleCardComponent} from './components/people-card/people-card.component';
import {PersonPageComponent} from './pages/person-page/person-page.component';
import {LoaderComponent} from './components/loader/loader.component';
import {PlanetPageComponent} from './pages/planet-page/planet-page.component';
import {PlanetCardComponent} from './components/planet-card/planet-card.component';
import {ResidentsComponent} from './components/residents/residents.component';
import {ResidentComponent} from './components/resident/resident.component';
import {StarshipCardComponent} from './components/starship-card/starship-card.component';
import { StarshipPageComponent } from './pages/starship-page/starship-page.component';

@NgModule({
  declarations: [IndexPageComponent, HeaderComponent, PeoplePageComponent, HomePageComponent, PlanetsPageComponent, StarshipsPageComponent, PeopleCardComponent, PersonPageComponent, LoaderComponent, PlanetPageComponent, PlanetCardComponent, ResidentsComponent, ResidentComponent, StarshipCardComponent, StarshipPageComponent],
  imports: [
    CommonModule,
    SwapiRoutingModule,
    InfiniteScrollModule
  ]
})
export class SwapiModule {
}
