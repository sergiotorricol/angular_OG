import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'enablepipe'
})

export class EnablePipe implements PipeTransform {
    transform(value: any, args?: any): any {
        if(value==="true"){
            return "YES";
          }else if(value==="false"){
          return "NO";
          }else{
            return "null"
          }
    }
}