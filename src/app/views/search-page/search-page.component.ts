import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsModel } from 'src/app/core/models/news.model';
import { NewsService } from 'src/app/core/service/news.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.sass']
})
export class SearchPageComponent implements OnInit {

  newsList!: NewsModel[];
  searchTerm!: string;

  constructor(public router:Router, private service : NewsService) { }

  ngOnInit(): void {
    let list = this.router.url.split('/');
    this.searchTerm = list[list.length - 1];
    this.service.getNewsPreview().subscribe(data => {  
      let result = data.filter(this.filterMethod);   
      this.newsList = result;
      console.log(this.newsList);
    });
  }

  private filterMethod(value: NewsModel) : boolean {
    return value.title.includes(this.searchTerm);
  }

}
