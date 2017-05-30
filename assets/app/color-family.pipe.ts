import { Pipe, PipeTransform } from '@angular/core';

import { Color } from './color/color.model';

@Pipe({name: 'families'})
export class ColorFamilyPipe implements PipeTransform {
  transform(values: Color[], families: string[]): Color[] {
    if(families.length === 0) {
      // return values;
      return values;
    }
    else {
      let famStr = families.join("|");
      let re = new RegExp(famStr);
      return values.filter( v => re.test(v.family) );
    }
  }
}