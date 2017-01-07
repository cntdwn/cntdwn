/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { TimerDisplayComponent } from './timer-display/timer-display.component';
import { TimerEditComponent } from './timer-edit/timer-edit.component';
import { Location as Loc } from '@angular/common';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TimerComponent,
        TimerDisplayComponent,
        TimerEditComponent
      ],
      providers: [
        Loc,
        {provide: LocationStrategy, useClass: PathLocationStrategy}
      ]
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
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
