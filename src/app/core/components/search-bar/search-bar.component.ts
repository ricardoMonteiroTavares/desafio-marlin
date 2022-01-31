import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass']
})
export class SearchBarComponent implements OnInit {
    
  public form!: FormGroup;
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitzer: DomSanitizer,
    private fb: FormBuilder,
    private router: Router,
  ) { 
    this.matIconRegistry.addSvgIcon(
      'search',
      this.domSanitzer.bypassSecurityTrustResourceUrl('assets/search-solid.svg')
    );
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      value: [''],            
    });
  }

  public clickHandler() {
    let value: string = this.form.value['value'];
    if(value.trim().length != 0){
      let url = '/search/' + value;
      this.router.navigateByUrl(url);
    }
  }

  handleKeyUp(e: any){
    if(e.keyCode === 13){
      e.preventDefault();
       this.clickHandler();
    }
 }

}
