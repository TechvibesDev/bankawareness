import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  apiUrl = environment.api;
  constructor(private http: HttpClient) { }
  category() {
    return this.http.get<any>(`${this.apiUrl}api/categories`);
  }
  popular() {
    return this.http.get<any>(`${this.apiUrl}api/popular`);
  }
  load(page) {
    return this.http.get<any>(`${this.apiUrl}api/load/${page}`);
  }
  loadById(page: number, id: number) {
    return this.http.get<any>(`${this.apiUrl}api/loadById/${page}/${id}`);
  }
  details(id: number) {
    return this.http.get<any>(`${this.apiUrl}api/details/${id}`);
  }
  pages(page: string) {
    return this.http.get<any>(`${this.apiUrl}api/pages/${page}`);
  }
}
