import {Component,OnInit}from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector:'student_component',
    templateUrl:'./student.component.html',    
})
export class StudentComponent implements OnInit{
    constructor(private router:Router){}
    ngOnInit(){}
}