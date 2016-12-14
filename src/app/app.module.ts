import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { TimerEditComponent } from './timer-edit/timer-edit.component';
import { TimerDisplayComponent } from './timer-display/timer-display.component';


@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    TimerEditComponent,
    TimerDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
