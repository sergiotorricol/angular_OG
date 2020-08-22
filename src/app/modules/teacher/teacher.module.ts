import {NgModule} from '@angular/core';
import {CommonModule}from '@angular/common';

import { Teacher1Component } from './components/teacher1/teacher1.component';
import { Teacher2Component } from './components/teacher2/teacher2.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports:[
        CommonModule,
        SharedModule
    ],
    declarations:[
        Teacher1Component,
        Teacher2Component
    ],
    exports:[
        Teacher1Component,
        Teacher2Component
    ]
})
export class TeacherModule{}