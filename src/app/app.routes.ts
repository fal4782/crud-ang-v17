import { Routes } from '@angular/router';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicPTableComponent } from './dynamic-p-table/dynamic-p-table.component';
import { PTableComponent } from './p-table/p-table.component';

export const routes: Routes = [
  { path: 'ag-grid', component: AgGridComponent },
  { path: 'form', component: DynamicFormComponent },
  { path: 'dynamic-p-table', component: DynamicPTableComponent },
  { path: 'p-table', component: PTableComponent },
  { path: '', redirectTo: '/p-table', pathMatch: 'full' },
];
