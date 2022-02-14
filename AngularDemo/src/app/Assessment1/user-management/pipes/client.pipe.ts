import { Pipe, PipeTransform } from '@angular/core';
import { Client } from '../models/user-management.model';

@Pipe({
  name: 'client'
})
export class ClientPipe implements PipeTransform {

  transform(value: number, client: Client[]): string {
    let name: string = ''
    client.find((object) => {
      if (object.id == value) {
        name = object.name
      }
    })
    return name;
  }

}
