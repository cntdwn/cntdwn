import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { TimerEditComponent } from './timer-edit/timer-edit.component';
import { TimerDisplayComponent } from './timer-display/timer-display.component';
import { ParameterService } from './parameter.service';
import { PadLeftService } from './pad-left.service';

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
    HttpModule,
    CommonModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: PathLocationStrategy},
    ParameterService,
    PadLeftService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
