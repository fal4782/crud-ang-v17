import { Routes } from '@angular/router';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicPTableComponent } from './dynamic-p-table/dynamic-p-table.component';
import { PTableComponent } from './p-table/p-table.component';
import { GridComponent } from './grid/grid.component';
import { ReactiveIterativeFormComponent } from './reactive-iterative-form/reactive-iterative-form.component';
import { FilterDropdownComponent } from './filter-dropdown/filter-dropdown.component';
import { ApexDrilldownChartComponent } from './apex-drilldown-chart/apex-drilldown-chart.component';
import { ApexPieBarChartComponent } from './apex-pie-bar-chart/apex-pie-bar-chart.component';

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
    path: 'apex-drilldown-chart',
    component: ApexDrilldownChartComponent,
  },
  {
    path: 'apex-pie-bar-chart',
    component: ApexPieBarChartComponent,
  },
  { path: '', redirectTo: '/apex-pie-bar-chart', pathMatch: 'full' },
];
