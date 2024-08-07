import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import tableData from '../../assets/table-data.json';
import { Button } from 'primeng/button';

interface Column {
  field: string;
  header: string;
  type: string;
  sortable: boolean;
  resizable: boolean;
  filter: string;
  floatingFilter: boolean;
  textAlign: string;
  textColor: string;
  backgroundColor: string;
  width: number;
  includeInDownload: boolean;
}

@Component({
  selector: 'app-p-table',
  standalone: true,
  imports: [
    TableModule,
    CommonModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    MultiSelectModule,
    DropdownModule,
    FormsModule,
    Button,
  ],
  templateUrl: './dynamic-p-table.component.html',
  styleUrls: ['./dynamic-p-table.component.scss'],
})
export class DynamicPTableComponent implements OnInit {
  columns: any[] = [];
  records: any[] = [];
  globalFilterFields: string[] = [];

  ngOnInit() {
    this.columns = tableData.headerConfig.map((header) => ({
      field: header.jsonNode,
      header: header.displayKey,
      type: header.dataType,
      sortable: header.sortable,
      resizable: header.resizable,
      filter: header.filter,
      floatingFilter: header.floatingFilter,
      textAlign: header.textAlign,
      textColor: header.textColor,
      backgroundColor: header.backgroundColor,
      width: header.width,
      includeInDownload: header.includeInDownload !== false, //default true
    }));

    this.records = tableData.records;
    this.globalFilterFields = this.columns.map((col) => col.field);
  }

  applyGlobalFilter(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const filterValue = inputElement.value;
    (document.querySelector('p-table') as any).filterGlobal(
      filterValue,
      'contains'
    );
  }

  getFilterType(filter: string): string {
    switch (filter) {
      case 'agNumberColumnFilter':
        return 'numeric';
      case 'agTextColumnFilter':
        return 'text';
      default:
        return 'text';
    }
  }

  exportCSV(dt: any) {
    console.log('trying to export');
    console.log(dt);
    const columnsToExport = this.columns
      .filter((col) => col.includeInDownload)
      .map((col) => col.field);
    dt.exportCSV({ onlyColumns: columnsToExport });
    console.log("columns to export: ",columnsToExport);
    
  }
}
