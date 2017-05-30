import { Component, OnInit } from '@angular/core';

import { Color } from "./color/color.model";
import { ColorService } from './color/color.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
  colors: Color[] = [];
  colorFamilies: string[] = ['reds', 'pinks'];
  activeFamilies: string[] = [];

  constructor(private colorService: ColorService) {}

  ngOnInit() {
    this.colorService.getColors()
      .subscribe(
        (colors: Color[]) => {
          this.colors = colors;
        }
      );
  }

  isActive(f) {
    if(this.activeFamilies.length > 0) {
      let famStr = this.activeFamilies.join('|');
      let re = new RegExp(famStr);
      // return false;
      return re.test(f);
    } else {
      return false;
    }
  }
  toggleFamily(f) {
    let temp = this.activeFamilies.slice();
    // let famStr = temp.join('|');
    // let re = new RegExp(famStr);
    if(temp.includes(f)) {
      temp.splice(temp.indexOf(f), 1);
    }
    else {
      temp.push(f);
    }
    this.activeFamilies = temp;
  }
}