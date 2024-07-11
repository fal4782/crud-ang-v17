import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import tableJson from './table-config.json';

import { ToggleButtonModule } from 'primeng/togglebutton';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-p-table',
  standalone: true,
  imports: [ToggleButtonModule, TableModule, FormsModule, CommonModule],
  templateUrl: './p-table.component.html',
  styleUrls: ['./p-table.component.scss'],
})

export class PTableComponent implements OnInit {
  balanceFrozen = false;
  statusFrozen = false;

  columns: any[] = [];
  records: any[] = [];

  ngOnInit(): void {
    this.getTableData();
  }

  getTableData(): void {
    let storedFrozenStatus = JSON.parse(localStorage.getItem('frozenStatus') || '{}');
    this.records = tableJson.records;
    this.columns = tableJson.headerConfig.map((col, index) => {
      let frozen = false;
      if (storedFrozenStatus[index] !== undefined) {
        frozen = storedFrozenStatus[index];
      }

      return {
        ...col,
        field: col.id,
        header: col.displayKey,
        frozen,
      };
    });
  }

  formatCurrency(value: number): string {
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  }

  toggleFrozenStates(index: number): void {
    this.columns[index].frozen = !this.columns[index].frozen;
    let storedFrozenStatus = JSON.parse(localStorage.getItem('frozenStatus') || '{}');
    let updatedFrozenStatus = {
      ...storedFrozenStatus,
      [`${index}`]: this.columns[index].frozen,
    };
    localStorage.setItem('frozenStatus', JSON.stringify(updatedFrozenStatus));
  }
}
