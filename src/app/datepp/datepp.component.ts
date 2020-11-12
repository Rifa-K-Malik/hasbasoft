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
  selector: 'app-datepp',
  templateUrl: './datepp.component.html',
  styleUrls: ['./datepp.component.scss']
})
export class DateppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  };

  date: Date[] = [
    {value: 1-0, viewValue: 1},
    {value: 2-1, viewValue: 2},
    {value: 3-2, viewValue: 3},
    {value: 4-0, viewValue: 4},
    {value: 5-1, viewValue: 5},
    {value: 6-2, viewValue: 6},
    {value: 7-0, viewValue: 7},
    {value: 8-1, viewValue: 8},
    {value: 9-2, viewValue: 9},
    {value: 10-0, viewValue: 10},
    {value: 11-1, viewValue: 11},
    {value: 12-2, viewValue: 12}
  ];

  month: Month[] = [
    {value: 'Jan-0', viewValue: 'Jan'},
    {value: 'Feb-1', viewValue: 'Feb'},
    {value: 'Mar-2', viewValue: 'Mar'},
    {value: 'Apr-3', viewValue: 'Apr'},
    {value: 'May-4', viewValue: 'May'},
    {value: 'Jun-5', viewValue: 'Jun'},
    {value: 'Jul-6', viewValue: 'Jul'},
    {value: 'Aug-7', viewValue: 'Aug'},
    {value: 'Sep-8', viewValue: 'Sep'},
    {value: 'Oct-9', viewValue: 'Oct'},
    {value: 'Nov-10', viewValue: 'Nov'},
    {value: 'Dec-11', viewValue: 'Dec'}
  ];

  year: Year[] = [
    {value: 1990-0, viewValue: 1990},
    {value: 1991-1, viewValue: 1991},
    {value: 1992-2, viewValue: 1992},
    {value: 1993-0, viewValue: 1993},
    {value: 1994-1, viewValue: 1994},
    {value: 1995-2, viewValue: 1995},
    {value: 1996-0, viewValue: 1996},
    {value: 1997-1, viewValue: 1997},
    {value: 1998-2, viewValue: 1998}
  ]

}
