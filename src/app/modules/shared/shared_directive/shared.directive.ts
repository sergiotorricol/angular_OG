import { Directive, ElementRef } from '@angular/core';
@Directive({
  selector: 'shared_directive'
})
export class SharedDirective {
  constructor(private el: ElementRef) { 
    console.log("Shared Directive: ",el );
  }
}