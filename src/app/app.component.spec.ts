/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { TimerDisplayComponent } from './timer-display/timer-display.component';
import { TimerEditComponent } from './timer-edit/timer-edit.component';
import { Location } from '@angular/common';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { ParameterService } from './parameter.service';
import { PadLeftService } from './pad-left.service';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TimerComponent,
        TimerDisplayComponent,
        TimerEditComponent
      ],
      imports: [ FormsModule ],
      providers: [
        Location,
        ParameterService,
        PadLeftService,
        {provide: LocationStrategy, useClass: PathLocationStrategy},
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render timer', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let children = fixture.debugElement.children;
    let timerCounted = children.filter((item) => {
      return item.componentInstance instanceof TimerComponent;
    }).length;

    expect(timerCounted).toEqual(1);
  }));
});
