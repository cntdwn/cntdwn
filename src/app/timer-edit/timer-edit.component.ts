import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PadLeftService } from '../pad-left.service';
import { DateParseService } from '../date-parse.service';

@Component({
  selector: 'app-timer-edit',
  templateUrl: './timer-edit.component.html',
  styleUrls: ['./timer-edit.component.scss']
})
export class TimerEditComponent {
  @Output() endChange = new EventEmitter();
  private date: Date;
  constructor(private padLeftService: PadLeftService, 
              private dateParseService: DateParseService) { }

  set humanDate(val: string) {
    let d = this.dateParseService.parse(val);
    if (d) {
      this.end = d;
    }
  }

  get humanDate(): string {
    return this.dateParseService.encode(this.date);
  }

  set end(val: Date) {
    if (val) {
      this.date = val;
      this.endChange.emit(this.end);
    }
  }

  @Input()
  get end(): Date {
    return this.date;
  }
}
