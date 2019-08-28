import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';
import {NewsPageComponent} from './news-page/news-page.component';
import {NewPageComponent} from './new-page/new-page.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      {
        path: '', redirectTo: 'news', pathMatch: 'full'
      },
      {
        path: 'news', component: NewsPageComponent
      },
      {
        path: 'news/:id', component: NewPageComponent
      },
      {
        path: '**', component: NewsPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
