import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';
import { CategoryListComponent } from './core/components/category-list/category-list.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SearchBarComponent } from './core/components/search-bar/search-bar.component';
import { CardComponent } from './core/components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { FullNewsComponent } from './views/full-news/full-news.component';
import { CreateNewsComponent } from './views/create-news/create-news.component';
import { RightColComponent } from './core/components/right-col/right-col.component';
import { HeaderComponent } from './core/components/header/header.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GridComponent } from './core/components/grid/grid.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryListComponent,
    SearchBarComponent,
    CardComponent,
    FullNewsComponent,
    CreateNewsComponent,
    RightColComponent,
    HeaderComponent,
    GridComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatFormFieldModule,    
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
