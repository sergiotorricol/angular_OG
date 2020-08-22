import { Directive, ElementRef } from '@angular/core';


@Directive({
  selector: 'shared2'
})
export class Shared2Directive {

  constructor(private el: ElementRef) { 
    console.log("Directiva Shared 2: ",el );
  }

}