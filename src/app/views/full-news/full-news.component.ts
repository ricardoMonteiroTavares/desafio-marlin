import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SnackbarComponent } from 'src/app/core/components/snackbar/snackbar.component';
import { NewsModel } from 'src/app/core/models/news.model';
import { NewsService } from 'src/app/core/service/news.service';

@Component({
  selector: 'app-full-news',
  templateUrl: './full-news.component.html',
  styleUrls: ['./full-news.component.sass', '../../core/styles/container.sass']
})
export class FullNewsComponent implements OnInit {

  @Input()
  news!: NewsModel;
  
  constructor(public router:Router, private service : NewsService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    let list = this.router.url.split('/');
    let id = list[list.length - 1];
    this.service.getNews(id).subscribe({
      next: data => {     
        this.news = data;      
      },
      error: error => {
        this.openSnackBar();
      }
    });    
  }

  getDate(){
    return new Date(Date.parse(this.news.createdAt)).toLocaleDateString();
  }

  private openSnackBar() {    
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: 3000,
      panelClass: ["snackBar_error"],
      data: "Não foi possível carregar a notícia! Tente novamente mais tarde."
    });    
  }
}
