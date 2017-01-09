import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer-edit',
  templateUrl: './timer-edit.component.html',
  styleUrls: ['./timer-edit.component.scss']
})
export class TimerEditComponent {
  @Output() endChange = new EventEmitter();
  private date: Date;
  constructor() { }

  set end(val: Date) {
    this.date = val;
    this.endChange.emit(this.end);
  }

  @Input()
  get end(): Date {
    return this.date;
  }
}
