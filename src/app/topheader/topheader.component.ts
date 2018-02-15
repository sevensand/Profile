import { Component, OnInit, Inject } from '@angular/core';
import {FormControl} from '@angular/forms';
import { ProfileProvider } from '../provider/profile/profile.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { DialogComponent } from '../components/dialog/dialog.component';
@Component({
  selector: 'app-topheader',
  templateUrl: './topheader.component.html',
  styleUrls: ['./topheader.component.css'],

})
export class TopheaderComponent implements OnInit {
  date = new FormControl(new Date());
  name: Array<any>;
  dialogResult = "";
  constructor(private profileProvider: ProfileProvider, public dialog: MatDialog) {
    this.profileProvider.getName()
    .subscribe(res => {
      this.name = res;
    });

  }
  ngOnInit() {
  }

  openDialog() {
    let dialogref = this.dialog.open(DialogComponent, {
      width: '600px'
    }) ;

    dialogref.afterClosed().subscribe(result => {
      console.log('test closed: ${result}');
      this.dialogResult = result;
    })
  }

}
