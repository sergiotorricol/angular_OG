import {NgModule} from '@angular/core';
import {CommonModule}from '@angular/common';
import{Shared1Component}from './components/shared1/shared1.component';
import {Shared2Directive}from './directives/shared2/shared2.directive'
import { Shared3Pipe } from './pipes/shared3/shared3.pipe';

@NgModule({
    imports:[
        CommonModule
    ],
    declarations:[
        Shared1Component,
        Shared2Directive,
        Shared3Pipe
    ],
    exports:[
        Shared1Component,
        Shared2Directive,
        Shared3Pipe
    ]
})
export class SharedModule{}