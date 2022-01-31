import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NewsModel } from '../../models/news.model';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.sass']
})
export class GridComponent {

  @ViewChild('grid') 
  gridElement!: ElementRef<HTMLDivElement>;

  @Input() newsList!: NewsModel[];

  private _gutterSize: number = 20;
  colsNumber!: number;

  constructor() { }

  ngAfterViewInit(): void {
    this.colsNumber = this.calculateCols(this.gridElement.nativeElement.offsetWidth);    
  }

  handleSize(event: any): void {      
    this.colsNumber = this.calculateCols(this.gridElement.nativeElement.offsetWidth);    
  }


  private calculateCols(width: number): number {
    let half_gutter = this._gutterSize / 2;    
    return Math.floor(width / (360 + half_gutter));    
  }
  
  public get gutterSize() : string {
    return this._gutterSize + 'px';
  }
  
}
