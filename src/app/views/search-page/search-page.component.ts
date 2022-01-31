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

  newsList: NewsModel[] = [];
  searchTerm!: string;

  constructor(public router:Router, private service : NewsService) { }

  ngOnInit(): void {
    let list = this.router.url.split('/');
    this.searchTerm = list[list.length - 1];    
    this.service.getNewsPreview().subscribe(data => {  
      let result = data.filter(value => this.filterMethod(value,this.searchTerm));   
      this.newsList = result;      
    });
  }

  private filterMethod(value: NewsModel, searchTerm: string) : boolean {
    return value.title.toLowerCase().includes(searchTerm.toLowerCase());
  }

}
