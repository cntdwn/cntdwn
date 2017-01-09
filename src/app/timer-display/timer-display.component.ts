import { Component, OnChanges, SimpleChanges, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TimerService } from '../timer.service';
import { Remaining } from '../remaining';


@Component({
  selector: 'app-timer-display',
  templateUrl: './timer-display.component.html',
  styleUrls: ['./timer-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ TimerService ]
})
export class TimerDisplayComponent implements OnChanges {
  @Input() public end: Date;
  public remaining: Remaining;

  constructor(private timerService: TimerService, private cd: ChangeDetectorRef) {

  }

  ngOnChanges(changes: SimpleChanges) {
    for(let propName in changes) {
      if (propName === 'end') {
        this.timerService.tick(this.end).subscribe((remaining: Remaining) => {
          this.remaining = remaining;
          this.cd.markForCheck();
        });
      }
    }
  }
}
