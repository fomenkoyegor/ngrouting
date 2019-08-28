import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'rickandmorty',
    loadChildren: () => import('./pages/rickandmorty-page/rickandmorty-page.module')
      .then(m => m.RickandmortyPageModule)
  },
  {
    path: 'swapi',
    loadChildren: () => import('./pages/swapi/swapi.module')
      .then(m => m.SwapiModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/not-found/not-found.module').then(mod => mod.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
