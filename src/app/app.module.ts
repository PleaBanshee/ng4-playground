import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Ng4ComponentComponent } from './ng4-component/ng4-component.component';

@NgModule({
  declarations: [
    AppComponent,
    Ng4ComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
