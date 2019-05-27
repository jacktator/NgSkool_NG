import { Pipe, PipeTransform } from '@angular/core';
import { School } from '@app/home/school.service';

@Pipe({
  name: 'schoolfilter'
})
export class SchoolFilterPipe implements PipeTransform {
  transform(schools: School[], searchText?: string, selectedState?: string): any {
    if (!schools) {
      // No array, return empty array
      return [];
    } else if (!searchText) {
      // schools not empty, but no search term
      if (!selectedState || selectedState === 'All') {
        return schools;
      } else {
        return schools.filter(school => school.state && school.state.toLowerCase() === selectedState.toLowerCase());
      }
    } else {
      // schools not empty, has search term
      searchText = searchText.toLowerCase();
      if (!selectedState || selectedState === 'All') {
        return schools.filter(
          school => school.name.toLowerCase().includes(searchText) || school.address.toLowerCase().includes(searchText)
        );
      } else {
        return schools.filter(
          school =>
            (school.name.toLowerCase().includes(searchText) || school.address.toLowerCase().includes(searchText)) &&
            (school.state && school.state.toLowerCase() === selectedState.toLowerCase())
        );
      }
    }
  }
}
