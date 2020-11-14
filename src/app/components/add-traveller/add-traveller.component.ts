import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
interface Nation {
  value: string;
  viewValue: string;
}
interface Gender {
  value: string;
  viewValue: string;
}

interface Passport {
  value: string;
  viewValue: string;
}
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
  selector: 'app-add-traveller',
  templateUrl: './add-traveller.component.html',
  styleUrls: ['./add-traveller.component.scss']
})
export class AddTravellerComponent implements OnInit {
  title = 'hasbap';
  constructor() { }

  myReactiveForm:FormGroup

  nationality: Nation[] = [
    {value: 'Afghan-0', viewValue: 'Afghan'},
    {value: 'Argentinian-1', viewValue: 'Argentinian'},
    {value: 'Bangladeshi-2', viewValue: 'Bangladeshi'},
    {value: 'Chinese-3', viewValue: 'Chinese'},
    {value: 'Danish-4', viewValue: 'Danish'},
    {value: 'Egyptian-5', viewValue: 'Egyptian'},
    {value: 'French-6', viewValue: 'French'},
    {value: 'Indian-7', viewValue: 'Indian'}
  ];

  gender: Gender[] = [
    {value: 'Male-0', viewValue: 'Male'},
    {value: 'Female-1', viewValue: 'Female'},
    {value: 'Other-2', viewValue: 'Other'}
  ];

  passport: Passport[] = [
    {value: 'Afghanistan-0', viewValue: 'Afghanistan'},
    {value: 'Bangladesh-1', viewValue: 'Bangladesh'},
    {value: 'Canada-2', viewValue: 'Canada'},
    {value: 'Denmark-3', viewValue: 'Denmark'},
    {value: 'Egypt-4', viewValue: 'Egypt'},
    {value: 'France-5', viewValue: 'France'},
    {value: 'Greece-6', viewValue: 'Greece'},
    {value: 'India-7', viewValue: 'India'}
  ];
  date: Date[] = [
    {value: 1, viewValue: 1},
    {value: 2, viewValue: 2},
    {value: 3, viewValue: 3},
    {value: 4, viewValue: 4},
    {value: 5, viewValue: 5},
    {value: 6, viewValue: 6},
    {value: 7, viewValue: 7},
    {value: 8, viewValue: 8},
    {value: 9, viewValue: 9},
    {value: 10, viewValue: 10},
    {value: 11, viewValue: 11},
    {value: 12, viewValue: 12},
    {value: 13, viewValue: 13},
    {value: 14, viewValue: 14},
    {value: 15, viewValue: 15},
    {value: 16, viewValue: 16},
    {value: 17, viewValue: 17},
    {value: 18, viewValue: 18},
    {value: 19, viewValue: 19},
    {value: 20, viewValue: 20},
    {value: 21, viewValue: 21},
    {value: 22, viewValue: 22},
    {value: 23, viewValue: 23},
    {value: 24, viewValue: 24},
    {value: 25, viewValue: 25},
    {value: 26, viewValue: 26},
    {value: 27, viewValue: 27},
    {value: 28, viewValue: 28},
    {value: 29, viewValue: 29},
    {value: 30, viewValue: 30},
    {value: 31, viewValue: 31}

  ];

  month: Month[] = [
    {value: 'January-0', viewValue: 'January'},
    {value: 'February-1', viewValue: 'February'},
    {value: 'March-2', viewValue: 'March'},
    {value: 'April-3', viewValue: 'April'},
    {value: 'May-4', viewValue: 'May'},
    {value: 'June-5', viewValue: 'June'},
    {value: 'July-6', viewValue: 'July'},
    {value: 'August-7', viewValue: 'August'},
    {value: 'September-8', viewValue: 'September'},
    {value: 'October-9', viewValue: 'October'},
    {value: 'November-10', viewValue: 'November'},
    {value: 'December-11', viewValue: 'December'}
  ];

  year: Year[] = [
    {value: 1990, viewValue: 1990},
    {value: 1991, viewValue: 1991},
    {value: 1992, viewValue: 1992},
    {value: 1993, viewValue: 1993},
    {value: 1994, viewValue: 1994},
    {value: 1995, viewValue: 1995},
    {value: 1996, viewValue: 1996},
    {value: 1997, viewValue: 1997},
    {value: 1998, viewValue: 1998},
    {value: 1999, viewValue: 1999},
    {value: 2000, viewValue: 2000},
    {value: 2001, viewValue: 2001},
    {value: 2002, viewValue: 2002},
    {value: 2003, viewValue: 2003}
  ];
 
  ngOnInit() {
    this.myReactiveForm = new FormGroup({
      'firstname': new FormControl('' , [Validators.required]),
      'lastname': new FormControl('' , [Validators.required]),
      'dob date': new FormControl('' , [Validators.required]),
      'dob month': new FormControl('' , [Validators.required]),
      'dob year': new FormControl('' , [Validators.required]),
      'gender': new FormControl('' , [Validators.required]),
      'nationality': new FormControl('' , [Validators.required]),
      'passportno': new FormControl('' , [Validators.required]),
      'pexpirydate date': new FormControl('' , [Validators.required]),
      'pexpirydate month': new FormControl('' , [Validators.required]),
      'pexpirydate year': new FormControl('' , [Validators.required]),
      'pissuancecountry': new FormControl('' , [Validators.required])

    });
  }

  onSubmit(){
    console.log(this.myReactiveForm.value);
  }

}
 