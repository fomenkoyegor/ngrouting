import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IndexPageComponent} from './pages/index-page/index-page.component';
import {PeoplePageComponent} from './pages/people-page/people-page.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {StarshipsPageComponent} from './pages/starships-page/starships-page.component';
import {PlanetsPageComponent} from './pages/planets-page/planets-page.component';
import {PersonPageComponent} from './pages/person-page/person-page.component';
import {PlanetPageComponent} from './pages/planet-page/planet-page.component';
import {StarshipPageComponent} from './pages/starship-page/starship-page.component';

const routes: Routes = [
  {
    path: '', component: IndexPageComponent, children: [
      {path: '', redirectTo: 'home'},
      {path: 'home', component: HomePageComponent},
      {path: 'people', component: PeoplePageComponent},
      {path: 'people/:id', component: PersonPageComponent},
      {path: 'planets', component: PlanetsPageComponent},
      {path: 'planets/:id', component: PlanetPageComponent},
      {path: 'starships', component: StarshipsPageComponent},
      {path: 'starships/:id', component: StarshipPageComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SwapiRoutingModule {
}
