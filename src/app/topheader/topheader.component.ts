import { Component, OnInit, Inject } from '@angular/core';
import {FormControl} from '@angular/forms';
import { ProfileProvider } from '../provider/profile/profile.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { DialogComponent } from '../components/dialog/dialog.component';
import { MessageComponent } from '../components/message/message.component';
@Component({
  selector: 'app-topheader',
  templateUrl: './topheader.component.html',
  styleUrls: ['./topheader.component.css'],

})
export class TopheaderComponent implements OnInit {
  date = new FormControl(new Date());
  name: Array<any>;
  dialogResult = "";
  dialogMessage = "";
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
      this.dialogResult = result;
    })
  }

  sendMessage() {
    let dialogMess = this.dialog.open(MessageComponent,{
      width: '600px'
    });
    dialogMess.afterClosed().subscribe(result => {
      this.dialogMessage = result;
    })
  }

}
