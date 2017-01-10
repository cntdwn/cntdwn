import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PadLeftService } from '../pad-left.service';

@Component({
  selector: 'app-timer-edit',
  templateUrl: './timer-edit.component.html',
  styleUrls: ['./timer-edit.component.scss']
})
export class TimerEditComponent {
  @Output() endChange = new EventEmitter();
  private date: Date;
  constructor(private padLeftService: PadLeftService) { }

  set humanDate(val: string) {
    let regex = /\d{2}\.\d{2}\.\d{4}/;
    if (regex.test(val)) {
      this.end = new Date(this.end.setUTCFullYear(parseInt(val.substring(6, 10), 10),
                                parseInt(val.substring(3, 5), 10) - 1,
                                parseInt(val.substring(0, 2), 10)));
    }
  }

  get humanDate(): string {
    let self = this;
    function pl(val: any) {
      return self.padLeftService.padLeft(2, '0', val);
    }
    return `${pl(this.date.getUTCDate())}.${pl(this.date.getUTCMonth() + 1)}.${this.date.getUTCFullYear()}`;
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
