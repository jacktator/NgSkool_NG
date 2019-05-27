import { Pipe, PipeTransform } from '@angular/core';
import { School } from '@app/home/school.service';

@Pipe({
  name: 'schoolfilter'
})
export class SchoolFilterPipe implements PipeTransform {
  transform(items: School[], searchText?: string): any {
    if (!items) {
      return [];
    } else {
      searchText = searchText.toLowerCase();
      return items.filter(
        school => school.name.toLowerCase().includes(searchText) || school.address.toLowerCase().includes(searchText)
      );
    }
  }
}
