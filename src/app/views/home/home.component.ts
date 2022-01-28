import { Component, OnInit } from '@angular/core';
import { NewsModel } from 'src/app/core/models/news.model';
import { NewsService } from 'src/app/core/service/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  newsList!: NewsModel[];
  constructor(private service : NewsService) { }
  
  ngOnInit(): void {
    this.service.getNewsPreview().subscribe(data => {     
      this.newsList = data;
      console.log(this.newsList);
    });
  }
  

}
