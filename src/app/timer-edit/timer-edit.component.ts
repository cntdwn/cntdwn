import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PadLeftService } from '../pad-left.service';
import { DateParseService } from '../date-parse.service';
import { Goal } from '../goal';

@Component({
  selector: 'app-timer-edit',
  templateUrl: './timer-edit.component.html',
  styleUrls: ['./timer-edit.component.scss']
})
export class TimerEditComponent {
  @Output() goalChange = new EventEmitter();
  private g: Goal;
  constructor(private padLeftService: PadLeftService, 
              private dateParseService: DateParseService) { }

  set humanDate(val: string) {
    let d = this.dateParseService.parse(val);
    if (d) {
      this.g = new Goal(d, this.g.message);
      this.goalChange.emit(this.g);
    }
  }

  get humanDate(): string {
    return this.dateParseService.encode(this.goal.end);
  }

  get message(): string {
    return this.g.message;
  }

  set message(val: string) {
    if (val) {
      this.g = new Goal(this.g.end, val);
      this.goalChange.emit(this.g);
    }
  }

  set goal(val: Goal) {
    if (val) {
      this.g = val;
    }
  }

  @Input()
  get goal(): Goal {
    return this.g;
  }
}
