import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass']
})
export class SearchBarComponent implements OnInit {
  
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitzer: DomSanitizer,
  ) { 
    this.matIconRegistry.addSvgIcon(
      'search',
      this.domSanitzer.bypassSecurityTrustResourceUrl('assets/search-solid.svg')
    );
  }

  ngOnInit(): void {
  }

}
