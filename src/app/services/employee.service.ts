import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Employee {
  id: number;
  name: string;
  age: number;
  gender: string;
  dob: string;
  address: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url = '../../../assets/employees.json'

  

  constructor(private http: HttpClient) { }


  getEmployee():Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url);
  }
}
