import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileProvider {
  result: any;
  constructor(public http:Http) {}

  getName(){
    return this.http.get('pController')
    .map(result => this.result = result.json());
  }
  getWeather(){
    return this.http.get('weather')
    .map(result => this.result = result.json());
  }
  getBlog(){
    return this.http.get('myblogs')
    .map(result => this.result = result.json());
  }
}
