import { Component, OnInit, Inject } from '@angular/core';
import {FormControl} from '@angular/forms';
import { ProfileProvider } from '../../provider/profile/profile.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  Inbox: Inbox[] = [];
  sender: string;
  subject: string;
  message: string;
  senddate: Date;

  constructor(private profileProvider: ProfileProvider, public thisDialogRef: MatDialogRef<MessageComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {

   }

  ngOnInit() {
  }

  sendMessage(event){
      const data = {
        sender: this.sender,
        subject: this.subject,
        message: this.message
      }
      this.profileProvider.getInbox(data)
      .subscribe(res => {
        this.Inbox.push(res);
      });
      this.thisDialogRef.close('Confirm');
  }
  onCloseCancel(){
    this.thisDialogRef.close('Confirm');
  }
}

export class Inbox {
    sender: string;
    subject: string;
    message: string;
}
