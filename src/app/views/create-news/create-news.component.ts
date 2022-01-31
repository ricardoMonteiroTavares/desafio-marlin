import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from 'src/app/core/components/snackbar/snackbar.component';
import { NewsService } from 'src/app/core/service/news.service';

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.sass', '../../core/styles/button.sass']
})
export class CreateNewsComponent implements OnInit {
  public form!: FormGroup;  
  constructor(private fb: FormBuilder, private service: NewsService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', [Validators.required]],
      image: ['', [Validators.required]],
      body: ['', [Validators.required]],
    });    
  }

  public createNews() {
    this.service.postNews(this.form.value).subscribe({
      next: (result) => {
        this.openSnackBar(false);
      },
      error: (err: HttpErrorResponse) => { 
        this.openSnackBar(true);
      }
    });
  }

  private openSnackBar(error: boolean) {
    if(error){
      this._snackBar.openFromComponent(SnackbarComponent, {
        duration: 3000,
        panelClass: ["snackBar_error"],
        data: "Não foi possível enviar a sua notícia! Tente novamente mais tarde."
      });
    }else {
      this._snackBar.openFromComponent(SnackbarComponent, {
        duration: 3000,
        panelClass: ["snackBar"],
        data: "Sua notícia foi enviada com sucesso!"
      });
      this.form.reset(); 
    }
  }
}
