import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.scss']
})
export class PoliciesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
show(){
  this.isValid= true
}
hide(){
  this.isValid= false
}
  isValid:boolean= false

}
