import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from 'src/app/core/components/snackbar/snackbar.component';
import { NewsModel } from 'src/app/core/models/news.model';
import { NewsService } from 'src/app/core/service/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  newsList!: NewsModel[];
  constructor(private service : NewsService, private _snackBar: MatSnackBar) { }
  
  ngOnInit(): void {
    this.service.getNewsPreview().subscribe({
      next: data => {     
        this.newsList = data;      
      },
      error: err => {
        this.openSnackBar();
      }
    });
  }

  private openSnackBar() {    
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: 3000,
      panelClass: ["snackBar_error"],
      data: "Não foi possível carregar as notícias! Tente novamente mais tarde."
    });    
  }

}
