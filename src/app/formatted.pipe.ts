import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'formattedpipe'
})

export class FormattedPipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        return "banana" + value;
    }
}