import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { NewsModel } from '../../models/news.model';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.sass']
})
export class GridComponent implements AfterViewInit, OnInit, OnChanges {

  @ViewChild('grid') 
  gridElement!: ElementRef<HTMLDivElement>;

  @Input() newsList!: NewsModel[];
  private newsLength!: number;
  private _gutterSize: number = 20;
  colsNumber!: number;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(typeof changes["newsList"]["currentValue"] == 'undefined'){
      this.newsLength = 1;
    }else{
      this.newsLength = changes["newsList"]["currentValue"].length;
    }    
  }
  ngOnInit(): void {
    this.colsNumber = 1;    
    this.newsLength = 1;
  }

  ngAfterViewInit(): void {
    let result = this.calculateCols(this.gridElement.nativeElement.offsetWidth);     
    this.colsNumber = (this.newsLength >= result)? result : this.newsLength;
  }

  handleSize(event: any): void {      
    event.preventDefault();
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
