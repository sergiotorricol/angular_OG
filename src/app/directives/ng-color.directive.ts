import { Directive, ElementRef, Input, Output, HostListener } from '@angular/core';
import { INFERRED_TYPE } from '@angular/compiler/src/output/output_ast';

@Directive({
    selector: '[appNgColor]'
})
export class NgColorDirective {

    @Input('appNgColor') color: string;
    @Input() secondColor:string;

    @HostListener('mouseenter') onMouseEnter(){
        console.log('MOUSE ENTER');
        this.changeColor(this.color);
    }

    @HostListener('mouseleave') onMouseLeave(){
        console.log('MOUSE LEAVE');
        this.changeColor(this.secondColor);
    }


    constructor(private el: ElementRef){
        console.log('ELEMENT REF: ', el);
        el.nativeElement.style.backgroundColor=this.color;   
    }

    changeColor(color:string){
        this.el.nativeElement.style.backgroundColor=color; 
    }

}