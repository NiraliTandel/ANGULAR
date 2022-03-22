import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user-management.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(users: User[], searchText: string): User[] {
    if (searchText === "") {
      return users;
    }
    return users.filter((data: User) => {
      return data.firstname.toLowerCase().match(searchText.toLowerCase())
    });
  }

}
