import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Ng4ComponentComponent } from './ng4-component/ng4-component.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    Ng4ComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
