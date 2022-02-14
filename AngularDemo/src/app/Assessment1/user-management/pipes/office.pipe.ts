import { Pipe, PipeTransform } from '@angular/core';
import { Office } from '../models/user-management.model';

@Pipe({
  name: 'office'
})
export class OfficePipe implements PipeTransform {

  transform(value: number, office: Office[]): string {
    let name: string = ''
    office.find((object) => {
      if (object.id == value) {
        name = object.name
      }
    })
    return name;
  }

}
