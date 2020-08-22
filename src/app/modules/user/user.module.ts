import {NgModule} from '@angular/core';
import {CommonModule}from '@angular/common';
import{User1Component}from './components/user1/user1.component';
import{User2Component}from './components/user2/user2.component';
@NgModule({
    imports:[
        CommonModule
    ],
    declarations:[
               
        User1Component,
        User2Component
    ],
    exports:[
        User1Component,
        User2Component
    ]
})
export class UserModule{}