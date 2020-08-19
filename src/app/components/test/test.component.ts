import { Component, OnInit, Input, Output, EventEmitter, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-test',
    template: `
        <p>Componente Test 1</p>
        <p>Entrada NAME: {{name}}</p>
        <p>Entrada AGE: {{age}}</p>
        <p>Entrada DESCRIPTION: {{description}}</p>
        <button (click)="onClickSave()">Save</button>
        <div style="border: 1px solid red;">
        <p>TEST</p>
        <input type="text" [(ngModel)]="name">
        <p>VALOR VAR NAME: {{name}}</p>
        </div>
    `

})
export class TestComponent implements OnInit, OnChanges,
DoCheck, AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked, OnDestroy{
    @Input() name: string;
    @Input() age: number;
    @Input() description: string;
    @Output() clickSave = new EventEmitter();
    constructor(){

    }

    ngOnInit(){
        console.log('ON INIT')
    }
    onClickSave(){
        this.clickSave.emit({
            name: this.name,
            age: this.age,
            description: this.description
        });
    }
    ngOnChanges(){
        console.log('ON CHANGES')
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
    }
}