import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNewsComponent } from './views/create-news/create-news.component';
import { FullNewsComponent } from './views/full-news/full-news.component';
import { HomeComponent } from './views/home/home.component';
import { SearchPageComponent } from './views/search-page/search-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },  
  {
    path: 'news/:id',
    component: FullNewsComponent
  },
  {
    path: 'create-news',
    component: CreateNewsComponent
  },
  {
    path: 'search/:value',
    component: SearchPageComponent,    
    runGuardsAndResolvers: "always",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: "reload"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
