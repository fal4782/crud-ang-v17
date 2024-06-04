import { Component, OnInit } from '@angular/core';
import { tableData } from './table-config';

import { ToggleButtonModule } from 'primeng/togglebutton';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';

export interface Country {
  name?: string;
  code?: string;
}

export interface Representative {
  name?: string;
  image?: string;
}

export interface Customer {
  id?: number;
  name?: string;
  country?: Country;
  company?: string;
  date?: string | Date;
  status?: string;
  activity?: number;
  representative?: Representative;
  verified?: boolean;
  balance?: number;
}

@Component({
  selector: 'app-p-table',
  standalone: true,
  imports: [ToggleButtonModule, TableModule, FormsModule],
  templateUrl: './p-table.component.html',
  styleUrls: ['./p-table.component.scss'],
})
export class PTableComponent implements OnInit {
  balanceFrozen = false;
  statusFrozen = false;
  customers: Customer[] = [];

  ngOnInit(): void {
    this.loadToggleStates();
    this.getTableData();
  }

  getTableData(): void {
    this.customers = tableData;
  }

  formatCurrency(value: number): string {
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  }

  private loadToggleStates(): void {
    this.balanceFrozen = JSON.parse(
      localStorage.getItem('balanceFrozen') || 'false'
    );
    this.statusFrozen = JSON.parse(
      localStorage.getItem('statusFrozen') || 'false'
    );
  }

  saveToggleStates(): void {
    localStorage.setItem('balanceFrozen', JSON.stringify(this.balanceFrozen));
    localStorage.setItem('statusFrozen', JSON.stringify(this.statusFrozen));
  }
}
