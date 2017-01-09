import { Input, Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent {
  public isInEditMode = false;
  private date: Date;
  @Output() endChange = new EventEmitter();

  constructor() {
  }

  @Input()
  get end(): Date {
    return this.date;
  }

  set end(val: Date) {
    this.date = val;
    this.endChange.emit(val);
  }

  toggle() {
    this.isInEditMode = !this.isInEditMode;
  }
}
