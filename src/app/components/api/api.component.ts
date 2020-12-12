import { Component, OnInit } from '@angular/core';
import { GetemployesService } from 'src/app/services/getemployes.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {
  Employe: any = []

  constructor(
    private employee: GetemployesService
  ) { }

  ngOnInit() {
    this.GetEmp()
  }
  GetEmp() {
    this.employee.Getemployes().subscribe((result) => {
      this.Employe = result

    })
  }
}
