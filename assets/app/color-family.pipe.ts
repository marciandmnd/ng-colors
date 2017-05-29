import { Pipe, PipeTransform } from '@angular/core';

import { Color } from './color/color.model';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 |  exponentialStrength:10}}
 *   formats to: 1024
*/
@Pipe({name: 'colorFamily'})
export class ColorFamilyPipe implements PipeTransform {
  transform(values: Color[], family: string): Color[] {
    if(family === "") {
      return values;
    }else {
    return values.filter( v => v.family == family );
      
    }
    // console.log(values);
    // let exp = parseFloat(exponent);
    // return Math.pow(value, isNaN(exp) ? 1 : exp);
    // return (value.family == "reds" ? values : null);
    // return value;
  }
}