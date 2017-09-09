import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class JediService {
  apiUrl: string = 'something';

  constructor(private http: HttpClient ) {}

  getJedis() {
    return this.http.get(`/api/jedis`);
  }

  getJedi(id) {
    let route = `/api/jedis/${id}`;
    console.log('route',route);
    return this.http.get(route);
  }
}