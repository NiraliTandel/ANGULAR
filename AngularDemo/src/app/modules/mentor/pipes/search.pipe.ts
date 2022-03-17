import { Pipe, PipeTransform } from '@angular/core';
import { Mentor } from '../mentor.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(mentors: Mentor[], searchText: string): Mentor[] {
    if (searchText === "") {
      return mentors;
    }
    return mentors.filter((data: Mentor) => {
      return data.name.toLowerCase().match(searchText.toLowerCase())
    });
  }
}