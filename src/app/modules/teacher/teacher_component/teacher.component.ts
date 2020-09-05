import {Component,OnInit}from '@angular/core';
import {Router} from '@angular/router';
@Component({
    selector:'teacher_component',
    templateUrl:'./teacher.component.html',    
})
export class TeacherComponent implements OnInit{
    constructor(private router:Router){}
    ngOnInit(){}
}