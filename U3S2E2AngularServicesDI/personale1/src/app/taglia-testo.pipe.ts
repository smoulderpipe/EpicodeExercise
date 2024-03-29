import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tagliaTesto'
})
export class TagliaTestoPipe implements PipeTransform {

  transform(value: string): string {
    return value.slice(0,10) + "...";
  }

}
