import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NavigationEnd, Router } from '@angular/router';
import { SnackbarComponent } from 'src/app/core/components/snackbar/snackbar.component';
import { NewsModel } from 'src/app/core/models/news.model';
import { NewsService } from 'src/app/core/service/news.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.sass', '../../core/styles/container.sass']
})
export class SearchPageComponent implements OnInit, OnDestroy {

  newsList: NewsModel[] = [];
  searchTerm!: string;
  navigationSubscription!: any;

  constructor(public router:Router, private service : NewsService, private _snackBar: MatSnackBar) { 
    this.navigationSubscription = this.router.events.subscribe((e: any) => {     
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });
  }

  initialiseInvites() {
    let list = this.router.url.split('/');
    this.searchTerm = list[list.length - 1];    
    this.service.getNewsPreview().subscribe({ 
      next: data => {  
      let result = data.filter(value => this.filterMethod(value,this.searchTerm));   
      this.newsList = result;      
      },
      error: err => {
        this.openSnackBar();
      }
    });
  }

  ngOnDestroy(): void {
    if (this.navigationSubscription) {  
       this.navigationSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.initialiseInvites();
  }

  private filterMethod(value: NewsModel, searchTerm: string) : boolean {
    return value.title.toLowerCase().includes(searchTerm.toLowerCase());
  }

  private openSnackBar() {    
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: 3000,
      panelClass: ["snackBar_error"],
      data: "Não foi possível carregar as notícias! Tente novamente mais tarde."
    });    
  }

}
