import { Directive, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';
import { OuterSubscriber } from 'rxjs/internal/OuterSubscriber';

@Directive({
    selector: '[appNgFocus]'
})
export class NgFocusDirective {

    @Output() appNgFocus = new EventEmitter();

    @HostListener('document:click', ['$event', '$event.target']) clickOutside(event, eventTarget) {
        console.log('Hiciste click!', this.el.nativeElement.contains(eventTarget))
        const aux = this.el.nativeElement.contains(eventTarget);
        if(!aux){
            this.appNgFocus.emit('Se hizo click afuera.')
        }
    }

    constructor(private el: ElementRef){ }

}