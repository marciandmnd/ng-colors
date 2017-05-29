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
  colorFamily: string = "";

  constructor(private colorService: ColorService) {}

  ngOnInit() {
    this.colorService.getColors()
      .subscribe(
        (colors: Color[]) => {
          this.colors = colors;
        }
      );
  }

  setFamily(f) {
    this.colorFamily = f;
  }
  // toggleFamily() {
  //   let currFamily = this.colorFamily;
  //   this.colorFamily =  currFamily == 'reds' ? 'blues' : 'reds';
  // }
}