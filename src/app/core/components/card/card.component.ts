import { Component, Input, OnInit } from '@angular/core';
import { NewsModel } from '../../models/news.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {

  @Input()
  news!: NewsModel;

  constructor() { }

  ngOnInit(): void {
  }

}
