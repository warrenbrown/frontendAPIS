import { Injectable } from '@angular/core';
import { Stadium } from './stadium';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StadiumsService {
  model = 'stadiums';
  BASE_URL = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getUrl() {
    return `${this.BASE_URL}${this.model}`;
  }

  getUrlForId(id) {
    return `${this.getUrl()}/${id}`
  }

  all() {
    return this.http.get(`${this.BASE_URL}${this.model}`)
  }

  create(stadium) {
    return this.http.post(this.getUrl(), stadium)
  }

  update(stadium) {
    return this.http.patch(this.getUrlForId(stadium.id), stadium)
  }

  delete(stadiumId) {
    return this.http.delete(this.getUrlForId(stadiumId))
  }
 }
