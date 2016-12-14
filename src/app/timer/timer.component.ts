import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  public isInEditMode = false;
  public end: Date;

  constructor() {
  }

  ngOnInit() {
    let now = new Date();
    let yearFromNow = now;
    yearFromNow.setFullYear(now.getFullYear() + 1);
    this.end = yearFromNow;
  }

  toggle() {
    this.isInEditMode = !this.isInEditMode;
  }
}
