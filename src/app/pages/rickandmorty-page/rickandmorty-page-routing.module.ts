import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IndexComponent} from './components/index/index.component';
import {PersonPageComponent} from './person-page/person-page.component';
import {PersonsPageComponent} from './persons-page/persons-page.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {path: '', redirectTo: 'page/1', pathMatch: 'full'},
      {path: 'page/:page', component: PersonsPageComponent},

    ]
  },
  {
    path: 'person/:id',
    component: PersonPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RickandmortyPageRoutingModule {
}
