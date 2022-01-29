import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullNewsComponent } from './views/full-news/full-news.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },  
  {
    path: 'news/:id',
    component: FullNewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
