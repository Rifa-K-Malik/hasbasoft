import { AddTravellerComponent } from './components/add-traveller/add-traveller.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private dialog:MatDialog
  ) { }

  ngOnInit(): void {
    
  }

  OpenDialog(){
    this.dialog.open(AddTravellerComponent,{
      height:'90vh',
      width:'60%'
    })
  }
}
