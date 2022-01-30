import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewsService } from 'src/app/core/service/news.service';

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.sass', '../../core/styles/button.sass']
})
export class CreateNewsComponent implements OnInit {
  public form!: FormGroup;
  constructor(private fb: FormBuilder, private service: NewsService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', [Validators.required]],
      image: ['', [Validators.required]],
      body: ['', [Validators.required]],
    })
  }

  public createNews() {
    this.service.postNews(this.form.value).subscribe(result => {});
    this.form.reset();
  }
}
