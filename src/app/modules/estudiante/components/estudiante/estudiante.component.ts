import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'estudiante',
    templateUrl: './estudiante.component.html',
})
export class EstudianteComponent implements OnInit {
    @Input() nombre:string;
    @Input() edad:number;
    @Input() grado:string;    
    constructor(){}
    ngOnInit(){}
}