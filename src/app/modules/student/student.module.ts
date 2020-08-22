import {NgModule} from '@angular/core';
import {CommonModule}from '@angular/common';
import { ParentsModule } from '../parents/parents.module';
import { SharedModule } from '../shared/shared.module';

import{Student1Component}from './components/student1/student1.component';
import{Student2Component}from './components/student2/student2.component';

@NgModule({
    imports:[
        CommonModule,
        ParentsModule,
        SharedModule
    ],
    declarations:[
        Student1Component,
        Student2Component
    ],
    exports:[
        Student1Component,
        Student2Component
    ]
})
export class StudentModule{}