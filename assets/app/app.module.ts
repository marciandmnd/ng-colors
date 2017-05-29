import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { ColorFamilyPipe } from './color-family.pipe';
import { ColorService } from "./color/color.service";


@NgModule({
  declarations: [AppComponent, ColorFamilyPipe],
  imports: [BrowserModule, HttpModule],
  providers: [ColorService],
  bootstrap: [AppComponent]
})
export class AppModule {

}