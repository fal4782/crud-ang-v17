import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { PTableComponent } from './p-table/p-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, DashboardComponent, DynamicFormComponent, AgGridComponent, PTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'crud-ang';
}
