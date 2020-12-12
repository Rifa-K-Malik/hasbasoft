import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetemployesService {
  url: string = 'http://demo2699825.mockable.io/employees'

  constructor(
    private http: HttpClient
  ) { }
  Getemployes(): Observable<any> {
    return this.http.get<any>(`${this.url}`)
  }

}
