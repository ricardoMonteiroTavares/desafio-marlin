import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsModel } from 'src/app/core/models/news.model';
import { NewsService } from 'src/app/core/service/news.service';

@Component({
  selector: 'app-full-news',
  templateUrl: './full-news.component.html',
  styleUrls: ['./full-news.component.sass']
})
export class FullNewsComponent implements OnInit {

  @Input()
  news!: NewsModel;
  
  constructor(public router:Router, private service : NewsService) { }

  ngOnInit(): void {
    let list = this.router.url.split('/');
    let id = list[list.length - 1];
    this.service.getNews(id).subscribe(data => {     
      this.news = data;
      console.log(this.news);
    });
    console.log(id);
  }

  getDate(){
    return new Date(Date.parse(this.news.createdAt)).toLocaleDateString();
  }

}
