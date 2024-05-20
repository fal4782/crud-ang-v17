import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeService } from '../services/employee.service';
import { TableModule } from 'primeng/table';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TableModule,HttpClientModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{

  employees: Employee[] = [];
  cols: any[] = [];
  constructor( private employeeService:EmployeeService){}
  ngOnInit(): void {
     this.employeeService.getEmployee().subscribe(data => {
      this.employees = data;
     });

     this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'name', header: 'Name' },
      { field: 'age', header: 'Age' },
      { field: 'gender', header: 'Gender' },
      { field: 'dob', header: 'DOB' },
      { field: 'address', header: 'Address' }
    ];
  }

}
