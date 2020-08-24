import { Component, OnInit, Input, Output, EventEmitter, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChange } from '@angular/core';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html'

})
export class TestComponent implements OnInit//, OnChanges,
//DoCheck, AfterContentInit, AfterContentChecked,
//AfterViewInit, AfterViewChecked, OnDestroy
{
    
    /*intermediaria:string;
    @Input()
        get name(){
            return this.intermediaria;
        }
        set name(name:string){
            this.intermediaria='Holaaa '+name;
        }


    @Input() lastName:string;
    
    
    @Input() age: number;
    @Input() description: string;
    @Output() clickSave = new EventEmitter();*/
    constructor(){

    }

    ngOnInit(){
        //console.log('ON INIT', this.name);
    }
    /*onClickSave(){
        this.clickSave.emit({
            name: this.name,
            age: this.age,
            description: this.description
        });
    }

    ngOnChanges(changes: SimpleChange){
        if(changes && changes.lastName && changes.lastName.currentValue) {
            console.log('ON CHANGES', changes.lastName.currentValue);
            const aux = 'HOLA' + changes.lastName.currentValue;
            this.lastName = aux;
         }
    }

    ngDoCheck(){
        console.log('DO CHECK')
    }
    ngAfterContentInit(){
        console.log('AFTER CONTENT INIT')
    }
    ngAfterContentChecked(){
        console.log('AFTER CONTENT CHECKED')
    }
    ngAfterViewInit(){
        console.log('AFTER VIEW INIT')
    }
    ngAfterViewChecked(){
        console.log('AFTER VIEW CHECKED')
    }
    ngOnDestroy(){
        console.log('ON DESTROY')
    }*/
}



class persona {
    name: string
    age: number
    constructor(){

    }
    getName(){
        return name;
    }
    setName(name:string){
        this.name=name;
    }
}