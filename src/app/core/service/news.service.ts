import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsModel } from '../models/news.model';

@Injectable({
  providedIn: 'root'
})

/** Serviço que realiza a comunicação com a API externa para a busca de notícias */
export class NewsService {
  baseUrl = "https://5cf9ae9df26e8c00146cff8d.mockapi.io/api/v1/post/";
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(
    private httpClient: HttpClient
  ) { }

  /**
   * Busca o preview de todas as notícias 
   */
  public getNewsPreview(): Observable<Array<NewsModel>> {
    return this.httpClient.get<Array<NewsModel>>(this.baseUrl);
  }

  /**
   * Busca a notícia especificada pelo usuário
   * @param id da notícia correspondente
  */
  public getNews(id: String): Observable<NewsModel>  {
    return this.httpClient.get<NewsModel>(this.baseUrl + id);
  }

  /**
   * Publica uma nova notícia
   * @param news: Nova notícia
   */
  public postNews(news: any): Observable<NewsModel> {
    return this.httpClient.post<any>(this.baseUrl, news, this.httpOptions);
  }
}
