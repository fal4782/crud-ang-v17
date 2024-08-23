import { Routes } from '@angular/router';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicPTableComponent } from './dynamic-p-table/dynamic-p-table.component';
import { PTableComponent } from './p-table/p-table.component';
import { GridComponent } from './grid/grid.component';
import { ReactiveIterativeFormComponent } from './reactive-iterative-form/reactive-iterative-form.component';
import { FilterDropdownComponent } from './filter-dropdown/filter-dropdown.component';
import { ApexChartsComponent} from './apex-charts/apex-charts.component'

export const routes: Routes = [
  { path: 'ag-grid', component: AgGridComponent },
  { path: 'form', component: DynamicFormComponent },
  { path: 'dynamic-p-table', component: DynamicPTableComponent },
  { path: 'p-table', component: PTableComponent },
  { path: 'grid', component: GridComponent },
  {
    path: 'reactive-iterative-form',
    component: ReactiveIterativeFormComponent,
  },
  {
    path: 'filter-dropdown',
    component: FilterDropdownComponent,
  },
  {
    path:'apex-charts',
    component: ApexChartsComponent,
  },
  { path: '', redirectTo: '/apex-charts', pathMatch: 'full' },
];
