import { FormControl, FormBuilder } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';
import { ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WorkflowDoiModuleComponent } from '../components/addons/workflow-doi-module/workflow-doi-module.component';
import { WorkflowDoiComponent } from '../components/addons/workflow-doi/workflow-doi.component';



export class DoiDirectives {


    constructor(private router: Router, private dialog: MatDialog) { }

    selection = new SelectionModel<any>(true, []);
    // Methods for Checkbox Selection Starts
    masterToggle(dataSourceData) {
        this.isAllSelected(dataSourceData)
            ? this.selection.clear()
            : dataSourceData.forEach(row =>
                this.selection.select(row)
            );
    }

    isAllSelected(dataSourceData) {
        const numSelected = this.selection.selected.length;
        const numRows = dataSourceData.length;
        return numSelected === numRows;
    }

    checkboxLabel(dataSourceData, row?: any): string {
        if (!row) {
            return `${this.isAllSelected(dataSourceData) ? 'select' : 'deselect'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'
            } row ${row.position + 1}`;
    }

    workflowDetailsse(data?: any): void {
        if (data) {
            const dialogRef = this.dialog.open(WorkflowDoiComponent, {
                width: '1200px',
                data: data,
            });

            dialogRef.afterClosed().subscribe(result => {
                console.log('The dialog was closed');
            });
        } else {
            const dialogRef = this.dialog.open(WorkflowDoiComponent, {
                width: '1200px',
            });

            dialogRef.afterClosed().subscribe(result => {
                console.log('The dialog was closed');
            });
        }
    }
    workflowDetails(data?: any): void {
        if (data) {
            const dialogRef = this.dialog.open(WorkflowDoiModuleComponent, {
                width: '1200px',
                data: data,
            });

            dialogRef.afterClosed().subscribe(result => {
                console.log('The dialog was closed');
            });
        } else {
            const dialogRef = this.dialog.open(WorkflowDoiModuleComponent, {
                width: '1200px',
            });

            dialogRef.afterClosed().subscribe(result => {
                console.log('The dialog was closed');
            });
        }
    }




}