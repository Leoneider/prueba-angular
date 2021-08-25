import { FormControl } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';
import { debounceTime } from 'rxjs/operators';

@Pipe({
  name: 'filterUserByName',
})
export class FilterUserByNamePipe implements PipeTransform {
  transform(items: any[], filter: string): any {
    if (!items || !filter || filter.length < 3) {
      return items;
    }
    return items.filter((item) => item.first_name.indexOf(filter) !== -1);
  }
}
