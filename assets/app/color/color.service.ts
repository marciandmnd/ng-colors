import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';

import { Color } from './color.model';

@Injectable()
export class ColorService {
  private colors: Color[];

  constructor(private http: Http){}

  getColors(){
    return this.http.get('http://localhost:3000/color')
      .map((response: Response) => {
        const colors = response.json().obj;
        let transformedColors: Color[] = [];
        for(let color of colors) {
          transformedColors.push(new Color(
            color.name,
            color.hex,
            color.family));
        }
        this.colors = transformedColors;
        return transformedColors;
      })
     .catch((error: Response) => {
        }
      );
  }
}