import { Routes } from '@angular/router';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';

export const routes: Routes = [
  { path: '', component: AgGridComponent },
  { path: 'form', component: DynamicFormComponent },
];
