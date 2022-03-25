import { Pipe, PipeTransform } from '@angular/core';
import { Department } from '../mentor.model';

@Pipe({
  name: 'department'
})
export class DepartmentPipe implements PipeTransform {

  transform(value: number, department: Department[]): string {
    let name: string = ''
    department?.find((object) => {
      if (object.id == value) {
        name = object.name
      }
    })
    return name;
  }

}
