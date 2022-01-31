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
  private width!: number;
  private _gutterSize: number = 20;
  colsNumber!: number;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(typeof changes["newsList"]["currentValue"] === 'undefined'){
      this.newsLength = 1;
    }else{
      this.newsLength = changes["newsList"]["currentValue"].length;
    } 
    this.colsNumber = this.calculateCols(this.width);     
  }
  
  ngOnInit(): void {
    this.colsNumber = 1;    
    this.newsLength = 1;
    this.width = 0;
  }

  ngAfterViewInit(): void {
    this.width = this.gridElement.nativeElement.offsetWidth;
    this.colsNumber = this.calculateCols(this.width);     
  }

  handleSize(event: any): void {      
    event.preventDefault();
    this.width = this.gridElement.nativeElement.offsetWidth;
    this.colsNumber = this.calculateCols(this.width);         
  }


  private calculateCols(width: number): number {
    let half_gutter = this._gutterSize / 2;    
    let result = Math.floor(width / (360 + half_gutter));    
    return (this.newsLength >= result)? result : this.newsLength;
  }
  
  public get gutterSize() : string {
    return this._gutterSize + 'px';
  }
  
}
