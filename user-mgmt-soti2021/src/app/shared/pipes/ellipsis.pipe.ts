import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis', // name of the pipe
})
export class EllipsisPipe implements PipeTransform {

  // transform info from one format to another
  // transform method should return data mandatorily
  transform(value: string, ...args: number[]): string { // args will fetch you the param of the pipe
    console.log(value);

    value = value.substr(0, args[0]);
    return value + '...';
  }

}
