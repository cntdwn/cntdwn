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
import { DateParseService } from './date-parse.service';
import { PadZeroPipe } from './pad-zero.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    TimerEditComponent,
    TimerDisplayComponent,
    PadZeroPipe
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
    PadLeftService,
    DateParseService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
