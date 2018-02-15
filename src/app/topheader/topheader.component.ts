import { Component, OnInit, Inject } from '@angular/core';
import {FormControl} from '@angular/forms';
import { ProfileProvider } from '../provider/profile/profile.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-topheader',
  templateUrl: './topheader.component.html',
  styleUrls: ['./topheader.component.css'],

})
export class TopheaderComponent implements OnInit {
  date = new FormControl(new Date());
  name: Array<any>;
  constructor(private profileProvider: ProfileProvider, public dialog: MatDialog) {
    this.profileProvider.getName()
    .subscribe(res => {
      this.name = res;
    });

  }
  ngOnInit() {
  }

  openDialog() {
    const dialogRef = this.dialog.open(TopheaderComponent, {
      height: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
