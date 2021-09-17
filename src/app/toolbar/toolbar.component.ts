import { Component, OnInit } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})

export class ToolbarComponent implements OnInit {
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addTodo() {
    const dialogRef = this.dialog.open(FormComponent, {
      height: '35%',
      width: '30%',
    })
    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit()
    });  
  //  console.log('lol'); // add link with back end and form
  }

}
