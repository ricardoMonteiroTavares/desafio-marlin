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
    })
  }

  public createNews() {
    this.service.postNews(this.form.value).subscribe(result => {
    });
    this.form.reset();    
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: 5000,
      panelClass: ["snackBar"]
    });
  }
}
