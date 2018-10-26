import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'sort' })
export class SortPipe implements PipeTransform {
  transform(array: Array<Object> = []): Array<Object> {
    array.sort((a: any, b: any) => {
      if (a.start.dateTime < b.start.dateTime) {
        return -1;
      } else if (a.start.dateTime > b.start.dateTime) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}
