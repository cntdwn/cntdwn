import { Input, Component, Output, EventEmitter } from '@angular/core';
import { Goal } from '../goal';
import { PadLeftService } from '../pad-left.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  providers: [ PadLeftService ]
})
export class TimerComponent {
  public editMode = false;
  private g: Goal;
  @Output() goalChange = new EventEmitter();

  constructor() {
  }

  @Input()
  get goal(): Goal {
    return this.g;
  }

  set goal(val: Goal) {
    this.g = val;
    this.goalChange.emit(val);
  }

  toggle() {
    this.editMode = !this.editMode;
  }
}
