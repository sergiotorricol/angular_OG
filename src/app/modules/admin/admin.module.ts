import {NgModule} from '@angular/core';
import {CommonModule}from '@angular/common';
import{Admin1Component}from './components/admin1/admin1.component';
import{Admin2Component}from './components/admin2/admin2.component';
import{Admin3Component}from './components/admin3/admin3.component';
@NgModule({
    imports:[
        CommonModule
    ],
    declarations:[
        Admin1Component,
        Admin2Component,
        Admin3Component
    ],
    exports:[
        Admin1Component,
        Admin2Component,
        Admin3Component
    ]
})
export class AdminModule{}