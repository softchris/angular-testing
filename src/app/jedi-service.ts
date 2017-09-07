import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import "rxjs/add/operator/map";

@Injectable()
export class JediService {
  apiUrl: string = 'something';

  constructor(private http: Http, ) {}

  getJedis() {
    return this.http.get(`${this.apiUrl}/jedis`)
                    .map(res => res.json().data);
  }
}