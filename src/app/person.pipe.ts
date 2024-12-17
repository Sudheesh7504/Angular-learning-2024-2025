import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'person'
})
export class PersonPipe implements PipeTransform {

  transform(person: any, wish: string): string {
    if(person.gender === 'male'){
      return `Hi MR. ${person.name} ${wish}`
    } else {
      return `Hi Miss. ${person.name} ${wish}`
    }
  }

}
