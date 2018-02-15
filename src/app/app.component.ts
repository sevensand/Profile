import { Component } from '@angular/core';
import { ProfileProvider } from './provider/profile/profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name: Array<any>;
  constructor(private profileProvider: ProfileProvider) {
    this.profileProvider.getName()
    .subscribe(res => this.name = res);
  }

}
