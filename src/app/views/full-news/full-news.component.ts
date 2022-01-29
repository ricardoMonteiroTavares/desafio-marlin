import { Component, Input, OnInit } from '@angular/core';
import { NewsModel } from 'src/app/core/models/news.model';

@Component({
  selector: 'app-full-news',
  templateUrl: './full-news.component.html',
  styleUrls: ['./full-news.component.sass']
})
export class FullNewsComponent implements OnInit {

  @Input()
  news!: NewsModel;
  
  constructor() { }

  ngOnInit(): void {
  }

}
