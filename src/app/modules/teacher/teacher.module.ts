import {NgModule} from '@angular/core';
import {CommonModule}from '@angular/common';
import { TeacherComponent } from './teacher_component/teacher.component';
import { SharedModule } from '../shared/shared.module';
import { TeacherRoutingModule } from './teacher-routing.module';
import { FormsModule } from '@angular/forms';
@NgModule({
    imports:[
        CommonModule,
        SharedModule,
        TeacherRoutingModule,
        FormsModule
    ],
    declarations:[
        TeacherComponent
    ]
})
export class TeacherModule{}