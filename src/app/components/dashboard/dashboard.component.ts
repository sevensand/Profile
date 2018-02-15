import { Component, OnInit } from '@angular/core';
import { ProfileProvider } from '../../provider/profile/profile.service';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {
today = Date.now();
dataChart: Object;
title: string;


  dataSource = new MyDataSource(this.profileProvider);
  displayedColumns = ['image', 'title', 'mydate'];
  weathercountry = [];

  constructor(private profileProvider: ProfileProvider) {
    this.profileProvider.getWeather()
    .subscribe((res) => {
        this.weathercountry.push(JSON.parse(res));
    });

    this.title = "";
    this.dataChart = {
      "chart": {
        "caption": "SITE VISITS",
        "bgColor": "#424242",
        "bgAlpha":"100",
        "bgImageDisplayMode":"stretch",
        "theme" : "fint",
        "baseFontColor": "#0066cc",
        "outCnvBaseFontColor": "#0066cc",
      },
      "data": [{
       "label": "ASIA",
        "value": "175"
     }, {
       "label": "EUROPE",
       "value": "52"
     }, {
       "label": "AMERICA",
       "value": "87"
     }, {
       "label": "AUSTRALIA",
       "value": "23"
     }, {
       "label": "AFRICA",
       "value": "15"
     }]

    }

  }

  ngOnInit() {

  }

}

export interface User {
  name: string;
}

export class MyDataSource extends DataSource<any> {
  constructor(private profileProvider: ProfileProvider) {
    super();
  }

  connect(): Observable<User[]> {
    return this.profileProvider.getBlog();
  }

  disconnect() {}
}
