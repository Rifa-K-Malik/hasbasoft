import { Component } from '@angular/core';

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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hasbap';
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
  ]

}
