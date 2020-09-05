import {NgModule} from '@angular/core';
import {CommonModule}from '@angular/common';
import{ SharedComponent }from './shared_component/shared.component';
import { SharedDirective }from './shared_directive/shared.directive'
@NgModule({
    imports:[
        CommonModule
    ],
    declarations:[
        SharedComponent,
        SharedDirective
    ],
    exports:[
        SharedComponent,
        SharedDirective
    ]
})
export class SharedModule{}