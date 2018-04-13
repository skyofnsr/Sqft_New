﻿import { AlertModule } from 'ngx-bootstrap';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
// import { AlertBoxComponent } from '../shared/alertbox.component';

import { DataGrid } from '../shared/datagrid/datagrid.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [     
        // AlertBoxComponent,
        
        DataGrid
    ],   
    imports: [
        FormsModule,      
        AlertModule.forRoot(), 
        CommonModule
    ],
    exports: [
        // AlertBoxComponent,
        
        DataGrid
    ],
    // providers:[AlertBoxComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class SharedModule { }
