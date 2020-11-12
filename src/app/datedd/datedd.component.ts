import { Component, OnInit } from '@angular/core';

interface Date {
  value: number;
  viewValue: number;
}

interface Month {
  value: string;
  viewValue: string;
}

interface Year {
  value: number;
  viewValue: number;
}

@Component({
  selector: 'app-datedd',
  templateUrl: './datedd.component.html',
  styleUrls: ['./datedd.component.scss']
})
export class DateddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  };

  date: Date[] = [
    {value: 0-0, viewValue: 0},
    {value: 1-1, viewValue: 1},
    {value: 2-2, viewValue: 2}
  ];

  month: Month[] = [
    {value: 'Jan-0', viewValue: 'Jan'},
    {value: 'Feb-1', viewValue: 'Feb'},
    {value: 'March-2', viewValue: 'March'}
  ];

  year: Year[] = [
    {value: 1990-0, viewValue: 1990},
    {value: 1991-1, viewValue: 1991},
    {value: 1992-2, viewValue: 1992}
  ]

}
