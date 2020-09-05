import {NgModule} from '@angular/core';
import {CommonModule}from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { StudentComponent } from './student_component/student.component';
import { StudentRoutingModule } from './student-routing.module';
import { FormsModule } from '@angular/forms';
@NgModule({
    imports:[
        CommonModule,
        SharedModule,
        StudentRoutingModule,
        FormsModule
    ],
    declarations:[
        StudentComponent
    ]
})
export class StudentModule{}