import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  @Input() searchTerm!: string;
  @Input() itemsFound!: number;

  constructor() { }

  ngOnInit(): void {
  }

  
  public get title() : string {
    return (typeof this.searchTerm === 'undefined')? "The news" : "Exibindo resultado de busca por \"" + this.searchTerm + "\"";
  }
  
  
  public get subtitle() : string {    
    return (typeof this.itemsFound == 'undefined') ? "As melhores notícias, você encontra aqui!" : "Encontramos um total de " + this.itemsFound + " resultados para a sua busca";
  }
  

}
