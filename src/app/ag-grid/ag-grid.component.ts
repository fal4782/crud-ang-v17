import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { ColDef, GridOptions } from 'ag-grid-community';
import { AgGridModule } from 'ag-grid-angular';
import data from '../ag-grid/data.json';

const headerConfig = data.headerConfig;
const records = data.records;


@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.scss'],
  standalone: true,
  imports: [AgGridModule, CommonModule],
})
export class AgGridComponent implements OnInit {

  isBrowser: boolean;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    this.setupGrid();
  }

  columnDefs: ColDef[] = [];
  rowData: any[] = [];
  gridOptions: GridOptions = {};

  setupGrid() {
    this.columnDefs = headerConfig.map((config: any) => {
      return {
        headerName: config.displayKey,
        field: config.jsonNode,
        type: config.dataType,
        width: config.width,
        sortable: config.sortable,
        resizable: config.resizable,
        filter: config.filter,
        floatingFilter: config.floatingFilter,
        cellStyle: {
          textAlign: config.textAlign,
          color: config.textColor,
          backgroundColor: config.backgroundColor,
        },
      };
    });

    this.rowData = records;

    this.gridOptions = {
      domLayout: 'autoHeight',
    };
  }
}
