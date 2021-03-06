/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TimerComponent } from './timer.component';
import { TimerDisplayComponent } from '../timer-display/timer-display.component';
import { TimerEditComponent } from '../timer-edit/timer-edit.component';
import { PadZeroPipe } from '../pad-zero.pipe';
import { Goal } from '../goal';


describe('TimerComponent', () => {
  let component: TimerComponent;
  let fixture: ComponentFixture<TimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TimerComponent,
        TimerDisplayComponent,
        TimerEditComponent,
        PadZeroPipe
      ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerComponent);
    component = fixture.componentInstance;
    component.goal =  new Goal(new Date());
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
