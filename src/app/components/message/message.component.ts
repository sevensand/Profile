import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(public thisDialogRef: MatDialogRef<MessageComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  onSend(){
    this.thisDialogRef.close('Confirm');
  }
}
