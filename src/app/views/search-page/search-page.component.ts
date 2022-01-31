import { Component, OnInit } from '@angular/core';
import { NewsModel } from 'src/app/core/models/news.model';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.sass']
})
export class SearchPageComponent implements OnInit {

  newsList!: NewsModel[];
  constructor() { }

  ngOnInit(): void {
  }

}
