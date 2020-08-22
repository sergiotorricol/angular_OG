import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'testpipe'
})
export class TestPipe implements PipeTransform {
    
    transform(value: any, args?: any): any {
        return 'Hi ' + value;
    }

}