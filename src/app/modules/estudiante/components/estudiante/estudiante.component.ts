import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'estudiante',
    templateUrl: './estudiante.component.html',
})
export class EstudianteComponent implements OnInit {
    @Input() nombre:string;
    @Input() edad:number;
    @Input() grado:string;   
    @Output() send= new EventEmitter(); 
    constructor(){}
    ngOnInit(){
        //inscribir(event){
          //  console.log('dd')
        //}
    }
}