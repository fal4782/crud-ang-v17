import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import menuItems from './menuItems.json';
import actions from './actions.json';

interface Action {
  [key: string]: boolean;
}
interface Permission {
  label: string;
  actions: Action;
}

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    CheckboxModule,
    FormsModule,
    DropdownModule,
  ],
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent {
  prerequisite() {
    this.loadPermissionNames();
    this.loadActionsNames();
    this.populatePermissions();
  }

  ngOnInit() {
    this.prerequisite();
  }

  permissions: Permission[] = [];
  permissionNames: string[] = [];
  actions: string[] = [];

  loadPermissionNames() {
    this.permissionNames = menuItems.response.map(
      (item: any) => item.defaultMenu
    );
    console.log(this.permissionNames);
    
  }

  loadActionsNames() {
    this.actions = actions.map((item: any) => item.actionName);
    console.log(this.actions);
    
  }

  populatePermissions() {
    this.permissions = this.permissionNames.map((name: string) => {
      const actionsObj: Action = {};
      this.actions.forEach((action) => {
        actionsObj[action] = false;
      });
      return {
        label: name,
        actions: actionsObj,
      };
    });
  }

  updatePermissions(
    permission: Permission,
    action: string,
    isChecked: boolean
  ) {
    // console.log(permission, action, isChecked);
    permission.actions[action] = isChecked;
    // console.log(this.permissions);
  }
}
